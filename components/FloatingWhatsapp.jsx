import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/products";

export default function FloatingWhatsapp() {
  return (
    <a href={whatsappLink()} target="_blank" aria-label="WhatsApp Perla Negra" className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 transition hover:scale-110 hover:bg-green-400">
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
