function AboutPaan() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F4FFF4]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
            alt="Premium Paan Counter"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div>

          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            About Our Service
          </p>

          <h2 className="text-4xl font-bold text-[#2E7D32] mb-6">
            Bringing Tradition &
            Hospitality To Every Event
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Parth Event Services, we offer premium paan counter
            setups that combine traditional flavors with elegant
            presentation, creating a memorable experience for your guests.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our counters feature a wide range of paan varieties prepared
            using fresh ingredients and served hygienically by experienced staff.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Whether it's a wedding, reception, corporate event,
            birthday celebration, or festive gathering, our paan
            counters add a unique touch of hospitality and tradition.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">

            <div className="bg-white p-4 rounded-xl shadow-md">
              🌿 Fresh Ingredients
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              🧼 Hygienic Preparation
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              🍃 Premium Paan Varieties
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              🎉 Live Counter Setup
            </div>

          </div>

          <a
            href="#gallery"
            className="
              inline-block
              bg-gradient-to-r
              from-[#2E7D32]
              to-[#4CAF50]
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

export default AboutPaan;