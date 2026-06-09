function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      event: "Wedding Event",
      review:
        "The decoration and paan counter were absolutely amazing. Our guests loved the setup and service.",
    },
    {
      name: "Priya Verma",
      event: "Birthday Celebration",
      review:
        "Beautiful balloon decoration and professional execution. Everything was completed on time.",
    },
    {
      name: "Amit Singh",
      event: "Corporate Event",
      review:
        "Excellent fruit counter presentation and great attention to detail. Highly recommended.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7A1F1F] mb-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in creating memorable experiences for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-gray-600 mb-6 italic">
                "{item.review}"
              </p>

              <h3 className="font-bold text-[#7A1F1F]">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.event}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;