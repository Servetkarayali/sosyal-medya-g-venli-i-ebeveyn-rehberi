import Link from "next/link";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import ParentIllustration from "@/components/illustrations/ParentIllustration";
import ChildIllustration from "@/components/illustrations/ChildIllustration";
import StatCard from "@/components/StatCard";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Dijital Güvenlik Rehberi
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Sosyal Medya{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Güvenliği</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Dijital dünyada güvende kalmak için rehberiniz. Ebeveynler ve çocuklar için ayrı bölümler, etkileşimli testler ve pratik ipuçları.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/ebeveyn" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5">
                  Rehberi Keşfet
                </Link>
                <Link href="/quiz" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-300 hover:text-blue-600 transition-all hover:-translate-y-0.5">
                  Quiz Çöz
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sizi en iyi tanımlayan seçeneği belirleyin</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Her iki bölüm de interaktif içerikler ve pratik bilgiler sunmaktadır.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/ebeveyn" className="group">
              <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-8 card-hover group-hover:border-blue-200">
                <div className="w-32 h-32 mx-auto mb-6"><ParentIllustration /></div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Ben Ebeveyn&apos;im</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Çocuğunuzun dijital güvenliğini sağlamak için rehberler, ayar kontrol listeleri ve iletişim ipuçları.</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white font-medium text-sm shadow-md">
                    Ebeveyn Rehberine Git
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/cocuk" className="group">
              <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-8 card-hover group-hover:border-emerald-200">
                <div className="w-32 h-32 mx-auto mb-6"><ChildIllustration /></div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Ben Çocuğum / Gencim</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Sosyal medyada güvende kalmayı öğren! Eğlenceli quizler, ipuçları ve senaryolarla pratik yap.</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-safety text-white font-medium text-sm shadow-md">
                    Çocuk Bölümüne Git
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Türkiye&apos;de Dijital Güvenlik</h2>
            <p className="text-lg text-gray-600">Rakamlarla sosyal medya ve çocuk güvenliği</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} value="%78" label="Çocukların sosyal medya kullanıyor" color="blue" />
            <StatCard icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>} value="1/3" label="Her 3 çocuktan 1'i siber zorbalığa maruz kalıyor" color="red" />
            <StatCard icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>} value="%65" label="Gençlerin gizlilik ayarlarını bilmiyor" color="yellow" />
            <StatCard icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} value="4.5 saat" label="Ortalama günlük ekran süresi" color="green" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Bu Rehberde Neler Bulacaksınız?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Rehberleri</h3>
              <p className="text-gray-600">Instagram, TikTok, YouTube ve Snapchat için adım adım gizlilik ayarı rehberleri.</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 rounded-2xl gradient-safety flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Etkileşimli Quizler</h3>
              <p className="text-gray-600">Senaryolarla pratik yap, bilgini test et ve güvenlik puanını öğren.</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors">
              <div className="w-16 h-16 rounded-2xl gradient-warning flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acil Durum Rehberi</h3>
              <p className="text-gray-600">Siber zorbalık, dolandırıcılık veya tehdit durumunda ne yapacağını öğren.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
