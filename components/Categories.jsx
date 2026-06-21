"use client";

const CATS = [
  { key: "whisky",      name: "Whisky",       icon: "glass" },
  { key: "ron",         name: "Ron",           icon: "glass" },
  { key: "vodka",       name: "Vodka",         icon: "glass" },
  { key: "vinos",       name: "Vinos",         icon: "wine"  },
  { key: "pisco",       name: "Pisco",         icon: "glass" },
  { key: "tequila",     name: "Tequila",       icon: "glass" },
  { key: "gin",         name: "Gin",           icon: "glass" },
  { key: "champagne",   name: "Espumantes",    icon: "wine"  },
  { key: "licores",     name: "Cremas",        icon: "glass" },
  { key: "energizantes",name: "Energizantes",  icon: "can"   },
];

const ICONS = {
  glass: (
    <svg style={{width:"17px",height:"17px"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3h8l-1 9a3 3 0 01-3 2.5A3 3 0 019 12L8 3z"/><path d="M12 14.5V21M8.5 21h7"/>
    </svg>
  ),
  wine: (
    <svg style={{width:"17px",height:"17px"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h10c0 5-2 8-5 8s-5-3-5-8z"/><path d="M12 11v7M8.5 21h7"/>
    </svg>
  ),
  can: (
    <svg style={{width:"17px",height:"17px"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="3" width="10" height="18" rx="2"/><path d="M7 7h10M7 17h10"/>
    </svg>
  ),
};

export default function Categories() {
  return (
    <section className="section" id="categorias" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: "24px" }}>
          <span className="eyebrow">Explora el catálogo</span>
          <h2 className="silver-text">Compra por categoría</h2>
        </div>
        <div className="cat-grid">
          {CATS.map(c => (
            <a key={c.key} className="cat-card" href={`/categoria/${c.key}`}>
              <div className="cico">{ICONS[c.icon]}</div>
              <h3>{c.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
