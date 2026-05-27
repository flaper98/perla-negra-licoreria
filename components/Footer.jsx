import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { getWhatsappLink } from "@/data/products";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-black text-gold">Perla Negra</h3>
          <p className="mt-4 max-w-md text-white/65">
            Licores mayoristas con atención directa por WhatsApp. Prohibida la
            venta de bebidas alcohólicas a menores de edad.
          </p>
        </div>
        <div>
          <h4 className="font-black">Contacto</h4>
          <p className="mt-4 text-white/65">WhatsApp: +51970820056</p>
          <p className="mt-4 text-white/65">WhatsApp: +51948778362</p>

          <p className="mt-2 text-white/65">Dirección: Pucallpa, Perú</p>
          <p className="mt-2 text-white/65">Horario: Lun - Dom</p>
        </div>
        <div>
          <h4 className="font-black">Redes</h4>
          <div className="mt-4 flex gap-3">
            <a className="rounded-full bg-white/10 p-3 text-gold" href="#">
              <Instagram />
            </a>
            <a className="rounded-full bg-white/10 p-3 text-gold" href="#">
              <Facebook />
            </a>
            <a
              className="rounded-full bg-white/10 p-3 text-green-400"
              href={getWhatsappLink()}
              target="_blank"
            >
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/50">
        © 2026 Perla Negra. Todos los derechos reservados.
      </div>
    </footer>
  );
}
