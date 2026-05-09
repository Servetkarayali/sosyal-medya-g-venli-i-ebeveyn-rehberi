import type { Metadata } from "next";
import Link from "next/link";
import SectionNav from "@/components/SectionNav";

export const metadata: Metadata = {
  title: "Ebeveyn Rehberi",
  description: "Ebeveynler için kapsamlı dijital güvenlik rehberi — sade, net, uygulanabilir.",
};

const modules = [
  {
    id: "gizlilik",
    num: "01",
    title: "Gizlilik Ayarları",
    subtitle: "Profiller ve paylaşım izinleri",
    minutes: "12 dk",
    intro:
      "Çocuğunuzun profili bir vitrin değil; bir oda. Kim görebilecek, kim mesaj atabilecek, konum nereden görünecek — hepsi sizin elinizde.",
    tips: [
      "Hesabı 'Gizli' moda alın — takipçiler onayla gelir.",
      "Konum paylaşımını tamamen kapatın (Snap Map, Instagram konum etiketleri).",
      "Bilinmeyen kişilerden mesaj almayı kapatın.",
      "İki faktörlü doğrulamayı SMS veya uygulama ile açık tutun.",
      "Biyografide okul, adres, telefon paylaşmayın.",
    ],
  },
  {
    id: "zorbalik",
    num: "02",
    title: "Siber Zorbalık",
    subtitle: "Belirtiler ve müdahale",
    minutes: "15 dk",
    intro:
      "Siber zorbalık gizlenir; gülme, iştahsızlık, odadan çıkmama gibi dolaylı sinyaller taşır. Önce fark etmek, sonra dinlemek.",
    tips: [
      "Ani davranış değişikliklerini izleyin — özellikle cihaz başındaki ruh halini.",
      "Okul performansındaki düşüşü internet kullanımıyla birlikte değerlendirin.",
      "Yargılamadan dinleyin; 'neden söylemedin' yerine 'şimdi birlikte bakalım'.",
      "Kanıt (ekran görüntüsü) toplayın, kişiyi engelleyin, platformda bildirin.",
      "Gerekirse ALO 182'yi arayın; okul rehberlik servisini dahil edin.",
    ],
  },
  {
    id: "ekran",
    num: "03",
    title: "Ekran Süresi Yönetimi",
    subtitle: "Sağlıklı dijital alışkanlıklar",
    minutes: "8 dk",
    intro:
      "Süre değil; içerik kalitesi önemli. Yaratıcı kullanım desteklenir, pasif kaydırma sınırlanır.",
    tips: [
      "Yaşa göre günlük limit: 6–12 yaş 1-2 saat, 13–17 yaş 2-3 saat.",
      "Yemek masası ve yatak odası 'cihazsız alan' olsun.",
      "Uyumadan 1 saat önce ekran kapatılsın.",
      "Haftada 1 gün 'dijital detoks' aile aktivitesi koyun.",
      "iOS Screen Time / Google Family Link ile hatırlatma kurun.",
    ],
  },
  {
    id: "iletisim",
    num: "04",
    title: "Çocukla İletişim",
    subtitle: "Zor konuları konuşmak",
    minutes: "10 dk",
    intro:
      "Telefonu elinden almak değil, elindekini anlamak asıl iş. Konuşma saati kuralı: akşam yemeği sonrası 10 dk, yargılamasız.",
    tips: [
      "Açık uçlu sor: 'Bugün ne izledin?' yerine 'En komiği neydi?'",
      "Kendi deneyiminizi paylaşın — mükemmel ebeveyn değil, örnek ebeveyn.",
      "Sorun anında 'güvenli liman' olduğunuzu hissettirin — ceza değil çözüm.",
      "Teknolojiyi birlikte keşfedin; öğrenmeye açık olun.",
      "Kurallara sizin de uyduğunuzu gösterin.",
    ],
  },
  {
    id: "platformlar",
    num: "05",
    title: "Platform Rehberleri",
    subtitle: "IG, TikTok, YouTube, Snap için ayarlar",
    minutes: "20 dk",
    intro:
      "Her platformun oyun kuralı farklı. Instagram'da gizlilik, TikTok'ta Family Pairing, YouTube'da supervised account, Snap'te ghost mode kritik.",
    tips: [
      "Her platformun minimum yaş sınırını bilin (çoğu 13+).",
      "Platform bazlı gizlilik ayarlarını tek tek yapın.",
      "Ana akıştan çok 'öneri' algoritmasına dikkat edin.",
      "Engelleme ve raporlama özelliklerini çocuğunuza öğretin.",
    ],
    link: "/platformlar",
  },
  {
    id: "kontrol",
    num: "06",
    title: "Güvenlik Kontrol Listesi",
    subtitle: "Aylık denetim protokolü",
    minutes: "5 dk",
    intro:
      "Ayda bir 5 dakika: şifre, yeni takipçiler, ekran süresi, platform ayarları. Düzen, sürpriz yönetimi gerektirmez.",
    tips: [
      "Güçlü ve benzersiz şifreler; parola yöneticisi kurun.",
      "Ayda bir takipçi ve takip listesi kontrolü.",
      "Ekran süresi raporunu birlikte inceleyin.",
      "Aile sözleşmesini 3 ayda bir gözden geçirin.",
    ],
    link: "/sozlesme",
  },
];

const navItems = modules.map((m) => ({ id: m.id, label: `${m.num}. ${m.title}` }));

export default function EbeveynPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="wrap pt-16 pb-16 sm:pt-20 sm:pb-20">
          <p className="eyebrow mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Ana sayfa</Link> / Ebeveyn rehberi
          </p>
          <h1 className="sans-tight text-5xl sm:text-6xl md:text-7xl text-ink font-medium max-w-3xl">
            Yasaklamadan{" "}
            <span className="display-text text-accent">anlamak</span> için rehber.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            6 modül, yaklaşık 70 dakika. İstediğiniz modülden başlayın; her biri kendi başına tamamlanır.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { k: "6", l: "Modül" },
              { k: "70 dk", l: "Toplam süre" },
              { k: "22", l: "Kural" },
              { k: "4", l: "Platform" },
            ].map((x) => (
              <div key={x.l} className="py-3">
                <p className="display-text text-3xl text-ink">{x.k}</p>
                <p className="text-xs text-muted mt-1">{x.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content with sticky side nav */}
      <section className="py-16 sm:py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Side nav */}
            <aside className="lg:col-span-3">
              <SectionNav items={navItems} />
            </aside>

            {/* Modules */}
            <div className="lg:col-span-9 space-y-20">
              {modules.map((m) => (
                <article key={m.id} id={m.id} className="scroll-mt-24">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <p className="eyebrow mb-3">Modül {m.num}</p>
                      <h2 className="sans-tight text-3xl sm:text-4xl text-ink font-medium">
                        {m.title}
                      </h2>
                      <p className="text-muted mt-2">{m.subtitle}</p>
                    </div>
                    <span className="text-xs font-mono text-muted px-3 py-1 bg-sand rounded-full shrink-0">
                      {m.minutes}
                    </span>
                  </div>

                  <p className="text-lg text-ink/80 leading-relaxed mb-8 max-w-2xl">{m.intro}</p>

                  <ul className="space-y-3 border-y border-line py-6">
                    {m.tips.map((t, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="font-mono text-sm text-muted shrink-0 w-6 mt-0.5">
                          0{i + 1}
                        </span>
                        <span className="text-ink/90">{t}</span>
                      </li>
                    ))}
                  </ul>

                  {m.link && (
                    <div className="mt-6">
                      <Link
                        href={m.link}
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                      >
                        Detaylı ele almaya git →
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="border-t border-line py-20 bg-surface/50">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="tick mb-3">Destekleyici araçlar</p>
            <h2 className="sans-tight text-3xl sm:text-4xl text-ink font-medium">
              Yanınıza alın.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Risk Hesaplayıcı", d: "10 soruda durum tespiti", h: "/risk-hesapla" },
              { t: "Aile Sözleşmesi", d: "22 kurallı şablon", h: "/sozlesme" },
              { t: "16 Soruluk Quiz", d: "Bilginizi ölçün", h: "/quiz" },
            ].map((t) => (
              <Link
                key={t.h}
                href={t.h}
                className="group bg-surface border border-line p-6 rounded-2xl hover:border-ink transition-colors"
              >
                <h3 className="font-medium text-ink mb-1">{t.t}</h3>
                <p className="text-sm text-muted mb-4">{t.d}</p>
                <span className="text-sm text-muted group-hover:text-accent transition-colors">
                  Aç →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
