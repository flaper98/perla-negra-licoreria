"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsappLink } from "@/data/products";
import { promotions } from "@/data/promotions";
import { useRef } from "react";

export default function CategoryPromotions() {
  const categories = [...new Set(promotions.map((p) => p.category))];
  const scrollRefs = useRef({});

  const move = (category, direction) => {
    scrollRefs.current[category]?.scrollBy({
      left: direction === "right" ? 900 : -900,
      behavior: "smooth",
    });
  };

  return (
    <section id="ofertas" className="bg-[#f4efe4] px-6 py-14">
      <div className="mx-auto max-w-[1700px] space-y-14">
        {categories.map((category) => {
          const items = promotions.filter((p) => p.category === category);

          return (
            <div key={category} id={category.toLowerCase()}>
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-700">
                  Promociones
                </p>

                <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
                  Promos de {category}
                </h2>

                <p className="mt-2 text-black/60">
                  Packs y ofertas disponibles por WhatsApp.
                </p>
              </div>

              <div className="relative">
                <button
                  onClick={() => move(category, "left")}
                  className="absolute -left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-yellow-300 shadow-xl transition hover:scale-110"
                >
                  <ChevronLeft />
                </button>

                <div
                  ref={(el) => {
                    scrollRefs.current[category] = el;
                  }}
                  className="flex gap-5 overflow-x-auto scroll-smooth px-2 pb-6 [scrollbar-width:none]"
                >
                  {items.map((promo) => {
                    const isHorizontal = promo.layout === "horizontal";

                    return (
                      <article
                        key={promo.name}
                        className={`group overflow-hidden rounded-[1.8rem] bg-white shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl ${
                          isHorizontal
                            ? "min-w-[520px] max-w-[520px]"
                            : "min-w-[340px] max-w-[340px]"
                        }`}
                      >
                        <div
                          className={`relative flex items-center justify-center overflow-hidden bg-black ${
                            isHorizontal ? "h-[416px]" : "h-[425px]"
                          }`}
                        >
                          <img
                            src={promo.image}
                            alt={promo.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex items-center justify-between gap-3 p-4">
                          <div className="min-w-0">
                            <h3 className="truncate text-base font-black text-black">
                              {promo.name}
                            </h3>
                            <p className="text-xs text-black/50">
                              Pack mayorista disponible
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              window.open(getWhatsappLink(promo.name), "_blank")
                            }
                            className="shrink-0 rounded-full bg-green-500 px-4 py-2 text-xs font-black text-white transition hover:bg-green-400"
                          >
                            Consultar
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <button
                  onClick={() => move(category, "right")}
                  className="absolute -right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-yellow-300 shadow-xl transition hover:scale-110"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}