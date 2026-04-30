<h1>📘 Ringkasan Lengkap Modul 1–6 Wireless Mobile Computing</h1>

<hr>

<h2>🔹 P1: Wireless vs Mobile Computing</h2>

<h3>Point</h3>
<p>
Wireless computing dan mobile computing merupakan dua konsep dasar dalam sistem modern
yang sering dianggap sama, padahal memiliki fokus yang berbeda secara mendasar.
</p>

<h3>Reason</h3>
<p>
Wireless computing berfokus pada teknologi komunikasi tanpa kabel seperti WiFi,
Bluetooth, dan jaringan seluler. Teknologi ini memungkinkan perangkat saling
bertukar data tanpa menggunakan media fisik seperti kabel.
</p>

<p>
Sedangkan mobile computing berfokus pada kemampuan perangkat untuk digunakan
secara berpindah-pindah (mobilitas). Mobile computing mencakup perangkat,
aplikasi, dan jaringan yang mendukung penggunaan fleksibel.
</p>

<p>
Artinya:
</p>
<ul>
<li>Wireless tidak selalu mobile</li>
<li>Mobile tidak selalu wireless</li>
</ul>

<h3>Example</h3>
<ul>
<li>PC dengan WiFi → wireless tapi tidak mobile</li>
<li>Laptop offline saat bepergian → mobile tapi tidak wireless</li>
<li>Smartphone dengan 4G → mobile dan wireless</li>
</ul>

<h3>Point (Penegasan)</h3>
<p>
Wireless adalah teknologi koneksi, sedangkan mobile adalah konsep penggunaan perangkat.
</p>

<hr>

<h2>🔹 P2: Hard vs Soft Handover</h2>

<h3>Point</h3>
<p>
Handover adalah proses perpindahan koneksi antar base station dalam jaringan seluler.
Terdapat dua jenis utama, yaitu hard handover dan soft handover.
</p>

<h3>Reason</h3>
<p>
Hard handover menggunakan metode <b>break before make</b>, yaitu koneksi lama
diputus terlebih dahulu sebelum koneksi baru dibuat. Hal ini berpotensi
menyebabkan gangguan komunikasi.
</p>

<p>
Soft handover menggunakan metode <b>make before break</b>, yaitu koneksi lama
dan baru berjalan bersamaan untuk memastikan perpindahan yang halus.
</p>

<h3>Example</h3>
<ul>
<li>Hard → suara bisa terputus saat berpindah jaringan</li>
<li>Soft → komunikasi tetap lancar</li>
</ul>

<h3>Point (Penegasan)</h3>
<p>
Soft handover lebih baik untuk komunikasi real-time karena menjaga stabilitas koneksi.
</p>

<hr>

<h2>🔹 P3: WPAN, WLAN, WMAN, WWAN + IEEE</h2>

<h3>Point</h3>
<p>
Jaringan nirkabel dibedakan berdasarkan cakupan wilayah dan standar teknologi.
</p>

<h3>Reason</h3>

<table border="1" cellpadding="8">
<tr>
<th>Jenis</th><th>Jangkauan</th><th>Standar</th><th>Contoh</th>
</tr>
<tr>
<td>WPAN</td><td>Sangat dekat</td><td>IEEE 802.15</td><td>Bluetooth</td>
</tr>
<tr>
<td>WLAN</td><td>Lokal</td><td>IEEE 802.11</td><td>WiFi</td>
</tr>
<tr>
<td>WMAN</td><td>Kota</td><td>IEEE 802.16</td><td>WiMAX</td>
</tr>
<tr>
<td>WWAN</td><td>Luas</td><td>Seluler</td><td>4G/5G</td>
</tr>
</table>

<p>
Metode koneksi:
</p>
<ul>
<li><b>Ad-Hoc</b> → langsung antar perangkat</li>
<li><b>Infrastructure</b> → menggunakan access point</li>
</ul>

<h3>Point (Penegasan)</h3>
<p>
Perbedaan jaringan terletak pada cakupan dan arsitektur koneksi.
</p>

<hr>

<h2>🔹 P4: Arsitektur 4 Lapisan</h2>

<h3>Point</h3>
<p>
OS mobile menggunakan arsitektur berlapis untuk memisahkan fungsi sistem
agar lebih terorganisir dan efisien.
</p>

<h3>Reason</h3>
<ul>
<li><b>Linux Kernel</b> → mengatur hardware, memori, dan proses</li>
<li><b>Native Libraries + ART</b> → menjalankan aplikasi</li>
<li><b>Application Framework</b> → menyediakan API</li>
<li><b>Application</b> → interaksi user</li>
</ul>

<h3>Example</h3>
<p>
Saat membuka aplikasi: Application → Framework → Runtime → Kernel → Hardware
</p>

<h3>Point (Penegasan)</h3>
<p>
Struktur ini membuat sistem lebih stabil dan mudah dikembangkan.
</p>

<hr>

<h2>🔐 Sandbox</h2>

<h3>Point</h3>
<p>
Sandbox adalah sistem keamanan yang memisahkan setiap aplikasi agar tidak saling mengakses.
</p>

<h3>Reason</h3>
<ul>
<li>Setiap aplikasi memiliki UID sendiri</li>
<li>Data aplikasi tidak bisa diakses aplikasi lain</li>
<li>Akses hardware harus melalui permission</li>
</ul>

<h3>Example</h3>
<p>
Aplikasi tidak bisa mengakses kamera tanpa izin pengguna.
</p>

<h3>Point (Penegasan)</h3>
<p>
Sandbox melindungi sistem dari malware dan kebocoran data.
</p>

<hr>

<h2>⚠️ Kenapa Sandbox Mobile Lebih Ketat?</h2>

<h3>Reason</h3>
<ul>
<li>Data sangat pribadi (chat, foto, banking)</li>
<li>Banyak aplikasi dari berbagai sumber</li>
<li>Selalu terhubung internet</li>
<li>User kurang aware</li>
<li>Resource terbatas</li>
</ul>

<h3>Point (Penegasan)</h3>
<p>
Mobile membutuhkan keamanan lebih tinggi dibanding desktop.
</p>

<hr>

<h2>🔹 P5: LMK, IPC, Intent</h2>

<h3>Point</h3>
<p>
Android mengatur aplikasi menggunakan manajemen memori dan komunikasi antar komponen.
</p>

<h3>Reason</h3>
<ul>
<li><b>LMK</b> → menghapus aplikasi saat memori penuh</li>
<li><b>IPC</b> → komunikasi antar proses</li>
<li><b>Intent</b> → komunikasi antar komponen</li>
</ul>

<h3>Example</h3>
<ul>
<li>Explicit → membuka activity tertentu</li>
<li>Implicit → share ke aplikasi lain</li>
</ul>

<h3>Point (Penegasan)</h3>
<p>
Android tetap ringan karena manajemen memori yang efisien.
</p>

<hr>

<h2>🔹 P6: Native vs Hybrid vs PWA</h2>

<h3>Point</h3>
<p>
Pemilihan teknologi aplikasi harus disesuaikan dengan kebutuhan sistem dan sumber daya.
</p>

<h3>Tabel Perbandingan</h3>

<table border="1" cellpadding="8">
<tr>
<th>Aspek</th><th>Native</th><th>Hybrid</th><th>PWA</th>
</tr>
<tr>
<td>Platform</td><td>1 OS</td><td>Multi</td><td>Browser</td>
</tr>
<tr>
<td>Performa</td><td>Tinggi</td><td>Sedang</td><td>Rendah</td>
</tr>
<tr>
<td>Hardware</td><td>Full</td><td>Plugin</td><td>Terbatas</td>
</tr>
<tr>
<td>Biaya</td><td>Mahal</td><td>Sedang</td><td>Murah</td>
</tr>
<tr>
<td>Distribusi</td><td>Store</td><td>Store</td><td>Web</td>
</tr>
</table>

<h3>Analisis APBDB</h3>

<table border="1" cellpadding="8">
<tr>
<th>Faktor</th><th>Native</th><th>Hybrid</th><th>PWA</th>
</tr>
<tr>
<td>Aksi</td><td>Sangat cepat</td><td>Cukup</td><td>Tergantung browser</td>
</tr>
<tr>
<td>Hardware</td><td>Full</td><td>Plugin</td><td>Terbatas</td>
</tr>
<tr>
<td>Performa</td><td>Tinggi</td><td>Sedang</td><td>Rendah</td>
</tr>
<tr>
<td>Biaya Tim</td><td>Mahal</td><td>Sedang</td><td>Murah</td>
</tr>
<tr>
<td>Distribusi</td><td>Store</td><td>Store</td><td>Web</td>
</tr>
<tr>
<td>Pilihan</td><td>App berat</td><td>Bisnis</td><td>Sederhana</td>
</tr>
</table>

<h3>Example</h3>
<p>
Aplikasi inventaris dengan budget kecil → Hybrid atau PWA lebih cocok dibanding Native.
</p>

<h3>Point (Penegasan)</h3>
<p>
Tidak ada yang paling terbaik, semua tergantung kebutuhan.
</p>

<hr>

<h2>🔥 Kesimpulan</h2>
<p>
Mobile computing adalah kombinasi dari jaringan, sistem operasi, dan aplikasi
yang dirancang untuk mobilitas, efisiensi, dan keamanan pengguna.
</p>
