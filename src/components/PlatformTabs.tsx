"use client";

import { useState } from "react";

type Platform = {
  key: string;
  name: string;
  color: string;
  age: string;
  risks: string[];
  actions: string[];
  note: string;
};

const platforms: Platform[] = [
  {
    key: "instagram",
    name: "Instagram",
    color: "#E1306C",
    age: "13+",
    risks: [
      "Beden imgesi baskısı",
      "Yabancıların DM'leri",
      "Hikayede konum ifşası",
    ],
    actions: [
      "Hesabı 'Gizli' yapın",
      "Mesajları yalnızca takip edilen kişilerden alın",
      "Etiket onayını açın",
      "Sensitive Content Control → Az göster",
    ],
    note: "Meta Family Center üzerinden denetim kurabilirsiniz.",
  },
  {
    key: "tiktok",
    name: "TikTok",
    color: "#ff2daf",
    age: "13+",
    risks: [
      "Sonsuz kaydırma / bağımlılık",
      "Challenge tehlikeleri",
      "Yaş dışı içerik akışı",
    ],
    actions: [
      "Family Pairing ile hesabı bağlayın",
      "Restricted Mode'u açın",
      "Günlük ekran süresi belirleyin",
      "DM'leri 'Friends only' yapın",
    ],
    note: "Family Pairing özelliği ebeveyn kontrolünü merkezde toplar.",
  },
  {
    key: "youtube",
    name: "YouTube",
    color: "#FF0000",
    age: "13+ (Kids: 0-12)",
    risks: [
      "Uygunsuz öneri algoritması",
      "Otomatik oynatma",
      "Yorumlar",
    ],
    actions: [
      "12 yaş altı için YouTube Kids kullanın",
      "Supervised Account kurun",
      "Otomatik oynatmayı kapatın",
      "Yorumları filtreleyin",
    ],
    note: "Google Family Link ile tüm Google hizmetlerini yönetin.",
  },
  {
    key: "snapchat",
    name: "Snapchat",
    color: "#FFFC00",
    age: "13+",
    risks: [
      "Snap Map ile konum paylaşımı",
      "'Kaybolan' mesaj yanılsaması",
      "Yabancılarla tanışma",
    ],
    actions: [
      "Snap Map'te 'Ghost Mode' açın",
      "'Contact Me' → Arkadaşlar",
      "Quick Add'i kapatın",
      "Family Center ile bağlayın",
    ],
    note: "Snap Family Center hesap bağlantısı 13-18 yaş için uygundur.",
  },
];

export default function PlatformTabs() {
  const [active, setActive] = useState(platforms[0].key);
  const current = platforms.find((p) => p.key === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {platforms.map((p) => {
          const isActive = active === p.key;
          return (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                isActive
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-muted border-line hover:border-ink hover:text-ink"
              }`}
              aria-pressed={isActive}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: mockup */}
        <div className="lg:col-span-5">
          <div className="mock-window">
            <div className="mock-header">
              <span className="mock-dot" />
              <span className="mock-dot" />
              <span className="mock-dot" />
              <span className="ml-3 text-[10px] font-mono text-muted truncate">
                {current.name.toLowerCase()}.com / ayarlar
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl shrink-0"
                  style={{ background: current.color }}
                />
                <div>
                  <p className="font-medium text-ink">{current.name}</p>
                  <p className="text-xs text-muted">Minimum yaş: {current.age}</p>
                </div>
              </div>

              <div className="h-px bg-line my-4" />

              <div className="space-y-2.5">
                {current.actions.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2.5 bg-sand/60 rounded-lg text-sm"
                  >
                    <span className="text-ink/80 truncate pr-2">{a}</span>
                    <span className="w-8 h-4 rounded-full bg-accent/20 flex items-center px-0.5 shrink-0">
                      <span className="w-3 h-3 rounded-full bg-accent ml-auto" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: details */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <p className="eyebrow mb-2">Platform</p>
            <h3 className="display-text text-3xl sm:text-4xl text-ink">
              {current.name}{" "}
              <span className="text-muted text-xl">— {current.age}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <div>
              <p className="eyebrow mb-3">Başlıca riskler</p>
              <ul className="space-y-2">
                {current.risks.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                    <span className="text-coral shrink-0 mt-0.5">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Önerilen adımlar</p>
              <ul className="space-y-2">
                {current.actions.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
                    <span className="text-accent shrink-0 mt-0.5">✓</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl text-sm text-ink/80 leading-relaxed">
            <span className="font-medium text-accent">İpucu.</span> {current.note}
          </div>
        </div>
      </div>
    </div>
  );
}
