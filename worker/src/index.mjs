// Cloudflare Worker entry. All logic (and its tests) live in core.mjs.
import { createHandler } from "./core.mjs";

export default { fetch: createHandler() };
