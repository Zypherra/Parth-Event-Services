function Gallery() {
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      title: "Paan Counter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
      title: "Fruit Counter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      title: "Birthday Decoration",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      title: "Flower Decoration",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7A1F1F] mb-4">
            Our Recent Work
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our event setups, decorations,
            fruit counters, and premium paan counters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="bg-white p-4">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#7A1F1F] text-white px-8 py-3 rounded-lg hover:bg-[#5d1717] transition">
            View Full Gallery
          </button>
        </div>

      </div>
    </section>
  );
}

export default Gallery;