<h1>Ringkasan Modul 1-6</h1>

<table border="1">
<tr>
<th>Modul</th>
<th>Topik</th>
</tr>
<tr><td>P1</td><td>Wireless vs Mobile Computing</td></tr>
<tr><td>P2</td><td>Mobility + Handover</td></tr>
<tr><td>P3</td><td>Jaringan + IEEE</td></tr>
<tr><td>P4</td><td>OS Mobile</td></tr>
<tr><td>P5</td><td>OS Lanjutan</td></tr>
<tr><td>P6</td><td>Mobile Web</td></tr>
</table>

<br>

<h1>P1: Wireless vs Mobile Computing</h1>
<p>
Wireless dan mobile computing merupakan dua konsep yang berbeda namun sering dianggap sama. Wireless mengacu pada teknologi komunikasi tanpa kabel seperti WiFi atau Bluetooth, sedangkan mobile computing mengacu pada perangkat yang dapat berpindah tempat seperti smartphone atau laptop. Sebagai contoh, komputer yang terhubung ke WiFi termasuk wireless tetapi tidak mobile, sementara handphone tanpa koneksi internet termasuk mobile tetapi tidak wireless. Oleh karena itu, dapat disimpulkan bahwa wireless dan mobile adalah dua konsep berbeda yang dapat digunakan secara terpisah maupun bersamaan.
</p>
<b>PREP</b><br>
Point: Wireless dan Mobile adalah dua konsep yang berbeda<br>
Reason: Wireless berfokus pada teknologi jaringan tanpa kabel, sedangkan Mobile berfokus pada perangkat yang bisa berpindah tempat<br>
Example: PC dengan WiFi termasuk wireless tapi tidak mobile, HP tanpa internet termasuk mobile tapi tidak wireless, sedangkan smartphone dengan internet termasuk keduanya<br>
Point: Jadi, wireless dan mobile bisa berdiri sendiri atau digabung tergantung penggunaan<br><br>

<b>APBDP</b><br>
A: Banyak orang menganggap wireless dan mobile itu sama<br>
P: Padahal keduanya memiliki perbedaan mendasar<br>
B: Wireless berkaitan dengan koneksi jaringan, mobile berkaitan dengan perangkat<br>
D: Contohnya terlihat dari penggunaan PC, HP, dan smartphone<br>
P: Kesimpulannya, keduanya adalah konsep berbeda namun sering digunakan bersama<br>

<br>

<h1>P2: Mobility + Handover</h1>
<p>
Dalam jaringan mobile, proses perpindahan koneksi dari satu jaringan ke jaringan lain disebut handover. Terdapat dua jenis handover yaitu hard handoff dan soft handoff. Hard handoff bekerja dengan cara memutus koneksi lama sebelum membuat koneksi baru, sehingga berpotensi menyebabkan gangguan komunikasi. Sebaliknya, soft handoff memungkinkan koneksi lama dan baru berjalan secara bersamaan sehingga perpindahan menjadi lebih mulus. Oleh karena itu, soft handoff lebih cocok digunakan pada komunikasi real-time seperti panggilan suara karena lebih stabil dan tidak terputus.
</p>
<b>PREP</b><br>
Point: Hard Handoff dan Soft Handoff memiliki cara kerja yang berbeda<br>
Reason: Hard handoff memutus koneksi lama sebelum tersambung ke jaringan baru, sedangkan soft handoff menjaga koneksi tetap aktif selama perpindahan<br>
Example: Saat melakukan panggilan suara, soft handoff lebih baik karena tidak menyebabkan putusnya komunikasi<br>
Point: Oleh karena itu, soft handoff lebih cocok untuk komunikasi real-time<br><br>

<b>APBDP</b><br>
A: Dalam jaringan mobile, perpindahan antar jaringan sering terjadi<br>
P: Proses ini disebut handover<br>
B: Ada dua jenis yaitu hard dan soft handoff<br>
D: Soft handoff memberikan koneksi yang lebih stabil karena tidak terputus<br>
P: Maka soft handoff lebih unggul terutama untuk layanan seperti voice call<br>

<br>

<h1>P3: Jaringan + IEEE</h1>
<p>
Jaringan komputer memiliki beberapa jenis berdasarkan jangkauan dan standar yang digunakan, seperti WPAN, WLAN, WMAN, dan WWAN. WPAN menggunakan standar IEEE 802.15 dengan contoh Bluetooth untuk jarak dekat, WLAN menggunakan IEEE 802.11 seperti WiFi untuk area lokal, WMAN menggunakan IEEE 802.16 seperti WiMAX untuk area kota, dan WWAN menggunakan jaringan seluler seperti 4G/5G untuk jangkauan luas. Selain itu, terdapat dua mode jaringan yaitu Ad-Hoc dan Infrastructure. Ad-Hoc merupakan komunikasi langsung antar perangkat tanpa access point, sedangkan Infrastructure menggunakan access point sebagai pusat komunikasi. Hal ini menunjukkan bahwa standar IEEE dan struktur jaringan sangat menentukan cara komunikasi data.
</p>
<table border="1">
<tr>
<th>Jenis</th>
<th>Standar</th>
<th>Contoh</th>
<th>Jangkauan</th>
</tr>
<tr><td>WPAN</td><td>802.15</td><td>Bluetooth</td><td>Sangat dekat</td></tr>
<tr><td>WLAN</td><td>802.11</td><td>WiFi</td><td>Rumah/Kampus</td></tr>
<tr><td>WMAN</td><td>802.16</td><td>WiMAX</td><td>Kota</td></tr>
<tr><td>WWAN</td><td>Seluler</td><td>4G/5G</td><td>Luas (antar kota/negara)</td></tr>
</table>

<br>

<b>PREP</b><br>
Point: Setiap jenis jaringan memiliki standar IEEE yang berbeda<br>
Reason: Perbedaan ini didasarkan pada jangkauan, teknologi, dan kebutuhan komunikasi<br>
Example: WPAN untuk jarak dekat seperti Bluetooth, WLAN untuk WiFi, hingga WWAN untuk jaringan seluler luas<br>
Point: Selain itu, terdapat dua mode jaringan yaitu Ad-Hoc dan Infrastructure yang memiliki cara kerja berbeda<br><br>

<b>APBDP</b><br>
A: Jaringan komputer memiliki banyak kategori<br>
P: Kategori tersebut dibedakan berdasarkan standar dan jangkauan<br>
B: IEEE berperan dalam menentukan spesifikasi tiap jaringan<br>
D: Ad-Hoc tidak membutuhkan access point, sedangkan Infrastructure membutuhkan access point<br>
P: Kesimpulannya, jenis dan struktur jaringan menentukan cara komunikasi data<br>

<br>

<h1>P4: OS Mobile</h1>
<p>
Sistem operasi mobile dirancang dengan arsitektur berlapis untuk meningkatkan keamanan dan efisiensi. Lapisan tersebut terdiri dari kernel yang berfungsi mengelola hardware, libraries yang menyediakan fungsi sistem, runtime yang menjalankan aplikasi, dan application sebagai antarmuka pengguna. Selain itu, sistem operasi mobile menerapkan konsep sandbox, yaitu setiap aplikasi berjalan di lingkungan terpisah sehingga tidak dapat mengakses data aplikasi lain tanpa izin. Dengan demikian, keamanan data pengguna dapat lebih terjamin dibandingkan sistem operasi desktop.
</p>
<b>PREP</b><br>
Point: Sistem operasi mobile memiliki arsitektur berlapis<br>
Reason: Pembagian lapisan memudahkan pengelolaan sistem dan meningkatkan keamanan<br>
Example: Lapisan tersebut terdiri dari Kernel, Libraries, Runtime, dan Application<br>
Point: Sandbox diterapkan untuk membatasi akses tiap aplikasi agar lebih aman<br><br>

<b>APBDP</b><br>
A: Sistem operasi mobile dirancang berbeda dari desktop<br>
P: Fokus utamanya adalah keamanan dan efisiensi<br>
B: Setiap aplikasi berjalan dalam sandbox yang terisolasi<br>
D: Hal ini mencegah aplikasi mengakses data aplikasi lain tanpa izin<br>
P: Dengan demikian, keamanan data pengguna lebih terjamin<br>

<br>

<h1>P5: OS Lanjutan</h1>
<p>
Android mengelola proses aplikasi menggunakan sistem hirarki prioritas untuk menjaga performa dan penggunaan memori. Proses dengan prioritas tinggi seperti foreground akan dipertahankan, sedangkan proses dengan prioritas rendah seperti background atau cached dapat dihentikan oleh sistem melalui mekanisme Low Memory Killer. Selain itu, Android menggunakan intent sebagai sarana komunikasi antar komponen aplikasi. Intent terbagi menjadi dua jenis, yaitu eksplisit yang langsung menuju komponen tertentu, dan implisit yang bekerja berdasarkan aksi yang diinginkan. Sistem ini membuat Android tetap responsif dan fleksibel dalam menjalankan banyak aplikasi.
</p>
<b>PREP</b><br>
Point: Android mengelola proses dengan sistem hirarki prioritas<br>
Reason: Hal ini dilakukan untuk menjaga performa dan efisiensi penggunaan memori<br>
Example: Proses foreground memiliki prioritas tertinggi, sedangkan background dan cached lebih rendah<br>
Point: Intent digunakan sebagai mekanisme komunikasi antar komponen aplikasi<br><br>

<b>APBDP</b><br>
A: Banyak aplikasi berjalan secara bersamaan di Android<br>
P: Diperlukan sistem manajemen proses<br>
B: Low Memory Killer akan menghentikan proses dengan prioritas rendah<br>
D: Intent terdiri dari eksplisit (tujuan jelas) dan implisit (berdasarkan aksi)<br>
P: Kesimpulannya, sistem ini membuat Android tetap responsif dan fleksibel<br>

<br>

<h1>P6: Native vs Hybrid vs PWA</h1>
<p>
Dalam pengembangan aplikasi mobile, terdapat tiga pendekatan utama yaitu native, hybrid, dan Progressive Web App (PWA). Aplikasi native memiliki performa tinggi dan akses penuh ke fitur perangkat, namun membutuhkan biaya besar karena harus dibuat terpisah untuk setiap platform. Aplikasi hybrid memungkinkan penggunaan satu codebase untuk berbagai platform sehingga lebih efisien, meskipun performanya tidak sebaik native. Sementara itu, PWA merupakan aplikasi berbasis web yang ringan dan dapat diakses melalui browser, namun memiliki keterbatasan dalam akses fitur perangkat. Oleh karena itu, untuk pengembangan dengan dua platform dan keterbatasan anggaran, pendekatan hybrid atau PWA lebih direkomendasikan.
</p>
<table border="1">
<tr>
<th>Tipe</th>
<th>Kelebihan</th>
<th>Kekurangan</th>
</tr>
<tr><td>Native</td><td>Performa tinggi, akses penuh fitur device</td><td>Biaya mahal, perlu 2 codebase</td></tr>
<tr><td>Hybrid</td><td>1 codebase untuk banyak platform</td><td>Performa tidak setinggi native</td></tr>
<tr><td>PWA</td><td>Ringan, bisa diakses via browser</td><td>Akses fitur device terbatas</td></tr>
</table>

<br>

<b>PREP</b><br>
Point: Pemilihan teknologi tergantung kebutuhan dan budget<br>
Reason: Setiap pendekatan memiliki kelebihan dan kekurangan masing-masing<br>
Example: Native cocok untuk performa tinggi, sedangkan Hybrid dan PWA cocok untuk efisiensi biaya<br>
Point: Untuk 2 platform dengan budget terbatas, Hybrid atau PWA lebih direkomendasikan<br><br>

<table border="1">
<tr>
<th>Tipe</th>
<th>A</th>
<th>P</th>
<th>B</th>
<th>D</th>
<th>P</th>
</tr>

<tr>
<td>Native</td>
<td>Pengembangan aplikasi performa tinggi dibutuhkan</td>
<td>Native jadi pilihan utama</td>
<td>Dibuat khusus tiap platform (Android/iOS)</td>
<td>Contoh: game, aplikasi berat</td>
<td>Performa tinggi tapi biaya besar</td>
</tr>

<tr>
<td>Hybrid</td>
<td>Developer butuh efisiensi</td>
<td>Hybrid jadi solusi</td>
<td>1 codebase untuk banyak platform</td>
<td>Contoh: aplikasi bisnis sederhana</td>
<td>Lebih hemat waktu dan biaya</td>
</tr>

<tr>
<td>PWA</td>
<td>Tidak semua app perlu di install</td>
<td>PWA jadi alternatif</td>
<td>Berjalan di browser seperti app</td>
<td>Contoh: e-commerce ringan</td>
<td>Ringan dan murah tapi fitur terbatas</td>
</tr>

</table>

<h3>Kesimpulan P6</h3>
<p>
Dalam konteks Learning Management System (LMS), pemilihan teknologi harus mempertimbangkan jumlah pengguna yang banyak, kemudahan akses, serta efisiensi biaya pengembangan. LMS umumnya digunakan oleh siswa dan dosen dari berbagai perangkat seperti smartphone, laptop, dan tablet, sehingga membutuhkan aplikasi yang fleksibel dan dapat berjalan di berbagai platform. Penggunaan Native kurang efisien karena harus mengembangkan aplikasi terpisah untuk Android dan iOS dengan biaya yang lebih besar. Oleh karena itu, pendekatan Hybrid dan Progressive Web App (PWA) lebih cocok digunakan dalam LMS karena hanya membutuhkan satu codebase, mudah diakses melalui browser, serta tetap dapat memberikan pengalaman seperti aplikasi mobile. Dengan demikian, untuk kebutuhan LMS yang menekankan aksesibilitas, skalabilitas, dan efisiensi, Hybrid atau PWA menjadi solusi yang paling optimal.
</p>
