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