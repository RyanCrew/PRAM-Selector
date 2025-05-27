self.addEventListener('install', event
=> {
event.waitUntil(
caches.open('pram-selector-
v1').then(cache => {
return cache.addAll([
'./Pramv1.html',
'./icon.png'
]);
})
);
});
self.addEventListener('fetch', event =>
{
event.respondWith(
caches.match(event.request).then(res
ponse => {
return response ||
fetch(event.request);
})
);
});
