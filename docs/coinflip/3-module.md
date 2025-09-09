# Definisi Modul

Pada bagian ini, kamu akan belajar bagaimana mendefinisikan sebuah modul utama pada program Coin Flip. Modul dalam Move adalah “wadah” yang menampung seluruh logika, resource, serta fungsi-fungsi yang membentuk aplikasi. Dengan memahami konsep modul, kamu akan dapat mengelola kode dengan lebih terstruktur dan mudah dikembangkan.

---

## Di Mana Kode Modul Ditulis?

Kode modul untuk Coin Flip akan kamu tulis di dalam file baru yang terletak pada folder `sources` di dalam project Move-mu. Secara default, setelah menjalankan inisialisasi package, kamu akan menemukan struktur seperti berikut:

```
coinflip/
└── sources/
    └── coinflip.move
```

- **`coinflip/`**: Folder utama project.
- **`sources/`**: Tempat semua kode sumber (source code) Move ditulis.
- **`coinflip.move`**: Di sinilah kamu menulis kode modul utama Coin Flip.

---

## Contoh Definisi Modul

Berikut adalah contoh definisi modul untuk program Coin Flip:

```move
module coinflip::coinflip {
  use sui::event;
  use sui::random::Random;
}
```

**Penjelasan:**

- `module coinflip::coinflip { ... }`  
  Mendefinisikan sebuah modul dengan nama unik, yaitu `coinflip` di bawah namespace `coinflip`. Nama modul harus unik dalam satu package agar tidak terjadi konflik.
  
- `use sui::event;` & `use sui::random::Random;`  
  Dua baris ini mengimpor library penting:
  - `sui::event` digunakan untuk mencatat event on-chain, seperti hasil permainan yang nantinya bisa dilihat publik.
  - `sui::random::Random` menyediakan utilitas untuk menghasilkan angka acak yang fair, sangat penting untuk membuat mekanisme Coin Flip yang tidak bisa diprediksi.

---

Setelah mendefinisikan modul dan mengimpor dependensi yang diperlukan, kamu bisa mulai mendeklarasikan data (struct) dan fungsi yang akan digunakan dalam program Coin Flip.  
Pendekatan modular seperti ini memudahkan kamu untuk mengelola, menguji, dan mengembangkan fitur-fitur baru di masa mendatang.