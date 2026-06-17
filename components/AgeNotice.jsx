"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const STORAGE_KEY = "age_verified";

export default function AgeNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(STORAGE_KEY);
    if (!verified) setVisible(true);
  }, []);

  const confirm = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const deny = () => {
    window.location.href = "https://www.who.int/es/news-room/fact-sheets/detail/alcohol";
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-yellow-500/30 bg-[#0c0a07] shadow-2xl shadow-black/60">

        {/* Glow decorativo */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 opacity-40"
          style={{ background: "radial-gradient(ellipse at top, rgba(212,160,23,0.25) 0%, transparent 70%)" }}
        />

        <div className="relative flex flex-col items-center px-8 py-10 text-center">
          {/* Logo */}
          <img
            src="/img/logo.png"
            alt="Perla Negra"
            className="mb-5 h-16 w-16 rounded-full border border-yellow-500/30 bg-white object-contain p-1"
          />

          {/* Icono + título */}
          <div className="mb-2 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-yellow-400" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
              Verificación de edad
            </p>
          </div>

          <h2 className="mb-3 text-2xl font-black text-white">
            ¿Eres mayor de 18 años?
          </h2>

          <p className="mb-8 text-sm leading-relaxed text-white/50">
            Este sitio ofrece productos alcohólicos. El acceso está permitido
            únicamente a personas mayores de edad según la legislación peruana.
          </p>

          {/* Botones */}
          <div className="flex w-full flex-col gap-3">
            <button
              onClick={confirm}
              className="w-full rounded-full bg-yellow-400 py-3.5 text-sm font-black text-black transition hover:bg-yellow-300"
            >
              Sí, soy mayor de 18 años
            </button>

            <button
              onClick={deny}
              className="w-full rounded-full border border-white/15 py-3.5 text-sm font-black text-white/50 transition hover:border-white/30 hover:text-white/80"
            >
              No, salir
            </button>
          </div>

          <p className="mt-6 text-[11px] text-white/25">
            Beber con moderación. Prohibida la venta a menores de edad.
          </p>
        </div>
      </div>
    </div>
  );
}
