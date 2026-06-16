function FruitCounterTypes() {
const services = [
{
title: "Seasonal Fruit Counter",
description:
"Fresh seasonal fruits carefully selected and beautifully displayed for your guests.",
image: "/images/fruits/g2.jpeg",
},
{
title: "Premium Imported Fruits",
description:
"Exclusive imported fruits including kiwi, cherries, blueberries and more for a luxurious experience.",
image: "/images/fruits/plate3.jpeg",
},
{
title: "Wedding Fruit Counter",
description:
"Elegant fruit displays designed to complement wedding themes and enhance guest experience.",
image: "/images/fruits/g3.jpeg",
},
{
title: "Corporate Event Counter",
description:
"Healthy and attractive fruit counters perfect for corporate gatherings and professional events.",
image: "/images/fruits/g8.jpeg",
},
{
title: "Live Fruit Serving",
description:
"Freshly cut and served fruits prepared live to ensure maximum freshness and hygiene.",
image: "/images/fruits/plate7.jpeg",
},
{
title: "Customized Fruit Display",
description:
"Personalized fruit arrangements created according to your event theme and requirements.",
image: "/images/fruits/g7.jpeg",
},
];

return ( <section className="py-24 px-6 bg-[#FFFDF5]"> <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-[#F97316] font-semibold uppercase tracking-wider mb-3">
        Our Services
      </p>

      <h2 className="text-4xl font-bold text-[#7C2D12] mb-4">
        Fruit Counter Services We Offer
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto">
        From premium imported fruits to customized fruit displays,
        we provide complete fruit counter solutions for every type
        of celebration.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-lg
            hover:-translate-y-2
            hover:shadow-2xl
            transition
            duration-300
          "
        >
          <div className="overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
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
            <h3 className="text-xl font-bold text-[#7C2D12] mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <a href="#contact">
              <button className="text-[#F97316] font-semibold hover:translate-x-1 transition">
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

export default FruitCounterTypes;
