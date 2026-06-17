import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#f8f5f0]">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#7A1F1F] mb-6">
          Let's Make Your Event Memorable
        </h2>

        <p className="text-lg text-gray-600 mb-1">
          Whether it's a wedding, birthday, anniversary,
          corporate event, or special celebration,
          we're ready to create an unforgettable experience.
        </p>

        <div className="text-amber-600 font-medium p-4 font-stretch-205%">Book Now!</div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="tel:+9193077387892"
            className="bg-[#7A1F1F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#5d1717] transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919307738792"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold flex flex-row gap-2 align-middle hover:bg-green-700 transition"
          >
            <FaWhatsapp size={20}></FaWhatsapp> <span>WhatsApp Us</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;