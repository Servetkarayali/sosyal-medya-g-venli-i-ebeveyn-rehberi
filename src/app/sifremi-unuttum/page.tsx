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
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="orb w-[500px] h-[500px] bg-neon-cyan top-0 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-neon-pink bottom-0 -right-20" />

      <div className="wrap relative">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-paper/40 mb-8">
            <Link href="/giris" className="hover:text-paper transition-colors">← Giriş</Link>
          </div>

          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
            / ŞİFRE SIFIRLAMA
          </p>
          <h1 className="display-text text-5xl sm:text-6xl text-paper leading-none mb-6">
            Hatırla,<br /><span className="text-gradient">sıfırla.</span>
          </h1>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-paper/60 text-sm leading-relaxed mb-6">
                E-posta adresini gir, şifre sıfırlama bağlantısı gönderelim.
              </p>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-paper/50 mb-2">E-POSTA</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@email.com"
                  required
                  className="w-full px-4 py-3 bg-carbon border border-steel text-paper font-mono focus:border-neon-cyan focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden"
              >
                <span className="relative z-10 block px-6 py-4 bg-neon-cyan text-void font-bold text-sm uppercase tracking-widest">
                  Sıfırlama Bağlantısı Gönder
                </span>
                <span className="absolute inset-0 bg-neon-pink translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="p-8 border border-neon-lime bg-neon-lime/5 text-center">
                <p className="text-5xl mb-4">✓</p>
                <h2 className="font-bold text-xl text-paper mb-2">E-posta gönderildi</h2>
                <p className="text-sm text-paper/60 leading-relaxed">
                  <span className="font-mono text-neon-cyan">{email}</span> adresine sıfırlama bağlantısı gönderdik. 5 dakika içinde gelmezse spam klasörünü kontrol et.
                </p>
              </div>
              <Link
                href="/giris"
                className="block text-center px-6 py-3 border border-steel text-paper text-xs font-mono uppercase tracking-widest hover:border-neon-cyan transition-colors"
              >
                Giriş sayfasına dön
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
