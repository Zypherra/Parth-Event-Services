import { useState } from "react";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const gradientClasses = {
    All: "from-[#7A1F1F] to-[#f78e0f]",
    Paan: "from-green-500 to-emerald-700",
    Fruit: "from-orange-400 via-yellow-400 to-red-400",
    Decoration: "from-purple-600 via-pink-500 to-rose-500",
  };

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      title: "Premium Paan Counter",
      category: "Paan",
    },
    {
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
      title: "Luxury Fruit Counter",
      category: "Fruit",
    },
    {
      image: "src/assets/balloon1.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "src/assets/balloon5.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "src/assets/balloon9.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "src/assets/balloon10.jpeg",
      title: "Balloon Decoration",
      category: "Decoration",
    },
    {
      image: "src/assets/balloon18.jpeg",
      title: "Wedding Flower Decoration",
      category: "Decoration",
    },
    {
      image: "src/assets/balloon16.jpeg",
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
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-[#f78e0f] mt-2">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-[#7A1F1F] to-[#f78e0f] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300 ">
          View Full Gallery
        </button>
      </div>

    </div>
    </section>
  );
}

export default Gallery;
