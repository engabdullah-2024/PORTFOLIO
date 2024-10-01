// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons

// const Portfolio = () => {
//   // Skill data with percentage levels
//   const skills = [
//     { name: 'HTML', level: 100 },
//     { name: 'CSS', level: 100 },
//     { name: 'JavaScript', level: 90 },
//     { name: 'React', level: 100 },
//     { name: 'Node.js', level: 80 },
//     { name: 'Express', level: 80 },
//     { name: 'MongoDB', level: 80 },
//     { name: 'Tailwind CSS', level: 100 },
//     { name: 'UI/UX Design', level: 95 }
//   ];

//   // State to control progress animation and displayed percentage
//   const [progress, setProgress] = useState(skills.map(() => 0)); // Initialize all progress bars to 0
//   const [displayedPercent, setDisplayedPercent] = useState(skills.map(() => 0)); // Displayed percent starting from 0
//   const [countingDone, setCountingDone] = useState(false); // Flag to stop counting once it's done

//   useEffect(() => {
//     // Trigger the progress animation and counting only if it hasn't been done
//     if (!countingDone) {
//       setProgress(skills.map(skill => skill.level)); // Set progress to skill level

//       // Animating the percentage counting
//       skills.forEach((skill, index) => {
//         let count = 0;
//         const interval = setInterval(() => {
//           if (count < skill.level && count <= 100) {  // Ensure percentage doesn't exceed skill level or 100%
//             setDisplayedPercent(prev => {
//               const newPercents = [...prev];
//               newPercents[index] = count;
//               return newPercents;
//             });
//             count++;
//           } else {
//             clearInterval(interval); // Stop counting when the target percentage is reached
//           }
//         }, 20); // Controls the speed of counting (adjustable)
//       });

//       setCountingDone(true); // Set counting to done to avoid running it again
//     }
//   }, [skills, countingDone]);

//   // Function to generate star ratings
//   const renderStars = (level) => {
//     const maxStars = 5;
//     const stars = [];
//     const fullStars = Math.floor(level / 20); // Each full star represents 20%
//     const halfStar = level % 20 >= 10; // If remainder is 10 or more, show a half star

//     // Loop to add full stars
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={i} className="text-yellow-400" />);
//     }

//     // If half star is needed, add it
//     if (halfStar) {
//       stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
//     }

//     // Fill the remaining stars with empty stars if necessary
//     const remainingStars = maxStars - fullStars - (halfStar ? 1 : 0);
//     for (let i = 0; i < remainingStars; i++) {
//       stars.push(<FaStar key={`empty-${i}`} className="text-gray-500" />);
//     }

//     return stars;
//   };

//   return (
//     <div>
//       <Header />
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
//         {/* Container */}
//         <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 py-10">
          
//           {/* Left Section */}
//           <div className="flex-1 mb-10 lg:mb-0">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//               Hello! I'm <span className="text-purple-500">Abdullah</span><br />
//               A Designer <span className="text-orange-500">and</span><br />
//               <span className="text-purple-600">Developer</span>
//             </h1>
//             <p className="text-lg max-w-lg mb-8">
//               Passionate in Fullstack Dev and UI/UX Design. Enjoy building fast-performance and well-designed website interfaces using the latest technologies.
//             </p>
//            <div className='flex space-x-4'>
//            <Link to="/">
//               <h1 className='bg-orange-500 text-white px-6 py-3 rounded-lg w-[200px] hover:bg-orange-600 transition-all duration-300'>View Portfolio →</h1>
//             </Link>
//             <h1 className='bg-orange-500 text-white px-6 py-3 rounded-lg w-[200px] hover:bg-orange-600 transition-all duration-300'>Hire Me →</h1>
//            </div>
//           </div>

//           {/* Right Section (Image/Illustration) */}
//           <div className="flex justify-center lg:justify-end mr-10">
//             <img className='w-64 h-auto max-w-full' src='images/iltire.jpg' alt="Illustration" />
//           </div>
//         </div>
//       </div>

//       {/* Skills Section with Animated Progress Bars */}
//       <div className="bg-gray-900 py-16">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-8">My Skills</h2>
//           <div className="flex flex-wrap justify-center">
//             {/* Skill Progress Bars with Star Ratings */}
//             {skills.map((skill, index) => (
//               <div key={skill.name} className="w-full sm:w-1/2 lg:w-1/3 p-4">
//                 <div className="bg-gray-800 p-4 rounded-lg">
//                   <div className="flex justify-between mb-2">
//                     <span className="text-white font-semibold">{skill.name}</span>
//                     <span className="text-white font-semibold">{displayedPercent[index]}%</span> {/* Display counting percentage */}
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
//                     {/* Animated Progress Bar */}
//                     <div
//                       className="bg-purple-600 h-4 rounded-full transition-all duration-[3s] ease-out"
//                       style={{ width: `${progress[index]}%` }}
//                     ></div>
//                   </div>
//                   {/* Star Rating */}
//                   <div className="flex justify-center mt-2">
//                     {renderStars(skill.level)}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons
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
    { name: 'UI/UX Design', level: 95 }
  ];

  // State to control progress animation and displayed percentage
  const [progress, setProgress] = useState(skills.map(() => 0)); // Initialize all progress bars to 0
  const [displayedPercent, setDisplayedPercent] = useState(skills.map(() => 0)); // Displayed percent starting from 0
  const [countingDone, setCountingDone] = useState(false); // Flag to stop counting once it's done

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

  return (
    <div>
      <Header />
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
              <Link to="/">
                <h1 className='bg-orange-500 text-white px-6 py-3 rounded-lg sm:w-[200px] hover:bg-orange-600 transition-all duration-300'>
                  View Portfolio →
                </h1>
              </Link>
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
            <img className='w-80 h-auto max-w-full' src='iltire.jpg' alt="Illustration" />
          </div>
        </div>
      </div>

      {/* Skills Section with Animated Progress Bars */}
      <div className="bg-gray-900 py-16">
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
      <Footer/>
    </div>
  );
};

export default Portfolio;
