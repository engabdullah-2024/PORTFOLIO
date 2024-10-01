// src/components/About.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
<Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Container */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 py-10">
        
        {/* Navigation */}
        

        {/* Left Section */}
        <div className="flex-1 mb-10 lg:mb-0 animate-slideInLeft">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me: <span className="text-purple-500">Abdullah</span>
          </h1>
          <p className="text-lg max-w-lg mb-8">
            I am a passionate Fullstack Developer and UI/UX Designer with a keen interest in creating beautiful and functional web applications. 
            My experience spans across various technologies, and I enjoy solving complex problems with elegant solutions.
          </p>
          <p className="text-lg max-w-lg mb-8">
            I believe in continuous learning and staying updated with the latest trends in technology. In my spare time, I love to explore new tools and frameworks, as well as contribute to open-source projects.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300">
            View My Work →
          </button>
        </div>

        {/* Right Section (Image/Illustration) */}
        <div className="flex justify-center lg:justify-end animate-slideInRight">
        <img  className='w-80 h-auto max-w-full'  src='iltire.jpg'></img>
        </div>

        {/* Decorative Shapes (Removed) */}
        {/* 
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full hidden lg:block"></div>
        */}
      </div>
    </div>
    <Footer/>
        </div>
  );
};

export default About;
