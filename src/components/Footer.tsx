import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Dekoratif üst dalga */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Hakkında */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center">
                <span className="text-lg">🛡️</span>
              </div>
              <div>
                <span className="text-base font-extrabold block leading-tight">Dijital Güvenlik</span>
                <span className="text-[10px] text-sky-300 font-medium">Aile Rehberi</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Aileler ve çocuklar için hazırlanmış, etkileşimli sosyal medya güvenlik platformu. 
              Birlikte öğrenin, birlikte güvende kalın. 👨‍👩‍👧‍👦
            </p>
          </div>

          {/* Rehberler */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-300 mb-4">
              📚 Rehberler
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/ebeveyn" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Ebeveyn Rehberi</Link></li>
              <li><Link href="/cocuk" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Çocuk Bölümü</Link></li>
              <li><Link href="/platformlar" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Platform Rehberleri</Link></li>
              <li><Link href="/quiz" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Quiz & Testler</Link></li>
              <li><Link href="/risk-hesapla" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Risk Hesaplayıcı</Link></li>
              <li><Link href="/sozlesme" className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Aile Sözleşmesi</Link></li>
            </ul>
          </div>

          {/* Yardım Hatları */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-300 mb-4">
              🆘 Yardım Hatları
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:182" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-xs">📞</span>
                  ALO 182 - Sosyal Destek
                </a>
              </li>
              <li>
                <a href="tel:155" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center text-xs">🚨</span>
                  ALO 155 - Polis İmdat
                </a>
              </li>
              <li>
                <a href="https://www.ihbarweb.org.tr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-xs">🌐</span>
                  Siber Suç İhbar
                </a>
              </li>
              <li>
                <Link href="/acil-durum" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center text-xs">⚡</span>
                  Acil Durum Rehberi
                </Link>
              </li>
            </ul>
          </div>

          {/* Hesap */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 mb-4">
              👤 Hesap
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/giris" className="text-gray-400 hover:text-white text-sm transition-colors">Giriş Yap</Link></li>
              <li><Link href="/kayit" className="text-gray-400 hover:text-white text-sm transition-colors">Ücretsiz Kayıt</Link></li>
              <li><Link href="/fiyatlandirma" className="text-gray-400 hover:text-white text-sm transition-colors">Planlar & Fiyatlar</Link></li>
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/kayit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-bold shadow-glow-blue hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                🚀 Ücretsiz Başla
              </Link>
            </div>
          </div>
        </div>

        {/* Alt bölüm */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Dijital Güvenlik Aile Rehberi. Tüm hakları saklıdır. ❤️
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700">🔒 KVKK Uyumlu</span>
            <span className="px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700">🛡️ Güvenli</span>
            <span className="px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700">🇹🇷 Türkçe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
