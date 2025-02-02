"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TbUserExclamation } from "react-icons/tb";
import { TiThMenu, TiTimes } from "react-icons/ti";

const Header = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex justify-center items-center px-4 sm:px-6 md:px-16 select-none"
      style={{ backgroundColor: isHomepage ? "#FBEBB5" : "white" }}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-2xl md:hidden"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <TiTimes /> : <TiThMenu />}
      </button>

      {/* Navigation */}
      <nav
        aria-label="Main Navigation"
        className={`absolute top-[100px] left-0 w-full bg-white shadow-lg md:static md:bg-transparent md:shadow-none md:flex md:flex-1 md:justify-center transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center text-[16px] font-[poppins] ml-4 sm:ml-8 md:ml-28 font-medium md:gap-[20px] lg:gap-[40px]">
          <li className="relative group">
            <Link
              href={"/"}
              className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              aria-label="Home"
            >
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href={"/"}
              className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              aria-label="Shop"
            >
              Shop
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href={"/"}
              className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              aria-label="About"
            >
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href={"/"}
              className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              aria-label="Contact"
            >
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="relative flex items-center justify-end text-[25px] gap-6 sm:gap-11 md:gap-5 md:ml-16 font-[poppins]">
        <Link
          href={"/"}
          className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          aria-label="User"
        >
          <TbUserExclamation />
        </Link>
        <Link
          href={"/"}
          className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          aria-label="Wishlist"
        >
          <FaRegHeart />
        </Link>
        <Link
          href={"/"}
          className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          aria-label="Search"
        >
          <FiSearch />
        </Link>
        <Link
          href={"/"}
          className="hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          aria-label="Cart"
        >
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;