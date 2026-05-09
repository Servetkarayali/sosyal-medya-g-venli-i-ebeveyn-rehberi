import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ebeveyn Rehberi — Arşiv",
  description: "Ebeveynler için sosyal medya güvenlik arşivi. Platform ayarları, siber zorbalık, ekran süresi, iletişim.",
};

const modules = [
  {
    id: "gizlilik",
    num: "01",
    title: "Gizlilik Ayarları",
    subtitle: "Profiller ve paylaşım izinleri",
    duration: "12 dk okuma",
    tags: ["Instagram", "TikTok", "YouTube", "Snapchat"],
    tips: [
      "Hesabı 'Gizli' moda al",
      "Konum paylaşımını kapat",
      "Bilinmeyenlerden mesaj filtrele",
      "İki faktörlü doğrulamayı açık tut",
    ],
    accent: "neon-cyan",
  },
  {
    id: "zorbalik",
    num: "02",
    title: "Siber Zorbalık",
    subtitle: "Belirtiler ve müdahale yöntemleri",
    duration: "15 dk okuma",
    tags: ["Psikoloji", "İletişim", "Acil"],
    tips: [
      "Ani davranış değişiklerini izle",
      "Cihaz başında huzursuzluğu gözle",
      "Okul performansındaki düşüşleri takip et",
      "Yargılamadan güven ortamı kur",
    ],
    accent: "neon-pink",
  },
  {
    id: "ekran",
    num: "03",
    title: "Ekran Süresi Yönetimi",
    subtitle: "Sağlıklı dijital alışkanlıklar",
    duration: "8 dk okuma",
    tags: ["Uyku", "Yemek", "Hobi"],
    tips: [
      "Yaşa uygun günlük limit belirle",
      "Yemek ve uyku saatlerinde cihazsız",
      "Ekransız aile aktiviteleri planla",
      "Yerleşik kontrol araçlarını kullan",
    ],
    accent: "neon-lime",
  },
  {
    id: "iletisim",
    num: "04",
    title: "Çocukla İletişim",
    subtitle: "Zor konuları nasıl konuşmalı?",
    duration: "10 dk okuma",
    tags: ["Sohbet", "Güven", "Dinleme"],
    tips: [
      "Yargılamadan dinle, yön değil",
      "Kendi deneyimini paylaş",
      "Düzenli 'dijital sohbet' saati",
      "Sorun anında güvenli liman ol",
    ],
    accent: "neon-purple",
  },
  {
    id: "platformlar",
    num: "05",
    title: "Platform Rehberleri",
    subtitle: "IG, TikTok, YouTube, Snap için özel",
    duration: "20 dk okuma",
    tags: ["Ayarlar", "Riskler", "Adım adım"],
    tips: [
      "Her platformun yaş sınırını bil",
      "Gizlilik ayarlarını tek tek yap",
      "Bildirim yönetimi şart",
      "Engelleme/raporlama öğret",
    ],
    accent: "neon-amber",
    link: "/platformlar",
  },
  {
    id: "kontrol",
    num: "06",
    title: "Güvenlik Kontrol Listesi",
    subtitle: "Eksiksiz denetim protokolü",
    duration: "5 dk kontrol",
    tags: ["Checklist", "Aylık", "Aile"],
    tips: [
      "Güçlü ve benzersiz şifreler",
      "Ebeveyn kontrol yazılımı kur",
      "Haftalık hesap kontrolü",
      "Aile medya sözleşmesi",
    ],
    accent: "neon-cyan",
    link: "/sozlesme",
  },
];

export default function EbeveynPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="orb w-[500px] h-[500px] bg-neon-cyan top-20 -left-20" />

        <div className="wrap relative pb-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-paper/40 mb-8">
            <Link href="/" className="hover:text-paper transition-colors">ANA SAYFA</Link>
            <span>/</span>
            <span className="text-neon-cyan">EBEVEYN ARŞİVİ</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-4">
                / MODÜL 01-06 / AÇIK ARŞİV
              </p>
              <h1 className="display-text text-6xl sm:text-7xl md:text-8xl text-paper leading-[0.85]">
                Ebeveyn<br />
                <span className="text-gradient">rehberi.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 font-mono text-xs text-paper/50 uppercase tracking-wider">
              <p>SON GÜNCELLEME</p>
              <p className="text-paper text-lg font-bold mt-1">2025.01.15</p>
              <p className="mt-4">TOPLAM SÜRE</p>
              <p className="text-paper text-lg font-bold mt-1">~70 DAKİKA</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MODÜLLER ============ */}
      <section className="relative py-20 border-t border-steel">
        <div className="wrap">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="display-text text-4xl sm:text-5xl text-paper leading-none">
              6 modül,<br />bir akış.
            </h2>
            <div className="font-mono text-xs text-paper/40 uppercase tracking-wider">
              Sırayla veya istediğin modülden başla.
            </div>
          </div>

          <div className="space-y-px bg-steel border border-steel">
            {modules.map((m) => {
              const content = (
                <article className="group relative block bg-void hover:bg-carbon transition-colors p-6 sm:p-10">
                  <div className="grid grid-cols-12 gap-6 items-start">
                    {/* Numara */}
                    <div className="col-span-3 md:col-span-1">
                      <span className={`display-text text-5xl md:text-6xl text-${m.accent} leading-none`}>
                        {m.num}
                      </span>
                    </div>

                    {/* İçerik */}
                    <div className="col-span-9 md:col-span-8">
                      <h3 className="font-bold text-xl sm:text-2xl text-paper mb-1">{m.title}</h3>
                      <p className="text-paper/60 text-sm mb-4">{m.subtitle}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {m.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-paper/50 border border-steel px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Ana ipuçları grid */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {m.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-paper/70">
                            <span className={`text-${m.accent} mt-0.5 shrink-0`}>+</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta / CTA */}
                    <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col md:items-end gap-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-steel md:pl-6">
                      <div className="flex-1 md:flex-none text-right">
                        <p className="text-[10px] font-mono text-paper/40 uppercase tracking-wider">Süre</p>
                        <p className={`text-${m.accent} text-sm font-mono font-bold`}>{m.duration}</p>
                      </div>
                      {m.link && (
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-paper/70 group-hover:text-paper transition-colors">
                          Aç <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
              return m.link ? (
                <Link key={m.id} href={m.link}>
                  {content}
                </Link>
              ) : (
                <div key={m.id}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ AÇIKLAMALAR ============ */}
      <section className="py-24 bg-carbon border-y border-steel">
        <div className="wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
                / BONUS
              </p>
              <h2 className="display-text text-4xl sm:text-5xl text-paper leading-none">
                Pratik<br />araçlar.
              </h2>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-3">
              <Link href="/risk-hesapla" className="group flex items-center justify-between p-6 border border-steel hover:border-neon-cyan hover:bg-void transition-colors">
                <div>
                  <p className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest mb-1">ANALİZ</p>
                  <p className="font-bold text-paper text-lg">Risk Hesaplayıcı</p>
                  <p className="text-sm text-paper/50">10 soruda dijital güvenlik skoru</p>
                </div>
                <span className="text-paper/40 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all text-xl">→</span>
              </Link>

              <Link href="/sozlesme" className="group flex items-center justify-between p-6 border border-steel hover:border-neon-pink hover:bg-void transition-colors">
                <div>
                  <p className="text-[10px] font-mono text-neon-pink uppercase tracking-widest mb-1">UYGULAMA</p>
                  <p className="font-bold text-paper text-lg">Aile Sözleşmesi</p>
                  <p className="text-sm text-paper/50">22 kuralla yazdırılabilir anlaşma</p>
                </div>
                <span className="text-paper/40 group-hover:text-neon-pink group-hover:translate-x-1 transition-all text-xl">→</span>
              </Link>

              <Link href="/quiz" className="group flex items-center justify-between p-6 border border-steel hover:border-neon-lime hover:bg-void transition-colors">
                <div>
                  <p className="text-[10px] font-mono text-neon-lime uppercase tracking-widest mb-1">TEST</p>
                  <p className="font-bold text-paper text-lg">Bilgi Quizi</p>
                  <p className="text-sm text-paper/50">16 soruda bilgini ölç</p>
                </div>
                <span className="text-paper/40 group-hover:text-neon-lime group-hover:translate-x-1 transition-all text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
