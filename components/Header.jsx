"use client";

import {
  MessageCircle,
  Menu,
  Instagram,
  Facebook,
  Music2,
  Search,
} from "lucide-react";
import { getWhatsappLink } from "@/data/products";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    window.location.href = `/buscar?q=${encodeURIComponent(search.trim())}`;
  };

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Ofertas", href: "/#ofertas" },
    { name: "Whisky", href: "/categoria/whisky" },
    { name: "Ron", href: "/categoria/ron" },
    { name: "Vodka", href: "/categoria/vodka" },
    { name: "Gin", href: "/categoria/gin" },
    { name: "Vinos", href: "/categoria/vinos" },
    { name: "Champagne", href: "/categoria/champagne" },
    { name: "Tequila", href: "/categoria/tequila" },
    { name: "Pisco", href: "/categoria/pisco" },
    { name: "Energizantes", href: "/categoria/energizantes" },
    { name: "Licores", href: "/categoria/licores" },
  ];

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-yellow-500/15 bg-[#0b0b0b]/80 shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-5 px-5 py-1.5">
          <a href="/" className="flex min-w-[220px] items-center gap-3">
            <img
              src="/img/logo.png"
              alt="Perla Negra"
              className="h-11 w-auto"
            />
            <div>
              <p className="text-lg font-black text-white">Perla Negra</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4a017]">
                Licores Mayoristas
              </p>
            </div>
          </a>

          <form onSubmit={handleSearch} className="hidden flex-1 lg:flex">
            <div className="flex w-full items-center rounded-full bg-white px-4 py-2">
              <Search className="mr-2 h-4 w-4 text-black/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar whisky, ron, vodka..."
                className="w-full text-sm text-black outline-none"
              />
            </div>
          </form>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#"
              className="rounded-full bg-white/5 p-2 text-white/70 hover:text-yellow-400"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/5 p-2 text-white/70 hover:text-yellow-400"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/5 p-2 text-white/70 hover:text-yellow-400"
            >
              <Music2 className="h-4 w-4" />
            </a>

            <a
              href={getWhatsappLink()}
              target="_blank"
              className="ml-2 inline-flex rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-green-500/30 hover:bg-green-400"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        <nav className="hidden border-t border-yellow-500/20 lg:flex">
          <div className="flex w-full items-center justify-center gap-8 px-8 py-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-semibold tracking-normal text-white/80 transition hover:text-yellow-400"
              >
                {link.name}

                <span className="absolute -bottom-3 left-0 h-[3px] w-0 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
