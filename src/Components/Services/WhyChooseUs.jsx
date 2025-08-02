import React from "react";
import { FaBolt, FaCertificate, FaTools, FaHeadset } from "react-icons/fa";

// Feature data with background image
const features = [
  {
    icon: <FaBolt className="text-green-600 text-3xl mb-4" />,
    title: "Efficiency & Power",
    desc: "Boost performance with fast, reliable, and energy-efficient solutions tailored for your business.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmw2PeaBRISfMSghm0INr1V4px40pGQfv8Dlo_qwfdY6OMD9UuQMTSiTe23SVBtoBX8Q&usqp=CAU",
  },
  {
    icon: <FaCertificate className="text-green-600 text-3xl mb-4" />,
    title: "Trust & Warranty",
    desc: "Work with confidence—our trusted services come with strong warranties and guaranteed quality.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiQJ0qBX4GJyrjzUQMRzKSgc_drlV1rw3950yMekgKcaV8BzYC76YX0Tz5UFVL8dt730&usqp=CAU",
  },
  {
    icon: <FaTools className="text-green-600 text-3xl mb-4" />,
    title: "High Quality Work",
    desc: "Get top-tier results with expert workmanship and attention to detail in every project.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oybKRGxu0hg7GUXQFThCVWH6KwGnZOhQJZ_oZEmi5UUejRH-dOI0AYW1EI-hEs3JJ3s&usqp=CAU",
  },
  {
    icon: <FaHeadset className="text-green-600 text-3xl mb-4" />,
    title: "24*7 Support",
    desc: "We’re here when you need us—around-the-clock support to keep your operations running.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Coa0Cl2V5oLr-Yh7rJBD6UQC85yPOwSFwZeIHsSnQCaHV17nqWFZdIONW4pkVYjz3fo&usqp=CAU",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f5f9f3] py-16">
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold uppercase tracking-wide text-sm">
          Why Choose Us
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a3c10]">
          Providing Solar Energy Solutions
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-md text-white h-72"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* White overlay that slides up diagonally on hover */}
            <div className="absolute inset-0 bg-white transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-hover:-rotate-12 z-10 origin-bottom-left" />

            {/* Content on top */}
            <div className="relative z-20 p-6 text-center">
              {item.icon}
              <h3 className="font-semibold text-lg text-[#0a3c10] mb-2 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-white">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
