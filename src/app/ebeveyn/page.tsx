import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ebeveyn Rehberi",
  description: "Çocuğunuzun dijital güvenliği için kapsamlı ebeveyn rehberi. Gizlilik ayarları, siber zorbalık, ekran süresi yönetimi ve iletişim ipuçları.",
  openGraph: {
    title: "Ebeveyn Rehberi | Dijital Güvenlik",
    description: "Çocuğunuzun dijital güvenliği için bilmeniz gereken her şey.",
  },
};

const sections = [
  { id: "privacy", title: "Gizlilik Ayarları", description: "Çocuğunuzun hesaplarındaki gizlilik ayarlarını adım adım nasıl yapılandıracağınızı öğrenin.", color: "blue", tips: ["Hesabı 'Gizli' moda alın", "Konum paylaşımını kapatın", "Bilinmeyen kişilerden gelen mesajları filtreleyin", "İki faktörlü doğrulamayı aktifleştirin"] },
  { id: "cyberbullying", title: "Siber Zorbalık", description: "Siber zorbalığın belirtilerini tanıyın ve çocuğunuzu korumak için gerekli adımları atın.", color: "red", tips: ["Ani davranış değişikliklerini gözlemleyin", "Cihazı kullanırken huzursuz olup olmadığına dikkat edin", "Okul performansındaki düşüşleri takip edin", "Açık iletişim kurarak güven ortamı yaratın"] },
  { id: "screen_time", title: "Ekran Süresi Yönetimi", description: "Sağlıklı dijital alışkanlıklar oluşturmak için ekran süresini nasıl yöneteceğinizi keşfedin.", color: "green", tips: ["Yaşa uygun günlük ekran süresi belirleyin", "Yemek ve uyku saatlerinde ekran kullanımını kısıtlayın", "Aile olarak ekransız aktiviteler planlayın", "Yerleşik ebeveyn kontrol araçlarını kullanın"] },
  { id: "communication", title: "Çocukla İletişim", description: "Dijital güvenlik konusunda çocuğunuzla etkili iletişim kurmanın yolları.", color: "purple", tips: ["Yargılamadan dinleyin", "Kendi deneyimlerinizi paylaşın", "Düzenli 'dijital sohbet' zamanları oluşturun", "Sorun yaşadığında size gelebileceğini hissettirin"] },
  { id: "platforms", title: "Platform Rehberleri", description: "Instagram, TikTok, YouTube, Snapchat ve daha fazlası için özel güvenlik rehberleri.", color: "indigo", tips: ["Her platformun yaş sınırını kontrol edin", "Platform bazlı gizlilik ayarlarını yapılandırın", "Bildirim ayarlarını optimize edin", "Raporlama ve engelleme özelliklerini öğretin"] },
  { id: "checklist", title: "Güvenlik Kontrol Listesi", description: "Çocuğunuzun dijital güvenliğini sağlamak için eksiksiz bir kontrol listesi.", color: "emerald", tips: ["Güçlü ve benzersiz şifreler oluşturun", "Ebeveyn kontrol yazılımı kurun", "Haftalık hesap kontrolü yapın", "Aile medya kullanım sözleşmesi hazırlayın"] },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  blue: { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", border: "border-blue-100", badge: "bg-blue-100 text-blue-700" },
  red: { bg: "bg-red-50", icon: "bg-red-100 text-red-600", border: "border-red-100", badge: "bg-red-100 text-red-700" },
  green: { bg: "bg-emerald-50", icon: "bg-emerald-100 text-emerald-600", border: "border-emerald-100", badge: "bg-emerald-100 text-emerald-700" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", border: "border-purple-100", badge: "bg-purple-100 text-purple-700" },
  indigo: { bg: "bg-indigo-50", icon: "bg-indigo-100 text-indigo-600", border: "border-indigo-100", badge: "bg-indigo-100 text-indigo-700" },
  emerald: { bg: "bg-emerald-50", icon: "bg-emerald-100 text-emerald-600", border: "border-emerald-100", badge: "bg-emerald-100 text-emerald-700" },
};

export default function EbeveynPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Ebeveynler İçin
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Ebeveyn Rehberi</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Çocuğunuzun dijital güvenliği için bilmeniz gereken her şey. Platform ayarlarından iletişim stratejilerine, ekran süresinden siber zorbalığa kadar kapsamlı bir rehber.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => {
              const colors = colorClasses[section.color];
              return (
                <div key={section.id} className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 hover:shadow-lg transition-all hover:-translate-y-1`}>
                  <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{section.description}</p>
                  <div className="space-y-2 mb-5">
                    {section.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg ${colors.badge} text-sm font-medium hover:opacity-80 transition-opacity`}>
                    Daha Fazla Bilgi
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bilginizi Test Edin</h2>
          <p className="text-lg text-gray-600 mb-8">Dijital güvenlik konusundaki bilginizi ölçmek ve yeni şeyler öğrenmek için quizlerimizi çözün.</p>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all hover:-translate-y-0.5">
            Quiz&apos;e Başla
          </Link>
        </div>
      </section>
    </div>
  );
}
