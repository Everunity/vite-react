// import React, { useState } from "react";

// const tabs = [
//   {
//     id: "profile",
//     label: "Our Profile",
//     content: (
//       <>
//         <p className="mb-3">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout.
//         </p>
//         <p>
//           The point of using Lorem Ipsum is that it has a more-or-less normal
//           distribution of letters, making it look like readable English.
//         </p>
//       </>
//     ),
//   },
//   {
//     id: "vision",
//     label: "Our Vision",
//     content: (
//       <>
//         <p className="mb-3">
//           Our vision is to become the global leader in renewable energy and
//           sustainability, setting the standard for others to follow.
//         </p>
//         <p>
//           We are committed to innovation, excellence, and delivering value to
//           our community and clients.
//         </p>
//       </>
//     ),
//   },
//   {
//     id: "history",
//     label: "Our History",
//     content: (
//       <>
//         <p className="mb-3">
//           Since our inception, we have been driven by a mission to empower the
//           world with clean, reliable, and affordable energy solutions.
//         </p>
//         <p>
//           Over the years, we have built a strong foundation based on trust,
//           performance, and sustainability.
//         </p>
//       </>
//     ),
//   },
// ];

// const SecondSection = () => {
//   const [activeTab, setActiveTab] = useState("profile");

//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="w-full">
//             <img
//               src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
//               alt="About"
//               className="rounded-xl shadow-lg w-full max-w-md mx-auto"
//             />
//           </div>

//           {/* Content */}
//           <div className="w-full">
//             <h6 className="text-primary font-semibold text-lg mb-2 uppercase">
//               About Us
//             </h6>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
//               Our team comes with the experience and knowledge
//             </h2>

//             {/* Tabs */}
//             <div className="mb-6 flex flex-wrap gap-3">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`py-2 px-4 rounded-md text-sm font-semibold transition ${
//                     activeTab === tab.id
//                       ? "bg-green-600 text-white"
//                       : "bg-white border border-gray-300 hover:bg-green-100"
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="text-gray-700 text-base leading-relaxed bg-white p-5 rounded-md shadow-sm transition duration-300">
//               {tabs.find((tab) => tab.id === activeTab)?.content}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecondSection;

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
            Best Wind Solutions and Renewable Energy
          </h2>
          <p className="text-gray-600 mb-4">
            Over 30 year's experience providing top quality carpentry across world.
          </p>
          <p className="text-gray-600 mb-6">
            Our team of engineers and technicians are professionally trained by
            the Firm. In parallel with the repair & maintenance of pumps on
            floating vehicles, we are truly reliable pump doctors.
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
              <span className="font-semibold text-gray-800">Hydropower Plants</span>
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
                (+1) 23 456 789
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};




export default SecondSection