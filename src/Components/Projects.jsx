import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import {Link} from 'react-scroll';
import addisplugImg from '../assets/addisplug.png';
import dankalImg from '../assets/Dankal.png';
import dankal2Img from '../assets/dankal2.png';
import ieNetworkImg from '../assets/IENetworksolutions.png';
import gdgCertificateImg from '../assets/GDG.png';
import hercommerceImg from '../assets/hercommerce.png';
import ethioIntlImg from '../assets/ethiointel.jpg';

export default function Projects() {
  // Recent Projects - These will have images
  const recentProjects = [
    {
      title: "AddisPlug",
      description: "An electric vehicle station platform where users can charge their vehicles, get car wash services, and vehicle repairs all in one place. A comprehensive solution for EV owners with an intuitive user interface.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      year: "2024",
      image: addisplugImg,
      link: "https://addisplug.com", // Replace with actual link
      deployed: true
    },
    {
      title: "Dankal",
      description: "A professional website for an industrial company showcasing their services, products, and company information. Built with modern web technologies for optimal performance and user experience.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      year: "2024",
      images: [dankalImg, dankal2Img], // Multiple images for Dankal
      link: "https://github.com/DemazaZobel/Dankal" // Replace with actual link
    },
    {
      title: "Ethio-Intl",
      description: "Ethio-Intl is an open-source internationalization library built to support Ethiopian languages and systems in modern software development. It brings together: Amharic transliteration , Ethiopian ↔ Gregorian calendar conversion, Geez numeral support, Multi-language foundations (Amharic, Oromo, Tigrinya, English).",
      tags: ["Open-source", "React", "Team Project", "Innovation"],
      year: "2025",
      link: "https://github.com/BeamSol/Ethio-Intl",
      image: ethioIntlImg,
      label: "Open-source"
    }
  ];

  // Past Projects - These won't have images
  const pastProjects = [
    {
      title: "Zembil E-commerce",
      description: "A full-stack e-commerce platform built during my internship at IE Network Solutions. Showcased my skills in full-stack development using React Query for data fetching, Redux for state management, and Express.js for the backend API.",
      tags: ["React", "React Query", "Redux", "Express.js", "Full Stack"],
      year: "2024",
      image: ieNetworkImg,
      link: "https://github.com/DemazaZobel/Zembil-ecommerce-frontend",
      label: "Internship"
    },
    {
      title: "E-commerce Platform (GDG)",
      description: "An e-commerce platform developed collaboratively with my team at Google Developers Group. Built using Flutter to create a cross-platform mobile application with modern UI/UX design principles.",
      tags: ["Flutter", "Dart", "Mobile Development", "Team Project"],
      year: "2024",
      certificate: gdgCertificateImg,
      link: "https://github.com/DemazaZobel/E-Commerce_Capstone_Project_G5",
      label: ""
    },
    {
      title: "Her-commerce",
      description: "A hackathon project developed with ALX Ethiopia and iceaddis. A platform designed for small to medium enterprises in Ethiopia to showcase and sell their products. Features an innovative human agent-based system where physical agents (brokers) work across the country to help businesses without smartphones or internet connection manage their online presence and sales.",
      tags: ["Hackathon", "ALX", "iceaddis", "Team Project", "Innovation"],
      year: "2024",
      certificate: hercommerceImg,
      link: "https://www.figma.com/design/rckwa7Cux3qnLQhcgbEabr/qeen?node-id=0-1&t=xZSTItEkCa1wrO0F-1",
      label: ""
    },
    {
      title: "Walmart Weekly Sales Forecasting with ML",
      description: "A machine learning project focused on forecasting weekly sales for Walmart stores. Utilizes advanced ML techniques to predict sales patterns and trends, helping with inventory management and business planning.",
      tags: ["Python", "Machine Learning", "Data Science", "Forecasting"],
      year: "2024-25",
      link: "https://github.com/DemazaZobel/Walmart-Weekly-Sales-Forecasting-with-ML",
      label: "Course Projects"
    },
    {
      title: "ROHA ROADS",
      description: "A dynamic website built to present our IETP project on Dynamic Inductive Wireless EV Charging. Features interactive visualizations and comprehensive project documentation.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      year: "2024",
      link: "https://github.com/DemazaZobel/roharoads-react",
      label: "Course Projects"
    },
    {
      title: "Human Resource Management System",
      description: "A comprehensive HRMS built for my cybersecurity course project to showcase different access control mechanisms. Implements various access control models including Attribute-Based Access Control (ABAC), Mandatory Access Control (MAC), Role-Based Access Control (RBAC), Discretionary Access Control (DAC), and other security protocols.",
      tags: ["Cybersecurity", "Access Control", "ABAC", "MAC", "RBAC", "DAC"],
      year: "2023",
      link: "https://github.com/DemazaZobel/HRMS-back",
      label: "Course Projects"
    },
  ];

  // Project Card Component
  const ProjectCard = ({ project, hasImage = false }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.images || (project.image ? [project.image] : []);
    const hasMultipleImages = images.length > 1;
    const isDankal = project.title === 'Dankal';

    // Auto-rotate images for Dankal every 2 seconds
    useEffect(() => {
      if (isDankal && hasMultipleImages) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % images.length
          );
        }, 3000); // Change every 2 seconds

        return () => clearInterval(interval);
      }
    }, [isDankal, hasMultipleImages, images.length]);

    return (
      <div 
        className={`relative group overflow-hidden rounded-xl border border-gray-800/50 hover:border-purple-500/50 bg-gray-900/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10
          ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
      >
        {/* Project Image(s) - Only for recent projects */}
        {hasImage && images.length > 0 && (
          <div className={`relative w-full overflow-hidden bg-gray-800 flex items-center justify-center ${
            project.featured ? 'h-80 md:h-[500px]' : 'h-64 md:h-80'
          }`}>
            <img 
              src={images[currentImageIndex]} 
              alt={project.title}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent pointer-events-none"></div>
            
            {/* Image Navigation Dots for multiple images */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index 
                        ? 'bg-purple-400 w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      
        {/* Project Card Content */}
        <div className={`relative p-6 ${hasImage && images.length > 0 ? '' : project.certificate ? '' : 'min-h-[280px]'} flex flex-col`}>
        {/* Year Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded-full border border-purple-700/50">
          {project.year}
        </div>
        
        {/* Label Badge */}
        {project.label && (
          <div className={`absolute top-1 left-4 px-3 py-1 text-xs font-semibold rounded-full  ${
            project.label === "Internship" 
              ? "bg-blue-900/10 text-purple-200"
              : project.label === "Certificates"
              ? " text-purple-200"
              : " text-purple-200"
          }`}>
            {project.label}
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mb-4"></div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-xs font-medium px-3 py-1 rounded-md bg-purple-900/20 text-purple-300 border border-purple-800/50 hover:bg-purple-800/30 hover:border-purple-500/50 transition-all"
              >
                {tag}
              </span>
            ))}
            {project.deployed && (
              <span className="text-xs font-medium px-3 py-1 rounded-md bg-green-900/30 text-green-300 border border-green-700/50">
                Link
              </span>
            )}
          </div>
          
          {/* Certificate Display */}
          {project.certificate && (
            <div className="mb-4">
              <div className="text-xs font-medium text-purple-300 mb-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                Certificate
              </div>
              <div className="relative rounded-lg overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition-colors">
                <img 
                  src={project.certificate} 
                  alt={`${project.title} Certificate`}
                  className="w-full h-auto object-contain max-h-48 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => window.open(project.certificate, '_blank')}
                />
              </div>
            </div>
          )}
          
          {/* View Project Button */}
          <div className="mt-auto pt-2">
            <a
              href={project.link || "#"}
              target={project.link && project.link !== "#" ? "_blank" : "_self"}
              rel={project.link && project.link !== "#" ? "noopener noreferrer" : ""}
              className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 group/btn transition-colors"
            >
              <span className="mr-2">View Project</span>
              <svg 
                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  };

  return (
    <Element name="projects" className="section"> 
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-600">
                My Projects
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills in software development, machine learning, and web technologies
            </p>
          </div>

          {/* Recent Projects Section */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mr-4">Recent Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {recentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} hasImage={true} />
              ))}
            </div>
          </div>

          {/* Past Projects Section */}
          <div>
            <div className="flex items-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mr-4">Past Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastProjects.map((project, index) => (
                <ProjectCard key={index} project={project} hasImage={!!project.image} />
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-20 max-w-7xl mx-auto">
          <div className="inline-block relative">
            <p className="text-lg text-gray-300 mb-6">
              Interested in collaborating or have a project in mind?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/DemazaZobel"  
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                View GitHub
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 border border-purple-500 text-purple-300 rounded-lg font-medium hover:bg-purple-900/30 hover:text-white transition-all cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div></Element>
  );
}