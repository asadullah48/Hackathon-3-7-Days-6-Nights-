import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative flex flex-wrap justify-end items-center w-full min-h-screen bg-[#FFF9E5] overflow-hidden">
      {/* Left Image */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center sm:justify-start sm:items-start sm:left-[-10%] md:left-[-20%] lg:left-[-25%]">
        <Image
          src="/topPics/Asgaard sofa.png"
          alt="Asgaard sofa"
          width={750}
          height={750}
          className="w-full sm:w-[120%] md:w-[110%] lg:w-[100%] h-auto object-contain"
          priority // Optimize for above-the-fold images
        />
      </div>

      {/* Right Section */}
      <div className="relative px-8 md:px-16 lg:px-20 mt-52 sm:mt-32 md:mt-40 lg:mt-48 flex flex-col justify-center items-center z-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium font-poppins text-center sm:text-left">
          New Arrivals
        </h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-4 sm:mb-6 text-center sm:text-left">
          Asgaard Sofa
        </h1>
        <Link href="/" passHref>
          <button className="border-[1.5px] border-black px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-normal font-poppins text-center hover:bg-black hover:text-white transition-colors duration-300">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;