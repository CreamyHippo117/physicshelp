// Unit registry. Content files call PH.unit({...}). Works on file:// (no fetch, no modules).
window.PH = { units: [], unit(u){ this.units.push(u); } };
