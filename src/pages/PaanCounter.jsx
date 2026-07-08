import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Premium Paan Counter Services in Lucknow | Parth Event Services</title>

        <meta
          name="description"
          content="Book premium Paan Counter services for weddings, receptions, birthdays and corporate events in Lucknow."
        />

        <meta
          property="og:title"
          content="Premium Paan Counter Services in Lucknow"
        />

        <meta
          property="og:description"
          content="Premium Paan Counter services for every celebration."
        />
      </Helmet>
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