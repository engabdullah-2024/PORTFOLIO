import React from 'react';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa'; // Removed Facebook and Instagram icons
import { AiOutlineClose } from 'react-icons/ai'; // Import X icon from Ant Design

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 absolute w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <p className="mt-2">Email: iltirepoi@gmail.com</p>
                        <p className="mt-2">Phone: +252 613169435</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Follow Us</h3>
                        <div className="flex space-x-4 mt-2">
                            <a 
                                href="https://github.com/engabdullah-2024" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white hover:text-blue-500"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a 
                                href="https://x.com/enga95311" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white hover:text-blue-500"
                            >
                                <AiOutlineClose size={24} /> {/* X icon instead of Twitter */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Eng Abdullah. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
