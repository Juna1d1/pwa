# 📚 Jawaban Soal Mobile & Wireless Computing

## 1. Perbedaan Wireless & Mobile Computing

### Point (Pernyataan Utama)

Perbedaan utama antara wireless computing dan mobile computing terletak pada fokusnya:

* Wireless computing berfokus pada teknologi jaringan tanpa kabel.
* Mobile computing berfokus pada kemampuan perangkat untuk digunakan secara berpindah (mobile), baik dengan atau tanpa koneksi wireless.

---

### Reason (Alasan)

* Wireless computing menggunakan media transmisi tanpa kabel seperti Wi-Fi, Bluetooth, atau jaringan seluler untuk komunikasi data. Perangkatnya tidak harus berpindah tempat.
* Mobile computing menekankan mobilitas pengguna/perangkat, artinya perangkat bisa digunakan saat berpindah lokasi, meskipun koneksinya bisa offline atau menggunakan kabel.

---

### Example (Contoh)

1. Hanya Wireless (tidak mobile)

   * PC desktop di rumah yang terhubung ke Wi-Fi
     → Wireless karena tanpa kabel, tapi tidak mobile karena tidak berpindah.

2. Hanya Mobile (tidak wireless)

   * Laptop yang digunakan di mobil tapi memakai kabel LAN atau tanpa koneksi (offline)
     → Mobile karena berpindah, tapi tidak wireless.

3. Keduanya (Wireless + Mobile)

   * Smartphone yang menggunakan jaringan 4G/5G atau Wi-Fi saat berpindah tempat
     → Wireless dan mobile sekaligus.

---

### Point (Penegasan Ulang)

Jadi, wireless computing = cara koneksi (tanpa kabel), sedangkan mobile computing = cara penggunaan (berpindah tempat). Keduanya bisa berdiri sendiri, tetapi sering juga digunakan bersamaan dalam kehidupan sehari-hari.

---

## 2. Hard vs Soft Handoff

### Point (Pernyataan Utama)

Perbedaan utama antara hard handoff dan soft handoff adalah pada cara perpindahan koneksi antar sel:

* Hard handoff: koneksi lama diputus dulu, baru pindah ke koneksi baru (break before make).
* Soft handoff: koneksi lama tetap aktif sambil membangun koneksi baru (make before break).

Untuk voice call, soft handoff lebih baik.

---

### Reason (Alasan)

* Hard handoff berisiko menyebabkan jeda atau bahkan putus panggilan karena ada waktu kosong saat perpindahan koneksi.
* Soft handoff menjaga kontinuitas koneksi karena perangkat terhubung ke lebih dari satu base station secara bersamaan, sehingga suara tetap stabil tanpa gangguan.

---

### Example (Contoh)

* Hard handoff: terjadi pada jaringan seperti GSM → saat berpindah sel, kadang suara bisa terputus sesaat.
* Soft handoff: digunakan pada CDMA → saat berpindah sel, panggilan tetap lancar karena ada overlap koneksi.

---

### Point (Penegasan Ulang)

Jadi, soft handoff lebih baik untuk voice call karena mampu menjaga kualitas suara tetap stabil tanpa putus, sedangkan hard handoff lebih sederhana tetapi berisiko gangguan komunikasi.

---

## 3. Standar IEEE & Mode Jaringan

### Point (Pernyataan Utama)

Standar IEEE untuk jaringan wireless berbeda-beda tergantung kategorinya, dan perbedaan utama antara ad-hoc dan infrastructure mode terletak pada keberadaan access point (AP).

---

### Reason (Alasan)

* IEEE membuat berbagai standar agar komunikasi jaringan memiliki aturan yang jelas dan kompatibel.
* Ad-hoc mode tidak menggunakan access point, sehingga perangkat saling terhubung langsung (peer-to-peer).
* Infrastructure mode menggunakan access point sebagai pusat komunikasi, sehingga semua perangkat terhubung melalui AP.

---

### Example (Contoh)

#### 1. Standar IEEE untuk kategori wireless:

* IEEE 802.11 → WLAN (Wi-Fi)
* IEEE 802.15 → Bluetooth, ZigBee
* IEEE 802.16 → WMAN
* IEEE 802.20 → Mobile broadband (jarang digunakan)

#### 2. Perbedaan mode jaringan:

* **Ad-hoc mode**

  * Contoh: Laptop ke laptop langsung via Wi-Fi tanpa router
  * Tidak ada access point

* **Infrastructure mode**

  * Contoh: HP/laptop terhubung ke Wi-Fi melalui router rumah
  * Menggunakan access point

---

### Point (Penegasan Ulang)

Jadi, standar IEEE membedakan jenis jaringan wireless berdasarkan cakupan dan teknologi, sedangkan perbedaan utama ad-hoc dan infrastructure adalah ada atau tidaknya access point sebagai pusat komunikasi.

---

## 4. Arsitektur 4 Lapisan + Sandbox (OS Mobile)

### Point (Pernyataan Utama)

Arsitektur OS mobile umumnya terdiri dari 4 lapisan utama, dan menggunakan sandboxing untuk membatasi akses aplikasi. Sandboxing di mobile lebih ketat dibanding desktop karena faktor keamanan dan privasi.

---

### Reason (Alasan)

Setiap lapisan punya fungsi spesifik:

1. Kernel Layer → inti OS yang mengatur hardware (CPU, memori, driver).
2. Libraries / Native Layer → menyediakan library dasar (grafik, database, media).
3. Application Framework → menyediakan API untuk developer (UI, notifikasi, dll).
4. Application Layer → tempat aplikasi berjalan (user apps).

Sandboxing lebih ketat karena:

* Menyimpan data sensitif (kontak, kamera, lokasi)
* Risiko malware tinggi
* Perangkat bersifat personal

---

### Example (Contoh)

**Android:**

* Kernel: berbasis Linux
* Libraries: SQLite, WebKit
* Framework: Activity Manager, Notification Manager
* Application: WhatsApp, Instagram

**Sandbox:**

* Setiap aplikasi punya ruang sendiri
* Tidak bisa akses data aplikasi lain tanpa izin

**Desktop (Windows):**

* Akses file system lebih bebas
* Sandboxing tidak seketat mobile

---

### Point (Penegasan Ulang)

Jadi, 4 lapisan OS mobile bekerja secara terstruktur dari hardware hingga aplikasi, dan sandboxing lebih ketat di mobile untuk melindungi data pengguna.

---

## 5. Hierarki Proses Android & Intent

### Point (Pernyataan Utama)

Hierarki proses pada Android menentukan prioritas aplikasi, sedangkan intent dibagi menjadi eksplisit dan implisit.

---

### Reason (Alasan)

* Digunakan untuk mengatur memori dan performa
* Intent untuk komunikasi antar komponen:

  * Eksplisit → target jelas
  * Implisit → sistem yang memilih

---

### Example (Contoh)

#### Hierarki Proses:

* Foreground Process
* Visible Process
* Service Process
* Background Process
* Empty Process

Contoh:

* Game → foreground
* Musik → service
* App di RAM → background

#### Intent:

* **Eksplisit** → buka Activity tertentu
* **Implisit** → share foto (pilih aplikasi)

---

### Point (Penegasan Ulang)

Hierarki proses menjaga performa sistem, sedangkan intent mengatur komunikasi antar komponen aplikasi.

---

## 6. Native vs Hybrid vs PWA

| Aspek       | Native App         | Hybrid App     | PWA           |
| ----------- | ------------------ | -------------- | ------------- |
| Platform    | Android/iOS        | Multi-platform | Web           |
| Teknologi   | Java/Kotlin, Swift | HTML, CSS, JS  | HTML, CSS, JS |
| Performa    | ⭐⭐⭐⭐⭐              | ⭐⭐⭐            | ⭐⭐            |
| Biaya       | Mahal              | Hemat          | Paling murah  |
| Hardware    | Full               | Hampir full    | Terbatas      |
| Maintenance | Rumit              | Mudah          | Sangat mudah  |
| Install     | Store              | Store          | Browser       |
| Offline     | Sangat baik        | Baik           | Terbatas      |

---

### Kesimpulan

Untuk aplikasi inventaris 2 platform dengan budget terbatas:
➡️ **Hybrid App adalah pilihan terbaik** karena seimbang antara biaya, performa, dan kemudahan development.

---
