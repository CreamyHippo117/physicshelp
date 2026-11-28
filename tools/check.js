// Render check for every unit tab. Run after ANY content edit:  NODE_PATH=$(npm root -g) node tools/check.js [unitId ...]
// Fails on: validation errors, page/console errors, KaTeX errors, leftover "$" (swallowed or unrendered math), SVG labels clipped by their viewBox.
const { chromium } = require('playwright'); const path = require('path');
const URL = 'file://' + path.resolve(__dirname, '..', 'index.html');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 900, height: 900 } }); const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e)); p.on('console', m => { if (m.type() === 'error' && !/Failed to load|ERR_/.test(m.text())) errs.push('console: ' + m.text()); });
  await p.goto(URL); await p.waitForTimeout(200);
  const info = await p.evaluate(() => ({ v: PH_APP.validate(), ids: PH_APP.units.map(u => u.id) }));
  info.v.forEach(x => errs.push('validate: ' + x));
  const want = process.argv.slice(2), ids = want.length ? info.ids.filter(i => want.includes(i)) : info.ids;
  const leftover = () => p.evaluate(() => [...document.querySelectorAll('#tabbody *, #qs *')].filter(e => !e.closest('.katex') && [...e.childNodes].some(c => c.nodeType === 3 && c.textContent.includes('$'))).map(e => e.textContent.slice(0, 60)));
  for (const id of ids) for (const tab of ['learn', 'examples', 'practice', 'frq']) {
    await p.goto(URL + '#/unit/' + id + '/' + tab); await p.waitForTimeout(40);
    if (tab === 'practice') {
      const n = await p.evaluate(() => PH_APP.units.find(u => u.id === location.hash.split('/')[2]).mcq.length);
      for (let i = 0; i < n; i++) { (await leftover()).forEach(x => errs.push(`${id}/practice q${i + 1}: leftover $ "${x}"`)); await p.locator('.choice').first().click(); (await leftover()).forEach(x => errs.push(`${id}/practice q${i + 1} feedback: leftover $ "${x}"`)); const k = await p.locator('.katex-error').count(); if (k) errs.push(`${id}/practice q${i + 1}: ${k} katex errors`); await p.locator('#nx').click(); }
    } else {
      if (tab !== 'learn') await p.evaluate(() => document.querySelectorAll('details').forEach(d => d.open = true));
      await p.waitForTimeout(60);
      (await leftover()).forEach(x => errs.push(`${id}/${tab}: leftover $ "${x}"`));
      const k = await p.locator('.katex-error').count(); if (k) errs.push(`${id}/${tab}: ${k} katex errors`);
      const clip = await p.evaluate(() => [...document.querySelectorAll('svg')].flatMap(s => { const vb = s.viewBox.baseVal; if (!vb || !vb.width) return []; return [...s.querySelectorAll('text')].filter(t => !t.closest('[transform]')).map(t => { const bb = t.getBBox(); return (bb.x + bb.width > vb.x + vb.width + 1 || bb.x < vb.x - 1 || bb.y + bb.height > vb.y + vb.height + 1 || bb.y < vb.y - 1) ? t.textContent.slice(0, 30) : null; }).filter(Boolean); }));
      clip.forEach(x => errs.push(`${id}/${tab}: svg label clipped "${x}"`));
    }
  }
  console.log(`${ids.length} units checked; ${errs.length} problems`); errs.slice(0, 60).forEach(e => console.log('  ' + e)); await b.close(); process.exit(errs.length ? 1 : 0);
})();
