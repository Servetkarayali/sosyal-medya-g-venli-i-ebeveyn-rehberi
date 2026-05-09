"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/ebeveyn", label: "Ebeveyn" },
  { href: "/cocuk", label: "Çocuklar" },
  { href: "/platformlar", label: "Platformlar" },
  { href: "/quiz", label: "Quiz" },
  { href: "/fiyatlandirma", label: "Fiyatlar" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="section-wrapper flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-base hidden sm:block">Güvenli Medya</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/giris" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-brand-600 px-3 py-2 rounded-lg transition-colors">
            Giriş
          </Link>
          <Link href="/kayit" className="hidden sm:block text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-lg transition-colors">
            Kayıt Ol
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
            <Link href="/giris" className="flex-1 text-center py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg" onClick={() => setOpen(false)}>Giriş</Link>
            <Link href="/kayit" className="flex-1 text-center py-2.5 text-sm font-semibold text-white bg-brand-500 rounded-lg" onClick={() => setOpen(false)}>Kayıt Ol</Link>
          </div>
        </div>
      )}
    </header>
  );
}
