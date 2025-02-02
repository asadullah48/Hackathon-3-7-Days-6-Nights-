"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TbUserExclamation } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className="flex justify-between items-center px-4 sm:px-6 md:px-16 select-none"
      style={{ backgroundColor: isHomepage ? "#FBEBB5" : "white" }}
    >
      {/* Navigation Menu */}
      <nav
        id="main-menu"
        aria-label="Primary Navigation"
        className={`absolute top-[100px] left-0 w-full bg-white shadow-lg md:static md:bg-transparent md:shadow-none md:flex md:flex-1 md:justify-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center text-[16px] font-[poppins] ml-4 sm:ml-8 md:ml-28 font-medium md:gap-5 lg:gap-10">
          {navLinks.map(({ name, href }) => (
            <li key={name} className="relative group">
              <Link href={href} className="hover:text-slate-600">
                {name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons & Menu Button */}
      <div className="flex items-center text-[25px] gap-6 sm:gap-11 md:gap-5 md:ml-16 font-[poppins]">
        <Link href="/profile" className="hover:text-slate-600">
          <TbUserExclamation />
        </Link>
        <Link href="/wishlist" className="hover:text-slate-600">
          <FaRegHeart />
        </Link>
        <Link href="/search" className="hover:text-slate-600">
          <FiSearch />
        </Link>
        <Link href="/cart" className="hover:text-slate-600">
          <AiOutlineShoppingCart />
        </Link>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
          
          aria-controls="main-menu"
        >
          <TiThMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
