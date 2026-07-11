import Navbar from "../components/Navbar.jsx";
import FruitHero from "../components/fruit-counter/FruitHero.jsx";
import AboutFruit from "../components/fruit-counter/AboutFruit.jsx";
import FruitCounterTypes from "../components/fruit-counter/FruitCounterTypes.jsx";
import FruitVarieties from "../components/fruit-counter/FruitVarieties.jsx";
import FruitGallery from "../components/fruit-counter/FruitGallery.jsx";
import WhyChooseFruit from "../components/fruit-counter/WhyChooseFruit.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";

function FruitCounter() {
  return (
    <>
      <SEO
        title="Fruit Counter Services | Lucknow"
        description="Fresh fruit counter services for weddings and events in Lucknow."
        url="https://parth-event-services.vercel.app/fruit-counter"
        keywords="Fruit Counter Lucknow, Wedding Fruit Counter, Fresh Fruit Stall"
      />
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