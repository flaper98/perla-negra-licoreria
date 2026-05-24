import { products } from "@/data/products";
import ProductCarousel from "@/components/ProductCarousel";

export default function Products() {
  const whisky = products.filter((p) => p.category === "Whisky");
  const ron = products.filter((p) => p.category === "Ron");
  const vodka = products.filter((p) => p.category === "Vodka");
  const gin = products.filter((p) => p.category === "Gin");
  const tequila = products.filter((p) => p.category === "Tequila");
  const champagne = products.filter((p) => p.category === "Champagne");
  const vino = products.filter((p) => p.category === "Vinos");
  const pisco = products.filter((p) => p.category === "Pisco");
  const Energizante = products.filter((p) => p.category === "Energizante");
  const Licores = products.filter((p) => p.category === "Licores");

  return (
    <section
      id="productos"
      className="relative overflow-hidden bg-[#f4efe4] pt-6 pb-16"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-96 h-96 w-96 rounded-full bg-amber-700/10 blur-3xl" />
      <div className="relative z-10">
        <ProductCarousel id="whisky" title="Whisky" products={whisky} />
        <ProductCarousel id="ron" title="Ron" products={ron} />
        <ProductCarousel id="vodka" title="Vodka - Ofertas" products={vodka} />
        <ProductCarousel
          id="gin"
          title="Gin - Selección Premium"
          products={gin}
        />
        <ProductCarousel
          id="tequila"
          title="Tequila - Ofertas"
          products={tequila}
        />
        <ProductCarousel
          id="champagne"
          title="Champagne - Especiales"
          products={champagne}
        />
        <ProductCarousel id="vino" title="Vinos - Especiales" products={vino} />
        <ProductCarousel
          id="pisco"
          title="Pisco - Especiales"
          products={pisco}
        />
        <ProductCarousel
          id="energizante"
          title="Energizantes - Ofertas"
          products={Energizante}
        />
        <ProductCarousel
          id="licores"
          title="Licores - Especiales"
          products={Licores}
        />
      </div>
    </section>
  );
}
