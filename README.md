# Game Hub Dashboard

Aplikasi dashboard modern untuk game online dengan antarmuka pengguna yang stylish dan responsif. Dashboard ini dirancang untuk menampilkan berbagai game dan menyediakan akses cepat ke fitur-fitur utama.

![Game Hub Dashboard](https://api.placeholder.com/400/320)

## ✨ Fitur

- 💻 **Dashboard Modern** - UI yang clean dan stylish dengan glassmorphism effect
- 🎮 **Game Cards** - Tampilan card interaktif untuk game Crash dan BlackJack
- 📱 **Fully Responsive** - Tampilan optimal di berbagai ukuran perangkat
- 🚀 **Express Backend** - API server dengan routing yang sederhana dan efisien
- 🔄 **Easy Deployment** - Siap deploy ke Vercel dengan konfigurasi yang disediakan

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript Modern
- **Backend**: Node.js dengan Express.js
- **Deployment**: Vercel
- **Icon Library**: Font Awesome
- **Animation**: CSS Animations + JavaScript Interactions

## 📋 Struktur Proyek

```
project-folder/
├── index.js                  # Express server utama
├── package.json            # Konfigurasi npm dan dependencies
├── vercel.json             # Konfigurasi deployment Vercel
├── README.md               # Dokumentasi proyek ini
├── public/                 # File statis
│   ├── dashboard.html      # Halaman dashboard utama
│   ├── crash.html          # Halaman game Crash
│   ├── blackjack.html      # Halaman game BlackJack
│   ├── 404.html            # Halaman error 404
│   ├── 500.html            # Halaman error 500
│   ├── css/                # File CSS (jika terpisah)
│   ├── js/                 # File JavaScript (jika terpisah)
│   └── assets/             # Gambar, font, dll
└── node_modules/           # Dependencies (dibuat saat npm install)
```

## 🛠️ Instalasi & Penggunaan

### Prasyarat

- Node.js (versi 14.x atau lebih baru)
- npm atau yarn

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/game-hub-dashboard.git
   cd game-hub-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan server dalam mode development**
   ```bash
   npm run dev
   ```

4. **Jalankan server dalam mode production**
   ```bash
   npm start
   ```

Server berjalan di `http://localhost:3000` secara default.

## 🌐 Routing

- `/` - Halaman dashboard utama
- `/games/original/crash` - Game Crash
- `/games/original/blackjack` - Game BlackJack

## 📦 Deployment

### Deploy ke Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy ke production**
   ```bash
   vercel --prod
   ```

Lihat [panduan deployment](DEPLOYMENT.md) untuk informasi lebih detail.

## 🔧 Konfigurasi

### Menambahkan Game Baru

1. Buat file HTML baru untuk game tersebut di folder `public/`
2. Tambahkan rute baru di `index.js`:
   ```javascript
   app.get('/games/original/new-game', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'new-game.html'));
   });
   ```
3. Tambahkan rute ke `vercel.json`:
   ```json
   {
     "src": "/games/original/new-game",
     "dest": "index.js"
   }
   ```
4. Tambahkan card baru di dashboard.html

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk perbaikan atau fitur baru.

## 📜 Lisensi

[MIT License](LICENSE)

## 📞 Kontak

Jika Anda memiliki pertanyaan atau saran, silakan buka issue di repository ini atau hubungi kami di pokecoke41@gmail.com

---

⭐️ Dibuat dengan ❤️ oleh RizzDev

```

> **Catatan**: Jangan lupa untuk menyesuaikan bagian-bagian seperti URL repository, informasi kontak, dan credit sesuai dengan informasi sebenarnya dari proyek Anda.
