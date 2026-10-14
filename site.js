/* Briques communes à toutes les pages : nav avec sélecteur de site, pied de page, cartes. */
var FONTS = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Anton&family=Hanken+Grotesk:wght@400;500;600;700&display=swap';
var EXT = ' target="_blank" rel="noopener"';
var PLAY = '<i class="play"></i>';
var SHORTYEAR = 'https://shortyear.com';
var SWITCHER = false;

function esc(x) { return String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function thumb(id) { return 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg'; }
function watch(id) { return 'https://www.youtube.com/watch?v=' + id; }
function money(n) { return n ? '$' + n.toFixed(2) : 'Free'; }
function bySlug(s) { for (var i = 0; i < P.length; i++) if (P[i].s === s) return P[i]; return null; }
/* le paiement direct Podia, sans passer par sa page produit */
function buyUrl(p) { return PODIA + p.u + (p.o ? '/buy?offer_id=' + p.o : ''); }
/* le formulaire d'inscription intégrable fourni par Podia (Réglages > Email > Embedded email form) */
function nlAction() { return PODIA + 'email_lists/909271/subscriptions'; }
function productUrl(p) { return 'product.html?p=' + p.s; }
/* la vidéo du livre d'un produit, quand elle existe (les systèmes en ont plusieurs) */
function videosFor(p) { var key = p.vid || p.s; return VIDEOS.filter(function (v) { return v.p === key; }); }
/* la vidéo qui illustre un produit : celle désignée par cover, sinon la plus récente */
function coverVideo(p) { if (p.c === 'systems') return null; var vs = videosFor(p); for (var i = 0; i < vs.length; i++) if (vs[i].id === p.cover) return vs[i]; return vs[0] || null; }

/* le texte de l'étiquette violette */
function slipLabel(p) {
  if (p.c === 'systems') return p.sn + ' · ' + money(p.pr);
  if (p.c === 'challenges') return p.pr ? 'Challenge · ' + money(p.pr) : 'Free challenge';
  if (p.k === 'Premium blueprint') return 'Premium · ' + money(p.pr);
  return p.pr ? 'Blueprint · ' + money(p.pr) : 'Free blueprint';
}

function nav(current) {
  var L = [['channel', 'Videos', 'channel.html'], ['systems', 'Systems', 'library.html#systems'], ['blueprints', 'Blueprints', 'library.html#blueprints'], ['newsletter', 'Newsletter', 'newsletter.html']];
  /* sélecteur Antidote / Shortyear validé le 11 octobre 2026, masqué à la mise en ligne à la demande de Sheyenne : passer à true pour le remettre */
  var logo = !SWITCHER ? '<a class="sw-b" href="index.html"><i class="dot"></i>antidote</a>' :
    '<div class="sw"><button class="sw-b" id="sw-b" type="button" aria-expanded="false" aria-controls="sw-m"><i class="dot"></i>antidote' +
    '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></button>' +
    '<div class="menu" id="sw-m" hidden><small>Switch to</small>' +
    '<a class="mi on" href="index.html"><i class="dot"></i><div><b>Antidote</b><span>Book summaries, systems, and blueprints</span></div><em>✓</em></a>' +
    '<a class="mi" href="' + SHORTYEAR + '"><i class="dot sy"></i><div><b>Shortyear</b><span>The app that turns a year into 12 weeks</span></div><em>→</em></a></div></div>';
  return '<header class="nav"><div class="wrap">' + logo +
    '<nav class="links" aria-label="Main">' + L.map(function (l) { return '<a href="' + l[2] + '"' + (l[0] === current ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('') + '</nav>' +
    '<div class="right"><a class="btn v sm" href="' + PODIA + 'account/sessions/new"' + EXT + '>Log in</a><a class="btn sm" href="library.html">Browse the library</a></div></div></header>';
}

function footer() {
  return '<footer><div class="wrap"><span>© 2026 Antidote</span><nav><a href="' + YT_SUB + '"' + EXT + '>YouTube</a><a href="https://pinterest.com/antidote_thechannel/"' + EXT + '>Pinterest</a>' +
    '<a href="' + PODIA + 'terms-of-service"' + EXT + '>Terms</a><a href="' + PODIA + 'privacy-policy"' + EXT + '>Privacy</a></nav></div></footer>';
}

/* une vidéo et son produit : la paire de la liste */
function videoCard(v) {
  var p = v.p ? bySlug(v.p) : null;
  return '<article class="k"><a class="th-a" href="' + watch(v.id) + '"' + EXT + ' aria-label="Watch ' + esc(v.t) + ' on YouTube"><div class="th"><img src="' + thumb(v.id) + '" alt="" loading="lazy"></div></a>' +
    (p ? '<a class="slip" href="' + productUrl(p) + '">' + esc(slipLabel(p)) + ' →</a>' : '') +
    '<h3><a href="' + watch(v.id) + '"' + EXT + '>' + esc(v.t) + '</a></h3><p>' + esc(v.a) + '</p></article>';
}

function poster(p, i, cls) {
  return '<div class="poster p' + (i % 4) + (cls ? ' ' + cls : '') + '"><small>' + esc(p.k) + '</small><b>' + esc(p.sn || p.t) + '</b></div>';
}

/* un produit dans la bibliothèque : la miniature de sa vidéo, sinon une couverture violette */
function productCard(p, i) {
  var v = coverVideo(p);
  return '<article class="k" data-c="' + p.c + '"><a href="' + productUrl(p) + '" aria-label="' + esc(p.t) + '">' +
    (v ? '<div class="th"><img src="' + thumb(v.id) + '" alt="" loading="lazy"></div>' : poster(p, i)) + '</a>' +
    '<a class="slip" href="' + productUrl(p) + '">' + esc(slipLabel(p)) + ' →</a>' +
    '<h3><a href="' + productUrl(p) + '">' + esc(p.t) + '</a></h3><p>' + esc(p.by) + '</p></article>';
}

function systemCards() {
  return P.filter(function (p) { return p.c === 'systems'; }).map(function (p) {
    return '<a class="s" href="' + productUrl(p) + '"><span class="kk">' + esc(p.k) + '</span><h3>' + esc(p.sn) + '</h3><p>' + esc(p.h) + '</p>' +
      '<div class="f"><span class="pr">' + money(p.pr) + '</span><span class="btn sm' + (p.pr ? '' : ' g') + '">' + (p.pr ? 'See inside' : 'Get it free') + '</span></div></a>';
  }).join('');
}

function newsletterBand() {
  return '<div class="nl"><div><h2>Design a life you don’t want to escape from.</h2><p>1 email a week on human behavior, mindset, and strategic living.</p></div>' +
    '<form class="field" method="post" action="' + nlAction() + '" accept-charset="UTF-8"><input type="email" name="email" required placeholder="you@example.com" aria-label="Email address"><button class="btn v sm" type="submit">Sign me up</button></form></div>';
}

function mount(current, html) {
  var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = FONTS; document.head.appendChild(l);
  document.body.innerHTML = nav(current) + html + footer();
  var b = document.getElementById('sw-b'), m = document.getElementById('sw-m');
  if (m) {
  b.addEventListener('click', function (e) { e.stopPropagation(); m.hidden = !m.hidden; b.setAttribute('aria-expanded', String(!m.hidden)); });
  document.addEventListener('click', function (e) { if (!m.hidden && !m.contains(e.target)) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !m.hidden) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); b.focus(); } });
  }
  /* hauteur de page, lue par le script de capture */
  window.addEventListener('load', function () { setTimeout(function () { var d = document.documentElement; d.setAttribute('data-h', d.scrollHeight); d.setAttribute('data-w', d.scrollWidth); }, 300); });
}
