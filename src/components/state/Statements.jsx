import React from "react";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import Nav from "../home/Nav";

const Statement = () => {
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

  const slideInFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInScaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
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
      <Nav />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative text-white py-32 px-8 md:px-16 xl:px-32 max-w-screen-xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center text-purple-400 pt-12 mb-12"
        >
          Seizure Semiology Software
        </motion.h2>

        {/* Icon */}
        <motion.div
          className="flex justify-center mb-12"
          whileHover={scaleOnHover}
        >
          <FaBrain className="text-7xl text-purple-300 transform hover:scale-110 transition-all duration-500" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-100 text-center mb-12 max-w-3xl mx-auto"
        >
          Our Seizure Semiology Software leverages advanced artificial intelligence
          to analyze seizure semiology videos, providing accurate and detailed
          video telemetry reports. This software is a game-changer for neurologists
          and epilepsy centers, offering:
        </motion.p>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI-Powered Analysis",
              description:
                "Automates the classification of seizures using the latest ILAE standards.",
            },
            {
              title: "Enhanced Diagnostic Accuracy",
              description:
                "Provides detailed insights into seizure onset, progression, and features.",
            },
            {
              title: "Streamlined Workflow",
              description:
                "Reduces time spent on manual video analysis, allowing clinicians to focus on patient care.",
            },
            {
              title: "Compliance with International Guidelines",
              description:
                "Fully adheres to ILAE and other global standards.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-in-out"
              whileHover={scaleOnHover}
              variants={fadeInScaleUp}
            >
              <h3 className="text-3xl font-semibold text-purple-400 mb-6">{feature.title}</h3>
              <p className="text-lg ">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          whileHover={{ scale: 1.1 }}
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

export default Statement;
