function Choose() {
  const features = [
    {
      title: "Professional Service",
      description:
        "Experienced team dedicated to delivering exceptional event experiences.",
    },
    {
      title: "Customized Setups",
      description:
        "Every event is unique, and we design setups according to your theme and requirements.",
    },
    {
      title: "Premium Quality",
      description:
        "High-quality decorations, fresh fruits, and premium paan varieties for your guests.",
    },
    {
      title: "Timely Execution",
      description:
        "We ensure on-time setup and smooth execution so you can enjoy your event stress-free.",
    },
  ];

  return (
    <section id="choose" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7A1F1F] mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on quality, creativity, and customer satisfaction
            to make every celebration memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-[#7A1F1F] mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Choose;