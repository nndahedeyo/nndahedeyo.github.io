// jeni の控えの係：ホーム画面のアイコンから、つながらない場所でも開けるように、ページを端末に控える
// 中継（WebSocket）と置き場の大きなファイルには手を出さない。変換の部品（jsDelivr）は一度取ったら控えから
"use strict";
const V = "jeni-767bf7530912", LIB = "jenilib-1";
const SHELL = ["./", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("jeni-") && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url), scope = new URL(self.registration.scope);
  if (u.origin === scope.origin && u.pathname.startsWith(scope.pathname)) {
    // ページ：まず新しいものを取りにいき、つながらなければ控えから
    // 電波が弱いときは待たせない：新しいものが2.5秒で届かなければ控えから開き、届いたものは次に開くときのために控えておく
    const key = r.mode === "navigate" ? "./" : r;
    const net = fetch(r).then(res => { if (res.ok) { const cp = res.clone(); e.waitUntil(caches.open(V).then(c => c.put(key, cp))); } return res; });
    const old = () => caches.match(key, {ignoreSearch: true}).then(m => m || caches.match("./"));
    e.respondWith(new Promise(done => {
      let over = false; const t = setTimeout(() => old().then(m => { if (m && !over) { over = true; done(m); } }), 2500);
      net.then(res => { if (!over) { over = true; clearTimeout(t); done(res); } }, () => { clearTimeout(t); old().then(m => { if (!over) { over = true; done(m || Response.error()); } }); });
    }));
    return;
  }
  if (u.hostname === "cdn.jsdelivr.net" && /\/npm\/(@mediabunny\/aac-encoder|mediabunny)@[\d.]+\//.test(u.pathname)) {
    e.respondWith(caches.open(LIB).then(c => c.match(r).then(m => m || fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }))));
  }
});
// 知らせを押したら、jeni を前に出す（開いていなければ開く）
self.addEventListener("notificationclick", e => { e.notification.close();
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(cs => { const c = cs.find(x => x.url.startsWith(self.registration.scope)); return c ? c.focus() : self.clients.openWindow("./"); })); });
