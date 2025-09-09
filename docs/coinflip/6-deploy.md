# Build dan Deploy

Sebelum melakukan deploy ke testnet, sangat penting untuk memastikan bahwa program yang kamu tulis sudah benar dan bebas dari error sintaksis. Proses ini disebut **build** atau **compile**. Dengan membuild project terlebih dahulu, kamu dapat menemukan kesalahan lebih awal dan memastikan semua dependensi sudah benar.

---

## 1. Build (Compile) Program

Untuk membuild project Move-mu, jalankan perintah berikut di terminal dari dalam direktori project:

```bash
sui move build
```

Perintah ini akan:
- Memeriksa seluruh kode sumber di folder `sources/`.
- Mengompilasi setiap modul Move.
- Memberikan pesan error jika ada kesalahan sintaksis atau konfigurasi.
- Jika build berhasil, artinya kode siap untuk tahap berikutnya: deployment.

Melakukan build secara berkala sangat disarankan, terutama setelah menambahkan fitur atau mengubah kode, agar proses pengembangan tetap lancar dan minim bug.

---

## 2. Deploy ke Testnet

Setelah program berhasil dibuild tanpa error, langkah selanjutnya adalah melakukan deploy ke jaringan testnet Sui agar program dapat dijalankan dan diuji secara publik.

Gunakan perintah berikut untuk melakukan deploy:

```bash
sui client publish --gas-budget 100000000
```

**Penjelasan:**
- Perintah di atas akan meng-upload dan mendaftarkan modul programmu ke testnet Sui.
- `--gas-budget 100000000` adalah biaya maksimum gas yang disediakan untuk proses publish. Pastikan kamu memiliki cukup saldo SUI di wallet testnet-mu.

Setelah proses deploy selesai dan berhasil, program Coin Flip-mu sudah siap untuk diuji di jaringan Sui testnet.  
Kamu bisa melanjutkan ke tahap pengujian dan eksplorasi lebih lanjut!

---