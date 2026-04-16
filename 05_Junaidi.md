1. Klasifikasi Proses (Mobile System Behavior)
Di kiri tertulis:
1. Foreground
Proses yang aktif digunakan user (misalnya aplikasi yang sedang dibuka di layar).
Prioritas tinggi → tidak mudah dihentikan sistem.
Contoh: kamu lagi buka WhatsApp, itu foreground.
2. Background
Proses yang berjalan tapi tidak terlihat langsung.
Biasanya untuk tugas seperti sync data, notifikasi, dll.
Contoh: aplikasi email ngecek pesan baru.
3. Cache
Proses/aplikasi yang sudah tidak aktif tapi disimpan sementara.
Tujuannya supaya buka lagi jadi cepat.
Ini penting di mobile karena resource terbatas (RAM & baterai).

Dalam Wireless & Mobile Computing, ini berkaitan dengan:

efisiensi resource
manajemen energi (battery-aware computing)

2. Komunikasi Antar Proses (IPC)
Tertulis:

IPC (Inter-Process Communication)
Cara aplikasi saling berkomunikasi.
Di Android → pakai Intent.

Contoh:

App A kirim data ke App B (misalnya share foto)
Work Manager
Untuk menjalankan task di background secara terjadwal & stabil
Cocok untuk:
upload data
sinkronisasi ke server
Keamanan Data
Karena komunikasi antar proses → harus aman
Berkaitan dengan:
permission
enkripsi
sandboxing
Event Driven
Sistem mobile bekerja berbasis event (kejadian)
Contoh:
klik tombol
notifikasi masuk
perubahan jaringan

Ini penting di mobile karena:

hemat energi
tidak terus menerus polling

3. Prioritas Sistem Mobile
Di bagian atas kanan:

Prioritas utama:
Interaksi (User Interaction)
Respons cepat ke user
UI harus smooth
GPS & Music
Aplikasi real-time / streaming
Butuh resource stabil
Cache
Prioritas paling rendah

Ini berkaitan dengan:
QoS (Quality of Service) dalam mobile computing
bagaimana sistem mengatur resource terbatas

4. Arsitektur Aplikasi Mobile
Tertulis:
1. Native
Aplikasi dibuat khusus untuk platform (Android/iOS)
Performa tinggi
Akses penuh ke hardware
2. Hybrid
Campuran web + native
Pakai WebView / framework seperti:
Ionic
Cordova

Dalam Wireless & Mobile Computing:
Native → lebih efisien untuk resource & jaringan
Hybrid → lebih cepat develop tapi kadang lebih berat

5. Sensor & Context Awareness
Ada tulisan:
NFC
API
dll
NFC (Near Field Communication)
Komunikasi jarak dekat (tap kartu, e-money)
API
Penghubung antara aplikasi dengan:
hardware (GPS, kamera)
layanan internet

Ini masuk ke konsep:
Context-Aware Computing

aplikasi bisa menyesuaikan berdasarkan:
lokasi
waktu
aktivitas user

6. Optimasi Sistem Mobile
Tertulis:
Optimasi → efisiensi

Tujuannya:
hemat baterai
hemat data
performa stabil

Teknik:
batching data
caching
compress data
adaptive sync

7. Aktif vs Pasif
Aktif
Sistem/app secara aktif jalan
Contoh: GPS tracking real-time
Pasif
Menunggu event
Contoh: notifikasi push

Ini berkaitan dengan:
energy efficiency
mobile device harus hemat daya

8. Battery & Resource Awareness
Di bawah ada:
Battery
Apps

Maknanya:
Semua desain mobile harus mempertimbangkan:
baterai
CPU
RAM
jaringan

Ini inti dari Wireless & Mobile Computing:
Resource terbatas → harus efisien
Kesimpulan Besar
Materi di papan ini sebenarnya menjelaskan:
Bagaimana sistem mobile (Android) mengelola proses, komunikasi, dan resource dalam lingkungan wireless

Intinya:
Proses dibagi: foreground, background, cache
Komunikasi pakai IPC & intent
Sistem berbasis event (event-driven)
Harus efisien (battery & network aware)
Ada interaksi dengan sensor & jaringan (GPS, NFC, API)
Aplikasi bisa native atau hybrid
Optimasi sangat penting
