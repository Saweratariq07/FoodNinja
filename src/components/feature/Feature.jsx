import React from "react";
import { FaMicroscope, FaLightbulb, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <motion.div
      className="py-6 px-4 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
        Why Choose  <span className="text-purple-400">Neuronicks Limited?</span>
        </h2>
        <p className="text-lg text-gray-200 mb-12">
          At Neuronicks Limited, our core values drive everything we do. Explore
          the principles that set us apart.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMicroscope className="text-6xl text-purple-400" />,
              title: "Expertise",
              description:
                "With a dedicated team of researchers and clinicians, we focus on solutions that address real-world medical challenges.",
            },
            {
              icon: <FaLightbulb className="text-6xl text-purple-400" />,
              title: "Innovation",
              description:
                "Our commitment to research and development drives the creation of technologies that transform healthcare delivery.",
            },
            {
              icon: <FaGlobe className="text-6xl text-purple-400" />,
              title: "Global Reach",
              description:
                "Leveraging partnerships with leading software and medical organizations to bring state-of-the-art solutions to a worldwide audience.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 border-2 border-black bg-opacity-40 text-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
