import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/unnamed.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define nav items with paths
  const navItems = [
    // { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Our Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
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

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-white">
        {navItems.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition hover:text-orange-400 ${
                location.pathname === path ? "text-orange-400 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link to="/contact">
        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded text-sm font-semibold text-white">
          FREE QUOTE
        </button>
      </Link>
    </nav>
  );
};

export default Header;


