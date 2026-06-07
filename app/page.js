"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import CategoryPromotions from "@/components/CategoryPromotions";
import { useRegion } from "@/app/hooks/useRegion";

export default function Home() {
  const region = useRegion();

  if (!region) return null;

  const isProvincia = region === "Provincia";

  return (
    <main>
      <Header hideMenu={!isProvincia} />
      <Hero />
      <CategoryPromotions />

      {isProvincia && <Categories />}

      <Benefits />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}