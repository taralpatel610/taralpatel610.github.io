self.addEventListener("install", function ( event ) {
    event.waitUntil(
        caches.open("jsmonthly").then(function (cache) {
            cache.addAll([
                "/index.html"
            ])
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.open("jsmonthly").then(function ( cache ) {
            return cache.match( event.request );
        }))
});