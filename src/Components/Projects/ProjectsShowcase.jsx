import React from "react";

const projects = [
  {
    img: "https://images.theecoexperts.co.uk/wp-content/uploads/2022/11/Sunny-solar-panel-installer-1.jpeg",
    category: "Residential",
    title: "Solar Panel Setup",
    link: "#",
  },
  {
    img: "https://www.citizensutilityboard.org/wp-content/uploads/2022/05/Installing-Rooftop-Solar-Panels-300x198.png",
    category: "Commercial",
    title: "Easy Installation",
    link: "#",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2025/3/499582873/VP/CB/QD/243133193/solar-system-installation-service-500x500.png",
    category: "Industrial",
    title: "Smart Energy",
    link: "#",
  },
  {
    img: "https://img.freepik.com/free-photo/man-worker-firld-by-solar-panels_1303-15583.jpg?semt=ais_hybrid&w=740",
    category: "Commercial",
    title: "Energy Audit",
    link: "#",
  },
];

const logos = [
  "https://dummyimage.com/100x40/ffffff/000000&text=Sé",
  "https://dummyimage.com/100x40/ffffff/000000&text=The+Backyard",
  "https://dummyimage.com/100x40/ffffff/000000&text=natural",
  "https://dummyimage.com/100x40/ffffff/000000&text=Hipster",
  "https://dummyimage.com/100x40/ffffff/000000&text=Anna's",
  "https://dummyimage.com/100x40/ffffff/000000&text=Smile",
  "https://dummyimage.com/100x40/ffffff/000000&text=R|50%",
];

const ProjectsShowcase = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Spectacular Our Latest Projects
        </h2>
      </div>

      {/* Green BG */}
      <div className="absolute top-[240px] left-0 w-full h-[300px] bg-green-800 -z-10" />

      {/* Card Section */}
      <div className="relative z-10 flex justify-center items-start gap-6 flex-wrap px-6 pb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-64 h-72 overflow-hidden rounded-lg shadow-md bg-white group"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Slide-down Overlay */}
            <div className="absolute inset-0 bg-green-900 bg-opacity-90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-white flex flex-col justify-center items-center p-4">
              <div className="absolute top-2 right-2">
                <a
                  href={project.link}
                  className="w-16 h-16 bg-orange-500 text-white text-xl flex items-center justify-center rounded-sm"
                >
                  +
                </a>
              </div>
              <p className="text-lg">{project.category}</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Logos Section */}
      {/* <div className="bg-green-800 pt-48 pb-10 mt-[-200px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div> */}
        <div className="relative w-full bg-white">
      {/* Inline CSS for animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* Logos Carousel Section */}
      <div className="bg-green-800 pt-48 py-20 mt-[-200px] overflow-hidden">
        <div className="w-full whitespace-nowrap ">
          <div className="flex marquee gap-10 w-max ">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectsShowcase;
