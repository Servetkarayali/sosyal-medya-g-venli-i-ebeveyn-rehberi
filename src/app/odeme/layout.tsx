import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ödeme",
  description: "Güvenli ödeme sayfası. Kredi kartı veya Iyzico ile ödeme yapın.",
};

export default function OdemeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
