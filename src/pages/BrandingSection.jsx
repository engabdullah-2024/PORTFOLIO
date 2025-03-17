import React from "react";
import { FaCheckCircle, FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
const BrandingSection = () => {
  return (
   <div>
<Header/>
    <section className="bg-gray-800 text-white py-16 px-6 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
        >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Why Work With Me?</h2>
        <p className="text-gray-300 text-lg mb-8">
          I bring a strong mix of creativity, technical skills, and problem-solving to the table. Here’s why I’m the right choice for your project:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-6 rounded-lg flex items-center space-x-4"
          >
            <FaCheckCircle className="text-green-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Reliable & Efficient</h3>
              <p className="text-gray-300">Delivering high-quality work on time, every time.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-6 rounded-lg flex items-center space-x-4"
          >
            <FaCode className="text-blue-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Clean Code & Best Practices</h3>
              <p className="text-gray-300">Writing maintainable and scalable code.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-6 rounded-lg flex items-center space-x-4"
          >
            <FaLightbulb className="text-yellow-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Creative & Innovative</h3>
              <p className="text-gray-300">Bringing fresh ideas and innovative solutions.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-6 rounded-lg flex items-center space-x-4"
          >
            <FaUsers className="text-purple-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Team Player</h3>
              <p className="text-gray-300">Great at collaboration and communication.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
    <Footer/>
          </div>
  );
};

export default BrandingSection;
