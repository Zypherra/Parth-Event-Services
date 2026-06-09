function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#7A1F1F] to-[#D4AF37] flex items-center justify-center px-6">

      <div className="max-w-4xl text-center text-white">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Creating Memorable
          <br />
          Event Experiences
        </h1>

        <p className="text-lg md:text-2xl mb-8">
          Premium Paan Counters, Fruit Counters &
          Decoration Services for Weddings,
          Birthdays and Corporate Events.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-[#7A1F1F] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            View Gallery
          </button>

          <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#7A1F1F] transition">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;