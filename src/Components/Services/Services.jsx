import React from "react";
import Helmet from "react-helmet";
const Services = () => {
  return (
    <>
      <Helmet>
        <title>Solar Panel Services in Nagpur | Everunity Experts</title>
        <meta
          name="description"
          content="We offer installation, maintenance, cleaning, and solar consulting in Nagpur. Everunity Services is your one-stop solar solution provider."
        />
        <link rel="canonical" href="https://everunityservices.com/services" />

        {/* OG and Twitter tags same as above with updated values */}
        <meta
          property="og:title"
          content="Solar Panel Services in Nagpur | Everunity Experts"
        />
        <meta
          property="og:description"
          content="We offer installation, maintenance, cleaning, and solar consulting in Nagpur. Everunity Services is your one-stop solar solution provider."
        />
        <meta
          property="og:url"
          content="https://everunityservices.com/services"
        />
        <meta
          name="twitter:title"
          content="Solar Panel Services in Nagpur | Everunity Experts"
        />
        <meta
          name="twitter:description"
          content="We offer installation, maintenance, cleaning, and solar consulting in Nagpur. Everunity Services is your one-stop solar solution provider."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Solar Panel Services in Nagpur | Everunity Experts",
        "description": "We offer installation, maintenance, cleaning, and solar consulting in Nagpur. Everunity Services is your one-stop solar solution provider.",
        "provider": {
          "@type": "Organization",
          "name": "Everunity Services"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Nagpur"
        },
        "url": "https://everunityservices.com/services"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-sm md:text-base">
            <span className="text-white">Home</span>{" "}
            <span className="mx-1">&gt;</span>{" "}
            <span className="text-orange-400">Company</span>{" "}
            <span className="mx-1">&gt;</span> Services
          </p>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-6 flex justify-center w-full z-10">
          <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xl">&#8595;</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
