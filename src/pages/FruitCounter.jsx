import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar.jsx";
import FruitHero from "../components/fruit-counter/FruitHero.jsx";
import AboutFruit from "../components/fruit-counter/AboutFruit.jsx";
import FruitCounterTypes from "../components/fruit-counter/FruitCounterTypes.jsx";
import FruitVarieties from "../components/fruit-counter/FruitVarieties.jsx";
import FruitGallery from "../components/fruit-counter/FruitGallery.jsx";
import WhyChooseFruit from "../components/fruit-counter/WhyChooseFruit.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function FruitCounter() {
  return (
    <>
      <Helmet>
        <title>Fruit Counter Services in Lucknow | Parth Event Services</title>

        <meta
            name="description"
            content="Fresh Fruit Counter arrangements for weddings, birthdays, receptions and corporate events in Lucknow."
        />

        <meta
            property="og:title"
            content="Fruit Counter Services"
        />

        <meta
            property="og:description"
            content="Premium Fruit Counter setup for every celebration."
        />
      </Helmet>
      <Navbar />

      <main>      
        <FruitHero />
        <AboutFruit />
        <FruitCounterTypes />
        <FruitVarieties />
        <FruitGallery />
        <WhyChooseFruit />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default FruitCounter;