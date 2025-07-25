import React from "react";
import {
  FaSolarPanel,
  FaSeedling,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSolarPanel size={40} />,
    title: "Solar Panel Installation in Nagpur",
    description:
      "Professional rooftop solar installation with net metering and premium Tier-1 panels for homes and businesses.",
    bg: "https://images.unsplash.com/photo-1584277261043-d58a9a9400a4?auto=format&fit=crop&w=800&q=60",
  },
  {
    icon: <FaSeedling size={40} />,
    title: "Solar Maintenance & Cleaning",
    description:
      "Keep your solar panels efficient with expert cleaning, wiring inspection, and inverter health checks.",
    bg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=60",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Solar AMC in Nagpur",
    description:
      "Affordable Annual Maintenance Contracts with routine checkups, fault repairs, and system performance optimization.",
    bg: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=800&q=60",
  },
];

const ReasonsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-28">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 py-4">
          Few Reasons to Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md bg-white transition-transform transform hover:scale-105 duration-300"
          >
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ backgroundImage: `url(${service.bg})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 "></div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center py-16 px-6">
              {/* Icon */}
              <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="bg-white p-4 rounded-full shadow-lg text-teal-700">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200 mt-4">
                {service.description}
              </p>

              {/* Read More */}
              <div className="border-t mt-6 pt-4 text-sm font-medium text-gray-700 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
                Read more <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
