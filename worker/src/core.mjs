// Physics C Coach: tutor proxy logic. Kept apart from index.mjs because Cloudflare rejects extra named exports on the entry file.
// The browser never sees the Anthropic API key. It sends {mode, context, messages} plus an access code;
// this Worker builds the system prompt, calls Claude, and streams the answer back as simple SSE events.
//
// Secrets / vars (see README.md):
//   ANTHROPIC_API_KEY  (secret, required)
//   ACCESS_CODE        (secret, required: the passcode you give the student)
//   ALLOWED_ORIGINS    (var: comma list of site origins; "null" = a file:// copy; "*" = any)
//   DAILY_TURN_CAP     (var, optional, default 200; needs the USAGE KV binding to be enforced)
//   MODEL_DEEP / MODEL_QUICK (vars, optional overrides)
import Anthropic from "@anthropic-ai/sdk";

const MODES = new Set(["hint", "explain", "check", "chat", "ping"]);
const LIM = { body: 120_000, msgs: 24, msgChars: 8000, ctxDefault: 4000, lessonText: 9000 };
const MAX_TOKENS = 10000;        // thinking + answer (a ceiling, not spend)
const MAX_TOKENS_CHECK = 16000;  // grading free-response work can think longer

export const BASE_PROMPT = `You are the on-call tutor inside a self-paced course app. The student is preparing for the AP Physics C: Mechanics and AP Physics C: Electricity & Magnetism exams in May 2027. They are exceptionally strong in math (single and multivariable calculus, ODEs, little linear algebra) and have never taken a physics course. Their goal is a 5 on both exams.

Teach what the AP tests, conceptually, and no deeper. This is not a university midterm. If the student asks about something beyond the exam, answer briefly, say it is beyond the AP, and steer back.

How to answer:
- Be concise. Usually under 200 words. Go longer only for a derivation or worked solution the student asked for.
- Lead with the physical idea, then the math. Define a physics term the first time you use it, since this student has never seen the vocabulary.
- Use calculus where it is the honest tool. Model good AP habits: derive symbolically first, check units, test limiting cases, and justify with named principles in words.
- Math: LaTeX with $...$ inline and $$...$$ for display. Otherwise plain text, short paragraphs, simple "-" lists. No headings, no tables, no emoji.
- Ask at most one question back, and only when it helps the student think.

Accuracy rules:
- The physics must be right. If you are unsure, say so.
- The course may give you a reference solution. It was written by an AI and can contain mistakes. If your own careful derivation disagrees with it, say so plainly and show why. Do not defer to it blindly.
- Never invent College Board scoring rules, exam format or dates. For those, tell the student to check the Official page in the app or AP Central.
- Stay on learning this material. Politely decline unrelated requests.`;

const MODE_PROMPTS = {
  hint: (hints) => `Mode: HINT. The student is stuck and has not asked for the answer. This is hint number ${hints} for this problem.
- Hint 1: the smallest useful nudge: name the key idea or the first step, or ask one guiding question. Do not reveal the answer.
- Hint 2: more specific: set up the relevant equation or diagram and say what to solve for. Still do not state the final result.
- Hint 3 or later: walk through a full worked solution.
Follow the level that matches this hint number.`,
  explain: () => `Mode: EXPLAIN. The student has answered and wants to understand. Explain why the correct answer is correct. If they chose a different answer, name the specific misconception behind their choice. Finish with one line they can remember for similar AP problems.`,
  check: () => `Mode: CHECK. The student submitted work on a free-response question. Grade it against the rubric the way an AP reader would: go item by item (earned or not, one short reason each), give the total, name the first substantive error and the idea behind it, and give one concrete thing to practice. Give credit for correct physics even with imperfect notation, and follow-through credit for consistent later work after an earlier error. If the work is empty or too thin to grade, ask the student to write out an attempt first.`,
  chat: () => `Mode: CHAT. Answer the student's question about this material. When they seem to be working something out, prefer a guiding question over a full answer. When they ask for an explanation, give a clear one.`,
};

const CTX_LABELS = [
  ["unit", "Unit"], ["lesson", "Lesson section"], ["lessonText", "Lesson text (source, may contain LaTeX)"],
  ["question", "Question"], ["choices", "Answer choices"], ["studentChoice", "Student chose"], ["correctChoice", "Correct choice per the course"],
  ["reference", "Reference explanation or solution from the course (may contain mistakes)"],
  ["frqPrompt", "Free-response prompt"], ["rubric", "Rubric (points)"], ["studentWork", "Student's work"],
];

export function buildSystem(mode, ctx, hints) {
  const parts = [BASE_PROMPT, (MODE_PROMPTS[mode] || MODE_PROMPTS.chat)(hints)];
  const lines = [];
  for (const [k, label] of CTX_LABELS) {
    let v = ctx[k];
    if (Array.isArray(v)) v = v.map((c, i) => `${"ABCDE"[i] || i + 1}) ${c}`).join("\n");
    if (typeof v === "string" && v.trim()) lines.push(`${label}:\n${v.trim()}`);
  }
  if (lines.length) parts.push("Context from the app:\n\n" + lines.join("\n\n"));
  return parts.join("\n\n");
}

function clean(ctx) {
  const out = {};
  if (!ctx || typeof ctx !== "object") return out;
  for (const [k] of CTX_LABELS) {
    let v = ctx[k];
    if (Array.isArray(v)) v = v.slice(0, 6).map((c) => String(c).slice(0, 600));
    else if (v != null) v = String(v).slice(0, k === "lessonText" ? LIM.lessonText : LIM.ctxDefault);
    if (v != null) out[k] = v;
  }
  return out;
}

export function validate(body) {
  if (!body || typeof body !== "object") return "Bad request.";
  if (!MODES.has(body.mode)) return "Unknown mode.";
  if (body.mode === "ping") return null;
  if (!Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > LIM.msgs) return "Bad message list.";
  for (const m of body.messages) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") return "Bad message.";
    if (m.content.length > LIM.msgChars) return "A message is too long.";
  }
  if (body.messages[body.messages.length - 1].role !== "user") return "Last message must be from the student.";
  return null;
}

async function sameSecret(a, b) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([crypto.subtle.digest("SHA-256", enc.encode(String(a))), crypto.subtle.digest("SHA-256", enc.encode(String(b)))]);
  const x = new Uint8Array(ha), y = new Uint8Array(hb);
  let d = 0;
  for (let i = 0; i < x.length; i++) d |= x[i] ^ y[i];
  return d === 0;
}

function friendly(err) {
  if (err instanceof Anthropic.RateLimitError) return "The tutor is busy right now. Try again in a minute.";
  if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) return "The tutor's API key was rejected. Tell your tutor.";
  if (err instanceof Anthropic.BadRequestError && /credit balance/i.test(String(err.message))) return "The tutor's API credits have run out. Tell your tutor.";
  if (err instanceof Anthropic.APIConnectionError) return "Could not reach the AI service. Try again.";
  if (err instanceof Anthropic.APIError) return `The tutor hit an error (code ${err.status}). Try again, and tell your tutor if it keeps happening.`;
  return "Something went wrong with the tutor. Try again.";
}

export function createHandler({ createClient = (env) => new Anthropic({ apiKey: env.ANTHROPIC_API_KEY }) } = {}) {
  return async function handle(request, env) {
    const origin = request.headers.get("Origin");
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const originOk = !origin || allowed.includes("*") || allowed.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes("*") ? "*" : origin || "",
      "Access-Control-Allow-Headers": "content-type, x-access-code",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };
    const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json", "cache-control": "no-store", ...(origin && originOk ? cors : {}) } });

    if (!originOk) return json({ error: "This site is not allowed to use the tutor." }, 403);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: origin ? cors : {} });
    if (request.method !== "POST") return json({ error: "POST only." }, 405);
    if (!env.ACCESS_CODE || !env.ANTHROPIC_API_KEY) return json({ error: "The tutor server is not set up yet (missing secrets)." }, 500);

    const code = request.headers.get("x-access-code") || "";
    if (!(await sameSecret(code, env.ACCESS_CODE))) return json({ error: "Wrong access code." }, 401);

    const raw = await request.text();
    if (raw.length > LIM.body) return json({ error: "Request too large." }, 413);
    let body;
    try { body = JSON.parse(raw); } catch { return json({ error: "Bad JSON." }, 400); }
    const bad = validate(body);
    if (bad) return json({ error: bad }, 400);

    const cap = Math.max(1, parseInt(env.DAILY_TURN_CAP || "200", 10) || 200);
    if (body.mode === "ping") return json({ ok: true, keyConfigured: true, dailyTurnCap: cap, capEnforced: !!env.USAGE });

    const day = new Date().toISOString().slice(0, 10);
    const usageKey = `usage:${day}`;
    let used = { turns: 0, in: 0, out: 0 };
    if (env.USAGE) {
      used = (await env.USAGE.get(usageKey, "json")) || used;
      if (used.turns >= cap) return json({ error: "The tutor's daily limit has been reached. It resets at 00:00 UTC." }, 429);
    }

    const quick = body.quick === true;
    const model = quick ? env.MODEL_QUICK || "claude-sonnet-5-5" : env.MODEL_DEEP || "claude-opus-5-5";
    const hints = Math.min(5, Math.max(1, parseInt(body.hints, 10) || 1));
    const system = buildSystem(body.mode, clean(body.context), hints);
    let messages = body.messages.map((m) => ({ role: m.role, content: m.content }));
    while (messages.length && messages[0].role !== "user") messages.shift();

    const client = createClient(env);
    const stream = client.beta.messages.stream({
      model,
      max_tokens: body.mode === "check" ? MAX_TOKENS_CHECK : MAX_TOKENS,
      system,
      messages,
      thinking: { type: "adaptive" },
      output_config: { effort: body.mode === "check" ? "high" : "medium" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
    });

    const enc = new TextEncoder();
    const out = new ReadableStream({
      async start(controller) {
        const send = (o) => controller.enqueue(enc.encode(`data: ${JSON.stringify(o)}\n\n`));
        // SSE comment every few seconds so the browser can tell "still thinking" from "connection died".
        const beat = setInterval(() => { try { controller.enqueue(enc.encode(": ping\n\n")); } catch { /* closed */ } }, Math.max(10, parseInt(env.HEARTBEAT_MS || "15000", 10) || 15000));
        try {
          let thinkingSent = false;
          for await (const ev of stream) {
            if (ev.type === "content_block_start" && ev.content_block.type === "thinking" && !thinkingSent) { thinkingSent = true; send({ t: "think" }); }
            else if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") send({ t: "text", v: ev.delta.text });
          }
          const final = await stream.finalMessage();
          if (final.stop_reason === "refusal") send({ t: "text", v: "\n\nI can't help with that one. If you think that is a mistake, rephrase the question or ask your tutor." });
          else if (final.stop_reason === "max_tokens") send({ t: "text", v: "\n\n(I ran out of room. Ask me to continue.)" });
          const u = final.usage || {};
          const inTok = (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0);
          const outTok = u.output_tokens || 0;
          if (env.USAGE) {
            try { await env.USAGE.put(usageKey, JSON.stringify({ turns: used.turns + 1, in: used.in + inTok, out: used.out + outTok }), { expirationTtl: 172800 }); } catch { /* the cap is best-effort */ }
          }
          send({ t: "done", model, in: inTok, out: outTok });
        } catch (err) {
          send({ t: "error", v: friendly(err) });
        } finally {
          clearInterval(beat);
          controller.close();
        }
      },
      cancel() { /* the heartbeat is cleared when start() finishes */ try { stream.controller.abort(); } catch { /* already finished */ } },
    });
    return new Response(out, { headers: { "content-type": "text/event-stream", "cache-control": "no-store", "x-accel-buffering": "no", ...(origin ? cors : {}) } });
  };
}
