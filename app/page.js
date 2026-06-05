"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import CategoryPromotions from "@/components/CategoryPromotions";
import { useCity } from "@/app/hooks/useCity";

export default function Home() {
  const city = useCity();

  if (!city) return null;

  const isLima = city === "Lima";

  return (
    <main>
      {isLima ? (
        <>
          <Header hideMenu={true}/>
          <Hero />
          <CategoryPromotions />
          <FloatingWhatsapp />
          <Benefits />
          <Footer />
          <FloatingWhatsapp />
        </>
      ) : (
        <>
          <Header />
          <Hero />
          <CategoryPromotions />
          <Categories />
          <Benefits />
          <Footer />
          <FloatingWhatsapp />
        </>
      )}
    </main>
  );
}