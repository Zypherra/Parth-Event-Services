function WhyChooseFruit() {
const features = [
{
icon: "🍎",
title: "Premium Quality Fruits",
description:
"We carefully select fresh and high-quality fruits to ensure the best experience for your guests.",
},
{
icon: "🧼",
title: "Hygienic Preparation",
description:
"Every fruit is cleaned, prepared and served following strict hygiene standards.",
},
{
icon: "🎨",
title: "Beautiful Presentation",
description:
"Our fruit counters are designed to enhance the visual appeal of your event.",
},
{
icon: "🌍",
title: "Imported Fruit Options",
description:
"We offer premium imported fruits for luxury weddings and special celebrations.",
},
{
icon: "⚡",
title: "Timely Setup",
description:
"Our team ensures everything is prepared and ready before your event begins.",
},
{
icon: "🤝",
title: "Customized Service",
description:
"Every fruit counter is tailored according to your event theme and requirements.",
},
];

return ( <section className="py-24 px-6 bg-gradient-to-br from-[#FFF7E6] to-[#FFFDF5]"> <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-[#F97316] font-semibold uppercase tracking-wider mb-3">
        Why Choose Us
      </p>

      <h2 className="text-4xl font-bold text-[#7C2D12] mb-4">
        Why Our Fruit Counters Stand Out
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto">
        We combine freshness, presentation and professional service
        to create an unforgettable fruit counter experience.
      </p>
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            hover:-translate-y-2
            hover:shadow-2xl
            transition
            duration-300
          "
        >
          <div className="text-5xl mb-5">
            {feature.icon}
          </div>

          <h3 className="text-xl font-bold text-[#7C2D12] mb-4">
            {feature.title}
          </h3>

          <p className="text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">

      <h3 className="text-3xl font-bold text-[#7C2D12] mb-4">
        Ready To Impress Your Guests?
      </h3>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Let us create a beautiful and refreshing fruit counter
        that perfectly matches your celebration.
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
          Get a Free Quote →
        </button>
      </a>

    </div>

  </div>
</section>

);
}

export default WhyChooseFruit;
