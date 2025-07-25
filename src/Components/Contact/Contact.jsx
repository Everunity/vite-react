import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
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
