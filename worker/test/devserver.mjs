// Local stand-in for the deployed tutor: the REAL worker code + the REAL SDK, with a simulated Anthropic API behind it.
import http from "node:http";
import Anthropic from "@anthropic-ai/sdk";
import { createHandler } from "../src/index.mjs";
export const calls = [];
const sse = (events) => events.map((e) => `event: ${e.type}\ndata: ${JSON.stringify(e)}\n\n`).join("");
function reply(text) {
  return sse([
    { type: "message_start", message: { id: "m", type: "message", role: "assistant", model: "claude-opus-5-5", content: [], stop_reason: null, usage: { input_tokens: 900, output_tokens: 1 } } },
    { type: "content_block_start", index: 0, content_block: { type: "thinking", thinking: "", signature: "" } }, { type: "content_block_stop", index: 0 },
    { type: "content_block_start", index: 1, content_block: { type: "text", text: "" } },
    ...text.match(/[\s\S]{1,14}/g).map((c) => ({ type: "content_block_delta", index: 1, delta: { type: "text_delta", text: c } })),
    { type: "content_block_stop", index: 1 },
    { type: "message_delta", delta: { stop_reason: "end_turn", stop_sequence: null }, usage: { output_tokens: 150 } }, { type: "message_stop" },
  ]);
}
const fakeFetch = async (u, init) => {
  const body = JSON.parse(init.body); calls.push(body);
  const last = body.messages.at(-1).content, mode = /Mode: (\w+)/.exec(body.system)[1];
  if (/CREDIT/.test(last)) return new Response(JSON.stringify({ type: "error", error: { type: "invalid_request_error", message: "Your credit balance is too low" } }), { status: 400, headers: { "content-type": "application/json" } });
  return new Response(reply(`**${mode}** reply. Think about what stays constant.\n\n- Use $a=-kv$\n- Then $$v=v_0e^{-kt}$$\n\nIn <b>plain</b> words: it decays.`), { headers: { "content-type": "text/event-stream" } });
};
const env = { ANTHROPIC_API_KEY: "sk-ant-DEV", ACCESS_CODE: "sesame", ALLOWED_ORIGINS: "null,http://localhost:8799" };
const handle = createHandler({ createClient: (e) => new Anthropic({ apiKey: e.ANTHROPIC_API_KEY, fetch: fakeFetch, maxRetries: 0 }) });
export function start(port = 8799) {
  const srv = http.createServer(async (req, res) => {
    if (req.url === "/_calls") { res.setHeader("content-type", "application/json"); return res.end(JSON.stringify(calls)); }
    const chunks = []; for await (const c of req) chunks.push(c);
    const r = new Request("http://localhost" + req.url, { method: req.method, headers: req.headers, body: ["GET", "HEAD"].includes(req.method) ? undefined : Buffer.concat(chunks) });
    const out = await handle(r, env);
    res.writeHead(out.status, Object.fromEntries(out.headers));
    if (out.body) for await (const c of out.body) res.write(c);
    res.end();
  });
  return new Promise((ok) => srv.listen(port, () => ok(srv)));
}
if (process.argv[1].endsWith("devserver.mjs")) { await start(); console.log("dev tutor on 8799"); }
