# Persiapan UTS - Wireless & Mobile Computing

## P1: Fondasi (Wireless vs Mobile Computing)
*   **Point:** Perbedaan mendasar terletak pada media transmisi versus kemampuan berpindah lokasi.
*   **Reason:** *Wireless* berfokus pada transmisi data tanpa kabel menggunakan gelombang radio, sedangkan *Mobile* berfokus pada portabilitas sistem agar tetap dapat diakses saat pengguna bergerak.
*   **Example:** Mouse nirkabel adalah contoh *Wireless* saja (tidak berpindah jauh); laptop yang digunakan di kereta tanpa internet adalah contoh *Mobile* saja; sedangkan smartphone dengan paket data adalah contoh keduanya.
*   **Point:** Jadi, *Wireless* adalah teknologinya, sementara *Mobile* adalah karakteristik penggunaannya.

## P2: Mobilitas (Handover)
*   **Point:** **Soft Handoff** adalah metode yang lebih unggul untuk layanan komunikasi suara (*voice call*).
*   **Reason:** Menggunakan prinsip *"make-before-break"*, di mana perangkat terhubung ke pemancar baru sebelum memutuskan hubungan lama, sehingga tidak ada jeda suara.
*   **Example:** Saat menelepon sambil berkendara, *Soft Handoff* mencegah telepon mati tiba-tiba saat berpindah antar wilayah BTS.
*   **Point:** Untuk menjaga kontinuitas layanan tanpa interupsi, *Soft Handoff* adalah standar yang lebih baik.

## P3: Jaringan (IEEE Standards & Mode)
*   **Point:** Standar IEEE membedakan cakupan wilayah, sementara mode koneksi membedakan struktur jaringan.
*   **Reason:** Standar utama meliputi **802.15 (WPAN)**, **802.11 (WLAN)**, dan **802.16 (WMAN)**. Perbedaan mode terletak pada ada tidaknya pusat kendali (Access Point).
*   **Example:** Mode *Ad-Hoc* (antar perangkat langsung, misal Bluetooth), sedangkan *Infrastructure Mode* (melalui satu pusat, misal WiFi kantor).
*   **Point:** Pemilihan harus disesuaikan dengan luas area dan kebutuhan manajemen jaringan.

## P4: OS Mobile (Arsitektur & Sandbox)
*   **Point:** Arsitektur OS mobile bersifat berlapis dan menggunakan *sandboxing* untuk keamanan maksimal.
*   **Reason:** Terdiri dari 4 lapisan (Kernel, Libraries, Framework, App). *Sandboxing* lebih ketat di mobile karena data pribadi di perangkat sangat sensitif.
*   **Example:** Aplikasi Instagram tidak bisa mengambil data dari aplikasi perbankan tanpa izin karena tiap aplikasi terisolasi dalam "kotak" (*sandbox*) masing-masing.
*   **Point:** Struktur ini menjamin privasi pengguna tetap terjaga dari ancaman aplikasi berbahaya.

## P5: OS Lanjutan (Proses & Intent)
*   **Point:** Android mengelola memori melalui hierarki proses dan komunikasi antar komponen melalui *Intent*.
*   **Reason:** LMK (*Low Memory Killer*) menghapus proses dari urutan terbawah (proses kosong) ke atas. *Intent* membagi instruksi menjadi **Eksplisit** (spesifik) dan **Implisit** (umum).
*   **Example:** *Intent Eksplisit* untuk membuka halaman profil di app sendiri; *Intent Implisit* saat menekan tombol "Share" untuk memilih aplikasi pihak ketiga.
*   **Point:** Pemahaman ini krusial agar aplikasi efisien dalam penggunaan baterai dan RAM.

---

## P6: Mobile Web & Strategi Pengembangan (Analisis APBDD)

Untuk kasus aplikasi inventaris dengan **budget terbatas** pada **dua platform**, strategi **Hybrid** atau **PWA** adalah pilihan terbaik berdasarkan analisis **APBDD** berikut:

### Tabel Perbandingan Strategi (Metode APBDD)

| Dimensi APBDD | **Native** | **Hybrid** | **PWA** |
| :--- | :--- | :--- | :--- |
| **A**rchitecture | Spesifik per OS (Kotlin/Swift) | *Single Codebase* (Web Wrapper) | Berbasis Web (Browser) |
| **P**erformance | Sangat Halus (Terbaik) | Baik & Stabil | Cukup (Tergantung Browser) |
| **B**udget | **Tinggi** (Butuh 2 tim/proyek) | **Menengah** (Efisien) | **Sangat Rendah** |
| **D**istribution | App Store & Play Store | App Store & Play Store | Langsung via URL / Link |
| **D**evelopment | Lambat (Coding 2x) | **Cepat** (Coding 1x) | **Sangat Cepat** |

### Detail Penjelasan Dimensi:

1.  **Budget (B):** Native paling mahal karena butuh pengembangan terpisah. Hybrid/PWA jauh lebih hemat untuk klien dengan dana terbatas.
2.  **Development (D):** Hybrid menang karena cukup menulis satu kode yang bisa berjalan di Android & iOS sekaligus menggunakan *framework* seperti Flutter atau React Native.
3.  **Performance (P):** Meski Native unggul, untuk aplikasi inventaris (pencatatan barang), performa Hybrid sudah lebih dari cukup.
4.  **Distribution (D):** PWA paling mudah karena tidak perlu proses kurasi toko aplikasi yang rumit, namun Hybrid tetap memberi kesan "profesional" karena tersedia di Store.
5.  **Architecture (A):** Hybrid bisa mengakses kamera (untuk scan barcode) melalui *plugin*, sedangkan PWA memiliki keterbatasan akses hardware terutama di iOS.

**Kesimpulan Strategi:**
Berdasarkan konteks bisnis, efisiensi sumber daya melalui metode **Hybrid** direkomendasikan karena memenuhi syarat anggaran terbatas namun tetap memiliki fungsi akses hardware yang baik untuk inventaris.
