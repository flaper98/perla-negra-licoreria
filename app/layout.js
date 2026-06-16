import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

const BASE_URL = "https://www.perlanegra.store";
const DESCRIPTION =
  "Whisky, vodka, ron, gin, tequila, vinos y packs mayoristas con pedidos por WhatsApp. Distribuidor oficial en Pucallpa y todo el Perú.";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Perla Negra | Licores Mayoristas en Perú",
  description: DESCRIPTION,
  keywords: [
    "Perla Negra", "licores mayoristas", "mayorista licores peru",
    "whisky mayorista", "vodka mayorista", "ron mayorista",
    "distribuidora licores", "licores Pucallpa", "licores Lima",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Perla Negra | Licores Mayoristas en Perú",
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: "Perla Negra",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perla Negra | Licores Mayoristas en Perú",
    description: DESCRIPTION,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Perla Negra Licores",
  description:
    "Distribuidora mayorista de licores en Perú. Whisky, vodka, ron, gin, tequila, vinos y pisco al por mayor.",
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo.png`,
  image: `${BASE_URL}/img/logo.png`,
  telephone: "+51970820056",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+51970820056",
    contactType: "sales",
    availableLanguage: "Spanish",
  },
  areaServed: [
    { "@type": "City", name: "Lima" },
    { "@type": "City", name: "Pucallpa" },
    { "@type": "Country", name: "Peru" },
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={playfair.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
