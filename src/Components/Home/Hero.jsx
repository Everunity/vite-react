// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaWind } from "react-icons/fa";
// import "./Hero.css";

// const slides = [
//   {
//     id: 1,
//     backgroundImage:
//       "https://5.imimg.com/data5/SELLER/Default/2023/4/300987093/WW/QW/OP/4108331/solar-panel-system.jpg",
//     subtitle: "AS A WORLD INNOVATOR IN ENERGY STOCKPILING.",
//     title: "Evergreen Producer of Wind Energy",
//     buttonText: "GET STARTED",
//   },
//   {
//     id: 2,
//     backgroundImage:
//       "https://images.squarespace-cdn.com/content/v1/615d5a948896bf6b4cbca0d7/69248346-5e0b-4867-922c-39200fcd2430/iStock-1147193952.jpg",
//     subtitle: "DELIVERING CLEAN, RENEWABLE ENERGY SOLUTIONS.",
//     title: "Powering the Future with Solar Technology",
//     buttonText: "JOIN US",
//   },
//   {
//     id: 3,
//     backgroundImage:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=872&auto=format&fit=crop",
//     subtitle: "GREEN ENERGY FOR A GREENER PLANET.",
//     title: "Harnessing Wind & Solar for Sustainability",
//     buttonText: "EXPLORE NOW",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [scrolled, setScrolled] = useState(false);
//   const total = slides.length;

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

//   useEffect(() => {
//     const timer = setTimeout(nextSlide, 5000);
//     return () => clearTimeout(timer);
//   }, [current]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       setScrolled(currentScroll > 10);

//       if (currentScroll > lastScrollY) {
//         setShowHeader(false); // scrolling down
//       } else {
//         setShowHeader(true); // scrolling up
//       }
//       setLastScrollY(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const { backgroundImage, subtitle, title, buttonText } = slides[current];

//   return (
//     <div
//       className="relative h-screen bg-cover bg-center text-white transition-all duration-1000"
//       style={{
//         backgroundImage: `url("${backgroundImage}")`,
//       }}
//     >
//       <div className="absolute inset-0 bg-opacity-60 z-0 transition-opacity duration-1000"></div>

//       {/* Dynamic Header */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
//           showHeader ? "translate-y-0" : "-translate-y-full"
//         } ${
//           scrolled
//             ? "bg-black bg-opacity-90 shadow-lg backdrop-blur"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="flex items-center space-x-2 font-bold text-xl">
//           <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
//           <span>INERGY</span>
//         </div>
//         <ul className="hidden md:flex space-x-6 text-sm font-medium">
//           {["HOME", "PAGES", "SERVICE", "PORTFOLIO", "BLOG", "CONTACT"].map(
//             (item) => (
//               <li key={item}>
//                 <a href="#" className="hover:text-orange-400 transition">
//                   {item}
//                 </a>
//               </li>
//             )
//           )}
//         </ul>
//         <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded text-sm font-semibold">
//           FREE QUOTE
//         </button>
//       </nav>

//       {/* Arrows */}
//       <button
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
//       </button>

//       {/* Hero Content */}
//       <div
//         key={current}
//         className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12 animate-fade-smooth"
//       >
//         <div className="bg-white bg-opacity-10 rounded-full p-5 mb-6">
//           <FaWind size={40} />
//         </div>
//         <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
//           {subtitle}
//         </p>
//         <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl animate-slide-up">
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
import { FaArrowLeft, FaArrowRight, FaWind } from "react-icons/fa";
import "./Hero.css";
import Logo from "../../assets/unnamed.png";
import NewLogo from "../../assets/NewLogo.png";
import LogoTwo from "../../assets/unnamed.jpg";

const slides = [
  {
    id: 1,
    backgroundImage:
      "https://5.imimg.com/data5/SELLER/Default/2023/4/300987093/WW/QW/OP/4108331/solar-panel-system.jpg",
    subtitle: "AS A WORLD INNOVATOR IN ENERGY STOCKPILING.",
    title: "Evergreen Producer of Wind Energy",
    buttonText: "GET STARTED",
  },
  {
    id: 2,
    backgroundImage:
      "https://images.squarespace-cdn.com/content/v1/615d5a948896bf6b4cbca0d7/69248346-5e0b-4867-922c-39200fcd2430/iStock-1147193952.jpg",
    subtitle: "DELIVERING CLEAN, RENEWABLE ENERGY SOLUTIONS.",
    title: "Powering the Future with Solar Technology",
    buttonText: "JOIN US",
  },
  {
    id: 3,
    backgroundImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=872&auto=format&fit=crop",
    subtitle: "GREEN ENERGY FOR A GREENER PLANET.",
    title: "Harnessing Wind & Solar for Sustainability",
    buttonText: "EXPLORE NOW",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { backgroundImage, subtitle, title, buttonText } = slides[current];

  return (
    <div
      className="relative  h-screen bg-cover bg-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      {/* Black overlay with 60% opacity */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Sticky Navbar with scroll background */}
      <nav
        className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
          scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
          <div className="flex flex-col leading-tight text-white">
            <span className="font-bold text-xl -mb-1">Everunity</span>
            <span className="text-sm tracking-wide">Services</span>
          </div>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {["HOME", "PAGES", "SERVICE", "PORTFOLIO", "BLOG", "CONTACT"].map(
            (item) => (
              <li key={item}>
                <a href="#" className="hover:text-orange-400 transition">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded text-sm font-semibold">
          FREE QUOTE
        </button>
      </nav>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-teal-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full"
      >
        <FaArrowLeft size={18} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-teal-700 bg-opacity-70 hover:bg-opacity-90 p-3 rounded-full"
      >
        <FaArrowRight size={18} />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12">
        {/* <div className="bg-black bg-opacity-10 rounded-full p-5 mb-6">
          <FaWind size={40} />
        </div> */}
        <div className="bg-white bg-opacity-10 rounded-full p-4 mb-6">
          <img
            src={NewLogo} // Replace with the actual path to your logo file
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
      </div>
    </div>
  );
};

export default Hero;
