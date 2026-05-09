"use client";

import { useState } from "react";
import Link from "next/link";

export default function KayitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "parent",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "İsim gerekli";
    if (!formData.email.trim()) errs.email = "E-posta gerekli";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Geçerli bir e-posta girin";
    if (!formData.password) errs.password = "Şifre gerekli";
    else if (formData.password.length < 8) errs.password = "Şifre en az 8 karakter olmalı";
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = "Şifreler eşleşmiyor";
    if (!formData.agreeTerms) errs.agreeTerms = "Kullanım koşullarını kabul etmelisiniz";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Kayıt başarılı! (Demo)");
    }, 1500);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const passwordStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (pass.length >= 12) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = passwordStrength(formData.password);
  const strengthLabels = ["", "Çok Zayıf", "Zayıf", "Orta", "Güçlü", "Çok Güçlü"];
  const strengthColors = ["", "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-emerald-500", "bg-emerald-600"];

  return (
    <div className="min-h-screen flex">
      {/* Left - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 items-center justify-center p-12">
        <div className="text-white text-center max-w-md">
          <div className="text-6xl mb-6">🌟</div>
          <h2 className="text-3xl font-bold mb-4">Ücretsiz Başlayın</h2>
          <p className="text-emerald-100 text-lg leading-relaxed mb-8">
            Hemen kayıt olun ve çocuğunuzun dijital güvenliği için ilk adımı atın. Kredi kartı gerektirmez.
          </p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm">Quiz ve temel içeriklere anında erişim</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm">Kredi kartı gerekmez</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm">İstediğiniz zaman Pro&apos;ya yükseltin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-safety flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900">Kayıt Ol</h1>
            <p className="text-gray-600 mt-2">Ücretsiz hesabınızı oluşturun</p>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-500">veya e-posta ile</span></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input id="name" type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Adınız Soyadınız" className={`w-full px-4 py-3 rounded-xl border-2 ${errors.name ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm`} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input id="reg-email" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="ornek@email.com" className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm`} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
              <div className="relative">
                <input id="reg-password" type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => updateField("password", e.target.value)} placeholder="En az 8 karakter" className={`w-full px-4 py-3 rounded-xl border-2 ${errors.password ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm pr-12`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= strength ? strengthColors[strength] : "bg-gray-200"}`} />
                    ))}
                  </div>
                  <p className={`text-xs mt-1 ${strength >= 4 ? "text-emerald-600" : strength >= 3 ? "text-yellow-600" : "text-red-500"}`}>{strengthLabels[strength]}</p>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Şifre Tekrar</label>
              <input id="confirm-password" type="password" value={formData.confirmPassword} onChange={(e) => updateField("confirmPassword", e.target.value)} placeholder="Şifrenizi tekrar girin" className={`w-full px-4 py-3 rounded-xl border-2 ${errors.confirmPassword ? "border-red-300" : "border-gray-200"} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm`} />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ben bir...</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => updateField("role", "parent")} className={`p-3 rounded-xl border-2 text-center text-sm font-medium transition-all ${formData.role === "parent" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                  👨‍👩‍👧 Ebeveyn
                </button>
                <button type="button" onClick={() => updateField("role", "educator")} className={`p-3 rounded-xl border-2 text-center text-sm font-medium transition-all ${formData.role === "educator" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                  🎓 Eğitimci
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input id="terms" type="checkbox" checked={formData.agreeTerms} onChange={(e) => updateField("agreeTerms", e.target.checked)} className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="terms" className="text-xs text-gray-600">
                <Link href="#" className="text-blue-600 hover:underline">Kullanım Koşulları</Link> ve{" "}
                <Link href="#" className="text-blue-600 hover:underline">Gizlilik Politikası</Link>&apos;nı okudum ve kabul ediyorum.
              </label>
            </div>
            {errors.agreeTerms && <p className="text-red-500 text-xs">{errors.agreeTerms}</p>}

            <button type="submit" disabled={isLoading} className="w-full py-3.5 rounded-xl gradient-safety text-white font-semibold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? "Kayıt Yapılıyor..." : "Ücretsiz Kayıt Ol"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Zaten hesabınız var mı?{" "}
            <Link href="/giris" className="text-blue-600 hover:text-blue-700 font-semibold">Giriş Yap</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
