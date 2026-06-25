import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
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
    <div className="fixed bottom-6 right-6 z-50">

      {/* Ping animation */}
      <span className="
        absolute inset-0 rounded-full
        bg-green-500 animate-ping opacity-30
      "></span>

      <a
        href={`https://wa.me/919307738792?text=${encodedMessage}`}
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative flex items-center gap-2

          bg-green-500 text-white

          px-4 py-3
          rounded-full
          shadow-lg

          hover:scale-105 transition
        "
      >
        <FaWhatsapp size={32} />
      </a>

    </div>
  );
}

export default WhatsAppButton;