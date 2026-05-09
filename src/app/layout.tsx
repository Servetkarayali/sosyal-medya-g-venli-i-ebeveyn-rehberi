import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Güvenli Medya - Aile Dijital Güvenlik Rehberi",
    template: "%s | Güvenli Medya",
  },
  description: "Ebeveynler ve çocuklar için sosyal medya güvenlik rehberi. Pratik bilgiler, interaktif testler ve platform rehberleri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
