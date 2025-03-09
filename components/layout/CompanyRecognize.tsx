'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function CompanyRecognize() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation styles for each logo with different directions
  const logoAnimations = [
    // First row (with empty cell)
    { transform: 'scale(0) rotate(-10deg)', position: 'top-right' },  // Empty cell
    { transform: 'scale(0) rotate(5deg)', position: 'top' },          // Microsoft
    { transform: 'scale(0) rotate(-5deg)', position: 'top-left' },    // Cisco
    
    // Second row
    { transform: 'scale(0) rotate(10deg)', position: 'right' },       // Lenovo
    { transform: 'scale(0) rotate(-8deg)', position: 'center' },      // Finolity
    { transform: 'scale(0) rotate(8deg)', position: 'left' },         // Dell
    
    // Third row
    { transform: 'scale(0) rotate(-12deg)', position: 'bottom-right' }, // Intel
    { transform: 'scale(0) rotate(12deg)', position: 'bottom' },        // Ubiquiti
    { transform: 'scale(0) rotate(-7deg)', position: 'bottom-left' }    // HP
  ];
  
  // Generate unique entrance animations for each logo
  const getEntranceStyle = (index: number, delay: number): React.CSSProperties => {
    const animation = logoAnimations[index];
    
    // Different entrance origins based on position
    let translateX = '0';
    let translateY = '0';
    
    if (animation.position.includes('top')) translateY = '-50px';
    if (animation.position.includes('bottom')) translateY = '50px';
    if (animation.position.includes('left')) translateX = '-50px';
    if (animation.position.includes('right')) translateX = '50px';
    
    return {
      transitionDelay: `${300 + (delay * 150)}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible 
        ? 'scale(1) rotate(0) translate(0, 0)' 
        : `${animation.transform} translate(${translateX}, ${translateY})`,
      transition: 'opacity 800ms, transform 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)'
    };
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side content with animation */}
          <div 
            className={`lg:w-1/2 flex flex-col items-start justify-center transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <div 
              className="mb-2 text-gray-700 uppercase text-xs tracking-wider font-medium bg-gray-100 inline-block px-3 py-1 rounded-md"
              style={{ 
                transitionDelay: '200ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 700ms, transform 700ms'
              }}
            >
              WHERE WE DO
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
              style={{ 
                transitionDelay: '400ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 700ms, transform 700ms'
              }}
            >
              Recognized by the best
            </h2>
            <p 
              className="text-gray-700 max-w-lg text-xl"
              style={{ 
                transitionDelay: '600ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 700ms, transform 700ms'
              }}
            >
              The company needed to complete a complex migration on a tight deadline to avoid millions of 
              dollars in post-contract fees and fines.
            </p>
          </div>
          
          {/* Right side partner logos with individual animation */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
              {/* Logo positions with animations */}
              <div className="flex items-center justify-center">
                {/* Empty cell at top-left */}
              </div>
              
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(1, 1)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/ND-ty6SkWNaiYy3I6E9J3lgFJJIeuHzzcdx74aHvaQ-9PFabsPmUhe_uKKqItjbtrcbw.png" 
                    alt="Microsoft Gold Partner"
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(2, 2)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/kisspng-microsoft-certified-partner-microsoft-partner-netw-partner-5b13fff40de7b5.358475291528037364057-300x77.png" 
                    alt="Cisco Partner"
                    width={180}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Middle row */}
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(3, 3)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/LenovoBP-POS-color.png" 
                    alt="Lenovo Business Partner"
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(4, 4)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2024/11/Untitled-design-28-300x164.png" 
                    alt="Finolity Consultancy Services"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(5, 5)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/5b7d7d3778a94.png" 
                    alt="Dell PartnerDirect Registered"
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Bottom row */}
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(6, 6)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/hewlett-packard-enterprise-silver-partner-vector-logo.png" 
                    alt="Intel Technology Provider"
                    width={90}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(7, 7)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/pngfind.com-registered-logo-png-2230159-300x103.png" 
                    alt="Ubiquiti Networks"
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div style={getEntranceStyle(8, 8)}>
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/url.png" 
                    alt="Hewlett Packard Silver Partner"
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}