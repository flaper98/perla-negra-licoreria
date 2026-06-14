"use client";

import {
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  Phone,
  Music2,
  ShieldCheck,
} from "lucide-react";
import { getWhatsappLink } from "@/data/products";

const SOCIALS = {
  instagram: "https://www.instagram.com/perlanegra_distribuidora?igsh=OHlteDhqd3o3anFn",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
};

const CATEGORIES = [
  "Whisky", "Ron", "Vodka", "Gin",
  "Tequila", "Vinos", "Champagne", "Pisco",
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-[#050505] text-white">
      {/* Línea dorada superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />

      {/* Glow decorativo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-1/2 -translate-x-1/2 opacity-30"
        style={{ background: "radial-gradient(ellipse at top, rgba(212,160,23,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1: Marca */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/img/logo.png"
                alt="Perla Negra"
                className="h-12 w-12 rounded-full border border-yellow-500/30 bg-white object-contain p-1"
              />
              <div>
                <p className="text-xl font-black text-white">Perla Negra</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-500">
                  Licores Mayoristas
                </p>
              </div>
            </div>

            <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/55">
              Distribuidora de licores al por mayor y menor con atención directa
              por WhatsApp. Productos originales, precios competitivos y envíos
              a todo el Perú.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/35">
              <ShieldCheck className="h-4 w-4 text-yellow-600/60" />
              Venta exclusiva para mayores de 18 años. Consumo responsable.
            </div>

            {/* Redes sociales */}
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 transition hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SOCIALS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 transition hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-green-400 transition hover:bg-green-500/20"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Categorías */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-widest text-yellow-500">
              Categorías
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <a
                    href={`/categoria/${cat.toLowerCase()}`}
                    className="text-sm text-white/50 transition hover:text-yellow-400"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-widest text-yellow-500">
              Contacto
            </h4>
            <div className="space-y-4 text-sm text-white/55">
              <a
                href="tel:+51970820056"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <span>+51 970 820 056<br />+51 948 778 362</span>
              </a>

              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                Jr. Callería 410, Manantay,<br />Pucallpa, Perú
              </p>

              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                Atención todos los días<br />
                <strong className="text-yellow-400">24 horas</strong>
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-green-500/25 transition hover:bg-green-400"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir al WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-white/[0.07] px-6 py-5 text-center text-xs text-white/30">
        © 2026 Perla Negra. Todos los derechos reservados.
      </div>
    </footer>
  );
}
