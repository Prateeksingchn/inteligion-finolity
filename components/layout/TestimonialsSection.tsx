'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Samriti Sharma",
    title: "Corporate Relation Manager, Finolity Consultancy Services",
    quote: "I've been a customer for more than a decade. Finolity is an example of the way Managed Services should be done. They do their very best to make sure you succeed. If there's an issue, they step in immediately. We will continue to be a customer for years to come.",
    image: "https://finolity.com/wp-content/uploads/2023/03/testimonial1.jpg", // Replace with actual image path
  },
  {
    name: "Shivam Rana",
    title: "CIO, Kailasa Pictures",
    quote: "Finolity has transformed our business processes and helped us achieve our goals efficiently. Their support is unparalleled.",
    image: "https://finolity.com/wp-content/uploads/2023/03/testimonial2.jpg", // Replace with actual image path
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 