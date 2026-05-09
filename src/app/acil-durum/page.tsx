"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

const helplines = [
  {
    name: "ALO 182",
    subtitle: "Sosyal Destek Hattı",
    description: "Çocuk istismarı, ihmal, aile içi şiddet ve sosyal destek konularında 7/24 hizmet verir.",
    phone: "182",
    color: "bg-blue-500",
    icon: "📞",
  },
  {
    name: "ALO 155",
    subtitle: "Polis İmdat",
    description: "Acil güvenlik durumlarında, tehdit veya takip altında olduğunuzda arayın.",
    phone: "155",
    color: "bg-red-500",
    icon: "🚨",
  },
  {
    name: "ALO 183",
    subtitle: "Sosyal Destek Hattı (Engelli)",
    description: "Engelli bireylere yönelik destek ve danışmanlık hattı.",
    phone: "183",
    color: "bg-purple-500",
    icon: "♿",
  },
  {
    name: "BTK İhbar",
    subtitle: "Bilgi Teknolojileri Kurumu",
    description: "İnternet üzerindeki zararlı içerikleri, yasadışı siteleri ve siber suçları bildirin.",
    phone: "112",
    color: "bg-orange-500",
    icon: "🛡️",
  },
  {
    name: "ihbarweb.org.tr",
    subtitle: "Siber Suç İhbar Merkezi",
    description: "Online olarak siber suçları, dolandırıcılığı ve zararlı içerikleri rapor edin.",
    phone: null,
    url: "https://www.ihbarweb.org.tr",
    color: "bg-emerald-500",
    icon: "🌐",
  },
  {
    name: "CSIRT",
    subtitle: "Siber Olaylara Müdahale",
    description: "Ulusal siber güvenlik olayları için müdahale ekibi.",
    phone: null,
    url: "https://www.usom.gov.tr",
    color: "bg-indigo-500",
    icon: "🔐",
  },
];

const emergencySteps = [
  {
    step: 1,
    title: "Sakin Ol",
    description: "Panik yapmayın. Durumu değerlendirin ve çocuğunuzla sakin bir şekilde konuşun.",
    icon: "🧘",
  },
  {
    step: 2,
    title: "Kanıt Topla",
    description: "Ekran görüntüsü alın. Mesajları, profilleri ve tarihleri kaydedin. Silmeyin!",
    icon: "📸",
  },
  {
    step: 3,
    title: "Engelle ve Bildir",
    description: "Kişiyi platformda engelleyin ve platform içi raporlama özelliğini kullanın.",
    icon: "🚫",
  },
  {
    step: 4,
    title: "Yardım İste",
    description: "Durumun ciddiyetine göre ilgili yardım hattını arayın veya karakola gidin.",
    icon: "📱",
  },
  {
    step: 5,
    title: "Destek Sağla",
    description: "Çocuğunuza suçlu olmadığını söyleyin. Gerekirse profesyonel psikolojik destek alın.",
    icon: "💚",
  },
];

const dangerSigns = [
  { sign: "Telefonunu sürekli gizliyor", severity: "medium" },
  { sign: "Ani duygu durum değişimleri yaşıyor", severity: "medium" },
  { sign: "Yeni ve bilinmeyen 'arkadaşlardan' bahsediyor", severity: "high" },
  { sign: "Gece geç saatlerde telefon kullanıyor", severity: "medium" },
  { sign: "Sosyal ortamlardan çekiliyor", severity: "high" },
  { sign: "Hediye veya para alıyor (kaynağı bilinmeyen)", severity: "critical" },
  { sign: "Bazı uygulamaları silerken yakalanıyor", severity: "medium" },
  { sign: "Kendine zarar verme belirtileri gösteriyor", severity: "critical" },
  { sign: "Okul performansı aniden düşüyor", severity: "medium" },
  { sign: "Cihazında bilmediğiniz uygulamalar var", severity: "high" },
];

const severityColors = {
  medium: "bg-amber-100 text-amber-800 border-amber-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  critical: "bg-red-100 text-red-800 border-red-200",
};

const severityLabels = {
  medium: "Orta",
  high: "Yüksek",
  critical: "Kritik",
};

export default function AcilDurumPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">🚨</span>
              Acil Durum Rehberi
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Yardıma mı{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                İhtiyacınız Var?
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Siber zorbalık, dolandırıcılık, taciz veya herhangi bir tehdit durumunda ne yapmanız gerektiğini adım adım öğrenin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              ⚡ Acil Durumda 5 Adım
            </h2>
          </AnimatedSection>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-300 via-orange-300 to-emerald-300 hidden md:block" />
            <div className="space-y-8">
              {emergencySteps.map((step, i) => (
                <AnimatedCard key={i} index={i} className="relative">
                  <div className="flex items-start gap-6 ml-0 md:ml-16">
                    {/* Step number bubble */}
                    <div className="hidden md:flex absolute left-4 w-9 h-9 rounded-full bg-white border-4 border-red-300 items-center justify-center text-sm font-bold text-red-600 z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                        <span className="md:hidden ml-auto text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                          Adım {step.step}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Helplines */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">📞 Yardım Hatları</h2>
              <p className="text-lg text-gray-600">7/24 ulaşabileceğiniz yardım hatları ve ihbar merkezleri</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helplines.map((line, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${line.color} flex items-center justify-center text-xl text-white`}>
                      {line.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{line.name}</h3>
                      <p className="text-xs text-gray-500">{line.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{line.description}</p>
                  {line.phone ? (
                    <a
                      href={`tel:${line.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {line.phone} Ara
                    </a>
                  ) : (
                    <a
                      href={line.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Siteyi Ziyaret Et
                    </a>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Danger Signs */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">⚠️ Tehlike İşaretleri</h2>
              <p className="text-lg text-gray-600">Çocuğunuzda bu belirtileri fark ederseniz dikkatli olun</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dangerSigns.map((item, i) => (
              <AnimatedCard key={i} index={i}>
                <div className={`flex items-center gap-3 p-4 rounded-xl border ${severityColors[item.severity as keyof typeof severityColors]}`}>
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm font-medium flex-1">{item.sign}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/50">
                    {severityLabels[item.severity as keyof typeof severityLabels]}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action CTA */}
      <section className="section-padding bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-red-100">
              <div className="text-5xl mb-6">🆘</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Hemen Yardım Alın
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Kendiniz veya çocuğunuz tehlike altındaysa, lütfen vakit kaybetmeden aşağıdaki numarayı arayın.
              </p>
              <a
                href="tel:182"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-red-600 text-white font-bold text-lg shadow-lg shadow-red-500/30 hover:bg-red-700 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ALO 182&apos;yi Ara
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
