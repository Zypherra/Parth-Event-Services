function PaanCategories() {
  const varieties = [
    {
      title: "Meetha Paan",
      description:
        "A traditional sweet paan loved by guests of all ages.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      title: "Banarasi Paan",
      description:
        "Authentic Banarasi style paan prepared with rich traditional flavors.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554",
    },
    {
      title: "Chocolate Paan",
      description:
        "A modern favorite combining classic paan with delicious chocolate flavors.",
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834",
    },
    {
      title: "Fire Paan",
      description:
        "A thrilling live experience that adds excitement to your event.",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    },
    {
      title: "Ice Paan",
      description:
        "Refreshing and cooling paan variety perfect for summer celebrations.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      title: "Premium Special Paan",
      description:
        "Luxury paan varieties customized for weddings and premium events.",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Our Varieties
          </p>

          <h2 className="text-4xl font-bold text-[#2E7D32] mb-4">
            Paan Varieties We Offer
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            From traditional favorites to modern innovations,
            we serve a wide range of premium paan varieties
            prepared fresh for your guests.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {varieties.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                border
                border-green-100
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[#4CAF50]
                transition
                duration-300
              "
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-56
                    w-full
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                  "
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#2E7D32] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>

                <button
                  className="
                    text-[#D4AF37]
                    font-semibold
                    hover:text-[#2E7D32]
                    hover:translate-x-1
                    transition
                  "
                >
                  Learn More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PaanCategories;