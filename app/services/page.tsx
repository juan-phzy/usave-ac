import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Services from "@/components/pages/Services";

export default function Page() {
  return (
   <section className="home-container">
    <NavBar />
    <Services />
    <Footer />
   </section>
  );
}
