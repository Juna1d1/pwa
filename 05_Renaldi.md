1. Killer Proses (Process Lifecycle)
Bagian atas menjelaskan bagaimana sistem operasi "membunuh" atau menghentikan aplikasi untuk menghemat memori (RAM). Sistem memiliki skala prioritas:

Foreground: Aplikasi yang sedang kamu buka dan berinteraksi langsung di layar. Ini prioritas tertinggi dan hampir tidak pernah dimatikan secara otomatis.

Background: Aplikasi yang tidak terlihat tapi masih bekerja, contohnya GPS (navigasi) atau Music player yang sedang berputar sambil kamu buka aplikasi lain.

Cache: Aplikasi yang sudah kamu tutup tapi masih tersimpan di memori supaya kalau dibuka lagi bisa cepat (warm start). Ini yang pertama kali bakal "dikubur" oleh sistem kalau RAM penuh.

2. Komunikasi Antar Proses (IPC - Inter-Process Communication)
Bagian tengah membahas bagaimana satu aplikasi "ngobrol" dengan aplikasi lain atau dengan sistem:

Intent: Ini adalah "kurir" pesan di Android.

Eksplisit: Kamu menentukan langsung aplikasi mana yang mau dibuka (misal: klik tombol "Buka Profil" di dalam Instagram).

Implisit: Kamu memberikan perintah umum, dan sistem mencari aplikasi yang cocok (misal: klik link web, lalu muncul pilihan mau buka pakai Chrome atau Opera). Di catatanmu tertulis contoh NFC, di mana saat HP ditempel tag NFC, sistem akan mencari aplikasi mana yang bisa menangani data tersebut.

Work Manager: Layanan untuk menjadwalkan tugas di latar belakang yang harus tetap jalan meskipun aplikasi ditutup atau HP di-restart.

Keamanan Data (FBE): Tertulis FBE (File-Based Encryption). Ini adalah metode keamanan di mana setiap file dienkripsi dengan kunci yang berbeda, sehingga data lebih aman dibanding enkripsi seluruh disk sekaligus.

3. Event-Driven & Optimasi (Baterai)
Bagian bawah fokus pada bagaimana perangkat mobile bekerja secara efisien agar baterai tidak boros:

Event-Driven: Aplikasi atau sistem hanya bekerja saat ada "kejadian" tertentu (misal: ada sinyal masuk, ada sentuhan layar).

Optimasi (Active vs Passive):

Aktif: Aplikasi secara agresif meminta data (misal: polling data tiap 5 detik), ini boros baterai.

Pasif: Aplikasi menunggu laporan dari sistem (misal: aplikasi cuaca hanya update kalau sistem mendeteksi kamu pindah lokasi secara signifikan).

Battery & Apps: Menekankan bahwa sinkronisasi antara penggunaan aplikasi dan daya baterai sangat krusial di mobile computing karena keterbatasan resource.

Singkatnya: Papan tulis ini lagi ngebahas gimana caranya HP kamu tetap kencang (dengan manajemen proses), tetap aman (dengan enkripsi), dan nggak cepat habis baterai (dengan optimasi background task).
