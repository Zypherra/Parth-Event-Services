import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
        <div className="flex flex-col">
            <a
                href="YOUR_WHATSAPP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="
    fixed
    bottom-6
    right-6
    z-50

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
    hover:bg-green-600

    transition
    duration-300
  "
            >
                <FaWhatsapp size={28} />

                <span className="hidden md:block font-medium">
                    WhatsApp Us
                </span>
            </a>

        </div>
    );
}

export default WhatsAppButton;