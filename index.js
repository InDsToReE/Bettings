// index.js - Express server setup

const express = require('express');
const path = require('path');
const morgan = require('morgan'); // HTTP request logger
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk logging requests
app.use(morgan('dev'));

// Middleware untuk parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Jika kamu tetap ingin serve file statis (CSS/JS/image), pastikan folder public ada
app.use(express.static(path.join(__dirname, 'public')));

// Router setup
// Route untuk dashboard - halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Route untuk halaman Crash game
app.get('/games/original/crash', (req, res) => {
  res.sendFile(path.join(__dirname, 'crash.html'));
});

// Route untuk halaman BlackJack game
app.get('/games/original/blackjack', (req, res) => {
  res.sendFile(path.join(__dirname, 'blackjack.html'));
});

// Error handler untuk route yang tidak ditemukan (404)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, '500.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
              
