# Deklarasi Struct

Setelah mendefinisikan modul, langkah berikutnya adalah mendeklarasikan struktur data utama (struct) yang akan digunakan dalam program. Di Move, struct digunakan untuk merepresentasikan dan mengelola data yang kompleks serta menjaga integritas data di dalam smart contract.

Pada program Coin Flip, struct akan menyimpan informasi penting seputar aktivitas taruhan yang dilakukan oleh pemain. Berikut adalah contoh deklarasi struct `Flip`:

```move
public struct Flip has copy, drop, store {
  player: address,
  player_won: bool,
  bet: bool,
}
```

**Penjelasan ability pada struct:**

- **copy**
  - Struct dapat disalin (copy) di memori, sehingga data bisa digunakan di beberapa tempat tanpa harus memindahkan kepemilikan.
- **drop**
  - Struct dapat dihapus (drop) dari memori tanpa harus dipindahkan ke tempat lain, sehingga lebih fleksibel dalam pengelolaan memori.
- **store**
  - Struct dapat disimpan di storage blockchain (global storage). Tanpa ability ini, struct tidak bisa disimpan secara permanen di blockchain.

**Mengapa ketiganya digunakan pada struct `Flip`?**
Struct `Flip` hanya berisi data sederhana (bukan resource), sehingga aman dan umum untuk diberikan ability `copy`, `drop`, dan `store`. Dengan begitu, struct ini bisa:
- Disalin ke variabel lain tanpa masalah
- Dihapus dari memori jika sudah tidak diperlukan
- Disimpan di storage blockchain untuk pencatatan data taruhan
Hal ini membuat struct lebih fleksibel dan mudah digunakan dalam berbagai operasi di smart contract.

**Penjelasan:**

- **player**  
  Menyimpan alamat pemain yang melakukan taruhan. Tipe datanya adalah `address`, yang merupakan identitas unik pengguna pada jaringan blockchain Sui.

- **player_won**  
  Menunjukkan apakah pemain memenangkan taruhan. Nilai bertipe boolean (`true` jika menang, `false` jika kalah).

- **bet**  
  Mencatat pilihan taruhan yang diambil pemain, biasanya berupa tebakan sisi koin (misal: heads/tails, atau true/false).

---

Struct seperti ini sangat penting karena:
- Memudahkan pengelolaan dan pencatatan data setiap aksi Coin Flip.
- Membuat kode lebih terstruktur dan jelas.
- Memastikan setiap informasi utama tercatat secara konsisten dan dapat diproses dengan mudah dalam fungsi-fungsi selanjutnya.

Dengan mendefinisikan struct di awal, kamu bisa dengan mudah memperluas fungsionalitas program di masa mendatang.