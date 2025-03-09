'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    title: "How Finolity's Consultation Revolutionized Unacademy's Success",
    description: "Case Studies, Digital Transformation, IT Consulting",
    image: "https://finolity.com/wp-content/uploads/2024/08/leaders-1536x886.webp",
  },
  {
    title: "Finolity boosts MM Deemed University with SOLIDWORKS, Smart Manufacturing Lab.",
    description: "Cloud Hosting",
    image: "https://finolity.com/wp-content/uploads/2023/03/Untitled-design-3.png",
  },
  {
    title: "Unlocking Success: The Crucial Role of Design in the Digital Era with Finolity",
    description: "IT Consulting",
    image: "https://finolity.com/wp-content/uploads/2023/03/Untitled-design-4.png",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={story.image}
                alt={story.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-500 text-sm">{story.description}</p>
                <a href="#" className="text-red-600 hover:underline mt-2 inline-block">
                  Learn more
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 