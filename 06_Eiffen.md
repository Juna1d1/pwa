Analisis Strategi Pengembangan Aplikasi Mobile (WMC)
Dokumentasi ini menjelaskan perbandingan antara tiga teknologi utama dalam pengembangan aplikasi mobile: Native, Hybrid, dan Progressive Web Apps (PWA), serta kaitannya dengan arsitektur sistem operasi.

1. Akses Hardware dan Kemampuan Sistem
Dalam pengembangan aplikasi mobile, akses terhadap hardware (seperti NFC, Kamera, dan Sensor) ditentukan oleh kedekatan aplikasi dengan lapisan Linux Kernel.

- Native App memiliki keunggulan mutlak karena memiliki akses penuh (full access) ke hardware dengan performa maksimal.

- Hybrid App menggunakan framework (seperti React Native atau Flutter) yang membutuhkan bridge atau plugin tambahan untuk berkomunikasi dengan hardware.

- PWA adalah yang paling terbatas karena hanya bisa mengakses fitur hardware yang disediakan oleh standar API browser (Web Standard).

2. Performa dan Pengalaman Pengguna
Dilihat dari sisi performa, Native App menempati posisi tertinggi (High Performance) karena kodenya dikompilasi langsung menjadi bahasa mesin yang dipahami oleh Android Runtime (ART).

- Aplikasi Hybrid berada di tingkat menengah; meski cukup cepat, terdapat overhead proses karena adanya lapisan abstraksi.

- Sementara itu, PWA mengandalkan Service Workers untuk menjalankan fungsi di latar belakang agar bisa diakses secara offline, namun tetap belum bisa menandingi kecepatan eksekusi aplikasi yang terinstal secara native.

3. Efisiensi Biaya dan Manajemen Tim
Dimensi biaya menjadi pertimbangan utama dalam manajemen proyek perangkat lunak.

- Pengembangan Native cenderung mahal karena membutuhkan tim spesifik untuk setiap platform (Android dan iOS).

- Hybrid menawarkan efisiensi karena satu basis kode dapat digunakan untuk berbagai platform (cross-platform).

- PWA adalah solusi dengan biaya terendah (Low Cost) karena cukup menggunakan teknologi web standar (HTML, CSS, JS) yang dapat diakses secara universal tanpa harus melalui proses verifikasi ketat di PlayStore atau App Store.

4. Penempatan dan Kasus Penggunaan (Best Practice)
Pemilihan teknologi harus disesuaikan dengan kebutuhan pengguna akhir:

- Native adalah pilihan tepat untuk aplikasi yang membutuhkan pemrosesan grafis berat seperti AR/VR atau game berkualitas tinggi.

- Hybrid sangat ideal untuk aplikasi bisnis seperti Point of Sale (POS) atau aplikasi E-commerce yang memerlukan pembaruan fitur secara cepat di berbagai platform.

- PWA sangat efektif untuk portal informasi atau konten berbasis teks yang mengutamakan kecepatan akses tanpa harus membebani memori penyimpanan perangkat pengguna.
