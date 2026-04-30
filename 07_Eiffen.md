<h1>Ringkasan Modul 1–6 (PREP + APBDP - Versi Detail)</h1>

<h1>P1: Wireless vs Mobile Computing</h1>
Point: Wireless dan Mobile adalah dua konsep yang berbeda dan tidak bisa disamakan.<br>
Reason: Wireless mengacu pada cara perangkat berkomunikasi tanpa kabel, sedangkan Mobile mengacu pada kemampuan perangkat untuk berpindah tempat saat digunakan.<br>
Example: Laptop yang diam di rumah tapi menggunakan WiFi adalah wireless tanpa mobile. Smartphone yang digunakan sambil berjalan dengan jaringan 4G adalah mobile dan wireless. Bahkan perangkat bisa mobile tanpa wireless, misalnya menggunakan kabel LAN melalui adapter saat berpindah.<br>
Point ulang: Jadi wireless dan mobile adalah dua dimensi yang bisa berdiri sendiri atau digabung.<br><br>

Apa: Wireless = komunikasi tanpa kabel, Mobile = mobilitas perangkat.<br>
Proses: Wireless menggunakan gelombang radio untuk mentransmisikan data, sedangkan mobile berfokus pada perpindahan user atau device antar lokasi.<br>
Benefit: Wireless memberikan fleksibilitas tanpa kabel, mobile memberikan fleksibilitas penggunaan di berbagai lokasi.<br>
Dampak: Wireless rentan terhadap gangguan sinyal dan keamanan, mobile membutuhkan efisiensi baterai dan adaptasi jaringan.<br>
Penutup (Konteks Bisnis): Aplikasi seperti ojek online, delivery, dan ride-hailing membutuhkan kombinasi mobile + wireless agar dapat bekerja secara real-time di berbagai lokasi.<br><br>


<h1>P2: Mobility + Handover</h1>
Point: Handover adalah proses penting dalam jaringan mobile saat perangkat berpindah dari satu jaringan ke jaringan lain.<br>
Reason: Tanpa handover, koneksi akan terputus ketika user bergerak melewati batas jangkauan BTS.<br>
Example: Saat kita telepon sambil naik kendaraan, jaringan berpindah dari satu tower ke tower lain tanpa kita sadari.<br>
Point ulang: Handover memastikan koneksi tetap berjalan saat user bergerak.<br><br>

Apa: Handover adalah proses perpindahan koneksi antar base station.<br>
Proses: Ada dua jenis utama yaitu Hard Handoff (break-before-make) dan Soft Handoff (make-before-break).<br>
Benefit: Hard handoff lebih sederhana dan hemat resource, soft handoff memberikan koneksi lebih stabil.<br>
Dampak: Hard handoff bisa menyebabkan call drop, soft handoff membutuhkan resource lebih besar dan kompleksitas tinggi.<br>
Penutup (Konteks Bisnis): Operator telekomunikasi memilih jenis handoff berdasarkan layanan, misalnya voice call premium lebih cocok menggunakan soft handoff untuk kualitas suara yang stabil.<br><br>


<h1>P3: Jenis Jaringan (WPAN, WLAN, WMAN, WWAN)</h1>
Point: Jaringan komputer dibedakan berdasarkan jangkauan wilayahnya.<br>
Reason: Setiap skala jaringan memiliki kebutuhan teknologi, biaya, dan performa yang berbeda.<br>
Example: WPAN digunakan untuk perangkat pribadi seperti Bluetooth, WLAN untuk jaringan lokal seperti WiFi, WMAN untuk jaringan kota seperti WiMAX, dan WWAN untuk jaringan luas seperti 4G/5G.<br>
Point ulang: Semakin luas jangkauan jaringan, semakin kompleks dan mahal infrastrukturnya.<br><br>

Apa: Empat jenis jaringan berdasarkan cakupan area.<br>
Proses: WPAN → WLAN → WMAN → WWAN (dari kecil ke besar).<br>
Benefit: Fleksibilitas dalam memilih teknologi sesuai kebutuhan.<br>
Dampak: Jaringan luas memiliki latency lebih tinggi dan biaya lebih besar.<br>
Penutup (Konteks Bisnis): Perusahaan memilih jenis jaringan berdasarkan kebutuhan, misalnya kantor menggunakan WLAN, sedangkan aplikasi global menggunakan WWAN.<br><br>


<h1>Ad-Hoc vs Infrastructure</h1>
Point: Perbedaan utama antara Ad-Hoc dan Infrastructure adalah keberadaan pusat kontrol.<br>
Reason: Ad-Hoc tidak memiliki access point, sedangkan Infrastructure memiliki access point sebagai pusat komunikasi.<br>
Example: Hotspot antar HP adalah Ad-Hoc, sedangkan WiFi kantor menggunakan router adalah Infrastructure.<br>
Point ulang: Struktur jaringan menentukan stabilitas dan skalabilitas.<br><br>

Apa: Dua mode komunikasi jaringan.<br>
Proses: Ad-Hoc bersifat peer-to-peer, Infrastructure bersifat terpusat.<br>
Benefit: Ad-Hoc mudah dan cepat dibuat, Infrastructure lebih stabil dan scalable.<br>
Dampak: Ad-Hoc tidak cocok untuk skala besar, Infrastructure membutuhkan biaya dan manajemen.<br>
Penutup (Konteks Bisnis): Untuk perusahaan atau organisasi besar, Infrastructure menjadi pilihan utama karena lebih stabil dan mudah dikontrol.<br><br>


<h1>P4: OS Mobile (4 Lapisan)</h1>
Point: Sistem operasi mobile memiliki arsitektur berlapis untuk mengatur seluruh sistem.<br>
Reason: Pembagian lapisan memudahkan pengelolaan, keamanan, dan pengembangan aplikasi.<br>
Example: Layer terdiri dari Kernel (hardware), Libraries (fungsi dasar), Runtime (eksekusi), dan Application (aplikasi user).<br>
Point ulang: Setiap layer memiliki tanggung jawab spesifik.<br><br>

Apa: Arsitektur OS mobile terdiri dari beberapa lapisan.<br>
Proses: Hardware → Kernel → Libraries → Runtime → Application.<br>
Benefit: Sistem menjadi modular, aman, dan stabil.<br>
Dampak: Kompleksitas meningkat dan debugging lebih sulit.<br>
Penutup (Konteks Bisnis): Arsitektur ini memungkinkan aplikasi berjalan stabil di berbagai jenis perangkat dengan spesifikasi berbeda.<br><br>


<h1>Sandbox Mobile</h1>
Point: Sandbox pada mobile lebih ketat dibandingkan desktop.<br>
Reason: Mobile menyimpan data sensitif seperti lokasi, kamera, dan kontak.<br>
Example: Aplikasi harus meminta izin sebelum mengakses kamera atau lokasi.<br>
Point ulang: Keamanan adalah prioritas utama pada sistem mobile.<br><br>

Apa: Sandbox adalah mekanisme isolasi aplikasi.<br>
Proses: Setiap aplikasi berjalan di lingkungan terpisah dan tidak bisa sembarangan mengakses data aplikasi lain.<br>
Benefit: Melindungi data pengguna dari aplikasi berbahaya.<br>
Dampak: Developer harus mengikuti aturan ketat dan akses menjadi terbatas.<br>
Penutup (Konteks Bisnis): Keamanan yang tinggi meningkatkan kepercayaan pengguna terhadap aplikasi.<br><br>


<h1>P5: LMK, IPC, Intent</h1>
Point: Android memiliki sistem manajemen proses untuk menjaga performa.<br>
Reason: Perangkat mobile memiliki keterbatasan RAM dan resource.<br>
Example: Aplikasi foreground diprioritaskan, sedangkan background bisa dihentikan oleh sistem.<br>
Point ulang: Manajemen proses penting untuk menjaga stabilitas sistem.<br><br>

Apa: LMK (Low Memory Killer), IPC (Inter Process Communication), dan Intent adalah mekanisme inti Android.<br>
Proses: LMK menghapus aplikasi yang tidak penting, IPC menghubungkan proses, Intent menghubungkan komponen aplikasi.<br>
Benefit: Sistem menjadi efisien dan fleksibel.<br>
Dampak: Aplikasi bisa berhenti tiba-tiba jika tidak dikelola dengan baik.<br>
Penutup (Konteks Bisnis): Developer harus membuat aplikasi yang tahan terhadap perubahan lifecycle agar tidak crash.<br><br>


<h1>Intent Eksplisit vs Implisit</h1>
Point: Intent dibagi menjadi dua jenis berdasarkan cara pemanggilan target.<br>
Reason: Perbedaan ini menentukan fleksibilitas dan kontrol aplikasi.<br>
Example: Eksplisit langsung menuju activity tertentu, implisit berdasarkan aksi seperti membuka browser atau share file.<br>
Point ulang: Perbedaan utama ada pada cara menentukan tujuan.<br><br>

Apa: Intent adalah mekanisme komunikasi antar komponen Android.<br>
Proses: Eksplisit menentukan target langsung, implisit menggunakan sistem untuk memilih aplikasi yang sesuai.<br>
Benefit: Eksplisit lebih aman dan terkontrol, implisit lebih fleksibel dan reusable.<br>
Dampak: Implisit bisa ambigu atau menimbulkan risiko keamanan jika tidak dibatasi.<br>
Penutup (Konteks Bisnis): Gunakan eksplisit untuk fitur sensitif dan implisit untuk integrasi antar aplikasi.<br><br>


<h1>P6: Native vs Hybrid vs PWA</h1>
Point: Tidak ada satu pendekatan terbaik, semua tergantung kebutuhan dan konteks bisnis.<br>
Reason: Setiap pendekatan memiliki kelebihan dan kekurangan masing-masing.<br>
Example: Native untuk performa tinggi, Hybrid untuk efisiensi development, PWA untuk biaya rendah dan akses mudah.<br>
Point ulang: Pemilihan harus berdasarkan kebutuhan spesifik.<br><br>

Apa: Tiga pendekatan pengembangan aplikasi mobile.<br>
Proses: Native (platform khusus), Hybrid (web + wrapper), PWA (web berbasis browser).<br>
Benefit: Fleksibilitas dalam memilih strategi development.<br>
Dampak: Trade-off antara performa, biaya, dan fitur.<br>
Penutup (Konteks Bisnis): Untuk aplikasi inventaris dengan 2 platform dan budget terbatas, Hybrid atau PWA lebih relevan karena menghemat biaya dan waktu development.<br><br>


<h1>Perbandingan Native vs Hybrid vs PWA</h1>
<table border="1">
<tr>
<th>Dimensi</th>
<th>Native</th>
<th>Hybrid</th>
<th>PWA</th>
</tr>
<tr>
<td>Performa</td>
<td>Sangat Tinggi (akses langsung hardware)</td>
<td>Sedang (via bridge)</td>
<td>Rendah (browser-based)</td>
</tr>
<tr>
<td>Biaya Development</td>
<td>Tinggi (2 platform)</td>
<td>Sedang (1 codebase)</td>
<td>Rendah (web saja)</td>
</tr>
<tr>
<td>Akses Fitur Device</td>
<td>Full</td>
<td>Terbatas</td>
<td>Sangat Terbatas</td>
</tr>
<tr>
<td>Maintenance</td>
<td>Kompleks</td>
<td>Lebih Mudah</td>
<td>Paling Mudah</td>
</tr>
<tr>
<td>Use Case</td>
<td>Game, aplikasi berat</td>
<td>Startup, aplikasi bisnis</td>
<td>Dashboard, sistem sederhana</td>
</tr>
</table>

<br>
Kesimpulan: Pemilihan teknologi harus mempertimbangkan performa, biaya, dan kebutuhan bisnis. Tidak ada solusi yang mutlak lebih baik, semuanya tergantung konteks penggunaan.<br>
