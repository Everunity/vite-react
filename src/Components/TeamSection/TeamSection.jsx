// import React from "react";
// import { FaInstagram, FaTwitter, FaFacebookF, FaShareAlt } from "react-icons/fa";

// const teamMembers = [
//   {
//     name: "Dakota Johnston",
//     role: "CEO & Founder",
//     img: "https://inergyhtml.websitelayout.net/img/team/team-02.jpg",
//     socials: ["instagram", "twitter", "facebook"],
//   },
//   {
//     name: "Taylah Tolmie",
//     role: "Turbine Engineer",
//     img: "https://inergyhtml.websitelayout.net/img/team/team-01.jpg",
//     socials: ["instagram", "twitter", "facebook"],
//   },
//   {
//     name: "Jasmine Parrott",
//     role: "Design Expert",
//     img: "https://inergyhtml.websitelayout.net/img/team/team-03.jpg",
//     socials: ["instagram", "twitter", "facebook"],
//   },
//   {
//     name: "Toby Sampson",
//     role: "Solar Engineer",
//     img: "https://inergyhtml.websitelayout.net/img/team/team-04.jpg",
//     socials: ["instagram", "twitter", "facebook"],
//   },
// ];

// const iconMap = {
//   instagram: <FaInstagram />,
//   twitter: <FaTwitter />,
//   facebook: <FaFacebookF />,
// };

// const TeamSection = () => {
//   return (
//     <div className="py-16 bg-white">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <p className="text-sm text-orange-500 font-semibold tracking-widest uppercase">
//           Our Team
//         </p>
//         <h2 className="text-4xl font-bold text-gray-900">Meet Our Team Members</h2>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-wrap justify-center gap-8 px-4">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="relative bg-white w-64 shadow-md rounded overflow-hidden group"
//           >
//             {/* Image */}
//             <div className="relative">
//               <img src={member.img} alt={member.name} className="w-full h-80 object-cover" />

//               {/* Hover Social Icons (middle card only) */}
//               {member.socials.length > 0 && (
//                 <div className="absolute top-4 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {member.socials.map((key, i) => (
//                     <div
//                       key={i}
//                       className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded shadow hover:scale-110 transition"
//                     >
//                       {iconMap[key]}
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Share Icon */}
//               <div className="absolute bottom-0 right-0">
//                 <div className="bg-orange-500 w-10 h-10 flex items-center justify-center text-white text-xl">
//                   <FaShareAlt />
//                 </div>
//               </div>
//             </div>

//             {/* Info */}
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
//               <p className="text-sm text-gray-600">{member.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;
import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaShareAlt } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dakota Johnston",
    role: "CEO & Founder",
    img: "https://inergyhtml.websitelayout.net/img/team/team-02.jpg",
    socials: ["instagram", "twitter", "facebook"],
  },
  {
    name: "Taylah Tolmie",
    role: "Turbine Engineer",
    img: "https://inergyhtml.websitelayout.net/img/team/team-01.jpg",
    socials: ["instagram", "twitter", "facebook"],
  },
  {
    name: "Jasmine Parrott",
    role: "Design Expert",
    img: "https://inergyhtml.websitelayout.net/img/team/team-03.jpg",
    socials: ["instagram", "twitter", "facebook"],
  },
  {
    name: "Toby Sampson",
    role: "Solar Engineer",
    img: "https://inergyhtml.websitelayout.net/img/team/team-04.jpg",
    socials: ["instagram", "twitter", "facebook"],
  },
];

const iconMap = {
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  facebook: <FaFacebookF />,
};

const TeamSection = () => {
  return (
    <div className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-orange-500 font-semibold tracking-widest uppercase relative inline-block">
          Our Team
          <span className="block w-6 h-1 bg-orange-500 absolute -bottom-1 left-1/2 transform -translate-x-1/2 rounded-full animate-pulse"></span>
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          Meet Our Team Members
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white w-64 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              {/* Hover Social Icons */}
              <div className="absolute top-4 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
                {member.socials.map((key, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded shadow-md hover:scale-110 transition"
                  >
                    {iconMap[key]}
                  </div>
                ))}
              </div>

              {/* Share Icon */}
              <div className="absolute bottom-0 right-0">
                <div className="bg-orange-500 w-10 h-10 flex items-center justify-center text-white text-xl animate-pulse">
                  <FaShareAlt />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
