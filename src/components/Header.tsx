"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { key: "parent", href: "/ebeveyn", label: "Ebeveyn Rehberi", emoji: "👨‍👩‍👧" },
  { key: "child", href: "/cocuk", label: "Çocuk Bölümü", emoji: "🧒" },
  { key: "platforms", href: "/platformlar", label: "Platformlar", emoji: "📱" },
  { key: "quiz", href: "/quiz", label: "Quiz", emoji: "🎮" },
  { key: "risk", href: "/risk-hesapla", label: "Risk Skoru", emoji: "📊" },
  { key: "pricing", href: "/fiyatlandirma", label: "Fiyatlar", emoji: "💎" },
  { key: "emergency", href: "/acil-durum", label: "Acil Durum", emoji: "🆘" },
];

const languages = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Aile dostu */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform">
              <span className="text-lg">🛡️</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-extrabold text-gray-900 block leading-tight">Dijital Güvenlik</span>
              <span className="text-[10px] font-medium text-sky-600 -mt-0.5 block">Aile Rehberi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                  item.key === "emergency"
                    ? "text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                    : "text-gray-600 hover:text-sky-700 hover:bg-sky-50"
                }`}
              >
                <span className="mr-1">{item.emoji}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />

            {/* Auth buttons */}
            <Link
              href="/giris"
              className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
            >
              Giriş
            </Link>
            <Link
              href="/kayit"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold gradient-primary text-white shadow-sm hover:shadow-glow-blue transition-all hover:-translate-y-0.5"
            >
              ✨ Kayıt Ol
            </Link>

            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2 py-2 rounded-xl text-sm text-gray-600 hover:bg-sky-50 transition-colors"
              >
                🇹🇷
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-soft border border-sky-100 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-sky-50 transition-colors font-medium"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-5 border-t border-sky-100 mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    item.key === "emergency"
                      ? "text-rose-600 hover:bg-rose-50"
                      : "text-gray-700 hover:text-sky-700 hover:bg-sky-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-2">{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
              {/* Mobile Auth */}
              <div className="border-t border-sky-100 mt-3 pt-3 flex gap-2 px-3">
                <Link
                  href="/giris"
                  className="flex-1 text-center py-3 rounded-xl border-2 border-sky-200 text-sm font-bold text-sky-700 hover:bg-sky-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/kayit"
                  className="flex-1 text-center py-3 rounded-xl gradient-primary text-white text-sm font-bold shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ✨ Kayıt Ol
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
