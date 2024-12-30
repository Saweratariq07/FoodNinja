import React from "react";
import { motion } from "framer-motion";
import Nav from "../home/Nav";

const Appointment = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
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
      <div className="pt-36 py-8 px-8 md:px-16 xl:px-32 relative z-10">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-5xl font-extrabold text-center text-purple-400 mb-12"
        >
          News
        </motion.h2>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-center text-white mb-16 max-w-3xl mx-auto"
        >
          Stay updated with the latest developments, achievements, and innovations from Neuronicks Limited. Here’s what we’ve been up to:
        </motion.p>

        {/* Recent Updates List */}
        <div className="space-y-12">
          {[
            {
              title: "Seizure Semiology Software Launched in Leading Epilepsy Centers",
              description:
                "Neuronicks Limited has successfully deployed the Seizure Semiology Software in several top epilepsy centers, streamlining diagnostic processes and improving patient outcomes.",
            },
            {
              title: "GPLine.ie Expansion Across Ireland",
              description:
                "The GPLine.ie telehealth portal continues to expand its reach, offering secure and efficient remote healthcare solutions to clinics and patients nationwide.",
            },
            {
              title: "Research Collaboration with Leading Institutions",
              description:
                "We are proud to announce a partnership with renowned medical research institutions to further advance seizure analysis technologies and telemedicine innovations.",
            },
          ].map((update, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate="visible"
              variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
              className="p-8 rounded-xl bg-black bg-opacity-30 transform transition-all duration-500 ease-in-out text-white"
              >
              <h3 className="text-3xl font-semibold text-purple-400 mb-6">{update.title}</h3>
              <p className="text-lg text-white">{update.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
