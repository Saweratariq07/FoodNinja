import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { CiPizza } from "react-icons/ci";
import Faq from "../faq/Faq";
import Blog from "../blog/Blog";
function Sects() {
  return (
    <div>
    <div className="py-8 mx-4 md:mx-14 text-center justify-center container pt-24">
      {/* Heading Section */}
      <h1 className="font-semibold text-2xl md:text-4xl text-[#007977] text-center md:text-left">
        Too Good To Go is a social impact company on a mission to inspire and empower everyone to fight food waste together.
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600 text-center md:text-left w-full md:w-1/2 mx-auto md:mx-0">
        Our app is the world's largest marketplace for surplus food. We help users rescue good food from going to waste, offering great value for money at local stores, cafes, and restaurants.
      </p>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row justify-center gap-14 md:justify- items-center mt-6">
  <div className="w-auto flex justify-center">
    <img src="1.png" alt="Surplus Food" className="w-32 h-auto md:w-48 rounded-lg" />
  </div>
  <div className="w-auto flex justify-center">
    <img src="2.png" alt="Local Stores" className="w-32 h-auto md:w-48 rounded-lg" />
  </div>
</div>
<div className="bg-[#fef7f2] text-center py-12">
  {/* Heading Section */}
  <h2 className="text-[#007977] font-bold text-xl md:text-2xl uppercase tracking-wider">
    Why Use
  </h2>
  <h1 className="text-[#ff5a5f] font-extrabold text-4xl md:text-5xl mt-2">
    Too Good To Go
  </h1>

  {/* Image Section */}
  

  {/* Bottom Features Section */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
    {/* Left Feature */}
    <div className="flex flex-col col-md-3 items-center">
    <IoBagHandle className="text-[#007977] h-12 w-24"/>
      <p className="mt-2 font-bold text-[#007977] text-lg">
        ENJOY GOOD FOOD AT ½ PRICE OR LESS
      </p>
   
    <div className=" items-center">
    <IoBagHandle className="text-[#007977] h-12 w-24"/>
      <p className="mt-2 font-bold text-[#007977] text-lg">
        ENJOY GOOD FOOD AT ½ PRICE OR LESS
      </p>
    </div>
    </div>

    {/* Middle Bag Image */}
    <div className="flex justify-center col-md-6 mt-8">
    <img src="4.png" alt="Too Good To Go" className="w-60 md:w-96" />
  </div>

    {/* Right Feature */}
    <div className="flex flex-col col-md-3 items-center">
    <CiPizza className="text-[#007977] w-12 h-12"/>
      <p className="mt-2 font-bold text-[#007977] text-lg">
        RESCUE FOOD NEAR YOU
      </p>
      <div className=" items-center">
    <CiPizza className="text-[#007977] w-12 h-12"/>
      <p className="mt-2 font-bold text-[#007977] text-lg">
        RESCUE FOOD NEAR YOU
      </p>
    </div>
    </div>
  </div>
</div>

    </div>
    <Faq/>
<Blog/>
<Faq/>

    </div>
  );
}

export default Sects;
