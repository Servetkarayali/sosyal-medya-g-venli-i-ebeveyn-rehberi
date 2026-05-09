"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/ebeveyn", label: "Ebeveyn", num: "01" },
  { href: "/cocuk", label: "Çocuklar", num: "02" },
  { href: "/platformlar", label: "Platformlar", num: "03" },
  { href: "/quiz", label: "Quiz", num: "04" },
  { href: "/risk-hesapla", label: "Risk", num: "05" },
  { href: "/fiyatlandirma", label: "Planlar", num: "06" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-void/80 backdrop-blur-xl border-b border-steel" : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-cyan/20 blur-lg group-hover:bg-neon-pink/30 transition-colors" />
              <div className="relative w-full h-full border border-neon-cyan/60 bg-void flex items-center justify-center group-hover:border-neon-pink transition-colors">
                <div className="w-2 h-2 bg-neon-cyan group-hover:bg-neon-pink transition-colors" />
              </div>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper hidden sm:block">
              GÜVENLİ<span className="text-neon-cyan">.</span>MEDYA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-colors ${
                    active ? "text-neon-cyan" : "text-paper/70 hover:text-paper"
                  }`}
                >
                  <span className="text-[9px] text-paper/40 group-hover:text-neon-pink mr-1.5 transition-colors">
                    {l.num}
                  </span>
                  {l.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-neon-cyan" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/giris"
              className="hidden sm:block text-xs font-mono uppercase tracking-widest text-paper/70 hover:text-paper px-3 py-2 transition-colors"
            >
              Giriş
            </Link>
            <Link
              href="/kayit"
              className="relative group overflow-hidden"
            >
              <span className="relative z-10 block px-5 py-2 bg-neon-lime text-void text-xs font-bold uppercase tracking-widest transition-transform group-hover:-translate-y-full">
                Kaydol →
              </span>
              <span className="absolute inset-0 flex items-center justify-center px-5 py-2 bg-neon-pink text-void text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform">
                Başla
              </span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-paper border border-steel hover:border-neon-cyan transition-colors"
              aria-label="Menü"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-paper transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-paper transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-paper transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-void transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative h-full flex flex-col justify-center px-8 pt-20 pb-10">
          <nav className="space-y-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-baseline gap-4 py-3 border-b border-steel hover:border-neon-cyan transition-colors"
                style={{
                  animation: open ? `fade-up 0.4s ${i * 60}ms both` : "none",
                }}
              >
                <span className="text-xs font-mono text-paper/40 group-hover:text-neon-pink transition-colors">
                  {l.num}
                </span>
                <span className="display-text text-4xl sm:text-5xl text-paper group-hover:text-neon-cyan transition-colors">
                  {l.label}
                </span>
                <span className="ml-auto text-paper/30 group-hover:text-paper transition-colors">→</span>
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex gap-3">
            <Link href="/giris" className="flex-1 text-center py-3 border border-steel text-paper text-xs font-mono uppercase tracking-widest">Giriş</Link>
            <Link href="/kayit" className="flex-1 text-center py-3 bg-neon-lime text-void text-xs font-bold uppercase tracking-widest">Kaydol →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
