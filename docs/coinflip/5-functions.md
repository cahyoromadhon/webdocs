# Penjelasan Fungsi

Bagian ini akan membahas dua fungsi utama yang menjadi inti logika program Coin Flip, yaitu fungsi untuk memproses taruhan dan mencatat hasilnya ke blockchain.

---

## 1. `flip_coin`

Fungsi ini bertugas menjalankan logika inti dari permainan koin—yaitu menghasilkan angka acak dan membandingkannya dengan pilihan taruhan pemain.

```move
fun flip_coin(random: &Random, bet: bool, ctx: &mut TxContext): bool {
  let mut gen = random.new_generator(ctx);
  let result = gen.generate_bool();
  result == bet
}
```

**Penjelasan:**
- Membuat generator angka acak baru menggunakan konteks transaksi (`ctx`).
- Menghasilkan nilai boolean acak (`result`), yang mewakili hasil lemparan koin.
- Membandingkan hasil acak tersebut dengan taruhan (`bet`) yang dipilih pemain.
- Mengembalikan `true` jika tebakan pemain benar (menang), dan `false` jika salah (kalah).

---

## 2. `flip` (Entry Function)

Fungsi ini adalah entry point yang dipanggil pemain saat ingin melakukan taruhan Coin Flip. Fungsi ini juga yang mencatat hasil taruhan sebagai event di blockchain.

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

**Penjelasan:**
- Fungsi ini dapat langsung dipanggil dari luar modul karena dideklarasikan sebagai `entry`.
- Memanggil `flip_coin` untuk menentukan apakah pemain menang atau kalah.
- Mendapatkan alamat pengirim transaksi (`player`) dari konteks transaksi.
- Membuat event baru bertipe `Flip` yang berisi alamat pemain, hasil taruhan, dan pilihan taruhan.
- Event ini akan tercatat di blockchain dan dapat diakses publik sebagai riwayat permainan.

---

Dengan membagi logika ke dalam dua fungsi terpisah, kode menjadi lebih terstruktur:
- `flip_coin` fokus pada logika permainan dan fair randomness.
- `flip` bertanggung jawab mengelola interaksi pemain dan pencatatan hasil.

Struktur ini juga memudahkan pengembangan di masa depan, misalnya jika ingin menambah fitur atau jenis taruhan lain.