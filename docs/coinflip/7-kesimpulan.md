# Kesimpulan & Full Code

Selamat! Kamu telah berhasil mengikuti seluruh tahapan pembuatan mini program Coin Flip di atas jaringan Sui, mulai dari inisialisasi project, penulisan modul, deklarasi struct, implementasi fungsi utama, hingga build dan deploy ke testnet. Ini adalah langkah awal yang sangat baik untuk memahami fondasi pengembangan smart contract menggunakan Move.

Sebagai penutup, berikut adalah contoh kode lengkap program Coin Flip yang telah kamu pelajari:

```move
module coinflip::coinflip {
    use sui::event;
    use sui::random::Random;

    /// Struct untuk menyimpan data hasil taruhan
    public struct Flip has copy, drop, store {
        player: address,
        player_won: bool,
        bet: bool,
    }

    /// Fungsi inti untuk melakukan flip koin
    fun flip_coin(random: &Random, bet: bool, ctx: &mut TxContext): bool {
        let mut gen = random.new_generator(ctx);
        let result = gen.generate_bool();
        result == bet
    }

    /// Entry function yang dipanggil pemain
    entry fun flip(random: &Random, bet: bool, ctx: TxContext) {
        let player_won = flip_coin(random, bet, &mut ctx);
        let player = ctx.sender();

        event::emit(Flip {
            player,
            player_won,
            bet
        });
    }
}
```

> **Note:**
> Kode lengkap Coin Flip ini juga tersedia di repositori GitHub penulis pada folder `program18`
> [github.com/cahyoromadhon/basic-move](https://github.com/cahyoromadhon/basic-move/tree/main/program18)

Dengan menyelesaikan tutorial ini, kamu telah:
- Mengenal struktur dan workflow project Move di Sui.
- Mempelajari konsep modul, struct, dan fungsi entry pada smart contract.
- Mencoba build dan deploy aplikasi sendiri ke testnet.

Selamat berkarya dan bereksperimen dengan program-program Move lainnya di jaringan Sui!  
Jangan ragu untuk mengembangkan fitur lanjutan atau membuat project baru berdasarkan fondasi yang sudah kamu kuasai.

Terima kasih telah belajar bersama! 🚀