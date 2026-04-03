import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const siteUrl = "https://jado.or.jp";
const siteName = "JADO | 一般社団法人 日本AI人材育成機構";
const siteDescription =
  "AIを目的ではなく、人が社会で生きる力を拡張するための手段として活用する、人材育成・教育機構。放課後等デイサービス ALTIF、子ども向けAIスクール、企業向けAI研修を展開。";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: "%s | JADO",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: "JADO",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/jado-logo.jpg",
        width: 952,
        height: 952,
        alt: "JADO - 一般社団法人 日本AI人材育成機構",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
    images: ["/images/jado-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
