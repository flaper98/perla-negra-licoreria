"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { products, getWhatsappLink } from "@/data/products";
import { MessageCircle, Flame } from "lucide-react";

const categoryNames = {
  whisky: "Whisky",
  vodka: "Vodka",
  ron: "Ron",
  gin: "Gin",
  tequila: "Tequila",
  vinos: "Vinos",
  champagne: "Champagne",
  pisco: "Pisco",
  energizantes: "Energizantes",
  licores: "Licores",
};

export default function CategoryPage({ params }) {
  const category = categoryNames[params.slug];
  const filtered = products.filter((p) => p.category === category);
  const promos = getStableRandomProducts(filtered, params.slug, 5);
    
  function getStableRandomProducts(items, seedText, limit = 5) {
  const seed = seedText.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return [...items]
    .map((item, index) => ({
      item,
      sort: Math.sin(seed + index) * 10000,
    }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, limit)
    .map(({ item }) => item);
} 
  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-40 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
  <div className="sticky top-36 overflow-hidden rounded-[2rem] border border-yellow-900/10 bg-[#f7efe1] shadow-xl">
    <div className="border-b border-black/10 bg-black px-5 py-4">
      <p className="text-[11px] font-black uppercase tracking-[0.25em] text-yellow-400">
        Recomendados
      </p>

      <h3 className="mt-1 text-xl font-black text-white">
        Más vistos en {category}
      </h3>
    </div>

    <div className="space-y-1 p-3">
      {promos.map((product) => (
        <button
          key={product.name}
          onClick={() =>
            window.open(getWhatsappLink(product.name), "_blank")
          }
          className="group flex w-full items-center gap-3 rounded-2xl bg-white p-3 text-left transition hover:bg-yellow-50"
        >
          <div className="flex h-16 w-14 shrink-0 items-center justify-center rounded-xl bg-[#faf6ee]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-14 w-auto object-contain transition group-hover:scale-110"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="line-clamp-2 text-sm font-black leading-snug text-black">
              {product.name}
            </p>

            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="text-sm font-black text-red-700">
                {product.unitPrice}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>

    <div className="p-4 pt-2">
      <button
        onClick={() =>
          window.open(
            getWhatsappLink(
            `Hola, quisiera información sobre los productos de ${category}.`,
            { customMessage: true }
            ),
            "_blank"
          )
        }
        className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Consultar por WhatsApp
      </button>
    </div>
  </div>
</aside>

        <section>
          <div className="mb-8 flex items-end justify-between">
            <h1 className="text-4xl font-black text-black">{category}</h1>

            <p className="text-sm font-bold text-black/50">
              {filtered.length} productos
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden border border-black/10 bg-white p-5 text-center transition hover:shadow-xl"
              >
                <div className="relative flex h-64 items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-56 w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-sm text-black/40">
                  {product.category}
                </p>

                <h3 className="mt-2 min-h-[48px] text-base font-bold text-black">
                  {product.name}
                </h3>

                <p className="mt-3 text-lg font-black text-red-700">
                  {product.unitPrice}
                </p>

                <p className="mt-1 text-xs font-bold text-black/50">
                  Precio por caja: consultar
                </p>

                <button
                  onClick={() =>
                    window.open(getWhatsappLink(product.name), "_blank")
                  }
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-3 text-xs font-black text-white transition hover:bg-green-400"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  PEDIR POR WHATSAPP
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}