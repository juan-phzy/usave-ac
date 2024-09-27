import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Contact from "@/components/pages/Contact";

export default function Home() {
  return (
   <section className="home-container">
    <NavBar />
    <Contact />
    <Footer />
   </section>
  );
}
