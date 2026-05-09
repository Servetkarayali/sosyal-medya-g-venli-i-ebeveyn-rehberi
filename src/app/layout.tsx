import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Güvenli Medya — Aile Dijital Güvenlik Evreni",
    template: "%s | Güvenli Medya",
  },
  description: "Ebeveynler ve çocuklar için sıra dışı bir dijital güvenlik deneyimi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-void text-paper overflow-x-hidden">
        <CursorGlow />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
