"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { key: "home", href: "/", label: "Ana Sayfa" },
  { key: "parent", href: "/ebeveyn", label: "Ebeveyn Rehberi" },
  { key: "child", href: "/cocuk", label: "Çocuk Bölümü" },
  { key: "platforms", href: "/platformlar", label: "Platformlar" },
  { key: "quiz", href: "/quiz", label: "Quiz & Testler" },
  { key: "risk", href: "/risk-hesapla", label: "Risk Skoru" },
  { key: "contract", href: "/sozlesme", label: "Sözleşme" },
  { key: "emergency", href: "/acil-durum", label: "Acil Durum" },
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
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">Dijital Güvenlik</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link key={item.key} href={item.href} className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${item.key === "emergency" ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                🇹🇷
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {languages.map((lang) => (
                    <button key={lang.code} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors" onClick={() => setIsLangOpen(false)}>
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
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

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link key={item.key} href={item.href} className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.key === "emergency" ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
