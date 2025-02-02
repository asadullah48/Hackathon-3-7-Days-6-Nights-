import React from "react"
const FollowUs = () => {
  return (
    <div className="flex justify-center bg-[url('/topPics/Rectangle.png')] bg-cover w-full h-96 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Main Heading */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold font-[poppins] text-black">
          Our Instagram
        </h1>

        {/* Subheading */}
        <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[poppins] font-normal text-gray-500 mt-2">
          Follow our store on Instagram
        </h5>

        {/* Button */}
        <button className="text-[14px] sm:text-[16px] md:text-[20px] font-[poppins] font-normal border border-[#FAF4F4] bg-[#FAF4F4] text-black rounded-full shadow-2xl shadow-gray-500 px-8 sm:px-10 md:px-12 py-2 sm:py-3 mt-4 hover:bg-gray-100 transition duration-300">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
