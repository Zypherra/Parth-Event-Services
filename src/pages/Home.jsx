import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Services from "../components/Services.jsx";
import Gallery from "../components/Gallery.jsx";
import Choose from "../components/Choose.jsx";
import Stats from "../components/Stats.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Helmet>
        <title>Parth Event Services | Wedding & Event Decoration Services in Lucknow</title>

        <meta
          name="description"
          content="Parth Event Services provides premium Balloon Decoration, Flower Decoration, Paan Counter and Fruit Counter services for weddings, birthdays and corporate events in Lucknow."
        />

        <meta
          property="og:title"
          content="Parth Event Services | Event Decoration Services"
        />

        <meta
          property="og:description"
          content="Premium Event Decoration Services in Lucknow."
        />
      </Helmet>
      <Navbar/>
      
      <main>
        <Hero/>
        <AboutUs />
        <Services />
        <Gallery />
        <Choose />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home;