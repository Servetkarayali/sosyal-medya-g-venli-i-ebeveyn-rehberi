import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Güvenli Medya — Aile Dijital Güvenlik Rehberi",
    template: "%s | Güvenli Medya",
  },
  description: "Ebeveynler ve çocuklar için sade, net, anlaşılır bir dijital güvenlik rehberi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-paper text-ink overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
