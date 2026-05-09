import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çocuk Evreni — Arcade",
  description: "Sosyal medyada güvenlik — oyun gibi eğlenceli.",
};

const rules = [
  { n: "01", icon: "🔒", title: "Kişisel bilgini paylaşma", desc: "Ad, adres, okul, telefon — asla.", color: "neon-pink" },
  { n: "02", icon: "👽", title: "Tanımadığına güvenme", desc: "Tatlı sözlere kanma, yetişkine söyle.", color: "neon-cyan" },
  { n: "03", icon: "📸", title: "Fotoğrafına dikkat", desc: "Bir kez paylaşılan, hep kalır.", color: "neon-lime" },
  { n: "04", icon: "💜", title: "Nazik ol", desc: "Ekran arkasında da insan var.", color: "neon-purple" },
  { n: "05", icon: "🆘", title: "Yardım iste", desc: "Korktun mu? Hemen söyle, gizleme.", color: "neon-amber" },
  { n: "06", icon: "⏰", title: "Ekrandan uzaklaş", desc: "Hayat dışarıda, telefon içeride.", color: "neon-pink" },
];

const scenarios = [
  {
    title: "Yabancı bir mesaj geldi",
    question: "Tanımadığın biri 'Merhaba, arkadaş olalım mı?' diyor. Ne yaparsın?",
    good: "Cevap vermem, bir yetişkine söylerim.",
    bad: "Sohbete başlarım, zararsız gibi.",
  },
  {
    title: "Fotoğraf istediler",
    question: "Birisi 'Fotoğraf at' diyor. Ne yaparsın?",
    good: "Hayır derim ve aileme söylerim.",
    bad: "Gönderirim, ne olacak ki.",
  },
  {
    title: "Kötü yorumlar",
    question: "Paylaşımıma sürekli kötü yazıyorlar. Ne yaparsın?",
    good: "Engeller, kanıt alırım, yetişkine söylerim.",
    bad: "Kavga eder, ben de kötü yazarım.",
  },
];

export default function CocukPage() {
  return (
    <>
      {/* ============ HERO — Arcade ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="orb w-[600px] h-[600px] bg-neon-pink top-0 -right-20 animate-glow-pulse" />
        <div className="orb w-[400px] h-[400px] bg-neon-lime bottom-0 -left-20 animate-glow-pulse" style={{ animationDelay: "2s" }} />

        {/* Floating emojis */}
        <div className="absolute top-32 right-8 text-6xl animate-float hidden md:block">🎮</div>
        <div className="absolute bottom-32 left-10 text-5xl animate-float hidden md:block" style={{ animationDelay: "1s" }}>⭐</div>
        <div className="absolute top-1/2 right-20 text-4xl animate-float hidden md:block" style={{ animationDelay: "2s" }}>💎</div>

        <div className="wrap relative z-10 py-20 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-neon-pink text-neon-pink text-[10px] font-mono uppercase tracking-[0.3em]">
              <span className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
              LEVEL 1 • ONLINE
            </span>
            <span className="font-mono text-xs text-paper/40">
              7-17 YAŞ
            </span>
          </div>

          <h1 className="display-text leading-[0.82] text-paper">
            <span className="block text-[18vw] sm:text-[13vw] md:text-[10vw]">Seni</span>
            <span className="block text-[18vw] sm:text-[13vw] md:text-[10vw] text-neon-pink">evrende</span>
            <span className="block text-[18vw] sm:text-[13vw] md:text-[10vw]">koruyor.</span>
          </h1>

          <p className="mt-8 max-w-xl text-paper/70 text-lg leading-relaxed">
            İnternet kocaman bir oyun alanı. Bazı yerleri süper, bazıları tuzaklı. Kuralları öğren, skor yap, <span className="text-neon-lime">güvende kal.</span>
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="group relative overflow-hidden inline-block"
            >
              <span className="relative z-10 block px-8 py-4 bg-neon-lime text-void font-bold text-sm uppercase tracking-widest">
                🎮 Quiz&apos;e Başla
              </span>
              <span className="absolute inset-0 bg-neon-pink translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center px-8 py-4 text-void font-bold text-sm uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                ⚡ Hadi!
              </span>
            </Link>
            <a href="#kurallar" className="inline-block px-8 py-4 border border-paper/30 text-paper font-bold text-sm uppercase tracking-widest hover:border-neon-pink hover:text-neon-pink transition-colors">
              Kuralları Gör ↓
            </a>
          </div>

          {/* Game stats */}
          <div className="mt-20 grid grid-cols-3 gap-px bg-steel border border-steel max-w-xl">
            {[
              { k: "Kural", v: "6", c: "neon-pink" },
              { k: "Senaryo", v: "3", c: "neon-cyan" },
              { k: "Soru", v: "16", c: "neon-lime" },
            ].map((s, i) => (
              <div key={i} className="bg-void p-4 text-center">
                <p className={`display-text text-4xl text-${s.c} leading-none mb-1`}>{s.v}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-paper/40">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ KURALLAR — Arcade kartlar ============ */}
      <section id="kurallar" className="relative py-24 border-t border-steel overflow-hidden">
        <div className="wrap">
          <div className="mb-16 text-center">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
              / 6 ALTIN KURAL / EZBERLE
            </p>
            <h2 className="display-text text-5xl sm:text-7xl text-paper leading-none">
              Hayat kurtaran<br />
              <span className="text-gradient">kurallar.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rules.map((r, i) => (
              <div
                key={r.n}
                className={`group relative p-8 bg-carbon border border-steel hover:border-${r.color} transition-all hover:-translate-y-1 overflow-hidden`}
              >
                {/* Number watermark */}
                <span className={`absolute -top-4 -right-2 display-text text-9xl text-${r.color}/10 leading-none pointer-events-none`}>
                  {r.n}
                </span>

                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform origin-left">
                    {r.icon}
                  </div>
                  <p className={`text-[10px] font-mono uppercase tracking-[0.3em] text-${r.color} mb-2`}>
                    KURAL / {r.n}
                  </p>
                  <h3 className="font-bold text-xl text-paper mb-2 leading-tight">{r.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SENARYOLAR — İnteraktif ============ */}
      <section className="relative py-24 bg-carbon border-y border-steel overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-neon-cyan top-20 right-0" />

        <div className="wrap relative">
          <div className="mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-lime mb-3">
              / SENARYO / NE YAPARDIN?
            </p>
            <h2 className="display-text text-5xl sm:text-6xl text-paper leading-none">
              Gerçek anlar.<br />
              <span className="text-neon-pink">Gerçek seçimler.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-void border border-steel p-8 hover:border-neon-lime transition-colors">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-3">
                    <p className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest mb-2">
                      SENARYO / 0{i + 1}
                    </p>
                    <h3 className="font-bold text-xl text-paper leading-tight">{s.title}</h3>
                  </div>

                  <div className="col-span-12 md:col-span-9">
                    <p className="text-lg text-paper/90 mb-6 leading-relaxed">&ldquo;{s.question}&rdquo;</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="group relative p-5 border border-neon-lime/40 bg-neon-lime/5 hover:bg-neon-lime/10 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 bg-neon-lime text-void flex items-center justify-center font-bold text-xs">✓</span>
                          <span className="text-xs font-mono uppercase tracking-widest text-neon-lime">DOĞRU</span>
                        </div>
                        <p className="text-sm text-paper">{s.good}</p>
                      </div>
                      <div className="group relative p-5 border border-neon-pink/40 bg-neon-pink/5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 bg-neon-pink text-void flex items-center justify-center font-bold text-xs">✕</span>
                          <span className="text-xs font-mono uppercase tracking-widest text-neon-pink">YANLIŞ</span>
                        </div>
                        <p className="text-sm text-paper">{s.bad}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="orb w-[500px] h-[500px] bg-neon-lime top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />

        <div className="wrap relative text-center">
          <p className="text-6xl mb-6">🏆</p>
          <h2 className="display-text text-5xl sm:text-7xl text-paper leading-none mb-6">
            Hazır mısın?
          </h2>
          <p className="text-paper/70 text-lg max-w-md mx-auto mb-10">
            16 soruluk quiz seni bekliyor. Ne kadar biliyorsun, görelim!
          </p>
          <Link
            href="/quiz"
            className="group relative inline-block overflow-hidden"
          >
            <span className="relative z-10 block px-10 py-5 bg-neon-pink text-void font-bold text-base uppercase tracking-widest">
              Quiz&apos;e Başla →
            </span>
            <span className="absolute inset-0 bg-neon-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </>
  );
}
