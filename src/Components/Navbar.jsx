import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or prefer-color-scheme on initial load
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Apply theme class to HTML root and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-gray-900/90 dark:bg-grey-900/90 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center">
          {/* Navigation Links */}
          <div className="flex space-x-1 md:space-x-6">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveLink(link.id)}
                className={`relative px-4 py-2 font-medium cursor-pointer group transition-all duration-300 ${
                  activeLink === link.id 
                    ? 'text-purple-300 dark:text-purple-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500 ${
                  activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;