<h1>Manajemen Proses, IPC, Keamanan, dan Optimasi Android</h1>

Dokumentasi ini menjelaskan bagaimana Android mengelola proses aplikasi, komunikasi antar proses, keamanan data, serta optimasi penggunaan baterai dalam sistem mobile.<br><br>


<h1>1. Killer Proses (Process Lifecycle & Management)</h1>
Android menggunakan mekanisme Low Memory Killer (LMK) untuk mengelola penggunaan RAM agar sistem tetap stabil dan responsif.<br><br>

Sistem akan mematikan proses berdasarkan prioritas sebagai berikut:<br><br>

- Foreground: Aplikasi yang sedang aktif di layar dan berinteraksi langsung dengan pengguna. Memiliki prioritas tertinggi dan hampir tidak akan dimatikan kecuali dalam kondisi sangat kritis.<br>
- Background: Aplikasi yang tidak terlihat oleh pengguna. Sistem akan membatasi aktivitasnya untuk menghemat baterai dan resource.<br>
- Cache: Aplikasi yang sudah tidak aktif tetapi masih disimpan di RAM untuk mempercepat proses pembukaan kembali. Ini adalah prioritas pertama yang akan dimatikan ketika memori dibutuhkan.<br><br>

Catatan Tambahan:<br>
Foreground Services seperti GPS dan Music tetap berjalan meskipun tidak terlihat di layar karena menjalankan fungsi penting (misalnya navigasi atau pemutaran audio).<br><br>

Apa: Sistem prioritas proses Android.<br>
Proses: LMK menghapus proses mulai dari cache → background → foreground.<br>
Benefit: RAM tetap tersedia dan sistem tetap cepat.<br>
Dampak: Aplikasi bisa tertutup tiba-tiba jika tidak dikelola dengan baik.<br>
Penutup (Konteks Bisnis): Developer harus mengelola lifecycle aplikasi dengan benar agar user experience tetap stabil.<br><br>


<h1>2. Komunikasi Antar Proses (Inter-Process Communication - IPC)</h1>
Android menyediakan mekanisme agar aplikasi dapat saling berkomunikasi dengan aman dan terstruktur.<br><br>

- Intent adalah mekanisme utama untuk komunikasi antar komponen aplikasi.<br>
- Intent Eksplisit digunakan untuk memanggil komponen tertentu dalam aplikasi yang sama.<br>
- Intent Implisit digunakan untuk meminta sistem mencari aplikasi lain yang dapat menangani suatu aksi (misalnya membuka link atau berbagi data).<br><br>

Selain itu:<br>
- Work Manager digunakan untuk menjalankan tugas di latar belakang yang terjadwal dan tetap berjalan meskipun aplikasi ditutup atau perangkat di-restart.<br><br>

Apa: Mekanisme komunikasi antar aplikasi.<br>
Proses: Menggunakan Intent dan Work Manager.<br>
Benefit: Fleksibel dan modular dalam pengembangan aplikasi.<br>
Dampak: Kesalahan penggunaan dapat menyebabkan bug atau masalah keamanan.<br>
Penutup (Konteks Bisnis): Digunakan untuk integrasi fitur seperti share, notifikasi, dan sinkronisasi data.<br><br>


<h1>3. Keamanan Data & Event Driven</h1>

Keamanan Data (FBE - File-Based Encryption):<br>
Android menggunakan sistem enkripsi berbasis file untuk melindungi data pengguna.<br>
Setiap file dapat memiliki kunci enkripsi yang berbeda, sehingga meningkatkan keamanan.<br>
Fitur ini juga memungkinkan Direct Boot, yaitu beberapa fungsi tetap berjalan meskipun perangkat belum dibuka oleh pengguna.<br><br>

Event Driven:<br>
Aplikasi mobile bekerja berdasarkan event (kejadian) seperti klik tombol, sensor, atau notifikasi.<br>
Sistem akan merespon setiap event dengan menjalankan fungsi tertentu.<br><br>

Apa: Sistem keamanan dan arsitektur berbasis event.<br>
Proses: Enkripsi data + respon terhadap event user/system.<br>
Benefit: Data lebih aman dan aplikasi lebih responsif.<br>
Dampak: Kompleksitas meningkat dalam pengembangan.<br>
Penutup (Konteks Bisnis): Keamanan dan responsivitas meningkatkan kepercayaan dan kenyamanan pengguna.<br><br>


<h1>4. Optimasi & Battery (Manajemen Daya)</h1>
Perangkat mobile memiliki keterbatasan daya sehingga diperlukan strategi optimasi yang efisien.<br><br>

- Aktif vs Pasif:<br>
Aplikasi aktif terus mengambil data (misalnya GPS real-time), sedangkan aplikasi pasif hanya merespon ketika ada permintaan dari sistem atau aplikasi lain.<br><br>

- Battery & Apps:<br>
Perilaku aplikasi sangat mempengaruhi konsumsi baterai. Aplikasi yang berjalan terus-menerus di background akan mempercepat pengurasan daya.<br><br>

Apa: Strategi pengelolaan daya pada aplikasi mobile.<br>
Proses: Mengatur aktivitas aplikasi agar efisien.<br>
Benefit: Menghemat baterai dan meningkatkan performa perangkat.<br>
Dampak: Fitur aplikasi bisa terbatas jika terlalu dibatasi.<br>
Penutup (Konteks Bisnis): Aplikasi yang hemat baterai lebih disukai pengguna dan memiliki retensi yang lebih tinggi.<br><br>


<h1>5. Ringkasan Prioritas Proses</h1>
<table border="1">
<tr>
<th>Jenis Proses</th>
<th>Prioritas</th>
<th>Kondisi</th>
<th>Kemungkinan Dimatikan</th>
</tr>

<tr>
<td>Foreground</td>
<td>Tinggi</td>
<td>Sedang digunakan user</td>
<td>Sangat kecil</td>
</tr>

<tr>
<td>Background</td>
<td>Sedang</td>
<td>Tidak terlihat user</td>
<td>Bisa dimatikan</td>
</tr>

<tr>
<td>Cache</td>
<td>Rendah</td>
<td>Tidak aktif</td>
<td>Paling cepat dimatikan</td>
</tr>
</table>

<br>
Kesimpulan: Android mengelola proses, komunikasi, keamanan, dan daya secara terintegrasi untuk menjaga keseimbangan antara performa, efisiensi, dan pengalaman pengguna. Developer harus memahami mekanisme ini agar aplikasi tetap stabil, aman, dan hemat resource.<br>
