self.addEventListener("install", function ( event ) {
    event.waitUntil(
        caches.open("jsmonthly").then(function (cache) {
            cache.addAll([
                "/index.html",
                "/styles.css"
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

self.addEventListener("beforeinstallprompt", e => {
    console.log("beforeinstallprompt Event fired");
    e.preventDefault();
    this.deferredPrompt = e;
    return false;
});
  
this.deferredPrompt.prompt();

this.deferredPrompt.userChoice.then(choice => {
    console.log(choice);
});

this.deferredPrompt = null;