import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import menu and close icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="sm:text-2xl font-bold">Eng Abdullah</div>
        </Link>

        {/* Menu Icon */}
        <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu Items */}
        <ul className={`flex flex-col sm:flex-row space-x-0 sm:space-x-6 sm:space-y-0 space-y-4 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <li>
            <Link to="/about" className='hover:text-gray-300'>About</Link>
          </li>
          <li>
            <Link to="/" className='hover:text-gray-300'>Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className='hover:text-gray-300'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
