import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-steel overflow-hidden">
      {/* Background giant text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="display-text text-[18vw] text-paper/[0.025] whitespace-nowrap">
          GÜVENLİ MEDYA
        </span>
      </div>

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-neon-cyan -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-neon-pink bottom-0 right-0" />

      <div className="wrap py-20 relative">
        {/* Top mega CTA */}
        <div className="mb-20 pb-12 border-b border-steel">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-neon-pink mb-4">
                / son çağrı
              </p>
              <h3 className="display-text text-5xl sm:text-7xl leading-none text-paper">
                Çocuğunuzun<br />
                <span className="text-gradient">dijital geleceği</span><br />
                buradan başlar.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
              <Link
                href="/kayit"
                className="group relative overflow-hidden border border-neon-lime"
              >
                <span className="relative z-10 flex items-center justify-between px-6 py-4 text-neon-lime font-mono text-sm uppercase tracking-widest transition-colors group-hover:text-void">
                  Ücretsiz Başla <span>→</span>
                </span>
                <span className="absolute inset-0 bg-neon-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/fiyatlandirma"
                className="group flex items-center justify-between px-6 py-4 border border-steel text-paper/70 font-mono text-sm uppercase tracking-widest hover:border-paper hover:text-paper transition-colors"
              >
                Planları Gör <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-neon-cyan/60 flex items-center justify-center">
                <div className="w-2 h-2 bg-neon-cyan" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                GÜVENLİ<span className="text-neon-cyan">.</span>MEDYA
              </span>
            </div>
            <p className="text-sm text-paper/50 leading-relaxed max-w-xs">
              Aileler için kurgulanmış, sosyal medya güvenliği üzerine interaktif bir evren.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-paper/30">
              <span className="inline-block w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
              <span>CANLI — v3.0</span>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-4">Rehber</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ebeveyn" className="text-paper/70 hover:text-neon-cyan transition-colors">Ebeveyn</Link></li>
              <li><Link href="/cocuk" className="text-paper/70 hover:text-neon-cyan transition-colors">Çocuklar</Link></li>
              <li><Link href="/platformlar" className="text-paper/70 hover:text-neon-cyan transition-colors">Platformlar</Link></li>
              <li><Link href="/quiz" className="text-paper/70 hover:text-neon-cyan transition-colors">Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-4">Araçlar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/risk-hesapla" className="text-paper/70 hover:text-neon-cyan transition-colors">Risk Skoru</Link></li>
              <li><Link href="/sozlesme" className="text-paper/70 hover:text-neon-cyan transition-colors">Sözleşme</Link></li>
              <li><Link href="/acil-durum" className="text-paper/70 hover:text-neon-cyan transition-colors">Acil Durum</Link></li>
              <li><Link href="/fiyatlandirma" className="text-paper/70 hover:text-neon-cyan transition-colors">Fiyat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-4">Yardım</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:182" className="text-paper/70 hover:text-neon-cyan transition-colors">ALO 182</a></li>
              <li><a href="tel:155" className="text-paper/70 hover:text-neon-cyan transition-colors">ALO 155</a></li>
              <li><a href="https://www.ihbarweb.org.tr" target="_blank" rel="noopener noreferrer" className="text-paper/70 hover:text-neon-cyan transition-colors">ihbarweb.org.tr</a></li>
              <li><Link href="/kvkk" className="text-paper/70 hover:text-neon-cyan transition-colors">KVKK</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-steel pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-paper/30 uppercase tracking-[0.3em]">
            © 2025 / GÜVENLİ MEDYA / ALL SYSTEMS OPERATIONAL
          </p>
          <div className="flex gap-4 text-[10px] font-mono text-paper/30 uppercase tracking-widest">
            <Link href="/kvkk" className="hover:text-paper transition-colors">KVKK</Link>
            <Link href="/kullanim-kosullari" className="hover:text-paper transition-colors">Koşullar</Link>
            <span>Made in TR 🇹🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
