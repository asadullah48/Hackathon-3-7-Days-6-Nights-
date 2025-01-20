import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSection = () => {
  return (
    <section className="bg-[#FAF4F4] py-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative max-w-full w-[90%] md:w-[605px] h-auto max-h-[562px]">
        <Image
          src="/sideTable/side table.png"
          alt="side table"
          width={605}
          height={562}
          
          className="object-contain max-w-full max-h-full"
        />
        <h2 className="text-3xl md:text-4xl font-bold mt-6 text-center">
          Side Table
        </h2>
        <button className="mt-2">
          <Link href="/" className="text-[3vw] lg:text-[1.5vw] font-medium font-[poppins] border-b-2 border-black py-1">
            View More
          </Link>
        </button>
      </div>

      <div className="flex flex-col items-center lg:items-start mt-4 w-full lg:w-1/2">
        <Image
          src="/sideTable/Cloud sofa.png"
          alt="cloud sofa"
          width={500}
          height={500}
         
          className="w-full h-auto lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[4vw] lg:text-[2vw] font-[poppins] text-center lg:text-left mt-4">
          Cloud Sofa
        </h3>
        <button className="mt-2">
          <Link href="/" className="text-[3vw] lg:text-[1.5vw] font-medium font-[poppins] border-b-2 border-black py-1">
            View More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TableSection;
