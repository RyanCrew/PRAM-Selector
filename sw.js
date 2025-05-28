self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pram-selector-v1').then(cache => {
            return cache.addAll([
                './index.html',
                './icon.png',
                './icon-180.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
