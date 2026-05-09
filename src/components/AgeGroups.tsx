"use client";

import { useState } from "react";

const groups = [
  {
    key: "early",
    label: "6–9 yaş",
    headline: "Keşif dönemi",
    points: [
      "Günlük 1 saat ekran yeter",
      "Birlikte izleyin, birlikte oynayın",
      "YouTube Kids tercih edin",
      "Parola sizin elinizde olsun",
    ],
    signal: "İlk karşılaşmaları siz yönetiyorsunuz.",
  },
  {
    key: "mid",
    label: "10–12 yaş",
    headline: "Geçiş yaşı",
    points: [
      "Ekran süresini 2 saat ile sınırlayın",
      "İlk sosyal medya hesaplarını birlikte açın",
      "Gizlilik ayarlarını tek tek gezin",
      "DM kurallarını konuşun",
    ],
    signal: "Tartışmaya en açık oldukları dönem.",
  },
  {
    key: "teen",
    label: "13–17 yaş",
    headline: "Özerklik çağı",
    points: [
      "Kontrolden güvene geçiş yapın",
      "'Her zaman dinliyorum' mesajı verin",
      "Ekran süresi değil; içerik kalitesi",
      "Çevrimiçi kimlik üzerine konuşun",
    ],
    signal: "Gizlemek istediklerini değil; açamadıklarını dinleyin.",
  },
];

export default function AgeGroups() {
  const [active, setActive] = useState("mid");
  const current = groups.find((g) => g.key === active)!;

  return (
    <div>
      <div className="flex gap-1 p-1 bg-sand border border-line rounded-full w-fit mb-8">
        {groups.map((g) => (
          <button
            key={g.key}
            onClick={() => setActive(g.key)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              active === g.key
                ? "bg-ink text-paper"
                : "text-muted hover:text-ink"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <h3 className="display-text text-4xl sm:text-5xl text-ink mb-4">
            {current.headline}.
          </h3>
          <p className="text-muted leading-relaxed mb-6">{current.signal}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-full text-xs text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {current.label}
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-line border-y border-line">
            {current.points.map((p, i) => (
              <li key={i} className="py-4 flex items-start gap-4 text-ink">
                <span className="text-muted font-mono text-sm shrink-0 w-6">
                  0{i + 1}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
