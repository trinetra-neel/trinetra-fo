/* TRINETRA F&O — offline shell only; trading records remain in browser storage / selected folder. */
const CACHE = 'trinetra-fo-pwa-1.0.12';
const PREFIX = 'trinetra-fo-pwa-';
const ROOT = new URL('./', self.registration.scope);
const SHELL = ['index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'].map(x=>new URL(x, ROOT).toString());
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req=event.request, url=new URL(req.url);
  if(req.method!=='GET' || url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(response=>{
      if(response.ok){const copy=response.clone(); event.waitUntil(caches.open(CACHE).then(cache=>cache.put(req,copy)))}
      return response;
    }).catch(async()=> (await caches.match(req)) || (await caches.match(new URL('index.html',ROOT).toString())) || Response.error()));
    return;
  }
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(response=>{
    if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(req,copy)))}
    return response;
  })));
});
