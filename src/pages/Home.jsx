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
import SEO from "../components/SEO.jsx";

function Home() {
  return (
    <>
      <SEO
        title="Parth Event Services | Event Decoration in Lucknow"
        description="Professional balloon decoration, flower decoration, paan counters and fruit counters for weddings and events in Lucknow."
        url="https://parth-event-services.vercel.app/"
        keywords="Event Services Lucknow, Wedding Decoration, Birthday Decoration, Balloon Decoration, Flower Decoration"
      />
      <Navbar />

      <main>
        <Hero />
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