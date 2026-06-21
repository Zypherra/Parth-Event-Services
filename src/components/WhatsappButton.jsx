import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
  
  <span
    className="
      absolute
      inset-0
      rounded-full
      bg-green-500
      animate-ping
      opacity-30
    "
  ></span>

  <a
    href="https://wa.me/+919307738792"
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative
      flex
      items-center
      gap-2

      bg-green-500
      text-white

      px-4
      py-3

      rounded-full
      shadow-lg

      hover:scale-105
      transition
    "
  >
    <FaWhatsapp size={32} />
  </a>

</div>
    );
}

export default WhatsAppButton;