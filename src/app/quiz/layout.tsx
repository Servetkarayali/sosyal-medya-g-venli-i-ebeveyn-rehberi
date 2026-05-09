import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz & Testler",
  description: "Dijital güvenlik bilginizi 16 soruluk interaktif quizimizle test edin. Sosyal medya güvenliği hakkında ne kadar bilgilisiniz?",
  openGraph: {
    title: "Quiz & Testler | Dijital Güvenlik",
    description: "16 soruluk dijital güvenlik quizi. Bilginizi test edin!",
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
