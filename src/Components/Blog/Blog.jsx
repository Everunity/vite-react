import React from "react";
import BlogSection from "./BlogSection";
import Helmet from "react-helmet";
const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Solar Blog & Tips | Everunity Services Nagpur</title>
        <meta
          name="description"
          content="Read expert articles, solar energy tips, industry news, and maintenance advice from Everunity Services—Nagpur’s solar specialists."
        />
        <link rel="canonical" href="https://everunityservices.com/blog" />

        {/* OG and Twitter */}
        <meta
          property="og:title"
          content="Solar Blog & Tips | Everunity Services Nagpur"
        />
        <meta
          property="og:description"
          content="Read expert articles, solar energy tips, industry news, and maintenance advice from Everunity Services—Nagpur’s solar specialists."
        />
        <meta property="og:url" content="https://everunityservices.com/blog" />
        <meta
          name="twitter:title"
          content="Solar Blog & Tips | Everunity Services Nagpur"
        />
        <meta
          name="twitter:description"
          content="Read expert articles, solar energy tips, industry news, and maintenance advice from Everunity Services—Nagpur’s solar specialists."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Solar Blog & Tips | Everunity Services Nagpur",
        "description": "Read expert articles, solar energy tips, industry news, and maintenance advice from Everunity Services—Nagpur’s solar specialists.",
        "url": "https://everunityservices.com/blog"
      }
    `}
        </script>
      </Helmet>

      <div
        className="relative bg-cover bg-center h-[60vh] md:h-[70vh] flex items-center justify-center text-white px-4 sm:px-20 md:px-20 lg:px-32 xl:px-48"
        style={{
          backgroundImage:
            "url('https://chariotenergy.com/wp-content/uploads/2021/01/diy-solar-panels.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Our Blog
          </h2>
          <p className="text-sm sm:text-base">
            <span className="text-white">Home</span>{" "}
            <span className="mx-1">&gt;</span>{" "}
            <span className="text-orange-400">Company</span>{" "}
            <span className="mx-1">&gt;</span> Blog
          </p>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-4 md:bottom-6 flex justify-center w-full">
          <div className="bg-green-600 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-lg md:text-xl">&#8595;</span>
          </div>
        </div>
      </div>
      <BlogSection />
    </>
  );
};

export default Blog;
