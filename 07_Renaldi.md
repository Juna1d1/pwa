# 📚 Mobile & Wireless Computing 

---

## 1. Wireless vs Mobile Computing

### Definisi

* **Wireless Computing** adalah teknologi komputasi yang menggunakan media transmisi tanpa kabel seperti Wi-Fi, Bluetooth, dan jaringan seluler untuk mengirimkan data.
* **Mobile Computing** adalah penggunaan perangkat komputasi yang dapat digunakan secara fleksibel dengan berpindah tempat tanpa terikat lokasi tertentu.

---

### PREP

#### Point

Perbedaan utama antara wireless computing dan mobile computing terletak pada fokusnya, yaitu wireless berfokus pada **cara perangkat terhubung ke jaringan**, sedangkan mobile berfokus pada **kemampuan perangkat untuk digunakan secara berpindah tempat**.

#### Reason

Wireless computing memungkinkan perangkat saling berkomunikasi tanpa menggunakan kabel fisik, sehingga memberikan fleksibilitas dalam hal konektivitas. Namun, penggunaan wireless tidak selalu berarti perangkat tersebut berpindah tempat, karena perangkat seperti PC desktop tetap bisa menggunakan Wi-Fi dalam posisi tetap.
Sebaliknya, mobile computing lebih menekankan pada mobilitas pengguna dan perangkat. Perangkat mobile seperti laptop atau smartphone dirancang untuk tetap dapat digunakan dalam berbagai kondisi lokasi, bahkan tanpa koneksi jaringan sekalipun (offline). Hal ini menunjukkan bahwa mobilitas tidak selalu bergantung pada wireless, meskipun dalam praktiknya keduanya sering digunakan bersamaan.

#### Example

* **Wireless saja** → PC desktop yang terhubung ke Wi-Fi di rumah, tidak berpindah tempat.
* **Mobile saja** → Laptop yang digunakan saat perjalanan tanpa koneksi internet.
* **Keduanya** → Smartphone yang menggunakan jaringan seluler saat berpindah lokasi.

#### Point (Penegasan)

Wireless computing berfokus pada **media komunikasi tanpa kabel**, sedangkan mobile computing berfokus pada **fleksibilitas penggunaan perangkat di berbagai lokasi**.

---

## 2. Hard Handoff vs Soft Handoff

### Definisi

* **Hard Handoff** adalah proses perpindahan koneksi antar sel dimana koneksi lama diputus terlebih dahulu sebelum koneksi baru dibuat (*break before make*).
* **Soft Handoff** adalah proses perpindahan koneksi dimana koneksi lama tetap dipertahankan sambil membangun koneksi baru (*make before break*).

---

### PREP

#### Point

Perbedaan utama antara hard handoff dan soft handoff terletak pada mekanisme perpindahan koneksi antar base station, yang mempengaruhi kualitas komunikasi terutama pada layanan real-time seperti voice call.

#### Reason

Pada hard handoff, ketika perangkat berpindah dari satu sel ke sel lain, koneksi lama akan diputus terlebih dahulu sebelum koneksi baru terbentuk. Proses ini dapat menyebabkan jeda komunikasi yang berpotensi mengganggu, bahkan memutus panggilan jika perpindahan tidak berjalan mulus.
Sebaliknya, soft handoff memungkinkan perangkat terhubung dengan lebih dari satu base station secara bersamaan dalam periode tertentu. Hal ini membuat proses perpindahan menjadi lebih halus tanpa adanya jeda komunikasi, sehingga sangat cocok untuk layanan yang membutuhkan kontinuitas tinggi seperti panggilan suara.

#### Example

* **Hard handoff** → digunakan pada jaringan GSM, terkadang menyebabkan suara terputus sesaat saat berpindah sel.
* **Soft handoff** → digunakan pada CDMA, memungkinkan panggilan tetap stabil tanpa gangguan.

#### Point (Penegasan)

Soft handoff lebih baik untuk voice call karena mampu menjaga koneksi tetap aktif tanpa gangguan selama proses perpindahan.

---

## 3. Standar IEEE & Mode Jaringan

### Definisi

**IEEE (Institute of Electrical and Electronics Engineers)** adalah organisasi internasional yang menetapkan standar teknis untuk berbagai teknologi, termasuk jaringan wireless.

---

### PREP

#### Point

Standar IEEE mengelompokkan teknologi jaringan berdasarkan kategori dan cakupan, sedangkan perbedaan antara ad-hoc dan infrastructure mode terletak pada keberadaan access point sebagai pusat komunikasi.

#### Reason

Standar IEEE dibuat untuk memastikan bahwa perangkat dari berbagai produsen dapat saling terhubung dengan baik melalui aturan yang sama. Setiap standar memiliki fungsi dan cakupan berbeda, misalnya untuk jaringan lokal, personal, atau metropolitan.
Dalam implementasi jaringan:

* **Ad-hoc mode** memungkinkan perangkat saling berkomunikasi langsung tanpa perantara, sehingga lebih sederhana namun terbatas dalam jangkauan dan manajemen.
* **Infrastructure mode** menggunakan access point untuk mengatur komunikasi, sehingga jaringan lebih terorganisir, stabil, dan dapat melayani lebih banyak perangkat.

#### Example

Standar:

* 802.11 → WLAN (Wi-Fi)
* 802.15 → WPAN (Bluetooth, ZigBee)
* 802.16 → WMAN (WiMAX)
* 802.20 → Mobile broadband

Mode:

* Ad-hoc → komunikasi langsung antar laptop tanpa router
* Infrastructure → perangkat terhubung ke Wi-Fi melalui access point

#### Point (Penegasan)

Perbedaan utama antara ad-hoc dan infrastructure adalah keberadaan access point yang berfungsi sebagai pusat pengaturan komunikasi jaringan.

---

## 4. Arsitektur OS Mobile & Sandbox

### Definisi

Sistem operasi mobile memiliki arsitektur berlapis yang mengatur interaksi antara hardware dan aplikasi, serta menggunakan sandbox untuk membatasi akses aplikasi demi keamanan.

---

### PREP

#### Point

OS mobile terdiri dari empat lapisan utama yang bekerja secara terstruktur, serta menerapkan sandboxing yang lebih ketat dibandingkan sistem desktop untuk melindungi data pengguna.

#### Reason

Setiap lapisan dalam OS mobile memiliki peran penting:

1. **Kernel Layer** mengatur interaksi langsung dengan hardware seperti CPU, memori, dan driver perangkat.
2. **Libraries Layer** menyediakan fungsi dasar seperti pengolahan data, grafis, dan database.
3. **Application Framework** menyediakan API yang memudahkan developer dalam membuat aplikasi tanpa harus berinteraksi langsung dengan hardware.
4. **Application Layer** merupakan tempat aplikasi pengguna berjalan.

Sandboxing diterapkan lebih ketat karena perangkat mobile menyimpan banyak data pribadi seperti kontak, lokasi, dan media. Selain itu, aplikasi mobile sering diunduh dari internet sehingga berpotensi membawa malware. Oleh karena itu, setiap aplikasi dibatasi dalam ruangnya sendiri agar tidak dapat mengakses data aplikasi lain tanpa izin.

#### Example

Pada Android:

* Kernel berbasis Linux
* Libraries seperti SQLite
* Framework seperti Activity Manager
* Application seperti WhatsApp

Sandbox:

* Aplikasi memiliki ruang terpisah
* Akses data harus melalui permission

#### Point (Penegasan)

Arsitektur berlapis menjaga stabilitas sistem, sedangkan sandboxing memastikan keamanan dan privasi pengguna.

---

## 5. Hierarki Proses Android & Intent

### Definisi

* **Hierarki proses** adalah sistem pengelompokan prioritas aplikasi berdasarkan tingkat kepentingannya dalam sistem Android.
* **Intent** adalah mekanisme komunikasi antar komponen aplikasi untuk menjalankan fungsi tertentu.

---

### PREP

#### Point

Android menggunakan hierarki proses untuk mengatur penggunaan sumber daya secara efisien, serta menggunakan intent untuk memungkinkan komunikasi antar aplikasi dan komponen.

#### Reason

Hierarki proses membantu sistem menentukan aplikasi mana yang harus diprioritaskan saat sumber daya seperti RAM terbatas. Aplikasi dengan prioritas tinggi seperti foreground akan tetap berjalan, sedangkan aplikasi dengan prioritas rendah dapat dihentikan.
Intent memungkinkan aplikasi untuk saling berinteraksi tanpa harus saling terhubung secara langsung. Hal ini meningkatkan fleksibilitas sistem dan memudahkan integrasi antar aplikasi.

#### Example

Hierarki:

* Foreground → aplikasi yang sedang digunakan
* Visible → terlihat tetapi tidak aktif
* Service → berjalan di background
* Background → tidak terlihat
* Empty → hanya cache

Intent:

* Eksplisit → membuka activity tertentu dalam aplikasi
* Implisit → berbagi file ke aplikasi lain

#### Point (Penegasan)

Hierarki proses menjaga efisiensi dan stabilitas sistem, sedangkan intent memungkinkan komunikasi yang fleksibel antar aplikasi.

---

## 6. Native vs Hybrid vs PWA

### Definisi

* **Native App**: aplikasi khusus untuk satu platform.
* **Hybrid App**: satu aplikasi untuk banyak platform.
* **PWA**: aplikasi berbasis web.

---

### Perbandingan

| Aspek          | Native                                 | Hybrid                   | PWA             |
| -------------- | -------------------------------------- | ------------------------ | --------------- |
| **Akses**      | Full ke hardware (kamera, GPS, sensor) | Hampir full (via plugin) | Terbatas        |
| **Performa**   | Sangat tinggi                          | Cukup baik               | Rendah - sedang |
| **Biaya**      | Mahal                                  | Lebih hemat              | Paling murah    |
| **Distribusi** | Play Store / App Store                 | Play Store / App Store   | Browser         |

---

### Penjelasan

Native app memiliki performa terbaik karena langsung berjalan pada sistem operasi, namun membutuhkan biaya tinggi karena harus dibuat terpisah untuk setiap platform.
Hybrid app memungkinkan penggunaan satu codebase untuk berbagai platform sehingga lebih efisien dari segi biaya dan waktu, dengan performa yang masih cukup baik untuk aplikasi bisnis seperti inventaris.
PWA adalah solusi berbasis web yang paling murah dan mudah didistribusikan, tetapi memiliki keterbatasan dalam akses hardware dan performa.

---

### Pilihan Tepat

Untuk aplikasi inventaris dengan 2 platform dan budget terbatas:
➡️ **Hybrid App adalah pilihan terbaik**

Karena:

* Lebih hemat biaya
* Pengembangan lebih cepat
* Performa cukup untuk kebutuhan aplikasi

---

# ✅ Kesimpulan Akhir

Pemilihan teknologi harus disesuaikan dengan kebutuhan sistem, efisiensi biaya, dan performa agar solusi yang dihasilkan optimal.

---
