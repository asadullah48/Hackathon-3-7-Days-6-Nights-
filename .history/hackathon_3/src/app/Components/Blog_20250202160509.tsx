import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";

interface BlogList {
  name: string;
  url: string;
  time: string;
  date: string;
  img: string;
}

const blog: BlogList[] = [
  {
    name: "Going all-in with millennial design",
    url: "Read More",
    time: "5 min",
    date: "12 Oct 2022",
    img: "/blogs/Rectangle 13.png",
  },
  {
    name: "Going all-in with millennial design",
    url: "Read More",
    time: "5 min",
    date: "12 Oct 2022",
    img: "/blogs/Rectangle 14.png",
  },
  {
    name: "Going all-in with millennial design",
    url: "Read More",
    time: "5 min",
    date: "12 Oct 2022",
    img: "/blogs/Rectangle 15.png",
  },
];

const BlogCard = ({ name, url, time, date, img }: BlogList) => {
  return (
    <article className="bg-white hover:shadow-md transition-transform ease-in-out hover:scale-105 duration-500 rounded-md overflow-hidden flex flex-col">
      <Image
        src={img}
        alt={name}
        width={400}
        height={300}
        className="w-full object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-base font-light font-poppins text-gray-700">
          {name}
        </h3>
        <Link
          href={url}
          aria-label={`Read more about ${name}`}
          className="text-lg text-center font-medium text-black font-poppins border-b-2 border-black hover:text-gray-500 hover:border-gray-500 transition duration-300"
        >
          Read More
        </Link>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <IoMdTime />
            {time}
          </span>
          <span className="flex items-center gap-1">
            <LuCalendar />
            {date}
          </span>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section className="px-4 py-8 w-full min-h-screen bg-white select-none">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium font-poppins">
          Our Blogs
        </h1>
        <h5 className="text-sm sm:text-base font-medium text-gray-500 font-poppins">
          Find a bright idea to suit your taste with our great selection
        </h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
        {blog.map((list, index) => (
          <BlogCard key={index} {...list} />
        ))}
      </div>

      <div className="flex flex-col items-center mt-8">
        <Link
          href="/"
          className="text-lg font-medium font-poppins text-center text-black border-b-2 border-black hover:text-gray-500 hover:border-gray-500 transition duration-300"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Blog;