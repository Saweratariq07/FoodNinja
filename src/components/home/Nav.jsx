import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-[#007977] py-6 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section */}
        <div className="flex space-x-8 items-center">
          <div className="hidden md:flex space-x-8">
            {/* Business Solutions */}
            <div className="group relative">
              <button className="flex items-center space-x-2 hover:underline">
                <span className="font-extrabold">Business Solutions</span>
                <span className="transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="hidden group-hover:block absolute bg-white text-black rounded-md mt-2 shadow-lg w-56">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">surplus-food-marketplace</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
              </div>
            </div>

            {/* About Us */}
            <div className="group relative">
              <button className="flex items-center space-x-2 hover:underline">
                <span className="font-extrabold">About Us</span>
                <span className="transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="hidden group-hover:block absolute bg-white text-black rounded-md mt-2 shadow-lg w-56">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Who We Are</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Our Mission</a>
              </div>
            </div>

            {/* About Food Waste */}
            <div className="group relative">
              <button className="flex items-center space-x-2 hover:underline">
                <span className="font-extrabold hover:text-green-600">
                  About Food Waste
                </span>
                <span className="transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="hidden group-hover:block absolute bg-white text-black rounded-md mt-2 shadow-lg w-56">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Impact</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">How You Can Help</a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="relative">
          <img src="logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Right Section */}
        <div className="hidden  relative md:flex items-center space-x-4">
          <a
            href="#"
            className="group border border-white px-4 py-2 rounded-lg hover:text-white transition flex items-center justify-between"
          >
            <span>Download the App</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
          <a
            href="#"
            className="group border border-white px-4 py-2 rounded-lg hover:text-white transition flex items-center justify-between"
          >
            <span>Business Sign-up</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
          <div className="group relative">
            <button>
              <img
                src="glo.svg"
                alt="Language Selector"
                className="w-6 h-6"
              />
            </button>
            <div className="hidden group-hover:block absolute right-0 bg-white text-black rounded-md mt-2 shadow-lg w-32">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                English
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                French
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Spanish
              </a>
            </div>
          </div>
          <a href="#" className="hover:underline">
            MyStore Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-white text-black z-50">
    <div className="flex flex-col space-y-4 px-6 py-4">
      <a href="#" className="hover:underline">
        Business Solutions
      </a>
      <a href="#" className="hover:underline">
        About Us
      </a>
      <a href="#" className="hover:underline">
        About Food Waste
      </a>
      <a href="#" className="hover:underline">
        Download the App
      </a>
      <a href="#" className="hover:underline">
        Business Sign-up
      </a>
      <a href="#" className="hover:underline">
        MyStore Login
      </a>
    </div>
  </div>
)}

      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#" className="hover:underline">
              Business Solutions
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              About Food Waste
            </a>
            <a href="#" className="hover:underline">
              Download the App
            </a>
            <a href="#" className="hover:underline">
              Business Sign-up
            </a>
            <a href="#" className="hover:underline">
              MyStore Login
            </a>
          </div>
        </div>
      )} */}
      
    </div>
  );
};

export default Navbar;
