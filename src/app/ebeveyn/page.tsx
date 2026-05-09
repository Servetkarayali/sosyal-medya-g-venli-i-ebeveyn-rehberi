import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ebeveyn Rehberi",
  description: "Ebeveynler için sade ve net dijital güvenlik rehberi.",
};

const modules = [
  {
    num: "01",
    title: "Gizlilik Ayarları",
    subtitle: "Profiller ve paylaşım izinleri",
    tips: [
      "Hesabı 'Gizli' moda al",
      "Konum paylaşımını kapat",
      "Bilinmeyenlerden mesaj filtrele",
      "İki faktörlü doğrulamayı açık tut",
    ],
  },
  {
    num: "02",
    title: "Siber Zorbalık",
    subtitle: "Belirtiler ve müdahale",
    tips: [
      "Ani davranış değişiklerini izle",
      "Cihaz başında huzursuzluğu gözle",
      "Okul performansındaki düşüşleri takip et",
      "Yargılamadan güven ortamı kur",
    ],
  },
  {
    num: "03",
    title: "Ekran Süresi Yönetimi",
    subtitle: "Sağlıklı dijital alışkanlıklar",
    tips: [
      "Yaşa uygun günlük limit belirle",
      "Yemek ve uyku saatlerinde cihazsız",
      "Ekransız aile aktiviteleri planla",
      "Yerleşik kontrol araçlarını kullan",
    ],
  },
  {
    num: "04",
    title: "Çocukla İletişim",
    subtitle: "Zor konuları konuşmak",
    tips: [
      "Yargılamadan dinle",
      "Kendi deneyimini paylaş",
      "Düzenli 'dijital sohbet' saati",
      "Sorun anında güvenli liman ol",
    ],
  },
  {
    num: "05",
    title: "Platform Rehberleri",
    subtitle: "IG, TikTok, YouTube, Snap için özel",
    tips: [
      "Her platformun yaş sınırını bil",
      "Gizlilik ayarlarını tek tek yap",
      "Bildirim yönetimi şart",
      "Engelleme/raporlama öğret",
    ],
    link: "/platformlar",
  },
  {
    num: "06",
    title: "Güvenlik Kontrol Listesi",
    subtitle: "Aylık denetim protokolü",
    tips: [
      "Güçlü ve benzersiz şifreler",
      "Ebeveyn kontrol yazılımı kur",
      "Haftalık hesap kontrolü",
      "Aile medya sözleşmesi hazırla",
    ],
    link: "/sozlesme",
  },
];

export default function EbeveynPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="wrap pt-16 pb-16 sm:pt-20 sm:pb-20">
          <p className="eyebrow mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Ana sayfa</Link> / Ebeveyn rehberi
          </p>
          <h1 className="display-text text-5xl sm:text-7xl text-ink max-w-3xl">
            Ebeveynler için sade rehber.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            6 modül, yaklaşık 70 dakikalık okuma. İstediğiniz modülden başlayabilirsiniz.
          </p>
        </div>
      </section>

      {/* Modüller */}
      <section className="py-16">
        <div className="wrap">
          <ul className="divide-y divide-line border-y border-line">
            {modules.map((m) => {
              const body = (
                <div className="grid grid-cols-12 gap-6 py-8 sm:py-10 items-start">
                  <div className="col-span-2 sm:col-span-1">
                    <span className="display-text text-4xl text-muted">{m.num}</span>
                  </div>
                  <div className="col-span-10 sm:col-span-8">
                    <h3 className="display-text text-2xl sm:text-3xl text-ink mb-1">{m.title}</h3>
                    <p className="text-sm text-muted mb-5">{m.subtitle}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {m.tips.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                          <span className="text-accent shrink-0 mt-0.5">·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-12 sm:col-span-3 flex sm:justify-end">
                    {m.link ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-accent">
                        Aç <span>→</span>
                      </span>
                    ) : (
                      <span className="text-xs text-muted">Devam...</span>
                    )}
                  </div>
                </div>
              );
              return (
                <li key={m.num} className="group hover:bg-sand/30 transition-colors -mx-6 px-6">
                  {m.link ? <Link href={m.link} className="block">{body}</Link> : body}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Ek araçlar */}
      <section className="border-t border-line py-20 bg-sand/40">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">— Yanında getir</p>
            <h2 className="display-text text-3xl sm:text-4xl text-ink">
              Ek araçlar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/risk-hesapla" className="group bg-surface border border-line p-6 rounded-2xl hover:border-ink transition-colors">
              <p className="eyebrow mb-3">Analiz</p>
              <h3 className="font-medium text-ink mb-1">Risk Hesaplayıcı</h3>
              <p className="text-sm text-muted">10 soruda skor</p>
            </Link>
            <Link href="/sozlesme" className="group bg-surface border border-line p-6 rounded-2xl hover:border-ink transition-colors">
              <p className="eyebrow mb-3">Uygulama</p>
              <h3 className="font-medium text-ink mb-1">Aile Sözleşmesi</h3>
              <p className="text-sm text-muted">22 kuralla yazdır</p>
            </Link>
            <Link href="/quiz" className="group bg-surface border border-line p-6 rounded-2xl hover:border-ink transition-colors">
              <p className="eyebrow mb-3">Test</p>
              <h3 className="font-medium text-ink mb-1">Bilgi Quizi</h3>
              <p className="text-sm text-muted">16 soru</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
