<h1>Manajemen Proses, Komunikasi, Keamanan, dan Optimasi pada Mobile Computing dengan Framwork PREP (Android)</h1>
<h2>Pendahuluan</h2>
Dalam sistem mobile computing, khususnya Android, aplikasi tidak hanya berjalan begitu saja, tetapi dikelola melalui mekanisme yang kompleks agar tetap efisien, aman, dan responsif. Materi ini membahas konsep utama berdasarkan catatan perkuliahan, yaitu manajemen proses, komunikasi antar proses, keamanan, layanan sistem, dan optimasi dengan pendekatan PREP (Point – Reason – Example – Point Reinforcement).

<h2>1. Killer Process (Manajemen Proses)</h2>
Android menggunakan sistem prioritas untuk menentukan aplikasi mana yang harus dipertahankan atau dihentikan ketika resource terbatas.
<b><h3>Point</h3></b>
Android mengelompokkan proses menjadi foreground, background, dan cached untuk mengatur prioritas penggunaan resource.
<b><h3>Reason</h3></b>
Hal ini dilakukan karena perangkat mobile memiliki keterbatasan RAM dan CPU, sehingga perlu ada sistem prioritas agar performa tetap stabil.
<b><h3>Example</h3></b>
-Foreground → aplikasi yang sedang dipakai (chat, game)
-Background → musik atau download
-Cached → aplikasi yang sudah ditutup tapi masih disimpan
<b><h3>Point Reinforcement</h3></b>
Dengan sistem ini, Android dapat menjaga keseimbangan antara performa dan efisiensi.
Foreground process adalah aplikasi yang sedang digunakan dan memiliki prioritas tertinggi. Sistem tidak akan menghentikan proses ini karena berhubungan langsung dengan pengalaman pengguna.

Background process tetap berjalan meskipun tidak terlihat, tetapi dapat dihentikan jika sistem membutuhkan memori. Sementara itu, cached process hanya disimpan untuk mempercepat pembukaan ulang aplikasi dan akan dihapus terlebih dahulu jika memori penuh.

<h2>2. Komunikasi Antar Proses (IPC)</h2>
<b><h3>Point</h3></b>
Komunikasi antar aplikasi di Android dilakukan menggunakan IPC seperti Intent dan WorkManager.
<b><h3>Reason</h3></b>
Karena setiap aplikasi berjalan terpisah (sandbox), diperlukan cara untuk saling berinteraksi.
<b><h3>Example</h3></b>
-Intent → membuka aplikasi lain (share ke WhatsApp)
-WorkManager → menjalankan task background seperti sync data
<b><h3>Point Reinforcement</h3></b>
IPC memungkinkan sistem Android tetap fleksibel dan modular tanpa mengorbankan keamanan.

Intent adalah mekanisme utama komunikasi antar komponen, baik dalam satu aplikasi maupun antar aplikasi. Sedangkan WorkManager digunakan untuk menjalankan proses di background secara efisien dan terjadwal.

Selain itu, Android menggunakan konsep event-driven, yaitu sistem hanya berjalan ketika ada event seperti klik tombol atau notifikasi masuk. Hal ini membuat penggunaan resource menjadi lebih hemat.

<h2>3. Keamanan sistem mobile</h2>
<b><h3>Point</h3></b>
Android menerapkan berbagai mekanisme keamanan seperti permission, proteksi terhadap exploit, dan pencegahan injection.
<b><h3>Reason</h3></b>
Hal ini diperlukan untuk melindungi data pengguna dari akses tidak sah.
<b><h3>Example</h3></b>
-Permission → izin akses kamera/lokasi
-Injection → SQL Injection jika input tidak divalidasi
-NFC → pembayaran digital
<b><h3>Point Reinforcement</h3></b>
Keamanan tidak hanya bergantung pada sistem, tetapi juga pada cara aplikasi dikembangkan.

Permission system memastikan aplikasi tidak bisa sembarangan mengakses data pengguna. Exploit merupakan celah keamanan yang bisa dimanfaatkan hacker, sedangkan injection attack terjadi karena input yang tidak aman.

Teknologi NFC memungkinkan komunikasi jarak dekat, tetapi tetap harus dikelola dengan aman karena berkaitan dengan data sensitif.

<h2>4. Notifikasi & Layanan Sistem</h2>
<b><h3>Point</h3></b>
Layanan sistem seperti notifikasi, GPS, dan media service memungkinkan aplikasi tetap aktif tanpa harus dibuka.
<b><h3>Reason</h3></b>
Pengguna tidak selalu membuka aplikasi, tetapi tetap membutuhkan informasi secara real-time.
<b><h3>Example</h3></b>
-Notifikasi chat
-GPS pada aplikasi maps
-Musik yang tetap berjalan
<b><h3>Point Reinforcement</h3></b>
Layanan sistem meningkatkan fungsionalitas aplikasi tanpa mengganggu user experience.

Notifikasi memungkinkan komunikasi langsung dengan user. GPS digunakan untuk layanan berbasis lokasi, sedangkan media service memungkinkan aplikasi berjalan di background.

Cache juga berperan dalam mempercepat akses data dan mengurangi penggunaan jaringan.

<h2>5. Optimasi Sistem</h2>
<b><h3>Point</h3></b>
Optimasi bertujuan untuk menggunakan resource secara efisien.
<b><h3>Reason</h3></b>
Resource seperti baterai, CPU, dan RAM terbatas pada perangkat mobile.
<b><h3>Example</h3></b>
-Mengurangi background process
-Menggunakan cache
-Mengatur penggunaan GPS
<b><h3>Point Reinforcement</h3></b>
Optimasi yang baik akan menghasilkan aplikasi yang ringan, cepat, dan hemat energi.

Optimasi mencakup pengelolaan CPU, RAM, dan baterai. Konsep aktif dan pasif juga penting, di mana proses aktif lebih cepat tetapi boros, sedangkan proses pasif lebih hemat.

Penggunaan baterai harus diperhatikan karena menjadi faktor utama dalam pengalaman pengguna.

<h2>Kesimpulan</h2>
<b><h3>Point</h3></b>
Mobile computing pada Android menggabungkan manajemen proses, komunikasi, keamanan, dan optimasi.
<b><h3>Reason</h3></b>
Semua aspek ini diperlukan untuk menjaga sistem tetap stabil dan efisien.
<b><h3>Example</h3></b>
Aplikasi modern dapat berjalan di background, mengirim notifikasi, dan tetap hemat baterai.
<b><h3>Point Reinforcement</h3></b>
Dengan memahami konsep ini, developer dapat membangun aplikasi yang optimal dan user-friendly.
