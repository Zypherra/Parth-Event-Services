function Services() {
  const services = [
    {
      title: "Paan Counter",
      description:
        "Premium paan counters with a variety of traditional and modern paan flavors, perfect for weddings and special events.",
      icon: "🌿",
      image:"src/assets/paan-service.jpeg",
    },
    {
      title: "Fruit Counter",
      description:
        "Fresh fruit counters beautifully presented with hygienic preparation and attractive displays.",
      icon: "🍓",
      image:"src/assets/fruit-service.jpeg",
    },
    {
      title: "Balloon & Flower Decoration",
      description:
        "Creative decoration solutions for weddings, birthdays, anniversaries, and corporate events.",
      icon: "🎈",
      image:"src/assets/balloon-service.jpeg",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7A1F1F] mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide complete event experience solutions designed
            to make your celebrations memorable and visually stunning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300"
            >
              <div className="pt-5 pb-5">
                <img className="rounded-sm" src={service.image}></img>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#7A1F1F]">
                {service.icon} {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

              <button className="mt-6 border border-[#f78e0f] text-[#f78e0f] px-5 py-2 rounded-lg font-semibold hover:bg-[#f78e0f] hover:text-white transition duration-300">
  Learn More →
</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;