import Navbar from "../components/Navbar.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function FruitCounter() {
  return (
    <>
      <Navbar />
      <div className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#7A1F1F] mb-4">Luxury Fruit Counter</h1>
          <p className="text-gray-600">Discover our premium fruit counter arrangements</p>
        </div>
      </div>
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default FruitCounter;