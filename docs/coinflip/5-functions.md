# Penjelasan Fungsi

Bagian ini akan membahas dua fungsi utama yang menjadi inti logika program Coin Flip, yaitu fungsi untuk memproses taruhan dan mencatat hasilnya ke blockchain.

---


## 1. `flip_coin`

Fungsi ini menjalankan logika inti permainan Coin Flip, yaitu menghasilkan angka acak dan membandingkannya dengan tebakan pemain.

```move
fun flip_coin(random: &Random, bet: bool, ctx: &mut TxContext): bool {
  let mut gen = random.new_generator(ctx);
  let result = gen.generate_bool();
  result == bet
}
```

**Penjelasan:**

- **fun**: Kata kunci untuk mendefinisikan fungsi di Move.
- **flip_coin**: Nama fungsi, sebagai identitas dari fungsi
- **Parameter:**
  - `random: &Random` → Referensi ke modul/objek Random, digunakan untuk menghasilkan angka acak. Menggunakan reference (&) yang artinya immutable atau tidak bisa diubah kembali
  - `bet: bool` → Pilihan taruhan pemain (true/false). Tipe boolean dipilih karena hanya ada dua kemungkinan (misal: heads/tails).
  - `ctx: &mut TxContext` → Referensi mutable ke konteks transaksi. Diperlukan untuk operasi yang mengubah state atau membutuhkan info transaksi, biasanya digunakan untuk mengubah kepemilikan object
- **Return:**
  - `bool` → Fungsi mengembalikan tipe data boolean, menandakan apakah tebakan pemain true (menang) atau false (kalah).
- **Local Variable:**
  - `let mut gen = random.new_generator(ctx);` → Membuat variabel lokal generator acak. `mut` (mutable) digunakan karena nilainya akan diubah dan generator akan digunakan untuk menghasilkan nilai baru.
  - `let result = gen.generate_bool();` → Menghasilkan nilai acak bertipe bool, mewakili hasil lemparan koin.
- **Ekspresi akhir:**
  - `result == bet` → Mengecek apakah hasil acak sama dengan tebakan pemain. Langsung mengembalikan hasil perbandingan sebagai output fungsi.

---

## 2. `flip` (Entry Function)

Fungsi ini adalah entry point yang dipanggil pemain untuk melakukan taruhan Coin Flip dan mencatat hasilnya ke blockchain.

```move
entry fun flip(random: &Random, bet: bool, ctx: TxContext): u64 {
  let (player_won) = flip_coin(random, bet, ctx);
  let player = ctx.sender();

  event::emit(Flip {
    player,
    player_won,
    bet
  });
}
```

**Penjelasan Setiap Bagian:**

- **entry**: Kata kunci agar fungsi bisa dipanggil langsung dari luar modul (oleh user/transaction). Penting untuk fungsi yang menjadi interface utama ke smart contract.
- **fun**: Kata kunci untuk mendefinisikan fungsi.
- **flip**: Nama fungsi, berguna sebagai identitas
- **Parameter:**
  - `random: &Random` → Referensi ke modul Random, untuk menghasilkan angka acak. Reference (&) agar nilainya tidak dapat diubah kembali
  - `bet: bool` → Pilihan taruhan pemain (true/false).
  - `ctx: TxContext` → Konteks transaksi, berisi info pengirim dan lingkungan eksekusi. Tidak perlu reference karena hanya dibaca dan diteruskan.
- **Local Variable:**
  - `let (player_won) = flip_coin(random, bet, ctx);` → Memanggil fungsi flip_coin untuk menentukan hasil taruhan. Menggunakan destructuring agar hasil langsung masuk ke variabel player_won.
  - `let player = ctx.sender();` → Mengambil alamat pengirim transaksi dari konteks. Penting untuk mencatat siapa yang melakukan taruhan.
- **Event Emit:**
  - `event::emit(Flip { ... })` → Mencatat hasil taruhan ke blockchain sebagai event. Struct Flip diisi dengan data pemain, hasil taruhan, dan pilihan taruhan.

---

Dengan membagi logika ke dalam dua fungsi terpisah, kode menjadi lebih terstruktur:
- `flip_coin` fokus pada logika permainan dan fair randomness.
- `flip` bertanggung jawab mengelola interaksi pemain dan pencatatan hasil.

Struktur ini juga memudahkan pengembangan di masa depan, misalnya jika ingin menambah fitur atau jenis taruhan lain.