"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/ebeveyn", label: "Ebeveyn" },
  { href: "/cocuk", label: "Çocuklar" },
  { href: "/platformlar", label: "Platformlar" },
  { href: "/quiz", label: "Quiz" },
  { href: "/fiyatlandirma", label: "Planlar" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 inset-x-0 z-40 transition-colors duration-200 ${
          scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-ink flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-paper" />
            </div>
            <span className="font-medium text-[15px] text-ink hidden sm:block">
              Güvenli Medya
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 text-sm transition-colors ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/giris"
              className="hidden sm:block text-sm text-muted hover:text-ink px-3 py-2 transition-colors"
            >
              Giriş
            </Link>
            <Link
              href="/kayit"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Kayıt ol
              <span className="text-xs opacity-70">→</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-ink hover:bg-sand rounded-full transition-colors"
              aria-label="Menü"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-ink transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-ink transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-paper transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20 px-6 pb-10 h-full flex flex-col">
          <nav className="space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-4 border-b border-line text-2xl text-ink hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex gap-3">
            <Link href="/giris" className="flex-1 text-center py-3 border border-line text-ink text-sm rounded-full">
              Giriş
            </Link>
            <Link href="/kayit" className="flex-1 text-center py-3 bg-ink text-paper text-sm rounded-full">
              Kayıt ol
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
