# Persiapan UTS - Wireless & Mobile Computing

### **P1: Fondasi (Wireless vs Mobile Computing)**

*   **Point (Pernyataan):** Perbedaan mendasar terletak pada fokus teknologi: *Wireless* adalah tentang infrastruktur transmisi data, sedangkan *Mobile* adalah tentang fleksibilitas aksesibilitas pengguna.
*   **Reason (Alasan):** *Wireless* menggunakan spektrum elektromagnetik (seperti gelombang radio) untuk menggantikan kabel fisik, sementara *Mobile Computing* adalah konsep di mana sistem tetap beroperasi meskipun titik koneksi (*point of attachment*) berubah saat pengguna berpindah lokasi.
*   **Example (Contoh):**
    *   **Hanya Wireless:** Smart TV di rumah yang terhubung ke WiFi; alat ini nirkabel tapi tidak dibawa berpindah tempat.
    *   **Hanya Mobile:** Menggunakan aplikasi editor video di tablet saat berada di dalam pesawat tanpa koneksi internet (mobilitas tinggi tanpa nirkabel).
    *   **Keduanya:** Menggunakan layanan *streaming* musik di smartphone melalui jaringan 5G sambil berkendara di jalan tol.
*   **Point (Kesimpulan):** Singkatnya, *Wireless* menyediakan konektivitas nirkabel, sedangkan *Mobile* memungkinkan sistem tetap berjalan meskipun koordinat fisik pengguna berubah.

---

### **P2: Mobilitas (Handover)**

*   **Point (Pernyataan):** **Soft Handoff** adalah metode yang jauh lebih superior untuk layanan *Voice Call* dibandingkan Hard Handoff.
*   **Reason (Alasan):** Soft Handoff menggunakan prinsip *"make-before-break"*, di mana perangkat menjalin koneksi dengan BTS baru sebelum memutuskan koneksi lama. Hal ini meminimalkan risiko paket suara hilang yang biasanya menyebabkan suara "putus-putus" atau panggilan terputus (*dropped call*).
*   **Example (Contoh):** Dalam jaringan seluler modern, ketika kamu melewati perbatasan dua menara sinyal saat menelepon, transisi terjadi secara halus di latar belakang tanpa kamu sadari adanya perpindahan jalur sinyal.
*   **Point (Kesimpulan):** Oleh karena itu, Soft Handoff menjamin kontinuitas layanan yang lebih stabil bagi pengguna yang bergerak aktif.

---

### **P3: Jaringan (IEEE Standards & Mode)**

*   **Point (Pernyataan):** Standar IEEE menentukan jangkauan geografis jaringan, sementara mode menentukan arsitektur pengendalian koneksinya.
*   **Reason (Alasan):** Standar IEEE yang umum meliputi **802.15 (WPAN)** untuk jarak sangat dekat, **802.11 (WLAN)** untuk area lokal seperti rumah, dan **802.16 (WMAN)** untuk skala kota. Mode *Ad-Hoc* bersifat desentralisasi, sedangkan *Infrastructure Mode* memiliki titik kontrol terpusat (Access Point).
*   **Example (Contoh):** Menggunakan Bluetooth untuk transfer file antar ponsel adalah mode *Ad-Hoc* pada standar 802.15, sementara laptop yang terhubung ke router kampus menggunakan *Infrastructure Mode* pada standar 802.11.
*   **Point (Kesimpulan):** Pemilihan kombinasi standar dan mode ini sangat bergantung pada kebutuhan luas area cakupan dan kemudahan manajemen jaringan.

---

### **P4: OS Mobile (Arsitektur & Sandbox)**

*   **Point (Pernyataan):** Sistem operasi mobile menggunakan arsitektur 4 lapisan dan mekanisme *sandboxing* untuk menjaga integritas serta keamanan data.
*   **Reason (Alasan):** Empat lapisan tersebut (Kernel, Libraries, Framework, App) memisahkan fungsi sistem agar lebih teratur. *Sandboxing* diterapkan lebih ketat karena perangkat mobile menyimpan informasi personal (lokasi, kontak, perbankan) yang jika bocor akan berisiko fatal.
*   **Example (Contoh):** Sebuah aplikasi cuaca tidak akan bisa mengakses galeri foto kamu tanpa izin eksplisit karena ia dikurung dalam "kotak" (*sandbox*) fungsionalitasnya sendiri.
*   **Point (Kesimpulan):** Dengan struktur ini, serangan virus pada satu aplikasi tidak akan langsung merusak seluruh sistem operasi perangkat.

---

### **P5: OS Lanjutan (Proses & Intent)**

*   **Point (Pernyataan):** Android mengandalkan hierarki proses untuk manajemen RAM dan *Intent* untuk mekanisme komunikasi antar komponen.
*   **Reason (Alasan):** Low Memory Killer (LMK) bertugas menutup aplikasi sesuai hierarki kepentingan agar memori tetap tersedia bagi aplikasi yang sedang dipakai. *Intent* bertindak sebagai "kurir pesan" yang bisa bersifat **Eksplisit** (target jelas) atau **Implisit** (mencari pemberi layanan yang cocok).
*   **Example (Contoh):** Saat kamu menekan tombol "Kirim Gambar", sistem menggunakan *Intent Implisit* untuk menawarkan daftar aplikasi (WA, Email, Instagram) yang sanggup menangani pengiriman tersebut.
*   **Point (Kesimpulan):** Kombinasi ini memastikan efisiensi daya tahan baterai dan pengalaman pengguna yang lancar (*smooth*).

---

## P6: Mobile Web & Strategi Pengembangan (Analisis APBDD)

Untuk kasus aplikasi inventaris dengan **budget terbatas** pada **dua platform**, strategi **Hybrid** atau **PWA** adalah pilihan terbaik berdasarkan analisis **APBDD** berikut:

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



