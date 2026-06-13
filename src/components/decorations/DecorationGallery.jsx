function DecorationGallery() {
  const galleryItems = [
    {
      title: "Royal Wedding Stage",
      category: "Wedding",
      image: "/images/decorations/balloon1.jpeg",
      height: "h-[450px]",
    },
    {
      title: "Luxury Floral Entrance",
      category: "Wedding",
      image: "/images/decorations/balloon2.jpeg",
      height: "h-[320px]",
    },
    {
      title: "Birthday Balloon Theme",
      category: "Birthday",
      image: "/images/decorations/balloon3.jpeg",
      height: "h-[400px]",
    },
    {
      title: "Corporate Event Setup",
      category: "Corporate",
      image: "/images/decorations/balloon4.jpeg",
      height: "h-[520px]",
    },
    {
      title: "Baby Shower Decoration",
      category: "Baby Shower",
      image: "/images/decorations/balloon5.jpeg",
      height: "h-[350px]",
    },
    {
      title: "Festival Decoration",
      category: "Festival",
      image: "/images/decorations/balloon6.jpeg",
      height: "h-[430px]",
    },
    {
      title: "Romantic Anniversary Setup",
      category: "Anniversary",
      image: "/images/decorations/balloon7.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Premium Flower Arrangement",
      category: "Wedding",
      image: "/images/decorations/balloon8.jpeg",
      height: "h-[500px]",
    },
    {
      title: "Elegant Reception Decor",
      category: "Wedding",
      image: "/images/decorations/balloon9.jpeg",
      height: "h-[380px]",
    },
    {
      title: "Royal Wedding Stage",
      category: "Wedding",
      image: "/images/decorations/balloon10.jpeg",
      height: "h-[450px]",
    },
    {
      title: "Luxury Floral Entrance",
      category: "Wedding",
      image: "/images/decorations/balloon11.jpeg",
      height: "h-[320px]",
    },
    {
      title: "Birthday Balloon Theme",
      category: "Birthday",
      image: "/images/decorations/balloon12.jpeg",
      height: "h-[400px]",
    },
    {
      title: "Corporate Event Setup",
      category: "Corporate",
      image: "/images/decorations/balloon13.jpeg",
      height: "h-[520px]",
    },
    {
      title: "Baby Shower Decoration",
      category: "Baby Shower",
      image: "/images/decorations/balloon14.jpeg",
      height: "h-[350px]",
    },
    {
      title: "Festival Decoration",
      category: "Festival",
      image: "/images/decorations/balloon15.jpeg",
      height: "h-[430px]",
    },
    {
      title: "Romantic Anniversary Setup",
      category: "Anniversary",
      image: "/images/decorations/balloon16.jpeg",
      height: "h-[300px]",
    },
    {
      title: "Premium Flower Arrangement",
      category: "Wedding",
      image: "/images/decorations/balloon17.jpeg",
      height: "h-[500px]",
    },
    {
      title: "Elegant Reception Decor",
      category: "Wedding",
      image: "/images/decorations/balloon18.jpeg",
      height: "h-[380px]",
    },
    {
      title: "Premium Flower Arrangement",
      category: "Wedding",
      image: "/images/decorations/balloon19.jpeg",
      height: "h-[500px]",
    },
    {
      title: "Elegant Reception Decor",
      category: "Wedding",
      image: "/images/decorations/balloon20.jpeg",
      height: "h-[380px]",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-gradient-to-b from-white to-[#e796f9]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#EC4899] font-semibold uppercase tracking-[3px] mb-3">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#9333EA] mb-4">
            Creating Beautiful Experiences
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Every celebration tells a unique story. Explore some of
            the moments we have transformed into unforgettable memories.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center mb-16">
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Events Decorated
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
              10+
            </h3>
            <p className="text-gray-600 mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
              100+
            </h3>
            <p className="text-gray-600 mt-2">
              Theme Designs
            </p>
          </div>
        </div>

        {/* Pinterest Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative mb-6 break-inside-avoid overflow-hidden rounded-3xl shadow-lg border border-purple-100 group cursor-pointer hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full ${item.height} object-cover group-hover:scale-110 transition duration-700`}
              />

              {/* Dark Gradient Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#9333EA]/80
                  via-[#EC4899]/30
                  to-transparent

                  opacity-100
                  md:opacity-0
                  md:group-hover:opacity-100

                  transition
                  duration-500
  "
              ></div>

              {/* Category Badge */}
              <span
                className="
                  absolute
                  top-4
                  left-4
                  bg-white/90
                  backdrop-blur-md
                  text-[#9333EA]
                  border border-purple-200
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                {item.category}
              </span>

              {/* Hover Content */}
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
                  Premium Decoration Setup
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Every setup is customized to match the theme,
            venue and vision of our clients.
          </p>

          <a href="#contact">
            <button
              className="
                bg-gradient-to-r
                from-[#9333EA]
                to-[#EC4899]
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-pink-300/50
                transition
                duration-300
              "
            >
              Get Your Event Decorated →
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default DecorationGallery;