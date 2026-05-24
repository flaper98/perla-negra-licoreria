import "./globals.css";

export const metadata = {
  title: "Perla Negra | Licores Mayoristas",
  description: "Whisky, vodka, ron, gin, tequila, vinos y packs mayoristas con pedidos por WhatsApp.",
  keywords: ["Perla Negra", "licores", "mayorista", "whisky", "vodka", "ron", "Perú"],
  openGraph: {
    title: "Perla Negra | Licores Mayoristas",
    description: "Licores mayoristas al mejor precio con atención por WhatsApp.",
    type: "website",
    locale: "es_PE"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
