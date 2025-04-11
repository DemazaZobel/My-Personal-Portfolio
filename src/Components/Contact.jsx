import React, { useState } from 'react';
import Star from './Star';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Replace with your EmailJS Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID      // Replace with your EmailJS User ID
    )
    .then(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => setSubmitStatus('error'))
    .finally(() => setIsSubmitting(false));
  };

  

  return (
    <Element name="contact" className="section" >
    <div  className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
     
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Cosmic Communication Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-600 mb-6">
            Transmit Message
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <div className="text-purple-300">✧</div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-pink-500"></div>
          </div>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Ready to collaborate or just want to say hello? Send your signal through the cosmic void.
          </p>
        </div>

        {/* Interactive Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl border border-purple-500/20 p-8 md:p-12 shadow-2xl shadow-purple-900/20">
          {/* Pulsing Form Indicator */}
         

          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-block bg-green-900/30 border border-green-400/30 rounded-full p-4 mb-6">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Signal Received!</h3>
              <p className="text-purple-200 mb-6">Your message has been transmitted across the cosmos.</p>
              <button 
                onClick={() => setSubmitStatus(null)}
                className="px-6 py-2 border border-purple-400 text-purple-200 rounded-lg hover:bg-purple-900/30 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-900/70"
                      placeholder="Enter your name"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-900/70"
                      placeholder="your@email.com"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-900/70"
                      placeholder="Type your message here..."
                    ></textarea>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-purple-900/50 text-purple-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Launch Message
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Alternative Contact Methods */}
          <div className="mt-12 pt-8 border-t border-purple-900/30">
            <h3 className="text-lg font-medium text-purple-300 mb-6 text-center">Or connect through these channels</h3>
            <h5 className="text-lg font-medium text-purple-300 mb-6 text-center">bettyseleshit@gmail.com</h5>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/DemazaZobel" className="flex items-center px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-900/50 hover:bg-purple-900/30 transition-colors">
                <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-purple-200">GitHub</span>
              </a>
              
              <a href="https://www.linkedin.com/in/bethelhem-seleshi-42b555359/" className="flex items-center px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-900/50 hover:bg-purple-900/30 transition-colors">
                <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-purple-200">LinkedIn</span>
              </a>
              
              <a href="https:/gmail.com" className="flex items-center px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-900/50 hover:bg-purple-900/30 transition-colors">
                <svg className="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
                <span className="text-purple-200">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div></Element>
  );
}