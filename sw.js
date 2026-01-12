self.addEventListener('fetch', function(event) {
  // Este código permite que la app funcione mejor en red
  event.respondWith(fetch(event.request));
});
