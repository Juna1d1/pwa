Percakapan dengan Gemini
Dalam pertemuan matkul Wireless Mobile computing ini membahas tentang teknologi Mobile Web dan aplikasi menggunakan framework PREP. tolong jelaskan lebih detail lagi

Berdasarkan catatan di papan tulis tersebut, pembahasan utama berfokus pada perbandingan strategi pengembangan aplikasi mobile menggunakan framework PREP (Performance, Resources, Experience, Progress) untuk memilih teknologi yang paling tepat.

Materi tersebut membandingkan tiga jenis utama arsitektur aplikasi: Native, Hybrid, dan PWA (Progressive Web Apps). Berikut adalah penjelasan detail dari poin-poin yang tertera:

1. Metrik Perbandingan (Kolom Dimensi)
Papan tulis tersebut mencantumkan beberapa aspek kritis yang harus dipertimbangkan sebelum membangun aplikasi:

Akses Hardware: Seberapa dalam aplikasi bisa mengakses fitur perangkat (kamera, GPS, NFC, sensor).

Performa (Performance): Kecepatan eksekusi dan kelancaran antarmuka pengguna (UI).

Biaya & Tim (Cost & Team): Sumber daya manusia dan anggaran yang dibutuhkan.

Distribusi: Cara pengguna mendapatkan aplikasi tersebut.

Pilihan Tepat: Kesimpulan kapan sebaiknya menggunakan teknologi tersebut.

2. Analisis Teknologi Aplikasi
A. Native Application
Ini adalah aplikasi yang dibangun khusus untuk platform tertentu (misal: Swift untuk iOS, Kotlin/Java untuk Android).

Akses Hardware: Full (NFC, Kamera, dll.). Memiliki integrasi terdalam.

Performa: Sangat Tinggi (High).

Biaya & Tim: Tinggi. Anda butuh tim berbeda untuk Android dan iOS, yang berarti biaya pengembangan dan pemeliharaan berlipat ganda.

Distribusi: Melalui toko aplikasi resmi (Play Store, App Store).

Pilihan Tepat: Digunakan untuk aplikasi yang berat seperti AR/VR atau game dengan grafis tinggi.
Percakapan dengan Gemini
Dalam pertemuan matkul Wireless Mobile computing ini membahas tentang teknologi Mobile Web dan aplikasi menggunakan framework PREP. tolong jelaskan lebih detail lagi

Berdasarkan catatan di papan tulis tersebut, pembahasan utama berfokus pada perbandingan strategi pengembangan aplikasi mobile menggunakan framework PREP (Performance, Resources, Experience, Progress) untuk memilih teknologi yang paling tepat.

Materi tersebut membandingkan tiga jenis utama arsitektur aplikasi: Native, Hybrid, dan PWA (Progressive Web Apps). Berikut adalah penjelasan detail dari poin-poin yang tertera:

1. Metrik Perbandingan (Kolom Dimensi)
Papan tulis tersebut mencantumkan beberapa aspek kritis yang harus dipertimbangkan sebelum membangun aplikasi:

Akses Hardware: Seberapa dalam aplikasi bisa mengakses fitur perangkat (kamera, GPS, NFC, sensor).

Performa (Performance): Kecepatan eksekusi dan kelancaran antarmuka pengguna (UI).

Biaya & Tim (Cost & Team): Sumber daya manusia dan anggaran yang dibutuhkan.

Distribusi: Cara pengguna mendapatkan aplikasi tersebut.

Pilihan Tepat: Kesimpulan kapan sebaiknya menggunakan teknologi tersebut.

2. Analisis Teknologi Aplikasi
A. Native Application
Ini adalah aplikasi yang dibangun khusus untuk platform tertentu (misal: Swift untuk iOS, Kotlin/Java untuk Android).

Akses Hardware: Full (NFC, Kamera, dll.). Memiliki integrasi terdalam.

Performa: Sangat Tinggi (High).

Biaya & Tim: Tinggi. Anda butuh tim berbeda untuk Android dan iOS, yang berarti biaya pengembangan dan pemeliharaan berlipat ganda.

Distribusi: Melalui toko aplikasi resmi (Play Store, App Store).

Pilihan Tepat: Digunakan untuk aplikasi yang berat seperti AR/VR atau game dengan grafis tinggi.

B. Hybrid Application
Aplikasi yang ditulis menggunakan teknologi web (HTML, CSS, JS) tetapi dibungkus dalam kontainer native.

Akses Hardware: Menggunakan Plugin (seperti Capacitor, Cordova, atau React Native) untuk menjembatani kode web ke hardware.

Performa: Menengah (Medium).

Biaya & Tim: Lebih efisien karena satu basis kode bisa untuk banyak platform (Write Once, Run Anywhere).

Distribusi: Tetap melalui Play Store & App Store.

Pilihan Tepat: Cocok untuk aplikasi bisnis atau App POS (Point of Sales) yang tidak membutuhkan grafis ultra-berat.

C. PWA (Progressive Web Apps)
Aplikasi web yang dirancang agar terlihat dan berperan seperti aplikasi native.

Akses Hardware: Terbatas pada standar Web API yang didukung browser.

Performa: Bergantung pada browser dan penggunaan Service Workers (untuk fitur offline).

Biaya & Tim: Paling rendah (Low) karena pada dasarnya adalah pengembangan web.

Distribusi: Melalui browser (Web/URL). Tidak perlu masuk ke Play Store.

Pilihan Tepat: Cocok untuk konten informasi atau layanan yang ingin cepat diakses tanpa proses instalasi yang rumit.

3. Framework PREP
Dalam konteks Wireless Mobile Computing, framework ini digunakan sebagai panduan pengambilan keputusan:

P (Performance): Jika butuh kecepatan maksimal -> Pilih Native.

R (Resources): Jika sumber daya tim terbatas -> Pilih Hybrid atau PWA.

E (Experience): Jika pengalaman pengguna harus sangat mulus dan terintegrasi dengan OS -> Pilih Native.

P (Progress): Jika butuh iterasi cepat dan update instan tanpa menunggu persetujuan toko aplikasi -> Pilih PWA.
