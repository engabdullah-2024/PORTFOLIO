import React, { useState } from 'react';
import Header from '../components/Header';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer';

const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    fromEmail: '',
    toEmail: '',
    github: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Here you can implement the logic to send data to your server
    console.log('Form submitted:', formData);

    // Reset the form after submission (optional)
    setFormData({
      name: '',
      fromEmail: '',
      toEmail: '',
      github: '',
      message: ''
    });
    
    // Display a success message (optional)
    alert('Your message has been sent!');
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
        {/* Container */}
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 py-10">
          
          {/* Left Section */}
          <div className="flex-1 mb-10 lg:mb-0 animate-slideInLeft">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="text-purple-500">Touch!</span>
            </h1>
            <p className="text-lg max-w-lg mb-8">
              I'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1">
            <form className="bg-gray-800 p-6 rounded-lg animate-slideInRight" onSubmit={handleSubmit} >
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                <div className="flex items-center border rounded-lg bg-gray-900">
                  <FaPhone className="text-gray-500 ml-2" />
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent text-white p-2 focus:outline-none" 
                    required 
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="fromEmail">From Email</label>
                <div className="flex items-center border rounded-lg bg-gray-900">
                  <FaEnvelope className="text-gray-500 ml-2" />
                  <input 
                    type="email" 
                    id="fromEmail" 
                    name="fromEmail"
                    value={formData.fromEmail}
                    onChange={handleChange}
                    placeholder="Your From Email"
                    className="w-full bg-transparent text-white p-2 focus:outline-none" 
                    required 
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="toEmail">To Email</label>
                <div className="flex items-center border rounded-lg bg-gray-900">
                  <FaEnvelope className="text-gray-500 ml-2" />
                  <input 
                    type="email" 
                    id="toEmail" 
                    name="toEmail"
                    value={formData.toEmail}
                    onChange={handleChange}
                    placeholder="Recipient's Email"
                    className="w-full bg-transparent text-white p-2 focus:outline-none" 
                    required 
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="github">GitHub</label>
                <div className="flex items-center border rounded-lg bg-gray-900">
                  <FaGithub className="text-gray-500 ml-2" />
                  <input 
                    type="text" 
                    id="github" 
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="Your GitHub Profile"
                    className="w-full bg-transparent text-white p-2 focus:outline-none" 
                    required 
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full h-24 bg-transparent text-white p-2 focus:outline-none border rounded-lg" 
                  required 
                />
              </div>

              <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full hover:bg-orange-600 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
