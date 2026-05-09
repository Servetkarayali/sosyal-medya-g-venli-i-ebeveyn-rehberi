"use client";

import { useState } from "react";

type Props = {
  num: string;
  question: string;
  good: string;
  bad: string;
  explanation: string;
};

export default function ScenarioCard({ num, question, good, bad, explanation }: Props) {
  const [revealed, setRevealed] = useState<"good" | "bad" | null>(null);

  return (
    <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8">
      <div className="flex items-start justify-between mb-4 gap-4">
        <p className="eyebrow">Senaryo {num}</p>
        {revealed && (
          <button
            onClick={() => setRevealed(null)}
            className="text-xs text-muted hover:text-ink transition-colors"
          >
            ↺ Sıfırla
          </button>
        )}
      </div>

      <p className="text-lg sm:text-xl text-ink mb-6 italic">&ldquo;{question}&rdquo;</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => setRevealed("good")}
          disabled={revealed !== null}
          className={`text-left p-4 rounded-xl border transition-all ${
            revealed === "good"
              ? "border-accent bg-accent/5"
              : revealed === "bad"
              ? "border-line opacity-50"
              : "border-line hover:border-ink cursor-pointer"
          }`}
        >
          <p className="text-sm text-ink">{good}</p>
          {revealed === "good" && (
            <p className="mt-2 text-xs text-accent font-medium">✓ Doğru seçim</p>
          )}
        </button>

        <button
          onClick={() => setRevealed("bad")}
          disabled={revealed !== null}
          className={`text-left p-4 rounded-xl border transition-all ${
            revealed === "bad"
              ? "border-coral bg-coral/5"
              : revealed === "good"
              ? "border-line opacity-50"
              : "border-line hover:border-ink cursor-pointer"
          }`}
        >
          <p className="text-sm text-ink">{bad}</p>
          {revealed === "bad" && (
            <p className="mt-2 text-xs text-coral font-medium">× Daha iyisi var</p>
          )}
        </button>
      </div>

      {revealed && (
        <div className="mt-4 p-4 bg-sand/60 rounded-xl text-sm text-ink/80 leading-relaxed">
          <span className="font-medium">Neden?</span> {explanation}
        </div>
      )}
    </div>
  );
}
