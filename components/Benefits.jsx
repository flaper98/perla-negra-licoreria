import { Truck, BadgeCheck, Headphones, PackageCheck } from "lucide-react";

const benefits = [
  { title: "Precios mayoristas", text: "Ofertas para licorerías, bares, restaurantes y eventos.", icon: PackageCheck },
  { title: "Envíos rápidos", text: "Coordinación directa para despacho en Lima y provincias.", icon: Truck },
  { title: "Productos originales", text: "Catálogo seleccionado de marcas reconocidas.", icon: BadgeCheck },
  { title: "Atención personalizada", text: "Pedidos por unidad, docena o caja mediante WhatsApp.", icon: Headphones }
];

export default function Benefits() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }) => (
            <div key={title} className="glass rounded-3xl p-6 transition hover:-translate-y-1">
              <Icon className="mb-5 h-10 w-10 text-gold" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
