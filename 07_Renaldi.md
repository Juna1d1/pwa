1.	 apa perbedaan wireless & mobile computing, berikan contoh yang hanya wireless, hanya mobile dan keduanya.
Point (Pernyataan Utama)
Perbedaan utama antara wireless computing dan mobile computing terletak pada fokusnya:
•	Wireless computing berfokus pada teknologi jaringan tanpa kabel. 
•	Mobile computing berfokus pada kemampuan perangkat untuk digunakan secara berpindah (mobile), baik dengan atau tanpa koneksi wireless. 
________________________________________
Reason (Alasan)
•	Wireless computing menggunakan media transmisi tanpa kabel seperti Wi-Fi, Bluetooth, atau jaringan seluler untuk komunikasi data. Perangkatnya tidak harus berpindah tempat. 
•	Mobile computing menekankan mobilitas pengguna/perangkat, artinya perangkat bisa digunakan saat berpindah lokasi, meskipun koneksinya bisa offline atau menggunakan kabel. 
________________________________________
Example (Contoh)
1.	Hanya Wireless (tidak mobile) 
o	PC desktop di rumah yang terhubung ke Wi-Fi
→ Wireless karena tanpa kabel, tapi tidak mobile karena tidak berpindah. 
2.	Hanya Mobile (tidak wireless) 
o	Laptop yang digunakan di mobil tapi memakai kabel LAN atau tanpa koneksi (offline)
→ Mobile karena berpindah, tapi tidak wireless. 
3.	Keduanya (Wireless + Mobile) 
o	Smartphone yang menggunakan jaringan 4G/5G atau Wi-Fi saat berpindah tempat
→ Wireless dan mobile sekaligus. 
________________________________________
Point (Penegasan Ulang)
Jadi, wireless computing = cara koneksi (tanpa kabel), sedangkan mobile computing = cara penggunaan (berpindah tempat). Keduanya bisa berdiri sendiri, tetapi sering juga digunakan bersamaan dalam kehidupan sehari-hari.

2.	apa perbedaan hard vs soft handoff? mana yang lebih baik untuk voice call dan mengapa?
Point (Pernyataan Utama)
Perbedaan utama antara hard handoff dan soft handoff adalah pada cara perpindahan koneksi antar sel:
•	Hard handoff: koneksi lama diputus dulu, baru pindah ke koneksi baru (break before make). 
•	Soft handoff: koneksi lama tetap aktif sambil membangun koneksi baru (make before break). 
Untuk voice call, soft handoff lebih baik.
________________________________________
Reason (Alasan)
•	Hard handoff berisiko menyebabkan jeda atau bahkan putus panggilan karena ada waktu kosong saat perpindahan koneksi. 
•	Soft handoff menjaga kontinuitas koneksi karena perangkat terhubung ke lebih dari satu base station secara bersamaan, sehingga suara tetap stabil tanpa gangguan. 
________________________________________
Example (Contoh)
•	Hard handoff: terjadi pada jaringan seperti GSM → saat berpindah sel, kadang suara bisa terputus sesaat. 
•	Soft handoff: digunakan pada CDMA → saat berpindah sel, panggilan tetap lancar karena ada overlap koneksi. 
________________________________________
Point (Penegasan Ulang)
Jadi, soft handoff lebih baik untuk voice call karena mampu menjaga kualitas suara tetap stabil tanpa putus, sedangkan hard handoff lebih sederhana tetapi berisiko gangguan komunikasi.




3.	sebutkan standar ieee untuk masing masing kategori. apa yang membedakan ad-hoc dari infrastructure mode?
Point (Pernyataan Utama)
Standar IEEE untuk jaringan wireless berbeda-beda tergantung kategorinya, dan perbedaan utama antara ad-hoc dan infrastructure mode terletak pada keberadaan access point (AP).
________________________________________
Reason (Alasan)
•	IEEE membuat berbagai standar agar komunikasi jaringan memiliki aturan yang jelas dan kompatibel. 
•	Ad-hoc mode tidak menggunakan access point, sehingga perangkat saling terhubung langsung (peer-to-peer). 
•	Infrastructure mode menggunakan access point sebagai pusat komunikasi, sehingga semua perangkat terhubung melalui AP. 
________________________________________
Example (Contoh)
1. Standar IEEE untuk kategori wireless:
•	IEEE 802.11 → WLAN (Wi-Fi) 
•	IEEE 802.15 → Bluetooth, ZigBee 
•	IEEE 802.16 → WMAN 
•	IEEE 802.20 → Mobile broadband (jarang digunakan) 
2. Perbedaan mode jaringan:
•	Ad-hoc mode 
o	Contoh: Laptop ke laptop langsung via Wi-Fi tanpa router 
o	Tidak ada access point 
•	Infrastructure mode 
o	Contoh: HP/laptop terhubung ke Wi-Fi melalui router rumah 
o	Menggunakan access point 
________________________________________
Point (Penegasan Ulang)
Jadi, standar IEEE membedakan jenis jaringan wireless berdasarkan cakupan dan teknologi, sedangkan perbedaan utama ad-hoc dan infrastructure adalah ada atau tidaknya access point sebagai pusat komunikasi.

4.	arsitektur 4 lapisan + sadbox(os mobile) jelaskan fungsi masing masing lapisan. mengapa sandboxing lebih ketat di mobile dibanding dekstop?
Point (Pernyataan Utama)
Arsitektur OS mobile umumnya terdiri dari 4 lapisan utama, dan menggunakan sandboxing untuk membatasi akses aplikasi. Sandboxing di mobile lebih ketat dibanding desktop karena faktor keamanan dan privasi.
________________________________________
Reason (Alasan)
Setiap lapisan punya fungsi spesifik agar sistem berjalan stabil dan aman:
1.	Kernel Layer → inti OS yang mengatur hardware (CPU, memori, driver). 
2.	Libraries / Native Layer → menyediakan library dasar (grafik, database, media). 
3.	Application Framework → menyediakan API untuk developer (UI, notifikasi, dll). 
4.	Application Layer → tempat aplikasi berjalan (user apps). 
Sandboxing lebih ketat di mobile karena:
•	Perangkat mobile menyimpan data sensitif (kontak, kamera, lokasi). 
•	Aplikasi sering diunduh dari internet (risiko malware tinggi). 
•	Mobile digunakan secara personal → butuh isolasi antar aplikasi. 
________________________________________
Example (Contoh)
Pada Android:
•	Kernel: berbasis Linux untuk manajemen hardware 
•	Libraries: SQLite, WebKit 
•	Framework: Activity Manager, Notification Manager 
•	Application: WhatsApp, Instagram 
Sandbox:
•	Setiap aplikasi punya ruang sendiri (tidak bisa akses data aplikasi lain tanpa izin). 
•	Misalnya aplikasi galeri tidak bisa langsung akses kontak tanpa permission. 
Perbandingan dengan desktop (misalnya Windows):
•	Aplikasi bisa lebih bebas akses file system 
•	Sandboxing tidak seketat mobile secara default 
________________________________________
Point (Penegasan Ulang)
Jadi, 4 lapisan OS mobile bekerja secara terstruktur dari hardware hingga aplikasi, dan sandboxing lebih ketat di mobile untuk melindungi data pengguna serta mencegah aplikasi saling mengganggu atau membahayakan sistem.






















5.	jelaskan hierarki prosses android. apa perbedaan intent eksplisit vs implisit?
Point (Pernyataan Utama)
Hierarki proses pada Android menentukan prioritas aplikasi berdasarkan tingkat kepentingannya, sedangkan intent dibagi menjadi eksplisit dan implisit berdasarkan cara pemanggilan komponen aplikasi.
________________________________________
Reason (Alasan)
•	Android mengelompokkan proses agar sistem bisa mengatur memori dan performa secara efisien (misalnya saat RAM penuh). 
•	Intent digunakan untuk komunikasi antar komponen (Activity, Service, dll): 
o	Eksplisit → langsung menyebut target komponen. 
o	Implisit → tidak menyebut target, sistem yang mencarikan aplikasi yang cocok. 
________________________________________
Example (Contoh)
1. Hierarki Proses Android (dari prioritas tertinggi ke terendah):
•	Foreground Process → aplikasi yang sedang digunakan (layar aktif) 
•	Visible Process → terlihat tapi tidak aktif (misalnya dialog di belakang) 
•	Service Process → berjalan di background (musik, download) 
•	Background Process → aplikasi yang tidak terlihat 
•	Empty Process → tidak ada aktivitas, hanya cache 
Contoh:
•	Main game → foreground 
•	Musik berjalan → service 
•	App yang sudah ditutup tapi masih di RAM → background/empty 
________________________________________
2. Perbedaan Intent:
•	Intent Eksplisit 
o	Contoh: buka Activity tertentu dalam aplikasi sendiri 
o	Developer sudah tahu tujuan pasti 
•	Intent Implisit 
o	Contoh: share foto → sistem menampilkan pilihan aplikasi (WhatsApp, Email, dll) 
o	Sistem memilih aplikasi yang sesuai 
________________________________________
Point (Penegasan Ulang)
Jadi, hierarki proses Android mengatur prioritas aplikasi agar sistem tetap optimal, sedangkan intent eksplisit bersifat langsung (target jelas) dan implisit bersifat fleksibel (dipilih oleh sistem).

6.	native vs hybrid vs pwa. klien ingin  aplikasi inventaris untuk 2 platform dengan budget terbatas. strategi mana yang direkomendasikan dan mengapa?

Aspek	Native App	Hybrid App	PWA (Progressive Web App)
Platform	Spesifik (Android/iOS)	Multi-platform (1 codebase)	Web (bisa diakses via browser)
Teknologi	Java/Kotlin (Android), Swift (iOS)	HTML, CSS, JS (React Native, Ionic, dll)	HTML, CSS, JS
Performa	⭐⭐⭐⭐⭐ (paling cepat)	⭐⭐⭐ (cukup)	⭐⭐ (tergantung browser)
Biaya Development	❌ Mahal (2 tim / 2 codebase)	✅ Lebih hemat	✅ Paling murah
Akses Hardware	Full (kamera, GPS, dll)	Hampir full (via plugin)	Terbatas
Maintenance	❌ Rumit (pisah platform)	✅ Lebih mudah	✅ Sangat mudah
Installasi	Lewat Play Store/App Store	Lewat Store	Bisa tanpa install (browser)
Offline Mode	Sangat baik	Baik	Terbatas (pakai cache)

