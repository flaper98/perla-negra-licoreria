"use client";

import { MessageCircle, Flame, Eye } from "lucide-react";
import { getWhatsappLink } from "@/data/products";

const categories = [
  {
    name: "Whisky",
    image: "/img/categorias/whisky.jpg",
    subtitle: "Whiskies premium y promociones por unidad o caja.",
    products: [
      "Johnnie Walker Red Label",
      "Black Label",
      "Chivas Regal",
      "Old Parr",
    ],
  },
  {
    name: "Ron",
    image: "/img/categorias/ron.jpg",
    subtitle: "Rones para consumo personal y eventos.",
    products: [
      "Ron Cartavio",
      "Ron Flor de Caña",
      "Ron Barceló",
      "Havana Club",
    ],
  },
  {
    name: "Vodka",
    image: "/img/categorias/vodka.jpg",
    subtitle: "Vodkas clásicos y premium.",
    products: [
      "Smirnoff",
      "Absolut",
      "Skyy Vodka",
      "Vodka Russkaya",
    ],
  },
];

export default function CategoryPromotions() {
  return (
    <section className="bg-[#f4efe4] px-6 py-14">
      <div className="mx-auto max-w-[1700px] space-y-14">
        {categories.map((category) => (
          <div key={category.name} id={category.name.toLowerCase()}>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-700">
                  Categoría
                </p>
                <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
                  {category.name} en promoción
                </h2>
                <p className="mt-2 text-black/60">{category.subtitle}</p>
              </div>

              <button className="hidden rounded-full bg-black px-5 py-3 text-sm font-black text-white transition hover:bg-yellow-500 hover:text-black md:inline-flex">
                Ver más
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {category.products.map((product, index) => (
                <article
                  key={product}
                  className="group overflow-hidden rounded-[1.8rem] bg-white shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden bg-black">
<img
  src={category.image}
  alt={product}
  className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-110"
/>

                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-2 text-xs font-black text-black">
                      <Flame className="h-4 w-4" />
                      {index === 0 ? "Oferta" : "Premium"}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-black text-black">{product}</h3>
                    <p className="mt-2 text-sm text-black/60">
                      Precio especial por unidad o caja. Consulta disponibilidad.
                    </p>

                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => window.open(getWhatsappLink(product), "_blank")}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 text-sm font-black text-white transition hover:bg-green-400"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </button>

                      <button className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-3 text-white transition hover:bg-yellow-500 hover:text-black">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}