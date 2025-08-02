import React from "react";
import {
  FaSun,
  FaLeaf,
  FaTools,
  FaSolarPanel,
  FaWind,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    title: "Solar Maintenance",
    description:
      "Keep your solar panels operating at peak efficiency with our professional solar maintenance services. We handle routine inspections, cleaning, and repairs to extend your system’s lifespan and optimize energy output.",
    icon: <FaTools className="text-white text-xl" />,
    img: "https://solareenergy.com/wp-content/uploads/2021/12/solar-maintenance-256x300.png",
  },
  {
    title: "Energy Saving Devices",
    description:
      "Upgrade your home or business with advanced energy-saving devices designed to reduce power consumption and minimize your electricity bills. Ideal for eco-conscious households and sustainable businesses.",
    icon: <FaLeaf className="text-white text-xl" />,
    img: "https://tiimg.tistatic.com/fp/1/004/386/solar-power-panel-077.jpg",
  },
  {
    title: "Solar Solutions",
    description:
      "Get custom-designed solar energy solutions tailored to your property’s energy needs. Whether residential or commercial, our solar setups maximize energy efficiency and long-term savings.",
    icon: <FaSun className="text-white text-xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2024/9/449602692/XD/FM/BT/43183063/off-grid-solar-panel-installation-services.jpg",
  },
  {
    title: "Solar PV Systems",
    description:
      "Install high-performance solar photovoltaic (PV) systems to convert sunlight into clean, renewable electricity. Our PV solutions are engineered for reliability, durability, and optimal output in all weather conditions.",
    icon: <FaSolarPanel className="text-white text-xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/6/320102336/XA/WU/XB/187132086/solar-panel-installation-service-500x500.png",
  },
  {
    title: "Solar Panel Installation",
    description:
      "Professional solar panel installation for homes and businesses, ensuring optimal placement, efficiency, and long-term energy savings. We handle the full process from design to activation.",
    icon: <FaTools className="text-white text-xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/9/347072309/OK/YQ/TK/63451377/residential-solar-panel-installation-service-500x500.jpg",
  },
  {
    title: "Solar Inverter Services",
    description:
      "Keep your solar system running smoothly with expert solar inverter installation, repairs, and maintenance. We ensure maximum power conversion and reliable performance.",
    icon: <FaSolarPanel className="text-white text-xl" />,
    img: "https://5.imimg.com/data5/SELLER/Default/2025/3/493773948/RG/VA/HK/222582519/solar-pv-module-500x500.jpeg",
  },
];

const SolarServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            {/* Background image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Icon Top Right */}
            <div className="absolute top-4 right-4 bg-green-500 p-3 rounded-full z-10">
              {service.icon}
            </div>

            {/* Black hover overlay */}
            {/* Black hover overlay with slide from bottom */}
            <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-all duration-500 z-0"></div>

            {/* Info Box at Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-5 transition-all duration-300 group-hover:-translate-y-4">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-green-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarServicesSection;
