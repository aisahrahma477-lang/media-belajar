
"use client";

import { useEffect, useState } from "react";
import { daftarTahap, type Tahap } from "../Data/tahapan";
import { resetKnownRoutes } from "next/dist/client/components/segment-cache/optimistic-routes";

const KUNCI = "eduplay-selesai-v1";

export default function Home() {
  const [aktif, setAktif] = useState<Tahap | null>(null);
  const [selesai, setSelesai] = useState<number[]>([]);
  const [jawaban, setJawaban] = useState<number | null>(null);
  const [cekJawaban, setCekJawaban] = useState(false);

  const [informasi, setInformasi] = useState<
    "tentang" | "bantuan" | null
  >(null);

  // Mengambil data progres yang pernah disimpan
  useEffect(() => {
    try {
      const data: unknown = JSON.parse(
        localStorage.getItem(KUNCI) ?? "[]"
      );

      if (Array.isArray(data)) {
        setSelesai(
          data.filter(
            (v): v is number =>
              typeof v === "number" &&
              Number.isInteger(v) &&
              v >= 1 &&
              v <= 5
          )
        );
      }
    } catch {
      // Data tersimpan tidak valid
    }
  }, []);

  // Membuka tahap pembelajaran
  function buka(tahap: Tahap) {
    setAktif(tahap);
    setJawaban(null);
    setCekJawaban(false);
  }

  // Menyimpan progres pembelajaran
  function simpanProgres(id: number) {
    const baru = Array.from(new Set([...selesai, id]));

    setSelesai(baru);

    localStorage.setItem(
      KUNCI,
      JSON.stringify(baru)
    );

    setAktif(null);
  }
  // Mereset Progres Belajar//
  function resetProgres() {
    const yakin = window.confirm(
      "Apakah kamu yakin ingin mereset progres belajar?"
    );
    if (!yakin) return;
    localStorage.removeItem(KUNCI);
    setSelesai([]);
    setAktif(null);
  }

  // Pemeriksaan sebelum menandai tahap selesai
  function tandaiSelesai() {
    if (!aktif) return;

    // Jika ada soal, siswa harus menjawab dengan benar
    if (aktif.soal) {
      if (!cekJawaban || jawaban !== aktif.soal.benar) {
        return;
      }
    }

    simpanProgres(aktif.id);
  }

  const persen = Math.round(
    (selesai.length / daftarTahap.length) * 100
  );

  return (
    <main className="laman">
      {/* DEKORASI BERANDA */}
      <div className="hiasan h1" aria-hidden="true">
        aⁿ
      </div>
      <div className="hiasan h2" aria-hidden="true">
        2³
      </div>
      <div className="hiasan h3" aria-hidden="true">
        x²
      </div>
      <div className="hiasan h4" aria-hidden="true">
        ✦
      </div>
      <div className="hiasan h5" aria-hidden="true">
        ✧
      </div>

      {/* HEADER */}
      <header className="kepala">
        <a href="#beranda" className="merek">
          <span className="robot" aria-hidden="true">
            🤖
          </span>
          <strong>EduPlay Studio</strong>
        </a>

        <span className="chip">
          Matematika SMP/MTs
        </span>
      </header>

      {/* JUDUL BERANDA */}
      <section className="hero" id="beranda">
        <span
          className="hero-rumus"
          aria-hidden="true"
        >
          ✏️ &nbsp; aⁿ &nbsp; ✨ &nbsp; 2³
        </span>

        <h1>
          Selamat Datang di Media
          <br />
          Pembelajaran Matematika
        </h1>

        <p>
          Jelajahi setiap tahap untuk mendapatkan pengalaman
          <br className="desktop" />
          belajar yang lebih menarik
        </p>
      </section>

      {/* LIMA KARTU PEMBELAJARAN */}
      <section
        className="kartu-grid"
        aria-label="Pilih tahap pembelajaran"
      >
        {daftarTahap.map((t) => (
          <article
            key={t.id}
            className={`kartu ${t.warna}`}
          >
            <div className="kartu-judul">
              <span>Tahap {t.id}:</span>
              <h2>{t.nama}</h2>
            </div>
    
            <div
              className="ilustrasi"
              aria-hidden="true"
            >
              {t.simbol}
            </div>

            <div className="kartu-deskripsi">
              <h3>
                Tahap {t.id}:
                <br />
                {t.nama}
              </h3>

              <p>{t.slogan}</p>
            </div>

            <button
              type="button"
              className="mulai"
              onClick={() => buka(t)}
            >
              {selesai.includes(t.id)
                ? "✓ Buka Kembali"
                : "Mulai Belajar"}
            </button>
          </article>
        ))}
      </section>

      {/* PROGRES BELAJAR */}
      <section
        className="kemajuan"
        aria-label="Kemajuan belajar"
      >
        <div className="kemajuan-bar-judul">
          <strong>
            ⭐ Progres Belajarmu
          </strong>

          <span>
            {selesai.length}/5 tahap selesai
          </span>
          {selesai.length === 5 && (
            <span className="ml-3">
              🎉 Hebat! Kamu telah menyelesaikan semua tahap pembelajaran!
            </span>
          )}
        </div>

        <div
          className="jalur"
          role="progressbar"
          aria-label="Persentase tahap selesai"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={persen}
        >
          <div
            style={{
              width: `${persen}%`,
            }}
          />
        </div>
        <button
        type="button"
        onClick={resetProgres}
        className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
        >
          ↻ Reset Progres
        </button>

        <p>
          Catatan progres disimpan pada browser ini.
        
        </p>
      </section>

      {/* FOOTER */}
      <footer className="kaki">
        <button
          onClick={() => setInformasi("tentang")}
        >
          Tentang Kami
        </button>

        <button
          onClick={() => setInformasi("bantuan")}
        >
          Bantuan
        </button>

        <span>© EduPlay Studio</span>
      </footer>

      {/* JENDELA KONTEN PEMBELAJARAN */}
      {aktif && (
        <div
          className="overlay"
          onClick={() => setAktif(null)}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Tahap ${aktif.id}: ${aktif.nama}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tutup"
              onClick={() => setAktif(null)}
              aria-label="Tutup"
            >
              ✕
            </button>

            <span className="tanda">
              TAHAP {aktif.id}
            </span>

            <h2>{aktif.nama}</h2>

            {/* MENAMPILKAN KONTEN SESUAI DATA */}
            {aktif.konten.map((blok, index) => (
              <div
                key={index}
                className={`panel ${blok.jenis ?? "putih"}`}
              >
                <h3 style={{fontSize: "25px", fontWeight: "bold"}}> 
                  {blok.judul}
                </h3>

                {/* Jika konten berupa paragraf */}
                {blok.isi && (
                  <p style={{ lineHeight: 1.8, fontSize: "20px"}}>
                    {blok.isi}
                  </p>
                )}
                {/* Jika konten berupa video YouTube */}
                {blok.video && (
                  <div className="w-full aspect-video my-4">
                   <iframe width="700"
                    height="400" 
                    src={blok.video}
                    title={blok.judul || "video pembelajaran"}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen></iframe>
                    </div>
                )}
                {/* Jika konten berupa file pdf */}
                {blok.bacaan && (
                  <div className="w-full my-4">
                    <h3 className="text-lg font-semibold mb-3">
                    </h3>
                    
                    <iframe
                    src={blok.bacaan}
                    title={blok.judul || "Bahan Bacaan"}
                    width="100%"
                    height="600px"
                    className="w-full rounded-lg border border-gray-300"
                    />
                    <a
                    href= {blok.bacaan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                      Klik disini untuk membuka pdf
                    </a>

                  </div>
                )}
                {/* Jika konten berupa game permainan */}
                {blok.game && (
                  <div className="mt-4 mb-6">
                    <h3 className="text-xl font-bold mb-3">
                    </h3>
                    <iframe
                    src={blok.game}
                    className="w-full rounded-lg shadow-md"
                    style= {{
                      width: "100%",
                      height: "700px",
                      border: "none"
                    }}
                    allowFullScreen
                  />
                </div>
                )}
                {/* Jika konten berupa daftar */}
                {blok.daftar && (
                  <ol
                    style={{
                      paddingLeft: "24px",
                      lineHeight: 1.8,
                      fontSize: "20px"
                    }}
                  >
                    {blok.daftar.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: "12px",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}

            {/* WORDWALL HANYA MUNCUL JIKA ADA URL */}
            {aktif.wordwall && (
              <div className="panel ungu-muda">
                <h3>
                 🥇 Mari Berlatih
                </h3>

                <iframe
                  key={aktif.id}
                  title={`Wordwall Tahap ${aktif.id}`}
                  src={aktif.wordwall}
                  className="wordwall-frame"
                  allowFullScreen
                />
              </div>
            )}

            {/* SOAL HANYA MUNCUL JIKA DIISI */}
            {aktif.soal && (
              <div className="panel putih">
                <h3 style={{fontSize: "25px"}}>
                  🧠 Cek Pemahaman
                </h3>

                <p style={{fontSize: "20px"}}>
                  {aktif.soal.pertanyaan}
                </p>

                <div className="opsi">
                  {aktif.soal.pilihan.map(
                    (teks, i) => (
                      <label
                        key={i}
                        className={`opsi-item ${
                          jawaban === i
                            ? "dipilih"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`soal-${aktif.id}`}
                          checked={jawaban === i}
                          onChange={() => {
                            setJawaban(i);
                            setCekJawaban(false);
                          }}
                        />

                        {teks}
                      </label>
                    )
                  )}
                </div>

                <button
                  className="periksa"
                  disabled={jawaban === null}
                  onClick={() => setCekJawaban(true)}
                >
                  Periksa Jawaban
                </button>

                {cekJawaban && (
                  <div
                    className={`feedback ${
                      jawaban === aktif.soal.benar
                        ? "betul"
                        : "salah"
                    }`}
                    role="status"
                  >
                    <strong>
                      {jawaban === aktif.soal.benar
                        ? "Jawaban benar!"
                        : "Belum tepat. Coba lagi."}
                    </strong>

                    <p>
                      {aktif.soal.pembahasan}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TOMBOL PENYELESAIAN */}
            <p className="catatan">
              {aktif.soal
                ? "Jawab cek pemahaman dengan benar sebelum menandai tahap selesai."
                : "Baca dan pahami seluruh petunjuk yang diberikan sebelum melanjutkan pembelajaran."}
            </p>

            <button
              className="selesaikan"
              disabled={
                aktif.soal !== null &&
                (!cekJawaban ||
                  jawaban !== aktif.soal.benar)
              }
              onClick={tandaiSelesai}
            >
              {aktif.soal
                ? "✓ Tandai Tahap Selesai"
                : "✓ Saya Mengerti, Lanjutkan Belajar"}
            </button>
          </section>
        </div>
      )}

      {/* INFORMASI WEBSITE */}
      {informasi && (
        <div
          className="overlay"
          onClick={() => setInformasi(null)}
        >
          <section
            className="modal modal-singkat"
            role="dialog"
            aria-modal="true"
            aria-label={
              informasi === "tentang"
                ? "Tentang Kami"
                : "Bantuan"
                
            }
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tutup"
              onClick={() => setInformasi(null)}
              aria-label="Tutup"
            >
              ✕
            </button>

            <h2>
              {informasi === "tentang"
                ? "Tentang EduPlay Studio"
                : "Bantuan"}
            </h2>

            <p>
              {informasi === "tentang" ?(
                <div className="space-y-3">
                <p>
                  EduPlay Studio adalah media pembelajaran matematika interaktif untuk siswa Kelas VIII SMP/MTs, yang dikembangkan untuk membantu kamu memahami materi Bilangan Berpangkat dengan cara yang lebih menyenangkan.
                </p>

                <p>
                  Melalui lima tahap belajar, yaitu Petunjuk Pembelajaran, Memahami, Pemahaman, Pendalaman, dan Tantangan, kamu akan belajar lewat video, bahan bacaan, latihan soal, dan permainan edukatif berbasis Wordwall. Semua tahap dirancang agar kamu bisa belajar mandiri, kapan saja dan di mana saja.
                </p>

                <p>
                  Media ini dikembangkan oleh Aisah Rahma, mahasiswa Pendidikan Matematika, Universitas Lambung Mangkurat, sebagai bagian dari penelitian skripsi di bawah bimbingan Bapak Dr.H.Karim,M.Si dan Ibu Juhairiah,M.Pd. 
                </p>
              </div>
              ) : (
                <div className="space-y-3">
                  <p>
                    Butuh bantuan? Cek panduan singkat ini.
                  </p>
                  <p className="font-bold">
                    Kalau ada kendala:
                  </p>
                  <ol className="list-decimal ml-6 space-y-2">
                    <li>
                      Video atau kuis soal tidak muncul: pastikan koneksi internet stabil, lalu muat ulang halaman.
                    </li>
                    <li>
                      Progres hilang: progres tersimpan di browser, jadi gunakan perangkat dan browser yang sama, dan jangan menghapus data browser atau memakai mode penyamaran.
                    </li>
                    <li>
                      Tampilan terpotong di HP: coba putar layar ke mode lanjut (landscape) atau gunakan layar penuh pada permainan Wordwall.
                    </li>
                    <li>
                      Jawaban tidak bisa diperiksa: pilih salah satu jawaban terlebih dahulu, lalu tekan “Periksa Jawaban”.
                    </li>
                  </ol>
                <p>
                  Masih bingung? Hubungi pengembang: Aisah Rahma, Pendidikan Matematika, Universitas Lambung Mangkurat.
                  Email / WhatsApp: aisahrahma477@gmail.com/087815213076
                </p>
                </div>
              )}  
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
