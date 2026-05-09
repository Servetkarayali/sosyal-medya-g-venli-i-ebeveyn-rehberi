# Sosyal Medya Güvenliği - Ebeveyn Rehberi

Ebeveynler ve çocuklar için etkileşimli sosyal medya güvenlik rehberi.

## Hakkında

Bu platform, ebeveynlerin ve çocukların sosyal medya tehlikelerini interaktif olarak öğrenebileceği, quiz'ler çözebileceği ve pratik adımlar atabileceği bir web uygulamasıdır.

### Özellikler

- **Ebeveyn Rehberi** — Gizlilik ayarları, siber zorbalık, ekran süresi yönetimi ve iletişim ipuçları
- **Çocuk & Genç Bölümü** — Altın kurallar, senaryo tabanlı öğrenme, yaş grubuna uygun içerik
- **Etkileşimli Quiz** — Bilgi testi, puan takibi ve açıklamalı cevaplar
- **Görsel Destekli** — SVG illüstrasyonlar ve modern UI tasarımı
- **Çoklu Dil Desteği** — Türkçe (varsayılan), İngilizce, Almanca, Arapça
- **Responsive Tasarım** — Mobil, tablet ve masaüstü uyumlu

## Teknoloji Yığını

| Teknoloji | Amaç |
|-----------|-------|
| [Next.js 14](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Tip güvenliği |
| [Tailwind CSS](https://tailwindcss.com/) | Stil ve responsive tasarım |
| [next-intl](https://next-intl-docs.vercel.app/) | Çoklu dil (i18n) desteği |
| [Framer Motion](https://www.framer.com/motion/) | Animasyonlar |

## Kurulum

```bash
git clone https://github.com/Servetkarayali/sosyal-medya-g-venli-i-ebeveyn-rehberi.git
cd sosyal-medya-g-venli-i-ebeveyn-rehberi
npm install
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
src/
├── app/
│   ├── page.tsx            # Ana sayfa (rol seçimi)
│   ├── ebeveyn/page.tsx    # Ebeveyn rehberi
│   ├── cocuk/page.tsx      # Çocuk & genç bölümü
│   └── quiz/page.tsx       # Etkileşimli quiz
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── StatCard.tsx
│   └── illustrations/      # SVG illüstrasyon bileşenleri
├── data/messages/           # Dil dosyaları (tr, en, de, ar)
├── lib/i18n.ts              # i18n yapılandırması
└── styles/globals.css       # Global stiller ve Tailwind
```

## Dil Desteği

| Kod | Dil | Durum |
|-----|-----|-------|
| `tr` | Türkçe | Tam |
| `en` | İngilizce | Tam |
| `de` | Almanca | Kısmi |
| `ar` | Arapça | Kısmi |

## Lisans

MIT License

## Yardım Hatları

- **ALO 182** — Sosyal Destek Hattı
- **ALO 155** — Polis İmdat
- **Siber Suç İhbar:** [ihbarweb.org.tr](https://www.ihbarweb.org.tr)
