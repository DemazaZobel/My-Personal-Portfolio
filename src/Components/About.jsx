import React from 'react';
import { Element } from 'react-scroll';
import Star from './Star';
import profile from '../assets/pp.jpeg';
import {Link} from 'react-scroll';
export default function About() {
  return (
    <Element name="about" className="section" >
    <div  className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
     
      
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-purple-500/30">
          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          
          <div className="p-8 md:p-12">
            {/* Animated heading */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile image placeholder */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="relative w-48 h-48 rounded-full border-4 border-purple-500/50 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl"><img src={profile}/></div>
                  </div>
                  <div className="absolute -inset-4 rounded-full border border-purple-400/30 animate-ping-slow pointer-events-none"></div>
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg text-purple-100 leading-relaxed">
                <span className="text-white font-medium">✨ Crafting digital experiences:</span> 
                  I'm Betelhem Seleshi, a software engineer specializing in building responsive, 
                  accessible web applications. I bridge the gap between user needs and technical 
                  implementation with clean, maintainable code.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-100">
                    Currently a <span className="text-white">4th-year software engineering student</span> at Addis Ababa Science and Technology University (AASTU), specializing in web development, AI, and app development.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <h3 className="text-purple-300 font-semibold mb-2">Technical Skills</h3>
                    <ul className="space-y-1 text-purple-100">
                      <li>• React, HTML/CSS, JavaScript</li>
                      <li>• Python, TensorFlow, Keras</li>
                      <li>• Web Development</li>
                      <li>• AI & Machine Learning</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <h3 className="text-purple-300 font-semibold mb-2">Interests</h3>
                    <ul className="space-y-1 text-purple-100">
                      <li>• Photography </li>
                      <li>• Creative Writing</li>
                      
                      <li>• Open Source</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-pink-400">
                  <p className="text-purple-100 italic">
                    "I aim to contribute to projects that solve real-world problems while continuing to grow in my field."
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-purple-200">
                    Feel free to <Link to='contact'><span className="text-white underline hover:text-purple-300 transition cursor-pointer">
                      connect with me</span> </Link>to collaborate on exciting projects!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></Element>
  );
}