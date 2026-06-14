function FruitHero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        text-center
        px-6
        bg-gradient-to-br
        from-[#FFFDF5]
        via-[#FFF7E6]
        to-[#FFF3D6]
      "
    >
      <div className="max-w-4xl">

        <p className="text-[#F97316] font-semibold uppercase tracking-[3px] mb-4">
          Fresh • Hygienic • Premium
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#7C2D12] leading-tight">
          Premium Fruit Counters
          <br />
          For Every Celebration
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
          Freshly prepared fruit counters with elegant presentation,
          premium quality fruits and professional service to impress
          your guests.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#gallery">
            <button
              className="
                bg-gradient-to-r
                from-[#F97316]
                to-[#FACC15]
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              View Gallery
            </button>
          </a>

          <a href="#contact">
            <button
              className="
                border-2
                border-[#F97316]
                text-[#F97316]
                px-8
                py-3
                rounded-xl
                font-semibold
                hover:bg-[#F97316]
                hover:text-white
                transition
              "
            >
              Get a Quote
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default FruitHero;