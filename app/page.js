import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Offers from "@/components/Offers";
import { promotions } from "@/data/promotions";
import CategoryPromotions from "@/components/CategoryPromotions";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoryPromotions />
      <Categories />
      <Benefits />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
