// SW reset — hapus semua cache lama, selalu ambil dari server
self.addEventListener('install', () => self.skipWaiting());

// Membersihkan seluruh penyimpanan cache yang ada di browser saat Service Worker baru diaktifkan
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    );
    // Mengambil kendali atas semua halaman (clients) yang terbuka secara instan
    e.waitUntil(self.clients.claim());
});

// Jika perangkat offline (gagal fetch), kembalikan respon error 503 Service Unavailable.
self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request).catch(() => new Response('Offline', { status: 503 })));
});
