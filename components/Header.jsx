"use client";

import {
  MessageCircle,
  Menu,
  X,
  Instagram,
  Facebook,
  Music2,
  Search,
  Wine,
  Flame,
  ShieldCheck,
  Truck,
  BadgePercent,
} from "lucide-react";
import { getWhatsappLink } from "@/data/products";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    setMenuOpen(false);
    router.push(`/buscar?q=${encodeURIComponent(query)}`);
  };

  const links = [
    { name: "Inicio", href: "/", icon: Flame },
    { name: "Ofertas", href: "/#ofertas", icon: BadgePercent },
    { name: "Whisky", href: "/categoria/whisky", icon: Wine },
    { name: "Ron", href: "/categoria/ron", icon: Wine },
    { name: "Vodka", href: "/categoria/vodka", icon: Wine },
    { name: "Gin", href: "/categoria/gin", icon: Wine },
    { name: "Vinos", href: "/categoria/vinos", icon: Wine },
    { name: "Champagne", href: "/categoria/champagne", icon: Wine },
    { name: "Tequila", href: "/categoria/tequila", icon: Wine },
    { name: "Pisco", href: "/categoria/pisco", icon: Wine },
    { name: "Energizantes", href: "/categoria/energizantes", icon: Flame },
    { name: "Licores", href: "/categoria/licores", icon: Wine },
  ];

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-3 sm:px-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-yellow-500/30 bg-[#080706]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-500/40 bg-black text-yellow-400 shadow-lg lg:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none"
          >
            <img
              src="/img/logo.png"
              alt="Perla Negra"
              className="h-12 w-12 rounded-full border border-yellow-500/30 bg-white object-contain p-1"
            />
            <div className="min-w-0">
              <p className="truncate text-xl font-black text-white">
                Perla Negra
              </p>
              <p className="truncate text-[10px] uppercase tracking-[0.28em] text-yellow-500">
                Licores Mayoristas
              </p>
            </div>
          </Link>

          <form onSubmit={handleSearch} className="hidden flex-1 lg:flex">
            <div className="flex w-full items-center rounded-full border border-yellow-500/20 bg-white/95 px-4 py-2.5">
              <Search className="mr-2 h-4 w-4 text-black/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar whisky, ron, vodka..."
                className="w-full bg-transparent text-sm text-black outline-none"
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
              rel="noopener noreferrer"
              className="ml-2 inline-flex rounded-full bg-green-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-green-500/25 hover:bg-green-400"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

        <nav className="hidden border-t border-yellow-500/15 lg:flex">
          <div className="flex w-full items-center justify-center gap-7 px-8 py-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-white/80 hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {menuOpen && (
          <div className="bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.18),transparent_35%),#090806] px-4 pb-5 pt-4 lg:hidden">
            <form onSubmit={handleSearch} className="mb-5">
              <div className="flex items-center rounded-2xl border border-yellow-500/30 bg-white px-4 py-3">
                <Search className="mr-2 h-5 w-5 text-black/40" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full text-sm text-black outline-none"
                />
              </div>
            </form>

            <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-yellow-400">
              <Wine className="h-4 w-4" />
              Categorías
            </p>

            <nav className="grid grid-cols-2 gap-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 rounded-2xl border border-yellow-500/20 bg-white/[0.07] px-4 py-3 font-black text-white shadow-inner hover:border-yellow-400 hover:bg-yellow-500/10"
                  >
                    <Icon className="h-4 w-4 text-yellow-400" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center rounded-2xl bg-green-500 px-5 py-4 text-lg font-black text-white shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Pedir por WhatsApp
            </a>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] text-white/70">
              <div className="rounded-2xl bg-white/5 p-3">
                <ShieldCheck className="mx-auto mb-1 h-5 w-5 text-yellow-400" />
                Originales
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <Truck className="mx-auto mb-1 h-5 w-5 text-yellow-400" />
                Envíos
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <BadgePercent className="mx-auto mb-1 h-5 w-5 text-yellow-400" />
                Mayorista
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
