import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brand-600 font-semibold text-sm mb-4">Aileler için dijital güvenlik rehberi</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Çocuğunuz internette güvende mi?
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Sosyal medya platformlarındaki riskleri anlayın, pratik adımlar atın. Ebeveynler ve çocuklar için ayrı bölümler, interaktif testler.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/ebeveyn" className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors text-center">
                Rehberi İncele
              </Link>
              <Link href="/quiz" className="w-full sm:w-auto px-8 py-4 border border-gray-200 hover:border-brand-300 text-gray-700 hover:text-brand-600 font-semibold rounded-xl transition-colors text-center">
                Bilgini Test Et
              </Link>
            </div>
          </div>

          {/* Görsel alan */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-brand-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">%78</p>
                  <p className="text-sm text-gray-500 mt-1">Çocuklar sosyal medyada</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">1/3</p>
                  <p className="text-sm text-gray-500 mt-1">Siber zorbalığa maruz</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.5 saat</p>
                  <p className="text-sm text-gray-500 mt-1">Günlük ekran süresi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İki Yol */}
      <section className="section-spacing bg-gray-50">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Kime yardımcı olalım?</h2>
            <p className="text-gray-500 text-lg">İhtiyacınıza uygun bölümü seçin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/ebeveyn" className="group">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-200 transition-colors">
                  <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ebeveynler İçin</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Gizlilik ayarları, siber zorbalık belirtileri, ekran süresi yönetimi ve çocukla iletişim rehberi.</p>
                <span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Rehbere git <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            <Link href="/cocuk" className="group">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors">
                  <svg className="w-7 h-7 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Çocuklar ve Gençler</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Güvenlik kuralları, eğlenceli senaryolar ve kısa bilgi testleri ile öğren.</p>
                <span className="text-accent-green text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Bölüme git <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Neler Var */}
      <section className="section-spacing">
        <div className="section-wrapper">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Neler bulacaksınız?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Her şey tek bir yerde, adım adım anlatılıyor.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Platform Rehberleri", desc: "Instagram, TikTok, YouTube, Snapchat ayarları", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "brand" },
              { title: "İnteraktif Quiz", desc: "16 soru ile bilginizi test edin", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "purple" },
              { title: "Risk Hesaplayıcı", desc: "10 soruda güvenlik puanınızı öğrenin", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "orange" },
              { title: "Acil Durum", desc: "Tehlike anında ne yapacağınız", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", color: "red" },
            ].map((item, i) => {
              const bgMap: Record<string, string> = { brand: "bg-brand-100 text-brand-600", purple: "bg-purple-100 text-accent-purple", orange: "bg-orange-100 text-accent-orange", red: "bg-red-100 text-red-500" };
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${bgMap[item.color]}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-brand-500">
        <div className="section-wrapper text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hemen başlayın</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">Ücretsiz kaydolun, çocuğunuzla birlikte güvenli internet kullanımını keşfedin.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kayit" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors text-center">
              Ücretsiz Kayıt Ol
            </Link>
            <Link href="/fiyatlandirma" className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-center">
              Planları İncele
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
