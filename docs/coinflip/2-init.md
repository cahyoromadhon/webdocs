# Initialize Package

Sebelum mulai menulis kode, langkah paling awal yang perlu dilakukan adalah menyiapkan struktur project dengan menginisialisasi package menggunakan Sui CLI. Langkah ini sangat penting karena akan memastikan seluruh file, folder, dan konfigurasi dasar project Move sudah terbuat secara otomatis dan sesuai standar ekosistem Sui.

Untuk memulai, buka terminal dan jalankan perintah berikut:

```bash
sui move new coinflip
cd coinflip
```

Perintah di atas akan menciptakan sebuah direktori baru bernama `coinflip` yang berisi struktur dasar project Move. Dengan adanya struktur otomatis ini, kamu bisa langsung fokus pada penulisan logika program tanpa harus repot menyiapkan kerangka kerja dari awal.  
Langkah ini juga sangat membantu jika di kemudian hari kamu ingin bekerja secara kolaboratif atau mengelola project yang lebih besar.

---

## Struktur Direktori Otomatis

Setelah menjalankan perintah di atas, kamu akan mendapatkan struktur direktori seperti berikut:

```
coinflip/
├── Move.toml
├── sources/
│   └── coinflip.move
├── tests/
│   └── coinflip_test.move
```

**Penjelasan:**
- **`Move.toml`**  
  File manifest utama yang menyimpan metadata project, dependencies, dan konfigurasi build.
- **`sources/coinflip.move`**  
  File ini adalah tempat kamu menulis seluruh kode utama (modul) Coin Flip. Nama file ini akan otomatis mengikuti nama package yang kamu buat saat inisialisasi (`coinflip`).
- **`tests/coinflip_test.move`**  
  File ini berisi kode untuk menguji fungsionalitas program Coin Flip yang kamu buat. Nama file pengujian ini juga mengikuti nama package.

Dengan struktur ini, pengembangan project akan menjadi lebih teratur dan mudah untuk dikembangkan, diuji, maupun dikolaborasikan bersama developer lain.