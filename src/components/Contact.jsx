import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const location = useLocation();

  let message = "Hello! I want to enquire about your event services.";

  if (location.pathname === "/paan-counter") {
    message = "Hi! I want to book a Paan Counter for my event.";
  } 
  else if (location.pathname === "/fruit-counter") {
    message = "Hi! I want a Fruit Counter for my event.";
  } 
  else if (location.pathname === "/decorations") {
    message = "Hi! I need decoration services for my event.";
  }

  const encodedMessage = encodeURIComponent(message);

  return (
    <section id="contact" className="py-24 px-6 bg-[#f8f5f0]">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#7A1F1F] mb-6">
          Let's Make Your Event Memorable
        </h2>

        <p className="text-lg text-gray-600 mb-1">
          Whether it's a wedding, birthday, anniversary, festivities, 
          corporate event, or special celebration,
          we're ready to create an unforgettable experience.
        </p>

        <div className="text-[#92400e] font-medium p-4 font-stretch-205%">Book Now!</div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="tel:+9193077387892"
            className="bg-[#7A1F1F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#5d1717] transition"
          >
            📞 Call Now
          </a>

          <a
            href={`https://wa.me/919307738792?text=${encodedMessage}`}
            aria-label="Contact us on Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-800 transition xs:pl-5"
          >
            <FaWhatsapp size={20}></FaWhatsapp> <span>WhatsApp Us</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;