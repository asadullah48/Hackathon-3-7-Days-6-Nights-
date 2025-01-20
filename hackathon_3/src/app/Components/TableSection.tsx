import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSection = () => {
  return (
    <section className="flex flex-col md:flex-row bg-[#F4F4F4] justify-around mx-auto p-10">
      <div className="flex flex-col items-center lg:items-start mt-4 w-full lg:w-1/2">
        <Image
          src="/sideTable/side table.png"
          alt="side table"
          width={500}
          height={500}
          
          className="w-full h-auto lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[4vw] lg:text-[2vw] font-[poppins] text-center lg:text-left mt-4">
          Side Table
        </h3>
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
