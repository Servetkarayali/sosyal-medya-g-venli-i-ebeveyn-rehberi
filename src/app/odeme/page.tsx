"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const planDetails: Record<string, { name: string; color: string; icon: string }> = {
  pro: { name: "Pro", color: "blue", icon: "⚡" },
  premium: { name: "Premium", color: "purple", icon: "👑" },
};

const prices: Record<string, Record<string, number>> = {
  pro: { monthly: 49, yearly: 39 },
  premium: { monthly: 99, yearly: 79 },
};

export default function OdemePage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "pro";
  const period = searchParams.get("period") || "monthly";

  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "iyzico">("card");
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const planInfo = planDetails[plan] || planDetails.pro;
  const price = prices[plan]?.[period] || 49;
  const yearlyTotal = price * 12;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s/g, "").replace(/\D/g, "").slice(0, 16);
    return v.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 2) return v.slice(0, 2) + "/" + v.slice(2);
    return v;
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (paymentMethod === "card") {
      if (cardData.number.replace(/\s/g, "").length < 16) errs.number = "Geçerli bir kart numarası girin";
      if (!cardData.name.trim()) errs.name = "Kart üzerindeki isim gerekli";
      if (cardData.expiry.length < 5) errs.expiry = "Geçerli bir tarih girin";
      if (cardData.cvv.length < 3) errs.cvv = "CVV gerekli";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStep("processing");

    // Simulate payment processing
    setTimeout(() => {
      setStep("success");
    }, 3000);
  };

  if (step === "processing") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse">
            <svg className="w-10 h-10 text-white animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ödemeniz İşleniyor</h2>
          <p className="text-gray-600">Lütfen sayfayı kapatmayın...</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            256-bit SSL ile güvenli ödeme
          </div>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Ödeme Başarılı! 🎉</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">{planInfo.name}</span> planınız aktifleştirildi.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Onay e-postası adresinize gönderildi. Tüm premium özelliklere hemen erişebilirsiniz.
          </p>

          <div className="bg-gray-50 rounded-2xl p-5 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Sipariş Özeti</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan</span>
                <span className="font-medium">{planInfo.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dönem</span>
                <span className="font-medium">{period === "yearly" ? "Yıllık" : "Aylık"}</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="text-gray-900 font-semibold">Toplam</span>
                <span className="font-bold text-gray-900">₺{period === "yearly" ? yearlyTotal : price}/{period === "yearly" ? "yıl" : "ay"}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="flex-1 py-3 rounded-xl gradient-primary text-white font-semibold text-sm text-center shadow-lg hover:-translate-y-0.5 transition-all">
              Rehberi Keşfet
            </Link>
            <Link href="/ebeveyn" className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm text-center hover:border-blue-300 transition-colors">
              Ebeveyn Rehberi
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/fiyatlandirma" className="hover:text-blue-600">Fiyatlandırma</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-900 font-medium">Ödeme</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Ödeme Bilgileri</h1>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Ödeme Yöntemi</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${paymentMethod === "card" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="text-2xl mb-1">💳</div>
                      <div className="text-sm font-medium text-gray-900">Kredi/Banka Kartı</div>
                      <div className="text-xs text-gray-500 mt-0.5">Visa, Mastercard, Troy</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("iyzico")}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${paymentMethod === "iyzico" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="text-2xl mb-1">🟣</div>
                      <div className="text-sm font-medium text-gray-900">Iyzico ile Öde</div>
                      <div className="text-xs text-gray-500 mt-0.5">Hızlı ve güvenli</div>
                    </button>
                  </div>
                </div>

                {paymentMethod === "card" ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kart Numarası</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={cardData.number}
                          onChange={(e) => setCardData({ ...cardData, number: formatCardNumber(e.target.value) })}
                          placeholder="0000 0000 0000 0000"
                          className={`w-full px-4 py-3 rounded-xl border-2 ${errors.number ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-mono tracking-wider`}
                          maxLength={19}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                          <span className="text-lg">💳</span>
                        </div>
                      </div>
                      {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
                    </div>

                    {/* Card Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kart Üzerindeki İsim</label>
                      <input
                        type="text"
                        value={cardData.name}
                        onChange={(e) => setCardData({ ...cardData, name: e.target.value.toUpperCase() })}
                        placeholder="AD SOYAD"
                        className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm uppercase`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Expiry & CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Son Kullanma</label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: formatExpiry(e.target.value) })}
                          placeholder="AA/YY"
                          className={`w-full px-4 py-3 rounded-xl border-2 ${errors.expiry ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-mono`}
                          maxLength={5}
                        />
                        {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="password"
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                          placeholder="•••"
                          className={`w-full px-4 py-3 rounded-xl border-2 ${errors.cvv ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-mono`}
                          maxLength={4}
                        />
                        {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl gradient-primary text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all hover:-translate-y-0.5 mt-6"
                    >
                      ₺{period === "yearly" ? yearlyTotal : price} Öde ({period === "yearly" ? "Yıllık" : "Aylık"})
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🟣</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Iyzico ile Güvenli Ödeme</h3>
                    <p className="text-sm text-gray-600 mb-6">Iyzico ödeme sayfasına yönlendirileceksiniz. Tüm kart bilgileriniz Iyzico tarafından güvenle işlenir.</p>
                    <button
                      onClick={() => { setStep("processing"); setTimeout(() => setStep("success"), 3000); }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    >
                      Iyzico ile ₺{period === "yearly" ? yearlyTotal : price} Öde
                    </button>
                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span>🔒 3D Secure</span>
                      <span>🛡️ Alıcı Koruma</span>
                      <span>💳 Taksit İmkanı</span>
                    </div>
                  </div>
                )}

                {/* Security badges */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">🔒 256-bit SSL</span>
                  <span className="flex items-center gap-1">🛡️ PCI DSS Uyumlu</span>
                  <span className="flex items-center gap-1">🔄 14 Gün İade</span>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Sipariş Özeti</h2>

                <div className={`rounded-xl p-4 mb-4 ${plan === "premium" ? "bg-purple-50 border border-purple-100" : "bg-blue-50 border border-blue-100"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{planInfo.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{planInfo.name} Plan</h3>
                      <p className="text-xs text-gray-600">{period === "yearly" ? "Yıllık faturalama" : "Aylık faturalama"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{planInfo.name} ({period === "yearly" ? "yıllık" : "aylık"})</span>
                    <span className="font-medium">₺{price}/ay</span>
                  </div>
                  {period === "yearly" && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Yıllık indirim (%20)</span>
                      <span>-₺{(prices[plan].monthly - prices[plan].yearly) * 12}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold text-gray-900">Toplam</span>
                    <div className="text-right">
                      <span className="font-bold text-gray-900 text-lg">₺{period === "yearly" ? yearlyTotal : price}</span>
                      <span className="text-xs text-gray-500 block">{period === "yearly" ? "/yıl" : "/ay"}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-xs text-emerald-700">
                  <p className="font-medium mb-1">✅ 14 gün ücretsiz deneme</p>
                  <p>Memnun kalmazsanız ilk 14 gün içinde tam iade garantisi.</p>
                </div>

                <div className="mt-4 text-center">
                  <Link href="/fiyatlandirma" className="text-xs text-blue-600 hover:underline">
                    ← Planları Karşılaştır
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
