"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/ebeveyn", label: "Ebeveyn" },
  { href: "/cocuk", label: "Çocuklar" },
  { href: "/platformlar", label: "Platformlar" },
  { href: "/quiz", label: "Quiz" },
  { href: "/fiyatlandirma", label: "Fiyat" },
];

const marqueeItems = ["DİJİTAL GÜVENLİK", "★", "ÇOCUKLARINIZ İÇİN", "●", "2025 SÜRÜMÜ", "★", "TÜRKÇE REHBER", "●", "ÜCRETSİZ BAŞLA", "★"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-ink text-cream border-b-2 border-ink py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-xs font-mono uppercase tracking-widest">{item}</span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-cream border-b-2 border-ink">
        <div className="wrap flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-lime border-2 border-ink flex items-center justify-center group-hover:-rotate-6 transition-transform">
              <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-ink hidden sm:block italic">
              Güvenli Medya<span className="text-hot">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-bold uppercase tracking-wider text-ink hover:text-hot transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/giris" className="hidden sm:block text-xs font-bold uppercase text-ink hover:underline decoration-2">Giriş</Link>
            <Link href="/kayit" className="brut-btn bg-lime text-ink text-xs uppercase" style={{ boxShadow: "3px 3px 0 0 #0a0a0a" }}>
              Kayıt Ol →
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 border-2 border-ink bg-white" aria-label="Menü">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t-2 border-ink bg-cream px-5 py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="block py-2.5 text-sm font-bold uppercase tracking-wider text-ink hover:text-hot" onClick={() => setOpen(false)}>
                → {l.label}
              </Link>
            ))}
            <Link href="/giris" className="block py-2.5 text-sm font-bold uppercase tracking-wider text-ink" onClick={() => setOpen(false)}>→ Giriş</Link>
          </div>
        )}
      </header>
    </>
  );
}
