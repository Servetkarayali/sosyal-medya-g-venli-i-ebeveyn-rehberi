"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Free",
    subtitle: "Başlangıç",
    price: { monthly: 0, yearly: 0 },
    description: "Temel güvenlik bilgilerine ücretsiz erişim",
    color: "gray",
    gradient: "from-gray-500 to-gray-700",
    badge: null,
    features: [
      { text: "Ana sayfa ve genel bilgiler", included: true },
      { text: "3 quiz sorusuna erişim", included: true },
      { text: "Temel güvenlik ipuçları", included: true },
      { text: "Acil durum yardım hatları", included: true },
      { text: "Platform rehberleri (kısıtlı)", included: true },
      { text: "Risk hesaplayıcı", included: false },
      { text: "Aile sözleşmesi oluşturucu", included: false },
      { text: "Detaylı platform rehberleri", included: false },
      { text: "Haftalık güvenlik raporu", included: false },
      { text: "1-1 uzman danışmanlık", included: false },
    ],
    cta: "Ücretsiz Başla",
    ctaStyle: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50",
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Popüler",
    price: { monthly: 49, yearly: 39 },
    description: "Aileniz için kapsamlı dijital güvenlik",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    badge: "En Popüler",
    features: [
      { text: "Free planın tüm özellikleri", included: true },
      { text: "16 quiz sorusunun tamamı", included: true },
      { text: "Risk hesaplayıcı (tam erişim)", included: true },
      { text: "Aile sözleşmesi oluşturucu", included: true },
      { text: "4 platform detaylı rehber", included: true },
      { text: "Haftalık güvenlik önerileri (e-posta)", included: true },
      { text: "Çocuk yaş grubuna özel içerik", included: true },
      { text: "Reklamsız deneyim", included: true },
      { text: "1-1 uzman danışmanlık", included: false },
      { text: "Okul/kurum lisansı", included: false },
    ],
    cta: "Pro'ya Geç",
    ctaStyle: "gradient-primary text-white shadow-lg shadow-blue-500/30 hover:shadow-xl",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Tam Koruma",
    price: { monthly: 99, yearly: 79 },
    description: "Uzman desteği ile tam dijital güvenlik",
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
    badge: "Tam Erişim",
    features: [
      { text: "Pro planın tüm özellikleri", included: true },
      { text: "1-1 uzman danışmanlık (aylık 2 seans)", included: true },
      { text: "Kişiselleştirilmiş güvenlik raporu", included: true },
      { text: "Çocuk hesap denetim asistanı", included: true },
      { text: "Acil durum öncelikli destek hattı", included: true },
      { text: "Yeni tehdit bildirimleri (anlık)", included: true },
      { text: "Okul sunumu materyalleri", included: true },
      { text: "Aile webinarlarına erişim", included: true },
      { text: "Özel Telegram/WhatsApp grubu", included: true },
      { text: "Okul/kurum toplu lisans indirimi", included: true },
    ],
    cta: "Premium'a Geç",
    ctaStyle: "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl",
  },
];

const faqs = [
  { q: "Planımı sonra yükseltebilir miyim?", a: "Evet! İstediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Fark kalan süreye oranlanarak hesaplanır." },
  { q: "İptal etmek istersem ne olur?", a: "İstediğiniz zaman iptal edebilirsiniz. Ödeme döneminin sonuna kadar erişiminiz devam eder. İade politikamız 14 gün içinde tam iade garantisi sunar." },
  { q: "Kaç cihazda kullanabilirim?", a: "Pro plan 3 cihaza, Premium plan sınırsız cihaza erişim sunar. Free plan 1 cihazla sınırlıdır." },
  { q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?", a: "Kredi kartı (Visa, Mastercard, Amex), banka kartı, ve Iyzico ile güvenli ödeme kabul ediyoruz." },
];

export default function FiyatlandirmaPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">💎</span>
            Fiyatlandırma
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Aileniz İçin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Doğru Plan
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Çocuğunuzun dijital güvenliğini sağlamak için ihtiyacınıza uygun planı seçin. Tüm planlar 14 gün ücretsiz deneme sunar.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>Aylık</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? "bg-blue-600" : "bg-gray-300"}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${isYearly ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Yıllık <span className="text-emerald-600 font-bold">(%20 indirim)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl border-2 p-8 transition-all hover:shadow-xl ${
                  plan.id === "pro" ? "border-blue-300 shadow-lg scale-105 md:scale-105" : "border-gray-200"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-xs font-bold shadow-md`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white">
                      {plan.id === "free" ? "🆓" : plan.id === "pro" ? "⚡" : "👑"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price.monthly === 0 ? "₺0" : `₺${isYearly ? plan.price.yearly : plan.price.monthly}`}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-500 text-sm">/ay</span>
                    )}
                  </div>
                  {plan.price.monthly === 0 ? (
                    <p className="text-sm text-gray-500 mt-1">Sonsuza kadar ücretsiz</p>
                  ) : isYearly ? (
                    <p className="text-sm text-emerald-600 mt-1">
                      Yıllık ₺{plan.price.yearly * 12} (₺{(plan.price.monthly - plan.price.yearly) * 12} tasarruf)
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500 mt-1">Yıllık faturalamada ₺{plan.price.yearly}/ay</p>
                  )}
                </div>

                <p className="text-center text-sm text-gray-600 mb-6">{plan.description}</p>

                {/* CTA */}
                <Link
                  href={plan.id === "free" ? "/kayit" : `/odeme?plan=${plan.id}&period=${isYearly ? "yearly" : "monthly"}`}
                  className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Özellikler</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Güvenle Ödeme Yapın</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-2xl">🔒</span>
              <span className="text-xs font-medium text-gray-600">256-bit SSL</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-2xl">💳</span>
              <span className="text-xs font-medium text-gray-600">Iyzico Güvencesi</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-2xl">🔄</span>
              <span className="text-xs font-medium text-gray-600">14 Gün İade</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-2xl">🛡️</span>
              <span className="text-xs font-medium text-gray-600">KVKK Uyumlu</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
