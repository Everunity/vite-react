// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../../assets/unnamed.png";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Define nav items with paths
//   const navItems = [
//     // { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Contact Us", path: "/contact" },
//     { label: "Our Services", path: "/services" },
//     { label: "Projects", path: "/projects" },
//     { label: "Blog", path: "/blog" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
//         scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* Logo */}
//       <Link to="/" className="flex items-center space-x-3 cursor-pointer">
//         <img src={Logo} alt="Logo" className="h-12 w-auto" />
//         <div className="flex flex-col leading-tight text-white">
//           <span className="font-bold text-xl -mb-1">Everunity</span>
//           <span className="text-sm tracking-wide">Services</span>
//         </div>
//       </Link>

//       {/* Nav Links */}
//       <ul className="hidden md:flex space-x-6 text-sm font-medium text-white">
//         {navItems.map(({ label, path }) => (
//           <li key={path}>
//             <Link
//               to={path}
//               className={`transition hover:text-orange-400 ${
//                 location.pathname === path ? "text-orange-400 font-semibold" : ""
//               }`}
//             >
//               {label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* CTA Button */}
//       <Link to="/contact">
//         <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded text-sm font-semibold text-white">
//           FREE QUOTE
//         </button>
//       </Link>
//     </nav>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/unnamed.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const navItems = [
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Our Services", path: "/our-services" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
          scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
          <div className="flex flex-col leading-tight text-white">
            <span className="font-bold text-xl -mb-1">Everunity</span>
            <span className="text-sm tracking-wide">Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`transition hover:text-orange-400 ${
                  location.pathname === path
                    ? "text-orange-400 font-semibold"
                    : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact-us">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded text-sm font-semibold text-white">
              FREE QUOTE
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Sidebar (no overlay now) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="pt-20 px-4 flex flex-col space-y-4">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base transition hover:text-orange-400 ${
                location.pathname === path
                  ? "text-orange-400 font-semibold"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}

          <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            <button className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded text-sm font-semibold text-white mt-4 w-full">
              FREE QUOTE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
