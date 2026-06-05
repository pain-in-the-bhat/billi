const CACHE_NAME = 'billi-v1';
const ASSETS = [
    './',
    './index.html',
    './css/app.css',
    './js/app.js',
    './manifest.json',
    './img/jiji.png',
    './img/happyjiji.png',
    './img/icon-192.png',
    './img/icon-512.png',
    './fonts/pixel-emulator.ttf',
    './IdleCatb.png',
    './JumpCatb.png',
    './SleepCatb.png',
    './poker.png',
    'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js',
    'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) return response;

            return fetch(event.request).then((fetchResponse) => {
                if (!fetchResponse || fetchResponse.status !== 200) return fetchResponse;

                const responseClone = fetchResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });

                return fetchResponse;
            });
        })
    );
});
