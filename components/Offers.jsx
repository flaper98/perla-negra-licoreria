"use client";

import { MessageCircle, Flame } from "lucide-react";
import { getWhatsappLink } from "@/data/products";

const offers = [
  {
    title: "Combo Licorería",
    description: "Whisky, ron, vodka y energizantes para abastecer tu negocio.",
    label: "Más pedido",
    image: "/img/combos/combo-licoreria.jpg",
  },
  {
    title: "Oferta por Caja",
    description:
      "Precios especiales comprando por caja. Consulta marcas disponibles.",
    label: "Mayorista",
    image: "/img/combos/combo-caja.jpg",
  },
  {
    title: "Combo Eventos",
    description: "Licores variados para reuniones, fiestas y celebraciones.",
    label: "Oferta",
    image: "/img/combos/combo-eventos.jpg",
  },
];

export default function Offers() {
  return (
    <section id="ofertas" className="bg-[#f4efe4] px-6 py-12">
      <div className="mx-auto max-w-[1700px]">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-700">
            Ofertas
          </p>
          <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
            Combos y promociones de la semana
          </h2>
          <p className="mt-2 text-black/60">
            Arma tu pedido por mayor o menor y consulta directo por WhatsApp.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-black">
                  <Flame className="h-4 w-4" />
                  {offer.label}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-black">
                  {offer.title}
                </h3>

                <p className="mt-2 text-sm text-black/60">
                  {offer.description}
                </p>

                <button
                  onClick={() =>
                    window.open(getWhatsappLink(offer.title), "_blank")
                  }
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 font-black text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir por WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
