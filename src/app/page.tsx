import Link from "next/link";
import PlatformTabs from "@/components/PlatformTabs";
import ScenarioCard from "@/components/ScenarioCard";
import AgeGroups from "@/components/AgeGroups";

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 subtle-dots opacity-40 pointer-events-none" />
        <div
          className="blur-spot absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(47,58,255,0.18), transparent 70%)" }}
        />
        <div
          className="blur-spot absolute top-40 -left-20 w-[360px] h-[360px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(198,234,58,0.25), transparent 70%)" }}
        />

        <div className="wrap relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-line rounded-full text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              <span className="text-muted">2025 sürümü · ücretsiz başla</span>
            </span>
          </div>

          <h1 className="sans-tight text-ink text-[2.5rem] sm:text-6xl md:text-7xl font-medium max-w-4xl mb-8">
            Çocuğunuzun internet dünyasını{" "}
            <span className="display-text text-accent">birlikte</span> anlayın.
          </h1>

          <p className="max-w-xl text-lg text-muted leading-relaxed mb-10">
            Yasaklar ve korkular değil; anlayış ve net kurallar. Ebeveynler için rehberler, çocuklar için senaryolar ve ailecek kullanabileceğiniz pratik araçlar.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <Link
              href="/ebeveyn"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Ebeveyn rehberini aç
              <span className="opacity-70 group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <Link
              href="/cocuk"
              className="inline-flex items-center gap-2 px-5 py-3 bg-surface border border-line text-ink text-sm rounded-full hover:border-ink transition-colors"
            >
              Çocuk bölümüne git
            </Link>
            <Link
              href="/risk-hesapla"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm text-muted hover:text-ink transition-colors"
            >
              · Risk skorunu ölç
            </Link>
          </div>

          {/* Quick feature strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-line">
            {[
              { k: "6", l: "Modül" },
              { k: "4", l: "Platform rehberi" },
              { k: "16", l: "Soruluk quiz" },
              { k: "22", l: "Aile kuralı" },
            ].map((x) => (
              <div key={x.l}>
                <p className="display-text text-3xl text-ink">{x.k}</p>
                <p className="text-sm text-muted mt-1">{x.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOGO/TRUST MARQUEE ==================== */}
      <section className="border-y border-line py-5 overflow-hidden bg-surface">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-12 px-6 text-sm text-muted shrink-0">
              <span>BTK Raporu 2024</span>
              <span className="text-line">●</span>
              <span>UNICEF Türkiye</span>
              <span className="text-line">●</span>
              <span>TÜBİTAK BİLGEM</span>
              <span className="text-line">●</span>
              <span>ALO 182 Sosyal Destek</span>
              <span className="text-line">●</span>
              <span>Meta Family Center</span>
              <span className="text-line">●</span>
              <span>Google Family Link</span>
              <span className="text-line">●</span>
              <span>TikTok Family Pairing</span>
              <span className="text-line">●</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== İKİ YOL (Ebeveyn / Çocuk) ==================== */}
      <section id="yol" className="border-b border-line py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-2xl mb-14">
            <p className="tick mb-3">01 · Siz kimsiniz?</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              İki bölüm, tek rehber.
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Anne babalar için derin rehber; çocuklar için kısa, oyunlaştırılmış anlatım. Aynı konu, iki farklı dil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/ebeveyn"
              className="group relative bg-surface border border-line rounded-2xl p-8 sm:p-10 hover:border-ink transition-colors overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
              <p className="eyebrow mb-6">Ebeveynler için</p>
              <h3 className="sans-tight text-3xl sm:text-4xl text-ink font-medium mb-4">
                Rehber, analiz, eylem.
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                Platform ayarları, siber zorbalık belirtileri, ekran süresi yönetimi ve çocukla konuşma rehberi. 6 modül, yaklaşık 70 dakika.
              </p>

              <ul className="space-y-1.5 mb-8 text-sm text-ink/80">
                <li className="flex gap-2"><span className="text-muted">01</span> Gizlilik ayarları</li>
                <li className="flex gap-2"><span className="text-muted">02</span> Siber zorbalık</li>
                <li className="flex gap-2"><span className="text-muted">03</span> Ekran süresi</li>
                <li className="flex gap-2 text-muted text-xs">+ 3 modül daha</li>
              </ul>

              <span className="inline-flex items-center gap-1.5 text-sm text-ink">
                Bölüme git
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </Link>

            <Link
              href="/cocuk"
              className="group relative bg-accent-soft border border-accent/30 rounded-2xl p-8 sm:p-10 hover:border-accent transition-colors overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="eyebrow text-accent mb-6">Çocuklar için</p>
              <h3 className="sans-tight text-3xl sm:text-4xl text-ink font-medium mb-4">
                Oyna, öğren, kazan.
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                Kurallar, senaryolar ve kısa testler. Sıkıcı ders değil; aklıda kalan, pratik ve net.
              </p>

              <ul className="space-y-1.5 mb-8 text-sm text-ink/80">
                <li className="flex gap-2"><span className="text-accent">01</span> 6 altın kural</li>
                <li className="flex gap-2"><span className="text-accent">02</span> 3 senaryo</li>
                <li className="flex gap-2"><span className="text-accent">03</span> 16 soruluk quiz</li>
              </ul>

              <span className="inline-flex items-center gap-1.5 text-sm text-accent">
                Bölüme git
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== YAŞ GRUPLARI — İnteraktif ==================== */}
      <section id="yas" className="border-b border-line py-20 sm:py-24 bg-surface/50">
        <div className="wrap">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="tick mb-3">02 · Yaş farkı var</p>
              <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
                Her çocuk aynı değil.
              </h2>
              <p className="text-muted mt-4 leading-relaxed">
                Yaşına göre ne söyleyeceğinizi, ne sormayacağınızı bilmek en büyük fark.
              </p>
            </div>
            <Link href="/ebeveyn" className="text-sm text-muted hover:text-ink inline-flex items-center gap-1">
              Detaylı rehber →
            </Link>
          </div>

          <AgeGroups />
        </div>
      </section>

      {/* ==================== PLATFORM SEKME — İnteraktif ==================== */}
      <section id="platform" className="border-b border-line py-20 sm:py-24">
        <div className="wrap">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="tick mb-3">03 · Platform rehberi</p>
              <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
                Gerçek ayarlar,<br />net adımlar.
              </h2>
              <p className="text-muted mt-4 leading-relaxed">
                Her platform için bilmeniz gerekenler: minimum yaş, riskler ve adım adım aktifleştireceğiniz ayarlar.
              </p>
            </div>
            <Link href="/platformlar" className="text-sm text-muted hover:text-ink inline-flex items-center gap-1">
              Tüm platformlar →
            </Link>
          </div>

          <PlatformTabs />
        </div>
      </section>

      {/* ==================== SENARYOLAR — İnteraktif ==================== */}
      <section id="senaryo" className="border-b border-line py-20 sm:py-24 bg-surface/50">
        <div className="wrap">
          <div className="max-w-2xl mb-14">
            <p className="tick mb-3">04 · Ne yapardınız?</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              Küçük kararlar,<br />büyük farklar.
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Aşağıdaki seçeneklerden birine tıklayın — neden önemli olduğunu açıklayalım.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ScenarioCard
              num="01"
              question="Tanımadığı biri çocuğunuza DM atıyor: 'Merhaba, arkadaş olalım mı?'"
              good="Cevap vermeden engelliyorum, ebeveynime söylüyorum."
              bad="Zararsız görünüyor, kısa cevap veriyorum."
              explanation="Kötü niyetli kişiler önce güven kurar. İlk temas noktası kritik — sessiz kalmak en güçlü cevap."
            />
            <ScenarioCard
              num="02"
              question="Birisi 'Tek bir fotoğraf yolla, kimseye göstermem' diyor."
              good="Hayır diyorum ve yetişkine anlatıyorum."
              bad="Sadece bir tane, zararı olmaz."
              explanation="Bir kez gönderilen görüntü ebeveyne değil; tüm internete emanettir. Güven sözü teknik olarak çalışmaz."
            />
            <ScenarioCard
              num="03"
              question="Paylaşımın altına sürekli kötü yorumlar geliyor."
              good="Kanıt alıyorum, engelliyorum, platformda bildiriyorum."
              bad="Aynı şekilde cevap veriyorum."
              explanation="Karşılık vermek tartışmayı büyütür. Ekran görüntüsü + engel + bildirim; zorbalığı durdurma sırasıdır."
            />
            <ScenarioCard
              num="04"
              question="Gece 2'de yatağında hâlâ telefonla oynuyor."
              good="Ortak bir 'uyku moduna giriş' zamanı konuşuyoruz."
              bad="Telefonu elinden alıp cezalandırıyorum."
              explanation="Ceza gizliliği öğretir. Kural birlikte konmuşsa uyma oranı üç kat artar."
            />
          </div>
        </div>
      </section>

      {/* ==================== SAYILAR ==================== */}
      <section id="sayilar" className="border-b border-line py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-2xl mb-14">
            <p className="tick mb-3">05 · Türkiye&apos;de manzara</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              Veri ne söylüyor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-line">
            {[
              {
                num: "%78",
                label: "Aktif çocuk",
                desc: "7-17 yaş aralığında sosyal medya kullanan çocuk oranı.",
                src: "BTK 2024",
              },
              {
                num: "1/3",
                label: "Zorbalığa maruz",
                desc: "Her üç çocuktan biri en az bir kez siber zorbalıkla karşılaşıyor.",
                src: "UNICEF",
              },
              {
                num: "4.5 s",
                label: "Günlük ekran",
                desc: "Türk gençlerinin okul dışı ortalama ekran süresi.",
                src: "Aile Bakanlığı",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`py-10 ${
                  i !== 0 ? "border-t md:border-t-0 md:border-l" : ""
                } border-line md:px-8 first:md:pl-0 last:md:pr-0`}
              >
                <p className="display-text text-6xl sm:text-7xl text-ink mb-4">{s.num}</p>
                <p className="text-ink font-medium mb-2">{s.label}</p>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                <p className="text-xs text-muted/70 font-mono">— {s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ARAÇLAR — Zengin kartlar ==================== */}
      <section id="araclar" className="border-b border-line py-20 sm:py-24 bg-surface/50">
        <div className="wrap">
          <div className="max-w-2xl mb-14">
            <p className="tick mb-3">06 · Araç kutusu</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              Elinizin altında her şey.
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Tek seferlik okunmuş rehber değil — tekrar tekrar kullanacağınız hazır araçlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/risk-hesapla"
              className="group col-span-1 md:col-span-2 bg-surface border border-line rounded-2xl p-8 hover:border-ink transition-colors relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-3">
                  <p className="eyebrow mb-3">Araç · Analiz</p>
                  <h3 className="sans-tight text-3xl text-ink font-medium mb-2">
                    Risk Skoru Hesaplayıcı
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    10 soruluk testle çocuğunuzun mevcut dijital güvenlik seviyesini görün. Sonuçta kişisel öneriler.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-ink">
                    Testi başlat
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
                <div className="md:col-span-2">
                  <div className="mock-window">
                    <div className="mock-header">
                      <span className="mock-dot" />
                      <span className="mock-dot" />
                      <span className="mock-dot" />
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted">
                        <span>Soru 3 / 10</span>
                        <span>30%</span>
                      </div>
                      <div className="h-1 bg-line rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: "30%" }} />
                      </div>
                      <p className="text-sm text-ink font-medium">
                        Çocuğunuzun Instagram hesabı gizli mi?
                      </p>
                      <div className="space-y-2">
                        <div className="px-3 py-2 border border-line rounded-lg text-xs text-muted">Evet, gizli</div>
                        <div className="px-3 py-2 border border-accent bg-accent/5 rounded-lg text-xs text-ink">Herkese açık</div>
                        <div className="px-3 py-2 border border-line rounded-lg text-xs text-muted">Emin değilim</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {[
              {
                t: "Aile Sözleşmesi",
                d: "22 kurallı, yazdırılabilir anlaşma. Birlikte imzalayın, duvara asın.",
                h: "/sozlesme",
                tag: "Şablon",
              },
              {
                t: "16 Soruluk Quiz",
                d: "Ebeveyn ve çocuk versiyonu. Bilginizi ölçün, sonuçları karşılaştırın.",
                h: "/quiz",
                tag: "Test",
              },
              {
                t: "Acil Durum Rehberi",
                d: "Siber zorbalık, dolandırıcılık, taciz — ne yapılmalı, kime başvurulmalı.",
                h: "/acil-durum",
                tag: "Yardım",
              },
              {
                t: "Planlar",
                d: "Free, Pro ve Premium. Kart gerektirmez; istediğinizde yükseltin.",
                h: "/fiyatlandirma",
                tag: "Abone",
              },
            ].map((t) => (
              <Link
                key={t.h}
                href={t.h}
                className="group bg-surface border border-line rounded-2xl p-6 hover:border-ink transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-sand rounded-full text-muted">
                    {t.tag}
                  </span>
                  <span className="text-muted group-hover:text-ink group-hover:translate-x-0.5 transition-all">
                    →
                  </span>
                </div>
                <h3 className="font-medium text-ink mb-1.5">{t.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{t.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NASIL ÇALIŞIR ==================== */}
      <section id="nasil" className="border-b border-line py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-2xl mb-14">
            <p className="tick mb-3">07 · 3 adım</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              İlk güvenli haftanız.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Dotted connecting line (decorative) */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px dotted-line" />

            {[
              {
                n: "Pazartesi",
                t: "Durumu görün",
                d: "Risk skorunu hesaplayın — nereden başlayacağınızı öğrenin.",
                l: "/risk-hesapla",
              },
              {
                n: "Çarşamba",
                t: "Birlikte konuşun",
                d: "Ebeveyn rehberindeki modülleri açın, aile sözleşmesini okuyun.",
                l: "/sozlesme",
              },
              {
                n: "Cuma",
                t: "Hayata geçirin",
                d: "Platform ayarlarını birlikte gezin, ayarları yapın.",
                l: "/platformlar",
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.l}
                className="group relative bg-paper border border-line rounded-2xl p-6 hover:border-ink transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="eyebrow">{s.n}</span>
                </div>
                <h3 className="sans-tight text-xl text-ink font-medium mb-2">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{s.d}</p>
                <span className="text-xs text-muted group-hover:text-ink transition-colors">
                  Başla →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SSS ==================== */}
      <section id="sss" className="border-b border-line py-20 sm:py-24 bg-surface/50">
        <div className="wrap-narrow">
          <div className="mb-12">
            <p className="tick mb-3">08 · Sık sorulan</p>
            <h2 className="sans-tight text-4xl sm:text-5xl text-ink font-medium">
              Merak ettikleriniz.
            </h2>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {[
              {
                q: "Çocuğumun telefonunu kontrol etmek doğru mu?",
                a: "Evet — ama şeffafça. Gizlice takip etmek güveni zedeler. Kuralları birlikte belirleyin, denetlediğinizi açıkça söyleyin. Çocuklar bildikleri sınırı, bilmediklerinden çok daha iyi taşır.",
              },
              {
                q: "Kaç yaşında sosyal medya hesabı açabilir?",
                a: "Çoğu platformun minimum yaş sınırı 13'tür. Ama asıl soru yaş değil; hazır olup olmadığı. Kişisel bilgilerini koruyabiliyor, zorbalıkla başa çıkabiliyor ve çevrimdışı hayatı zayıflatmıyorsa hazırdır.",
              },
              {
                q: "Siber zorbalık durumunda ne yapmalıyım?",
                a: "Dört adımlı sıra: (1) Kanıt toplayın — ekran görüntüsü alın. (2) Platformda bildirin. (3) Kişiyi engelleyin. (4) Çocuğu dinleyin — suçlamayın. Durum devam ederse ALO 182.",
              },
              {
                q: "Ekran süresi kaç saat olmalı?",
                a: "Yaşa göre değişir. 6-12 yaş: günde 1-2 saat. 13-17 yaş: 2-3 saat. Ama süreden çok önemlisi 'ne' izlediği. Pasif tüketim yerine yaratıcı kullanımı desteklemek istiyorsunuz.",
              },
              {
                q: "Uygulamayı çocuğumla birlikte kullanabilir miyim?",
                a: "Evet. Özellikle Çocuk bölümündeki senaryo ve quizleri birlikte çözmek için tasarlandı. İlk başta yalnız okumak yerine birlikte okumak konuşmayı açar.",
              },
            ].map((item, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer py-5 flex items-start justify-between gap-4 list-none hover:text-accent transition-colors">
                  <span className="font-medium text-ink text-base sm:text-lg pr-4">{item.q}</span>
                  <span className="text-muted group-open:rotate-45 transition-transform shrink-0 text-xl mt-1">
                    +
                  </span>
                </summary>
                <div className="pb-6 pr-8 text-muted leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            Sorunuz burada yoksa:{" "}
            <Link href="/acil-durum" className="text-accent hover:underline">
              acil durum rehberi
            </Link>
          </p>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="blur-spot absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(circle, rgba(47,58,255,0.15), transparent 70%)" }}
        />
        <div className="wrap text-center relative">
          <p className="tick justify-center mb-4">Hazır mısınız?</p>
          <h2 className="sans-tight text-5xl sm:text-6xl text-ink font-medium mb-6">
            Bu haftanın 15 dakikası.
          </h2>
          <p className="text-muted text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Ücretsiz hesap, kart gerekmez. Başlamak için en büyük sebep: bekleyince zorlaşıyor.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <Link
              href="/kayit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Ücretsiz kaydol <span className="opacity-70">→</span>
            </Link>
            <Link
              href="/ebeveyn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-ink text-sm rounded-full hover:bg-sand transition-colors"
            >
              Önce rehberi gezin
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted">
            <span>✓ KVKK uyumlu</span>
            <span>✓ Türkçe içerik</span>
            <span>✓ Reklamsız</span>
          </div>
        </div>
      </section>
    </>
  );
}
