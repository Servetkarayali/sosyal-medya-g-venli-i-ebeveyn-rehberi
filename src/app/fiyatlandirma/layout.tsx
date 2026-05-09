import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description: "Free, Pro ve Premium planlar ile aileniz için doğru dijital güvenlik çözümünü seçin.",
};

export default function FiyatlandirmaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
