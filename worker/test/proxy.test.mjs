import assert from "node:assert/strict";
import Anthropic from "@anthropic-ai/sdk";
import { createHandler, buildSystem, validate } from "../src/core.mjs";

const sse = (events) => events.map((e) => `event: ${e.type}\ndata: ${JSON.stringify(e)}\n\n`).join("");
function okStream(text = "Hello student.", extra = {}) {
  return sse([
    { type: "message_start", message: { id: "msg_1", type: "message", role: "assistant", model: "m", content: [], stop_reason: null, usage: { input_tokens: 1200, output_tokens: 1 } } },
    { type: "content_block_start", index: 0, content_block: { type: "thinking", thinking: "", signature: "" } },
    { type: "content_block_stop", index: 0 },
    { type: "content_block_start", index: 1, content_block: { type: "text", text: "" } },
    ...text.match(/.{1,6}/g).map((c) => ({ type: "content_block_delta", index: 1, delta: { type: "text_delta", text: c } })),
    { type: "content_block_stop", index: 1 },
    { type: "message_delta", delta: { stop_reason: extra.stop || "end_turn", stop_sequence: null }, usage: { output_tokens: 321 } },
    { type: "message_stop" },
  ]);
}
let calls = [];
function mockFetch(mode = "ok") {
  return async (url, init) => {
    calls.push({ url: String(url), headers: Object.fromEntries(new Headers(init.headers)), body: JSON.parse(init.body) });
    if (mode === "credit") return new Response(JSON.stringify({ type: "error", error: { type: "invalid_request_error", message: "Your credit balance is too low to access the Anthropic API." } }), { status: 400, headers: { "content-type": "application/json" } });
    if (mode === "refusal") return new Response(okStream("Partial", { stop: "refusal" }), { headers: { "content-type": "text/event-stream" } });
    return new Response(okStream(), { headers: { "content-type": "text/event-stream" } });
  };
}
const kv = () => { const m = new Map(); return { get: async (k) => (m.has(k) ? JSON.parse(m.get(k)) : null), put: async (k, v) => m.set(k, v), m }; };
const env = (o = {}) => ({ ANTHROPIC_API_KEY: "sk-ant-TESTKEY", ACCESS_CODE: "open-sesame", ALLOWED_ORIGINS: "https://good.example,null", ...o });
const handler = (mode) => createHandler({ createClient: (e) => new Anthropic({ apiKey: e.ANTHROPIC_API_KEY, fetch: mockFetch(mode), maxRetries: 0 }) });
const req = (body, h = {}, method = "POST") => new Request("https://w.example/", { method, headers: { "content-type": "application/json", "x-access-code": "open-sesame", ...h }, body: method === "POST" ? JSON.stringify(body) : undefined });
const good = { mode: "chat", messages: [{ role: "user", content: "Why is a=-kv exponential?" }], context: { unit: "Mechanics 1", lessonText: "L".repeat(20000) } };
async function events(res) { return (await res.text()).split("\n\n").filter(Boolean).map((l) => JSON.parse(l.replace(/^data: /, ""))); }
let n = 0; const t = async (name, f) => { await f(); n++; console.log("ok -", name); };

await t("rejects missing/wrong access code", async () => {
  assert.equal((await handler()(req(good, { "x-access-code": "nope" }), env())).status, 401);
  assert.equal((await handler()(req(good, { "x-access-code": "" }), env())).status, 401);
});
await t("refuses to run unconfigured (never an open proxy)", async () => {
  assert.equal((await handler()(req(good), env({ ACCESS_CODE: "" }))).status, 500);
  assert.equal((await handler()(req(good), env({ ANTHROPIC_API_KEY: "" }))).status, 500);
});
await t("CORS: bad origin 403, good origin echoed, preflight ok, file:// 'null' ok", async () => {
  assert.equal((await handler()(req(good, { Origin: "https://evil.example" }), env())).status, 403);
  const r = await handler()(req(good, { Origin: "https://good.example" }), env({})); assert.equal(r.headers.get("access-control-allow-origin"), "https://good.example"); await r.text();
  const p = await handler()(req(null, { Origin: "https://good.example" }, "OPTIONS"), env()); assert.equal(p.status, 204);
  const f = await handler()(req(good, { Origin: "null" }), env()); assert.equal(f.status, 200); await f.text();
});
await t("only POST", async () => assert.equal((await handler()(req(null, {}, "GET"), env())).status, 405));
await t("ping validates code without calling the API", async () => {
  calls = []; const r = await handler()(req({ mode: "ping" }), env()); assert.equal((await r.json()).ok, true); assert.equal(calls.length, 0);
});
await t("validation", async () => {
  assert.ok(validate({ mode: "x" })); assert.ok(validate({ mode: "chat", messages: [] }));
  assert.ok(validate({ mode: "chat", messages: [{ role: "assistant", content: "hi" }] }));
  assert.ok(validate({ mode: "chat", messages: [{ role: "user", content: "x".repeat(9000) }] }));
  assert.ok(validate({ mode: "chat", messages: Array(30).fill({ role: "user", content: "a" }) }));
  assert.equal(validate(good), null);
  assert.equal((await handler()(req({ mode: "chat", messages: "no" }), env())).status, 400);
  assert.equal((await handler()(new Request("https://w.example/", { method: "POST", headers: { "x-access-code": "open-sesame" }, body: "{not json" }), env())).status, 400);
});
await t("streams text, thinking marker and usage; upstream request is well-formed", async () => {
  calls = []; const res = await handler()(req(good), env()); assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type"), /text\/event-stream/);
  const ev = await events(res);
  assert.equal(ev[0].t, "think");
  assert.equal(ev.filter((e) => e.t === "text").map((e) => e.v).join(""), "Hello student.");
  const done = ev.at(-1); assert.equal(done.t, "done"); assert.equal(done.in, 1200); assert.equal(done.out, 321); assert.equal(done.model, "claude-opus-5-5");
  const c = calls[0]; assert.match(c.url, /\/v1\/messages/);
  assert.equal(c.body.model, "claude-opus-5-5"); assert.equal(c.body.stream, true); assert.equal(c.body.max_tokens, 10000);
  assert.deepEqual(c.body.thinking, { type: "adaptive" }); assert.equal(c.body.output_config.effort, "medium");
  assert.equal(c.body.fallbacks, "default"); assert.match(c.headers["anthropic-beta"], /server-side-fallback-2026-07-01/);
  for (const k of ["temperature", "top_p", "top_k"]) assert.ok(!(k in c.body), k + " must not be sent");
  assert.ok(c.body.system.includes("never taken a physics course") && c.body.system.includes("Mode: CHAT") && c.body.system.includes("Mechanics 1"));
  assert.ok(c.body.system.length < 9000 + 6000, "lessonText capped"); assert.equal(c.body.messages.at(-1).role, "user");
  assert.equal(c.headers["authorization"], "Bearer sk-ant-TESTKEY");
});
await t("the API key never appears in anything sent to the browser", async () => {
  for (const mode of ["ok", "credit"]) { const r = await handler(mode)(req(good), env()); assert.ok(!(await r.text()).includes("TESTKEY")); }
});
await t("quick mode uses Sonnet; check mode uses high effort; hint level is in the prompt", async () => {
  calls = []; await (await handler()(req({ ...good, quick: true }), env())).text(); assert.equal(calls[0].body.model, "claude-sonnet-5-5");
  calls = []; await (await handler()(req({ ...good, mode: "check" }), env())).text(); assert.equal(calls[0].body.output_config.effort, "high"); assert.equal(calls[0].body.max_tokens, 16000); assert.ok(calls[0].body.system.includes("Mode: CHECK"));
  calls = []; await (await handler()(req({ ...good, mode: "hint", hints: 2 }), env())).text(); assert.ok(calls[0].body.system.includes("hint number 2"));
  assert.ok(buildSystem("explain", { choices: ["a", "b"] }, 1).includes("A) a\nB) b"));
});
await t("heartbeat comments keep a slow answer alive", async () => {
  const slow = createHandler({ createClient: (e) => new Anthropic({ apiKey: e.ANTHROPIC_API_KEY, maxRetries: 0, fetch: async () => { await new Promise((r) => setTimeout(r, 300)); return new Response(okStream(), { headers: { "content-type": "text/event-stream" } }); } }) });
  const raw = await (await slow(req(good), env({ HEARTBEAT_MS: "20" }))).text();
  assert.ok((raw.match(/^: ping$/gm) || []).length >= 3, "expected several heartbeats while waiting");
  assert.ok(raw.includes('"t":"done"'));
});
await t("model overrides come from env", async () => {
  calls = []; await (await handler()(req(good), env({ MODEL_DEEP: "claude-opus-4-8" }))).text(); assert.equal(calls[0].body.model, "claude-opus-4-8");
});
await t("upstream credit error becomes a friendly SSE error", async () => {
  const ev = await events(await handler("credit")(req(good), env())); assert.equal(ev.at(-1).t, "error"); assert.match(ev.at(-1).v, /credits have run out/);
});
await t("refusal adds a note", async () => {
  const ev = await events(await handler("refusal")(req(good), env())); assert.ok(ev.some((e) => e.t === "text" && /can't help/.test(e.v)));
});
await t("daily cap via KV: counts turns and then blocks", async () => {
  const USAGE = kv(); const e = env({ USAGE, DAILY_TURN_CAP: "2" });
  for (let i = 0; i < 2; i++) await (await handler()(req(good), e)).text();
  const r = await handler()(req(good), e); assert.equal(r.status, 429); assert.match((await r.json()).error, /daily limit/);
  assert.equal([...USAGE.m.values()].map((v) => JSON.parse(v).turns)[0], 2);
});
console.log(`\n${n} tests passed`);
