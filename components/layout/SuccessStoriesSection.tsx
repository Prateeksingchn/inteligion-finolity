'use client';

import React from 'react';
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
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-2">
          <span className="uppercase text-xs font-bold text-red-600 tracking-wider">
            WHERE WE DO
          </span>
        </div>
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                background: "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
              }}
            >
              <div className="rounded-t-lg overflow-hidden m-4">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={600}
                  height={350}
                  className="object-cover w-full h-56 rounded-lg"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  {story.categories.map((category, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-gray-300 mx-1">•</span>}
                      <span className="text-xs text-gray-400 uppercase">
                        {category}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800 leading-tight">{story.title}</h3>
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-black text-sm font-medium transition-colors"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}