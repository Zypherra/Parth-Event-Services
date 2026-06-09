function Stats() {
  const stats = [
    {
      number: "750+",
      label: "Events Completed",
    },
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "2000+",
      label: "Happy Guests Served",
    },
    {
      number: "250+",
      label: "Decoration Themes",
    },
  ];

  return (
    <section className="py-10 bg-[#7A1F1F] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold text-[#D4AF37]">
                {stat.number}
              </h2>

              <p className="mt-3 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;