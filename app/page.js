import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Benefits />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
