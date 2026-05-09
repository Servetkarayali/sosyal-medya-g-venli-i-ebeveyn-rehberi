import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Rehberleri",
  description: "Instagram, TikTok, YouTube ve Snapchat için adım adım güvenlik ve gizlilik ayarları rehberi.",
  openGraph: {
    title: "Platform Güvenlik Rehberleri | Dijital Güvenlik",
    description: "Instagram, TikTok, YouTube, Snapchat için adım adım gizlilik ayarları.",
  },
};

export default function PlatformlarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
