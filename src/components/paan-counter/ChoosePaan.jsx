function ChoosePaan() {
  const features = [
    {
      icon: "🌿",
      title: "Fresh Ingredients",
      description:
        "We use fresh and carefully selected ingredients to ensure authentic taste and quality.",
    },
    {
      icon: "🧼",
      title: "Hygienic Preparation",
      description:
        "Every paan is prepared under hygienic conditions to provide a safe experience for your guests.",
    },
    {
      icon: "🍃",
      title: "Wide Variety",
      description:
        "From traditional Meetha Paan to premium modern varieties, we offer something for everyone.",
    },
    {
      icon: "🎉",
      title: "Elegant Counter Setup",
      description:
        "Beautifully designed counters enhance the overall experience and attract guests.",
    },
    {
      icon: "👨‍🍳",
      title: "Experienced Staff",
      description:
        "Our trained team serves guests professionally and ensures smooth event execution.",
    },
    {
      icon: "⏱️",
      title: "Timely Service",
      description:
        "We arrive on time, set up efficiently, and ensure uninterrupted service throughout the event.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F4FFF4]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-[#2E7D32] mb-4">
            What Makes Our Paan Counters Special?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine traditional hospitality, premium ingredients,
            and professional presentation to create an unforgettable
            experience for your guests.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                border
                border-green-100
                hover:-translate-y-2
                hover:border-[#4CAF50]
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#2E7D32] mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div
          className="
            mt-16
            bg-gradient-to-r
            from-[#2E7D32]
            to-[#4CAF50]
            rounded-3xl
            p-10
            text-center
            text-white
          "
        >
          <h3 className="text-3xl font-bold mb-4">
            Make Your Event More Memorable
          </h3>

          <p className="max-w-3xl mx-auto text-green-50 mb-6">
            Whether it's a wedding, reception, birthday,
            corporate gathering, or festive celebration,
            our premium paan counters add a unique touch
            of hospitality and tradition.
          </p>

          <a href="#contact">
            <button
              className="
                bg-[#D4AF37]
                text-black
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
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ChoosePaan;