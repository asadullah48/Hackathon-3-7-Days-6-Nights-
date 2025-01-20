import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";

const Blog = () => {
  interface BlogList {
    name: string;
    url: string;
    logo: string;
    logo2: string;
    time: string;
    date: string;
    img: string;
  }
  const blog: BlogList[] = [
    {
      name: "Going all-in with millennial design",
      url: "Read More",
      logo: "<IoMdTime />",
      logo2: "<LuCalendar />",
      time: "5 min",
      date: "12 Oct 2022",
      img: "/blogs/Rectangle 13.png",
    },
    {
      name: "Going all-in with millennial design",
      url: "Read More",
      logo: "<IoMdTime />",
      logo2: "<LuCalendar />",
      time: "5 min",
      date: "12 Oct 2022",
      img: "/blogs/Rectangle 14.png",
    },
    {
      name: "Going all-in with millennial design",
      url: "Read More",
      logo: "<IoMdTime />",
      logo2: "<LuCalendar />",
      time: "5 min",
      date: "12 Oct 2022",
      img: "/blogs/Rectangle 15.png",
    },
  ];
  return (
    <section className="px-4 py-8 w-full min-h-screen bg-white select-none">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium font-[poppins]">
          Our Blogs
        </h1>
        <h5 className="text-[14px] sm:text-[16px] font-medium text-gray-500 font-[poppins]">
          Find a bright idea to suit your taste with our great selection
        </h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
        {blog.map((list, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-md transition-transform ease-in-out hover:scale-105 duration-500 rounded-md overflow-hidden flex flex-col"
          >
            <Image
              src={list.img}
              alt={list.name}
              width={400}
              height={300}
              
              className="w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-[16px] font-light font-[poppins] text-gray-700">
                {list.name}
              </h3>
              <Link
                href={list.url}
                className="text-[18px] text-center font-medium text-black font-[poppins] border-b-2  border-black hover:text-gray-500 hover:border-gray-500 transition duration-300"
              >
                Read More
              </Link>

              <div className="flex justify-between items-center text-gray-500 text-[14px]">
                <span className="flex items-center gap-1">
                  <IoMdTime />
                  {list.time}
                </span>
                <span className="flex items-center gap-1">
                  <LuCalendar />
                  {list.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <Link
          href="/"
          className="text-[20px] font-medium font-[poppins] text-center text-black border-b-2 border-black hover:text-gray-500 hover:border-gray-500 transition duration-300"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Blog;
