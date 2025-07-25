import { FaLeaf, FaWind } from "react-icons/fa";

const OurMission = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src="https://solen-vite.vercel.app/assets/about-1-DQ3O5xDT.jpg"
            alt="Solar Panels"
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-[-30px] left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3 w-[240px]">
            <img
              src="https://solen-vite.vercel.app/assets/about-2-D8FF1CZY.jpg"
              alt="Client"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold">3600+</p>
              <p className="text-sm text-green-600">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <p className="text-green-600 font-semibold uppercase mb-2">
            About Our Company
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Our goal is to ensure solar energy accessibility.
          </h2>
          <p className="text-gray-600 mb-6">
            At Everunity, we are committed to providing accessible and
            affordable solar energy solutions in Nagpur. Our focus is on
            long-term savings, environmental sustainability, and expert service
            delivery.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaWind className="text-2xl text-green-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Capacity in Place</h4>
                <p className="text-sm text-gray-600">
                  We have the infrastructure and skilled workforce to handle
                  residential and commercial solar projects.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaLeaf className="text-2xl text-green-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Preserve the Planet</h4>
                <p className="text-sm text-gray-600">
                  Our systems help reduce carbon footprints while saving energy
                  costs over time.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex items-center justify-between">
            <button className="bg-green-600 text-white px-4 py-2  hover:bg-green-700 transition">
              Discover More
            </button>
            <div className="hidden md:block bg-white shadow-lg rounded-xl p-4 text-right">
              <p className="text-sm font-semibold text-gray-700">
                High Quality at <br />
                Everunity Solar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
