"use client";

import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsappLink } from "@/data/products";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-black">
      <div className="relative h-[560px] md:h-[580px]">
        {/* Imagen estática en móvil — carga instantánea para Facebook Ads */}
        <img
          src="/img/hero-mobile.png"
          alt="Perla Negra Distribuidora de Licores"
          className="absolute inset-0 h-full w-full object-cover block md:hidden"
          fetchpriority="high"
        />

        {/* Video solo en desktop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover hidden md:block"
        >
          <source src="/video/video_portada.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
              Perla Negra
            </p>

            <h1 className="mb-4 text-4xl font-black leading-tight md:text-6xl">
              LICORES AL POR MAYOR Y MENOR
            </h1>

            <p className="mb-5 text-base text-white/85 md:text-xl">
              Abastece tu negocio con licores originales, precios mayoristas y
              atención directa por WhatsApp. ¡Compra fácil y rápido con
              nosotros!
            </p>

            {/* Precios gancho — el primero coincide con el anuncio activo */}
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-yellow-400 bg-yellow-400/20 px-3 py-1 text-xs font-black text-yellow-300 backdrop-blur-sm">
                🔥 JW Black + Double Black 2x · S/150
              </span>
              {[
                "JW Red Label 12u · S/390",
                "Absolut Vodka 12u · S/400",
                "Jose Cuervo · S/56",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-yellow-400/40 bg-black/40 px-3 py-1 text-xs font-black text-yellow-300 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={getWhatsappLink("JW Black Label + JW Double Black — 2 botellas Lima S/150")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-base font-black text-white shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-green-400"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir por WhatsApp
              </a>

              <a
                href="#ofertas"
                className="inline-flex items-center gap-2 rounded-full border-2 border-yellow-400 px-7 py-3.5 text-base font-black text-yellow-400 transition hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                <ChevronDown className="h-5 w-5" />
                Ver Ofertas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
