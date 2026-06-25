function AboutFruit() {
return ( <section id="about" className="py-24 px-6 bg-[#FFF9F0]"> <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Image */}
    <div className="overflow-hidden rounded-3xl shadow-xl">
      <img
        src="/images/fruits/fruit-logo.jpeg"
        alt="Luxury Fruit Counter"
        className="w-full h-full object-contain hover:scale-105 transition duration-500"
      />
    </div>

    {/* Content */}
    <div>

      <p className="text-[#E67E22] font-semibold uppercase tracking-wider mb-3">
        About Our Service
      </p>

      <h2 className="text-4xl font-bold text-[#C0392B] mb-6">
        Luxury Fruit Counter
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        At Parth Event Services, we create elegant fruit counter
        experiences that bring freshness, color, and sophistication
        to every celebration. Our beautifully arranged fruit displays
        become a center of attraction for guests of all ages.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        We offer a wide range of seasonal and premium imported fruits,
        carefully selected for quality, freshness, and presentation.
        Every counter is designed to enhance the overall ambience of
        your event.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        Whether it's a wedding, reception, corporate gathering,
        birthday celebration, anniversary, or festive occasion,
        our luxury fruit counters provide a healthy and refreshing
        experience for your guests.
      </p>

      {/* Features */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">

        <div className="bg-white p-4 rounded-xl shadow-md">
          🍎 Fresh Seasonal Fruits
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          🌎 Premium Imported Fruits
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          🎨 Attractive Fruit Presentation
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          ✨ Live Fruit Counter Setup
        </div>

      </div>

      <a
        href="#selections"
        className="
          inline-block
          bg-gradient-to-r
          from-[#E67E22]
          to-[#F39C12]
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          hover:scale-105
          transition
          duration-300
        "
      >
        Explore Our Varieties
      </a>

    </div>

  </div>
</section>

);
}

export default AboutFruit;
