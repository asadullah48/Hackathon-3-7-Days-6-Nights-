import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopPicks = () => {
  interface TopPick2 {
    name: string;
    image: string;
    price: number;
    text: string;
  }
  const topPicks: TopPick2[] = [
    {
      name: "Trenton modular sofa_3",
      image: "/topPics/Trenton modular sofa.png",
      price: 25000.0,
      text: "mt-8 mb-4 text-start",
    },
    {
      name: "Granite dining table with dining chair",
      image: "/topPics/Granite dining table.png",
      price: 25000.0,
      text: "mt-20",
    },
    {
      name: "Outdoor bar table and stool",
      image: "/topPics/Outdoor bar table.png",
      price: 25000.0,
      text: "mt-7",
    },
    {
      name: "Plain console with teak mirror",
      image: "/topPics/Plain console.png",
      price: 25000.0,
      text: "mt-20",
    },
  ];
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 select-none">
      <h1 className="font-medium text-[24px] sm:text-[36px] font-[poppins] text-center">
        Top Picks For You
      </h1>
      <p className="text-center text-gray-400 text-[14px] sm:text-[16px] font-medium font-[poppins] mt-2">
        Find a bright idea to suit your taste with our great selection of
        suspension, floor, and table flight
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {topPicks.map((Picks, index) => (
          <div
            key={index}
            className="flex flex-col items-start cursor-pointer bg-white p-4 sm:p-6 w-[200px] sm:w-[250px] h-[300px] sm:h-[350px]"
          >
            <Image
              src={Picks.image}
              alt={Picks.name}
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="mb-4"
            />

            <div
              className={`text-black text-[14px] sm:text-[16px] font-normal font-[poppins] ${Picks.text}`}
            >
              {Picks.name}
            </div>
            <div
              className={`text-black font-medium text-[16px] sm:text-[18px] text-right font-[poppins] -mt-1`}
            >
              ${Picks.price}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-14">
        <button>
          <Link
            href="/"
            className="font-medium font-[poppins] text-[18px] sm:text-[20px] border-b-2 border-black pb-2 sm:pb-4 mt-8 sm:mt-14"
          >
            View More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TopPicks;
