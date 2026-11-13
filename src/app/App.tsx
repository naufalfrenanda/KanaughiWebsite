import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Coffee,
  FileCheck2,
  FileText,
  Headphones,
  Menu,
  MessageCircle,
  Moon,
  NotebookPen,
  Package,
  PenTool,
  Printer,
  Search,
  Send,
  Shirt,
  ShoppingCart,
  Sparkles,
  Star,
  Sun,
  Truck,
  X,
} from "lucide-react";
import warehouseImage from "../assets/procurement-warehouse.png";

type Icon = React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;

const navItems = [
  ["Layanan", "#layanan"],
  ["Cara Kerja", "#cara-kerja"],
  ["Keunggulan", "#keunggulan"],
  ["Harga", "#harga"],
  ["Kontak", "#kontak"],
];

const productTabs = ["Perlengkapan Kantor", "Media Percetakan", "Seragam & Konveksi"];

const productItems = [
  { icon: NotebookPen, label: "Notebook Custom" },
  { icon: PenTool, label: "ATK Harian" },
  { icon: Coffee, label: "Pantry Supply" },
  { icon: Printer, label: "Kartu Nama" },
  { icon: Package, label: "Kemasan" },
  { icon: Shirt, label: "Seragam" },
];

const officeItems = [
  { icon: PenTool, label: "Alat Tulis" },
  { icon: NotebookPen, label: "Notebook Custom" },
  { icon: FileText, label: "Filing & Arsip" },
  { icon: Coffee, label: "Pantry" },
  { icon: Printer, label: "Tinta & Kertas" },
  { icon: Headphones, label: "Aksesori Kerja" },
];

const uniformItems = [
  { icon: BriefcaseBusiness, label: "Kemeja", caption: "Formal & lapangan" },
  { icon: Shirt, label: "Kaos", caption: "Cotton & dry-fit" },
  { icon: Shirt, label: "Jaket", caption: "Bomber & windbreaker" },
  { icon: Package, label: "Aksesori", caption: "Tote bag & topi" },
];

const steps = [
  { icon: Send, title: "Kirim Kebutuhan", text: "Kirim daftar barang, spesifikasi, jumlah, dan tenggat Anda." },
  { icon: Search, title: "Kami Kurasi Opsi", text: "Kami pilihkan opsi terbaik dari vendor yang sudah terverifikasi." },
  { icon: FileCheck2, title: "Setujui Penawaran", text: "Bandingkan spesifikasi dan harga dalam satu penawaran ringkas." },
  { icon: Truck, title: "Produksi & Kirim", text: "Kami kawal QC, produksi, dan pengiriman sampai lokasi Anda." },
];

function Button({
  children,
  href,
  secondary = false,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
        secondary
          ? "border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary"
          : "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-lg"
      } ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function ServiceTile({
  icon: IconComponent,
  label,
  large = false,
}: {
  icon: Icon;
  label: string;
  large?: boolean;
}) {
  return (
    <article
      className={`group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-panel hover:shadow-sm ${
        large ? "min-h-56 sm:min-h-64" : "min-h-40"
      }`}
    >
      <div className="grid size-11 place-items-center rounded-xl bg-panel text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <IconComponent size={21} strokeWidth={1.8} />
      </div>
      <div className="flex items-end justify-between gap-4">
        <h3 className={large ? "max-w-52 text-2xl font-semibold tracking-tight" : "text-base font-semibold"}>
          {label}
        </h3>
        <ChevronRight className="text-muted-foreground transition-transform group-hover:translate-x-1" size={18} />
      </div>
    </article>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-shell items-center justify-between px-gutter">
        <a href="#beranda" className="text-xl font-bold tracking-tighter" aria-label="Kanaughi, kembali ke beranda">
          Kanaughi<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={dark ? "Gunakan mode terang" : "Gunakan mode gelap"}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Button href="#kontak" className="hidden sm:inline-flex">
            Mulai Pengadaan <ArrowRight size={16} />
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border bg-card lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-border bg-background px-gutter py-5 lg:hidden" aria-label="Navigasi mobile">
          <div className="mx-auto flex max-w-shell flex-col">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-border py-4 font-medium">
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function ProductPanel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mx-auto max-w-shell px-gutter">
      <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-border bg-panel shadow-sm">
        <div className="scrollbar-hidden relative z-10 flex gap-1 overflow-x-auto border-b border-border bg-card/60 p-3 backdrop-blur-xl" role="tablist">
          {productTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={`shrink-0 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                activeTab === index ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute left-[20%] top-[28%] size-72 rounded-full bg-primary/20 blur-3xl" />
          <span className="absolute right-[18%] top-[34%] size-64 rounded-full bg-accent/20 blur-3xl" />
          <span className="absolute bottom-0 left-[43%] size-56 rounded-full bg-slate-orb/30 blur-3xl" />
        </div>
        <div className="relative z-10 flex min-h-[350px] flex-col items-center justify-center px-6 py-14 text-center">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/75 px-4 py-2 text-xs font-semibold backdrop-blur-md">
            <span className="size-2 rounded-full bg-accent shadow-status" />
            Satu Platform Pengadaan
          </span>
          <button
            type="button"
            className="group grid size-24 place-items-center rounded-full border border-white/40 bg-card/70 text-primary shadow-glass backdrop-blur-3xl transition-all duration-300 hover:scale-105 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label={`Mulai pengadaan ${productTabs[activeTab]}`}
          >
            <ShoppingCart size={34} strokeWidth={1.6} className="transition-transform group-hover:-rotate-6" />
          </button>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            {activeTab === 0 && "Semua kebutuhan operasional kantor, dari item harian hingga custom branding."}
            {activeTab === 1 && "Proofing terarah, produksi terpantau, dan kualitas cetak yang konsisten."}
            {activeTab === 2 && "Bahan, ukuran, dan finishing yang dikurasi sesuai identitas tim Anda."}
          </p>
        </div>
        <div className="scrollbar-hidden relative z-10 flex items-center gap-2 overflow-x-auto border-t border-border bg-card/70 p-3 backdrop-blur-xl">
          {productItems.map(({ icon: ItemIcon, label }) => (
            <span key={label} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold">
              <ItemIcon size={14} className="text-primary" /> {label}
            </span>
          ))}
          <Button href="#kontak" className="ml-auto shrink-0 !min-h-10 !px-5">
            Mulai Pengadaan
          </Button>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mt-8 aspect-[16/11] overflow-hidden rounded-3xl border border-border shadow-sm lg:aspect-video">
      <img src={warehouseImage} alt="Gudang perlengkapan kantor Kanaughi yang tertata rapi" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-overlay/70 via-slate-overlay/20 to-transparent" />
      <div className="absolute inset-x-4 bottom-4 grid gap-3 rounded-2xl border border-white/40 bg-white/75 p-4 shadow-glass backdrop-blur-3xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[520px] sm:grid-cols-[1fr_1.2fr] sm:p-5">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
          {[["Waktu Respon", "< 4 Jam"], ["Akurasi", "99.2%"], ["Ketepatan", "98.7%"]].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white/70 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
              <p className="mt-1 font-mono text-base font-bold text-slate-900">{value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-slate-950 p-4 text-white">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Pesanan aktif</p>
              <p className="mt-1 text-sm font-semibold">PO-24018</p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-300">ON TRACK</span>
          </div>
          <div className="flex h-20 items-end gap-2">
            {[35, 54, 43, 78, 64, 92, 82].map((height, i) => (
              <span key={i} style={{ height: `${height}%` }} className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-emerald-400" />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
            <Truck size={14} className="text-emerald-300" /> Estimasi tiba 14 Juni, 10:00
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus:translate-y-0">
        Lewati ke konten utama
      </a>
      <Header />

      <main id="main-content">
        <section id="beranda" className="mx-auto grid max-w-shell gap-12 px-gutter pb-16 pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-44">
          <div className="lg:col-span-7">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles size={13} className="text-accent" /> Procurement partner untuk Jabodetabek
            </span>
            <h1 className="text-balance text-[clamp(3.25rem,6.6vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
              Pengadaan B2B One-Stop: ATK, Cetak, Seragam — Dikurasi, Dikirim, Selesai
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Satu PIC handle ATK, media cetak, seragam. Brief hari ini, penawaran &lt; 1 hari kerja.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#kontak">Kirim Brief → Penawaran &lt; 1 Hari</Button>
              <Button href="#cara-kerja" secondary>Lihat Cara Kerja</Button>
            </div>
          </div>
          <div className="flex items-end lg:col-span-4 lg:col-start-9 lg:pb-2">
            <p className="max-w-sm border-l-2 border-accent pl-5 text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              Kurangi koordinasi vendor. Kami menyatukan sourcing, produksi, QC, dan pengiriman dalam satu alur yang transparan.
            </p>
          </div>
        </section>

        <ProductPanel />

        <section className="mx-auto max-w-shell px-gutter py-16">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.19em] text-muted-foreground">
            Dipercaya 50+ perusahaan <span className="mx-3 text-accent">•</span> 10.000+ barang dikirim <span className="mx-3 text-accent">•</span> Rating 4.9/5
          </p>
        </section>

        <section aria-label="Klien Kanaughi" className="overflow-hidden border-y border-border bg-card py-9">
          <div className="marquee-track flex w-max items-center gap-24 whitespace-nowrap hover:[animation-play-state:paused]">
            {[...Array(2)].flatMap((_, repeat) =>
              ["NUSANTARA", "ARUNIKA", "SATU DATA", "KARYA+", "VERDA", "ATLAS", "MONO"].map((name, index) => (
                <span key={`${repeat}-${name}`} aria-hidden={repeat === 1} className="inline-flex items-center gap-3 text-xl font-black italic tracking-tight text-foreground/20">
                  <BadgeCheck size={23} /> {name}
                </span>
              )),
            )}
          </div>
        </section>

        <section id="layanan" className="section-space mx-auto max-w-shell px-gutter">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>Platform Terpadu</SectionLabel>
              <h2 className="text-balance text-[clamp(2.75rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
                Tiga Kategori, Satu Platform Terpadu
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              Mulai dari permintaan sederhana sampai pengadaan lintas divisi. Semua dikoordinasikan satu tim, satu timeline.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="group relative flex h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 to-violet-500 p-8 text-white">
              <div className="absolute -right-12 -top-12 size-56 rounded-full bg-white/15 blur-2xl transition-opacity group-hover:opacity-50" />
              <Package size={42} strokeWidth={1.5} />
              <div className="mt-auto">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/70">Operasional Harian</p>
                <h3 className="text-3xl font-semibold tracking-tight">Perlengkapan Kantor</h3>
              </div>
            </article>
            <article className="group relative flex h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-400 p-8 text-white">
              <div className="absolute -bottom-12 -right-12 size-56 rounded-full bg-white/15 blur-2xl transition-opacity group-hover:opacity-50" />
              <Printer size={42} strokeWidth={1.5} />
              <div className="mt-auto">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/70">Print on Demand</p>
                <h3 className="text-3xl font-semibold tracking-tight">Media Percetakan</h3>
              </div>
            </article>
          </div>
          <DashboardPreview />
        </section>

        <section className="section-space border-y border-border bg-card">
          <div className="mx-auto max-w-shell px-gutter">
            <SectionLabel>Perlengkapan Kantor</SectionLabel>
            <h2 className="max-w-3xl text-balance text-[clamp(2.5rem,4.2vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
              ATK, Notebook Custom, Pantry — Satu Pengadaan
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {officeItems.map((item, index) => (
                <div key={item.label} className={index < 2 ? "lg:col-span-2" : ""}>
                  <ServiceTile {...item} large={index < 2} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space mx-auto max-w-shell px-gutter">
          <SectionLabel>Media Percetakan</SectionLabel>
          <h2 className="max-w-4xl text-balance text-[clamp(2.5rem,4.2vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
            Kartu Nama, Kemasan, Banner — Cetak Satuan & Volume
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="flex min-h-[450px] flex-col rounded-3xl border border-border bg-panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground"><MessageCircle size={20} /></div>
                <div><p className="font-semibold">Desain & Proofing</p><p className="text-xs text-muted-foreground">Feedback dalam satu alur</p></div>
              </div>
              <div className="my-auto space-y-4 py-10">
                <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-card p-4 shadow-sm">
                  <p className="text-sm leading-relaxed">Untuk kartu nama, bisakah logo dibuat spot UV dan nama memakai silver foil?</p>
                  <p className="mt-2 text-[10px] text-muted-foreground">Anda · 09:12</p>
                </div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-primary p-4 text-primary-foreground shadow-sm">
                  <p className="text-sm leading-relaxed">Bisa. Kami siapkan digital proof dengan dua opsi ketebalan kertas hari ini.</p>
                  <p className="mt-2 text-[10px] text-blue-100">Kanaughi · 09:18</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><CheckCircle2 size={15} className="text-accent" /> Semua revisi terdokumentasi</div>
            </article>
            <article className="flex min-h-[450px] flex-col rounded-3xl border border-border bg-slate-950 p-6 text-white sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><div className="grid size-11 place-items-center rounded-xl bg-emerald-500/20 text-emerald-300"><BarChart3 size={20} /></div><div><p className="font-semibold">Produksi & QC</p><p className="text-xs text-slate-400">Live production overview</p></div></div>
                <span className="size-2 rounded-full bg-emerald-400 shadow-status" />
              </div>
              <div className="my-auto">
                <div className="mb-8 grid grid-cols-3 gap-3">
                  {[["PROGRESS", "78%"], ["QC PASS", "99.4%"], ["BATCH", "03/04"]].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3"><p className="text-[9px] tracking-widest text-slate-400">{label}</p><p className="mt-2 font-mono text-lg font-bold">{value}</p></div>
                  ))}
                </div>
                <div className="flex h-36 items-end gap-3 border-b border-white/10">
                  {[42, 60, 51, 75, 67, 88, 96, 84, 100].map((height, i) => (
                    <span key={i} style={{ height: `${height}%` }} className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-emerald-400 opacity-90" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400">Diperbarui otomatis · 2 menit lalu</p>
            </article>
          </div>
        </section>

        <section className="section-space border-y border-border bg-card">
          <div className="mx-auto max-w-shell px-gutter">
            <SectionLabel>Seragam & Konveksi</SectionLabel>
            <h2 className="max-w-4xl text-balance text-[clamp(2.5rem,4.2vw,3rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
              Kemeja, Kaos, Jaket, Tote Bag — Ukuran & Bahan Custom
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {uniformItems.map(({ icon: UniformIcon, label, caption }) => (
                <article key={label} className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-sm">
                  <div className="mb-16 grid size-12 place-items-center rounded-xl bg-panel text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><UniformIcon size={23} /></div>
                  <h3 className="text-lg font-semibold">{label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cara-kerja" className="section-space mx-auto max-w-shell px-gutter">
          <SectionLabel>Cara Kerja</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="max-w-md text-balance text-[clamp(2.75rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.055em]">Dari brief sampai barang tiba.</h2>
            <div className="grid sm:grid-cols-2">
              {steps.map(({ icon: StepIcon, title, text }, index) => (
                <article
                  key={title}
                  className={`border-b border-border py-7 sm:p-7 ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  } ${index > 1 ? "sm:border-b-0" : ""}`}
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-primary">0{index + 1}</span>
                    <StepIcon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="keunggulan" className="border-y border-border bg-panel py-14">
          <div className="mx-auto flex max-w-shell flex-wrap items-center justify-center gap-x-16 gap-y-8 px-gutter">
            {["BRI", "TELKOM", "SILOAM", "RUANGGURU", "TRAVELOKA", "ASTRA"].map((logo) => (
              <span key={logo} className="font-black tracking-tight text-foreground/35 grayscale transition-opacity hover:text-foreground hover:opacity-100">{logo}</span>
            ))}
          </div>
        </section>

        <section id="harga" className="section-space mx-auto max-w-shell px-gutter">
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              ["“Satu PIC Kanaughi membuat pengadaan lintas divisi jauh lebih ringkas. Penawarannya jelas dan pengirimannya tepat waktu.”", "Maya Pradipta", "Office Manager · Arunika Group"],
              ["“Mereka cepat menangkap brief, termasuk detail material cetak dan ukuran seragam yang cukup kompleks.”", "Fajar Nugraha", "Procurement Lead · Atlas Digital"],
            ].map(([quote, name, role]) => (
              <figure key={name} className="rounded-3xl border border-border bg-card p-7 sm:p-9">
                <div className="mb-8 flex gap-1 text-star" aria-label="5 dari 5 bintang">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                <blockquote className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">{quote}</blockquote>
                <figcaption className="mt-9 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{name.split(" ").map((word) => word[0]).join("")}</span>
                  <span><span className="block text-sm font-semibold">{name}</span><span className="block text-xs text-muted-foreground">{role}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">Tidak ada biaya platform. Harga transparan berdasarkan spesifikasi, volume, dan tenggat kebutuhan Anda.</p>
        </section>

        <section id="kontak" className="mx-auto max-w-shell px-gutter pb-16">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center text-primary-foreground sm:px-12 sm:py-28">
            <span className="absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl" />
            <span className="absolute -bottom-28 -right-20 size-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Mulai hari ini</span>
              <h2 className="mx-auto mt-5 max-w-3xl text-balance text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-tight tracking-[-0.045em]">Siap Memulai Pengadaan Lebih Mudah?</h2>
              <p className="mx-auto mt-5 max-w-xl text-blue-100">Bagikan kebutuhan Anda. Tim kami akan merespons dengan opsi dan penawaran awal dalam satu hari kerja.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="mailto:halo@kanaughi.id" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Kirim Brief Sekarang <ArrowRight size={16} /></a>
                <a href="mailto:halo@kanaughi.id" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Hubungi Tim Kami</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-shell flex-col gap-8 px-gutter py-10 sm:flex-row sm:items-center sm:justify-between">
          <div><a href="#beranda" className="text-xl font-bold tracking-tighter">Kanaughi<span className="text-accent">.</span></a><p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} Kanaughi. Bekasi, Indonesia.</p></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground" aria-label="Navigasi footer">
            {["Twitter", "LinkedIn", "Syarat", "Privasi"].map((item) => <a key={item} href="#kontak" className="transition-colors hover:text-primary">{item}</a>)}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
