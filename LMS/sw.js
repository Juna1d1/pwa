const CACHE = "lms-v5";
const CACHE_EXTERNAL = "lms-external-v1";

// Aset lokal — wajib biar app bisa booting offline
const ASSETS = [
    "/",
    "index.html",
    "manifest.json",
    "data.json",
    "favicon-192.png",
    "favicon-512.png",
    "js/database.js",
    "js/firebase-config.js",
    "js/auth.js"
];

// URL eksternal yang di-cache biar PWA tetap cantik offline
const EXTERNAL_URLS = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-regular-400.woff2",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2",
    "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js",
    "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"
];

self.addEventListener("install", e => {
    e.waitUntil(
        Promise.all([
            caches.open(CACHE).then(cache =>
                Promise.all(
                    ASSETS.map(url =>
                        cache.add(url).catch(() => console.warn('PWA: Gagal cache ' + url))
                    )
                )
            ),
            caches.open(CACHE_EXTERNAL).then(cache =>
                Promise.all(
                    EXTERNAL_URLS.map(url =>
                        cache.add(url).catch(() => console.warn('PWA: Gagal cache external ' + url))
                    )
                )
            )
        ])
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE && key !== CACHE_EXTERNAL) {
                        console.log("PWA: Hapus cache lama:", key);
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    e.waitUntil(self.clients.claim());
});

function cacheFirst(request) {
    return caches.match(request).then(res => {
        if (res) return res;
        return fetch(request).then(netRes => {
            if (netRes && netRes.ok) {
                const cache = request.url.startsWith(self.location.origin) ? CACHE : CACHE_EXTERNAL;
                caches.open(cache).then(c => c.put(request, netRes.clone()));
            }
            return netRes;
        }).catch(() => new Response('Offline', { status: 503 }));
    });
}

function networkFirst(request) {
    return fetch(request).then(res => {
        if (res && res.ok) {
            const cache = request.url.startsWith(self.location.origin) ? CACHE : CACHE_EXTERNAL;
            caches.open(cache).then(c => c.put(request, res.clone()));
        }
        return res;
    }).catch(() => caches.match(request).then(res => {
        if (res) return res;
        return new Response('Offline', { status: 503 });
    }));
}

self.addEventListener("fetch", e => {
    const url = e.request.url;

    // data.json: selalu ambil yg terbaru dari server, fallback ke cache
    if (url.includes('data.json')) {
        e.respondWith(networkFirst(e.request));
        return;
    }

    // External assets: cache first
    if (url.includes('firebase') || url.includes('googleapis') || url.includes('gstatic') || url.includes('cloudflare')) {
        e.respondWith(cacheFirst(e.request));
        return;
    }

    // Static local assets: cache first
    e.respondWith(cacheFirst(e.request));
});
