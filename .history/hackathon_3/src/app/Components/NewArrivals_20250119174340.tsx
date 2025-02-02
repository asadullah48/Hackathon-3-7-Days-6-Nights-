import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative flex flex-wrap justify-end items-center w-full min-h-screen bg-[#FFF9E5]">
      {/* Left Image */}
      <div className="absolute -top-20 sm:top-0 left-0 sm:-left-20 md:-left-40 lg:-left-52 w-full h-full md:h-screen flex justify-center items-center">
        <Image
          src={"/topPics/Asgaard sofa.png"}
          alt="Asgaard sofa"
          width={750}
          height={750}
          layout="intrinsic"
          objectFit="contain"
          className="w-full sm:w-auto"
        />
      </div>

      {/* Right Section */}
      <div className="relative px-8 md:px-16 lg:px-20 mt-52 sm:mt-16 md:mt-20 flex flex-col justify-center items-center z-10">
        <h3 className="text-[24px] sm:text-[32px] md:text-[36px] font-medium font-[poppins]">
          New Arrivals
        </h3>
        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold font-[poppins] mb-4">
          Asgaard Sofa
        </h1>
        <button className="border-[1.5px] border-black px-6 py-2 sm:px-8 sm:py-3 text-[16px] sm:text-[18px] font-normal font-[poppins] text-center">
          <Link href="/">Order Now</Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
