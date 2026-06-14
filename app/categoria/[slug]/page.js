import CategoryPageClient from "@/components/CategoryPageClient";

const BASE_URL = "https://www.perlanegra.store";

const categoryMeta = {
  whisky: {
    title: "Whisky Mayorista en Perú | Perla Negra",
    description:
      "Ballantines, Jack Daniel's, Johnnie Walker, Passport Scotch y más. Precios mayoristas de whisky. Pedidos por WhatsApp con envío a Lima y Pucallpa.",
  },
  vodka: {
    title: "Vodka al por Mayor en Perú | Perla Negra Licores",
    description:
      "Absolut, Smirnoff y más marcas importadas. Vodka mayorista para licoreras, bares y eventos. Pedidos por WhatsApp.",
  },
  ron: {
    title: "Ron Mayorista — Flor de Caña, Barceló | Perla Negra",
    description:
      "Flor de Caña 7, 12 años, Barceló Añejo y más. Precios de distribuidora para restaurantes, bares y eventos. Pedidos por WhatsApp.",
  },
  gin: {
    title: "Gin Mayorista — Beefeater, Tanqueray | Perla Negra",
    description:
      "Beefeater Pink, Tanqueray London Dry Gin y más. Gin al por mayor con pedidos por WhatsApp. Envíos a Lima y provincias.",
  },
  tequila: {
    title: "Tequila Mayorista — Jose Cuervo | Perla Negra Licores",
    description:
      "Jose Cuervo Especial y más tequilas importados. Precios mayoristas con envío a Lima y todo el Perú. Pedidos por WhatsApp.",
  },
  vinos: {
    title: "Vinos al por Mayor en Perú | Perla Negra",
    description:
      "Tabernero, Santiago Queirolo, Tuyo y más vinos peruanos e importados. Mayoristas para restaurantes y eventos. Pedidos por WhatsApp.",
  },
  champagne: {
    title: "Champagne y Espumantes Mayoristas | Perla Negra",
    description:
      "Riccadonna Asti, Riccadonna Ruby y más espumantes. Champagne al por mayor para eventos y celebraciones. Pedidos por WhatsApp.",
  },
  pisco: {
    title: "Pisco Peruano Mayorista | Perla Negra Licores",
    description:
      "Santiago Queirolo Pisco Acholado y más piscos peruanos de calidad. Mayoristas con pedidos por WhatsApp. Envíos Lima y Pucallpa.",
  },
  energizantes: {
    title: "Energizantes al por Mayor — Red Bull | Perla Negra",
    description:
      "Red Bull 250ml y más energizantes al por mayor. Precios mayoristas para tiendas, bares y eventos. Pedidos por WhatsApp.",
  },
  licores: {
    title: "Licores Mayoristas en Perú | Perla Negra",
    description:
      "Amplia selección de licores importados y nacionales al por mayor. Distribuidora oficial con pedidos por WhatsApp y envío a todo el Perú.",
  },
};

export async function generateMetadata({ params }) {
  const meta = categoryMeta[params.slug];
  if (!meta) {
    return { title: "Perla Negra | Licores Mayoristas" };
  }
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/categoria/${params.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/categoria/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }) {
  return <CategoryPageClient params={params} />;
}
