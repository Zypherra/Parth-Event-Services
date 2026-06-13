function PaanHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#388E3C] to-[#4CAF50] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🌿 Premium Paan Counter Services
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Premium Paan Counters
          <span className="block text-[#D4AF37]">
            For Every Celebration
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-green-50 mb-10">
          Traditional flavors, elegant presentation, and
          exceptional hospitality for weddings, receptions,
          corporate events, birthdays, and special occasions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#gallery">
            <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
              View Paan Varieties
            </button>
          </a>

          <a href="#contact">
            <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#2E7D32] transition duration-300">
              Get Free Quote
            </button>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
          <div>
            <h3 className="text-3xl font-bold text-[#D4AF37]">
              500+
            </h3>
            <p className="text-green-100">
              Events Served
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#D4AF37]">
              20+
            </h3>
            <p className="text-green-100">
              Paan Varieties
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#D4AF37]">
              100%
            </h3>
            <p className="text-green-100">
              Fresh Ingredients
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PaanHero;