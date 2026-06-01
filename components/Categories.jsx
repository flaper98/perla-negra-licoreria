"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    name: "Whisky",
    slug: "whisky",
    img: "/img/categorias/whisky.jpg",
    tag: "Premium",
  },
  {
    name: "Vodka",
    slug: "vodka",
    img: "/img/categorias/vodka.jpg",
    tag: "Importados",
  },
  {
    name: "Ron",
    slug: "ron",
    img: "/img/categorias/ron.jpg",
    tag: "Mayorista",
  },
  {
    name: "Gin",
    slug: "gin",
    img: "/img/categorias/gin.png",
    tag: "Selección",
  },
  {
    name: "Tequila",
    slug: "tequila",
    img: "/img/categorias/tequila.jpg",
    tag: "Ofertas",
  },
  {
    name: "Champagne",
    slug: "champagne",
    img: "/img/categorias/champagne.jpg",
    tag: "Eventos",
  },
  {
    name: "Vinos",
    slug: "vinos",
    img: "/img/categorias/vino.jpg",
    tag: "Especiales",
  },
  {
    name: "Pisco",
    slug: "pisco",
    img: "/img/categorias/pisco.jpg",
    tag: "Peruanos",
  },
  {
    name: "Energizantes",
    slug: "energizantes",
    img: "/img/categorias/energizante.jpg",
    tag: "Ofertas",
  },
  {
    name: "Licores",
    slug: "licores",
    img: "/img/categorias/licores.jpg",
    tag: "Especiales",
  },
];

export default function Categories() {
  const scrollRef = useRef(null);

  const move = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="categorias"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8ea] to-[#f4efe4] py-8"
    >
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-yellow-700">
              Categorías
            </p>

            <h2 className="text-3xl font-black text-black md:text-4xl">
              Todo lo que buscas en licores
            </h2>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => move("left")}
            className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-yellow-300 shadow-xl transition hover:scale-110"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none]"
          >
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={`/categoria/${cat.slug}`}
                className="group relative min-w-[220px] overflow-hidden rounded-[1.5rem] bg-black shadow-lg"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-yellow-400/30 bg-black/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-300 backdrop-blur">
                    Premium
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white">
                      {cat.name}
                    </h3>

                    <p className="text-sm text-white/70">Ver productos →</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => move("right")}
            className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-yellow-300 shadow-xl transition hover:scale-110"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
