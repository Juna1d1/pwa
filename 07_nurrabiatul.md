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

Tentu! Mari kita ubah bahasa teknis di tabel **APBDD** tadi menjadi bahasa sehari-hari yang lebih "membumi" agar kamu lebih mudah menjelaskannya saat UTS nanti.

Berikut adalah versi tabel dengan bahasa yang sangat sederhana:

### **Tabel Strategi Bikin Aplikasi (Metode APBDD)**

| Dimensi APBDD | **Native** (Bikin Satu-Satu) | **Hybrid** (Bikin Sekaligus) | **PWA** (Web Rasa Aplikasi) |
| :--- | :--- | :--- | :--- |
| **A**rchitecture (Cara Bikin) | Harus bikin dua aplikasi beda bahasa (ribet). | Bikin satu aplikasi untuk semua hp (praktis). | Seperti buka website tapi tampilannya mirip app. |
| **P**erformance (Kelancaran) | Paling mulus dan anti-lemot. | Bagus dan lancar untuk aplikasi kantor/bisnis. | Tergantung sinyal internet dan browser. |
| **B**udget (Biaya) | **Sangat Mahal** (Bayar dua tim/proyek). | **Hemat** (Cukup bayar satu kali kerja). | **Paling Murah** (Modal website saja). |
| **D**istribution (Cara Instal) | Cari di Play Store atau App Store. | Cari di Play Store atau App Store. | Cukup buka link/URL di browser. |
| **D**evelopment (Waktu) | Lama banget (kerjanya dua kali). | **Cepat** (sekali bikin langsung jadi dua). | **Sangat Cepat** (paling kilat jadinya). |

---

### **Penjelasan Gampang :**

1.  **Budget (B):** Bayangkan **Native** itu seperti membangun dua rumah yang berbeda desainnya (Android & iOS), jelas mahal. **Hybrid** itu seperti membangun satu rumah tapi punya dua pintu berbeda, jadi jauh lebih murah.
2.  **Development (D):** Karena kamu cuma perlu nulis kode satu kali di **Hybrid**, waktunya jadi cepat. Ini cocok buat klien yang ingin aplikasinya cepat beres tapi uangnya pas-pasan.
3.  **Performance (P):** Aplikasi inventaris (catat stok barang) itu bukan *game* berat seperti Mobile Legends, jadi pakai **Hybrid** sudah lebih dari cukup dan tidak terasa lemot.
4.  **Distribution (D):** Aplikasi **Hybrid** tetap terlihat keren karena bisa di-download resmi di Play Store, beda dengan **PWA** yang cuma lewat link browser saja.
5.  **Architecture (A):** Untuk inventaris biasanya butuh kamera buat *scan* barcode. **Hybrid** bisa melakukan itu dengan mudah, sedangkan **PWA** kadang susah konek ke kamera di iPhone.



