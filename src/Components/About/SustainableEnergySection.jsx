import { FaMoneyBillWave, FaHome, FaTools } from "react-icons/fa";

const SustainableEnergySection = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Headline + Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Text */}
          <div>
            <p className="text-green-500 font-semibold mb-2">
              Making Nagpur Brighter with Solar Energy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Energize Your Home with Sustainable & Reliable Solar Solutions
            </h2>
          </div>

          {/* Right Text */}
          <div className="text-gray-300 text-sm">
            <p className="mb-4">
              The need for sustainable solar energy is growing rapidly in Nagpur. Everunity brings you affordable solar installations with professional support and advanced technology — all while helping reduce your electricity bills.
            </p>
            <p>
              Join the solar movement and explore how we can empower your future with clean, renewable energy.
            </p>
            <button className="mt-6 px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition duration-200 border border-green-500">
              🌞 Explore All Features
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaMoneyBillWave className="text-green-500 text-3xl mb-4" />,
              title: "Save Your Money",
              desc: "Cut energy bills with our cost-efficient solar systems designed for Nagpur homes.",
            },
            {
              icon: <FaHome className="text-green-500 text-3xl mb-4" />,
              title: "Power Your Home",
              desc: "Harness solar power to energize your home with clean and reliable energy.",
            },
            {
              icon: <FaTools className="text-green-500 text-3xl mb-4" />,
              title: "Expert Planning",
              desc: "Our solar consultants provide accurate, customized designs for your rooftop.",
            },
            {
              icon: <FaTools className="text-green-500 text-3xl mb-4" />,
              title: "Expert Planning",
              desc: "Our solar consultants provide accurate, customized designs for your rooftop.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-xl p-6 hover:scale-105 shadow-lg transition-transform"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
              <div className="mt-4 text-green-600 text-xl">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableEnergySection

