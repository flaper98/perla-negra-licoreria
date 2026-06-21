/* ============================================================
   PERLA NEGRA — núcleo compartido (datos + lógica común)
   Usado por la página de inicio y por el catálogo.
   ============================================================ */
window.PN = (function () {
  /* ---------- CONFIG ---------- */
  const WA = { lima: "51970820056", provincias: "51948778362" };
  const ZONA_LABEL = { lima: "Lima", provincias: "Provincias" };
  const ZONA_TXT = {
    lima: "Mostrando los productos seleccionados disponibles para Lima Metropolitana.",
    provincias: "Mostrando el catálogo con envío a provincias. Disponibilidad para todo el Perú."
  };

  /* ---------- CATEGORÍAS ---------- */
  const CATS = [
    { key: "whisky", name: "Whisky", icon: "glass" },
    { key: "ron", name: "Ron", icon: "glass" },
    { key: "vodka", name: "Vodka", icon: "glass" },
    { key: "vinos", name: "Vinos", icon: "wine" },
    { key: "pisco", name: "Pisco", icon: "glass" },
    { key: "tequila", name: "Tequila", icon: "glass" },
    { key: "gin", name: "Gin", icon: "glass" },
    { key: "espumantes", name: "Espumantes", icon: "wine" },
    { key: "cremas", name: "Cremas", icon: "glass" },
    { key: "energizantes", name: "Energizantes", icon: "can" }
  ];
  const CAT_NAME = Object.fromEntries(CATS.map(c => [c.key, c.name]));

  /* ---------- PRODUCTOS ----------
     lima / prov = precio en S/. null = no disponible en esa zona.
     was = precio anterior (marca oferta). vol = presentación. */
  const PRODUCTS = [
    { name: "Johnnie Walker Red Label", cat: "whisky", vol: "750 ml", lima: 48, prov: 48, img: "assets/productos/jw-red.jpg" },
    { name: "Johnnie Walker Black Label", cat: "whisky", vol: "750 ml", lima: 90.8, prov: 90.8, img: "assets/productos/jw-black.jpg" },
    { name: "Johnnie Walker Double Black", cat: "whisky", vol: "750 ml", lima: 120, prov: 120, img: "assets/productos/jw-double-black.jpg" },
    { name: "Johnnie Walker Gold Label", cat: "whisky", vol: "750 ml", lima: 200, prov: 200, img: "assets/productos/jw-gold.jpg" },
    { name: "Johnnie Walker Blue Label", cat: "whisky", vol: "750 ml", lima: 850, prov: 850, img: "assets/productos/jw-blue.jpg" },
    { name: "Johnnie Walker Green Label", cat: "whisky", vol: "750 ml", lima: 230, prov: 230, img: "assets/productos/jw-green.jpg" },
    { name: "Ballantine's Finest", cat: "whisky", vol: "750 ml", lima: 48, prov: 48, img: "assets/productos/ballantines.jpg" },
    { name: "Something Special", cat: "whisky", vol: "750 ml", lima: 45, prov: 45, img: "assets/productos/something-special.jpg" },
    { name: "Passport Scotch", cat: "whisky", vol: "700 ml", lima: 40, prov: 40, img: "assets/productos/passport.jpg" },
    { name: "Chivas Regal 12 años", cat: "whisky", vol: "700 ml", lima: 90, prov: 90, img: "assets/productos/chivas-12.jpg" },
    { name: "Jack Daniel's Old No. 7", cat: "whisky", vol: "750 ml", lima: 93, prov: 93, img: "assets/productos/jd-black.jpg" },
    { name: "Jack Daniel's Tennessee Apple", cat: "whisky", vol: "750 ml", lima: 93, prov: 93, img: "assets/productos/jd-apple.jpg" },
    { name: "Cartavio Blanco", cat: "ron", vol: "750 ml", lima: 24, prov: 24, img: "assets/productos/cartavio-blanco.jpg" },
    { name: "Cartavio Rubio", cat: "ron", vol: "750 ml", lima: 24, prov: 24, img: "assets/productos/cartavio-rubio.jpg" },
    { name: "Barceló Añejo", cat: "ron", vol: "750 ml", lima: 50, prov: 50, img: "assets/productos/barcelo-anejo.jpg" },
    { name: "Flor de Caña Oro 4 Años", cat: "ron", vol: "750 ml", lima: 45, prov: 45, img: "assets/productos/flor-cana-oro-4.jpg" },
    { name: "Flor de Caña Clásico 5 Años", cat: "ron", vol: "750 ml", lima: 55, prov: 55, img: "assets/productos/flor-cana-clasico-5.jpg" },
    { name: "Flor de Caña 7 Años", cat: "ron", vol: "1 L", lima: 70, prov: 70, img: "assets/productos/flor-cana-7.jpg" },
    { name: "Flor de Caña 12 Años", cat: "ron", vol: "750 ml", lima: 98, prov: 98, img: "assets/productos/flor-cana-12.jpg" },
    { name: "Ron Cabo Blanco Black", cat: "ron", vol: "1 L", lima: 30, prov: 30, img: "assets/productos/cabo-blanco-black.jpg" },
    { name: "Smirnoff Clásico", cat: "vodka", vol: "700 ml", lima: 30, prov: 30, img: "assets/productos/smirnoff-clasico.jpg" },
    { name: "Smirnoff Green Apple", cat: "vodka", vol: "750 ml", lima: 30, prov: 30, img: "assets/productos/smirnoff-apple.jpg" },
    { name: "Smirnoff Ice Green Apple Bite", cat: "vodka", vol: "355 ml", lima: 7.5, prov: 7.5, img: "assets/productos/smirnoff-ice-apple.jpg" },
    { name: "Absolut Vodka", cat: "vodka", vol: "750 ml", lima: 48, prov: 48, img: "assets/productos/absolut.jpg" },
    { name: "Santiago Queirolo Borgoña", cat: "vinos", vol: "750 ml", lima: 17, prov: 17, img: "assets/productos/sq-borgona.jpg" },
    { name: "Santiago Queirolo Magdalena", cat: "vinos", vol: "750 ml", lima: 15, prov: 15, img: "assets/productos/sq-magdalena.jpg" },
    { name: "Tabernero Borgoña", cat: "vinos", vol: "750 ml", lima: 17, prov: 17, img: "assets/productos/tabernero-borgona.jpg" },
    { name: "Tabernero Rosé", cat: "vinos", vol: "750 ml", lima: 15, prov: 15, img: "assets/productos/tabernero-gran-rose.jpg" },
    { name: "Tabernero Rosé Semiseco Selección", cat: "vinos", vol: "750 ml", lima: 20, prov: 20, img: "assets/productos/tabernero-rose-seleccion.jpg" },
    { name: "Tuyo Gran Rosé", cat: "vinos", vol: "750 ml", lima: 16, prov: 16, img: "assets/productos/tuyo-gran-rose.jpg" },
    { name: "Pisco Santiago Queirolo Quebranta", cat: "pisco", vol: "750 ml", lima: 27, prov: 27, img: "assets/productos/sq-quebranta.jpg" },
    { name: "Pisco Santiago Queirolo Acholado", cat: "pisco", vol: "750 ml", lima: 27, prov: 27, img: "assets/productos/sq-acholado.jpg" },
    { name: "Pisco Portón", cat: "pisco", vol: "750 ml", lima: 90, prov: 90 },
    { name: "1800 Tequila Reserva Añejo", cat: "tequila", vol: "750 ml", lima: 97.2, prov: 97.2, img: "assets/productos/1800-reserva.jpg" },
    { name: "José Cuervo Especial Gold", cat: "tequila", vol: "750 ml", lima: 56.7, prov: 56.7, img: "assets/productos/jose-cuervo-especial.jpg" },
    { name: "Beefeater Pink Strawberry", cat: "gin", vol: "700 ml", lima: 73.4, prov: 73.4, img: "assets/productos/beefeater-pink.jpg" },
    { name: "Tanqueray London Dry", cat: "gin", vol: "700 ml", lima: 71, prov: 71, img: "assets/productos/tanqueray-london.jpg" },
    { name: "Riccadonna Asti", cat: "espumantes", vol: "750 ml", lima: 55, prov: 55, img: "assets/productos/riccadonna-asti.jpg" },
    { name: "Riccadonna Ruby", cat: "espumantes", vol: "750 ml", lima: 55, prov: 55, img: "assets/productos/riccadonna-ruby.jpg" },
    { name: "Baileys Original Irish Cream", cat: "cremas", vol: "750 ml", lima: 56.7, prov: 56.7, img: "assets/productos/baileys.jpg" },
    { name: "Jigger Crema de Licor", cat: "cremas", vol: "750 ml", lima: 65, prov: 65 },
    { name: "Red Bull Energy Drink", cat: "energizantes", vol: "250 ml", lima: 7, prov: 7, img: "assets/productos/red-bull.jpg" }
  ];

  /* ---------- PROMOCIONES ----------
     Afiches autocontenidos (marca, productos y precio ya en la imagen).
     img = afiche optimizado. zona = "lima" | "provincias" | omitir (ambas). */
  const PROMOS = [
    ...Array.from({ length: 58 }, (_, i) => ({
      img: "assets/promos/lima-" + (i + 1) + ".jpg",
      zona: "lima"
    })),
    ...Array.from({ length: 35 }, (_, i) => ({
      img: "assets/promos/prov-" + (i + 1) + ".jpg",
      zona: "provincias"
    }))
  ];

  /* ---------- COMBOS (tarjetas de texto) ---------- */
  const COMBOS = [];

  /* ---------- ICONOS ---------- */
  const ICONS = {
    glass: '<svg class="ico" style="width:24px;height:24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3h8l-1 9a3 3 0 01-3 2.5A3 3 0 019 12L8 3z"/><path d="M12 14.5V21M8.5 21h7"/></svg>',
    wine: '<svg class="ico" style="width:24px;height:24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h10c0 5-2 8-5 8s-5-3-5-8z"/><path d="M12 11v7M8.5 21h7"/></svg>',
    can: '<svg class="ico" style="width:24px;height:24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M7 7h10M7 17h10"/></svg>'
  };

  /* ---------- HELPERS ---------- */
  const fmt = n => (Number.isInteger(n) ? n.toString() : n.toFixed(2));
  const waLink = (num, msg) => `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  const waSvg = () => '<svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.87 9.87 0 001.512 5.26l-.999 3.648 3.477-.91z"/></svg>';

  /* ---------- STATE ---------- */
  let region = localStorage.getItem("pn_region") || "lima";
  let renderHook = null;
  const regKey = () => (region === "lima" ? "lima" : "prov");

  function setRegion(r) {
    if (r !== "lima" && r !== "provincias") return;
    region = r;
    localStorage.setItem("pn_region", r);
    syncToggles();
    updateStaticWa();
    updateZonaLabels();
    if (typeof renderHook === "function") renderHook();
  }

  function syncToggles() {
    document.querySelectorAll(".region-toggle button").forEach(b =>
      b.classList.toggle("active", b.dataset.region === region));
  }

  function updateZonaLabels() {
    const z = ZONA_LABEL[region];
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set("zonaName", z);
    set("zonaBanner", z);
    const txt = document.getElementById("zonaTxt"); if (txt) txt.textContent = ZONA_TXT[region];
  }

  function updateStaticWa() {
    const num = WA[region];
    const z = ZONA_LABEL[region];
    const link = (id, msg, n) => { const el = document.getElementById(id); if (el) el.href = waLink(n || num, msg); };
    const order = `Hola Perla Negra 👋, quiero hacer un pedido. Zona: ${z}.`;
    link("headerWa", order);
    link("waFloat", order);
    link("mayorWa", `Hola Perla Negra 👋, quiero la lista de precios MAYORISTA. Zona: ${z}.`);
    link("footWaLima", "Hola Perla Negra 👋, quiero hacer un pedido en Lima.", WA.lima);
    link("footWaProv", "Hola Perla Negra 👋, quiero hacer un pedido a provincias.", WA.provincias);
  }

  /* ---------- AGE GATE + COMMON UI ---------- */
  function initAgeGate() {
    const gate = document.getElementById("ageGate");
    if (!gate) return;
    if (localStorage.getItem("pn_age_ok") === "1") { gate.remove(); return; }
    gate.hidden = false;
    document.body.style.overflow = "hidden";
    const yes = document.getElementById("ageYes");
    const no = document.getElementById("ageNo");
    if (yes) yes.addEventListener("click", () => {
      localStorage.setItem("pn_age_ok", "1");
      gate.style.opacity = "0"; gate.style.transition = "opacity .25s";
      setTimeout(() => { gate.remove(); document.body.style.overflow = ""; }, 260);
    });
    if (no) no.addEventListener("click", () => {
      document.body.innerHTML = '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:30px;font-family:Hanken Grotesk,sans-serif;color:#94A1B6;">Lo sentimos, debes ser mayor de 18 años para visitar este sitio.</div>';
    });
  }

  function initChrome() {
    const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
    document.querySelectorAll(".region-toggle button").forEach(b =>
      b.addEventListener("click", () => setRegion(b.dataset.region)));
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
      mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));
    }
  }

  /* Llamar una vez por página. hook = función de render propia de la página. */
  function init(hook) {
    renderHook = hook || null;
    initChrome();
    setRegion(region);   // pinta etiquetas, links y dispara el hook
    initAgeGate();
  }

  return {
    WA, ZONA_LABEL, CATS, CAT_NAME, PRODUCTS, COMBOS, PROMOS, ICONS,
    fmt, waLink, waSvg, regKey,
    get region() { return region; },
    setRegion, init
  };
})();
