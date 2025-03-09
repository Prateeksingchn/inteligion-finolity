'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const stories = [
  {
    title: "How Finolity's Consultation Revolutionized Unacademy's Success",
    categories: ["CASE STUDIES", "DIGITAL TRANSFORMATION", "IT CONSULTING"],
    image: "https://finolity.com/wp-content/uploads/2024/08/leaders-1536x886.webp",
  },
  {
    title: "Finolity boosts MM Deemed University with SOLIDWORKS, Smart Manufacturing Lab.",
    categories: ["CLOUD HOSTING"],
    image: "https://finolity.com/wp-content/uploads/2023/03/Untitled-design-3.png",
  },
  {
    title: "Unlocking Success: The Crucial Role of Design in the Digital Era with Finolity",
    categories: ["IT CONSULTING"],
    image: "https://finolity.com/wp-content/uploads/2023/03/Untitled-design-4.png",
  },
];

export default function SuccessStoriesSection() {
  const scrollContainerRef = useRef(null);

  // Optional: Add scroll buttons functionality
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-2">
          <span className="uppercase text-xs font-bold text-red-600 tracking-wider">
            WHERE WE DO
          </span>
        </div>
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
          
          {/* Navigation arrows - visible only on medium+ screens */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef} 
          className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center px-2 w-full sm:w-80 md:w-96"
            >
              <div 
                className="rounded-2xl overflow-hidden border border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300 h-full"
                style={{
                  background: "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
                }}
              >
                <div className="rounded-t-lg overflow-hidden mx-4 mt-4">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-52 rounded-lg"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap">
                    {story.categories.map((category, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span className="text-gray-300 mx-1">•</span>}
                        <span className="text-[11px] tracking-tighter text-gray-400 uppercase">
                          {category}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 leading-tight">{story.title}</h3>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-black text-xs font-medium transition-colors"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add some extra padding at the end to ensure the last item can be centered */}
          <div className="flex-shrink-0 w-4"></div>
        </div>
        
        {/* Scroll indicator (optional) - only on mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-1">
            {stories.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-600' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}