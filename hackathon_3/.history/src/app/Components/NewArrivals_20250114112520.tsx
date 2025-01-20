import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative flex flex-wrap justify-end items-center w-full h-screen bg-[#FFF9E5]">
      {/* Left Image */}
      <div className="absolute -top-40 left-0 md:top-0 md:-left-52 w-full  h-full md:h-screen flex justify-center items-center mr-72">
        <Image
          src={"/topPics/Asgaard sofa.png"}
          alt="Asgaard sofa"
          width={750}
          height={750}
          className=""
        />
      </div>

      {/* Right Section */}
      <div className="asgaard px-12 md:px-16 lg:px-12 mt-52 md:mt-16 flex flex-col justify-center items-center">
        <h3 className="text-[24px] font-medium font-[poppins]">New Arrivals</h3>
        <h1 className="text-[48px] font-bold font-[poppins] mb-4">
          Asgaard Sofa
        </h1>
        <button className="border-[1.5px] border-black px-8 py-2 text-[16px] font-normal font-[poppins] text-center">
          <Link href={"/"}>Order Now</Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
