import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Perla Negra | Licores Mayoristas",
  description: "Whisky, vodka, ron, gin, tequila, vinos y packs mayoristas con pedidos por WhatsApp. Distribuidor oficial en Pucallpa y todo el Perú.",
  keywords: ["Perla Negra", "licores", "mayorista", "whisky", "vodka", "ron", "Perú", "Pucallpa", "distribuidora"],
  openGraph: {
    title: "Perla Negra | Licores Mayoristas",
    description: "Licores mayoristas al mejor precio con atención por WhatsApp.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}
