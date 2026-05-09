import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — Magazine cover ============ */}
      <section className="relative border-b-2 border-ink overflow-hidden">
        <div className="wrap pt-12 sm:pt-20 pb-20">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* Sol: issue metadata */}
            <div className="col-span-12 md:col-span-3 flex md:flex-col gap-3 md:gap-2 text-xs font-mono uppercase tracking-widest">
              <div className="px-2 py-1 border border-ink inline-block w-fit">Vol. 01</div>
              <div className="px-2 py-1 border border-ink inline-block w-fit">2025</div>
              <div className="px-2 py-1 bg-hot text-white inline-block w-fit">Güncel</div>
            </div>

            {/* Orta: dev başlık */}
            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display font-bold italic leading-[0.9] tracking-tight">
                <span className="block text-6xl sm:text-8xl md:text-[9rem]">Çocuğum</span>
                <span className="block text-6xl sm:text-8xl md:text-[9rem] text-hot">
                  <span className="not-italic font-sans font-black text-ink text-4xl sm:text-6xl align-middle">⁝</span>{" "}
                  telefonda
                </span>
                <span className="block text-6xl sm:text-8xl md:text-[9rem]">
                  ne yapıyor<span className="text-electric">?</span>
                </span>
              </h1>
            </div>
          </div>

          {/* Alt şerit */}
          <div className="mt-12 pt-6 border-t-2 border-ink grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-base sm:text-lg leading-relaxed max-w-xl">
                Sosyal medya çocuklarınızın hayatının bir parçası. Riskleri bilmeniz,{" "}
                <span className="bg-lime px-1">korkmanız için değil</span>, doğru soruları sorabilmeniz için.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-wrap gap-3">
              <Link
                href="/ebeveyn"
                className="brut-btn bg-ink text-cream hover:bg-hot hover:border-hot transition-colors"
                style={{ boxShadow: "6px 6px 0 0 #d4ff00" }}
              >
                Rehber →
              </Link>
              <Link
                href="/risk-hesapla"
                className="brut-btn bg-cream text-ink hover:bg-lime transition-colors"
                style={{ boxShadow: "6px 6px 0 0 #0a0a0a" }}
              >
                Risk Skorunu Öğren
              </Link>
            </div>
          </div>
        </div>

        {/* Rotated floating sticker */}
        <div className="absolute top-16 right-8 hidden lg:flex w-28 h-28 bg-lime border-2 border-ink items-center justify-center font-display italic text-xl font-bold rotate-12 animate-wiggle" style={{ boxShadow: "6px 6px 0 0 #0a0a0a" }}>
          <span className="text-center leading-tight">Yeni<br/><span className="text-hot">2025</span></span>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <section className="bg-lime border-b-2 border-ink py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="font-display italic text-2xl font-bold">%78 çocuk sosyal medyada</span>
              <span className="text-2xl">✦</span>
              <span className="font-display italic text-2xl font-bold">1/3 siber zorbalığa maruz</span>
              <span className="text-2xl">✦</span>
              <span className="font-display italic text-2xl font-bold">4.5 saat günlük ekran</span>
              <span className="text-2xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ İKİ YOL — Asimetrik kartlar ============ */}
      <section className="border-b-2 border-ink py-20">
        <div className="wrap">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-hot mb-2">// Bölüm 01</p>
              <h2 className="font-display italic font-bold text-5xl sm:text-6xl leading-none">
                Kime göre<br/>arıyorsun?
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink/50 max-w-xs">
              Her yaş grubu için ayrı. Aynı bilgiyi hem anne babaya hem çocuğa aynı şekilde anlatmıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Ebeveyn kartı - büyük */}
            <Link href="/ebeveyn" className="col-span-12 md:col-span-7 group">
              <div className="brut-card p-8 sm:p-10 relative overflow-hidden h-full">
                <div className="absolute top-4 right-4 text-[120px] font-display italic font-bold text-lime leading-none -rotate-6">01</div>
                <div className="relative">
                  <div className="inline-block px-3 py-1 bg-ink text-cream text-xs font-mono uppercase tracking-widest mb-4">
                    Ebeveyn
                  </div>
                  <h3 className="font-display italic font-bold text-4xl sm:text-5xl leading-tight mb-4">
                    Çocuğumu nasıl<br/>korurum?
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-6 max-w-md">
                    Platform ayarları, siber zorbalık belirtileri, ekran süresi yönetimi ve çocukla konuşma rehberi.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Rehberi Aç
                    <span className="w-8 h-8 bg-ink text-lime flex items-center justify-center text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Çocuk kartı - küçük, sağa offsetli */}
            <Link href="/cocuk" className="col-span-12 md:col-span-5 group md:mt-12">
              <div className="brut-card p-8 bg-hot text-white border-ink h-full relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 text-[100px] font-display italic font-bold text-white/10 leading-none">02</div>
                <div className="relative">
                  <div className="inline-block px-3 py-1 bg-cream text-ink text-xs font-mono uppercase tracking-widest mb-4">
                    Çocuk / Genç
                  </div>
                  <h3 className="font-display italic font-bold text-3xl sm:text-4xl leading-tight mb-4">
                    Güvende kalmak<br/>eğlenceli mi?
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    Senaryolar, kısa testler, altın kurallar. Sıkıcı ders değil, oyun gibi.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Başla
                    <span className="w-8 h-8 bg-cream text-hot flex items-center justify-center text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ İSTATİSTİK — Editorial layout ============ */}
      <section className="bg-ink text-cream border-b-2 border-ink py-20 relative overflow-hidden">
        <div className="wrap relative">
          <p className="text-xs font-mono uppercase tracking-widest text-hot mb-3">// Bölüm 02 · Gerçekler</p>
          <h2 className="font-display italic font-bold text-5xl sm:text-7xl mb-16 leading-none">
            Rakamlar ne<br/><span className="text-lime">söylüyor?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-cream/20">
            <div className="pb-8 md:pb-0 md:pr-8">
              <p className="font-display italic font-bold text-7xl sm:text-8xl leading-none text-lime mb-3">%78</p>
              <p className="text-sm uppercase tracking-wider font-bold mb-2">Çocuk aktif</p>
              <p className="text-xs text-cream/60 leading-relaxed">Türkiye&apos;deki çocukların büyük çoğunluğu sosyal medya platformlarını kullanıyor.</p>
            </div>
            <div className="py-8 md:py-0 md:px-8">
              <p className="font-display italic font-bold text-7xl sm:text-8xl leading-none text-hot mb-3">1/3</p>
              <p className="text-sm uppercase tracking-wider font-bold mb-2">Zorbalığa maruz</p>
              <p className="text-xs text-cream/60 leading-relaxed">Her üç çocuktan biri hayatında en az bir kez siber zorbalıkla karşılaşıyor.</p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-8">
              <p className="font-display italic font-bold text-7xl sm:text-8xl leading-none text-mustard mb-3">4.5<span className="text-3xl">s</span></p>
              <p className="text-sm uppercase tracking-wider font-bold mb-2">Günlük ekran</p>
              <p className="text-xs text-cream/60 leading-relaxed">Gençlerin ortalama günlük ekran süresi — okul ve uyku dışında.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ARAÇLAR — Sticker stili ============ */}
      <section className="border-b-2 border-ink py-20 bg-cream relative">
        <div className="wrap">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-hot mb-2">// Bölüm 03</p>
            <h2 className="font-display italic font-bold text-5xl sm:text-7xl leading-none">
              Ne var<br/>elimizde?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Platform Rehberi", desc: "IG · TikTok · YouTube · Snap", href: "/platformlar", bg: "bg-sky", rotate: "-rotate-1" },
              { title: "16 Soruluk Quiz", desc: "Bilgini test et", href: "/quiz", bg: "bg-mustard", rotate: "rotate-1" },
              { title: "Risk Hesaplayıcı", desc: "10 soruda skor", href: "/risk-hesapla", bg: "bg-mint", rotate: "-rotate-1" },
              { title: "Acil Durum", desc: "Tehlike anı", href: "/acil-durum", bg: "bg-hot text-white", rotate: "rotate-1" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className={`block ${item.rotate} hover:rotate-0 transition-transform`}>
                <div className={`${item.bg} border-2 border-ink p-5 h-full`} style={{ boxShadow: "6px 6px 0 0 #0a0a0a" }}>
                  <div className="text-4xl mb-3 font-display italic font-bold">0{i + 1}</div>
                  <h3 className="font-bold text-base uppercase leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs opacity-70 mb-4">{item.desc}</p>
                  <div className="flex items-center gap-1 text-xs font-bold uppercase">Aç <span>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SORU-CEVAP STRIP ============ */}
      <section className="border-b-2 border-ink py-20 relative overflow-hidden">
        <div className="wrap">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5 md:sticky md:top-24">
              <p className="text-xs font-mono uppercase tracking-widest text-hot mb-3">// Sıkça sorulan</p>
              <h2 className="font-display italic font-bold text-5xl sm:text-6xl leading-none mb-6">
                Soru.<br/>Cevap.
              </h2>
              <div className="w-24 h-1 bg-ink mb-4" />
              <p className="text-sm leading-relaxed text-ink/70">
                Her hafta onlarca ebeveynden aynı soruları alıyoruz. İşte en çok merak edilenler.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 space-y-6">
              {[
                { q: "Çocuğumun telefonunu kontrol etmek doğru mu?", a: "Evet — ama şeffafça. Gizlice değil. Çocuğunuzla birlikte kuralları belirlemek, gizlice takip etmekten çok daha etkili." },
                { q: "Kaç yaşında sosyal medya hesabı açabilir?", a: "Çoğu platform 13 yaş. Ama hazır olup olmadığı sayıdan çok olgunlukla ilgili." },
                { q: "Çocuğum siber zorbalığa uğruyor. Ne yapmalıyım?", a: "Kanıt topla → engelle → bildir → dinle. Detaylı rehber Acil Durum bölümünde." },
              ].map((item, i) => (
                <div key={i} className="brut-card p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="font-display italic font-bold text-4xl text-hot leading-none shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 leading-tight">{item.q}</h3>
                      <p className="text-sm text-ink/70 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA — Poster ============ */}
      <section className="bg-lime border-b-2 border-ink py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display italic text-[25vw] font-bold text-ink/5 whitespace-nowrap">BAŞLA</span>
        </div>
        <div className="wrap relative text-center">
          <p className="text-xs font-mono uppercase tracking-widest mb-6">// Son çağrı</p>
          <h2 className="font-display italic font-bold text-6xl sm:text-8xl md:text-9xl leading-none mb-6">
            Bugün<br/>başlayın.
          </h2>
          <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Ücretsiz. Kart gerekmez. 3 dakikada hazır.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kayit" className="brut-btn bg-ink text-cream text-base px-8 py-4" style={{ boxShadow: "6px 6px 0 0 #ff2e63" }}>
              Kaydol →
            </Link>
            <Link href="/fiyatlandirma" className="brut-btn bg-cream text-ink text-base px-8 py-4" style={{ boxShadow: "6px 6px 0 0 #0a0a0a" }}>
              Planlar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
