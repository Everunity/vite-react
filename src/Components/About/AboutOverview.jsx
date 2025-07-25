import React from "react";

const AboutOverview = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-center">
        {/* Left - Stats */}
        <div className="space-y-10 text-center md:text-left">
          <div>
            <h2 className="text-green-600 text-base sm:text-lg font-semibold">
              About Everunity Solar – Powering Nagpur with Clean Energy
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              We Are Ready For Solar Energy,
              <br />
              All We Need Is To Use It Well!
            </h1>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-green-600">
                100 +
              </p>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                Projects Completed In Last 5 Years
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-green-600">
                50 +
              </p>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                Qualified Employees & Workers With Us
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-green-600">
                10 +
              </p>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                Awards Milestones Awarded To Us
              </p>
            </div>
          </div>
        </div>

        {/* Center - Image or Video */}
        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl w-full max-w-md">
            <img
              src="https://7oroof.com/demos/solatec/assets/images/about/1.jpg"
              alt="Wind Turbine"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white px-4 py-2 text-sm font-medium rounded shadow-md">
                ▶ Watch Our Intro!
              </button>
            </div>
          </div>
        </div>

        {/* Right - Description */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="text-green-600 text-3xl">🌿</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                Everunity Solar Service & Maintenance is a Nagpur-based solar
                company dedicated to making solar energy accessible, affordable,
                and efficient for every home and business.
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                With 5+ years of industry experience, our team has helped
                hundreds of customers make the switch to solar energy through:
              </p>

              <ul className="mt-2 text-sm text-gray-500 list-none list-inside space-y-1">
                <li>✔️ High-quality rooftop solar installations</li>
                <li>✔️ Complete solar panel maintenance services</li>
                <li>✔️ Government subsidy consultation</li>
                <li>✔️ After-installation performance support</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            We are proud to be among the top solar companies in Nagpur, known
            for reliability, transparency, and 100% customer satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
            <button className="bg-green-500  text-white  px-6 py-2 rounded hover:bg-green-600 transition">
              Learn More
            </button>
            <div className="text-left sm:text-right">
              <p className="font-bold text-gray-900">Sagar Karia</p>
              <p className="text-green-500 text-sm">Solar Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
