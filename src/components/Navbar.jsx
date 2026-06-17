import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
const [mobileOpen, setMobileOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-sm z-50">
  
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <div>
      <Link
        to="/"
        className="text-3xl font-bold text-[#7A1F1F]"
      >
        Parth Event Services
      </Link>
    </div>

    {/* Desktop Menu */}
    <ul className="text-2xl hidden lg:flex gap-8 items-center">

      <li>
        <Link
          to="/"
          className="group transition duration-300 hover:text-[#f78e0f]"
        >
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
        </Link>
      </li>

      <li>
        <a
          href="#about"
          className="group transition duration-300 hover:text-[#f78e0f]"
        >
          About Us
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
        </a>
      </li>

      {/* Services Dropdown */}
      <li
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button className="group transition duration-300 hover:text-[#f78e0f]">

          Services

          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>

        </button>

        <div
          className={`
            absolute
            top-12
            left-0
            w-64

            bg-white/90
            backdrop-blur-md

            rounded-2xl
            shadow-xl

            overflow-hidden

            transition-all
            duration-300

            ${
              servicesOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-3 invisible"
            }
          `}
        >

          <Link
            to="/paan-counter"
            className="block px-6 py-4 hover:bg-orange-50 transition"
          >
            🌿 Paan Counter
          </Link>

          <Link
            to="/fruit-counter"
            className="block px-6 py-4 hover:bg-orange-50 transition"
          >
            🍓 Fruit Counter
          </Link>

          <Link
            to="/decorations"
            className="block px-6 py-4 hover:bg-orange-50 transition"
          >
            🎈 Decorations
          </Link>

        </div>
      </li>

      <li>
        <a
          href="#gallery"
          className="group transition duration-300 hover:text-[#f78e0f]"
        >
          Gallery
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="group transition duration-300 hover:text-[#f78e0f]"
        >
          Contact Us
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
        </a>
      </li>
    </ul>

    {/* Desktop WhatsApp Button */}
    <a
      href="YOUR_WHATSAPP_LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="
        hidden
        lg:flex

        bg-[#7A1F1F]
        text-white

        px-5
        py-2

        rounded-lg

        hover:bg-[#5d1717]
        hover:scale-105

        transition
      "
    >
      WhatsApp
    </a>

    {/* Hamburger */}
    <button
      onClick={() => setMobileOpen(!mobileOpen)}
      className="lg:hidden relative w-8 h-8"
    >

      <span
        className={`
          absolute
          h-0.5
          w-8
          bg-[#7A1F1F]

          transition-all
          duration-300

          ${
            mobileOpen
              ? "rotate-45 top-4"
              : "top-2"
          }
        `}
      />

      <span
        className={`
          absolute
          h-0.5
          w-8
          bg-[#7A1F1F]
          top-4

          transition-all
          duration-300

          ${
            mobileOpen
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      />

      <span
        className={`
          absolute
          h-0.5
          w-8
          bg-[#7A1F1F]

          transition-all
          duration-300

          ${
            mobileOpen
              ? "-rotate-45 top-4"
              : "top-6"
          }
        `}
      />

    </button>

  </div>

  {/* Mobile Menu */}
  <div
    className={`
      lg:hidden
      overflow-hidden

      bg-white/90
      backdrop-blur-md

      transition-all
      duration-500

      ${
        mobileOpen
          ? "max-h-[500px] py-6"
          : "max-h-0"
      }
    `}
  >

    <div className="flex flex-col gap-5 px-6 text-lg">

      <Link to="/">Home</Link>

      <Link to="/paan-counter">
        🌿 Paan Counter
      </Link>

      <Link to="/fruit-counter">
        🍓 Fruit Counter
      </Link>

      <Link to="/decorations">
        🎈 Decorations
      </Link>

      <a href="#gallery">
        Gallery
      </a>

      <a href="#contact">
        Contact Us
      </a>

      <a
        href="YOUR_WHATSAPP_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[#7A1F1F]
          text-white
          text-center
          py-3
          rounded-lg
        "
      >
        WhatsApp
      </a>

    </div>
  </div>

</nav>

);
}

export default Navbar;
