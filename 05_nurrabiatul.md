WIRELESS MOBILE COMPUTING : MOBILE WS
1. Manajemen Sumber Daya Utama (The Big 3)
Dalam perangkat mobile, pengembang wajib menyeimbangkan tiga aset terbatas:

Baterai: Fokus pada efisiensi daya (contoh: membatasi aktivitas jika baterai di bawah 60%).

RAM: Kapasitas memori untuk menjalankan aplikasi.

Processor: Penggunaan CPU yang efisien agar HP tidak panas.

2. Manajemen Proses (Killer Process)
Sistem operasi membagi aplikasi ke dalam tingkatan prioritas untuk menentukan siapa yang boleh tetap berjalan di RAM:

Foreground: Aplikasi yang sedang aktif di depan layar (sedang digunakan).

Background: Aplikasi yang tidak terlihat tapi sedang bekerja (misal: Spotify memutar musik, atau WA/Telegram menunggu pesan masuk).

Cache: Aplikasi yang sudah ditutup tapi "disimpan" sementara agar cepat saat dibuka kembali. Jika RAM penuh,
proses inilah yang pertama kali dihapus oleh sistem.

3. Komunikasi Antar Proses (IPC) & Intent
Bagian ini menjelaskan bagaimana satu aplikasi berinteraksi dengan aplikasi lain atau sensor perangkat:

Explicit Intent: Memanggil tujuan yang spesifik.

Contoh: Menekan tombol "Buka Kamera" di dalam aplikasi Instagram.

Implicit Intent: Memberikan perintah umum dan membiarkan sistem memilih aplikasinya.

Contoh: Membuka file PDF, DOCX, atau HTML. Sistem akan bertanya: "Buka dengan Adobe Reader atau Google Drive?".
NFC (Near Field Communication): Komunikasi nirkabel jarak dekat.

Contoh: Menempelkan kartu e-money untuk cek saldo (sistem akan mendeteksi via Implicit Intent aplikasi 
mana yang bisa membaca kartu tersebut).

4. Penjadwalan Tugas & Antrean (Scheduling)
Agar aplikasi tidak crash saat melakukan banyak tugas, digunakan mekanisme:

WorkManager: Menjamin tugas selesai meskipun aplikasi ditutup.

Contoh: Mengunggah file besar ke server yang harus tetap berlanjut meskipun sinyal naik-turun.

Job Queue (Antrean): Digambarkan dengan diagram tumpukan (stack). Tugas diproses satu per satu (10s, 60s, 13s) 
agar tidak membebani CPU secara mendadak.

5. Optimasi Data & Sensor
Event-Driven: Aplikasi hanya bekerja jika ada "kejadian" tertentu (misal: ada notifikasi masuk atau lokasi berubah).

Monitoring Lokasi (Aktif vs Pasif):

Aktif: Mengunci GPS terus-menerus (akurat tapi boros baterai).

Pasif: "Menumpang" data lokasi dari aplikasi lain yang sudah aktif (jauh lebih hemat baterai).

Optimasi Query: Memastikan pengambilan data dalam aplikasi cepat dan tidak memakan banyak memori.

Kesimpulan Ringkas:
Inti dari pertemuan ini adalah "Bagaimana aplikasi bisa bekerja secara maksimal (mengelola file, NFC, dan pesan) 
tanpa merusak pengalaman pengguna (membuat HP lemot atau baterai cepat habis)."

=============================================================================================================================
WIRELESS MOBILE COMPUTING MENGGUNAKAN FRAMEWORK PREP

pembahasan Wireless Mobile Computing berfokus pada bagaimana sistem operasi mobile mengelola sumber daya melalui kerangka kerja atau mekanisme yang diistilahkan sebagai PREP (atau dalam konteks teknis sistem sering dikaitkan dengan Priority, Resource, Event, and Process Management).

Berikut adalah penjelasan rinci berdasarkan poin-poin yang tertulis di papan tulis:

1. Killer Proses (Manajemen Memori)
Dalam mobile computing, sumber daya RAM sangat terbatas. Sistem menggunakan mekanisme "Killer Proses" untuk menentukan aplikasi mana yang harus dihentikan guna menjaga stabilitas sistem. Hierarkinya adalah:

Foreground: Aplikasi yang sedang digunakan pengguna di layar. Ini memiliki prioritas tertinggi dan hampir tidak pernah dimatikan.

Background: Aplikasi yang tidak terlihat tetapi masih berjalan (misalnya pemutar musik).

Cache: Aplikasi yang disimpan di memori agar bisa dibuka kembali dengan cepat. Ini adalah target pertama yang akan dihapus jika sistem membutuhkan ruang.

2. Komunikasi Antar Proses (IPC)
Untuk membangun ekosistem aplikasi yang efisien, perangkat memerlukan cara agar satu aplikasi dapat berkomunikasi dengan aplikasi lainnya atau dengan sistem:

IPC (Inter-Process Communication): Mekanisme teknis pengiriman data antar aplikasi.

Workload Manager: Mengatur beban kerja agar CPU tidak bekerja terlalu keras secara terus-menerus, yang berdampak pada suhu dan baterai.

Keamanan Data: Memastikan data yang berpindah antar proses tetap terenkripsi (disebutkan sebagai File Based Encryption di papan tulis).

3. Event-Driven Architecture (Apps)
Aplikasi mobile modern bekerja berdasarkan Event (kejadian). Aplikasi tidak selalu aktif sepenuhnya, melainkan menunggu "pemicu" seperti:

Push Notifications: Server mengirimkan sinyal ke aplikasi.

Konektivitas: Perubahan status internet atau GPS.

Trigger Fisik: Seperti menempelkan perangkat ke tag NFC yang secara otomatis membuka aplikasi tertentu.

4. Optimalisasi Baterai (Power Management)
Papan tulis tersebut menekankan pada optimasi baterai melalui pembagian status aplikasi:

Aktif: Mengonsumsi daya penuh untuk performa maksimal.

Pasif: Mengurangi konsumsi daya (mode hemat) saat aplikasi tidak menjadi fokus utama pengguna.

Efisiensi Query: Mengoptimalkan cara aplikasi meminta data ke server agar tidak membuang daya baterai secara sia-sia.

Ringkasan Alur Kerja Framework
Secara visual, catatan Anda menunjukkan alur dari Input/Event (seperti interaksi user atau sensor) → Processing (diatur oleh Priority/Killer Proses) → Action/Output (aplikasi berjalan atau data tersimpan).

Hal ini dilakukan untuk menjaga keseimbangan antara:

User Experience: Aplikasi terasa cepat dan responsif.

Resource Efficiency: Penggunaan RAM, CPU, dan Baterai tetap minimal.

Security: Data tetap aman meskipun banyak proses yang berjalan secara bersamaan.
