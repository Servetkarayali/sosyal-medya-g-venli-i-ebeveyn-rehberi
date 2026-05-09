import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t-4 border-ink relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display italic text-[20vw] font-bold text-white/[0.03] whitespace-nowrap">GÜVENLİ MEDYA</span>
      </div>

      <div className="wrap py-16 relative">
        <div className="mb-16 pb-12 border-b border-white/10">
          <p className="text-xs font-mono uppercase tracking-widest text-hot mb-3">// Son adım</p>
          <h3 className="font-display text-4xl sm:text-6xl italic font-bold leading-none">
            Çocuğunuzu <br />
            <span className="text-lime underline decoration-wavy decoration-hot underline-offset-8">güvende</span>{" "}tutun.
          </h3>
          <Link href="/kayit" className="inline-flex items-center gap-3 mt-6 bg-lime text-ink px-6 py-3 font-bold border-2 border-lime hover:bg-transparent hover:text-lime transition-colors">
            Ücretsiz Kaydol <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-lime border-2 border-lime flex items-center justify-center">
                <svg className="w-4 h-4 text-ink" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-display italic text-xl font-bold">Güvenli Medya.</span>
            </div>
            <p className="text-xs text-cream/60 leading-relaxed font-mono">Aileler için hazırlanmış, sosyal medya güvenliği hakkında net ve anlaşılır bir rehber.</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-hot mb-4">Rehber</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ebeveyn" className="hover:text-lime transition-colors">Ebeveynler</Link></li>
              <li><Link href="/cocuk" className="hover:text-lime transition-colors">Çocuklar</Link></li>
              <li><Link href="/platformlar" className="hover:text-lime transition-colors">Platformlar</Link></li>
              <li><Link href="/quiz" className="hover:text-lime transition-colors">Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-hot mb-4">Araçlar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/risk-hesapla" className="hover:text-lime transition-colors">Risk Skoru</Link></li>
              <li><Link href="/sozlesme" className="hover:text-lime transition-colors">Aile Sözleşmesi</Link></li>
              <li><Link href="/acil-durum" className="hover:text-lime transition-colors">Acil Durum</Link></li>
              <li><Link href="/fiyatlandirma" className="hover:text-lime transition-colors">Fiyat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-hot mb-4">Yardım</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:182" className="hover:text-lime transition-colors">ALO 182</a></li>
              <li><a href="tel:155" className="hover:text-lime transition-colors">ALO 155</a></li>
              <li><a href="https://www.ihbarweb.org.tr" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">İhbar Web</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-mono text-cream/40 uppercase tracking-widest">© 2025 — Aile Dijital Güvenlik Rehberi</p>
          <p className="text-[10px] font-mono text-cream/40">Made with ☕ in Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
