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
      <Navbar/>
      <Hero/>
      <AboutUs />
      <Services />
      <Gallery />
      <Choose />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;