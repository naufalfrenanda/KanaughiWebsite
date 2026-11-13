import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ClipboardList,
  Clock3,
  FileText,
  MapPin,
  Menu,
  MessageSquareText,
  PackageCheck,
  Printer,
  ShieldCheck,
  Shirt,
  Truck,
  X,
} from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Perlengkapan Kantor",
    description:
      "ATK, notebook custom, pantry supplies, dan kebutuhan operasional harian dalam satu pengadaan.",
    detail: "120+ jenis kebutuhan",
    icon: ClipboardList,
    tone: "bg-[#d8c9b6]",
  },
  {
    number: "02",
    title: "Media Percetakan",
    description:
      "Kartu nama, kemasan, banner, company profile, hingga material event dengan hasil cetak yang terjaga.",
    detail: "Cetak satuan & volume",
    icon: Printer,
    tone: "bg-[#bd6952]",
  },
  {
    number: "03",
    title: "Seragam & Konveksi",
    description:
      "Kemeja, kaos, jaket, tote bag, dan seragam tim yang disesuaikan dengan identitas perusahaan.",
    detail: "Ukuran & bahan custom",
    icon: Shirt,
    tone: "bg-[#6d7561]",
  },
];

const steps = [
  {
    number: "01",
    title: "Kirim kebutuhan",
    description:
      "Bagikan daftar barang, jumlah, spesifikasi, atau brief yang sudah Anda punya.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Kami kurasi opsi",
    description:
      "Tim kami mencarikan produk dan spesifikasi yang paling sesuai dengan kebutuhan.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Setujui penawaran",
    description:
      "Tinjau pilihan, harga, sampel, dan jadwal sebelum pesanan diproses.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Produksi & kirim",
    description:
      "Kami koordinasikan pengerjaan hingga barang diterima sesuai kesepakatan.",
    icon: PackageCheck,
  },
];

const trustItems = [
  { label: "Berbasis di", value: "Bekasi", icon: MapPin },
  { label: "Area layanan", value: "Jabodetabek", icon: Truck },
  { label: "Respons penawaran", value: "< 1 hari kerja", icon: Clock3 },
  { label: "Dokumen bisnis", value: "PO & invoice", icon: ShieldCheck },
];

const navItems = [
  { label: "Kategori", href: "#kategori" },
  { label: "Cara kerja", href: "#cara-kerja" },
  { label: "Tentang", href: "#tentang" },
];

function Wordmark() {
  return (
    <a
      href="#beranda"
      className="group inline-flex items-center gap-2.5"
      aria-label="Kanaughi, kembali ke beranda"
    >
      <span className="grid size-8 place-items-center rounded-full border border-foreground/20 bg-[#e6dbcf] text-[12px] font-bold">
        K
      </span>
      <span className="font-serif text-[22px] font-semibold tracking-[-0.03em]">
        Kanaughi
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Wordmark />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-semibold text-foreground/70 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:inline-flex"
        >
          Minta penawaran <ArrowUpRightIcon />
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-border md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-5 md:hidden"
          aria-label="Navigasi seluler"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3.5 text-lg font-semibold hover:bg-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 font-bold text-primary-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Minta penawaran <ArrowUpRightIcon />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={16} aria-hidden="true" className="-rotate-45" />;
}

function HeroArtwork() {
  return (
    <div
      className="relative min-h-[450px] overflow-hidden rounded-[2px] bg-[#d8c9b6] lg:min-h-[590px]"
      aria-label="Ilustrasi pilihan sampel produk Kanaughi"
      role="img"
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-foreground/15 px-6 py-5 text-[11px] font-bold uppercase tracking-[0.16em]">
        <span>Sample desk / 001</span>
        <span>Bekasi, ID</span>
      </div>

      <div className="absolute left-[10%] top-[24%] h-[45%] w-[45%] -rotate-6 bg-[#f7f2eb] p-5 shadow-[0_22px_50px_rgba(47,39,31,0.16)] sm:p-7">
        <div className="mb-8 flex items-center justify-between border-b border-[#2e2b27]/20 pb-3 text-[9px] font-bold uppercase tracking-widest">
          <span>Brief</span>
          <span>24.06</span>
        </div>
        <p className="font-serif text-2xl leading-[1.05] tracking-[-0.03em] text-[#2e2b27] sm:text-4xl">
          Kebutuhan kantor,
          <br />
          dibuat lebih ringkas.
        </p>
        <div className="absolute bottom-5 left-5 right-5 flex gap-2 sm:bottom-7 sm:left-7 sm:right-7">
          <span className="h-1 flex-1 bg-[#a94f38]" />
          <span className="h-1 flex-1 bg-[#6d7561]" />
          <span className="h-1 flex-1 bg-[#d5ae62]" />
        </div>
      </div>

      <div className="absolute bottom-[13%] right-[10%] h-[39%] w-[37%] rotate-6 bg-[#a94f38] p-5 text-[#fffaf4] shadow-[0_22px_50px_rgba(47,39,31,0.18)] sm:p-7">
        <Shirt className="mb-8 opacity-90" size={34} strokeWidth={1.4} />
        <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
          Custom uniform
        </p>
        <p className="mt-2 font-serif text-3xl leading-none tracking-[-0.04em]">
          Tim Anda,
          <br />
          satu identitas.
        </p>
      </div>

      <div className="absolute bottom-6 left-6 grid size-20 place-items-center rounded-full border border-foreground/25 bg-[#d5ae62] text-[10px] font-bold uppercase tracking-widest sm:size-24">
        <span className="-rotate-12 text-center">
          Made to
          <br />
          brief
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-foreground px-4 py-3 font-bold text-background focus:translate-y-0"
      >
        Lewati ke konten utama
      </a>

      <Header />

      <main id="main-content">
        <section
          id="beranda"
          className="mx-auto grid max-w-[1360px] gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.07fr_0.93fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-24 lg:pt-24"
        >
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-[#743523]">
              <span className="h-px w-9 bg-primary" />
              Pengadaan B2B · Bekasi
            </div>
            <h1 className="max-w-[780px] font-serif text-[clamp(3.65rem,7.2vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.055em]"><span className="">Dari brief,<br></br><span></span>jadi beres.</span><br /></h1>
            <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-[570px] text-base leading-7 text-muted-foreground sm:text-lg">
                Alat kantor, media cetak, dan seragam bisnis—dikurasi sesuai
                kebutuhan, anggaran, dan tenggat perusahaan Anda.
              </p>
              <a
                href="#kontak"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 font-bold text-primary-foreground transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Kirim kebutuhan
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Check size={16} className="text-primary" aria-hidden="true" />
              Bisa mulai dari daftar sederhana atau spesifikasi lengkap.
            </p>
          </div>
          <HeroArtwork />
        </section>

        <section className="border-y border-border bg-[#eee6dc]" aria-label="Keunggulan layanan">
          <div className="mx-auto grid max-w-[1360px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`py-7 sm:flex sm:items-center sm:gap-4 lg:py-8 ${
                    index % 2 !== 0 ? "border-l border-border pl-5 sm:pl-7" : ""
                  } ${index > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}
                >
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="mb-3 text-primary sm:mb-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 font-serif text-xl font-semibold">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="kategori"
          className="mx-auto max-w-[1360px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
        >
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-[#743523]">
                01 / Kategori
              </p>
              <h2 className="font-serif text-[clamp(2.8rem,5vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.045em]">
                Satu pintu untuk
                <br />
                kebutuhan bisnis.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground lg:justify-self-end">
              Tidak perlu berpindah vendor untuk setiap kebutuhan. Kami bantu
              mulai dari pemilihan spesifikasi sampai koordinasi pengiriman.
            </p>
          </div>

          <div className="grid border-l border-t border-border md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.number}
                  href="#kontak"
                  className="group relative flex min-h-[480px] flex-col overflow-hidden border-b border-r border-border bg-card p-7 transition-colors duration-300 hover:bg-[#fffaf4] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.16em]">
                      {category.number}
                    </span>
                    <ArrowDownRight
                      size={22}
                      className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`relative my-10 grid h-40 place-items-center overflow-hidden ${category.tone}`}
                  >
                    <div className="absolute h-28 w-28 rounded-full border border-white/35 transition-transform duration-500 group-hover:scale-[1.45]" />
                    <Icon
                      size={62}
                      strokeWidth={1}
                      className="relative text-[#28241f] transition-transform duration-300 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-[2rem] font-semibold leading-none tracking-[-0.035em]">
                      {category.title}
                    </h3>
                    <p className="mt-4 leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="mt-7 border-t border-border pt-4 text-xs font-bold uppercase tracking-[0.13em] text-[#743523]">
                      {category.detail}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="tentang" className="bg-[#2b3029] text-[#f7f2eb]">
          <div className="mx-auto grid max-w-[1360px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[480px] overflow-hidden border-b border-white/15 p-8 sm:p-12 lg:min-h-[650px] lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#d9b19f]">
                Dibangun untuk bisnis
              </p>
              <div className="absolute -bottom-14 -left-8 font-serif text-[15rem] leading-none text-white/[0.035] sm:text-[22rem]">
                K
              </div>
              <div className="absolute inset-x-8 bottom-9 grid grid-cols-2 gap-3 sm:inset-x-12">
                {["Spesifikasi jelas", "Update progres", "Harga transparan", "Koordinasi ringkas"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex min-h-24 flex-col justify-between border border-white/20 bg-white/[0.04] p-4 backdrop-blur-sm"
                    >
                      <Check size={16} className="text-[#d9b19f]" />
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center px-5 py-20 sm:px-12 sm:py-24 lg:px-20">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.17em] text-[#d9b19f]">
                Kenapa Kanaughi
              </p>
              <h2 className="max-w-[700px] font-serif text-[clamp(3rem,5.6vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                Pengadaan yang terasa lebih manusiawi.
              </h2>
              <p className="mt-9 max-w-xl text-lg leading-8 text-white/68">
                Anda berkomunikasi dengan satu tim yang memahami brief, bukan
                sekadar meneruskan daftar belanja. Setiap opsi dijelaskan agar
                keputusan lebih cepat dan tepat.
              </p>
              <div className="mt-11 grid gap-7 border-t border-white/20 pt-8 sm:grid-cols-2">
                <div>
                  <p className="font-serif text-4xl font-semibold">Satu PIC</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Untuk koordinasi lintas kategori dan pengiriman.
                  </p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-semibold">Fleksibel</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Produk standar maupun kebutuhan custom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="cara-kerja"
          className="mx-auto max-w-[1360px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
        >
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-[#743523]">
                02 / Cara kerja
              </p>
              <h2 className="font-serif text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
                Jelas sejak langkah pertama.
              </h2>
              <p className="mt-7 max-w-sm leading-7 text-muted-foreground">
                Proses yang sederhana, tanpa mengurangi detail yang penting
                untuk kualitas dan ketepatan waktu.
              </p>
            </div>

            <ol className="border-t border-border">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.number}
                    className="group grid gap-5 border-b border-border py-7 sm:grid-cols-[54px_1fr_1.2fr_auto] sm:items-center sm:gap-7"
                  >
                    <span className="text-xs font-bold tracking-[0.16em] text-primary">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-[1.7rem] font-semibold tracking-[-0.03em]">
                      {step.title}
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                    <span className="grid size-11 place-items-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="kontak" className="px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="relative overflow-hidden bg-primary px-5 py-20 text-primary-foreground sm:px-12 sm:py-24 lg:px-20 lg:py-28">
            <div className="absolute -right-16 -top-28 size-[420px] rounded-full border border-white/15" />
            <div className="absolute -right-4 -top-16 size-[300px] rounded-full border border-white/15" />
            <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.17em] text-white/70">
                  Siap mulai?
                </p>
                <h2 className="max-w-[850px] font-serif text-[clamp(3.3rem,7vw,7.8rem)] font-semibold leading-[0.87] tracking-[-0.055em]">
                  Kirim brief.
                  <br />
                  Kami lanjutkan.
                </h2>
              </div>
              <div className="lg:pb-2">
                <p className="mb-8 max-w-md text-lg leading-8 text-white/80">
                  Ceritakan kebutuhan perusahaan Anda. Tim Kanaughi akan
                  menghubungi Anda untuk melengkapi detail dan menyiapkan opsi.
                </p>
                <a
                  href="mailto:halo@kanaughi.co.id?subject=Permintaan%20Penawaran%20Pengadaan"
                  className="group inline-flex min-h-16 w-full items-center justify-between rounded-full bg-[#f7f2eb] px-7 font-bold text-[#2e2b27] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:min-w-[290px]"
                >
                  Minta penawaran
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <p className="mt-5 text-sm text-white/65">
                  atau email ke{" "}
                  <a
                    className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    href="mailto:halo@kanaughi.co.id"
                  >
                    halo@kanaughi.co.id
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-[1360px] px-5 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-[1fr_auto_auto] md:gap-20">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Pengadaan perlengkapan kantor, media cetak, dan seragam untuk
              perusahaan di Bekasi dan Jabodetabek.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#743523]">
              Jelajahi
            </p>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#743523]">
              Lokasi
            </p>
            <p className="text-sm font-semibold">Bekasi, Jawa Barat</p>
            <p className="mt-2 text-sm text-muted-foreground">Melayani Jabodetabek</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kanaughi. Hak cipta dilindungi.</p>
          <p>Pengadaan bisnis, tanpa dibuat rumit.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
