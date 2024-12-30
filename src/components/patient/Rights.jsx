import React from "react";
import { motion } from "framer-motion";
import { FaHospital, FaCalendarCheck, FaPrescriptionBottleAlt } from "react-icons/fa";
import Nav from "../home/Nav";

const Right = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleOnHover = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
        <div className="relative w-full h-auto overflow-hidden">
      <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
    src="vi.mp4" 
  ></video>
  <Nav/>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-screen-xl pt-44 mx-auto px-8"
      >
        {/* Header */}
        <motion.h2
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-center text-purple-400 mb-12"
        >
          GPLine.ie License
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-white text-center mb-12 max-w-2xl mx-auto"
        >
          Neuronicks Limited holds the exclusive license for GPLine.ie, an online
          doctor consultation portal developed by One Tech and AI Limited. GPLine.ie
          is a leading telehealth solution designed to:
        </motion.p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            {
              title: "Facilitate Secure Consultations",
              description:
                "Connect patients and doctors through a secure, user-friendly platform.",
              icon: <FaHospital className="text-6xl text-purple-500" />,
            },
            {
              title: "Enhance Accessibility",
              description:
                "Provide remote healthcare services to patients across Ireland.",
              icon: <FaCalendarCheck className="text-6xl text-purple-500" />,
            },
            {
              title: "Streamline Patient Care",
              description:
                "Offer appointment scheduling, prescription management, and follow-up consultations all in one place.",
              icon: <FaPrescriptionBottleAlt className="text-6xl text-purple-400" />,
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-black bg-opacity-40 text-white border-white border-[1px] p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-in-out"
              whileHover={scaleOnHover}
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{feature.title}</h3>
              <p className="text-lg text-white">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mb-12 mt-16"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#"
            className="bg-purple-700 text-white py-4 px-10 rounded-lg text-2xl font-semibold hover:bg-purple-600 transition duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Right;
