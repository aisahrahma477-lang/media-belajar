
export type BlokKonten = {
  judul: string;
  isi?: string;
  daftar?: string[];
  video?:string;
  bacaan?: string;
  game?: string;
  jenis?: "biru" | "krem" | "ungu-muda" | "putih";
};

export type Soal = {
  pertanyaan: string;
  pilihan: string[];
  benar: number;
  pembahasan: string;
};

export type Tahap = {
  id: number;
  nama: string;
  slogan: string;
  simbol: string;
  warna: string;

  // Konten bebas yang dapat ditambah atau dihapus
  konten: BlokKonten[];

  // Permainan Wordwall
  wordwall: string;

  // Soal opsional, boleh null
  soal: Soal | null;
};

export const daftarTahap: Tahap[] = [
  // =========================================
  // TAHAP 1: PENGENALAN
  // =========================================
  {
    id: 1,
    nama: "Petunjuk Pembelajaran",
    slogan: "Kenali tujuan pembelajaran dan petunjuk penggunaan media.",
    simbol: "📝",
    warna: "hijau",

    konten: [
      {
        judul: "📘 Capaian Pembelajaran",
        jenis: "biru",
        isi:
          "Di akhir fase D, siswa dapat membaca, menulis, dan membandingkan bilangan berpangkat bulat. Mereka juga mampu mengoperasikan secara efisien bilangan berpangkat bulat.",
      },
      {
        judul: "🎯 Tujuan Pembelajaran",
        jenis: "krem",
        daftar: [
          "Siswa mampu menjelaskan konsep bilangan berpangkat positif, negatif, dan nol dengan benar.",
          "Siswa mampu menyelesaikan operasi hitung (perkalian, pembagian, dan perpangkatan) pada bilangan berpangkat menggunakan sifat-sifat eksponen yang tepat.",
        ],
      },
      {judul: "📋 Petunjuk Penggunaan",
       jenis: "putih",
       daftar: [
        "Gunakan media pembelajaran secara beruruan mulai dari tahap 1 hingga tahap 5.",
        "Perhatikan arahan yang diberikan di setiap tahap sebelum melanjutkan ke tahap berikutnya.",
        "Pelajari materi dengan sungguh-sungguh dan jangan terburu-buru menyelesaikan kegiatan.",
        "Pastikan koneksi internet tetap stabil selama menggunakan media.",
       ]
      },
      {
        judul: "🧭 Panduan",
        jenis: "ungu-muda",
        isi: "Ikuti Tahapan Pembelajaran Secara Berurutan:",
        daftar: [
          'Tahap 1: Petunjuk Pembelajaran – Klik tombol "Mulai Belajar" pada kartu hijau untuk memulai perjalanan belajar.',
          'Tahap 2: Memahami – Klik "Mulai Belajar" pada kartu kuning untuk mempelajari konsep dasar Bilangan Berpangkat secara runtut.',
          'Tahap 3: Pemahaman – Klik "Mulai Belajar" pada kartu oranye untuk mendalami materi Bilangan Berpangkat secara menyeluruh.',
          'Tahap 4: Pendalaman – Klik "Mulai Belajar" pada kartu ungu untuk menerapkan pemahaman pada berbagai contoh soal.',
          'Tahap 5: Tantangan – Klik "Mulai Belajar" pada kartu merah untuk menguji tingkat kemampuan dan penguasaan materi melalui soal-soal latihan.',
        ],
      },
    ],

    wordwall: "",
    soal: null,
  },

  // =========================================
  // TAHAP 2: MEMAHAMI
  // =========================================
  {
    id: 2,
    nama: "Memahami",
    slogan: "Pelajari konsep dasar Bilangan Berpangkat.",
    simbol: "💡",
    warna: "kuning",

    konten: [
      {
        judul: "🎬  Video Pembelajaran ",
        jenis: "biru",
        isi:
         "Perhatikan Video Pembelajaran Berikut Ini",
         video:"https://www.youtube.com/embed/B6KKjpHnMKM",
      },
      {
        judul: "📖✏️ Konsep Bilangan Berpangkat",
        jenis: "krem",
        isi:
          "Bilangan berpangkat adalah bentuk singkat dari perkalian berulang dengan faktor yang sama. Pada aⁿ, a disebut bilangan pokok dan n disebut pangkat. Contoh: 2³ dibaca “dua pangkat tiga”, artinya 2 × 2 × 2 = 8. Hati-hati: 2³ bukan 2 × 3.",
      },
      
    ],

    wordwall: "https://wordwall.net/embed/a363b1f8bd17a8942bef433711daf80b?themeId=65&templateId=3&fontStackId=0",

    soal: null
  },

  // =========================================
  // TAHAP 3: PEMAHAMAN
  // =========================================
  {
    id: 3,
    nama: "Pemahaman",
    slogan: "Dalami materi secara menyeluruh.",
    simbol: "📊",
    warna: "oranye",

    konten: [
      {
        judul: "📖 Bahan Bacaan",
        jenis: "biru",
        isi:
          "Silahkan baca materi pembelajaran berikut ini:",
        bacaan: "https://drive.google.com/file/d/1vltU6NbBepeRGvqERcRCjFx4XOn6V_Rc/preview",
      },
      {
        judul: "🎬 Video Pembelajaran",
        jenis: "krem",
        isi:
          "Mempelajari Sifat-Sifat Bilangan Berpangkat",
        video: "https://www.youtube.com/embed/vP8wLVgoYmE",
      },
    
    ],

    wordwall: "",

    soal: {
      pertanyaan: "Hasil dari 3² × 3³ adalah ...",
      pilihan: ["3⁶", "3⁵", "9⁵"],
      benar: 1,
      pembahasan:
        "Karena basis sama, jumlahkan pangkat: 2 + 3 = 5. Jadi hasilnya 3⁵.",
    },
  },

  // =========================================
  // TAHAP 4: PENDALAMAN
  // =========================================
  {
    id: 4,
    nama: "Pendalaman",
    slogan: "Terapkan konsep dalam berbagai soal.",
    simbol: "🔎",
    warna: "ungu",

    konten: [
      {
        judul: "🧠 Saatnya Memperdalam Pemahamanmu",
        jenis: "biru",
        isi:
          "Kamu sudah mempelajari berbagai konsep bilangan berpangkat. Sekarang, mari kita uji dan perdalam pemahamanmu melalui beberapa aktivitas yang lebih menantang!",
      },
      {
        judul: "✏️ Aktivitas 1",
        jenis: "krem",
        isi:
          "🌟Ingat: Jangan terburu-buru! Kerjakan aktivitas berikut untuk menguji kemampuanmu dalam memahami bilangan berpangkat",
        game:"https://wordwall.net/embed/a43d404a6d400c96c3b89781315a8b06?themeId=59&templateId=35&fontStackId=0"
      },
      {
        judul: "🔥 Aktivitas 2",
        jenis: "putih",
        isi:
          "💡Tips: Baca soal dengan teliti, jawab soal-soal sifat perpangkatan berikut dengan tepat!",
        game: "https://wordwall.net/embed/d7f42f9865de786c0f2ddca524f3e295?themeId=49&templateId=30&fontStackId=0"
      },
    ],

    wordwall: "",
    
    soal: {
      pertanyaan:
        "Bagaimana, apakah kamu semakin memahami bilangan berpangkat?",
      pilihan: ["Tidak, saya masih kurang memahami", "Ya, tentu saja"],
      benar: 1,
      pembahasan:
        "Setiap latihan yang kamu kerjakan akan membantumu menjadi semakin mahir. Jika kamu sudah memahami, maka pilih Ya, tentu saja untuk melanjutkan ke tahap berikutnya",
    },
  },

  // =========================================
  // TAHAP 5: TANTANGAN
  // =========================================
  {
    id: 5,
    nama: "Tantangan",
    slogan: "Uji penguasaan materi bilangan berpangkat.",
    simbol: "🏆",
    warna: "merah",

    konten: [
      {
        judul: "🏆 Tantangan Akhir",
        jenis: "biru",
        isi:
          "Saatnya membuktikan kemampuanmu! Pada tahap terakhir ini, kamu akan menghadapi berbagai tantangan soal untuk menguji pemahamanmu tentang bilangan berpangkat",
      },
      {
        judul: "📋 Petunjuk Evaluasi",
        jenis: "krem",
        daftar: [
          "Bacalah setiap soal dengan teliti.",
          "Identifikasi bilangan pokok dan pangkat pada soal.",
          "Gunakan sifat perpangkatan yang sesuai.",
          "Periksa kembali jawaban sebelum selesai.",
          "Selesaikan setiap soal sebelum waktunya habis",
        ], 
      },
      {
        judul: "💡 Ruang Asah Kemampuan",
        jenis: "putih",
        game: "https://wordwall.net/embed/cfbcb0ad0b0e2b29408cb2a7043086f8?themeId=21&templateId=69&fontStackId=0"
      },
      {
        judul: "📌 Penguatan",
        jenis: "ungu-muda",
        isi:
          "Jika masih mengalami kesulitan, pelajari kembali materi pada tahap sebelumnya.",
      },
    ],

    wordwall: "",

    soal: null,
  },
];
