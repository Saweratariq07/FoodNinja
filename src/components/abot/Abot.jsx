import React from "react";
import { motion } from "framer-motion";
import Nav from "../home/Nav";

const Abot = () => {
  return (

          <div className="relative  w-full h-auto overflow-hidden">
  <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover"
      src="vi.mp4"
  />
  {/* Color Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
         <Nav/>
    <div className="pt-44 py-16 px-4">
     
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl font-extrabold text-purple-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Neuronicks Limited is a medical services company registered in Ireland, dedicated to advancing healthcare through innovative technologies. With a strong foundation in research and a commitment to excellence, we deliver transformative solutions that empower healthcare providers and improve patient care.
        </motion.p>
      </div>

      {/* Mission and Vision */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
      <motion.div
  className="relative text-center p-8 rounded-lg shadow-lg"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Background Layer */}
  <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-lg"></div>

  {/* Text Content */}
  <div className="relative">
    <h2 className="text-3xl font-bold text-purple-400  mb-4">Our Mission</h2>
    <p className="text-lg text-white">
      To lead the way in medical innovation by developing and delivering cutting-edge tools that enhance diagnostic accuracy, streamline clinical workflows, and improve health outcomes globally.
    </p>
  </div>
</motion.div>


<motion.div
  className="relative text-center p-8 rounded-lg shadow-lg"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Background Layer */}
  <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-lg"></div>

  {/* Text Content */}
  <div className="relative">
    <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Vision</h2>
    <p className="text-lg text-white">
      To be a global leader in healthcare technology, recognized for our dedication to innovation, quality, and the betterment of lives.
    </p>
  </div>
</motion.div>

      </div>

      {/* Meet the Team Section */}
      <div className="container mx-auto mt-20 text-center">
  {/* Meet the Team Section */}
  <motion.h2
    className="text-4xl font-bold text-purple-400  mb-8"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Meet the Team
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Team Member 1 */}
    <motion.div
      className="relative p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-lg"></div>
      <div className="relative">
        <h3 className="text-xl font-bold text-purple-400 mb-2">Team Member Name 1</h3>
        <p className="text-white font-bold">Role</p>
        <p className="text-white mt-2">
          Brief description of expertise and contribution. Expertise in [Area] with [Experience or Achievement].
        </p>
      </div>
    </motion.div>

    {/* Team Member 2 */}
    <motion.div
      className="relative p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-lg"></div>
      <div className="relative">
        <h3 className="text-xl font-bold text-purple-400 mb-2">Team Member Name 2</h3>
        <p className="text-white font-bold">Role</p>
        <p className="text-white mt-2">
          Brief description of expertise and contribution. Expertise in [Area] with [Experience or Achievement].
        </p>
      </div>
    </motion.div>

    {/* Team Member 3 */}
    <motion.div
      className="relative p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-lg"></div>
      <div className="relative">
        <h3 className="text-xl font-bold text-purple-400 mb-2">Team Member Name 3</h3>
        <p className="text-white font-bold">Role</p>
        <p className="text-gray-500 mt-2">
          Brief description of expertise and contribution. Expertise in [Area] with [Experience or Achievement].
        </p>
      </div>
    </motion.div>
  </div>

  {/* Partners Section */}
  <div className="mt-20">
    <motion.h2
      className="text-4xl font-bold text-purple-400 mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Partners
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Partner 1 */}
      <motion.div
        className="relative p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-lg"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-purple-400 mb-2">One Tech and AI Limited</h3>
          <p className="text-white">
            A leading software company and the developer of GPLine.ie, our licensed telehealth consultation portal.
          </p>
        </div>
      </motion.div>

      {/* Partner 2 */}
      <motion.div
        className="relative p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-lg"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-purple-400 mb-2">[Partner Name 2]</h3>
          <p className="text-white">
            Brief description of partner's role and contribution in the collaboration.
          </p>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Closing Statement */}
  <motion.p
    className="text-lg text-white mt-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    Together, we are shaping the future of healthcare innovation.
  </motion.p>
</div>

    </div>
    </div>
  );
};

export default Abot;
