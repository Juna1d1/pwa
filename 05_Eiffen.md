1. Killer Proses (Process Lifecycle & Management)
Bagian ini menjelaskan hierarki bagaimana Android mematikan proses aplikasi untuk menghemat RAM (Low Memory Killer). Sistem akan mematikan proses berdasarkan prioritas:

Foreground: Aplikasi yang sedang aktif di layar dan berinteraksi dengan pengguna. Ini memiliki prioritas tertinggi dan terakhir untuk dimatikan.

Background (ditulis "Badground"): Aplikasi yang tidak terlihat oleh pengguna. Android sering membatasi aktivitas ini untuk menghemat baterai.

Cache: Aplikasi yang sudah berhenti tetapi prosesnya masih disimpan di RAM agar saat dibuka kembali terasa cepat. Ini adalah yang pertama akan "dibunuh" jika sistem butuh memori.

Catatan Tambahan: Ada tulisan mengenai GPS & Music. Ini merujuk pada Foreground Services, di mana aplikasi tetap berjalan meski tidak di layar karena melakukan fungsi krusial (seperti navigasi atau memutar lagu).

2. Komunikasi Antar Proses (Inter-Process Communication - IPC)
Bagian ini membahas bagaimana satu aplikasi berbicara dengan aplikasi lain atau dengan sistem:

Intent: Mekanisme utama di Android untuk meminta aksi dari komponen aplikasi lain.

Eksplisit: Memanggil komponen spesifik (misal: membuka halaman Login di aplikasi yang sama).

Implisit: Meminta sistem mencari aplikasi yang bisa menangani aksi tertentu (misal: membuka link di browser, atau menggunakan NFC untuk transfer data).

Work Manager: Library untuk mengelola tugas di latar belakang (background tasks) yang terjadwal, tetap berjalan meskipun aplikasi ditutup atau perangkat di-restart.

3. Keamanan Data & Event Driven
Keamanan Data (FBE): Merujuk pada File-Based Encryption. Ini adalah fitur keamanan di mana file-file berbeda dienkripsi dengan kunci yang berbeda, memungkinkan fitur seperti Direct Boot (beberapa fungsi HP tetap jalan sebelum user memasukkan PIN/pola).

Event Driven: Arsitektur aplikasi mobile yang bereaksi berdasarkan kejadian (event), seperti penekanan tombol, sensor, atau notifikasi masuk.

4. Optimasi & Battery (Manajemen Daya)
Ponsel memiliki sumber daya terbatas (baterai), sehingga perlu optimasi:

Aktif vs Pasif: Strategi aplikasi dalam mengambil data. Misalnya, aplikasi "pasif" hanya akan memperbarui lokasi jika ada aplikasi lain yang memintanya, sehingga lebih hemat baterai.

Battery & Apps: Hubungan antara perilaku aplikasi terhadap ketahanan baterai perangkat.
