function DecorationCategories() {
  const categories = [
    {
      title: "Wedding Decoration",
      description:
        "Elegant floral and stage decorations designed to make your special day unforgettable.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      title: "Birthday Decoration",
      description:
        "Creative balloon themes and customized decorations for birthdays of all ages.",
      image:
        "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
    },
    {
      title: "Anniversary Decoration",
      description:
        "Romantic and sophisticated setups to celebrate memorable milestones.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    },
    {
      title: "Baby Shower",
      description:
        "Cute and colorful themes designed to welcome your little bundle of joy.",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    },
    {
      title: "Corporate Events",
      description:
        "Professional event decorations that enhance your brand presence and atmosphere.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },
    {
      title: "Festival Decoration",
      description:
        "Beautiful festive decorations for cultural celebrations and special occasions.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#EC4899] font-semibold uppercase tracking-wider mb-3">
            Our Expertise
          </p>

          <h2 className="text-4xl font-bold text-[#9333EA] mb-4">
            Decoration Services We Offer
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            From intimate celebrations to grand events,
            we create stunning decoration setups tailored
            to your unique occasion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                border border-purple-100
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[#EC4899]
                transition
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#9333EA] mb-3">
                  {category.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                <a href="#contact">
                <button
                  className="
                    text-[#EC4899]
                    font-semibold
                    hover:text-[#9333EA]
                    hover:translate-x-1
                    transition
                  "
                >
                  Learn More →
                </button>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DecorationCategories;