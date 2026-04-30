P1: Fondasi (Wireless vs Mobile Computing)
Point: Perbedaan mendasar terletak pada media transmisi versus kemampuan berpindah lokasi.

Reason: Wireless berfokus pada penghilangan kabel menggunakan gelombang radio, sedangkan Mobile berfokus pada aksesibilitas sistem saat pengguna bergerak.

Example: Mouse nirkabel adalah contoh Wireless saja karena tidak berpindah jauh; laptop yang digunakan di kereta tanpa internet adalah contoh Mobile saja; sedangkan smartphone dengan 5G adalah contoh keduanya.

Point: Jadi, Wireless adalah teknologinya, sementara Mobile adalah karakteristik penggunaannya.

P2: Mobilitas (Handover)
Point: Soft Handoff adalah metode yang lebih unggul untuk layanan komunikasi suara (voice call).

Reason: Metode ini menggunakan prinsip "make-before-break", yang berarti perangkat terhubung ke pemancar baru sebelum memutuskan hubungan lama, sehingga tidak ada jeda suara.

Example: Saat kita menelepon sambil berkendara melewati batas wilayah BTS, Soft Handoff mencegah telepon mati tiba-tiba, berbeda dengan Hard Handoff yang memutus koneksi sebelum menyambung kembali.

Point: Oleh karena itu, untuk menjaga kontinuitas layanan tanpa interupsi, Soft Handoff adalah standar yang lebih baik.

P3: Jaringan (IEEE Standards & Mode)
Point: Standar IEEE membedakan cakupan jaringan, sementara mode infrastruktur membedakan cara perangkat terhubung.

Reason: Standar yang benar adalah 802.15 (WPAN), 802.11 (WLAN), dan 802.16 (WMAN); perbedaan mode terletak pada ada tidaknya pusat kendali.

Example: Mode Ad-Hoc seperti mengirim file via Bluetooth langsung antar hp, sedangkan Infrastructure Mode seperti semua laptop di kelas terhubung ke satu Access Point WiFi yang sama.

Point: Pemilihan standar dan mode harus disesuaikan dengan luas area dan kebutuhan manajemen jaringan.

P4: OS Mobile (Arsitektur & Sandbox)
Point: Arsitektur OS mobile terdiri dari lapisan terstruktur, dan sandboxing diterapkan untuk keamanan tingkat tinggi.

Reason: Empat lapisan (Kernel, Libraries, Framework, App) memisahkan fungsi sistem; sandboxing lebih ketat di mobile karena perangkat menyimpan data pribadi yang sangat sensitif.

Example: Di mobile, aplikasi Instagram tidak bisa mengambil data dari aplikasi perbankan tanpa izin sistem karena tiap aplikasi berada dalam "kotak" (sandbox) yang terisolasi.

Point: Struktur ini menjamin bahwa stabilitas sistem dan privasi pengguna tetap terjaga dari ancaman aplikasi berbahaya.

P5: OS Lanjutan (Proses & Intent)
Point: Android mengelola memori melalui hierarki proses dan mengarahkan komunikasi antar komponen melalui Intent.

Reason: LMK (Low Memory Killer) menghapus proses dari urutan terbawah (proses kosong) ke atas; Intent memisahkan instruksi yang spesifik (Eksplisit) dan instruksi umum (Implisit).

Example: Menggunakan Intent Eksplisit untuk membuka profil user di app sendiri, dan Intent Implisit saat menekan tombol "Bagikan" yang memunculkan pilihan aplikasi lain.

Point: Pemahaman ini penting agar aplikasi tetap efisien dalam penggunaan baterai dan memori.

P6: Mobile Web (Strategi Pengembangan)
Point: Strategi Hybrid atau PWA adalah rekomendasi terbaik untuk kasus budget terbatas namun butuh 2 platform.

Reason: Metode ini memungkinkan satu tim pengembang menulis satu kode untuk Android dan iOS, menghemat biaya dan waktu secara signifikan.

Example: Aplikasi inventaris gudang yang fungsionalitasnya cukup standar sangat cocok dikembangkan dengan framework Hybrid seperti Flutter daripada membuat dua aplikasi Native yang mahal.

Point: Dengan mempertimbangkan konteks bisnis, efisiensi sumber daya menjadi prioritas utama dibanding penggunaan teknologi paling mutakhir.

Fitur / Dimensi	Native	Hybrid	PWA
Biaya (Budget)	Tinggi (Perlu 2 tim/proyek)	Rendah/Menengah (1 proyek)	Sangat Rendah
Waktu Dev	Lambat	Cepat	Sangat Cepat
Performa	Sangat Halus	Baik	Cukup (Tergantung Browser)
Akses Hardware	Full (Sangat Luas)	Luas (via Plugin)	Terbatas
Platform	Spesifik (Play/App Store)	Multiplatform (Play/App Store)	Web Browser (Tanpa Store)
Kebutuhan Inventaris	Berlebihan untuk fitur standar	Sangat Pas & Efisien	Sangat Efisien

1. Biaya (Budget)
Native: Memiliki biaya paling mahal karena kamu harus mengembangkan dua aplikasi terpisah menggunakan bahasa pemrograman yang berbeda (misalnya Java/Kotlin untuk Android dan Swift untuk iOS).

Hybrid: Lebih murah karena menggunakan satu basis kode untuk kedua platform, sehingga hanya memerlukan satu tim pengembang saja.

PWA: Paling hemat biaya karena pada dasarnya adalah sebuah website yang dioptimalkan agar berperilaku seperti aplikasi, sehingga tidak perlu biaya pendaftaran ke toko aplikasi (Store).

2. Waktu Pengembangan (Dev Time)
Native: Memerlukan waktu lama karena proses coding dan testing harus dilakukan dua kali untuk memastikan kecocokan di setiap sistem operasi.

Hybrid: Jauh lebih cepat karena kamu cukup menulis kode satu kali lalu "dibungkus" agar bisa berjalan di Android dan iOS sekaligus.

PWA: Sangat cepat karena tidak terikat oleh aturan ketat dari Google Play Store atau Apple App Store, sehingga bisa langsung dipublikasikan ke web.

3. Performa
Native: Memberikan performa paling halus dan cepat karena aplikasi berkomunikasi langsung dengan sistem operasi perangkat.

Hybrid: Performanya sudah sangat baik untuk aplikasi bisnis, meskipun sedikit di bawah native karena ada lapisan tambahan (bridge) antara kode dan hardware.

PWA: Sangat bergantung pada kecepatan browser dan koneksi internet pengguna, sehingga kurang cocok untuk aplikasi yang sangat berat.

4. Akses Hardware (Kamera, GPS, Sensor)
Native: Memiliki akses penuh dan paling stabil ke seluruh fitur hardware perangkat.

Hybrid: Bisa mengakses fitur hardware (seperti kamera untuk scan barcode inventaris) melalui bantuan plugin khusus.

PWA: Memiliki akses yang sangat terbatas pada fitur hardware tertentu, terutama pada perangkat iOS (iPhone).

5. Jalur Distribusi (Platform)
Native & Hybrid: Pengguna harus mengunduh dan menginstal aplikasi melalui Google Play Store atau Apple App Store.

PWA: Pengguna cukup membuka URL di browser dan bisa menambahkannya ke home screen tanpa perlu proses instalasi yang rumit.
