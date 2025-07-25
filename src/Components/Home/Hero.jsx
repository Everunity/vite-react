// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./Hero.css";
// import NewLogo from "../../assets/newLogo.png";

// const slides = [
//   {
//     id: 1,
//     backgroundImage:
//       "https://5.imimg.com/data5/SELLER/Default/2023/4/300987093/WW/QW/OP/4108331/solar-panel-system.jpg",
//     subtitle: "Trusted Solar Panel Installation Experts in Nagpur",
//     title: "Affordable Residential & Commercial Solar Solutions",
//     buttonText: "Get a Free Quote",
//   },
//   {
//     id: 2,
//     backgroundImage:
//       "https://images.squarespace-cdn.com/content/v1/615d5a948896bf6b4cbca0d7/69248346-5e0b-4867-922c-39200fcd2430/iStock-1147193952.jpg",
//     subtitle: "Cut Your Electricity Bills by Up to 90%",
//     title: "Rooftop Solar Panel Systems for Homes & Businesses",
//     buttonText: "Start Saving Now",
//   },
//   {
//     id: 3,
//     backgroundImage:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=872&auto=format&fit=crop",
//     subtitle: "Sustainable & Long-Lasting Solar Energy Solutions",
//     title: "Leading Solar Power Company in Nagpur",
//     buttonText: "Discover More",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const total = slides.length;

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(nextSlide, 5000);
//     return () => clearTimeout(timer);
//   }, [current]);

//   const { backgroundImage, subtitle, title, buttonText } = slides[current];

//   return (
//     <div
//       className="relative h-screen bg-cover bg-center text-white transition-all duration-1000"
//       style={{ backgroundImage: `url("${backgroundImage}")` }}
//     >
//       {/* Black overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       {/* Arrows */}
//       {/* <button
//         onClick={prevSlide}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-teal-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full"
//       >
//         <FaArrowLeft size={18} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-teal-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full"
//       >
//         <FaArrowRight size={18} />
//       </button> */}

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12">
//         <div className="bg-white bg-opacity-10 rounded-full p-4 mb-6">
//           <img
//             src={NewLogo}
//             alt="Logo"
//             className="w-full h-20 object-contain"
//           />
//         </div>
//         <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
//           {subtitle}
//         </p>
//         <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
//           {title}
//         </h1>
//         <button className="bg-green-600 hover:bg-green-700 transition font-bold text-white py-3 px-8 rounded shadow-md">
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewLogo from "../../assets/newLogo.png";

const slides = [
  {
    id: 1,
    backgroundImage:
      "https://5.imimg.com/data5/SELLER/Default/2023/4/300987093/WW/QW/OP/4108331/solar-panel-system.jpg",
    subtitle: "Trusted Solar Panel Installation Experts in Nagpur",
    title: "Affordable Residential & Commercial Solar Solutions",
    buttonText: "Get a Free Quote",
  },
  {
    id: 2,
    backgroundImage:
      "https://images.squarespace-cdn.com/content/v1/615d5a948896bf6b4cbca0d7/69248346-5e0b-4867-922c-39200fcd2430/iStock-1147193952.jpg",
    subtitle: "Cut Your Electricity Bills by Up to 90%",
    title: "Rooftop Solar Panel Systems for Homes & Businesses",
    buttonText: "Start Saving Now",
  },
  {
    id: 3,
    backgroundImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=872&auto=format&fit=crop",
    subtitle: "Sustainable & Long-Lasting Solar Energy Solutions",
    title: "Leading Solar Power Company in Nagpur",
    buttonText: "Discover More",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 8000); // slower
    return () => clearTimeout(timer);
  }, [current]);

  const { backgroundImage, subtitle, title, buttonText } = slides[current];

  return (
    <div className="relative h-screen overflow-hidden font-inter">
      {/* Background Image Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 " />

      {/* Hero Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="bg-white bg-opacity-10 rounded-full p-4 mb-6">
            <img
              src={NewLogo}
              alt="Logo"
              className="w-full h-20 object-contain"
            />
          </div>

          <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
            {subtitle}
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            {title}
          </h1>

          <button className="bg-green-600 hover:bg-green-700 transition font-bold text-white py-3 px-8 rounded shadow-md">
            {buttonText}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
