import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="section-wrapper py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-sm">Güvenli Medya</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Aileler için sosyal medya güvenlik rehberi.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Rehber</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/ebeveyn" className="hover:text-brand-600 transition-colors">Ebeveyn</Link></li>
              <li><Link href="/cocuk" className="hover:text-brand-600 transition-colors">Çocuklar</Link></li>
              <li><Link href="/platformlar" className="hover:text-brand-600 transition-colors">Platformlar</Link></li>
              <li><Link href="/quiz" className="hover:text-brand-600 transition-colors">Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Araçlar</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/risk-hesapla" className="hover:text-brand-600 transition-colors">Risk Skoru</Link></li>
              <li><Link href="/sozlesme" className="hover:text-brand-600 transition-colors">Aile Sözleşmesi</Link></li>
              <li><Link href="/acil-durum" className="hover:text-brand-600 transition-colors">Acil Durum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Yardım</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="tel:182" className="hover:text-brand-600 transition-colors">ALO 182</a></li>
              <li><a href="tel:155" className="hover:text-brand-600 transition-colors">ALO 155</a></li>
              <li><a href="https://www.ihbarweb.org.tr" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">ihbarweb.org.tr</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© 2025 Güvenli Medya. Tüm hakları saklıdır.</p>
          <div className="flex gap-3 text-xs text-gray-400">
            <span>Gizlilik</span>
            <span>Kullanım Koşulları</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
