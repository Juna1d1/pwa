<h1>Analisis Strategi Pengembangan Aplikasi Mobile (WMC)</h1>

Dokumentasi ini menjelaskan perbandingan antara tiga teknologi utama dalam pengembangan aplikasi mobile: Native, Hybrid, dan Progressive Web Apps (PWA), serta kaitannya dengan arsitektur sistem operasi.<br><br>


<h1>1. Akses Hardware dan Kemampuan Sistem</h1>
Dalam pengembangan aplikasi mobile, akses terhadap hardware (seperti NFC, Kamera, dan Sensor) sangat dipengaruhi oleh kedekatan aplikasi dengan lapisan Linux Kernel.<br><br>

- Native App memiliki keunggulan karena memiliki akses penuh (full access) ke hardware sehingga mampu memberikan performa maksimal.<br>
- Hybrid App menggunakan framework seperti React Native atau Flutter yang membutuhkan bridge atau plugin tambahan untuk berkomunikasi dengan hardware.<br>
- PWA memiliki keterbatasan karena hanya dapat mengakses fitur hardware yang disediakan oleh standar API browser (Web Standard).<br><br>


<h1>2. Performa dan Pengalaman Pengguna</h1>
Dari sisi performa, setiap pendekatan memiliki karakteristik yang berbeda.<br><br>

- Native App memiliki performa tertinggi (High Performance) karena kodenya dikompilasi langsung menjadi bahasa mesin yang dijalankan oleh Android Runtime (ART).<br>
- Hybrid App berada di tingkat menengah karena terdapat lapisan abstraksi yang menimbulkan overhead, meskipun tetap cukup responsif untuk banyak kebutuhan aplikasi bisnis.<br>
- PWA mengandalkan Service Workers untuk menjalankan fungsi tertentu secara offline, namun performanya masih berada di bawah aplikasi native karena bergantung pada browser.<br><br>


<h1>3. Efisiensi Biaya dan Manajemen Tim</h1>
Biaya pengembangan menjadi faktor penting dalam menentukan strategi aplikasi mobile.<br><br>

- Native App membutuhkan biaya tinggi karena memerlukan tim pengembang terpisah untuk setiap platform (Android dan iOS).<br>
- Hybrid App lebih efisien karena menggunakan satu basis kode (codebase) yang dapat dijalankan di berbagai platform (cross-platform).<br>
- PWA merupakan solusi dengan biaya terendah karena hanya menggunakan teknologi web standar seperti HTML, CSS, dan JavaScript serta tidak memerlukan proses distribusi melalui App Store atau Play Store.<br><br>


<h1>4. Penempatan dan Kasus Penggunaan (Best Practice)</h1>
Pemilihan teknologi harus disesuaikan dengan kebutuhan pengguna dan konteks bisnis.<br><br>

- Native App cocok digunakan untuk aplikasi yang membutuhkan performa tinggi seperti game, augmented reality (AR), dan virtual reality (VR).<br>
- Hybrid App ideal untuk aplikasi bisnis seperti Point of Sale (POS) atau E-commerce yang membutuhkan pengembangan cepat dan dukungan multi-platform.<br>
- PWA sangat cocok untuk portal informasi, website berita, atau aplikasi berbasis konten yang mengutamakan akses cepat dan ringan tanpa membebani perangkat pengguna.<br><br>


<h1>5. Tabel Perbandingan</h1>
<table border="1">
<tr>
<th>Dimensi</th>
<th>Native</th>
<th>Hybrid</th>
<th>PWA</th>
</tr>

<tr>
<td>Akses Hardware</td>
<td>Full Access</td>
<td>Terbatas (via plugin/bridge)</td>
<td>Sangat Terbatas (Web API)</td>
</tr>

<tr>
<td>Performa</td>
<td>Sangat Tinggi</td>
<td>Sedang</td>
<td>Rendah - Menengah</td>
</tr>

<tr>
<td>Biaya</td>
<td>Tinggi</td>
<td>Sedang</td>
<td>Rendah</td>
</tr>

<tr>
<td>Maintenance</td>
<td>Kompleks</td>
<td>Lebih Mudah</td>
<td>Paling Mudah</td>
</tr>

<tr>
<td>Distribusi</td>
<td>App Store / Play Store</td>
<td>App Store / Play Store</td>
<td>Browser (tanpa store)</td>
</tr>

<tr>
<td>Use Case</td>
<td>Game, AR/VR, aplikasi berat</td>
<td>Aplikasi bisnis, POS, E-commerce</td>
<td>Portal informasi, dashboard, konten</td>
</tr>
</table>

<br>
Kesimpulan: Tidak ada satu pendekatan yang mutlak lebih baik. Pemilihan Native, Hybrid, atau PWA harus mempertimbangkan kebutuhan fitur, performa, biaya, serta konteks bisnis yang ingin dicapai.<br>
