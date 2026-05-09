import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — Dijital Evren ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="orb w-[600px] h-[600px] bg-neon-cyan top-20 -left-40 animate-glow-pulse" />
        <div className="orb w-[500px] h-[500px] bg-neon-pink bottom-20 -right-20 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="orb w-[300px] h-[300px] bg-neon-purple top-1/2 left-1/2 -translate-x-1/2 animate-glow-pulse" style={{ animationDelay: "3s" }} />

        {/* Corner decorations */}
        <div className="absolute top-20 left-6 hidden md:block">
          <p className="text-[10px] font-mono text-paper/40 uppercase tracking-[0.3em] vertical-text">
            v3.0 / ONLINE / ESTD 2025
          </p>
        </div>
        <div className="absolute top-20 right-6 hidden md:block text-right font-mono text-[10px] text-paper/40 uppercase tracking-[0.3em]">
          <p>N 41°00&apos;50&quot;</p>
          <p>E 28°57&apos;30&quot;</p>
          <p className="mt-2 text-neon-lime">İSTANBUL</p>
        </div>

        <div className="wrap relative z-10 py-20 w-full">
          {/* Top label bar */}
          <div className="flex items-center gap-4 mb-8 text-[10px] font-mono uppercase tracking-[0.3em] text-paper/60">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
              CANLI
            </span>
            <span>/</span>
            <span>2025.01</span>
            <span>/</span>
            <span className="text-neon-cyan">Aile Dijital Güvenlik Sistemi</span>
          </div>

          {/* Big title */}
          <h1 className="display-text text-[18vw] sm:text-[14vw] md:text-[11vw] text-paper leading-[0.82] mb-8">
            <span className="block">Dijital</span>
            <span className="block">
              <span className="text-gradient">evrende</span>
            </span>
            <span className="block italic">
              güvende.
            </span>
          </h1>

          {/* Subtitle + CTA */}
          <div className="grid grid-cols-12 gap-6 items-end mt-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <p className="text-base sm:text-lg text-paper/70 leading-relaxed">
                Çocuklarınızın sosyal medyada gezindiği dünyayı anlayın. <span className="text-neon-cyan">Riskleri</span> tanıyın,{" "}
                <span className="text-neon-pink">doğru kararları</span> alın. Korkmak yok, bilmek var.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/ebeveyn"
                className="group relative overflow-hidden border border-neon-cyan bg-neon-cyan/5"
              >
                <span className="relative z-10 flex items-center gap-3 px-8 py-4 text-neon-cyan font-mono text-sm uppercase tracking-widest group-hover:text-void transition-colors">
                  <span className="w-2 h-2 bg-neon-cyan" />
                  Ebeveyn Evreni
                  <span>→</span>
                </span>
                <span className="absolute inset-0 bg-neon-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/cocuk"
                className="group relative overflow-hidden border border-neon-pink bg-neon-pink/5"
              >
                <span className="relative z-10 flex items-center gap-3 px-8 py-4 text-neon-pink font-mono text-sm uppercase tracking-widest group-hover:text-void transition-colors">
                  <span className="w-2 h-2 bg-neon-pink" />
                  Çocuk Evreni
                  <span>→</span>
                </span>
                <span className="absolute inset-0 bg-neon-pink translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex items-center gap-3 text-[10px] font-mono text-paper/40 uppercase tracking-[0.3em]">
            <div className="relative w-px h-12 bg-paper/20 overflow-hidden">
              <div className="absolute inset-0 bg-neon-cyan animate-scroll-line" />
            </div>
            KAYDIR / KEŞFET
          </div>
        </div>
      </section>

      {/* ============ TICKER — Hareketli bilgi şeridi ============ */}
      <section className="relative bg-neon-lime text-void border-y border-void overflow-hidden py-5">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="display-text text-2xl">%78 çocuk sosyal medyada</span>
              <span className="text-2xl">✦</span>
              <span className="display-text text-2xl">1 / 3 siber zorbalık</span>
              <span className="text-2xl">◇</span>
              <span className="display-text text-2xl">günlük 4.5 saat ekran</span>
              <span className="text-2xl">✦</span>
              <span className="display-text text-2xl">%65 gizlilik ayarı bilmiyor</span>
              <span className="text-2xl">◇</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ İKİ EVREN — Interactive split ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg-sm opacity-30" />
        <div className="wrap relative">
          <div className="mb-16 max-w-2xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
              / 01 — SEÇİM
            </p>
            <h2 className="display-text text-5xl sm:text-7xl text-paper leading-none">
              Hangi kapıdan<br />
              <span className="text-gradient">girmek istersin?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-steel">
            {/* Ebeveyn */}
            <Link href="/ebeveyn" className="group relative block overflow-hidden border-b md:border-b-0 md:border-r border-steel hover:bg-neon-cyan/[0.03] transition-colors">
              <div className="relative p-8 sm:p-12 min-h-[480px] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-cyan mb-3">
                      / KULLANICI_01
                    </p>
                    <p className="font-mono text-xs text-paper/40 uppercase tracking-widest">
                      EBEVEYN MODU
                    </p>
                  </div>
                  <div className="w-12 h-12 border border-neon-cyan/40 flex items-center justify-center group-hover:border-neon-cyan group-hover:bg-neon-cyan group-hover:text-void transition-all">
                    <span className="text-xl">→</span>
                  </div>
                </div>

                <div className="py-8 flex-1 flex items-center">
                  <h3 className="display-text text-4xl sm:text-5xl lg:text-6xl text-paper leading-[0.9]">
                    Rehber,<br />
                    analiz,<br />
                    <span className="text-neon-cyan">eylem.</span>
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs font-mono uppercase text-paper/50">
                  <div>
                    <p className="text-neon-cyan font-bold text-lg">6</p>
                    <p>Modül</p>
                  </div>
                  <div>
                    <p className="text-neon-cyan font-bold text-lg">4</p>
                    <p>Platform</p>
                  </div>
                  <div>
                    <p className="text-neon-cyan font-bold text-lg">22</p>
                    <p>Kural</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Çocuk */}
            <Link href="/cocuk" className="group relative block overflow-hidden hover:bg-neon-pink/[0.05] transition-colors">
              <div className="relative p-8 sm:p-12 min-h-[480px] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
                      / KULLANICI_02
                    </p>
                    <p className="font-mono text-xs text-paper/40 uppercase tracking-widest">
                      ÇOCUK / GENÇ MODU
                    </p>
                  </div>
                  <div className="w-12 h-12 border border-neon-pink/40 flex items-center justify-center group-hover:border-neon-pink group-hover:bg-neon-pink group-hover:text-void transition-all">
                    <span className="text-xl">→</span>
                  </div>
                </div>

                <div className="py-8 flex-1 flex items-center">
                  <h3 className="display-text text-4xl sm:text-5xl lg:text-6xl text-paper leading-[0.9]">
                    Oyna,<br />
                    öğren,<br />
                    <span className="text-neon-pink">kazan.</span>
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs font-mono uppercase text-paper/50">
                  <div>
                    <p className="text-neon-pink font-bold text-lg">6</p>
                    <p>Kural</p>
                  </div>
                  <div>
                    <p className="text-neon-pink font-bold text-lg">3</p>
                    <p>Senaryo</p>
                  </div>
                  <div>
                    <p className="text-neon-pink font-bold text-lg">16</p>
                    <p>Quiz</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ RAKAMLAR — Dark data ============ */}
      <section className="relative py-24 bg-carbon border-y border-steel overflow-hidden noise">
        <div className="wrap relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
                / 02 — VERİ
              </p>
              <h2 className="display-text text-5xl sm:text-7xl text-paper leading-none">
                Rakamlar<br />
                <span className="text-gradient">yalan söylemez.</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-paper/50 max-w-sm uppercase tracking-wider leading-relaxed">
              Türkiye&apos;deki 7-17 yaş grubundan toplanan son verilere dayanır. Kaynak: Bakanlık + BTK 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-steel">
            {[
              { num: "78", unit: "%", label: "Aktif Çocuk", desc: "sosyal medya platformlarında", color: "text-neon-cyan" },
              { num: "1/3", unit: "", label: "Zorbalığa Maruz", desc: "en az bir kez karşılaşan", color: "text-neon-pink" },
              { num: "4.5", unit: "saat", label: "Günlük Ekran", desc: "ortalama kullanım süresi", color: "text-neon-lime" },
            ].map((stat, i) => (
              <div key={i} className="relative p-8 sm:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-steel group hover:bg-void/50 transition-colors">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper/30 mb-4">
                  / 0{i + 1}
                </p>
                <p className={`display-text text-7xl sm:text-8xl leading-none ${stat.color} mb-4`}>
                  {stat.num}<span className="text-2xl ml-1">{stat.unit}</span>
                </p>
                <p className="font-bold text-paper uppercase text-sm tracking-wider mb-1">{stat.label}</p>
                <p className="text-sm text-paper/50 font-mono">{stat.desc}</p>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-neon-pink opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ARAÇLAR — Interaktif kutular ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="wrap">
          <div className="mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
              / 03 — ARAÇ SETİ
            </p>
            <h2 className="display-text text-5xl sm:text-7xl text-paper leading-none">
              Elinizin<br />
              altında<br />
              <span className="text-neon-lime">her şey.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-steel">
            {[
              { title: "Platform Rehberi", tag: "IG · TikTok · YT · Snap", href: "/platformlar", accent: "neon-cyan", num: "01" },
              { title: "16 Soruluk Quiz", tag: "Bilgini sına", href: "/quiz", accent: "neon-pink", num: "02" },
              { title: "Risk Hesaplayıcı", tag: "10 soruda skor", href: "/risk-hesapla", accent: "neon-lime", num: "03" },
              { title: "Acil Durum", tag: "7/24 yardım", href: "/acil-durum", accent: "neon-amber", num: "04" },
              { title: "Aile Sözleşmesi", tag: "22 kural · yazdır", href: "/sozlesme", accent: "neon-purple", num: "05" },
              { title: "Fiyat Planları", tag: "Free / Pro / Premium", href: "/fiyatlandirma", accent: "neon-cyan", num: "06" },
              { title: "Giriş Yap", tag: "Hesabına dön", href: "/giris", accent: "neon-pink", num: "07" },
              { title: "Kayıt Ol", tag: "Ücretsiz başla", href: "/kayit", accent: "neon-lime", num: "08" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative block p-6 sm:p-8 border-b sm:border-b lg:border-b-0 border-r-0 sm:[&:nth-child(2n+1)]:border-r lg:[&:not(:nth-child(4n))]:border-r border-steel hover:bg-carbon transition-colors min-h-[180px] flex flex-col justify-between"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-mono text-paper/30 tracking-[0.3em]">
                    {item.num}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full bg-${item.accent} opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all`}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display italic text-2xl text-paper leading-tight group-hover:text-gradient transition-all mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-paper/40 uppercase tracking-widest">
                    {item.tag}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-between mt-4">
                  <div className={`h-px flex-1 bg-steel group-hover:bg-${item.accent} transition-colors`} />
                  <span className="ml-3 text-paper/30 group-hover:text-paper group-hover:translate-x-1 transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NASIL ÇALIŞIR — Stepper ============ */}
      <section className="relative py-24 bg-carbon border-y border-steel overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-neon-purple top-0 right-0" />
        <div className="wrap relative">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 md:sticky md:top-24 self-start">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
                / 04 — AKIŞ
              </p>
              <h2 className="display-text text-5xl sm:text-6xl text-paper leading-none mb-6">
                3 adımda<br />
                <span className="text-neon-cyan">güvenlik.</span>
              </h2>
              <p className="text-paper/60 leading-relaxed max-w-md">
                Tek seferlik bir iş değil. Düzenli aralıklarla aile olarak birlikte yapılır.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 space-y-px bg-steel">
              {[
                {
                  n: "01",
                  title: "Kaydol",
                  desc: "Email ile 30 saniyede ücretsiz hesap. Kart gerekmez.",
                },
                {
                  n: "02",
                  title: "Analiz Et",
                  desc: "Risk skorunu hesapla, quiz çöz, platform ayarlarını kontrol et.",
                },
                {
                  n: "03",
                  title: "Uygula",
                  desc: "Aile sözleşmesi oluştur, yazdır, birlikte imzala. Düzenli gözden geçir.",
                },
              ].map((step, i) => (
                <div key={i} className="bg-carbon p-8 group hover:bg-void transition-colors">
                  <div className="flex items-start gap-6">
                    <span className={`display-text text-5xl leading-none ${i === 0 ? "text-neon-cyan" : i === 1 ? "text-neon-pink" : "text-neon-lime"}`}>
                      {step.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-paper mb-2">{step.title}</h3>
                      <p className="text-paper/60 leading-relaxed">{step.desc}</p>
                    </div>
                    <span className="text-paper/30 group-hover:text-paper transition-colors">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SSS ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="wrap">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
            / 05 — SORULAR
          </p>
          <h2 className="display-text text-5xl sm:text-7xl text-paper leading-none mb-16">
            Merak ettikleriniz.
          </h2>

          <div className="space-y-px bg-steel border border-steel">
            {[
              { q: "Çocuğumun telefonunu kontrol etmek doğru mu?", a: "Evet — ama şeffafça. Gizlice takip etmek güveni zedeler. Kuralları birlikte belirleyin, denetlediğinizi söyleyin." },
              { q: "Kaç yaşında sosyal medya hesabı açabilir?", a: "Çoğu platformun minimum yaş sınırı 13'tür. Ama asıl soru yaşı değil — hazır olup olmadığı." },
              { q: "Siber zorbalık durumunda ne yapmalıyım?", a: "Kanıt topla (ekran görüntüsü) → platformda bildir → kişiyi engelle → çocuğu dinle → gerekirse ALO 182." },
              { q: "Ekran süresi kaç saat olmalı?", a: "Yaşa göre değişir. 6-12 yaş: max 1-2 saat, 13-17 yaş: max 2-3 saat. Nitelik niceliktten önemli." },
            ].map((item, i) => (
              <details key={i} className="group bg-void">
                <summary className="cursor-pointer p-6 sm:p-8 flex items-center justify-between gap-4 hover:bg-carbon transition-colors list-none">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-xs font-mono text-neon-pink tracking-widest">0{i + 1}</span>
                    <span className="font-bold text-lg sm:text-xl text-paper">{item.q}</span>
                  </div>
                  <span className="text-paper/40 group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 sm:px-8 pb-8 pl-12 sm:pl-16 text-paper/60 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-32 overflow-hidden border-t border-steel">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="orb w-[600px] h-[600px] bg-neon-lime top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="display-text text-[25vw] text-paper/[0.03] whitespace-nowrap">BAŞLA</span>
        </div>

        <div className="wrap relative text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-lime mb-6">
            / FİNAL — HAREKETE GEÇ
          </p>
          <h2 className="display-text text-6xl sm:text-8xl md:text-9xl text-paper leading-none mb-8">
            Bugün başla.<br />
            <span className="text-gradient">Yarın değil.</span>
          </h2>
          <p className="text-paper/60 text-lg max-w-xl mx-auto mb-12">
            30 saniyede hesap. Kart gerekmez. İstediğin zaman vazgeç.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-stretch border border-neon-lime">
            <Link
              href="/kayit"
              className="group relative px-10 py-5 text-neon-lime font-mono text-sm uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-void transition-colors">
                Ücretsiz Kaydol →
              </span>
              <span className="absolute inset-0 bg-neon-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="/fiyatlandirma"
              className="px-10 py-5 text-paper font-mono text-sm uppercase tracking-widest hover:bg-paper/5 transition-colors border-t sm:border-t-0 sm:border-l border-neon-lime"
            >
              Planlar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
