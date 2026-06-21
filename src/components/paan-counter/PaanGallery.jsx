function PaanGallery() {
  const galleryItems = [
    {
      title: "Premium Paan Counter",
      category: "Setup",
      image: "/images/paan/a1.jpeg",
      height: "h-[450px]",
    },
    {
      title: "Live Paan Preparation",
      category: "Setup",
      image: "/images/paan/g1.jpeg",
      height: "h-[320px]",
    },
    {
      title: "Fresh Ingredients",
      category: "Quality",
      image: "/images/paan/premium-paan.jpg",
      height: "h-[430px]",
    },
    {
      title: "Premium Paan",
      category: "Premium",
      image: "/images/paan/p1.jpeg",
      height: "h-[400px]",
    },
    {
      title: "Luxury Display",
      category: "Premium",
      image: "/images/paan/g2.jpeg",
      height: "h-[520px]",
    },
    {
      title: "Guest Experience",
      category: "Event",
      image: "/images/paan/g3.jpeg",
      height: "h-[350px]",
    },
    {
      title: "Fresh Ingredients",
      category: "Quality",
      image: "/images/paan/p2.jpeg",
      height: "h-[430px]",
    },
    {
      title: "Custom Counter Design",
      category: "Setup",
      image: "/images/paan/g4.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Special Event Service",
      category: "Events",
      image: "images/paan/a3.jpeg",
      height: "h-[500px]",
    },
    {
      title: "Staff with proper Dress",
      category: "Setup",
      image: "/images/paan/g5.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Traditional Paan",
      category: "Tradition",
      image: "images/paan/banarasi-paan.webp",
      height: "h-[380px]",
    },
    {
      title: "Paan Counter Setup",
      category: "Setup",
      image: "images/paan/g6.jpeg",
      height: "h-[480px]",
    },
    {
      title: "Premium Paan Counter",
      category: "Setup",
      image: "/images/paan/a4.jpeg",
      height: "h-[450px]",
    },
    {
      title: "Chocolate Paan",
      category: "Quality",
      image: "/images/paan/choco-paan.jpg",
      height: "h-[430px]",
    },
    {
      title: "Live Paan Preparation",
      category: "Experience",
      image: "/images/paan/p3.jpeg",
      height: "h-[320px]",
    },
    {
      title: "Wedding Paan Counter",
      category: "Wedding",
      image: "/images/paan/a2.jpeg",
      height: "h-[400px]",
    },
    {
      title: "Simple Paan Counter Display",
      category: "Simple",
      image: "/images/paan/g7.jpeg",
      height: "h-[520px]",
    },
    {
      title: "Guest Experience",
      category: "Event",
      image: "/images/paan/g8.jpeg",
      height: "h-[350px]",
    },
    {
      title: "Paan Counter Decor",
      category: "Decor",
      image: "/images/paan/a5.jpeg",
      height: "h-[430px]",
    },
    {
      title: "Custom Counter Design",
      category: "Setup",
      image: "/images/paan/g9.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Special Event Service with Trained Staff",
      category: "Events",
      image: "images/paan/a6.jpeg",
      height: "h-[500px]",
    },
    {
      title: "Custom Counter Design",
      category: "Setup",
      image: "/images/paan/g10.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Modern Counter Setup",
      category: "Setup",
      image: "images/paan/g11.jpeg",
      height: "h-[380px]",
    },
    {
      title: "Dressed and Trained Staff",
      category: "Setup",
      image: "/images/paan/a7.jpeg",
      height: "h-[450px]",
    },
    {
      title: "Live Paan Preparation",
      category: "Experience",
      image: "/images/paan/g12.jpeg",
      height: "h-[320px]",
    },
    {
      title: "Wedding Paan Counter",
      category: "Wedding",
      image: "/images/paan/g8.jpeg",
      height: "h-[400px]",
    },
    {
      title: "Luxury Display",
      category: "Premium",
      image: "/images/paan/g14.jpeg",
      height: "h-[520px]",
    },
    {
      title: "Guest Experience",
      category: "Event",
      image: "/images/paan/a8.jpeg",
      height: "h-[350px]",
    },
    {
      title: "Fresh Ingredients",
      category: "Quality",
      image: "/images/paan/g15.jpeg",
      height: "h-[430px]",
    },
    {
      title: "Custom Counter Design",
      category: "Setup",
      image: "/images/paan/g4.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Special Event Service",
      category: "Events",
      image: "images/paan/a3.jpeg",
      height: "h-[500px]",
    },
    {
      title: "Custom Counter Setup",
      category: "Setup",
      image: "/images/paan/g5.jpeg",
      height: "h-[300px]",
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

    opacity-100
    md:opacity-0
    md:group-hover:opacity-100

    transition
    duration-500
  "
></div>

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

              {/* Gallery Content */}
              <div
                className="
    absolute
    bottom-0
    left-0
    right-0
    p-6
    text-white

    translate-y-0
    md:translate-y-full
    md:group-hover:translate-y-0

    transition
    duration-500
  "
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm mt-1">
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