import Navbar from "../components/Navbar.jsx";
import PaanHero from "../components/paan-counter/PaanHero.jsx";
import AboutPaan from "../components/paan-counter/AboutPaan.jsx";
import PaanCategories from "../components/paan-counter/PaanCategories.jsx";
import PaanGallery from "../components/paan-counter/PaanGallery.jsx";
import ChoosePaan from "../components/paan-counter/ChoosePaan.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function PaanCounter() {
  return (
    <>
      <Navbar />
      <PaanHero />
      <AboutPaan />
      <PaanCategories />
      <PaanGallery />
      <ChoosePaan />
      <Contact />
      <Footer />
    </>
  );
}

export default PaanCounter;