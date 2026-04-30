<h1>Ringkasan Modul 1–6 (PREP + APBDP)</h1>

<h1>P1: Wireless vs Mobile Computing</h1>
Point: Wireless dan Mobile adalah dua hal berbeda.<br>
Reason: Wireless = media komunikasi, Mobile = mobilitas perangkat.<br>
Example: Laptop WiFi (wireless), HP jalan pakai LAN (mobile), smartphone 5G (keduanya).<br>
Point ulang: Keduanya bisa berdiri sendiri atau bersamaan.<br><br>

Apa: Wireless = komunikasi tanpa kabel, Mobile = perangkat berpindah.<br>
Proses: Wireless pakai gelombang radio, mobile fokus pergerakan user.<br>
Benefit: Fleksibel tanpa kabel dan bisa digunakan di mana saja.<br>
Dampak: Wireless rawan keamanan, mobile butuh efisiensi baterai.<br>
Penutup: Digunakan pada bisnis seperti ojek online.<br><br>


<h1>P2: Mobility + Handover</h1>
Point: Hard dan Soft handoff berbeda cara perpindahan koneksi.<br>
Reason: Hard = putus dulu, Soft = sambung dulu.<br>
Example: GSM (hard), CDMA (soft).<br>
Point ulang: Perbedaan ada di kontinuitas koneksi.<br><br>

Apa: Handoff = perpindahan jaringan saat user bergerak.<br>
Proses: Hard (break-before-make), Soft (make-before-break).<br>
Benefit: Soft stabil untuk voice, Hard lebih hemat resource.<br>
Dampak: Soft mahal, Hard bisa ganggu koneksi.<br>
Penutup: Operator pilih sesuai kebutuhan layanan.<br><br>


<h1>P3: Jenis Jaringan (WPAN, WLAN, WMAN, WWAN)</h1>
Point: Jaringan dibagi berdasarkan jangkauan.<br>
Reason: Semakin luas, semakin kompleks.<br>
Example: WPAN (Bluetooth), WLAN (WiFi), WMAN (WiMAX), WWAN (4G/5G).<br>
Point ulang: Kategori berdasarkan skala jaringan.<br><br>

Apa: Empat jenis jaringan berdasarkan area.<br>
Proses: Dari personal ke global.<br>
Benefit: Fleksibel sesuai kebutuhan.<br>
Dampak: Luas = mahal, kecil = terbatas.<br>
Penutup: Digunakan sesuai kebutuhan bisnis.<br><br>


<h1>Ad-Hoc vs Infrastructure</h1>
Point: Perbedaan ada pada pusat kontrol.<br>
Reason: Ad-Hoc tanpa AP, Infrastructure pakai AP.<br>
Example: Hotspot HP vs WiFi kantor.<br>
Point ulang: Struktur jaringan berbeda.<br><br>

Apa: Dua mode jaringan.<br>
Proses: Ad-Hoc (peer-to-peer), Infrastructure (terpusat).<br>
Benefit: Ad-Hoc cepat, Infrastructure stabil.<br>
Dampak: Ad-Hoc tidak stabil, Infrastructure butuh biaya.<br>
Penutup: Bisnis pilih infrastructure.<br><br>


<h1>P4: OS Mobile (4 Lapisan)</h1>
Point: OS mobile terdiri dari beberapa lapisan.<br>
Reason: Untuk modularitas dan keamanan.<br>
Example: Kernel, Libraries, Runtime, Application.<br>
Point ulang: Setiap layer punya fungsi.<br><br>

Apa: Arsitektur berlapis.<br>
Proses: Dari hardware ke aplikasi.<br>
Benefit: Stabil dan aman.<br>
Dampak: Kompleks.<br>
Penutup: Penting untuk sistem besar.<br><br>


<h1>Sandbox Mobile</h1>
Point: Sandbox mobile lebih ketat.<br>
Reason: Data user sensitif.<br>
Example: Permission kamera, lokasi.<br>
Point ulang: Keamanan lebih tinggi.<br><br>

Apa: Isolasi aplikasi.<br>
Proses: Setiap app berjalan sendiri.<br>
Benefit: Aman.<br>
Dampak: Akses terbatas.<br>
Penutup: Tingkatkan kepercayaan user.<br><br>


<h1>P5: LMK, IPC, Intent</h1>
Point: Android mengatur proses secara prioritas.<br>
Reason: Untuk efisiensi RAM.<br>
Example: Foreground vs Background.<br>
Point ulang: Penting untuk performa.<br><br>

Apa: Sistem manajemen proses.<br>
Proses: LMK, IPC, Intent.<br>
Benefit: Efisien dan fleksibel.<br>
Dampak: App bisa tertutup tiba-tiba.<br>
Penutup: Harus handle lifecycle.<br><br>


<h1>Intent Eksplisit vs Implisit</h1>
Point: Ada dua jenis intent.<br>
Reason: Berdasarkan target.<br>
Example: Eksplisit (langsung), Implisit (berdasarkan aksi).<br>
Point ulang: Cara pemanggilan berbeda.<br><br>

Apa: Komunikasi antar komponen.<br>
Proses: Eksplisit vs implisit.<br>
Benefit: Eksplisit aman, Implisit fleksibel.<br>
Dampak: Implisit ambigu.<br>
Penutup: Digunakan sesuai kebutuhan.<br><br>


<h1>P6: Native vs Hybrid vs PWA</h1>
Point: Tidak ada solusi terbaik mutlak.<br>
Reason: Semua tergantung kebutuhan.<br>
Example: Native (cepat), Hybrid (efisien), PWA (murah).<br>
Point ulang: Harus lihat konteks.<br><br>

Apa: Tiga pendekatan development.<br>
Proses: Native, Hybrid, PWA.<br>
Benefit: Fleksibel pilihan.<br>
Dampak: Trade-off performa dan biaya.<br>
Penutup: Pilih sesuai kebutuhan bisnis.<br><br>


<h1>Perbandingan</h1>
<table border="1">
<tr>
<th>Dimensi</th>
<th>Native</th>
<th>Hybrid</th>
<th>PWA</th>
</tr>
<tr>
<td>Performa</td>
<td>Tinggi</td>
<td>Sedang</td>
<td>Rendah</td>
</tr>
<tr>
<td>Biaya</td>
<td>Mahal</td>
<td>Sedang</td>
<td>Murah</td>
</tr>
<tr>
<td>Fitur</td>
<td>Lengkap</td>
<td>Terbatas</td>
<td>Minimal</td>
</tr>
<tr>
<td>Maintenance</td>
<td>Kompleks</td>
<td>Mudah</td>
<td>Sangat Mudah</td>
</tr>
</table>

<br>
Rekomendasi: Untuk aplikasi inventaris dengan budget terbatas → Hybrid atau PWA.<br>
