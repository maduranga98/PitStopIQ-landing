import type { Metadata, Viewport } from "next";
import {
  Barlow_Condensed,
  Inter,
  Noto_Sans_Sinhala,
  Noto_Sans_Tamil,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const notoSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala"],
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  display: "swap",
});

const siteUrl = "https://pitstopiq.com";
const title = "PitstopIQ — Vehicle Service Center Management SaaS for Sri Lanka";
const description =
  "PitstopIQ replaces paper service cards with a digital platform that tracks every vehicle, sends automatic SMS reminders, and gives you full visibility of your business.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "vehicle service center software",
    "service center management Sri Lanka",
    "automatic SMS reminders",
    "garage management SaaS",
    "PitstopIQ",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏁</text></svg>",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "PitstopIQ",
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} ${notoSinhala.variable} ${notoTamil.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
