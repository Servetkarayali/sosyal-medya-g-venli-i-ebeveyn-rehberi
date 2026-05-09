import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO — sade, kağıt üzerine */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 subtle-dots opacity-60 pointer-events-none" />
        <div className="wrap relative pt-20 pb-24 sm:pt-28 sm:pb-32">
          <p className="eyebrow mb-6">— Aileler için dijital güvenlik rehberi</p>

          <h1 className="display-text text-ink text-5xl sm:text-7xl md:text-[5.5rem] max-w-4xl">
            Çocuğunuzun internet dünyasını{" "}
            <span className="text-accent">birlikte</span> anlayın.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
            Korkmadan, yargılamadan, doğru soruları sormayı öğrenin.
            Sade bir rehber — ebeveynler ve çocuklar için ayrı bölümler.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/ebeveyn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Rehberi incele <span className="opacity-70">→</span>
            </Link>
            <Link
              href="/risk-hesapla"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink text-sm rounded-full hover:bg-sand transition-colors"
            >
              Risk skorunu öğren
            </Link>
          </div>
        </div>
      </section>

      {/* İKİ YOL — Sade kartlar */}
      <section className="border-t border-line py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">01 — Kime göre</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink">
              İki farklı bölüm,<br />
              aynı sakinlik.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/ebeveyn"
              className="group bg-surface border border-line p-8 sm:p-10 rounded-2xl hover:border-ink transition-colors"
            >
              <p className="eyebrow mb-6">Ebeveynler için</p>
              <h3 className="display-text text-3xl sm:text-4xl text-ink mb-3">
                Rehber, analiz, eylem.
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                Platform ayarları, siber zorbalık belirtileri, ekran süresi yönetimi ve çocukla konuşma rehberi.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-ink group-hover:text-accent transition-colors">
                Bölüme git
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/cocuk"
              className="group bg-accent-soft border border-accent-soft p-8 sm:p-10 rounded-2xl hover:border-accent transition-colors"
            >
              <p className="eyebrow mb-6 text-accent">Çocuklar için</p>
              <h3 className="display-text text-3xl sm:text-4xl text-ink mb-3">
                Oyna, öğren, kazan.
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                Kurallar, senaryolar ve kısa testler. Sıkıcı ders değil, anlaşılır ve eğlenceli.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-accent">
                Bölüme git
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* VERİ — Sade satırlar */}
      <section className="border-t border-line py-20 sm:py-24">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">02 — Rakamlar</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink">
              Türkiye&apos;de neler oluyor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-line">
            {[
              { num: "%78", label: "Aktif çocuk", desc: "Sosyal medyada" },
              { num: "1/3", label: "Zorbalığa maruz", desc: "En az bir kez" },
              { num: "4.5 s", label: "Günlük ekran", desc: "Ortalama kullanım" },
            ].map((s, i) => (
              <div key={i} className="py-10 border-b md:border-b-0 md:border-r last:border-r-0 border-line md:pr-8 md:[&:not(:first-child)]:pl-8">
                <p className="display-text text-6xl sm:text-7xl text-ink mb-4">{s.num}</p>
                <p className="text-ink font-medium mb-1">{s.label}</p>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted max-w-md">
            Kaynak: BTK ve Aile, Çalışma ve Sosyal Hizmetler Bakanlığı 2024 raporları.
          </p>
        </div>
      </section>

      {/* ARAÇLAR — Basit liste */}
      <section className="border-t border-line py-20 sm:py-24 bg-sand/40">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">03 — Araç kutusu</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink">
              Elinizin altında<br />her şey.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Platform Rehberleri", desc: "Instagram, TikTok, YouTube, Snapchat için ayarlar", href: "/platformlar" },
              { title: "16 Soruluk Quiz", desc: "Bilginizi test edin, skorunuzu öğrenin", href: "/quiz" },
              { title: "Risk Hesaplayıcı", desc: "10 soruda dijital güvenlik skorunuz", href: "/risk-hesapla" },
              { title: "Aile Sözleşmesi", desc: "22 kuralla yazdırılabilir anlaşma", href: "/sozlesme" },
              { title: "Acil Durum", desc: "Tehlike anında ne yapmalı?", href: "/acil-durum" },
              { title: "Planlar", desc: "Free, Pro ve Premium seçenekler", href: "/fiyatlandirma" },
            ].map((t, i) => (
              <Link
                key={i}
                href={t.href}
                className="group bg-surface border border-line p-6 rounded-2xl hover:border-ink transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="eyebrow">0{i + 1}</span>
                  <span className="text-muted group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
                </div>
                <h3 className="font-medium text-ink mb-1.5">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="border-t border-line py-20 sm:py-24">
        <div className="wrap-narrow">
          <div className="mb-12">
            <p className="eyebrow mb-3">04 — Sık sorulan</p>
            <h2 className="display-text text-4xl sm:text-5xl text-ink">Merak ettikleriniz.</h2>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {[
              { q: "Çocuğumun telefonunu kontrol etmek doğru mu?", a: "Evet — ama şeffafça. Gizlice takip etmek güveni zedeler. Kuralları birlikte belirleyin, denetlediğinizi söyleyin." },
              { q: "Kaç yaşında sosyal medya hesabı açabilir?", a: "Çoğu platformun minimum yaş sınırı 13'tür. Ama asıl soru yaşı değil — hazır olup olmadığı." },
              { q: "Siber zorbalık durumunda ne yapmalıyım?", a: "Kanıt topla (ekran görüntüsü) → platformda bildir → kişiyi engelle → çocuğu dinle → gerekirse ALO 182." },
              { q: "Ekran süresi kaç saat olmalı?", a: "Yaşa göre değişir. 6-12 yaş: max 1-2 saat, 13-17 yaş: max 2-3 saat. Nitelik nicelikten önemli." },
            ].map((item, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer py-6 flex items-center justify-between gap-4 list-none hover:text-accent transition-colors">
                  <span className="font-medium text-ink text-base sm:text-lg pr-4">{item.q}</span>
                  <span className="text-muted group-open:rotate-45 transition-transform shrink-0 text-xl">+</span>
                </summary>
                <div className="pb-6 text-muted leading-relaxed max-w-2xl">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — Çok sade */}
      <section className="border-t border-line py-24">
        <div className="wrap text-center">
          <p className="eyebrow mb-4">Hazır mısınız?</p>
          <h2 className="display-text text-5xl sm:text-6xl text-ink mb-6">
            Bugün başlayın.
          </h2>
          <p className="text-muted text-lg mb-10 max-w-md mx-auto">
            30 saniyede ücretsiz hesap. Kart gerekmez.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <Link
              href="/kayit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink text-paper text-sm rounded-full hover:bg-accent transition-colors"
            >
              Ücretsiz kaydol <span className="opacity-70">→</span>
            </Link>
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-ink text-sm rounded-full hover:bg-sand transition-colors"
            >
              Planları gör
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
