import React from 'react';

const AboutHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://chariotenergy.com/wp-content/uploads/2021/01/diy-solar-panels.jpg)", // Replace with actual path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-sm md:text-base">
          <span className="text-white">Home</span> <span className="mx-1">&gt;</span>{' '}
          <span className="text-orange-400">Company</span> <span className="mx-1">&gt;</span> About Us
        </p>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 flex justify-center w-full z-10">
        <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xl">&#8595;</span>
        </div>
      </div>
    </div>
  );
};



export default AboutHero
