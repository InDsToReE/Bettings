# Panduan Instalasi dan Penggunaan Express API Router

## Instalasi

1. Pastikan Node.js sudah terinstal di komputer Anda (versi 14.x atau lebih tinggi)
2. Clone atau download kode proyek ini
3. Buka terminal dan arahkan ke folder proyek
4. Jalankan perintah berikut untuk menginstal semua dependensi:

```bash
npm install
```

## Menjalankan Server

### Mode Development (dengan auto-reload)
```bash
npm run dev
```

### Mode Production
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## Struktur Router

Berikut adalah rute-rute yang sudah dikonfigurasi:

- `/` → menampilkan `public/dashboard.html`
- `/games/original/crash` → menampilkan `public/crash.html`
- `/games/original/blackjack` → menampilkan `public/blackjack.html`

## Struktur Folder Public

Pastikan Anda memiliki file-file berikut di folder `public`:

- `dashboard.html` - Halaman utama dashboard
- `crash.html` - Halaman game Crash
- `blackjack.html` - Halaman game BlackJack
- `404.html` - Halaman error untuk route yang tidak ditemukan
- `500.html` - Halaman error untuk kesalahan server

## Menambahkan Rute Baru

Untuk menambahkan rute baru, buka file `app.js` dan tambahkan kode berikut:

```javascript
app.get('/route-baru', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'nama-file.html'));
});
```

## Error Handling

Aplikasi ini sudah dilengkapi dengan error handler untuk:
- 404 - Rute tidak ditemukan
- 500 - Error server

Pastikan Anda membuat file `404.html` dan `500.html` di folder `public`.