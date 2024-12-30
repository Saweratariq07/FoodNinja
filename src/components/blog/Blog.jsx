import React, { useState } from "react";

const Blog = () => {
  const slides = [
    { id: 1, text: "Discover Surprise Bags available at stores and restaurants near you.", image: "https://cdn.sanity.io/images/nqimd3nr/production/c7ec40262c24f196fd78c45a60dba4e5f7df7cb7-1883x1882.png?w=828&fit=max&auto=format" },
    { id: 2, text: "CConfirm your choice, reserve your food, and pay through the app.", image: "https://cdn.sanity.io/images/nqimd3nr/production/b95b2afe141fe122a10afb2d3b5d87e431bb9d06-1883x1882.png?w=828&fit=max&auto=format" },
    { id: 3, text: "Head to the shop at the specified pickup time, swipe the app, and enjoy your food.", image: "https://cdn.sanity.io/images/nqimd3nr/production/b10b88e660dbfba3d5641638a2b69550e694f44d-1883x1882.png?w=828&fit=max&auto=format" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-teal-700 text-white p-8">
      {/* Left Section */}
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-2xl font-bold">HOW TO USE THE APP</h2>
        <h3 className="text-4xl font-extrabold">STEP {slides[currentSlide].id}</h3>
        <p>{slides[currentSlide].text}</p>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="bg-white text-teal-700 p-2 rounded-full"
            onClick={handlePrev}
          >
            ←
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"
                  }`}
              ></span>
            ))}
          </div>
          <button
            className="bg-white text-teal-700 p-2 rounded-full"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 flex items-center justify-center">
        <div className="w-full h-  p-4">
          <img
            src={slides[currentSlide].image}
            alt="Mobile Mockup"
            className="w-full h-full  rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
