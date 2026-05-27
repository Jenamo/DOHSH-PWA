const CACHE_NAME = 'dohsh-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './profile.jpg'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
});

// Fetch Assets
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
