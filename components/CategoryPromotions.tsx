"use client";

import { useState, useRef } from "react";
import { useRegion, setRegionCache } from "@/app/hooks/useRegion";
import { promotionLima } from "@/data/promotion_lima";
import { promotions as promotionProvincia } from "@/data/promotions";

const WA = { Lima: "51970820056", Provincia: "51948778362" };

function waLink(region: string, msg: string) {
  return `https://wa.me/${WA[region as keyof typeof WA] || WA.Lima}?text=${encodeURIComponent(msg)}`;
}

const WA_SVG = (
  <svg style={{width:"16px",height:"16px",flex:"none"}} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
  </svg>
);

const STEP = 9;

export default function CategoryPromotions() {
  const region = useRegion();
  const cur = region || "Lima";

  const promos: any[] = cur === "Lima" ? promotionLima : promotionProvincia;

  const [shown, setShown] = useState(STEP);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const changeRegion = (r: string) => {
    setRegionCache(r, true);
    window.location.reload();
  };

  const handleLoad = (i: number) => setLoaded(prev => ({ ...prev, [i]: true }));

  return (
    <section className="section" id="ofertas">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Ofertas · Combos · Packs</span>
          <h2 className="silver-text">Promociones de hoy</h2>
          <p className="sub">Promociones vigentes para tu zona. Toca cualquier afiche para pedir esa promoción por WhatsApp.</p>
        </div>

        {/* Region banner */}
        <div className="region-banner" style={{ marginBottom: "28px" }}>
          <svg className="ico pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>
          </svg>
          <div>
            <b>Zona: <span>{cur}</span></b>
            <div className="txt">
              {cur === "Lima"
                ? "Mostrando los productos seleccionados disponibles para Lima Metropolitana."
                : "Mostrando el catálogo con envío a provincias. Disponibilidad para todo el Perú."}
            </div>
          </div>
          <div className="region-toggle switch" style={{ marginLeft: "auto" }}>
            <button className={cur === "Lima" ? "active" : ""} onClick={() => changeRegion("Lima")}>Lima</button>
            <button className={cur === "Provincia" ? "active" : ""} onClick={() => changeRegion("Provincia")}>Provincias</button>
          </div>
        </div>

        {promos.length === 0 ? (
          <div className="empty">Pronto nuevas promociones para {cur}.<br />Escríbenos por WhatsApp para conocer las ofertas vigentes en tu zona.</div>
        ) : (
          <>
            <div className="promo-grid">
              {promos.slice(0, shown).map((p: any, i: number) => {
                const msg = `Hola Perla Negra 👋, quiero esta promoción: ${p.name}. Zona: ${cur}.`;
                return (
                  <a
                    key={i}
                    className={`promo-card${loaded[i] ? " ready" : ""}`}
                    href={waLink(cur, msg)}
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className={loaded[i] ? "loaded" : ""}
                      onLoad={() => handleLoad(i)}
                    />
                    <span className="promo-cta">
                      {WA_SVG} Pedir por WhatsApp
                    </span>
                  </a>
                );
              })}
            </div>
            {shown < promos.length && (
              <div className="promo-more">
                <button className="btn btn-ghost" onClick={() => setShown(s => s + STEP)}>
                  Ver más promociones ({promos.length - shown})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
