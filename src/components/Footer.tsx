import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Dijital Güvenlik</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bu platform, ebeveynler ve çocuklar için sosyal medya güvenliği konusunda farkındalık yaratmak amacıyla hazırlanmıştır.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link href="/ebeveyn" className="text-gray-400 hover:text-white text-sm transition-colors">Ebeveyn Rehberi</Link></li>
              <li><Link href="/cocuk" className="text-gray-400 hover:text-white text-sm transition-colors">Çocuk Bölümü</Link></li>
              <li><Link href="/quiz" className="text-gray-400 hover:text-white text-sm transition-colors">Quiz & Testler</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Yardım Hatları</h3>
            <ul className="space-y-2">
              <li><a href="tel:182" className="text-gray-400 hover:text-white text-sm transition-colors">ALO 182 - Sosyal Destek</a></li>
              <li><a href="tel:155" className="text-gray-400 hover:text-white text-sm transition-colors">ALO 155 - Polis İmdat</a></li>
              <li><a href="https://www.ihbarweb.org.tr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Siber Suç İhbar</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Sosyal Medya Güvenlik Rehberi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
