import NavBar from "@/components/shared/NavBar";
import Hero from "@/components/pages/Hero";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
   <section className="home-container">
    <NavBar />
    <Hero />
    <Footer />
   </section>
  );
}
