function AboutDecorations() {
  return (
    <section id="about"className="py-24 px-6 bg-[#FDF4FF]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="images/decorations/balloon10.jpeg"
            alt="Event Decoration"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-[#EC4899] font-semibold uppercase tracking-wider mb-3">
            About Our Service
          </p>

          <h2 className="text-4xl font-bold text-[#9333EA] mb-6">
            Creating Elegant &
            Memorable Event Experiences
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Sarth Event Services, we specialize in designing
            beautiful balloon and flower decorations that turn
            ordinary spaces into unforgettable celebrations.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Whether it's a wedding, birthday party, anniversary,
            baby shower, corporate gathering, or festive event,
            our team carefully plans every detail to match your
            vision and theme.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From elegant floral arrangements to creative balloon
            setups, we bring style, creativity, and professionalism
            to every event we decorate.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutDecorations;