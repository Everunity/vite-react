import { FaSun, FaBolt, FaLeaf, FaRegLightbulb } from "react-icons/fa";

const New = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold uppercase mb-2">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Empowering a Sustainable Future with Solar Energy
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Everunity, our mission is to make clean and affordable solar energy accessible for everyone in Nagpur and beyond. We believe in creating a greener tomorrow through innovation, education, and expert solar solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <FaSun className="text-2xl text-green-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Clean Energy</h4>
            <p className="text-gray-600 text-sm">
              We deliver reliable solar systems that reduce reliance on traditional energy sources and cut emissions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <FaBolt className="text-2xl text-green-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Energy Independence</h4>
            <p className="text-gray-600 text-sm">
              Reduce your electricity bills and take control of your energy usage with our smart solar solutions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <FaLeaf className="text-2xl text-green-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Eco-Friendly</h4>
            <p className="text-gray-600 text-sm">
              Our solar technology helps preserve the planet by reducing your carbon footprint.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <FaRegLightbulb className="text-2xl text-green-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Smart Innovation</h4>
            <p className="text-gray-600 text-sm">
              We integrate the latest solar innovations to ensure efficiency, durability, and long-term savings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
