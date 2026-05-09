"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: string;
  text: string;
  category: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: "account_privacy",
    text: "Çocuğunuzun sosyal medya hesabı hangi modda?",
    category: "Gizlilik",
    options: [
      { label: "Gizli (Private)", score: 0 },
      { label: "Açık (Public)", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
  {
    id: "password_strength",
    text: "Çocuğunuzun şifre güvenliği nasıl?",
    category: "Güvenlik",
    options: [
      { label: "Güçlü şifre + 2FA aktif", score: 0 },
      { label: "Güçlü şifre, 2FA yok", score: 1 },
      { label: "Zayıf/basit şifre", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
  {
    id: "stranger_contact",
    text: "Çocuğunuz tanımadığı kişilerden mesaj alabiliyor mu?",
    category: "İletişim",
    options: [
      { label: "Hayır, mesajlar kısıtlı", score: 0 },
      { label: "Evet, herkes yazabilir", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
  {
    id: "location_sharing",
    text: "Konum paylaşımı açık mı?",
    category: "Gizlilik",
    options: [
      { label: "Tamamen kapalı", score: 0 },
      { label: "Sadece arkadaşlarla", score: 1 },
      { label: "Herkesle açık", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
  {
    id: "personal_info",
    text: "Profilinde kişisel bilgiler (okul, telefon, adres) var mı?",
    category: "Gizlilik",
    options: [
      { label: "Hayır, hiçbiri yok", score: 0 },
      { label: "Okul adı var", score: 2 },
      { label: "Birden fazla kişisel bilgi var", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
  {
    id: "screen_time",
    text: "Günlük ekran süresi ne kadar?",
    category: "Kullanım",
    options: [
      { label: "1 saatten az", score: 0 },
      { label: "1-2 saat", score: 1 },
      { label: "2-4 saat", score: 2 },
      { label: "4 saatten fazla", score: 3 },
    ],
  },
  {
    id: "parental_control",
    text: "Ebeveyn kontrol aracı kullanıyor musunuz?",
    category: "Denetim",
    options: [
      { label: "Evet, aktif olarak", score: 0 },
      { label: "Kurulu ama takip etmiyorum", score: 1 },
      { label: "Hayır, kullanmıyorum", score: 2 },
      { label: "Böyle bir şey olduğunu bilmiyordum", score: 3 },
    ],
  },
  {
    id: "communication",
    text: "Çocuğunuzla dijital güvenlik hakkında konuşuyor musunuz?",
    category: "İletişim",
    options: [
      { label: "Düzenli olarak konuşuyoruz", score: 0 },
      { label: "Ara sıra konuşuyoruz", score: 1 },
      { label: "Çok nadir", score: 2 },
      { label: "Hiç konuşmadık", score: 3 },
    ],
  },
  {
    id: "photo_sharing",
    text: "Çocuğunuz fotoğraf/video paylaşım alışkanlığı nasıl?",
    category: "İçerik",
    options: [
      { label: "Çok nadir ve kontrollü", score: 0 },
      { label: "Sadece yakın arkadaşlarla", score: 1 },
      { label: "Sık sık herkesle paylaşıyor", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
  {
    id: "platforms_count",
    text: "Çocuğunuz kaç farklı sosyal medya platformu kullanıyor?",
    category: "Kullanım",
    options: [
      { label: "1-2 platform", score: 0 },
      { label: "3-4 platform", score: 1 },
      { label: "5 veya daha fazla", score: 3 },
      { label: "Bilmiyorum", score: 2 },
    ],
  },
];

function getRiskLevel(score: number, maxScore: number) {
  const percentage = (score / maxScore) * 100;
  if (percentage <= 20) return { level: "Düşük", color: "emerald", emoji: "🟢", message: "Tebrikler! Çocuğunuzun dijital güvenliği iyi durumda. Mevcut önlemleri sürdürmeye devam edin." };
  if (percentage <= 40) return { level: "Orta-Düşük", color: "teal", emoji: "🟡", message: "İyi bir başlangıç! Birkaç küçük iyileştirme ile güvenlik seviyenizi yükseltebilirsiniz." };
  if (percentage <= 60) return { level: "Orta", color: "amber", emoji: "🟠", message: "Dikkat edilmesi gereken alanlar var. Aşağıdaki önerileri uygulamanız faydalı olacaktır." };
  if (percentage <= 80) return { level: "Yüksek", color: "orange", emoji: "🔴", message: "Risk seviyesi yüksek! Acil olarak güvenlik önlemlerini gözden geçirmeniz gerekiyor." };
  return { level: "Kritik", color: "red", emoji: "🚨", message: "Acil müdahale gerekli! Çocuğunuzun dijital güvenliği ciddi risk altında." };
}

export default function RiskCalculator() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetCalculator = () => {
    setCurrentQ(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const riskInfo = getRiskLevel(totalScore, maxScore);
  const percentage = Math.round((totalScore / maxScore) * 100);

  if (isFinished) {
    // Category analysis
    const categories: Record<string, { total: number; count: number }> = {};
    questions.forEach((q, i) => {
      if (!categories[q.category]) categories[q.category] = { total: 0, count: 0 };
      categories[q.category].total += answers[i];
      categories[q.category].count += 1;
    });

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-10"
      >
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{riskInfo.emoji}</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Risk Analizi Sonucu</h2>
          <p className="text-gray-600">Dijital güvenlik risk seviyeniz</p>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" stroke="#e5e7eb" strokeWidth="10" fill="none" />
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke={percentage <= 20 ? "#10b981" : percentage <= 40 ? "#14b8a6" : percentage <= 60 ? "#f59e0b" : percentage <= 80 ? "#f97316" : "#ef4444"}
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${(percentage / 100) * 327} 327`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-gray-900">{percentage}%</span>
              <span className="text-xs text-gray-500 font-medium">Risk</span>
            </div>
          </div>
        </div>

        {/* Risk Level Badge */}
        <div className="text-center mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
            percentage <= 20 ? "bg-emerald-100 text-emerald-800" :
            percentage <= 40 ? "bg-teal-100 text-teal-800" :
            percentage <= 60 ? "bg-amber-100 text-amber-800" :
            percentage <= 80 ? "bg-orange-100 text-orange-800" :
            "bg-red-100 text-red-800"
          }`}>
            Risk Seviyesi: {riskInfo.level}
          </span>
        </div>

        <p className="text-center text-gray-600 mb-8 max-w-lg mx-auto">{riskInfo.message}</p>

        {/* Category Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Kategori Bazlı Analiz</h3>
          <div className="space-y-3">
            {Object.entries(categories).map(([category, data]) => {
              const catPercentage = Math.round((data.total / (data.count * 3)) * 100);
              return (
                <div key={category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                    <span className="text-xs font-bold text-gray-500">{catPercentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        catPercentage <= 33 ? "bg-emerald-500" : catPercentage <= 66 ? "bg-amber-500" : "bg-red-500"
                      }`}
                      style={{ width: `${catPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-blue-50 rounded-2xl p-5 mb-8 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            Öneriler
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            {percentage > 20 && <li className="flex items-start gap-2"><span>•</span>Hesap gizlilik ayarlarını kontrol edin ve "Gizli" moda alın.</li>}
            {percentage > 30 && <li className="flex items-start gap-2"><span>•</span>İki faktörlü doğrulamayı (2FA) aktifleştirin.</li>}
            {percentage > 40 && <li className="flex items-start gap-2"><span>•</span>Çocuğunuzla düzenli dijital güvenlik sohbetleri yapın.</li>}
            {percentage > 50 && <li className="flex items-start gap-2"><span>•</span>Ebeveyn kontrol aracı kullanmaya başlayın.</li>}
            {percentage > 60 && <li className="flex items-start gap-2"><span>•</span>Konum paylaşımını tamamen kapatın.</li>}
            {percentage > 70 && <li className="flex items-start gap-2"><span>•</span>Profildeki kişisel bilgileri kaldırın.</li>}
            {percentage > 80 && <li className="flex items-start gap-2"><span>•</span>Platform sayısını azaltın ve ekran süresini kısıtlayın.</li>}
            <li className="flex items-start gap-2"><span>•</span>Ebeveyn Rehberi bölümümüzü inceleyerek detaylı bilgi edinin.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetCalculator}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Tekrar Hesapla
          </button>
          <a
            href="/ebeveyn"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
          >
            Rehbere Git
          </a>
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Soru {currentQ + 1} / {questions.length}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {question.category}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            {question.text}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-medium text-gray-700">{option.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
