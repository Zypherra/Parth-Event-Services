import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Balloon & Flower Decoration Services in Lucknow | Parth Event Services</title>

        <meta
            name="description"
            content="Professional Balloon Decoration and Flower Decoration services for weddings, birthdays, anniversaries and corporate events."
        />

        <meta
            property="og:title"
            content="Decoration Services | Parth Event Services"
        />

        <meta
            property="og:description"
            content="Beautiful Balloon & Flower Decorations in Lucknow."
        />
      </Helmet>
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