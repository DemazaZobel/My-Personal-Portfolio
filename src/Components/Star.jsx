import React from 'react';


export default function Star() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Stars background */}
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
      </div></div>
  );
}
