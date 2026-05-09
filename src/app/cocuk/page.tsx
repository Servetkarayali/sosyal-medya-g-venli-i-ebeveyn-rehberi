import type { Metadata } from "next";
import Link from "next/link";
import ScenarioCard from "@/components/ScenarioCard";

export const metadata: Metadata = {
  title: "Çocuk & Genç Bölümü",
  description: "Sosyal medyada güvende kalmak — sade, net, oyun gibi.",
};

const rules = [
  {
    n: "01",
    title: "Kişisel bilgini paylaşma",
    desc: "Ad, adres, okul, telefon — tanımadığın kimseye açma.",
    good: "Profilimde sadece takma adım var.",
    bad: "Tam adımı, okulumu yazdım.",
  },
  {
    n: "02",
    title: "Yabancıya güvenme",
    desc: "İnternette tanımadığın biri çok kibarsa bile dikkatli ol.",
    good: "Tanımadığımın mesajını okumam bile.",
    bad: "İyi biri gibi duruyor, cevaplayayım.",
  },
  {
    n: "03",
    title: "Fotoğrafını koru",
    desc: "Bir kez paylaşılan görüntü sonsuza kadar yayılabilir.",
    good: "Arkadaşlarıma bile göndermeden iki kez düşünürüm.",
    bad: "Snap'te kaybolacak zaten, ne olabilir?",
  },
  {
    n: "04",
    title: "Nazik ol",
    desc: "Ekranın arkasında bir insan var, gerçek hayattaki gibi konuş.",
    good: "Sinirim yüzünden yazacağım şeyi 5 dakika bekleyip silerim.",
    bad: "Forumda laf ettiler, ben de yapıştırdım.",
  },
  {
    n: "05",
    title: "Yardım iste",
    desc: "Korktuysan, utandıysan, kafan karıştıysa — söyleyince hafiflersin.",
    good: "Tuhaf bir şey olunca hemen anneme söylerim.",
    bad: "Ben hallederim, kimse bilmese iyi olur.",
  },
  {
    n: "06",
    title: "Ekrandan uzaklaş",
    desc: "Hayatın yarısı ekran dışında — oraya da vakit ayır.",
    good: "Günde 1 saat sporum, 1 saat kitabım var.",
    bad: "Sabah açıp, akşam kapatıyorum.",
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
          <h1 className="sans-tight text-5xl sm:text-6xl md:text-7xl text-ink font-medium max-w-3xl">
            İnternette güvende kalmak{" "}
            <span className="display-text text-accent">kolay</span>.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            6 kural, 4 senaryo, 1 quiz. Sıkıcı ders değil — aklında kalan, işine yarayan.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Quiz&apos;e başla <span className="opacity-70">→</span>
            </Link>
            <a
              href="#kurallar"
              className="inline-flex items-center gap-2 px-5 py-3 border border-line text-ink text-sm rounded-full hover:bg-sand transition-colors"
            >
              Kuralları oku
            </a>
          </div>
        </div>
      </section>

      {/* 6 Kural */}
      <section id="kurallar" className="py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="tick mb-3">01 · Altı kural</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              Her seferinde işe yarar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map((r) => (
              <div
                key={r.n}
                className="group bg-surface border border-line rounded-2xl p-6 hover:border-ink transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="display-text text-3xl text-accent shrink-0">{r.n}</span>
                  <div>
                    <h3 className="font-medium text-ink mb-1">{r.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 pt-4 border-t border-line">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="text-accent font-medium shrink-0">Böyle:</span>
                    <span className="text-ink/70">{r.good}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <span className="text-coral font-medium shrink-0">Değil:</span>
                    <span className="text-ink/70">{r.bad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senaryolar — interactive */}
      <section id="senaryolar" className="border-t border-line py-20 sm:py-24 bg-surface/50">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="tick mb-3">02 · Senaryolar</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              Sen olsan ne yapardın?
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Bir seçeneğe tıkla — neden doğru ya da yanlış olduğunu açıklayalım.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ScenarioCard
              num="01"
              question="Tanımadığın biri 'Sen çok güzelsin, arkadaş olalım' yazıyor."
              good="Cevap vermeden engellerim."
              bad="Teşekkür ederim, konuşmaya başlarım."
              explanation="Yabancıların iltifatı genelde bir kapı açma yöntemidir. İlk sessizlik en güvenli cevap."
            />
            <ScenarioCard
              num="02"
              question="Sınıftaki biri senden gizlice fotoğrafını istedi, 'sadece ben göreceğim' dedi."
              good="'Hayır' der, aileme söylerim."
              bad="Güveniyorum, sadece bir tane gönderirim."
              explanation="Dijitalde 'sadece senin göreceğin' şey yoktur. Ekran görüntüsü alınır, paylaşılır. Hayır demek en büyük koruma."
            />
            <ScenarioCard
              num="03"
              question="Arkadaşın 'herkes yapıyor' deyip tehlikeli bir TikTok challenge'ı istiyor."
              good="Yapmam, ailemle konuşurum."
              bad="Madem herkes yapıyor, ben de."
              explanation="Viral olmak için kimse sağlığını riske atmamalı. 'Herkes' genelde birkaç kişidir, sen onlardan biri olma."
            />
            <ScenarioCard
              num="04"
              question="Bir video oyununda biri 'canlı kamera aç da beraber oynayalım' diyor."
              good="Reddederim, sadece ses üzerinden oynarım."
              bad="Açarım, eğlenceli olur."
              explanation="Yüzünü, odanı, arka planı görmek yabancı için çok fazla bilgi. Ses yeter."
            />
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section id="quiz" className="border-t border-line py-20 sm:py-24">
        <div className="wrap text-center">
          <p className="tick justify-center mb-4">03 · Test zamanı</p>
          <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium mb-4">
            16 soru. Ne biliyorsun?
          </h2>
          <p className="text-muted max-w-md mx-auto leading-relaxed mb-8">
            Tahmin değil bilgi — cevaplarını işaretle, skorunu öğren, arkadaşlarına karşılaştır.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
          >
            Quiz&apos;e başla <span className="opacity-70">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
