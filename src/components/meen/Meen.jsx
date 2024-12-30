import React from 'react';
import Nav from '../home/Nav';

function Meen() {
  return (
    <div className="relative bg-[#007773] w-full h-screen overflow-hidden">
      {/* Use iframe to embed the Vimeo video */}
      <iframe
        src="https://player.vimeo.com/video/912614521?title=false&autoplay=true&byl%E2%80%A6e&muted=true&keyboard=true&background=true&h=639e7b3d76&loop=true&sd=true"
        className="absolute top-0 left-0 w-[100%] h-[150%] z-0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {/* Your navigation stays on top of the video */}
      <Nav className="relative  z-20" />
      
<div className='relative'>
<h1 className="font-extrabold text-white text-5xl pt-44" style={{ fontFamily: "Korolev, Verdana, Arial, sans-serif" }}>
  Save good food from going to waste
</h1>
<div className="hidden md:flex justify-center pt-4 items-center space-x-6">
  <a
    href="#"
    className="group border border-white px-4 py-2 rounded-lg text-white hover:text-white transition flex items-center justify-between"
  >
    <span>Download the App</span>
    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
  </a>
  <a
    href="#"
    className="group border border-white text-white px-4 py-2 rounded-lg hover:text-white transition flex items-center justify-between"
  >
    <span>Business Sign-up</span>
    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
  </a>
</div>


</div>
<div className="container-fluid  bg-white">
  <h1 className='mx-auto text-2xl font-normal'>Too Good To Go is een sociale-impact onderneming, met een missie om iedereen te inspireren en te motiveren om voedselverspilling te bestrijden.</h1>
</div>

    </div>
  );
}

export default Meen;
