"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

interface PlatformStep {
  title: string;
  description: string;
}

interface Platform {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  minAge: number;
  icon: string;
  description: string;
  risks: string[];
  privacySteps: PlatformStep[];
  parentTips: string[];
}

const platforms: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    color: "text-pink-600",
    bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    borderColor: "border-pink-200",
    minAge: 13,
    icon: "📷",
    description: "Fotoğraf ve video paylaşım platformu. Reels, Stories ve DM özellikleri ile gençler arasında çok popüler.",
    risks: [
      "Tanımadığı kişilerden gelen DM'ler",
      "Konum etiketleme ile adres ifşası",
      "Siber zorbalık (yorumlar, story yanıtları)",
      "Sahte/taklit hesaplarla iletişim",
      "Uygunsuz içeriklere maruz kalma",
      "Beden imajı ve özgüven sorunları",
    ],
    privacySteps: [
      { title: "Hesabı Gizli Yap", description: "Ayarlar > Gizlilik > Hesap Gizliliği > 'Gizli Hesap' seçeneğini açın." },
      { title: "Mesaj İsteklerini Kısıtla", description: "Ayarlar > Gizlilik > Mesajlar > 'Yalnızca takip ettiklerim' seçin." },
      { title: "Yorum Kontrolü", description: "Ayarlar > Gizlilik > Yorumlar > Rahatsız edici kelimeleri filtreleyin." },
      { title: "Aktivite Durumunu Kapat", description: "Ayarlar > Gizlilik > Aktivite Durumu > Kapatın." },
      { title: "Story Paylaşımını Sınırla", description: "Ayarlar > Gizlilik > Story > 'Yakın Arkadaşlar' listesi oluşturun." },
      { title: "İki Faktörlü Doğrulama", description: "Ayarlar > Güvenlik > İki Faktörlü Doğrulama > SMS veya uygulama ile aktifleştirin." },
      { title: "Etiketleme Kontrolü", description: "Ayarlar > Gizlilik > Etiketler > 'Elle onayla' seçeneğini açın." },
    ],
    parentTips: [
      "Çocuğunuzun takipçi listesini düzenli kontrol edin",
      "Yakın Arkadaşlar listesini birlikte düzenleyin",
      "'Denetimli Hesap' özelliğini kullanın (18 yaş altı)",
      "Ekran süresi hatırlatıcısını aktifleştirin",
      "Gece saatlerinde bildirim sesini kapatın",
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "text-gray-900",
    bgColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-pink-600",
    borderColor: "border-gray-200",
    minAge: 13,
    icon: "🎵",
    description: "Kısa video paylaşım platformu. Algoritması ile içerik keşfi çok güçlü, gençler arasında en popüler platformlardan biri.",
    risks: [
      "Uygunsuz içeriklerin algoritmik önerisi",
      "Canlı yayınlarda tanımadığı kişilerle etkileşim",
      "Konum bilgisi paylaşımı",
      "Challenge'lar ile tehlikeli hareketlere özendirme",
      "Kişisel bilgilerin videolarda istemeden paylaşılması",
      "Yabancılardan gelen hediye/para teklifleri",
    ],
    privacySteps: [
      { title: "Hesabı Gizli Yap", description: "Profil > Ayarlar > Gizlilik > 'Gizli Hesap' seçeneğini açın." },
      { title: "Aile Eşleştirme", description: "Ayarlar > Aile Eşleştirme > QR kod ile çocuğunuzun hesabına bağlanın." },
      { title: "Mesajları Kısıtla", description: "Gizlilik > DM kimin mesaj gönderebileceğini 'Kimse' veya 'Arkadaşlar' olarak ayarlayın." },
      { title: "Duet/Dikiş Kontrolü", description: "Gizlilik > Duet ve Dikiş > 'Arkadaşlar' veya 'Kapalı' seçin." },
      { title: "Konum Bilgisini Kapat", description: "Telefon ayarlarından TikTok'un konum erişimini kapatın." },
      { title: "Kısıtlı Mod", description: "Ayarlar > Dijital Refah > Kısıtlı Mod'u aktifleştirin (uygunsuz içerik filtresi)." },
      { title: "Ekran Süresi Yönetimi", description: "Dijital Refah > Ekran Süresi Yönetimi > Günlük limit belirleyin." },
    ],
    parentTips: [
      "'Aile Eşleştirme' özelliğini mutlaka kullanın",
      "Kısıtlı Mod'u PIN ile kilitleyin",
      "13-15 yaş arası için DM'leri tamamen kapatın",
      "Canlı yayın özelliğini devre dışı bırakın",
      "Hangi challenge'lara katıldığını takip edin",
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    color: "text-red-600",
    bgColor: "bg-gradient-to-br from-red-500 to-red-700",
    borderColor: "border-red-200",
    minAge: 13,
    icon: "▶️",
    description: "Video izleme ve paylaşım platformu. YouTube Kids uygulaması küçük çocuklar için güvenli bir alternatif sunar.",
    risks: [
      "Yaşa uygun olmayan içerikler",
      "Yorum bölümünde siber zorbalık",
      "Otomatik oynatma ile uzun ekran süresi",
      "Zararlı 'elsagate' tarzı gizli içerikler",
      "Canlı yayınlarda uygunsuz etkileşim",
      "Kişisel bilgi paylaşan videolar",
    ],
    privacySteps: [
      { title: "YouTube Kids Kullanın", description: "12 yaş altı için YouTube Kids uygulamasını indirin ve profil oluşturun." },
      { title: "Kısıtlı Mod", description: "Profil > Ayarlar > Genel > 'Kısıtlı Mod'u etkinleştirin." },
      { title: "İzleme Geçmişi Kontrolü", description: "Geçmiş > İzleme ve arama geçmişini düzenli kontrol edin." },
      { title: "Otomatik Oynatmayı Kapatın", description: "Ayarlar > Otomatik oynat > Kapatın (sonsuz izlemeyi engellemek için)." },
      { title: "Yorum Kapatma", description: "Çocuğunuz video yüklüyorsa, yorumları kapatın veya onaylı modda tutun." },
      { title: "Bildirim Ayarları", description: "Bildirimler > Gereksiz bildirimleri kapatarak dikkat dağınıklığını azaltın." },
    ],
    parentTips: [
      "12 yaş altı için YouTube Kids zorunlu olmalı",
      "Kısıtlı Mod'u hesap seviyesinde kilitleyin",
      "İzleme geçmişini haftalık kontrol edin",
      "Birlikte video izleme zamanları oluşturun",
      "Hangi kanallara abone olduğunu takip edin",
    ],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    color: "text-yellow-600",
    bgColor: "bg-gradient-to-br from-yellow-300 to-yellow-500",
    borderColor: "border-yellow-200",
    minAge: 13,
    icon: "👻",
    description: "Kaybolan mesaj ve fotoğraf paylaşım uygulaması. Snap Map özelliği ile konum paylaşımı önemli bir risk oluşturur.",
    risks: [
      "Snap Map ile gerçek zamanlı konum paylaşımı",
      "'Kaybolan mesaj' yanılsaması (ekran görüntüsü alınabilir)",
      "Discover bölümünde uygunsuz içerikler",
      "Tanımadığı kişilerden gelen snap'ler",
      "Sexting baskısı (kaybolan mesaj güveni yüzünden)",
      "Streak baskısı ile bağımlılık",
    ],
    privacySteps: [
      { title: "Ghost Mode (Hayalet Mod)", description: "Snap Map > Ayarlar dişlisi > 'Hayalet Mod'u açın. Konumunuz kimseye gösterilmez." },
      { title: "Beni Kimler Bulabilir", description: "Ayarlar > Beni Kimler Bulabilir > 'Arkadaşlarım' seçin." },
      { title: "Hikayemi Kimler Görebilir", description: "Ayarlar > Hikayemi Görüntüle > 'Sadece Arkadaşlarım' seçin." },
      { title: "Quick Add'i Kapatın", description: "Ayarlar > Quick Add > Kapatın (yabancıların sizi bulmasını engelleyin)." },
      { title: "Mesaj Kısıtlama", description: "Ayarlar > Bana Kimler Mesaj Gönderebilir > 'Arkadaşlarım' seçin." },
      { title: "Aile Merkezi", description: "Ayarlar > Aile Merkezi > Ebeveyn hesabınız ile bağlantı kurun." },
    ],
    parentTips: [
      "Snap Map'i kesinlikle Hayalet Mod'da tutun",
      "Kaybolan mesajların gerçekten kaybolmadığını anlatın",
      "Aile Merkezi özelliğini aktifleştirin",
      "Streak baskısı konusunda çocuğunuzla konuşun",
      "Discover içeriklerini birlikte gözden geçirin",
    ],
  },
];

export default function PlatformlarPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const activePlatform = platforms.find((p) => p.id === selectedPlatform);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">📱</span>
              Platform Rehberleri
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Platform Bazlı{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Güvenlik Rehberi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Her platformun kendine özgü riskleri ve güvenlik ayarları vardır. Çocuğunuzun kullandığı platformu seçerek adım adım rehbere ulaşın.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Selection */}
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {platforms.map((platform, i) => (
              <AnimatedCard key={platform.id} index={i}>
                <button
                  onClick={() => setSelectedPlatform(selectedPlatform === platform.id ? null : platform.id)}
                  className={`w-full p-5 rounded-2xl border-2 transition-all text-center ${
                    selectedPlatform === platform.id
                      ? `${platform.borderColor} shadow-lg scale-105`
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl ${platform.bgColor} flex items-center justify-center text-2xl mx-auto mb-3 text-white`}>
                    {platform.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{platform.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{platform.minAge}+ yaş</p>
                </button>
              </AnimatedCard>
            ))}
          </div>

          {/* Platform Detail */}
          {activePlatform && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Platform Info Header */}
              <div className={`rounded-3xl p-6 sm:p-8 text-white ${activePlatform.bgColor}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{activePlatform.icon}</div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold">{activePlatform.name}</h2>
                    <p className="text-white/80 text-sm">Minimum yaş: {activePlatform.minAge}+</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{activePlatform.description}</p>
              </div>

              {/* Risks */}
              <div className="bg-red-50 rounded-2xl border border-red-100 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  Riskler ve Tehlikeler
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePlatform.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-red-100">
                      <span className="text-red-500 mt-0.5">⚠️</span>
                      <span className="text-sm text-gray-700">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Steps */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Gizlilik Ayarları - Adım Adım
                </h3>
                <div className="space-y-4">
                  {activePlatform.privacySteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parent Tips */}
              <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  Ebeveyn İpuçları
                </h3>
                <div className="space-y-3">
                  {activePlatform.parentTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No platform selected */}
          {!activePlatform && (
            <div className="text-center py-12 text-gray-500">
              <div className="text-5xl mb-4">👆</div>
              <p className="text-lg">Detaylı rehberi görmek için yukarıdan bir platform seçin.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
