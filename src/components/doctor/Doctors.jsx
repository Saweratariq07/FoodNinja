import React, { useState } from 'react';
import Nav from '../home/Nav';
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
const Doctors = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

  const faqs = [
    {
      question: "What is Neuronicks Limited?",
      answer: "Neuronicks Limited is registered in Ireland and serves healthcare providers across the globe."
    },
    {
      question: "Where is Neuronicks Limited located?",
      answer: "Neuronicks Limited is registered in Ireland and serves healthcare providers across the globe."
    },
    {
      question: " What types of organizations can use your products?",
      answer: "Our products are designed for hospitals, epilepsy centers, neurologists, research institutions, and healthcare providers seeking telemedicine solutions."
    },
    {
      question: "What is GPLine.ie?",
      answer: "GPLine.ie is an online doctor consultation portal that enables secure and efficient telehealth services for patients and providers in Ireland."
    },
    {
      question: "How can healthcare providers obtain a license for GPLine.ie?",
      answer: "Healthcare providers can contact us through our website to request licensing details and implementation support."
    },
    {
      question: " Can GPLine.ie be customized for specific clinics?",
      answer: "Yes, GPLine.ie can be tailored to meet the unique needs of individual clinics and healthcare organizations."
    },
    {
      question: "What is Neuronicks Limited?",
      answer: "Neuronicks Limited is registered in Ireland and serves healthcare providers across the globe."
    },
    {
      question: " What types of organizations can use your products?",
      answer: "Our products are designed for hospitals, epilepsy centers, neurologists, research institutions, and healthcare providers seeking telemedicine solutions."
    },
    {
      question: "How does the Seizure Semiology Software work?",
      answer: "The software uses advanced AI to analyze seizure videos, classify seizure types, and generate detailed telemetry reports following ILAE guidelines."
    },
    {
      question: " Who can benefit from the Seizure Semiology Software?",
      answer: "Neurologists, epilepsy specialists, and healthcare facilities treating epilepsy patients can greatly benefit from this tool."
    },
    {
      question: "Is the software compliant with international standards?",
      answer: "Yes, the Seizure Semiology Software adheres to ILAE standards and other global healthcare guidelines."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
    {
      question: "How does the Colorectal Virtual Ward work?",
      answer: "Patients are discharged post-operation and monitored via a secure digital platform. The system provides real-time updates, alerts for complications, and secure communication between doctors and patients."
    },
  ];

  const toggleFaq = (index) => {
    setSelectedFaqIndex(selectedFaqIndex === index ? null : index);
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
      <div className='-gradient-to-r relative pt-44 from-black via-black to-[#373317] bg-clip-text text-white'>
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold text-purple-400">
          <span className="">❋</span> FAQs{" "}
          <span className="">❋</span>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className="border border-white p-4 text-lg font-semibold hover:bg-gradient-to-r from-purple-500 via-purple-400 to-black hover:text-white transition duration-300 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
          <div className="flex justify-between">
            <div className="col-md-2">
            <FaPlus />
            </div>
            <div className="col-md-8">
            {faq.question}
            </div>
            <div className="col-md-2">
            <IoIosArrowForward />
            </div>
            </div>   
            </div>
            {selectedFaqIndex === index && (
              <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-black text-white p-4 mt-1 border-l-4 border-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Doctors;
