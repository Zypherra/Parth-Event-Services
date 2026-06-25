function DecorationsHero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center text-center pt-10 pb-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622')",
        alt:"Balloon Decoration",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        <p className="uppercase tracking-[4px] text-[#92400e] font-semibold mb-4 pt-20">
          Parth Decoration Services
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Transforming Celebrations
          <br />
          Into Beautiful Memories
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Premium Balloon & Flower Decorations for Weddings,
          Birthdays, Anniversaries, Corporate Events and
          Special Occasions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#gallery"
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            View Gallery
          </a>

          <a
            href="#contact"
            className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default DecorationsHero;