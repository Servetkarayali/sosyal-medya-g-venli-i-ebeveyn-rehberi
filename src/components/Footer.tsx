import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap py-16">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">— Başlamak için</p>
          <h3 className="display-text text-4xl sm:text-5xl text-ink mb-6">
            Çocuğunuzun dijital yolculuğu için<br />
            basit bir başlangıç.
          </h3>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/kayit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Ücretsiz başla <span className="opacity-70">→</span>
            </Link>
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line text-ink text-sm rounded-full hover:bg-sand transition-colors"
            >
              Planlar
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-line">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-ink flex items-center justify-center">
                <div className="w-1 h-1 bg-paper" />
              </div>
              <span className="text-sm font-medium text-ink">Güvenli Medya</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Aileler için sade bir dijital güvenlik rehberi.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Rehber</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/ebeveyn" className="text-muted hover:text-ink transition-colors">Ebeveyn</Link></li>
              <li><Link href="/cocuk" className="text-muted hover:text-ink transition-colors">Çocuklar</Link></li>
              <li><Link href="/platformlar" className="text-muted hover:text-ink transition-colors">Platformlar</Link></li>
              <li><Link href="/quiz" className="text-muted hover:text-ink transition-colors">Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Araçlar</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/risk-hesapla" className="text-muted hover:text-ink transition-colors">Risk Skoru</Link></li>
              <li><Link href="/sozlesme" className="text-muted hover:text-ink transition-colors">Sözleşme</Link></li>
              <li><Link href="/acil-durum" className="text-muted hover:text-ink transition-colors">Acil Durum</Link></li>
              <li><Link href="/fiyatlandirma" className="text-muted hover:text-ink transition-colors">Planlar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Yardım</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="tel:182" className="text-muted hover:text-ink transition-colors">ALO 182</a></li>
              <li><a href="tel:155" className="text-muted hover:text-ink transition-colors">ALO 155</a></li>
              <li><Link href="/kvkk" className="text-muted hover:text-ink transition-colors">KVKK</Link></li>
              <li><Link href="/kullanim-kosullari" className="text-muted hover:text-ink transition-colors">Koşullar</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© 2025 Güvenli Medya</p>
          <p>Türkiye&apos;de sevgiyle yapıldı</p>
        </div>
      </div>
    </footer>
  );
}
