'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Globe2, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const footerRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    // Initialize animation state
    const handleScroll = () => {
      if (hasAnimated) return; // Skip if animation has already run once
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            setHasAnimated(true); // Set flag so animation only happens once
            observer.disconnect(); // Disconnect after triggering once
          }
        },
        { threshold: 0.1 }
      );
      
      const footer = footerRef.current;
      if (footer) {
        observer.observe(footer);
      }
      
      return () => {
        if (footer) observer.unobserve(footer);
      };
    };

    // Initial check and set up scroll listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <>
      {/* Black Footer Section with Scroll Animation */}
      <footer 
        ref={footerRef} 
        className="relative bg-black text-white pt-16 pb-8 overflow-hidden transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Solutions and Company */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Solutions Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  <div className="space-y-4 w-[200px]">
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Digital Strategy & Design</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Application Development and Management</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Cloud & Infrastructure</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Software-as-a-Service</p>
                  </div>
                  <div className="space-y-4 w-[200px]">
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Digital & Brand Marketing</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Generative AI & Business Intelligence</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Network Connectivity</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">ERP Solutions</p>
                  </div>
                </div>
              </div>

              {/* Company Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Company</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  <div className="space-y-4 w-[200px]">
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Events</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Why us</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Team</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Careers</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Partners & Certifications</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Reviews & Awards</p>
                  </div>
                  <div className="space-y-4 w-[200px]">
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Blog</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Case studies</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Events</p>
                    <p className="text-gray-400 text-sm hover:text-white cursor-pointer">FAQ</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Form - Moved below Company section */}
              <div className="w-full max-w-md">
                <input
                  type="email"
                  placeholder="Don't miss out updates"
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 mb-3 text-white"
                />

                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="privacy-consent" className="text-gray-400 text-sm">
                    I agree to the Privacy Policy and give my permission to process my personal data for the
                    purposes specified in the Privacy Policy.
                  </label>
                </div>

                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded flex items-center">
                  Send
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Only Logo and Schedule Button with dotted pattern background */}
            <div className="md:w-1/2 flex flex-col items-center justify-center relative">
              {/* Animated Dotted pattern background with scroll effect */}
              <div 
                ref={dotsRef}
                className="absolute inset-0 transition-all duration-1000 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                }}
              >
                <style jsx global>{`
                  @keyframes floatPattern {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(5px, -5px) rotate(1deg); }
                    50% { transform: translate(0, -10px) rotate(0deg); }
                    75% { transform: translate(-5px, -5px) rotate(-1deg); }
                    100% { transform: translate(0, 0) rotate(0deg); }
                  }
                  
                  @keyframes scaleOnScroll {
                    0% { transform: scale(0.8); }
                    100% { transform: scale(1); }
                  }
                  
                  @keyframes pulseOnce {
                    0% { opacity: 0.7; }
                    50% { opacity: 1; }
                    100% { opacity: 0.9; }
                  }
                  
                  .dots-animation {
                    animation: floatPattern 15s ease-in-out infinite, 
                               scaleOnScroll 1.5s ease-out forwards;
                  }
                  
                  .dots-image-animation {
                    animation: pulseOnce 1.5s ease-out forwards;
                  }
                `}</style>
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/footer-dots.svg"
                  alt="Background pattern"
                  fill
                  className={`object-contain ${isVisible ? 'dots-image-animation' : ''}`}
                />
              </div>

              {/* FCS Logo */}
              <div className="mb-8 z-10 flex flex-col gap-4 bg-black p-3">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/Untitled-design-29.png"
                  alt="Finolity Consultancy Services"
                  width={190}
                  height={100}
                  className={`object-contain transition-all duration-700 ease-out ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                />
                {/* Schedule Button */}
                <a 
                  href="#" 
                  className={`bg-red-600 text-xs hover:bg-red-700 hover:scale-105 text-white py-2 px-6 rounded text-center z-10 transition-all duration-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modernized White Footer Section with Scroll Animation */}
      <div 
        id="animated-footer" 
        className="bg-gradient-to-r from-gray-50 to-white py-8 shadow-inner transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Side - Clutch Reviews */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="mr-6 flex flex-col items-center md:items-start">
                <p className="text-xs text-gray-500 font-medium mb-1">REVIEWED ON</p>
                <div className="relative group">
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/clutch-logo.svg"
                    alt="Clutch"
                    width={100}
                    height={30}
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    } group-hover:scale-105`}
                  />
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    <span className="text-red-600 font-bold">2K+</span> REVIEWS
                  </p>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 text-yellow-500 transition-all duration-300 hover:scale-110 hover:text-yellow-400 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Middle - Address and Contact */}
            <div className={`flex flex-col items-center space-y-2 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center text-gray-700 font-medium">
                <MapPin className="w-4 h-4 mr-2 text-red-600" />
                <p>R-7 Street, Yamuna Nagar, Haryana 135001</p>
              </div>
              <div className="flex space-x-6 mt-2">
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-red-600" />
                  <p>0612-2500-971</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-red-600" />
                  <p>connect@finolity.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              {[
                { label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { label: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                { label: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { label: "Medium", path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.139.195-.335.162-.525v-5.304c.015-.192-.045-.384-.167-.53l-1.06-1.399v-.201h3.569l2.792 6.575h.081l2.731-6.575h3.393v.201l-.899.982c-.077.089-.118.203-.115.32v6.417c-.007.118.033.234.115.32l.922 1.01v.202h-4.627v-.202l.967-1.026c.095-.095.142-.23.142-.366v-5.189l-3.152 7.745h-.406l-3.677-7.643v5.125c-.037.275.034.554.193.768l1.35 1.763v.202z" },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  aria-label={social.label}
                  className="transition-all duration-700 ease-out"
                  style={{ 
                    transitionDelay: `${300 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)'
                  }}
                >
                  <div className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 hover:scale-110">
                    <svg 
                      className="w-5 h-5 text-gray-700 hover:text-red-600 transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d={social.path} />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright and Links */}
          <div 
            className="mt-8 pt-6 border-t border-gray-200 transition-all duration-700 ease-out"
            style={{ 
              transitionDelay: '400ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 font-medium">© 2025 Finolity</p>
              
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Refund and Cancellation Policy",
                  "Blog",
                  "Case studies",
                  "Events",
                  "FAQ"
                ].map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className={`text-sm text-gray-500 hover:text-red-600 hover:underline transition-all duration-300 relative 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 
                    hover:after:w-full after:transition-all after:duration-300`}
                    style={{ 
                      transitionDelay: `${450 + index * 50}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}