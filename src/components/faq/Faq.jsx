import React from "react";
import './style.css';
const Faq = () => {
  return (
    <div className="overflow-hidden bg-teal-800 py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeatable list */}
        {Array(2) // For seamless scrolling
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="flex space-x-8">
              <span className="text-white text-lg font-bold">SALADS</span>
              <span className="text-white text-lg font-bold">BREAD</span>
              <span className="text-white text-lg font-bold">PASTRIES</span>
              <span className="text-white text-lg font-bold">SANDWICHES</span>
              <span className="text-white text-lg font-bold">SUSHI</span>
              <span className="text-white text-lg font-bold">SMOOTHIES</span>
              <span className="text-white text-lg font-bold">PIZZA</span>
              <span className="text-white text-lg font-bold">MUFFINS</span>
              <span className="text-white text-lg font-bold">BURGERS</span>
            </div>
          ))}
      </div>
      <div className="bg-teal-800 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 px-6">
        {/* Left: Boxes */}
        <div className="flex space-x-4">
          <div className=""><img src="https://cdn.sanity.io/images/nqimd3nr/production/a5a791be5cd34e181a7b9f31222fb9ea7f6480ad-1458x1458.png?w=500&h=500&fit=max&auto=format" alt="" /></div>
        
        </div>

        {/* Right: Text Content */}
        <div className="text-white text-start space-y-4">
          <h2 className="text-yellow-300 text-lg font-bold">INTRODUCING</h2>
          <h1 className="text-4xl font-extrabold">TOO GOOD TO GO PARCELS</h1>
          <p className="text-sm">
            Through the Too Good To Go app, you can now also order Parcels of
            surplus food, directly from manufacturers or wholesalers, delivered
            directly to your home.
          </p>
          <button className="mt-4 px-6 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-teal-800">
            FIND OUT MORE →
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
