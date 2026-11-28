# Physics C Coach

Self-paced prep for **AP Physics C: Mechanics** and **AP Physics C: E&M**, built for a strong math student (calculus through ODEs) who has never taken physics.

## Use it
Open `index.html` in a browser (no server or build step), or host the folder on GitHub Pages. Progress is saved in the browser; use **Settings > Export** to back it up.

Course order: Prerequisites (5 units) > Mechanics 1-7 > E&M 1-5 > Exam skills. Each unit has lessons, worked examples, MCQ practice, and paper-first FRQs with rubric self-scoring. Missed MCQs return in the **Review** queue (spaced 1, 3, 7, 16, 35 days). **Mixed quiz** and **Timed set** interleave topics. The **Plan** page projects finish dates from the exam date and weekly hours and reserves the last 4 weeks for timed practice.

## AI tutor (optional)
Hints, explanations and rubric-based checking of free-response work, using your Anthropic API credits through a small server that keeps the key out of the browser. Setup is in `worker/README.md`. The hosted claude.ai page cannot call outside servers, so the tutor is only available in the downloaded `dist/physics-c-coach.html` or a copy hosted elsewhere.

## Verify before relying on it
- `js/examfacts.js` holds exam format and links and is marked **unverified** (the build environment could not reach College Board). The exam dates (Mechanics May 3, E&M May 5, 2027) came from the tutor. Confirm the format and the past-FRQ links, then set `verified: true`.
- Videos are from search results and were not watched; some are YouTube search links. Spot-check them.
- MCQ answer keys were checked by a second, blind solve. FRQ numbers were checked by their authors only.

## Add or edit content
See `docs/AUTHORING.md`. One file per unit in `content/`, registered in `content/manifest.js`.

## One-file build
`python3 build.py` packs everything into `dist/physics-c-coach.html` (about 1.4 MB, fonts and math included, works offline). Send that single file, or host it anywhere. Rebuild after editing content.
