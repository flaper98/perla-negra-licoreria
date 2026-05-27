"use client";

import {
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { getWhatsappLink } from "@/data/products";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#070707] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-black text-[#d4a017]">Perla Negra</h3>
          <p className="mt-4 max-w-md text-white/60">
            Licores al por mayor y menor con atención rápida por WhatsApp.
          </p>
          <p className="mt-3 text-sm text-white/40">
            Venta exclusiva para mayores de 18 años. Consumo responsable.
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-black text-[#d4a017]">Contacto</h4>

          <div className="space-y-4 text-sm text-white/70">
            <p className="flex gap-3">
              <Phone className="h-5 w-5 text-green-400" />
              +51 970 820 056 / +51 948 778 362
            </p>

            <p className="flex gap-3">
              <MapPin className="h-5 w-5 text-[#d4a017]" />
              Jr. Callería 410, Manantay, Pucallpa, Perú
            </p>

            <p className="flex gap-3">
              <Clock className="h-5 w-5 text-[#d4a017]" />
              Atención todos los días · 24/7
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-black text-[#d4a017]">Redes</h4>

          <div className="flex gap-3">
            <a
              className="rounded-full bg-white/10 p-3 text-[#d4a017] transition hover:bg-white/20"
              href="#"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              className="rounded-full bg-white/10 p-3 text-[#d4a017] transition hover:bg-white/20"
              href="#"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              className="rounded-full bg-green-500 p-3 text-white transition hover:bg-green-400"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(getWhatsappLink(), "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/45">
        © 2026 Perla Negra. Todos los derechos reservados.
      </div>
    </footer>
  );
}
