import Navbar from "../components/Navbar.jsx";
import PaanHero from "../components/paan-counter/PaanHero.jsx";
import AboutPaan from "../components/paan-counter/AboutPaan.jsx";
import PaanCategories from "../components/paan-counter/PaanCategories.jsx";
import PaanGallery from "../components/paan-counter/PaanGallery.jsx";
import ChoosePaan from "../components/paan-counter/ChoosePaan.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";

function PaanCounter() {
  return (
    <>
      <SEO
        title="Paan Counter Services | Lucknow"
        description="Premium paan counter services for weddings and events in Lucknow."
        url="https://parth-event-services.vercel.app/paan-counter"
        keywords="Paan Counter Lucknow, Wedding Paan Counter, Live Paan Stall"
      />
      <Navbar />

      <main>
        <PaanHero />
        <AboutPaan />
        <PaanCategories />
        <PaanGallery />
        <ChoosePaan />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default PaanCounter;