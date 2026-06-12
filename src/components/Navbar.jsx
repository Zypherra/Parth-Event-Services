function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-[#7A1F1F]">
            <a href="/">Parth Event Services</a>
          </h1>
        </div>

        <ul className="text-2xl hidden lg:flex gap-8">
          <li className="cursor-pointer hover:text-[#f78e0f]">
            <a href="#" class="group transition duration-300 ease-in-out hover:text-[#f78e0f]">Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#f78e0f]">
            <a href="#about" class="group transition duration-300 ease-in-out hover:text-[#f78e0f]">About Us
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#f78e0f]">
            <a href="#services" class="group transition duration-300 ease-in-out hover:text-[#f78e0f]">Services
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#f78e0f]">
            <a href="#gallery" class="group transition duration-300 ease-in-out hover:text-[#f78e0f]">Gallery
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#f78e0f]">
            <a href="#contact" class="group transition duration-300 ease-in-out hover:text-[#f78e0f]">Contact Us
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#f78e0f]"></span>
            </a>
          </li>          
        </ul>

        <button className="bg-[#7A1F1F] text-white px-5 py-2 rounded-lg hover:bg-[#5d1717] transition">
          <a href="#contact">Get Quote</a>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;