"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { products, getWhatsappLink } from "@/data/products";
import { MessageCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

function BuscarContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 pt-36 pb-16">
      <h1 className="text-4xl font-black text-black">
        Resultados para: {q}
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((product) => (
          <article
            key={product.name}
            className="rounded-3xl bg-white p-5 text-center shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-44 object-contain"
            />

            <p className="mt-4 text-xs font-black uppercase text-yellow-700">
              {product.category}
            </p>

            <h3 className="mt-2 font-black">{product.name}</h3>

            <p className="mt-3 font-black text-red-700">
              {product.unitPrice}
            </p>

            <button
              onClick={() => window.open(getWhatsappLink(product.name), "_blank")}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 font-black text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BuscarPage() {
  return (
    <main className="bg-[#f4efe4]">
      <Header />

      <Suspense fallback={null}>
        <BuscarContent />
      </Suspense>

      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}