function PaanGallery() {
  const galleryItems = [
    {
      title: "Premium Paan Counter",
      category: "Setup",
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
      height: "h-[450px]",
    },
    {
      title: "Live Paan Preparation",
      category: "Experience",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      height: "h-[320px]",
    },
    {
      title: "Wedding Paan Counter",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
      height: "h-[400px]",
    },
    {
      title: "Luxury Display",
      category: "Premium",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      height: "h-[520px]",
    },
    {
      title: "Guest Experience",
      category: "Event",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      height: "h-[350px]",
    },
    {
      title: "Fresh Ingredients",
      category: "Quality",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554",
      height: "h-[430px]",
    },
    {
      title: "Custom Counter Design",
      category: "Setup",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
      height: "h-[300px]",
    },
    {
      title: "Special Event Service",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      height: "h-[500px]",
    },
    {
      title: "Traditional Hospitality",
      category: "Tradition",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
      height: "h-[380px]",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-gradient-to-b from-white to-[#F4FFF4]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-[3px] mb-3">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-4">
            Premium Paan Counter Experiences
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our beautifully designed paan counters,
            premium presentation, and memorable guest experiences.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center mb-16">

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] bg-clip-text text-transparent">
              500+
            </h3>

            <p className="text-gray-600 mt-2">
              Events Served
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] bg-clip-text text-transparent">
              20+
            </h3>

            <p className="text-gray-600 mt-2">
              Paan Varieties
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] bg-clip-text text-transparent">
              100%
            </h3>

            <p className="text-gray-600 mt-2">
              Fresh Ingredients
            </p>
          </div>

        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="
                relative
                mb-6
                break-inside-avoid
                overflow-hidden
                rounded-3xl
                shadow-lg
                border
                border-green-100
                group
                cursor-pointer
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full ${item.height} object-cover group-hover:scale-110 transition duration-700`}
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#2E7D32]/90
                  via-[#4CAF50]/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              <span
                className="
                  absolute
                  top-4
                  left-4
                  bg-white/90
                  backdrop-blur-md
                  text-[#2E7D32]
                  border
                  border-green-200
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                {item.category}
              </span>

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  text-white
                  translate-y-full
                  group-hover:translate-y-0
                  transition
                  duration-500
                "
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-green-100 text-sm mt-1">
                  Premium Paan Counter Experience
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Every paan counter is customized to match your event,
            guest preferences, and celebration theme.
          </p>

          <a href="#contact">
            <button
              className="
                bg-gradient-to-r
                from-[#2E7D32]
                to-[#4CAF50]
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                shadow-lg
                hover:scale-105
                transition
                duration-300
              "
            >
              Book Your Paan Counter →
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}

export default PaanGallery;