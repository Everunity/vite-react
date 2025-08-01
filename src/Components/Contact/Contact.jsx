import React from "react";
import ContactForm from "./ContactForm";
import Helmet from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Everunity Services | Solar Panel Help in Nagpur</title>
        <meta
          name="description"
          content="Get in touch with Everunity Services for solar panel installation, maintenance, and support across Nagpur. Call or message us today!"
        />
        <link rel="canonical" href="https://everunityservices.com/contact" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Contact Everunity Services | Solar Panel Help in Nagpur"
        />
        <meta
          property="og:description"
          content="Get in touch with Everunity Services for solar panel installation, maintenance, and support across Nagpur. Call or message us today!"
        />
        <meta
          property="og:url"
          content="https://everunityservices.com/contact"
        />
        <meta property="og:site_name" content="EverUnityServices" />
        <meta
          property="og:image"
          content="https://everunityservices.com/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="629" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nmcgovnr" />
        <meta
          name="twitter:title"
          content="Contact Everunity Services | Solar Panel Help in Nagpur"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Everunity Services for solar panel installation, maintenance, and support across Nagpur. Call or message us today!"
        />
        <meta
          name="twitter:image"
          content="https://everunityservices.com/images/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "headline": "Contact Everunity Services | Solar Panel Help in Nagpur",
        "description": "Get in touch with Everunity Services for solar panel installation, maintenance, and support across Nagpur. Call or message us today!",
        "mainEntityOfPage": "https://everunityservices.com/contact",
        "url": "https://everunityservices.com/contact",
        "publisher": {
          "@type": "Organization",
          "name": "Everunity Services",
          "logo": {
            "@type": "ImageObject",
            "url": "https://everunityservices.com/images/logo.png",
            "width": 1854,
            "height": 503
          }
        }
      }
    `}
        </script>
      </Helmet>

      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2025%2F02%2F25172214%2Fsolar-panels_titanium_1000x-more-powerful_1m-1400x850.jpg&w=1200&q=75')", // Replace with actual path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-sm md:text-base">
            <span className="text-white">Home</span>{" "}
            <span className="mx-1">&gt;</span>{" "}
            <span className="text-orange-400">Company</span>{" "}
            <span className="mx-1">&gt;</span> Contact Us
          </p>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-6 flex justify-center w-full z-10">
          <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xl">&#8595;</span>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
