import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 mx-auto h-screen flex flex-col sm:flex-row items-center sm:justify-between px-6 md:px-24 lg:px-32">
      {/* Text Section */}
      <div className="relative w-full sm:w-96 text-center sm:text-left">
        <h3 className="text-black font-semibold text-2xl sm:text-4xl md:text-6xl leading-tight sm:leading-snug md:leading-loose">
          Rocket Single Seater
        </h3>
        
        <button 
          className="mt-4 text-black font-medium transition-transform duration-300 hover:scale-105 text-base sm:text-xl px-4 py-2"
          aria-label="Shop Now"
        >
          Shop Now
        </button>
        
        <hr className="mt-2 w-16 sm:w-32 border-2 border-black" />
      </div>

      {/* Image Section */}
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
        <Image
          src="/hero/Rocket_single_seater.png"
          alt="Rocket Single Seater"
          width={853}
          height={900}
          priority
          className="w-full sm:w-96 md:w-full lg:w-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;