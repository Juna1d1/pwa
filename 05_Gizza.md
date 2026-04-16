1. Killer Process (Manajemen Memori)

Mobile OS memiliki manajemen memori yang sangat agresif dibandingkan OS desktop karena keterbatasan RAM. Sistem menggunakan mekanisme "Killer Process" untuk menghentikan aplikasi berdasarkan prioritas guna menjaga stabilitas sistem.

Foreground: Aplikasi yang sedang dibuka dan berinteraksi langsung dengan pengguna. Memiliki prioritas tertinggi dan hampir tidak pernah dimatikan oleh sistem.

Background: Aplikasi yang tidak terlihat tetapi masih menjalankan fungsi tertentu (seperti mengunduh file atau sinkronisasi). Jika RAM penuh, ini adalah target pertama yang akan dihentikan.

Cache: Aplikasi yang sudah ditutup tetapi datanya masih disimpan di RAM agar saat dibuka kembali prosesnya lebih cepat. Ini adalah kategori pertama yang akan "dibersihkan" sistem jika memori dibutuhkan.

2. Komunikasi Antar Proses (IPC) & Mekanisme Kerja

Agar aplikasi dapat saling berinteraksi secara aman, Mobile OS menggunakan beberapa komponen:

Intent: Objek pesan yang digunakan untuk meminta tindakan dari komponen aplikasi lain (misalnya: membuka Maps dari aplikasi Gojek).

Eksplisit: Menyebutkan secara spesifik aplikasi mana yang harus dibuka.

Implisit: Meminta aksi umum (misal: "buka kamera"), lalu sistem memberikan pilihan aplikasi yang tersedia.

WorkManager: Digunakan untuk menjadwalkan tugas di latar belakang yang harus tetap berjalan meskipun aplikasi ditutup atau perangkat di-restart (misal: sinkronisasi data ke server).

Event Driven: Arsitektur sistem operasi seluler sangat bergantung pada kejadian (event), seperti sentuhan layar, sensor GPS, atau notifikasi masuk.

3. Keamanan Data & Enkripsi
Sistem operasi seluler modern (seperti Android dan iOS) menerapkan standar keamanan tinggi:

FBE (File-Based Encryption): Berbeda dengan enkripsi disk penuh, FBE memungkinkan file yang berbeda dienkripsi dengan kunci yang berbeda pula. Ini memungkinkan fitur seperti "Direct Boot," di mana alarm tetap bisa berbunyi atau telepon tetap bisa masuk meskipun pengguna belum memasukkan PIN setelah HP dinyalakan.

4. Optimalisasi Baterai & Resource
Bagian kanan bawah papan tulis menyinggung tentang Baterai dan status aplikasi:

Aktif vs Pasif: Sistem membedakan aplikasi yang aktif menggunakan CPU/Radio dengan yang pasif.

Battery Optimization: Mobile OS secara otomatis membatasi akses aplikasi ke jaringan atau sensor (seperti GPS dan Musik yang dicatat di papan) jika aplikasi tersebut sudah terlalu lama di background.

User Interface (UI) Components: Terdapat coretan mengenai komponen visual (mungkin merujuk pada penghematan daya melalui pengaturan tampilan atau dark mode pada panel layar).



Ringkasan Alur Kerja Mobile OS

Komponen	Fungsi Utama:

Killer Process:	Menjaga ketersediaan RAM dengan mematikan proses rendah prioritas.

Intent:	Jembatan komunikasi antar satu aplikasi dengan aplikasi lainnya.

FBE:	Melindungi data pengguna pada level file agar tetap aman saat terkunci.

Resource Manager:	Menyeimbangkan antara performa aplikasi dan daya tahan baterai.
