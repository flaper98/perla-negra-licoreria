"use client";

import { Truck, BadgeCheck, Headphones, PackageCheck, MessageCircle } from "lucide-react";
import { getWhatsappLink } from "@/data/products";

const benefits = [
  { title: "Precios mayoristas", text: "Ofertas para licorerías, bares, restaurantes y eventos.", icon: PackageCheck },
  { title: "Envíos rápidos", text: "Coordinación directa para despacho en Lima y provincias.", icon: Truck },
  { title: "Productos originales", text: "Catálogo seleccionado de marcas reconocidas.", icon: BadgeCheck },
  { title: "Atención personalizada", text: "Pedidos por unidad, docena o caja mediante WhatsApp.", icon: Headphones }
];

export default function Benefits() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }) => (
            <div key={title} className="glass rounded-3xl p-6 transition hover:-translate-y-1">
              <Icon className="mb-5 h-10 w-10 text-gold" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-black text-white/80">
            ¿Listo para hacer tu pedido?
          </p>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-black text-white shadow-xl shadow-green-500/30 transition hover:scale-105 hover:bg-green-400"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar por WhatsApp ahora
          </a>
          <p className="text-xs text-white/30">Respuesta inmediata · Sin compromiso</p>
        </div>
      </div>
    </section>
  );
}
