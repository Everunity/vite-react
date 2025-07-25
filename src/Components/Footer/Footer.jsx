import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../../assets/unnamed.png"
export default function Footer() {
  return (
    <footer className="bg-[#0c1f3c] text-white pt-16 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo & Subscribe */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-semibold">Everyunity</p>
              <p className="text-xs tracking-wide">Services</p>
            </div>
          </div>
          <p className="text-sm mb-4">Premium quality & services since 2015!</p>
          <form className="flex items-center bg-white rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Subscribe with us"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 4l16 8-16 8V4z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Recent News */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Recent News</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img
                src="https://inergyhtml.websitelayout.net/img/blog/blog-01.jpg"
                alt=""
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-orange-400 text-sm">February 4, 2024</p>
                <p className="text-sm font-medium leading-snug">
                  All you need to know about solar energy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="https://inergyhtml.websitelayout.net/img/blog/blog-02.jpg"
                alt=""
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-orange-400 text-sm">January 31, 2024</p>
                <p className="text-sm font-medium leading-snug">
                  Five important things to observe in energy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              📧 <span>sales@everunityservices.com</span>
            </li>
            <li className="flex items-center gap-2">
              📞 <span>(+91) 9067734445</span>
            </li>
            <li className="flex items-center gap-2">
              📞 <span>(+91) 9067734446/7/8</span>
            </li>
            <li className="flex items-center gap-2">
              📍 <span>Nagpur, Maharastra, India</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            {["facebook", "twitter", "youtube", "linkedin"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full"
              >
                <i className={`fab fa-${platform} text-white`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © 2025 All rights reserved by{" "}
          <span className="text-orange-400 font-medium">Everunity</span>
        </p>
        <ul className="flex gap-4 mt-4 md:mt-0 text-white">
          <li><a href="#" className="hover:text-orange-400">Home</a></li>
          <li><a href="#" className="hover:text-orange-400">About</a></li>
          <li><a href="#" className="hover:text-orange-400">Services</a></li>
          <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

