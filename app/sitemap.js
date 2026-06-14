const BASE_URL = "https://www.perlanegra.store";

const categorias = [
  "whisky", "vodka", "ron", "gin", "tequila",
  "champagne", "vinos", "pisco", "energizantes", "licores",
];

export default function sitemap() {
  const now = new Date();
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categorias.map((slug) => ({
      url: `${BASE_URL}/categoria/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/buscar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
