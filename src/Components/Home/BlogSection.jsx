// import React from "react";

// const blogPosts = [
//   {
//     id: 1,
//     title: "All you need to know about solar energy.",
//     date: "February 4, 2024",
//     category: "INVESTMENT",
//     image:
//       "https://inergyhtml.websitelayout.net/img/blog/blog-01.jpg",
//   },
//   {
//     id: 2,
//     title: "Five important things to observe in energy.",
//     date: "January 31, 2024",
//     category: "BUSINESS",
//     image:
//       "https://inergyhtml.websitelayout.net/img/blog/blog-02.jpg",
//   },
//   {
//     id: 3,
//     title: "Never underestimate the influence of energy.",
//     date: "January 31, 2024",
//     category: "MATERIALS",
//     image:
//       "https://inergyhtml.websitelayout.net/img/blog/blog-03.jpg",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="text-center mb-12">
//         <h4 className="text-sm text-orange-500 uppercase font-semibold tracking-widest mb-1">
//           Our Blog
//         </h4>
//         <h2 className="text-4xl font-bold text-gray-900">
//           Latest Articles Updated Weekly
//         </h2>
//       </div>

//       <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white rounded shadow hover:shadow-lg transition duration-300"
//           >
//             <div className="relative">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-56 object-cover rounded-t"
//               />
//               <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
//                 {post.category}
//               </span>
//             </div>
//             <div className="p-5">
//               <p className="text-sm text-green-600 font-medium mb-2">
//                 {post.date}
//               </p>
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 {post.title}
//               </h3>
//               <a
//                 href="#"
//                 className="text-green-600 font-medium inline-flex items-center hover:underline"
//               >
//                 Read More <span className="ml-1">→</span>
//               </a>
//             </div>
//             <div className="border-t px-5 py-3 flex justify-between text-sm text-gray-500">
//               <span className="flex items-center gap-1">
//                 <i className="fas fa-user"></i> Admin
//               </span>
//               <span className="flex items-center gap-1">
//                 <i className="fas fa-comment"></i> 0
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "All you need to know about solar energy.",
    date: "February 4, 2024",
    category: "INVESTMENT",
    image: "https://inergyhtml.websitelayout.net/img/blog/blog-01.jpg",
  },
  {
    id: 2,
    title: "Five important things to observe in energy.",
    date: "January 31, 2024",
    category: "BUSINESS",
    image: "https://inergyhtml.websitelayout.net/img/blog/blog-02.jpg",
  },
  {
    id: 3,
    title: "Never underestimate the influence of energy.",
    date: "January 31, 2024",
    category: "MATERIALS",
    image: "https://inergyhtml.websitelayout.net/img/blog/blog-03.jpg",
  },
];

const getCategoryColor = (category) => {
  switch (category) {
    case "INVESTMENT":
      return "bg-emerald-600";
    case "BUSINESS":
      return "bg-blue-600";
    case "MATERIALS":
      return "bg-indigo-600";
    default:
      return "bg-gray-600";
  }
};

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h4 className="text-sm text-orange-500 uppercase font-semibold tracking-widest mb-1">
          Our Blog
        </h4>
        <h2 className="text-4xl font-bold text-gray-900">
          Latest Articles Updated Weekly
        </h2>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full text-white ${getCategoryColor(
                  post.category
                )}`}
              >
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-green-600 font-medium mb-2">
                {post.date}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 transition-all duration-300 group-hover:text-green-700">
                {post.title}
              </h3>
              <a
                href="#"
                className="text-green-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
              >
                Read More <span>→</span>
              </a>
            </div>
            <div className="border-t px-6 py-4 flex justify-between text-sm text-gray-500 bg-gray-50">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" />
                </svg>
                Admin
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.503 8.503 0 01-6.32-2.948c-.115-.144-.18-.324-.18-.514v-.017c0-.35.285-.635.636-.635.18 0 .348.078.465.215A6.5 6.5 0 0010 16c3.314 0 6-2.239 6-5s-2.686-5-6-5a6.5 6.5 0 00-4.6 1.872.633.633 0 01-.936-.072.635.635 0 01.072-.936A7.505 7.505 0 0110 4c4.418 0 8 3.134 8 7z" />
                </svg>
                0
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
