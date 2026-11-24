# Authoring a unit

Copy `content/m1.js` (the exemplar). One file = one `PH.unit({...})` call. No build step, no modules, no fetch.

## Hard rules
- Wrap ALL HTML/LaTeX text in `String.raw\`...\`` (backslashes are literal). Never write `${` inside. MCQ `choices` are plain strings: there, write `\\frac` (double backslash) or use String.raw too.
- Math: `$...$` inline, `$$...$$` display. Only KaTeX-supported LaTeX. Never use a bare `$` for dollars.
- Student background: very smart, calculus through multivariable calc and ODEs, **no prior physics**. Define every physics term the first time. Use derivatives/integrals/ODEs where they are the honest tool (the AP expects it). Do not teach beyond the AP unless it clearly helps learning.
- Voice: direct, concrete, no filler. Name common traps in `<div class="box trap">`; key ideas in `<div class="box key">`.
- Figures: inline `<svg class="fig" viewBox=... role="img" aria-label=...>` using `currentColor` only (dark mode). Include a figure wherever the AP would give one (FBDs, circuits, fields, graphs).
- MCQ: 8-12 per unit, 5 choices, `a` = index of the correct choice in `choices`. Choices get shuffled at render time, so NEVER write "all of the above", "both A and B", or refer to letters in `why`. Mix conceptual and calculation. Every `why` explains why the right answer is right AND the tempting wrong answer is wrong.
- FRQ: 1-2 per unit, AP-style (multi-part, derive / sketch / explain in words). `pts` rubric items sum to the total points; every part of the prompt maps to a rubric item. Include one qualitative "explain" part per FRQ when natural. `type` is one of: "Mathematical routines", "Translation between representations", "Experimental design & analysis", "Qualitative/quantitative translation".
- 3-5 `lessons` (each a short self-contained section, ~300-700 words), 3-4 `examples`. Lessons end up with a self-check checkbox automatically.
- `id`s unique within the unit. `course`: prereq|mech|em|skills. `order` controls sequence. `hours` is realistic study time for this student.
- Problems must be ORIGINAL (not copied from College Board or textbooks). Use g = 10 m/s² in numeric problems unless the unit says 9.8; state it.
- Every numeric answer must be correct. Double-check arithmetic; where feasible compute it with a quick python snippet and keep the snippet out of the file. In your final message list any answer you are less than certain about.
- Required fields: id, course, order, hours, title, blurb, needs, goals, lessons, examples, mcq, frq.

## Videos (added: the student loves conceptual explanations)
Each lesson gets `videos:[{title, url, src, note}]` (1-2 per lesson, only for MAIN concepts; skip trivial sections). `src` = channel/source, e.g. "3Blue1Brown", "MIT OCW 8.01", "Khan Academy", "Flipping Physics", "Veritasium", "Physics Girl", "Professor Dave", "Walter Lewin lectures", "The Organic Chemistry Tutor", "Fermilab/Minute Physics". Choose by context: intuition/visualization -> 3Blue1Brown/Veritasium; AP Physics C style problem solving -> Flipping Physics (has dedicated AP Physics C playlists), Khan Academy; calculus-based derivations -> MIT OCW / Walter Lewin.
**URL rule (strict):** use WebSearch (and WebFetch if allowed) to find real videos. Only include a URL you actually saw in search results or fetched, and that clearly matches the title. NEVER invent or reconstruct a video ID from memory. If you cannot find a verified video for a lesson, use a search link instead: `https://www.youtube.com/results?search_query=<url-encoded query>` with title like 'Search: ...' and src 'YouTube search'. Put a short `note` on what to watch for or what part is relevant (e.g. 'first 10 min'; only if you know it). List in your final report which videos were verified from search results vs. search-link fallbacks.

Scope rule from the tutor: conceptual but NOT over-taught. The goal is a 5 on the AP exam, not an MIT midterm. Prefer short, AP-aligned videos as the main ones; full university lectures are shown to the student as optional deeper intuition.
