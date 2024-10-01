// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
       <Link to="/"> <div className="sm:text-2xl font-bold ">Eng Abdullah</div></Link>
        <ul className="flex space-x-6">
        <ul className="flex space-x-6 sm:text-lg">
          <Link to="/about"> <li className='hover:text-gray-300'>About</li></Link>
          <Link to="/"><li className='hover:text-gray-300 '></li>Portfolio</Link> 
          <Link to="/contact"><li className='hover:text-gray-300 '></li>Contact</Link> 
          </ul>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
