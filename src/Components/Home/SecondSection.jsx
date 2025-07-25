import React from "react";
import { FaRecycle, FaWater } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { MdShield } from "react-icons/md";

const SecondSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with stats overlay */}
        <div className="relative">
          <img
            src="https://inergyhtml.websitelayout.net/img/content/about1.jpg"
            alt="Wind Energy"
            className="rounded-lg w-full shadow-lg"
          />

          {/* Stats overlay */}
          <div className="absolute bottom-4 left-0 p-6 flex w-full text-white text-left">
            <div className="bg-teal-700 p-6 w-1/2 flex items-center gap-4">
              <FiCamera size={28} />
              <div>
                <p className="text-xl font-bold">180k</p>
                <p className="text-sm">Installed Capacity</p>
              </div>
            </div>
            <div className="bg-orange-500 p-6 w-1/2 flex items-center gap-4">
              <MdShield size={28} />
              <div>
                <p className="text-xl font-bold">12k</p>
                <p className="text-sm">Wtgs Installed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-orange-500 font-semibold uppercase text-sm mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Leading Provider of Solar Energy Solutions
          </h2>
          <p className="text-gray-600 mb-4">
            With over 5 years of expertise, we deliver high-performance solar
            panel installations and complete solar power systems tailored for
            homes and businesses worldwide.
          </p>
          <p className="text-gray-600 mb-6">
            Our certified solar engineers ensure optimal energy output through
            efficient and sustainable designs. From consultation to
            installation, we help you reduce your electricity bills and carbon
            footprint.
          </p>

          {/* Icons */}
          <div className="flex gap-10 mb-8">
            <div className="flex items-center gap-3">
              <FaRecycle size={24} className="text-green-700" />
              <span className="font-semibold text-gray-800">
                Money Back Guarantee
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaWater size={24} className="text-green-700" />
              <span className="font-semibold text-gray-800">
                Advanced Solar Panels
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <button className="bg-green-700 text-white px-6 py-3 font-semibold rounded hover:bg-green-800 transition">
              READ MORE
            </button>
            <p className="mt-4 sm:mt-0 text-sm text-gray-700">
              Call us for help <br />
              <span className="font-bold text-lg text-gray-900">
                (+91) 9067734445
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
