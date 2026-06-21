function AboutUs() {
return ( <section id="about" className="py-24 px-6 bg-white"> <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <div className="overflow-hidden rounded-3xl shadow-xl">
      <img
        src="/images/home/about.jpeg"
        alt="Parth Event Services"
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* Content */}
    <div>
      <p className="text-[#f78e0f] font-semibold uppercase tracking-wider mb-3">
        About Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#7A1F1F] mb-6">
        Making Every Celebration
        Memorable & Special
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        At Parth Event Services, we believe every event deserves
        a unique touch. We specialize in premium Paan Counters,
        Fruit Counters, Balloon Decorations, and Flower Decorations
        designed to elevate weddings, birthdays, anniversaries,
        corporate gatherings, and festive celebrations.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Our team focuses on quality, creativity, and attention
        to detail. From elegant decoration setups to beautifully
        arranged service counters, we ensure that every element
        complements the theme and atmosphere of your event.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        With a commitment to professionalism and customer
        satisfaction, we strive to create unforgettable
        experiences that leave lasting impressions on both
        hosts and guests.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div>
          <h3 className="text-3xl font-bold text-[#7A1F1F]">
            500+
          </h3>
          <p className="text-gray-600 text-sm">
            Events Served
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#7A1F1F]">
            100%
          </h3>
          <p className="text-gray-600 text-sm">
            Client Focused
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#7A1F1F]">
            24/7
          </h3>
          <p className="text-gray-600 text-sm">
            Support
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="
          inline-block
          bg-gradient-to-r
          from-[#7A1F1F]
          to-[#f78e0f]
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:scale-105
          transition
          duration-300
        "
      >
        Get a Free Quote
      </a>
    </div>

  </div>
</section>

);
}

export default AboutUs;
