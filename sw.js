// Guarda la app para que abra sin conexión; siempre intenta primero la versión nueva.
const CACHE = 'metanutricion-v8';
const FILES = ['./', './index.html', './privacidad.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './fonts/fonts.css', './fonts/Inter-latin-6ab57b.woff2', './fonts/Inter-latin-ext-b6db4a.woff2', './fonts/SpaceGrotesk-latin-4ecc7e.woff2', './fonts/SpaceGrotesk-latin-ext-c0b223.woff2'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
