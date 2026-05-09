import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Skoru Hesaplayıcı",
  description: "10 basit soruyu cevaplayarak çocuğunuzun dijital güvenlik risk seviyesini öğrenin ve kişiselleştirilmiş öneriler alın.",
  openGraph: {
    title: "Dijital Güvenlik Risk Skoru | Dijital Güvenlik",
    description: "Çocuğunuzun dijital güvenlik riskini hesaplayın. 10 soru, anında sonuç.",
  },
};

export default function RiskHesaplaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
