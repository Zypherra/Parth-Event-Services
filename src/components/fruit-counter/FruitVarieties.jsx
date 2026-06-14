function FruitVarieties() {
const seasonalFruits = [
{
  name: "Apple",
  image: "/images/fruits/apple.jpg",
},
{
name: "Watermelon",
image: "/images/fruits/watermelon.avif",
},
{
name: "Grapes",
image: "/images/fruits/grapes.jpg",
},
{
name: "Pineapple",
image: "/images/fruits/pineapple.jpg",
},
{
name: "Orange",
image: "/images/fruits/orange.webp",
},
{
name: "Banana",
image: "/images/fruits/banana.jpg",
},
{
  name: "Pomegranate",
  image: "/images/fruits/pomegranate.avif"
},
{
  name: "Guava",
  image: "/images/fruits/guava.jpg",
},
{
  name: "Papaya",
  image: "/images/fruits/papaya.webp"
},
{
  name: "Muskmelon",
  image: "/images/fruits/muskmelon.jpg",
}
];

const premiumFruits = [
{
name: "Kiwi",
image: "/images/fruits/kiwi.jpeg",
},
{
  name: "Dragon Fruit",
  image: "/images/fruits/dragonfruit.jpg"
},
{
name: "Cherry",
image: "/images/fruits/cherry.jpeg",
},
{
name: "Blueberry",
image: "/images/fruits/blueberry.jpeg",
},
{
name: "Pear",
image: "/images/fruits/pear.jpeg",
},
{
name: "Washington Apple",
image: "/images/fruits/apple.jpeg",
},
{
name: "Mandarin",
image: "/images/fruits/mandarin.jpeg",
},
{}
];

return ( <section className="py-24 px-6 bg-white"> <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-[#F97316] font-semibold uppercase tracking-wider mb-3">
        Fruit Selection
      </p>

      <h2 className="text-4xl font-bold text-[#7C2D12] mb-4">
        Fruits We Serve
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto">
        We offer a wide range of fresh seasonal and premium imported fruits
        to create an exceptional experience for your guests.
      </p>
    </div>

    {/* Seasonal Fruits */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-[#7C2D12] text-center mb-10">
        Seasonal Fruits
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {seasonalFruits.map((fruit, index) => (
          <div
            key={index}
            className="
              bg-[#FFFDF5]
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h4 className="font-semibold text-[#7C2D12]">
                {fruit.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Premium Fruits */}
    <div>
      <h3 className="text-3xl font-bold text-[#7C2D12] text-center mb-10">
        Premium Imported Fruits
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {premiumFruits.map((fruit, index) => (
          <div
            key={index}
            className="
              bg-[#FFFDF5]
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition
              duration-300
            "
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h4 className="font-semibold text-[#7C2D12]">
                {fruit.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

);
}

export default FruitVarieties;
