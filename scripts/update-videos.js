// Ajoute en tête de data.js les nouvelles vidéos de la chaîne, lues dans le flux YouTube.
// Lancé chaque jour par GitHub (.github/workflows/deploy.yml) : la dernière vidéo devient le héros de l'accueil.
// Une nouvelle vidéo est reliée à un produit quand le titre du produit apparaît dans le titre de la vidéo.
const fs = require('fs');
const path = require('path');

const FEED = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCQUnqaW8Q33siyLYhisN7HQ';
const FILE = path.join(__dirname, '..', 'data.js');

function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

// « How to RESTART YOUR LIFE | The Mountain Is You (Animated Book Summary) » donne « The Mountain Is You »
function shortTitle(full) {
  const paren = full.match(/\(([^)]+)\)/);
  if (paren && !/summary|part \d/i.test(paren[1])) return paren[1].trim();
  let t = full.split(' | ')[0];
  if (/^how to|^the daily/i.test(t) && full.includes(' | ')) t = full.split(' | ')[1];
  return t.replace(/\s*\((animated|detailed)[^)]*\)/i, '').replace(/\s+by\s+.+$/i, '').replace(/\s+(explained\s+)?in\s+\d+\s+minutes$/i, '').trim();
}

function norm(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }

async function main() {
  const res = await fetch(FEED);
  if (!res.ok) throw new Error('Flux YouTube indisponible : ' + res.status);
  const xml = await res.text();
  const entries = xml.split('<entry>').slice(1).map(e => ({
    id: (e.match(/<yt:videoId>([^<]+)</) || [])[1],
    full: decode((e.match(/<title>([^<]*)</) || [])[1] || ''),
    d: ((e.match(/<published>([^<]+)</) || [])[1] || '').slice(0, 10)
  })).filter(e => e.id);

  const src = fs.readFileSync(FILE, 'utf8');
  const ctx = {};
  new Function('ctx', src + ';ctx.VIDEOS=VIDEOS;ctx.P=P;ctx.PODIA=PODIA;ctx.YT_SUB=YT_SUB;')(ctx);
  const known = new Set(ctx.VIDEOS.map(v => v.id));
  const fresh = entries.filter(e => !known.has(e.id)).map(e => {
    const t = shortTitle(e.full);
    const prod = ctx.P.find(p => p.c !== 'systems' && norm(e.full).includes(norm(p.t)));
    return { id: e.id, t: t, full: e.full, d: e.d, a: prod ? prod.by : '', p: prod ? prod.s : '' };
  });
  if (!fresh.length) { console.log('Aucune nouvelle vidéo.'); return; }
  ctx.VIDEOS = fresh.concat(ctx.VIDEOS);
  const head = src.slice(0, src.indexOf('var PODIA='));
  fs.writeFileSync(FILE, head + 'var PODIA=' + JSON.stringify(ctx.PODIA) + ';\nvar YT_SUB=' + JSON.stringify(ctx.YT_SUB) +
    ';\nvar VIDEOS=' + JSON.stringify(ctx.VIDEOS, null, 1) + ';\nvar P=' + JSON.stringify(ctx.P, null, 1) + ';\n');
  console.log('Ajoutées : ' + fresh.map(v => v.t + (v.p ? ' -> ' + v.p : ' (sans produit)')).join(', '));
}

main().catch(e => { console.error(e.message); process.exit(1); });
