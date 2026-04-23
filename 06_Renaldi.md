- Satu Kesatuan: WMC, Web App, dan Framework
Dalam dunia Mobile & Wireless Computing (WMC), fokus utamanya adalah bagaimana menyediakan layanan digital kepada pengguna yang bergerak bebas (mobile) melalui jaringan nirkabel. Tantangan terbesarnya adalah keterbatasan perangkat (baterai, layar kecil) dan variasi sinyal. Di sinilah Teknologi Mobile Web Aplikasi berperan sebagai solusi untuk mendistribusikan konten tanpa harus memaksa pengguna mengunduh aplikasi besar. Agar pengembangan ini efisien, kita menggunakan Framework, yaitu kerangka kerja siap pakai yang membantu developer membangun aplikasi lebih cepat dan terstruktur.

- Narasi Strategi Pengembangan Aplikasi (Analisis Papan Tulis)
Jika kita merangkum catatan papan tulis kamu ke dalam satu penjelasan komprehensif, maka gambarannya seperti ini:

Pemilihan strategi pengembangan aplikasi sangat bergantung pada Dimensi Akses Hardware dan Performa yang dibutuhkan. Jika sebuah proyek memerlukan integrasi mendalam seperti NFC dan kamera dengan kecepatan tinggi (seperti aplikasi AR/VR), maka pendekatan Native adalah pilihan mutlak meskipun memakan Biaya Tim yang besar karena butuh spesialis di tiap OS.

Namun, jika efisiensi waktu adalah kunci, kita bisa menggunakan Hybrid Framework (seperti React Native atau Capacitor). Pendekatan ini memungkinkan satu basis kode untuk didistribusikan ke PlayStore dan AppStore sekaligus dengan performa yang tetap mumpuni untuk kebutuhan bisnis seperti aplikasi POS (Point of Sale). Di sisi lain, bagi layanan yang mengutamakan kemudahan akses tanpa hambatan instalasi, PWA (Progressive Web App) hadir dengan memanfaatkan Service Worker dan API Web standar. Meskipun akses hardware-nya terbatas, PWA sangat unggul dari segi biaya rendah dan kemudahan distribusi karena pengguna cukup mengaksesnya melalui URL saja.

Sedikit Catatan buat Kamu:
Di papan tulis ada tulisan "EPP" dan "POS" di kolom Hybrid. Itu contoh kasus yang pas banget:

- EPP (Employee Portal Program): Biasanya butuh cepat dan fitur gak neko-neko, jadi Hybrid udah lebih dari cukup.

- POS (Point of Sale): Butuh konek ke printer atau scanner (hardware), tapi tetep pengen gampang di-update di banyak device, makanya Hybrid sering jadi pilihan.
