function FruitGallery() {
const galleryItems = [
{
title: "Premium Wedding Fruit Counter",
category: "Wedding",
image: "/images/fruits/g1.jpeg",
height: "h-[450px]",
},
{
title: "Seasonal Fruit Display",
category: "Seasonal",
image: "/images/fruits/plate1.jpeg",
height: "h-[320px]",
},
{
title: "Luxury Decorated Fruits",
category: "Premium",
image: "/images/fruits/plate2.jpeg",
height: "h-[400px]",
},
{
title: "Wedding Fruit Counter",
category: "Corporate",
image: "/images/fruits/plate8.jpeg",
height: "h-[520px]",
},
{
title: "Fresh Fruit Arrangement",
category: "Fresh Fruits",
image: "/images/fruits/g2.jpeg",
height: "h-[350px]",
},
{
title: "Live Fruit Serving",
category: "Live Counter",
image: "/images/fruits/plate3.jpeg",
height: "h-[430px]",
},
{
title: "Premium Wedding Fruit Counter",
category: "Wedding",
image: "/images/fruits/g5.jpeg",
height: "h-[450px]",
},
{
title: "Seasonal Fruit Display",
category: "Seasonal",
image: "/images/fruits/g7.jpeg",
height: "h-[320px]",
},
{
title: "Luxury Imported Fruits",
category: "Premium",
image: "/images/fruits/plate5.jpeg",
height: "h-[400px]",
},
{
title: "Wedding Fruit Counter",
category: "Wedding",
image: "/images/fruits/g6.jpeg",
height: "h-[520px]",
},
{
title: "Fresh Fruit Arrangement",
category: "Fresh Fruits",
image: "/images/fruits/plate4.jpeg",
height: "h-[350px]",
},
{
title: "Live Fruit Serving",
category: "Live Counter",
image: "/images/fruits/plate6.jpeg",
height: "h-[430px]",
},
];

return ( <section id="gallery" className="py-24 px-6 bg-[#FFFDF5]"> <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-[#F97316] font-semibold uppercase tracking-[3px] mb-3">
        Our Gallery
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#7C2D12] mb-4">
        Freshness Meets Presentation
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto">
        Explore some of our beautifully arranged fruit counters,
        premium fruit displays and event setups.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center mb-16">
      <div>
        <h3 className="text-4xl font-bold text-[#7C2D12]">
          500+
        </h3>

        <p className="text-gray-600 mt-2">
          Events Served
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#7C2D12]">
          50+
        </h3>

        <p className="text-gray-600 mt-2">
          Fruit Varieties
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-[#7C2D12]">
          100%
        </h3>

        <p className="text-gray-600 mt-2">
          Fresh & Hygienic
        </p>
      </div>
    </div>

    {/* Gallery */}
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
            group
            cursor-pointer
          "
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className={`
              w-full
              ${item.height}
              object-cover
              group-hover:scale-110
              transition
              duration-700
            `}
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#F97316]/80
              to-[#FACC15]
              to-transparent

              opacity-80
              md:opacity-0
              md:group-hover:opacity-100

              transition
              duration-500
            "
          ></div>

          {/* Badge */}
          <span
            className="
              absolute
              top-4
              left-4
              bg-white/90
              backdrop-blur-md
              text-[#F97316]
              px-4
              py-1
              rounded-full
              text-sm
              font-semibold
            "
          >
            {item.category}
          </span>

          {/* Content */}
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
              Fresh Premium Fruit Setup
            </p>
          </div>
        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Every fruit counter is customized according to the event,
        guest preferences and presentation requirements.
      </p>

      <a href="#contact">
        <button
          className="
            bg-gradient-to-r
            from-[#F97316]
            to-[#FACC15]
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
          Book Your Fruit Counter →
        </button>
      </a>
    </div>

  </div>
</section>


);
}

export default FruitGallery;
