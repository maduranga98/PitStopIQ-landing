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
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "PitstopIQ",
    locale: "en_LK",
    images: [
      {
        url: "/og-image.png",
        width: 1424,
        height: 752,
        alt: "PitstopIQ — Vehicle Service Center Management SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PitstopIQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url: siteUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "LKR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "PitstopIQ",
      url: siteUrl,
      email: "info@lumoraventures.com",
      telephone: "+94711100800",
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} ${notoSinhala.variable} ${notoTamil.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
