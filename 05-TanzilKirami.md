<h1>Manajemen Proses, Komunikasi, Keamanan, dan Optimasi pada Mobile Computing dengan Framwork PREP (Android)</h1>
<h2>Pendahuluan</h2>
Dalam sistem mobile computing, khususnya Android, aplikasi tidak hanya berjalan begitu saja, tetapi dikelola melalui mekanisme yang kompleks agar tetap efisien, aman, dan responsif. Materi ini membahas konsep utama berdasarkan catatan perkuliahan, yaitu manajemen proses, komunikasi antar proses, keamanan, layanan sistem, dan optimasi dengan pendekatan PREP (Point – Reason – Example – Point Reinforcement).

<h2>Killer Process (Manajemen Proses)</h2>
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

