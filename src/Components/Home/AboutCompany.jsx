import React from "react";

export default function AboutCompany() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image Layout */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="relative z-10">
            <img
              src="https://inergyhtml.websitelayout.net/img/content/about3.jpg"
              alt="Team"
              className="rounded-lg shadow-lg object-cover h-full "
            />
          </div>
          <div className="relative z-0">
            <img
              src="https://inergyhtml.websitelayout.net/img/content/about2.jpg"
              alt="Windmill"
              className="rounded-lg shadow-lg object-cover h-full"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0c1f3c] text-white px-6 py-4 text-center text-sm rounded shadow-lg">
              <span className="block font-semibold text-lg leading-5">
                30 Years
              </span>
              <span className="block text-xs mt-1">
                of experience in renewable energy
              </span>
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div>
          <p className="text-sm text-orange-500 font-medium mb-2">
            • Who we are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            We’re the Largest Sun Powered Energy Give Company
          </h2>
          <p className="text-gray-600 text-base mb-6">
            How might we satisfy the developing need for power while ensuring
            our environment and make planet a superior spot?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
