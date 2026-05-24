"use client";

import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { whatsappLink } from "@/data/products";

export default function ProductCarousel({ id, title, products = [] }) {
  const scrollRef = useRef(null);

  const move = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 1200 : -1200,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section
      id={id}
      className="mx-auto my-10 w-full max-w-[1700px] px-6 scroll-mt-32"
    >
      <div className="overflow-hidden rounded-[2rem] border border-yellow-900/10 bg-[#f6efe3] p-5 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-yellow-700">
              Perla Negra
            </p>
            <h2 className="mt-2 text-2xl font-black text-black md:text-3xl">
              {title}
            </h2>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => move("left")}
            className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-400/30 bg-black text-yellow-300 shadow-xl transition hover:scale-110"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-8 pb-4 [scrollbar-width:none]"
          >
            {products.map((product) => (
              <article
                key={product.name}
                className="group flex min-w-[220px] max-w-[220px] flex-col overflow-hidden rounded-[1.8rem] bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* IMAGEN */}
                <div className="relative flex h-[235px] items-center justify-center overflow-hidden bg-white p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[220px] w-auto object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-1 flex-col justify-between p-5 text-center">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.25em] text-yellow-700">
                      {product.category}
                    </p>

                    <h3 className="mt-3 min-h-[56px] text-sm font-black leading-relaxed text-black">
                      {product.name}
                    </h3>

                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-black/50">Unidad</span>
                        <span className="font-black text-red-700">
                          {product.unitPrice}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-black/50">Caja</span>
                        <span className="font-black text-black">
                          {product.boxPrice}
                        </span>
                      </div>

                      <p className="pt-1 text-center text-[11px] font-bold text-yellow-700">
                        {product.unitsPerBox} unidades por caja
                      </p>
                    </div>
                  </div>

                  <a
                    href={whatsappLink(product.name)}
                    target="_blank"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 via-green-500 to-green-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-green-500/40"
                  >
                    <MessageCircle className="h-4 w-4" />

                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => move("right")}
            className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-400/30 bg-black text-yellow-300 shadow-xl transition hover:scale-110"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
