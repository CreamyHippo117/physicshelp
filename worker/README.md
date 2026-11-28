# Tutor server (Cloudflare Worker)

Lets the app's AI tutor use your Anthropic API credits **without putting your API key in the browser**. The Worker holds the key, builds the tutor prompt on the server, calls Claude, and streams the answer back. Cloudflare's free plan should be enough for this (I have not verified current plan limits; check Cloudflare's pricing page).

You do this once, in your own terminal. Do not paste your API key into a chat or a file in this repo.

## One-time setup
1. Make a free Cloudflare account (cloudflare.com).
2. In the Anthropic Console, create a **separate API key just for this app** (so you can revoke it without touching anything else). If your plan offers a spend limit, set one.
3. In a terminal:
   ```bash
   cd worker
   npm install
   npx wrangler login
   ```
4. Store the two secrets. Wrangler prompts you to type each value; nothing is echoed or saved in files:
   ```bash
   npx wrangler secret put ANTHROPIC_API_KEY
   npx wrangler secret put ACCESS_CODE
   ```
   `ACCESS_CODE` is any passcode you choose and give the student. The Worker refuses every request without it, and refuses to run at all if either secret is missing.
5. If the app is hosted at a web address, add that address to `ALLOWED_ORIGINS` in `wrangler.toml` (comma-separated). The default `"null"` allows a downloaded copy opened from disk.
6. Deploy:
   ```bash
   npx wrangler deploy
   ```
   It prints a URL like `https://physics-coach-tutor.<you>.workers.dev`.
7. Check it. This costs nothing and does not call the API:
   ```bash
   curl -s -X POST https://YOUR-WORKER-URL -H 'content-type: application/json' -H 'x-access-code: YOUR-CODE' -d '{"mode":"ping"}'
   ```
   You should see `{"ok":true,...}`.
8. Give the student the URL and the code. They paste them into the app under **Settings > AI tutor**. Or put the URL in `js/config.js` (`tutorUrl`) and run `python3 build.py` so only the code is needed.

## Limits that protect your credits
- **Credits are the hard cap.** When the balance is gone, the tutor says so and stops.
- **Per-device daily limit** (`dailyTurns` in `js/config.js`, default 80 questions a day).
- **Server-side daily limit** (`DAILY_TURN_CAP`, default 200 a day) once you add a KV store: run `npx wrangler kv namespace create USAGE`, paste the id into the commented block in `wrangler.toml`, redeploy. Without it the limit is not enforced on the server.
- Output length is capped (10,000 tokens per answer including thinking; 16,000 when checking free-response work), and the number and size of messages are capped.
- Rotate the `ACCESS_CODE` (`wrangler secret put` again) to cut off anyone who learns it. Revoke the API key in the Console to stop everything.

## Models and cost
- **Full answers:** `claude-opus-5-5` (about $4 in / $20 out per million tokens as of the last price check; confirm on Anthropic's pricing page).
- **Quick answers** toggle in the tutor panel: `claude-sonnet-5-5` (about half the price).
- Change either with `MODEL_DEEP` / `MODEL_QUICK` in `wrangler.toml`.
- My estimate, not a measurement: a typical tutoring turn is about 2k tokens in and 1k out, roughly 3 cents on the full model. $100 would cover on the order of 3,000 such turns. The app shows token totals so you can check.

## Tests
`npm test` runs the Worker with the real SDK against a simulated Anthropic API: access control, CORS, validation, streaming, the request sent upstream, error handling and the daily cap. It has not been run against the live API.
