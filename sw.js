self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pram-selector-v2').then(cache => {
            return cache.addAll([
                './index.html',
                './icon.png',
                './icon-180.png',
                './favicon-32.png'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== 'pram-selector-v2').map(name => caches.delete(name))
            );
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
