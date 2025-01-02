import React, { useEffect, useState } from 'react';
import aniga from '../images/aniga.jpg';
import Header from '../components/Header';
import { FaStar, FaStarHalfAlt, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Import FaWhatsapp
import Footer from '../components/Footer';

const Portfolio = () => {
  // Skill data with percentage levels
  const skills = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 100 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 100 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'Tailwind CSS', level: 100 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Translation', level: 80 }
  ];

  // Project data
  const projects = [
    {
      title: 'Eco Market',
      description: 'is an e-commerce platform built with React JS and styled using Tailwind CSS, offering users a seamless shopping experience in a modern and responsive environment.',
      github: 'https://eco-market-psi.vercel.app/',
    },
    {
      title: 'Age Master',
      description: 'is a web application built using React JS and styled with Tailwind CSS that calculates a persons age based on their inputted date of birth.',
      github: 'https://age-master-2024.vercel.app/',
    },
    {
      title: 'Som Calculator',
      description: 'This calculator provides users with a simple, intuitive interface to perform calculations efficiently while ensuring a responsive and visually appealing layout.',
      github: 'https://calculator-app-chi-vert.vercel.app/',
    },
    {
      title: 'Weather App',
      description: 'I built a weather app on react js.',
      github: 'https://weather-app-six-theta-79.vercel.app//',
    },
    {
      title: 'BMI Calculaor',
      description: 'BMI Calculator that calculates the body.',
      github: 'https://engabdullah-2024.github.io/BMI-Calculator/',
    }
  ];

  // State to control progress animation and displayed percentage for skills
  const [progress, setProgress] = useState(skills.map(() => 0));
  const [displayedPercent, setDisplayedPercent] = useState(skills.map(() => 0));
  const [countingDone, setCountingDone] = useState(false);

  const [isTextVisible, setIsTextVisible] = useState(false); // New state to control text visibility
  const [showWelcome, setShowWelcome] = useState(true); // New state to control welcome section visibility
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome To My Portfolio"); // New state for welcome message

  useEffect(() => {
    if (!countingDone) {
      setProgress(skills.map(skill => skill.level));

      skills.forEach((skill, index) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count < skill.level && count <= 100) {
            setDisplayedPercent(prev => {
              const newPercents = [...prev];
              newPercents[index] = count;
              return newPercents;
            });
            count++;
          } else {
            clearInterval(interval);
          }
        }, 20);
      });

      setCountingDone(true);
    }
  }, [skills, countingDone]);

  useEffect(() => {
    const messages = ["Welcome To My Portfolio", "1", "2", "3", "Enjoy Now"];
    let index = 0;
    const interval = setInterval(() => {
      setWelcomeMessage(messages[index]);
      index++;
      if (index === messages.length) {
        clearInterval(interval);
        setTimeout(() => setShowWelcome(false), 1000); // Hide welcome section after 1 second
      }
    }, 1000); // Change message every 1 second

    return () => clearInterval(interval);
  }, []);

  const renderStars = (level) => {
    const maxStars = 5;
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const halfStar = level % 20 >= 10;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const remainingStars = maxStars - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-500" />);
    }

    return stars;
  };

  const handleMouseEnter = () => {
    setIsTextVisible(true); // Show text when mouse enters
  };

  const handleMouseLeave = () => {
    setIsTextVisible(false); // Hide text when mouse leaves
  };

  return (
    <div>
      <Header />
      {showWelcome ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{welcomeMessage}</h1>
          </div>
        </div>
      ) : (
        <div>
          {/* Main content goes here */}
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
            <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 py-10">
              {/* Left Section */}
              <div className="flex-1 mb-10 lg:mb-0 animate-slideInLeft">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Hello! I'm <span className="text-purple-500">Abdullah</span><br />
                  A Designer <span className="text-orange-500">and</span><br />
                  <span className="text-purple-600">Developer</span>
                </h1>
                <p className="text-lg max-w-lg mb-8">
                  Passionate in Fullstack Dev and UI/UX Design. Enjoy building fast-performance and well-designed website interfaces using the latest technologies.
                </p>
                <div className='flex space-x-4'>
                  {/* Updated button to Download CV */}
                  <a 
                    href="/Abdalla CV.pdf" 
                    download 
                    className='bg-orange-500 text-white px-6 py-3 rounded-lg sm:w-[200px] hover:bg-orange-600 transition-all duration-300'
                  >
                    Download CV →
                  </a>
                  {/* Hire Me Button with GitHub Link */}
                  <a 
                    href="https://github.com/engabdullah-2024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='bg-orange-500 text-white px-6 py-3 rounded-lg sm:w-[200px] hover:bg-orange-600 transition-all duration-300'
                  >
                    Hire Me →
                  </a>
                </div>
              </div>

              {/* Right Section (Image/Illustration) */}
              <div className="flex justify-center lg:justify-end mr-10 animate-slideInRight">
                <div 
                  className="relative" 
                  onMouseEnter={handleMouseEnter} // Trigger text visibility on mouse enter
                  onMouseLeave={handleMouseLeave} // Trigger text disappearance on mouse leave
                >
                  <img 
                    className="w-80 h-80 max-w-full rounded-[12px] border-2 border-orange-500" 
                    src={aniga} 
                    alt="Illustration" 
                    
                  />
                  {/* Conditionally render the blue div with text */}
                  {isTextVisible && (
                    <div className="absolute inset-0 flex items-center justify-center bg-orange-500 rounded-[12px] text-white text-xl">
                    <h1>  Fullstack Dev</h1>
                    /
                        <h1>  Designer</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section with Animated Progress Bars */}
          <div className="bg-gray-900 py-16 ">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">My Skills</h2>
              <div className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-white font-semibold">{displayedPercent[index]}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                        <div
                          className="bg-purple-600 h-4 rounded-full transition-all duration-[3s] ease-out"
                          style={{ width: `${progress[index]}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-center mt-2">
                        {renderStars(skill.level)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
              <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="w-full sm:w-1/2 lg:w-1/3 p-4 transition-transform transform hover:scale-105 duration-300"
                  >
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-purple-500 hover:underline"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Floating Icon */}
          <a 
            href="https://wa.me/252613169435" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
          >
            <FaWhatsapp size={40} />
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Portfolio;