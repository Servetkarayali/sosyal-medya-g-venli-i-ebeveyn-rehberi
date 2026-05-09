import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aile Dijital Güvenlik Sözleşmesi",
  description: "Çocuğunuzla birlikte bir dijital kullanım sözleşmesi oluşturun. 22 hazır kural, kişiselleştirme ve yazdırma özelliği.",
  openGraph: {
    title: "Aile Güvenlik Sözleşmesi | Dijital Güvenlik",
    description: "Çocuğunuzla birlikte dijital güvenlik sözleşmesi oluşturun ve yazdırın.",
  },
};

export default function SozlesmeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
