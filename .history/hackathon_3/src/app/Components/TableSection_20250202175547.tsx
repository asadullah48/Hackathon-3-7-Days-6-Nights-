import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSection = () => {
  return (
    <section className="flex flex-col md:flex-row bg-[#F4F4F4] justify-around mx-auto p-8 sm:p-12 lg:p-16">
      {/* Side Table Card */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 mb-8 lg:mb-0">
        <figure className="w-full max-w-[450px] h-auto">
          <Image
            src="/sideTable/side table.png"
            alt="Side Table"
            width={500}
            height={500}
            className="w-full h-auto"
            priority // Optimize for above-the-fold images
          />
        </figure>
        <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl font-poppins text-center lg:text-left mt-4">
          Side Table
        </h3>
        <Link href="/" passHref>
          <button className="mt-2 text-lg sm:text-xl lg:text-2xl font-medium font-poppins border-b-2 border-black py-1 hover:border-transparent transition-all duration-300">
            View More
          </button>
        </Link>
      </div>

      {/* Cloud Sofa Card */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
        <figure className="w-full max-w-[450px] h-auto">
          <Image
            src="/sideTable/Cloud sofa.png"
            alt="Cloud Sofa"
            width={500}
            height={500}
            className="w-full h-auto"
            priority // Optimize for above-the-fold images
          />
        </figure>
        <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl font-poppins text-center lg:text-left mt-4">
          Cloud Sofa
        </h3>
        <Link href="/" passHref>
          <button className="mt-2 text-lg sm:text-xl lg:text-2xl font-medium font-poppins border-b-2 border-black py-1 hover:border-transparent transition-all duration-300">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TableSection;