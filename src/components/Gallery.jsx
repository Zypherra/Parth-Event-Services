import { useState } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const gradientClasses = {
    All: "from-[#7A1F1F] to-[#92400e]",
    Paan: "from-green-500 to-emerald-700",
    Fruit: "from-orange-400 via-yellow-400 to-red-400",
    Decoration: "from-purple-600 via-pink-500 to-rose-500",
  };

  const galleryItems = [
    {
      image: "/images/paan/g1.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/paan/a1.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/decorations/balloon9.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "/images/paan/meetha-paan.jpg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/decorations/balloon5.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "/images/paan/p1.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/fruits/plate3.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/paan/g7.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/paan/g12.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/fruits/plate4.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/paan/g10.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/paan/g14.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/decorations/balloon10.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    , {
      image: "/images/paan/g15.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/fruits/plate5.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/paan/a5.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/fruits/plate6.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/decorations/balloon1.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "/images/paan/a6.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/fruits/g2.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/decorations/balloon21.jpeg",
      title: "Birthday Decoration",
      category: "Decoration",
    },
    {
      image: "/images/paan/a8.jpeg",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "/images/fruits/g3.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/fruits/g7.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/decorations/balloon20.jpeg",
      title: "Baby Shower",
      category: "Decoration",
    },
    {
      image: "/images/fruits/g8.jpeg",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "/images/decorations/balloon18.jpeg",
      title: "Wedding Flower Decoration",
      category: "Decoration",
    },
    {
      image: "/images/decorations/balloon16.jpeg",
      title: "Wedding Flower Decoration",
      category: "Decoration",
    },
  ];

  const filters = ["All", "Paan", "Fruit", "Decoration"];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
        (item) => item.category === activeFilter
      );

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50"> <div className="max-w-7xl mx-auto">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#7A1F1F] mb-4">
          Our Recent Work
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our premium event setups, elegant decorations,
          fruit counters and paan counters.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              px-6 py-2 ml-1 rounded-full font-bold text-white
              bg-gradient-to-r ${gradientClasses[filter]}
              hover:scale-105 transition duration-300 shadow-md
              `}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="
        h-80
        w-full
        object-cover
        transition
        duration-700
        group-hover:scale-110
      "
            />

            {/* Overlay */}
            <div
              className="
        absolute
        inset-0

        bg-gradient-to-t
        from-[#7A1F1F]/95
        via-[#7A1F1F]/40
        to-transparent

        opacity-60
        md:opacity-0
        md:group-hover:opacity-60

        transition
        duration-500
      "
            ></div>

            {/* Content */}
            <div
              className="
        absolute
        bottom-0
        left-0
        right-0
        p-5

        text-white

        translate-y-0
        md:translate-y-full
        md:group-hover:translate-y-0

        transition
        duration-500
      "
            >
              <span
                className="
          inline-block
          mb-2
          px-3
          py-1
          rounded-full
          bg-[#d97706]
          text-white
          text-xs
          font-medium
        "
              >
                {item.category}
              </span>

              <h3 className="text-lg font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">

        <Link
          to="/paan-counter"
          className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          Explore Paan Gallery
        </Link>

        <Link
          to="/fruit-counter"
          className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300 "
        >
          Explore Fruit Gallery
        </Link>

        <Link
          to="/decorations"
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300 "
        >
          Explore Decorations Gallery
        </Link>

      </div>

    </div>
    </section>
  );
}

export default Gallery;
