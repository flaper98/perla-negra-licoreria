"use client";

import AgeNotice from "@/components/AgeNotice";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import CategoryPromotions from "@/components/CategoryPromotions";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { useRegion } from "@/app/hooks/useRegion";

const WA = { Lima: "51970820056", Provincia: "51948778362" };

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="cta-inner">
          <div>
            <span className="eyebrow">Todo en un solo lugar</span>
            <h2 className="silver-text">¿Buscas algo en específico?</h2>
            <p>Whisky, ron, vodka, pisco, vinos, licores, energizantes y más. Tenemos el catálogo más completo.</p>
          </div>
          <div className="cta-row">
            <a href="/categoria/whisky" className="btn btn-blue">
              Ver catálogo completo
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="/#categorias" className="btn btn-ghost" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.22)" }}>
              Ver por categorías
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const CHECK_SVG = <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;

function MayoristaSection({ region }) {
  const cur = region || "Lima";
  const num = WA[cur] || WA.Lima;
  const href = `https://wa.me/${num}?text=${encodeURIComponent("Hola Perla Negra 👋, quiero información sobre precios mayoristas.")}`;

  return (
    <section className="section" id="mayorista" style={{ background: "#0C1A33", paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="wrap">
        <div className="band-mayor">
          <div className="band-copy">
            <span className="eyebrow" style={{ color: "#9DBBF7" }}>Compra por volumen</span>
            <h2 className="silver-text">Precios mayoristas para tu negocio</h2>
            <p>¿Tienes un bar, restaurante, licorería o evento? Escríbenos y te cotizamos con precios especiales. Atendemos pedidos desde 1 caja.</p>
            <ul className="mayor-list">
              <li>{CHECK_SVG} Precios especiales por volumen</li>
              <li>{CHECK_SVG} Pago flexible: Yape, Plin, transferencia, efectivo</li>
              <li>{CHECK_SVG} Delivery incluido en pedidos grandes en Lima</li>
              <li>{CHECK_SVG} Armado de packs y combos personalizados</li>
            </ul>
            <a className="btn btn-wa" href={href} target="_blank" rel="noopener" style={{ marginTop: "30px" }}>
              <svg className="ico" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
              </svg>
              Pedir cotización mayorista
            </a>
          </div>
          <div className="band-img">
            <img src="/img/logo.webp" alt="Perla Negra Mayorista" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const region = useRegion();

  return (
    <>
      <AgeNotice />
      <Header />
      <Hero />
      <Categories />
      <CategoryPromotions />
      <CtaBand />
      <MayoristaSection region={region} />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
