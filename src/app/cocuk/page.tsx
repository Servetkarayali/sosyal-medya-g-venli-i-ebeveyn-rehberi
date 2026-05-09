import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çocuk & Genç Bölümü",
  description: "Sosyal medyada güvende kalmak — sade ve anlaşılır.",
};

const rules = [
  { n: "01", title: "Kişisel bilgini paylaşma", desc: "Ad, adres, okul, telefon — asla." },
  { n: "02", title: "Tanımadığına güvenme", desc: "Tatlı sözlere kanma, yetişkine söyle." },
  { n: "03", title: "Fotoğrafına dikkat", desc: "Bir kez paylaşılan, hep kalır." },
  { n: "04", title: "Nazik ol", desc: "Ekran arkasında da insan var." },
  { n: "05", title: "Yardım iste", desc: "Korktun mu? Hemen söyle, gizleme." },
  { n: "06", title: "Ekrandan uzaklaş", desc: "Hayat dışarıda, telefon içeride." },
];

const scenarios = [
  {
    q: "Tanımadığın biri mesaj attı: 'Merhaba, arkadaş olalım mı?'",
    good: "Cevap vermem, bir yetişkine söylerim.",
    bad: "Sohbete başlarım, zararsız gibi.",
  },
  {
    q: "Birisi 'Fotoğraf at' diyor.",
    good: "Hayır derim ve aileme söylerim.",
    bad: "Gönderirim, ne olacak ki.",
  },
  {
    q: "Paylaşımıma sürekli kötü yorumlar geliyor.",
    good: "Engeller, kanıt alırım, yetişkine söylerim.",
    bad: "Kavga eder, ben de kötü yazarım.",
  },
];

export default function CocukPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="wrap pt-16 pb-16 sm:pt-20 sm:pb-20">
          <p className="eyebrow mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Ana sayfa</Link> / Çocuk bölümü
          </p>
          <h1 className="display-text text-5xl sm:text-7xl text-ink max-w-3xl">
            İnternette güvende <span className="text-accent">kalmak kolay.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            6 kural, 3 senaryo, 16 soruluk quiz. Sıkıcı değil — basit ve net.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors">
              Quiz&apos;e başla <span className="opacity-70">→</span>
            </Link>
            <a href="#kurallar" className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink text-sm rounded-full hover:bg-sand transition-colors">
              Kuralları gör
            </a>
          </div>
        </div>
      </section>

      {/* 6 Kural */}
      <section id="kurallar" className="py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">01 — Altın kurallar</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink">
              6 kural, hayat kurtarır.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rules.map((r) => (
              <div key={r.n} className="bg-surface border border-line p-6 rounded-2xl hover:border-ink transition-colors">
                <span className="display-text text-4xl text-accent block mb-4">{r.n}</span>
                <h3 className="font-medium text-ink mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senaryolar */}
      <section className="border-t border-line py-20 sm:py-24 bg-sand/40">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">02 — Senaryolar</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink">
              Ne yapardın?
            </h2>
          </div>

          <div className="space-y-4">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-surface border border-line p-6 sm:p-8 rounded-2xl">
                <p className="eyebrow mb-3">Durum 0{i + 1}</p>
                <p className="text-lg sm:text-xl text-ink mb-6 italic">&ldquo;{s.q}&rdquo;</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="border border-line rounded-xl p-4">
                    <p className="eyebrow text-accent mb-2">✓ Doğru</p>
                    <p className="text-sm text-ink">{s.good}</p>
                  </div>
                  <div className="border border-line rounded-xl p-4 opacity-60">
                    <p className="eyebrow text-muted mb-2">✕ Yanlış</p>
                    <p className="text-sm text-ink">{s.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-24">
        <div className="wrap text-center">
          <p className="eyebrow mb-4">03 — Hazır mısın?</p>
          <h2 className="display-text text-5xl sm:text-6xl text-ink mb-6">
            Bilgini test et.
          </h2>
          <p className="text-muted text-lg mb-10 max-w-md mx-auto">
            16 soru. Ne kadar biliyorsun?
          </p>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors">
            Quiz&apos;e başla <span className="opacity-70">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
