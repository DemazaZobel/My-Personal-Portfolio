import React from 'react';
import { Element } from 'react-scroll';
import {Link} from 'react-scroll';

export default function Projects() {
  const projects = [
    {
      title: "Restaurant website",
      description: "Interactive Website built In collaboration with a team",
      tags: ["HTML", "CSS", "PHP"],
      year: "2023",
      featured: true
    },
    {
      title: "ROHA ROADS",
      description: "websites I built to present our IETP: Dynamic inductive wireless EV charge",
      tags: ["React", "Tailwind CSS"],
      year: "2024"
    },
    {
      title: "Hate comment detection model",
      description: "This a ML project model built to detect negative comments",
      tags: ["Python", "TensorFlow", "Keras"],
      year: "2024-25"
    },
    
  ];

  return (
    <Element name="projects" className="section"> 
    <div className=" min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Cosmic Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-600">
                My Projects
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>
          <p className="text-xl text-purple-200 mt-8 max-w-3xl mx-auto">
            Each project is a star in my digital universe - explore my celestial work
          </p>
        </div>

        {/* Projects Constellation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl border border-gray-800 hover:border-purple-400/50 transition-all duration-500
                ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Celestial Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 via-gray-900/80 to-black/80 opacity-70"></div>
              
              {/* Pulsing Star Indicator */}
              <div className="absolute top-5 right-5 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              
              {/* Project Card Content */}
              <div className="relative h-full p-8 backdrop-blur-sm">
                {/* Year Badge */}
                <div className="absolute top-5 left-5 text-xs font-mono text-purple-300">
                  {project.year}
                </div>
                
                {/* Featured Ribbon */}
               
                
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="w-10 h-0.5 bg-gradient-to-r from-purple-400 to-transparent mb-4"></div>
                  
                  <p className="text-purple-100 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags as Constellations */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-mono px-3 py-1 rounded-full bg-gray-800/50 text-purple-300 border border-purple-900/50 hover:bg-purple-900/30 hover:border-purple-400/50 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Explore Button */}
                  <div className="mt-auto">
                    <button className="flex items-center text-sm text-purple-300 hover:text-white group transition-all">
                      <span className="mr-2">Explore Project</span>
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cosmic Call-to-Action */}
        <div className="text-center mt-20">
          <div className="inline-block relative group">
            <p className="text-lg text-purple-200 mb-6">
              Ready to launch your next project into orbit?
            </p>
            <div className="flex justify-center gap-4">
            <a
              href="https://github.com/DemazaZobel"  
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium overflow-hidden group-hover:opacity-90 transition-all"
            >
              <span className="relative z-10">View GitHub</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
                  <Link
              to="contact"  // Ensure you have an Element with name="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 border border-purple-400 text-purple-200 rounded-lg font-medium hover:bg-purple-900/30 hover:text-white transition-all cursor-pointer"
            >
              Contact Me
            </Link>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-purple-400 group-hover:w-32 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div></Element>
  );
}