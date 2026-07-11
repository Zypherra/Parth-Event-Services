import Navbar from "../components/Navbar.jsx";
import DecorationsHero from "../components/decorations/DecorationsHero.jsx";
import AboutDecorations from "../components/decorations/AboutDecorations.jsx";
import DecorationCategories from "../components/decorations/DecorationCategories.jsx";
import DecorationGallery from "../components/decorations/DecorationGallery.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";

function Decorations() {
  return (
    <>
      <SEO
        title="Balloon & Flower Decoration | Lucknow"
        description="Professional balloon and flower decoration services in Lucknow."
        url="https://parth-event-services.vercel.app/decorations"
        keywords="Balloon Decoration Lucknow, Flower Decoration Lucknow, Event Decoration"
      />
      <Navbar />

      <main>
        <DecorationsHero />
        <AboutDecorations />
        <DecorationCategories />
        <DecorationGallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Decorations;