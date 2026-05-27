"use client";

import { MessageCircle, Menu, Instagram, Facebook, Music2 } from "lucide-react";

import { getWhatsappLink } from "@/data/products";

export default function Header() {
  const links = ["Inicio", "Productos", "Categorías", "Ofertas", "Contacto"];

  return (
    <header className="fixed left-0 top-6 z-50 w-full px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-yellow-400/15 bg-black/50 px-6 py-3 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-4">
          <img src="/img/logo.png" alt="Perla Negra" className="h-10 w-auto" />

          <div>
            <p className="text-lg font-black tracking-wide text-white">
              Perla Negra
            </p>

            <p className="text-[11px] uppercase tracking-[0.28em] text-yellow-400">
              Licores Mayoristas
            </p>
          </div>
        </a>

        {/* MENÚ */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace("í", "i")}`}
              className="transition hover:text-yellow-400"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* DERECHA */}
        <div className="flex items-center gap-3">
          {/* REDES */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://instagram.com"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 backdrop-blur transition hover:border-yellow-400/30 hover:text-yellow-400"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 backdrop-blur transition hover:border-yellow-400/30 hover:text-yellow-400"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 backdrop-blur transition hover:border-yellow-400/30 hover:text-yellow-400"
            >
              <Music2 className="h-4 w-4" />
            </a>
          </div>

          {/* BOTÓN WHATSAPP */}
          <a
            href={getWhatsappLink()}
            target="_blank"
            className="hidden rounded-full bg-gradient-to-r from-green-400 to-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:shadow-green-500/50 sm:flex"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>

          {/* MOBILE */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
