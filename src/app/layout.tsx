import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sosyal Medya Güvenliği - Ebeveyn Rehberi",
    template: "%s | Dijital Güvenlik Rehberi",
  },
  description: "Ebeveynler ve çocuklar için etkileşimli sosyal medya güvenlik rehberi. Quiz, risk hesaplayıcı ve platform rehberleri.",
  keywords: ["sosyal medya güvenliği", "ebeveyn rehberi", "çocuk güvenliği", "siber zorbalık", "dijital okuryazarlık", "internet güvenliği", "TikTok güvenlik", "Instagram gizlilik"],
  authors: [{ name: "Servet Karayalı" }],
  creator: "Servet Karayalı",
  metadataBase: new URL("https://sosyal-medya-guvenlik.vercel.app"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sosyal-medya-guvenlik.vercel.app",
    siteName: "Dijital Güvenlik Rehberi",
    title: "Sosyal Medya Güvenliği - Ebeveyn Rehberi",
    description: "Ebeveynler ve çocuklar için etkileşimli sosyal medya güvenlik rehberi. Quiz, risk hesaplayıcı ve platform rehberleri.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sosyal Medya Güvenliği - Ebeveyn Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Medya Güvenliği - Ebeveyn Rehberi",
    description: "Ebeveynler ve çocuklar için etkileşimli sosyal medya güvenlik rehberi.",
    images: ["/og-image.svg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.svg",
    apple: "/icons/icon-192x192.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dijital Güvenlik" />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
              // Dark mode initialization
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
