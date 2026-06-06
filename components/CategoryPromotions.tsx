"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsappLink } from "@/data/products";
import { promotions as promotionProvincia } from "@/data/promotions";
import { promotionLima } from "@/data/promotion_lima";
import { useRef } from "react";
import { useRegion } from "@/app/hooks/useRegion";

export default function CategoryPromotions() {
  const scrollRefs = useRef({});
  const region = useRegion();

  if (!region) return null;

  const activePromotions =
    region === "Lima" ? promotionLima : promotionProvincia;

  const categories = [
    ...new Set(activePromotions.map((p) => p.category)),
  ];

  const move = (category, direction) => {
    const container = scrollRefs.current[category];
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const amount = 900;

    const nextPosition =
      direction === "right"
        ? Math.min(container.scrollLeft + amount, maxScroll)
        : Math.max(container.scrollLeft - amount, 0);

    container.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="ofertas" className="bg-[#f4efe4] px-6 py-14">
      <div className="mx-auto max-w-[1700px] space-y-14">
        {categories.map((category) => {
          const items = activePromotions.filter(
            (p) => p.category === category
          );

          return (
            <div key={category} id={category.toLowerCase()}>
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-700">
                  Promociones para {region}
                </p>

                <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
                  {region === "Lima"
                    ? "Promociones Lima"
                    : `Promos de ${category}`}
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
                  className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {items.map((promo) => {
                    const isHorizontal = promo.layout === "horizontal";

                    return (
                      <article
                          key={`${promo.category}-${promo.name}-${promo.image}`}
                          className={`snap-start group overflow-hidden rounded-[1.8rem] bg-white shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl ${
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
                            loading="lazy"
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
                              window.open(
                                getWhatsappLink(promo.name),
                                "_blank"
                              )
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