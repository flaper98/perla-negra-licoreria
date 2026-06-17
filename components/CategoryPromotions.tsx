"use client";

import { MessageCircle, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { getWhatsappLink } from "@/data/products";
import { promotions as promotionProvincia } from "@/data/promotions";
import { promotionLima } from "@/data/promotion_lima";
import { useRef } from "react";
import { useRegion, setRegionCache } from "@/app/hooks/useRegion";

const URGENCY = [
  { text: "¡Stock limitado!", color: "text-red-500" },
  { text: "Oferta válida esta semana", color: "text-orange-500" },
  { text: "Últimas unidades disponibles", color: "text-red-500" },
  { text: "Precio especial por WhatsApp", color: "text-green-600" },
  { text: "Solo quedan pocas cajas", color: "text-orange-500" },
  { text: "Precio mayorista hoy", color: "text-amber-600" },
];

function urgencyFor(name: string) {
  const hash = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return URGENCY[hash % URGENCY.length];
}

export default function CategoryPromotions() {
  const scrollRefs = useRef({});
  const region = useRegion();

  if (!region) return null;

  const changeRegion = (newRegion: string) => {
    setRegionCache(newRegion, true);
    window.location.reload();
  };

  const LIMA_GROUP_TITLES: Record<string, string> = {
    mayorista:  "Packs Mayoristas · 12 Botellas",
    jw:         "Colección Johnnie Walker",
    premium:    "Whiskies & Licores Exclusivos",
    combinados: "Packs Combinados Lima",
    jack:       "Colección Jack Daniel's",
    otros:      "Ron, Tequila & Vodka",
  };

  const LIMA_GROUP_ORDER = ["jw", "mayorista", "combinados", "jack", "premium", "otros"];

  const limaGroups = LIMA_GROUP_ORDER
    .map((group) => ({
      category: `Lima-${group}`,
      title: LIMA_GROUP_TITLES[group],
      items: promotionLima.filter((p: any) => p.group === group),
    }))
    .filter((g) => g.items.length > 0);

  const provinciaGroups = [
    ...new Set(promotionProvincia.map((p) => p.category)),
  ].map((category) => ({
    category,
    title: `Promos de ${category}`,
    items: promotionProvincia.filter((p) => p.category === category),
  }));

  const groups = region === "Lima" ? limaGroups : provinciaGroups;

  const move = (category, direction) => {
    const container = scrollRefs.current[category];
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const amount = 700;

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
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-black via-[#17120b] to-black p-4 shadow-xl">
  <div className="flex items-center gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg">
      <MapPin className="h-5 w-5" />
    </div>

    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-yellow-400">
        Ubicación
      </p>
      <p className="text-lg font-black text-white">
        Promociones para {region}
      </p>
    </div>
  </div>

  <div className="flex rounded-full bg-white/10 p-1">
    <button
      onClick={() => changeRegion("Lima")}
      className={`rounded-full px-5 py-2 text-sm font-black transition ${
        region === "Lima"
          ? "bg-yellow-400 text-black shadow-lg"
          : "text-white/70 hover:text-yellow-300"
      }`}
    >
      Lima
    </button>

    <button
      onClick={() => changeRegion("Provincia")}
      className={`rounded-full px-5 py-2 text-sm font-black transition ${
        region === "Provincia"
          ? "bg-yellow-400 text-black shadow-lg"
          : "text-white/70 hover:text-yellow-300"
      }`}
    >
      Provincia
    </button>
  </div>
</div>

        {groups.map((group) => (
          <div key={group.category} id={group.category.toLowerCase()}>
            <div className="mb-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-700">
                Promociones para {region}
              </p>

              <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
                {group.title}
              </h2>

              <p className="mt-2 text-black/60">
                Packs y ofertas disponibles por WhatsApp.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={() => move(group.category, "left")}
                className="absolute -left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-yellow-300 shadow-xl transition hover:scale-110"
              >
                <ChevronLeft />
              </button>

              <div
                ref={(el) => {
                  scrollRefs.current[group.category] = el;
                }}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {group.items.map((promo) => {
                  const isHorizontal = promo.layout === "horizontal";
                  const urgency = urgencyFor(promo.name);

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

                          <p className={`flex items-center gap-1 text-xs font-bold ${urgency.color}`}>
                            <span className={`inline-block h-1.5 w-1.5 rounded-full ${urgency.color.replace("text-", "bg-")}`} />
                            {urgency.text}
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
                onClick={() => move(group.category, "right")}
                className="absolute -right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-yellow-300 shadow-xl transition hover:scale-110"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}