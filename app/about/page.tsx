import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import About from "@/components/pages/About";

export default function Home() {
  return (
   <section className="home-container">
    <NavBar />
    <About />
    <Footer />
   </section>
  );
}
