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
  var items = L.map(function (l) { return '<a href="' + l[2] + '"' + (l[0] === current ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('');
  var login = PODIA + 'account/sessions/new';
  /* sur téléphone : un bouton menu qui ouvre un panneau plein écran (version A, choisie par Sheyenne le 14 octobre 2026) */
  return '<header class="nav"><div class="wrap">' + logo +
    '<nav class="links" aria-label="Main">' + items + '</nav>' +
    '<div class="right"><a class="btn v sm" href="' + login + '"' + EXT + '>Log in</a><a class="btn sm" href="library.html">Browse the library</a></div>' +
    '<button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mpanel"><svg class="ic-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg><svg class="ic-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
    '</header>' +
    '<div class="mpanel" id="mpanel" hidden><nav aria-label="Main">' + items + '</nav>' +
    '<div class="mp-cta"><a class="btn v" href="' + login + '"' + EXT + '>Log in</a><a class="btn" href="library.html">Browse the library</a></div></div>';
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
    (v ? '<div class="th"><img src="' + thumb(v.id) + '" alt="" loading="lazy"></div>' : p.img ? '<div class="th"><img src="' + p.img + '" alt="" loading="lazy"></div>' : poster(p, i)) + '</a>' +
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
    '<form class="field" novalidate method="post" action="' + nlAction() + '" accept-charset="UTF-8"><input type="email" name="email" placeholder="you@example.com" aria-label="Email address"><button class="btn v sm" type="submit">Sign me up</button></form></div>';
}

/* l'inscription part chez Podia dans un cadre invisible : le visiteur reste sur le site et voit un message à la place du formulaire */
function wireNewsletterForms() {
  var forms = document.querySelectorAll('form[action*="email_lists"]');
  if (!forms.length) return;
  var sink = document.createElement('iframe');
  sink.name = 'nl-sink'; sink.title = 'Newsletter sign-up'; sink.hidden = true; sink.tabIndex = -1;
  document.body.appendChild(sink);
  [].forEach.call(forms, function (f) {
    f.target = 'nl-sink';
    var inp = f.querySelector('input[type=email]');
    var err = f.parentNode.querySelector('.err');
    if (!err) { err = document.createElement('p'); err.className = 'err'; err.setAttribute('role', 'alert'); f.insertAdjacentElement('afterend', err); }
    inp.addEventListener('input', function () { err.textContent = ''; });
    f.addEventListener('submit', function (e) {
      var v = inp.value.trim();
      if (!v) { e.preventDefault(); err.textContent = 'Enter your email address first.'; inp.focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { e.preventDefault(); err.textContent = 'That email doesn’t look right. Check for a typo.'; inp.focus(); return; }
      setTimeout(function () {
        var ok = document.createElement('p'); ok.className = 'nl-ok'; ok.setAttribute('role', 'status');
        ok.innerHTML = '<b>Almost there.</b> Check your inbox and confirm your email to get the next issue.';
        f.replaceWith(ok); err.textContent = '';
      }, 0);
    });
  });
}

function mount(current, html) {
  var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = FONTS; document.head.appendChild(l);
  document.body.innerHTML = nav(current) + html + footer();
  var bg = document.getElementById('burger'), mp = document.getElementById('mpanel');
  function setMenu(open) {
    mp.hidden = !open; bg.setAttribute('aria-expanded', String(open)); bg.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.classList.toggle('menu-open', open);
  }
  bg.addEventListener('click', function () { setMenu(mp.hidden); });
  mp.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !mp.hidden) { setMenu(false); bg.focus(); } });
  var b = document.getElementById('sw-b'), m = document.getElementById('sw-m');
  if (m) {
  b.addEventListener('click', function (e) { e.stopPropagation(); m.hidden = !m.hidden; b.setAttribute('aria-expanded', String(!m.hidden)); });
  document.addEventListener('click', function (e) { if (!m.hidden && !m.contains(e.target)) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !m.hidden) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); b.focus(); } });
  }
  wireNewsletterForms();
  /* hauteur de page, lue par le script de capture */
  window.addEventListener('load', function () { setTimeout(function () { var d = document.documentElement; d.setAttribute('data-h', d.scrollHeight); d.setAttribute('data-w', d.scrollWidth); }, 300); });
}
