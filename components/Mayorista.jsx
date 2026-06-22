"use client";

import { useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "@/data/products";

const FEATS = [
  { value: "+200",          num: 200, prefix: "+", suffix: "",  label: "Productos en stock" },
  { value: "24h",           num: 24,  prefix: "",  suffix: "h", label: "Despacho en Lima" },
  { value: "Todo el Peru",  num: null,                           label: "Envios a provincias" },
  { value: "Desde 1 caja",  num: 1,   prefix: "",  suffix: " caja", label: "Compra desde" },
];

function animateCounter(el, target, prefix = "", suffix = "") {
  const duration = 1000;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Mayorista() {
  const textRef  = useRef(null);
  const cardRef  = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("visible");

        // Activar contadores en los stat items
        e.target.querySelectorAll("[data-count]").forEach(el => {
          const target = parseInt(el.dataset.count, 10);
          const prefix = el.dataset.prefix ?? "";
          const suffix = el.dataset.suffix ?? "";
          animateCounter(el, target, prefix, suffix);
        });

        observer.unobserve(e.target);
      }),
      { threshold: 0.18 }
    );

    if (textRef.current)  observer.observe(textRef.current);
    if (cardRef.current)  observer.observe(cardRef.current);
    statsRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mayorista"
      className="py-[84px]"
      style={{ background: "linear-gradient(120deg,#0c1d3c,#070d1a)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="mx-auto max-w-page px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Texto */}
          <div ref={textRef} className="reveal-left">
            <span className="eyebrow block mb-4">Venta al por mayor</span>
            <h2 className="silver-text font-display font-bold uppercase text-[clamp(2rem,4.4vw,3.2rem)] mb-4">
              ¿Tienes un negocio?<br />Compra por mayor.
            </h2>
            <p className="text-[1.08rem] leading-relaxed mb-7" style={{ color: "var(--silver-2)" }}>
              Bodegas, bares, restaurantes y eventos: accede a precios especiales
              por caja y volumen. Cotiza tu pedido directo por WhatsApp y te
              enviamos la lista de precios mayorista.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3">
              {FEATS.map(({ value, num, prefix, suffix, label }, i) => (
                <div
                  key={label}
                  className={`reveal reveal-delay-${i + 1} rounded-[var(--r-md)] px-[18px] py-4`}
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)" }}
                >
                  <b
                    className="block font-display text-[1.6rem]"
                    style={{ color: "var(--blue-hi)" }}
                    {...(num != null
                      ? { "data-count": num, "data-prefix": prefix ?? "", "data-suffix": suffix ?? "" }
                      : {})}
                  >
                    {value}
                  </b>
                  <span className="text-[0.85rem]" style={{ color: "var(--muted)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card CTA */}
          <div
            ref={cardRef}
            className="reveal-right rounded-[var(--r-xl)] p-8"
            style={{ background: "var(--panel)", border: "1px solid var(--line-strong)", boxShadow: "var(--shadow)" }}
          >
            <h3 className="silver-text font-display font-bold uppercase text-[1.4rem] mb-2">
              Solicita la lista mayorista
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
              Te enviamos precios por caja, combos para revendedores y
              condiciones de envio a tu zona.
            </p>

            <a
              href={getWhatsappLink("Quiero la lista de precios MAYORISTA")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full py-[13px] mb-3 font-bold text-[0.95rem] transition hover:opacity-90 active:scale-[0.97]"
              style={{ background: "var(--wa)", color: "#04200f" }}
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Cotizar por WhatsApp
            </a>

            <a
              href="#categorias"
              className="flex w-full items-center justify-center rounded-full py-[13px] font-bold text-[0.95rem] transition hover:opacity-80"
              style={{ background: "transparent", color: "var(--text)", border: "1.5px solid var(--line-strong)" }}
            >
              Ver categorias primero
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
