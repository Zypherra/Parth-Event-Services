import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#7A1F1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Parth Event Services
            </h3>

            <p className="text-gray-200">
              Premium Paan Counters, Fruit Counters,
              Balloon & Flower Decoration Services
              for all kinds of events.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-gray-200">
              <li><Link to="/paan-counter">Paan Counter</Link></li>
              <li><Link to="/fruit-counter">Fruit Counter</Link></li>
              <li><Link to="/decorations">Balloon Decoration</Link></li>
              <li><Link to="/decorations">Flower Decoration</Link></li>
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Events We Cover
            </h3>

            <ul className="space-y-2 text-gray-200">
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Anniversaries</li>
              <li>Corporate Events</li>
              <li>Festivals</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-2 text-gray-200">
              <li><a href="tel:9307738792">📞 +91 93077 38792 </a></li>
              <li><a href="mailto:partheventservices@gmail.com">✉️ partheventservices@gmail.com</a></li>
              <li>📍 Lucknow, Uttar Pradesh</li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex gap-6 px-4">
            <a href="#" className="hover:text-[#D4AF37]" aria-label="Visit our Instagram page">
              <FaInstagram size={28}></FaInstagram>
            </a>

            <a href="#" className="hover:text-[#D4AF37]" aria-label="Visit our Facebook page">
              <FaFacebook size={28}></FaFacebook>
            </a>

            <a href="https://wa.me/+919307738792" className="hover:text-[#D4AF37]" aria-label="Contact us on WhatsApp">
              <FaWhatsapp size={28}></FaWhatsapp>
            </a>
          </div>


          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Parth Event Services.
            All Rights Reserved.
          </p>

          <h4 className="md:pl-20 sm:pl-0">
            <a href="#" className="hover:text-amber-400">Back to top</a>
          </h4>

        </div>

      </div>
    </footer>
  );
}

export default Footer;