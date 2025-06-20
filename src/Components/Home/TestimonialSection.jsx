// import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Mikayla Woollard",
//     title: "Client of Company",
//     image: "https://inergyhtml.websitelayout.net/img/avatars/avatar-10.png",
//     quote:
//       "Wind energy is the most valuable business resource. You won't regret it. I'd be lost without wind energy. Needless to say we are extremely satisfied with the results.",
//   },
//   {
//     id: 2,
//     name: "James Carter",
//     title: "Customer",
//     image: "https://inergyhtml.websitelayout.net/img/avatars/avatar-11.png",
//     quote:
//       "Switching to renewable energy was the best decision ever. Great service and amazing support!",
//   },
//   {
//     id: 3,
//     name: "Lara Jefferson",
//     title: "Business Owner",
//     image: "https://inergyhtml.websitelayout.net/img/avatars/avatar-09.png",
//     quote:
//       "The impact of wind energy on our operations is massive. Highly recommend this company!",
//   },
// ];

// export default function TestimonialSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 5000); // Slide every 5 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-b from-sky-900 to-sky-700 text-white py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-sm uppercase tracking-widest text-gray-300 mb-2">
//           Testimonial
//         </h2>
//         <h3 className="text-4xl font-bold mb-10">What Our Clients Say</h3>

//         <div className="max-w-3xl mx-auto overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {testimonials.map((t) => (
//               <div
//                 key={t.id}
//                 className="min-w-full px-4 flex flex-col items-center"
//               >
//                 <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <p className="text-xl font-light italic max-w-2xl mb-4">
//                   "{t.quote}"
//                 </p>
//                 <p className="text-teal-300 font-semibold text-lg">{t.name}</p>
//                 <p className="text-sm text-gray-400">{t.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Decorative floating avatars */}
//       <img
//         src="https://inergyhtml.websitelayout.net/img/avatars/avatar-10.png"
//         className="absolute top-10 left-10 w-14 h-14 rounded-full border-4 border-yellow-400 object-cover"
//         alt=""
//       />
//       <img
//         src="https://inergyhtml.websitelayout.net/img/avatars/avatar-11.png"
//         className="absolute top-10 right-10 w-14 h-14 rounded-full border-4 border-pink-400 object-cover"
//         alt=""
//       />
//       <img
//         src="https://inergyhtml.websitelayout.net/img/avatars/avatar-09.png"
//         className="absolute bottom-10 left-20 w-14 h-14 rounded-full border-4 border-blue-400 object-cover"
//         alt=""
//       />
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mikayla Woollard",
    title: "Client of Company",
    image: "https://inergyhtml.websitelayout.net/img/avatars/avatar-10.png",
    quote:
      "Wind energy is the most valuable business resource. You won't regret it. I'd be lost without wind energy. Needless to say we are extremely satisfied with the results.",
  },
  {
    id: 2,
    name: "James Carter",
    title: "Customer",
    image: "https://inergyhtml.websitelayout.net/img/avatars/avatar-11.png",
    quote:
      "Switching to renewable energy was the best decision ever. Great service and amazing support!",
  },
  {
    id: 3,
    name: "Lara Jefferson",
    title: "Business Owner",
    image: "https://inergyhtml.websitelayout.net/img/avatars/avatar-09.png",
    quote:
      "The impact of wind energy on our operations is massive. Highly recommend this company!",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://marvel-b1-cdn.bc0a.com/f00000000270514/s25180.pcdn.co/wp-content/uploads/2015/09/iStock-67243821.jpg')] bg-cover bg-center" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-sky-800/80" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-300 mb-2">
          Testimonial
        </h2>
        <h3 className="text-4xl font-bold mb-10">What Our Clients Say</h3>

        <div className="max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-full px-4 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-light italic max-w-2xl mb-4">
                  "{t.quote}"
                </p>
                <p className="text-teal-300 font-semibold text-lg">{t.name}</p>
                <p className="text-sm text-gray-300">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative floating avatars */}
      <img
        src="https://inergyhtml.websitelayout.net/img/avatars/avatar-10.png"
        className="absolute top-10 left-10 w-14 h-14 rounded-full border-4 border-yellow-400 object-cover z-10"
        alt=""
      />
      <img
        src="https://inergyhtml.websitelayout.net/img/avatars/avatar-11.png"
        className="absolute top-10 right-10 w-14 h-14 rounded-full border-4 border-pink-400 object-cover z-10"
        alt=""
      />
      <img
        src="https://inergyhtml.websitelayout.net/img/avatars/avatar-09.png"
        className="absolute bottom-10 left-20 w-14 h-14 rounded-full border-4 border-blue-400 object-cover z-10"
        alt=""
      />
    </section>
  );
}
