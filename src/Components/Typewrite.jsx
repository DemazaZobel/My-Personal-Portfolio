import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
 
const TypeWrite = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Blink cursor 3 times after finishing
      const blinkInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      setTimeout(() => {
        clearInterval(blinkInterval);
        setShowCursor(false);
      }, 5000);

      return () => clearInterval(blinkInterval);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="text-left">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-OpenSans font-bold text-white mb-4">
        <span className="inline-block">
          {displayedText}
          <span className={`ml-1 h-8 md:h-12 w-1 bg-purple-400 inline-block align-middle transition-opacity duration-300 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`} 
                style={{ boxShadow: '0 0 8px 2px rgba(192, 132, 252, 0.5)' }} />
        </span>
      </h1>
      
      <p className="font-OpenSans max-w-3xl mx-auto md:mx-0 text-justify md:text-left text-white text-base md:text-lg leading-relaxed mb-6 px-4 md:px-2 py-2">
      
           
       Building digital universes, one React component at a time
        <br />
        Software Sorcerer | Full-Stack Astronaut |AI Wizard | Bug Hunter Extraordinaire
      </p>

          <Link 
      to="about" // This should match the ID of the target section
      smooth={true}
      duration={500}
      className="bg-transparent border-2 md:border-4 border-white rounded-full p-2 md:p-3 font-bold transition-transform ease-in-out hover:scale-110 w-full md:w-auto cursor-pointer"
    >
      <span className="text-white text-sm md:text-base">More About Me</span>
    </Link>
    </div>
  );
};

export default TypeWrite;
