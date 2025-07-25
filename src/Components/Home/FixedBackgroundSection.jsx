// import React from "react";

// const FixedBackgroundSection = () => {
//   return (
//     <section className="relative w-full">
//       {/* Top Background Image Section */}
//       <div
//         className="h-[50vh] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://www.rsi.edu/wp-content/uploads/solar-panel-installation-technicians.jpg')",
//         }}
//       ></div>

//       {/* Content Card overlapping bottom */}
//       <div className="-mt-32 px-6 lg:px-20 pb-20">
//         <div className="bg-white rounded-xl shadow-lg max-w-5xl mx-auto grid md:grid-cols-2 gap-10 p-10">
//           {/* Left Content */}
//           <div className="text-left space-y-5">
//             <p className="text-orange-500 font-semibold uppercase text-sm">
//               Home Service
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Best Solution for Your Home Service
//             </h2>
//             <button className="bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-700 transition">
//               Contact Us
//             </button>
//           </div>

//           {/* Right Content */}
//           <div className="text-gray-700 space-y-6">
//             <p>
//               Our central goal is to give clear, excellent and reasonable
//               biological counsel and administrations to public.
//             </p>

//             {/* Progress Bars */}
//             <div>
//               <div className="mb-4">
//                 <div className="flex justify-between text-sm font-semibold">
//                   <span>Wind Turbines</span> <span>70%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-orange-500 h-2 rounded-full w-[70%]"></div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <div className="flex justify-between text-sm font-semibold">
//                   <span>Solar Panels</span> <span>90%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-green-600 h-2 rounded-full w-[90%]"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between text-sm font-semibold">
//                   <span>Hybrid Energy</span> <span>80%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-gray-800 h-2 rounded-full w-[80%]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FixedBackgroundSection;

import React from "react";

const FixedBackgroundSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Fixed background */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage:
            "url('https://www.rsi.edu/wp-content/uploads/solar-panel-installation-technicians.jpg')",
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 pt-[40vh] pb-20 px-6 lg:px-20">
        <div className="bg-white rounded-xl shadow-lg max-w-5xl mx-auto grid md:grid-cols-2 gap-10 p-10">
          {/* Left Content */}
          <div className="text-left space-y-5">
            <p className="text-orange-500 font-semibold uppercase text-sm">
              Home Service
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Best Solution for Your Home Service
            </h2>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-700 transition">
              Contact Us
            </button>
          </div>

          {/* Right Content */}
          <div className="text-gray-700 space-y-6">
            <p>
              At Everunity, our mission is to provide Nagpur residents with
              reliable, affordable, and high-quality solar energy solutions and
              expert consultation.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Expert Solar Installers in Nagpur</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full w-[70%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Customized Rooftop Solar System Design</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Affordable Solar Panel Installation</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>5-Year Maintenance & Support</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Govt Subsidy & Net Metering Help</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-700 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedBackgroundSection;
