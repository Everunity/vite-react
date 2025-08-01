import React from "react";
import ProjectsShowcase from "./ProjectsShowcase";
import Helmet from "react-helmet";
const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Solar Projects in Nagpur | Everunity Services</title>
        <meta
          name="description"
          content="Explore successful solar panel installations and maintenance projects by Everunity Services across residential and commercial spaces in Nagpur."
        />
        <link rel="canonical" href="https://everunityservices.com/projects" />

        {/* OG and Twitter */}
        <meta
          property="og:title"
          content="Our Solar Projects in Nagpur | Everunity Services"
        />
        <meta
          property="og:description"
          content="Explore successful solar panel installations and maintenance projects by Everunity Services across residential and commercial spaces in Nagpur."
        />
        <meta
          property="og:url"
          content="https://everunityservices.com/projects"
        />
        <meta
          name="twitter:title"
          content="Our Solar Projects in Nagpur | Everunity Services"
        />
        <meta
          name="twitter:description"
          content="Explore successful solar panel installations and maintenance projects by Everunity Services across residential and commercial spaces in Nagpur."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Our Solar Projects in Nagpur | Everunity Services",
        "description": "Explore successful solar panel installations and maintenance projects by Everunity Services across residential and commercial spaces in Nagpur.",
        "url": "https://everunityservices.com/projects"
      }
    `}
        </script>
      </Helmet>

      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://chariotenergy.com/wp-content/uploads/2021/01/diy-solar-panels.jpg)", // Replace with actual path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">our Projects</h1>
          <p className="text-sm md:text-base">
            <span className="text-white">Home</span>{" "}
            <span className="mx-1">&gt;</span>{" "}
            <span className="text-orange-400">Company</span>{" "}
            <span className="mx-1">&gt;</span> Projects
          </p>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-6 flex justify-center w-full z-10">
          <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xl">&#8595;</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Include ProjectsShowcase component here */}
        {/* <h2 className="text-3xl font-bold mb-6 text-center">Our Solar Projects</h2> */}
        <ProjectsShowcase />
      </div>
      <div className="bg-green-800 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-gray-200 mb-6">
            Explore our projects and see how we are transforming the future with
            solar energy.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
            Get Involved
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
