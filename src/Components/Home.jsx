import React from 'react';
import TypeWrite from './Typewrite'; 
import MyProfile from './MyProfile';
import { Element } from 'react-scroll';

function Home() {
  return (
    <Element name="home" className="section">
      <div className="relative">
        <div className="md:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
          
          {/* Animated background elements */}
          <div className="fixed inset-0 z-0">
            {[...Array(100)].map((_, i) => (
              <div 
                key={`medium-${i}`}
                className="absolute bg-blue-100 rounded-full animate-fadeIn"
                style={{
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  opacity: Math.random() * 0.6 + 0.1,
                  animationDelay: `${Math.random() * 3}s`,
                  animation: 'drift 5s infinite ease-in-out',
                  boxShadow: `0 0 ${Math.random() * 6 + 2}px ${Math.random() * 1 + 0.5}px white`
                }}
              />
            ))}
          </div>

          <div className="fixed inset-0 z-0">
            {[...Array(300)].map((_, i) => (
              <div 
                key={`tiny-${i}`}
                className="absolute bg-white rounded-full animate-blink"
                style={{
                  width: `${Math.random() * 3}px`,
                  height: `${Math.random() * 3}px`,
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  opacity: Math.random(),
                  animationDelay: `${Math.random() * 1}s`,
                }}
              />
            ))}
          </div>

          {/* TypeWriter with proper positioning */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between top-30 p-4 md:p-10">
  {/* TypeWriter section */}
  <div className="w-full md:flex-1 m-4 md:m-10 text-center md:text-left">
    <TypeWrite text={"Hello, I am Betelhem Seleshi"} speed={200} />
  </div>

  {/* Profile section */}
  <div className="w-full md:flex-1 flex justify-center md:justify-end m-4 md:m-10">
    <MyProfile />
  </div>
</div>
        </div>
      </div>
    </Element>
  );
}

export default Home;
