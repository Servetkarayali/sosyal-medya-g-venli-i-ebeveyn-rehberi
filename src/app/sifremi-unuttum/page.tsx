"use client";

import { useState } from "react";
import Link from "next/link";

export default function SifremiUnuttumPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <div className="min-h-[80vh] py-16 sm:py-20">
      <div className="wrap-narrow max-w-md">
        <p className="eyebrow mb-4">
          <Link href="/giris" className="hover:text-ink transition-colors">← Giriş</Link>
        </p>
        <h1 className="display-text text-4xl sm:text-5xl text-ink mb-4">
          Şifreni unuttun mu?
        </h1>
        <p className="text-muted mb-10">
          E-posta adresini gir, sıfırlama bağlantısı gönderelim.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-ink mb-2">E-posta</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@email.com"
                required
                className="w-full px-4 py-3 bg-surface border border-line rounded-xl text-ink focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Sıfırlama bağlantısı gönder
            </button>
          </form>
        ) : (
          <div className="bg-surface border border-line p-8 rounded-2xl text-center">
            <p className="text-3xl mb-3">✓</p>
            <h2 className="font-medium text-ink mb-2">E-posta gönderildi</h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              <span className="text-ink">{email}</span> adresine sıfırlama bağlantısı gönderdik.
            </p>
            <Link href="/giris" className="inline-flex items-center gap-2 text-sm text-accent">
              Giriş sayfasına dön →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
