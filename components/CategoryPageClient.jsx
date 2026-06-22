"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { useRegion, setRegionCache } from "@/app/hooks/useRegion";
import { products } from "@/data/products";

const WA = { Lima: "51970820056", Provincia: "51948778362" };

const CATS = [
  { key: "todos", name: "Todos" },
  { key: "Whisky", name: "Whisky" },
  { key: "Ron", name: "Ron" },
  { key: "Vodka", name: "Vodka" },
  { key: "Vinos", name: "Vinos" },
  { key: "Pisco", name: "Pisco" },
  { key: "Tequila", name: "Tequila" },
  { key: "Gin", name: "Gin" },
  { key: "Champagne", name: "Espumantes" },
  { key: "Licores", name: "Cremas" },
  { key: "Energizantes", name: "Energizantes" },
];

const WA_SVG = (
  <svg style={{ width: "16px", height: "16px", flex: "none" }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.87 9.87 0 001.512 5.26l-.999 3.648 3.477-.91zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const PIN_SVG = (
  <svg className="ico pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);

function splitNameVol(fullName) {
  const m = fullName.match(/^(.*?)\s+(\d+(?:\.\d+)?\s*(?:ml|ML|l|L|lt|g|kg))\s*$/i);
  return m ? { name: m[1], vol: m[2] } : { name: fullName, vol: null };
}

function ProductCard({ p, region }) {
  const [loaded, setLoaded] = useState(false);
  const cur = region || "Lima";
  const num = WA[cur] || WA.Lima;
  const { name: displayName, vol } = splitNameVol(p.name);
  const msg = `Hola Perla Negra 👋, quiero pedir:\n• ${p.name} — ${p.unitPrice}\nZona: ${cur}`;
  const href = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  const hasPhoto = !!p.image;

  return (
    <div className="pcard">
      <div className={`pthumb${hasPhoto ? " has-photo" : ""}`}>
        {p.badge && <span className="pbadge">Oferta</span>}
        {hasPhoto ? (
          <img
            className={`pphoto${loaded ? " loaded" : ""}`}
            src={p.image}
            alt={p.name}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        ) : (
          <>
            <div className="bottle" />
            <div className="pl-cat">{p.category}</div>
          </>
        )}
      </div>
      <div className="pbody">
        <span className="pcat">{p.category}</span>
        <h3>{displayName}</h3>
        {vol && <span className="pvol">{vol}</span>}
        <div className="pprice">
          <span className="now">{p.unitPrice}</span>
        </div>
        <a className="btn btn-wa" href={href} target="_blank" rel="noopener">
          {WA_SVG} Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function CategoryPageClient({ params }) {
  const region = useRegion();
  const cur = region || "Lima";
  const [activeCat, setActiveCat] = useState(params?.slug ? params.slug.charAt(0).toUpperCase() + params.slug.slice(1) : "todos");
  const [query, setQuery] = useState("");

  const changeRegion = (r) => {
    setRegionCache(r, true);
    window.location.reload();
  };

  let list = products;
  if (activeCat !== "todos") list = list.filter((p) => p.category === activeCat);
  if (query) list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <main>
      <Header />
      <section className="section" id="catalogo">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Catálogo</span>
            <h2 className="silver-text">Nuestros productos</h2>
          </div>

          {/* Region banner */}
          <div className="region-banner" style={{ marginBottom: "24px" }}>
            {PIN_SVG}
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

          {/* Buscador */}
          <div className="cat-toolbar">
            <div className="search-box">
              <svg className="ico si" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                placeholder="Buscar producto…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Chips de categoría */}
          <div className="chips">
            {CATS.map((c) => (
              <button
                key={c.key}
                className={`chip${activeCat === c.key ? " active" : ""}`}
                onClick={() => setActiveCat(c.key)}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Grid de productos */}
          <div className="product-grid">
            {list.length === 0 ? (
              <div className="catalog-empty">
                No encontramos productos con ese filtro.<br />
                Prueba otra categoría o escríbenos por WhatsApp.
              </div>
            ) : (
              list.map((p, i) => (
                <ProductCard key={i} p={p} region={cur} />
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
