import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sosyal Medya Güvenliği - Ebeveyn Rehberi",
  description: "Ebeveynler ve çocuklar için etkileşimli sosyal medya güvenlik rehberi",
  keywords: ["sosyal medya güvenliği", "ebeveyn rehberi", "çocuk güvenliği", "siber zorbalık", "dijital okuryazarlık"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
