import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaStethoscope, FaChartLine } from "react-icons/fa";
import Nav from "../home/Nav";

const Service = () => {
  const [isHovered, setIsHovered] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const cursorEffect = {
    cursor: isHovered ? "url('path/to/heart-cursor.png'), pointer" : "default",
  };

  return (
    
        <div className="relative  w-full h-auto overflow-hidden">
  <img
    className="absolute w-full h-full object-cover"
    src="bg.jpg"
    alt="Background"
  />
  {/* Color Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <Nav/>
    <div className="pt-44 px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0  opacity-30 animate-pulse"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center text-white z-10"
      >
        <h1 className="text-6xl font-bold mb-4">
          Innovating Healthcare Through Research & Development
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          At Neuronicks Limited, we are dedicated to pushing the boundaries of medical technology, ensuring healthcare professionals and patients have access to groundbreaking solutions.
        </p>
      </motion.div>

      {/* Focus Areas Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="  p-16 rounded-lg  text-center"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-10">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{
            title: "Seizure Semiology Analysis",
            points: ["Advancing video telemetry for seizure classification.", "Utilizing AI for detailed seizure insights."],
            icon: <FaBrain className="text-5xl text-purple-700 mb-4" />,
          },
          {
            title: "Telemedicine Innovations",
            points: ["Enhancing remote healthcare with GPLine.ie.", "Bridging gaps between patients and healthcare providers."],
            icon: <FaStethoscope className="text-5xl text-teal-500 mb-4" />,
          },
          {
            title: "Data-Driven Healthcare Solutions",
            points: ["Leveraging big data analytics for better decision-making.", "Integrating healthcare systems seamlessly."],
            icon: <FaChartLine className="text-5xl text-blue-500 mb-4" />,
          }].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-xl  text-white hover:scale-105 transition duration-300 ease-in-out"
              whileHover={scaleOnHover}
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <ul className="text-lg space-y-3">
                {item.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="text-lg text-gray-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    • {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className=" px-16 rounded-lg "
      >
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-6 bg-gray-100 rounded-xl  hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Seizure Semiology Software</h3>
            <p className="text-lg text-gray-600">
              Successfully deployed AI-powered software across multiple epilepsy centers.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl  hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">GPLine.ie License</h3>
            <p className="text-lg text-gray-600">
              Teleconsultation portal adopted by a growing number of healthcare providers.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Commitment Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-16 bg-gradient-to-r from-purple-500 to-purple-700 text-white p-12 rounded-lg text-center"
      >
        <h3 className="text-3xl font-bold">Our Commitment to Innovation</h3>
        <p className="text-lg mt-4">
          We believe in a future where advanced technology enables better healthcare for everyone, empowering professionals and improving patient outcomes.
        </p>
      </motion.div>

      {/* Custom Cursor Effect */}
      <div
        className="cursor-pointer absolute z-50 top-0 left-0 w-4 h-4 rounded-full "
        style={cursorEffect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
    </div>
  );
};

export default Service;
