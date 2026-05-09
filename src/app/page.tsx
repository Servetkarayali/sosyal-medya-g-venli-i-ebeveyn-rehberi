import Link from "next/link";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import ParentIllustration from "@/components/illustrations/ParentIllustration";
import ChildIllustration from "@/components/illustrations/ChildIllustration";
import StatCard from "@/components/StatCard";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Sıcak, aile dostu */}
      <section className="relative section-padding bg-gradient-to-b from-sky-50 via-blue-50/30 to-white">
        {/* Dekoratif arka plan öğeleri */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-family-sun/20 rounded-full blur-2xl" />
        <div className="absolute top-32 right-20 w-32 h-32 bg-family-lavender/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-family-mint/20 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6">
                <span className="text-lg">🛡️</span>
                Aile Dijital Güvenlik Rehberi
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Ailenizi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
                  Dijital Dünyada
                </span>{" "}
                <span className="relative inline-block">
                  Koruyun
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c40-6 80-6 120-2s60 4 76 2" stroke="#fde047" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Çocuklarınızla birlikte sosyal medyayı güvenle keşfedin. 
                Eğlenceli quizler, interaktif rehberler ve pratik ipuçlarıyla 
                dijital dünyada güvende kalın. 👨‍👩‍👧‍👦
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/ebeveyn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl gradient-primary text-white font-bold shadow-glow-blue hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span className="text-lg">👨‍👩‍👧</span>
                  Rehberi Keşfet
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white border-2 border-sky-200 text-sky-700 font-bold hover:border-sky-400 hover:bg-sky-50 transition-all hover:-translate-y-1"
                >
                  <span className="text-lg">🎮</span>
                  Quiz Çöz
                </Link>
              </div>

              {/* Güven rozetleri */}
              <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start text-xs text-gray-500">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                  ✅ Ücretsiz Başla
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                  🎓 Uzman Onaylı
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                  🇹🇷 Türkçe İçerik
                </span>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="hidden lg:block">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Rol Seçimi - Daha oyunsu ve sıcak */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="text-4xl mb-3 block">🌈</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Kim İçin Arıyorsunuz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her bölüm yaş grubuna uygun, eğlenceli ve öğretici içerikler sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ebeveyn Kartı */}
            <Link href="/ebeveyn" className="group">
              <div className="relative bg-white rounded-4xl border-2 border-sky-100 p-8 shadow-soft card-hover group-hover:border-sky-300 group-hover:shadow-glow-blue overflow-hidden">
                {/* Dekoratif köşe */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="w-36 h-36 mx-auto mb-6 relative">
                  <ParentIllustration />
                </div>
                <div className="text-center relative">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                    👨‍👩‍👧 Ben Ebeveyn&apos;im
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Çocuğunuzun dijital güvenliği için rehberler, platform ayarları ve iletişim ipuçları.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl gradient-primary text-white font-bold shadow-md">
                    Ebeveyn Rehberine Git
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Çocuk Kartı */}
            <Link href="/cocuk" className="group">
              <div className="relative bg-white rounded-4xl border-2 border-emerald-100 p-8 shadow-soft card-hover group-hover:border-emerald-300 group-hover:shadow-glow-green overflow-hidden">
                {/* Dekoratif köşe */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="w-36 h-36 mx-auto mb-6 relative">
                  <ChildIllustration />
                </div>
                <div className="text-center relative">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    🧒 Ben Çocuğum / Gencim
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Sosyal medyada güvende kal! Eğlenceli quizler, senaryolar ve altın kurallar seni bekliyor.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl gradient-safety text-white font-bold shadow-md">
                    Çocuk Bölümüne Git
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* İstatistikler - Daha yumuşak renkler */}
      <section className="section-padding bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-3xl mb-2 block">📊</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Türkiye&apos;de Dijital Güvenlik
            </h2>
            <p className="text-lg text-gray-600">
              Çocuklarımızın internet kullanım istatistikleri
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
              value="%78"
              label="Çocuklar sosyal medya kullanıyor"
              color="blue"
            />
            <StatCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>}
              value="1/3"
              label="Her 3 çocuktan 1'i siber zorbalığa maruz"
              color="red"
            />
            <StatCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>}
              value="%65"
              label="Gençler gizlilik ayarlarını bilmiyor"
              color="yellow"
            />
            <StatCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              value="4.5 saat"
              label="Günlük ortalama ekran süresi"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Özellikler - Daha oyunsu ve renkli */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-3xl mb-2 block">✨</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Neler Bulacaksınız?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Platform Rehberleri */}
            <div className="text-center p-8 rounded-4xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 hover:shadow-glow-blue transition-all hover:-translate-y-1">
              <div className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-glow-blue">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Platform Rehberleri</h3>
              <p className="text-gray-600 leading-relaxed">
                Instagram, TikTok, YouTube ve Snapchat için adım adım güvenlik ayarları.
              </p>
            </div>

            {/* Etkileşimli Quizler */}
            <div className="text-center p-8 rounded-4xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-100 hover:shadow-glow-green transition-all hover:-translate-y-1">
              <div className="w-20 h-20 rounded-3xl gradient-safety flex items-center justify-center mx-auto mb-5 shadow-glow-green">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Etkileşimli Quizler</h3>
              <p className="text-gray-600 leading-relaxed">
                Eğlenceli sorularla bilginizi test edin, puanınızı yükseltin!
              </p>
            </div>

            {/* Acil Durum */}
            <div className="text-center p-8 rounded-4xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 hover:shadow-soft transition-all hover:-translate-y-1">
              <div className="w-20 h-20 rounded-3xl gradient-warning flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🆘</span>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Acil Durum Rehberi</h3>
              <p className="text-gray-600 leading-relaxed">
                Siber zorbalık veya tehdit durumunda ne yapacağınızı anında öğrenin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Aile birlikteliği */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-4xl p-10 sm:p-14 text-white overflow-hidden">
            {/* Dekoratif */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative text-center">
              <span className="text-5xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Ailece Dijital Güvenliğe Başlayın
              </h2>
              <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-8">
                Ücretsiz kaydolun, çocuğunuzla birlikte quizler çözün ve güvenli internet alışkanlıkları edinin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kayit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  🚀 Ücretsiz Başla
                </Link>
                <Link
                  href="/fiyatlandirma"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/30 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  💎 Planları İncele
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
