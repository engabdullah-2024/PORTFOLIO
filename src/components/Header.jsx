import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 p-4 text-white relative z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="sm:text-2xl font-bold">Eng <span className='text-[#F97316]'>Abdullah</span></div>
          </Link>

          {/* Menu Icon */}
          <div className="sm:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-6 sm:text-lg">
            <Link to="/about">
              <li className="hover:text-gray-300">About</li>
            </Link>
            <Link to="/">
              <li className="hover:text-gray-300">Portfolio</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-gray-300">Contact</li>
            </Link>
          </ul>
        </nav>

        {/* Additional Animated Dropdown Menu */}
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 sm:hidden flex flex-col space-y-4"
          >
            <Link to="/about" onClick={toggleMenu}>
            
              <li className="hover:text-gray-400">About</li>
            </Link>
            <Link to="/" onClick={toggleMenu}>
              <li className="hover:text-gray-400">Portfolio</li>
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <li className="hover:text-gray-400">Contact</li>
            </Link>
          </motion.ul>
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-75 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 sm:hidden`}
        >
          <div className="bg-gray-800 h-full w-64 p-4 relative">
            {/* Close Icon */}
            <div
              className="absolute top-4 right-4 text-2xl cursor-pointer text-white"
              onClick={toggleMenu}
            >
              <FaTimes />
            </div>

            {/* Sidebar Links */}
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-4 mt-8 text-lg"
            >
                <div  onClick={toggleMenu}     className="sm:text-2xl font-bold">Eng <span className='text-[#F97316]'>Abdullah</span></div>
              <Link to="/about" onClick={toggleMenu}>
                <li className="hover:text-gray-400">About</li>
              </Link>
              <Link to="/" onClick={toggleMenu}>
                <li className="hover:text-gray-400">Portfolio</li>
              </Link>
              <Link to="/contact" onClick={toggleMenu}>
                <li className="hover:text-gray-400">Contact</li>
              </Link>
            </motion.ul>
          </div>
        </div>
      </header>

      {/* Background Dim Effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
