function AboutFruit() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/images/fruits/fruit-logo2.jpeg"
            alt="Fruit Counter"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div>

          <p className="text-[#F97316] font-semibold uppercase tracking-wider mb-3">
            About Our Service
          </p>

          <h2 className="text-4xl font-bold text-[#7C2D12] mb-6">
            The Fruits Junction
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our fruit counters combine freshness, hygiene and
            elegant presentation to create a healthy and
            memorable experience.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            We carefully select premium fruits and arrange
            them beautifully for weddings, receptions,
            birthdays and corporate events.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every counter is customized according to your
            event size, theme and guest preferences.
          </p>

        </div>

      </div>
    </section>
  );
}

export default AboutFruit;