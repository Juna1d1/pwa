### **P1. Fondasi: Wireless vs Mobile Computing**

P - Point:
Wireless computing dan mobile computing adalah dua konsep yang berbeda meskipun sering digunakan bersamaan.

R - Reason:
Perbedaan mendasarnya terletak pada fokusnya: wireless berfokus pada media transmisi data tanpa kabel, sedangkan mobile berfokus pada kemampuan pengguna untuk tetap terhubung saat berpindah lokasi.

E - Example:
Sebuah Smart TV yang menggunakan Wi-Fi adalah wireless tetapi tidak mobile karena posisinya tetap. Sebaliknya, menggunakan tablet untuk mengetik dokumen di dalam kereta adalah mobile meskipun sedang tidak terkoneksi jaringan nirkabel.

P - Point:
Jadi, pemahaman akan keduanya penting untuk merancang aplikasi yang tetap fungsional di berbagai kondisi konektivitas dan mobilitas pengguna.

### **P2. Mobilitas: Hard vs Soft Handoff**

P - Point:
Soft Handoff adalah metode yang jauh lebih unggul dibandingkan Hard Handoff untuk layanan yang membutuhkan kontinuitas tinggi seperti panggilan suara (voice call).

R - Reason:
Soft Handoff menggunakan prinsip make-before-break, di mana perangkat menyambung ke BTS baru sebelum memutus koneksi dari BTS lama. Hal ini mencegah terjadinya jeda atau suara yang hilang yang biasanya terjadi pada Hard Handoff (prinsip break-before-make).

E - Example:
Saat melakukan panggilan WhatsApp di kendaraan yang bergerak cepat, Soft Handoff memastikan percakapan tidak terputus-putus saat sinyal berpindah antar menara BTS.

P - Point:
Oleh karena itu, pemilihan metode handoff sangat mempengaruhi stabilitas koneksi dan pengalaman pengguna pada aplikasi real-time.

### **P3. Jaringan: Ad-Hoc vs Infrastructure Mode**

P - Point:
Perbedaan mendasar antara mode Ad-Hoc dan Infrastructure terletak pada arsitektur kontrol jaringannya.

R - Reason:
Infrastructure Mode memerlukan perangkat pusat seperti Access Point (AP) sebagai pengatur lalu lintas data, sedangkan Ad-Hoc Mode memungkinkan antar perangkat untuk berkomunikasi secara langsung tanpa perantara pusat.

E - Example:
Jaringan Wi-Fi di kampus yang dikelola melalui router pusat adalah contoh Infrastructure Mode. Sementara itu, menggunakan fitur kirim file langsung antar dua ponsel (seperti AirDrop atau Bluetooth) adalah contoh Ad-Hoc Mode.

P - Point:
Kesimpulannya, Infrastructure Mode lebih cocok untuk skalabilitas dan stabilitas jangka panjang, sementara Ad-Hoc unggul dalam kemudahan pengaturan instan.

### **P4. OS Mobile: Arsitektur 4 Lapisan & Sandbox**

P - Point:
Sistem keamanan sandboxing pada OS mobile jauh lebih ketat dibandingkan desktop untuk melindungi integritas data pengguna.

R - Reason:
Karena perangkat mobile seringkali berisi data yang sangat pribadi (lokasi, kontak, dompet digital), setiap aplikasi dijalankan di dalam "kotak" (sandbox) yang terisolasi. Hal ini mencegah satu aplikasi mengakses atau merusak data milik aplikasi lain tanpa izin eksplisit.

E - Example:
Saat kamu menginstal aplikasi pengedit foto, aplikasi tersebut tidak bisa langsung melihat daftar kontak kamu kecuali kamu memberikan izin melalui sistem keamanan OS.

P - Point:
Maka, arsitektur berlapis dan sandbox ini merupakan pertahanan utama dalam menjaga keamanan ekosistem aplikasi mobile.

### **P5. OS Lanjutan: Intent Eksplisit vs Implisit**

P - Point:
Konsep Intent adalah mekanisme utama di Android untuk memungkinkan komunikasi dan interaksi antar komponen aplikasi.

R - Reason:
Intent Eksplisit digunakan saat kita sudah tahu pasti target komponen yang ingin dipanggil, sedangkan Intent Implisit digunakan ketika kita ingin melakukan suatu tindakan namun menyerahkan kepada sistem untuk mencari aplikasi yang sanggup menanganinya.

E - Example:
Membuka halaman profil di dalam aplikasi yang sama menggunakan Intent Eksplisit. Sebaliknya, ketika kamu menekan link alamat dan muncul pilihan untuk membukanya dengan Google Maps atau Waze, itu adalah contoh Intent Implisit.

P - Point:
Jadi, penggunaan Intent yang tepat memudahkan pengembang untuk mengintegrasikan fitur antar aplikasi secara efisien.

### **P6. Mobile Web: Strategi Native vs Hybrid vs PWA**

Untuk menjawab pertanyaan tentang pemilihan strategi aplikasi LMS bagi klien dengan budget terbatas, berikut adalah perbandingannya menggunakan framework APBDD:

| Dimensi (APBDD) | Native | Hybrid | PWA |
|-----------------|--------|--------|-----|
| **Akses Hardware** | Full. Akses maksimal ke fitur perangkat (NFC, Kamera, Bluetooth, GPS). | Melalui plugin (Capacitor, React Native, Flutter). | Web Standard API. Terbatas sesuai kemampuan browser. |
| **Performa** | Tinggi (High). Langsung di atas OS, sangat responsif. | Menengah. Bergantung optimasi bridge. | Service Worker. Cukup cepat, tapi di bawah Native. |
| **Biaya & Tim** | Tinggi. Perlu tim iOS & Android terpisah. | Menengah. Satu codebase untuk dua platform. | Rendah. Cukup tim web. |
| **Distribusi** | Toko Aplikasi (Play Store & App Store). | Toko Aplikasi (Play Store & App Store). | Web / URL. Tanpa instalasi. |
| **Dimensi Pilihan** | Cocok untuk game berat, AR/VR, fitur hardware kompleks. | Cocok untuk LMS, aplikasi bisnis, POS, inventaris. | Cocok untuk portal info, katalog, layanan web cepat. |

