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