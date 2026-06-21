"use client";

import { useEffect, useRef, useState } from "react";
import { useRegion, setRegionCache } from "@/app/hooks/useRegion";
import { promotionLima } from "@/data/promotion_lima";
import { promotions as promotionProvincia } from "@/data/promotions";

const WA = { Lima: "51970820056", Provincia: "51948778362" };
function waLink(region, msg) {
  return `https://wa.me/${WA[region] || WA.Lima}?text=${encodeURIComponent(msg)}`;
}

const WORDS = ["trago", "whisky", "ron", "pisco", "vino"];

const TRUCK_SVG = <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const TAG_SVG = <svg className="ico" style={{width:"13px",height:"13px"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/></svg>;

export default function Hero() {
  const region = useRegion();
  const cur = region || "Lima";

  /* ---- Word rotator ---- */
  const [wordIdx, setWordIdx] = useState(0);
  const [swapping, setSwapping] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setSwapping(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setSwapping(false);
      }, 250);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  /* ---- Mini carousel ---- */
  const pool = cur === "Lima"
    ? promotionLima.slice(0, Math.min(promotionLima.length, 20))
    : promotionProvincia.slice(0, Math.min(promotionProvincia.length, 20));

  const pick = [];
  const step = Math.max(1, Math.floor(pool.length / 5));
  for (let k = 0; k < pool.length && pick.length < 5; k += step) pick.push(pool[k]);

  const [miniIdx, setMiniIdx] = useState(0);
  const [imgLoaded, setImgLoaded] = useState({});
  useEffect(() => {
    if (!pick.length) return;
    const id = setInterval(() => setMiniIdx(i => (i + 1) % pick.length), 2600);
    return () => clearInterval(id);
  }, [pick.length, cur]);

  const handleImgLoad = (i) => setImgLoaded(prev => ({ ...prev, [i]: true }));

  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="hero-grid">
          {/* ---- Copy ---- */}
          <div className="hero-copy">
            <span className="eyebrow">Distribuidora de licores · Perú</span>
            <h1 className="silver-text">
              El mejor <span className={`word-rot${swapping ? " swap" : ""}`}>{WORDS[wordIdx]}</span>,<br />al mejor precio.
            </h1>
            <p className="lede">Combos armados, packs y promociones del día — directo a tu celular. Haz tu pedido por WhatsApp y recíbelo. Atendemos Lima y provincias.</p>
            <div className="cta-row">
              <a href="#ofertas" className="btn btn-blue">
                Ver ofertas y combos
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a href="/categoria/whisky" className="btn btn-ghost">Ir al catálogo</a>
            </div>
            <div className="zona-note">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              Mostrando precios para <b>{cur}</b>
            </div>
          </div>

          {/* ---- Stage ---- */}
          <div className="hero-stage">
            <div className="hero-glow" />
            <div className="ring r1" />
            <div className="ring r2" />
            <img className="hero-emblem" src="/img/logo-transparent.png" alt="Perla Negra Distribuidora" />

            {/* Chip delivery */}
            <div className="hero-chip tl">
              <div className="ci">{TRUCK_SVG}</div>
              <div><b>Delivery hoy</b><span>en Lima Metropolitana</span></div>
            </div>

            {/* Mini carousel */}
            {pick.length > 0 && (
              <div className="promo-mini">
                <div className="pm-label">{TAG_SVG} Promos de hoy</div>
                <div className="pm-frame">
                  {pick.map((p, i) => (
                    <img
                      key={i}
                      src={p.image}
                      alt={`Promo ${i + 1}`}
                      className={i === miniIdx ? "on" : ""}
                      onLoad={() => handleImgLoad(i)}
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="pm-dots">
                  {pick.map((_, i) => (
                    <i key={i} className={i === miniIdx ? "on" : ""} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---- Trust bar ---- */}
      <div className="trust">
        <div className="t">
          <div className="ti">
            <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
          </div>
          <div><b>Pedidos por WhatsApp</b><span>Rápido y sin complicaciones</span></div>
        </div>
        <div className="t">
          <div className="ti">{TRUCK_SVG}</div>
          <div><b>Delivery en Lima</b><span>Entrega en el día</span></div>
        </div>
        <div className="t">
          <div className="ti">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12l8.73-5.04M12 22V12"/></svg>
          </div>
          <div><b>Envíos a provincias</b><span>A todo el Perú</span></div>
        </div>
        <div className="t">
          <div className="ti">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.2 5.2-2.8-2.8L7 14"/></svg>
          </div>
          <div><b>Precios mayoristas</b><span>Compra por cajas y packs</span></div>
        </div>
      </div>
    </section>
  );
}
