// Crée une page de redirection pour chaque ancienne adresse Podia (liens des descriptions YouTube, anciens e-mails).
// Une adresse connue mène à la bonne page du nouveau site ; toute autre adresse (404.html) repart vers Podia, même chemin.
// À relancer après un ajout de produit : node scripts/make-redirects.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8');
const ctx = {};
new Function('ctx', src + ';ctx.P=P;ctx.PODIA=PODIA;')(ctx);

// ancienne adresse Podia -> page du nouveau site (relative à la racine du site)
const MAP = {
  'p/home': 'index.html',
  'blueprints': 'library.html#blueprints',
  'notion-tools': 'library.html#systems',
  'challengesheets': 'library.html#blueprints',
  'challenge-sheets': 'library.html#blueprints',
  'newsletter': 'newsletter.html',
  'the-12-week-year-notion-planner': 'product.html?p=12-week-year'
};
for (const p of ctx.P) MAP[p.u] = 'product.html?p=' + p.s;

function page(target) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex">' +
    '<title>Antidote</title><link rel="canonical" href="' + target + '">' +
    '<script>location.replace(document.querySelector("link[rel=canonical]").href);</script>' +
    '<meta http-equiv="refresh" content="0; url=' + target + '"></head>' +
    '<body style="background:#08070C;color:#F2F0F7;font-family:system-ui,sans-serif;padding:40px">' +
    '<a href="' + target + '" style="color:#B7A6FF">Continue to Antidote</a></body></html>\n';
}

let n = 0;
for (const [from, to] of Object.entries(MAP)) {
  const depth = from.split('/').length;
  const dir = path.join(ROOT, from);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page('../'.repeat(depth) + to));
  n++;
}

// toute autre adresse : même chemin chez Podia (pages de paiement, compte client, blog, produits retirés du site)
const shop = ctx.PODIA.replace(/\/$/, '');
const notFound = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Antidote</title><script>' +
  'var p = location.pathname.replace(/^\\/antidote-site\\//, "/");' +
  'location.replace(' + JSON.stringify(shop) + ' + p + location.search + location.hash);' +
  '</script></head><body style="background:#08070C"></body></html>\n';
fs.writeFileSync(path.join(ROOT, '404.html'), notFound);
console.log(n + ' redirections et 404.html écrits');
