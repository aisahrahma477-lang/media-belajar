# EduPlay Studio — Starter Next.js + Wordwall

Website pembelajaran materi eksponen untuk SMP/MTs, terdiri atas 5 tahap, materi, contoh, latihan dengan umpan balik, iframe Wordwall, dan progres lokal.

## 1. Persiapan
- Instal Node.js versi 20.9 atau lebih baru: https://nodejs.org/
- Instal VS Code: https://code.visualstudio.com/

## 2. Jalankan
Buka folder ini di VS Code, lalu pada terminal jalankan:

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## 3. Ubah konten
- `app/page.tsx`: cari `daftarTahap`, ubah judul, materi, contoh, soal, dan pembahasan.
- `app/globals.css`: ubah warna, font, ukuran kartu, dan latar.
- `app/layout.tsx`: ubah judul dan deskripsi website.

## 4. Sambungkan Wordwall
Di Wordwall: My Activities > menu tiga titik > Embed > Iframe. Salin alamat URL pada atribut `src`.
Dalam `app/page.tsx`, ganti `wordwall: ""` pada tahap terkait dengan contoh `wordwall: "https://wordwall.net/embed/ID_ASLI"`.
URL tersebut harus diambil dari Wordwall Anda. Jangan menempel HTML iframe utuh di properti `wordwall`.

## 5. Catatan penelitian
- Kuis HTML internal ini adalah cek pemahaman, bukan tes baku.
- Progres disimpan pada `localStorage` browser, tidak otomatis memvalidasi hasil Wordwall.
- Gunakan penugasan Wordwall atau instrumen terpisah untuk bukti penilaian penelitian.
- Lakukan validasi ahli materi/media dan uji coba siswa sebelum memakai produk untuk penelitian.

## 6. Publikasi
Jalankan `npm run build`, unggah proyek ke GitHub, dan impor ke Vercel.
