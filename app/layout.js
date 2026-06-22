import "./globals.css";
import { Oswald, Hanken_Grotesk, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const BASE_URL = "https://www.perlanegra.store";
const DESCRIPTION =
  "Whisky, vodka, ron, gin, tequila, vinos y packs mayoristas con pedidos por WhatsApp. Distribuidor oficial en Pucallpa y todo el Perú.";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Perla Negra Distribuidora — Licores, combos y ofertas",
  description: DESCRIPTION,
  keywords: [
    "Perla Negra", "licores mayoristas", "mayorista licores peru",
    "whisky mayorista", "vodka mayorista", "ron mayorista",
    "distribuidora licores", "licores Pucallpa", "licores Lima",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Perla Negra Distribuidora — Licores, combos y ofertas",
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: "Perla Negra",
    type: "website",
    locale: "es_PE",
    images: [{ url: `${BASE_URL}/img/logo.webp`, width: 800, height: 800, alt: "Perla Negra Distribuidora" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perla Negra Distribuidora — Licores, combos y ofertas",
    description: DESCRIPTION,
    images: [`${BASE_URL}/img/logo.webp`],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Perla Negra Distribuidora",
  description: "Distribuidora mayorista de licores en Perú.",
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo.webp`,
  telephone: "+51970820056",
  areaServed: [
    { "@type": "City", name: "Lima" },
    { "@type": "City", name: "Pucallpa" },
    { "@type": "Country", name: "Peru" },
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${oswald.variable} ${hanken.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
