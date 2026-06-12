import Navbar from "../components/Navbar.jsx";
import DecorationsHero from "../components/decorations/DecorationsHero.jsx";
import AboutDecorations from "../components/decorations/AboutDecorations.jsx";
import DecorationCategories from "../components/decorations/DecorationCategories.jsx";
import DecorationGallery from "../components/decorations/DecorationGallery.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Decorations() {
  return (
    <>
      <Navbar />
      <DecorationsHero />
      <AboutDecorations />
      <DecorationCategories />
      <DecorationGallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Decorations;