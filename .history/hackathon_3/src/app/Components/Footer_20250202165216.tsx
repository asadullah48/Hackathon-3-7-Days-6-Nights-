import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-28 py-11 w-full font-[poppins] select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
        {/* Address Section */}
        <address className="text-gray-400 text-sm font-light mt-8 sm:mt-24 mr-0 sm:mr-8">
          400 University Drive Suite 200 Coral <br />
          spaGables, <br />
          FL 33134 USA
        </address>

        {/* Links Section */}
        <nav className="font-medium">
          <ul className="space-y-4 sm:space-y-9">
            <li className="text-gray-400">Link</li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                About
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Help Section */}
        <nav className="font-medium">
          <ul className="space-y-4 sm:space-y-9">
            <li className="text-gray-400">Help</li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Returns
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </nav>

        {/* Newsletter Section */}
        <div className="font-medium">
          <span className="text-gray-400">Newsletter</span>
          <form
            aria-label="Newsletter subscription form"
            className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4"
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              aria-label="Email address"
              className="w-full md:w-auto border-b-[1.5px] border-black focus:outline-none pb-4"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="px-4 py-2 text-black hover:text-gray-500 border-b-[1.5px] border-black"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b-[1.5px] border-gray-300 mt-5"></div>

      {/* Footer Bottom Text */}
      <p className="text-sm text-gray-800 mt-4">
        2022 Meuble House. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;