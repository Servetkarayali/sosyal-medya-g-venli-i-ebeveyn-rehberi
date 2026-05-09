import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acil Durum",
  description: "Siber zorbalık, dolandırıcılık veya tehdit durumunda ne yapmanız gerektiğini öğrenin. Yardım hatları ve acil eylem planı.",
  openGraph: {
    title: "Acil Durum Rehberi | Dijital Güvenlik",
    description: "Siber tehdit durumunda yardım hatları ve 5 adımlık acil eylem planı.",
  },
};

export default function AcilDurumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
