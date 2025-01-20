import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between bg-[#FAF4F4] px-8 md:px-16 lg:px-24 py-4 w-full md:h-[520px]">
      <div className="flex flex-col items-center lg:items-start mt-4">
        <Image
          src="/sideTable/side table.png"
          alt="side table"
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[24px] lg:text-[36px] font-[poppins] text-center lg:text-left mt-4 lg:mt-0">
          Side Table
        </h3>
        <button className="mt-2">
          <Link
            href="/"
            className="text-[18px] lg:text-[24px] font-medium font-[poppins] border-b-2 border-black py-1"
          >
            View More
          </Link>
        </button>
      </div>

      <div className="flex flex-col items-center lg:items-start mt-4">
        <Image
          src="/sideTable/Cloud sofa.png"
          alt="cloud sofa"
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[24px] lg:text-[36px] font-[poppins] text-center lg:text-left mt-4 lg:mt-0">
          Cloud Sofa
        </h3>
        <button className="mt-2">
          <Link
            href="/"
            className="text-[18px] lg:text-[24px] font-medium font-[poppins] border-b-2 border-black py-1"
          >
            View More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TableSection;
