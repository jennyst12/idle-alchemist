const CACHE_NAME = 'idle-alchemist-v1';
const ASSETS = [
  '/idle-alchemist/',
  '/idle-alchemist/index.html',
  '/idle-alchemist/style.css',
  '/idle-alchemist/game.js',
  '/idle-alchemist/manifest.json',
  '/idle-alchemist/icon-192.png',
  '/idle-alchemist/icon-512.png',
  '/idle-alchemist/icon-180.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only handle GET requests for our own origin
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful responses for our assets
        if (response.ok && event.request.url.includes('/idle-alchemist/')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If offline and not cached, return the app shell for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/idle-alchemist/index.html');
        }
      });
    })
  );
});
