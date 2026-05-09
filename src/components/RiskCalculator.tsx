"use client";

import { useState } from "react";

const questions = [
  { id: "1", text: "Çocuğunuzun sosyal medya hesabı hangi modda?", options: [{ label: "Gizli", score: 0 }, { label: "Açık", score: 3 }, { label: "Bilmiyorum", score: 2 }] },
  { id: "2", text: "Şifre güvenliği nasıl?", options: [{ label: "Güçlü + 2FA", score: 0 }, { label: "Güçlü, 2FA yok", score: 1 }, { label: "Zayıf", score: 3 }] },
  { id: "3", text: "Tanımadığı kişilerden mesaj alabiliyor mu?", options: [{ label: "Hayır", score: 0 }, { label: "Evet", score: 3 }, { label: "Bilmiyorum", score: 2 }] },
  { id: "4", text: "Konum paylaşımı açık mı?", options: [{ label: "Kapalı", score: 0 }, { label: "Arkadaşlarla", score: 1 }, { label: "Herkesle", score: 3 }] },
  { id: "5", text: "Profilde kişisel bilgi var mı?", options: [{ label: "Hayır", score: 0 }, { label: "Okul adı var", score: 2 }, { label: "Birden fazla", score: 3 }] },
  { id: "6", text: "Günlük ekran süresi?", options: [{ label: "1 saatten az", score: 0 }, { label: "1-2 saat", score: 1 }, { label: "4+ saat", score: 3 }] },
  { id: "7", text: "Ebeveyn kontrol aracı kullanıyor musunuz?", options: [{ label: "Evet", score: 0 }, { label: "Hayır", score: 2 }, { label: "Bilmiyordum", score: 3 }] },
  { id: "8", text: "Dijital güvenlik hakkında konuşuyor musunuz?", options: [{ label: "Düzenli", score: 0 }, { label: "Nadir", score: 2 }, { label: "Hiç", score: 3 }] },
  { id: "9", text: "Fotoğraf paylaşım alışkanlığı?", options: [{ label: "Nadir", score: 0 }, { label: "Sadece arkadaşlarla", score: 1 }, { label: "Sık, herkesle", score: 3 }] },
  { id: "10", text: "Kaç platform kullanıyor?", options: [{ label: "1-2", score: 0 }, { label: "3-4", score: 1 }, { label: "5+", score: 3 }] },
];

export default function RiskCalculator() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (score: number) => {
    const next = [...answers, score];
    setAnswers(next);
    if (current < questions.length - 1) setCurrent(current + 1);
    else setDone(true);
  };

  const reset = () => { setCurrent(0); setAnswers([]); setDone(false); };

  if (done) {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = questions.length * 3;
    const pct = Math.round((total / max) * 100);
    const level = pct <= 25 ? "Düşük" : pct <= 50 ? "Orta" : pct <= 75 ? "Yüksek" : "Kritik";
    const color = pct <= 25 ? "text-green-600" : pct <= 50 ? "text-yellow-600" : pct <= 75 ? "text-orange-600" : "text-red-600";

    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
        <p className="text-sm text-gray-500 mb-2">Risk Seviyeniz</p>
        <p className={`text-5xl font-bold mb-2 ${color}`}>{pct}%</p>
        <p className={`text-lg font-semibold mb-6 ${color}`}>{level}</p>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          {pct <= 25 ? "Tebrikler, güvenlik önlemleriniz iyi durumda." : pct <= 50 ? "Birkaç iyileştirme ile güvenliğinizi artırabilirsiniz." : "Acil olarak güvenlik ayarlarını gözden geçirmeniz gerekiyor."}
        </p>
        <button onClick={reset} className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors">
          Tekrar Hesapla
        </button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <span>Soru {current + 1}/{questions.length}</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6">
        <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-5">{q.text}</h3>
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt.score)} className="w-full text-left px-5 py-3.5 rounded-xl border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors text-sm font-medium text-gray-700">
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
