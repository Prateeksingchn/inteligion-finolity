'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Shivam Rana",
    title: "CIO, Kailasa Pictures",
    quote: "I've been a customer for more than a decade. Finolity is an example of the way Managed Services should be done. They do their very best to make sure you succeed. If there's an issue, they step in immediately. We will continue to be a customer for years to come.",
    logo: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo-R.svg"
  },
  {
    id: 2,
    name: "Prateek Kashyap",
    title: "Director, Pyramidfabcon Eventmanager Pvt Ltd.",
    quote: "Finolity implemented such a powerful platform that we had no break in service when our employees had to work from home due to the COVID-19 pandemic. We weren't concerned about how to shift to a remote working environment because Integris facilitated a seamless transition.",
    logo: "https://finolity.com/wp-content/uploads/2023/12/Untitled-design-6.png"
  },
  {
    id: 3,
    name: "Abhishek Tiwari",
    title: "Partner & CTO, Skillalgo",
    quote: "Finolity has been an outstanding partner. Their team is professional, knowledgeable and customer-service driven. Finolity's proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.",
    logo: "https://finolity.com/wp-content/uploads/2023/12/Untitled-design-7.png"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  // Enhanced animation variants for text
  const textVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };

  // Render stars for rating
  const renderStars = (rating, color = "#FF5A5F", size = 16) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={size} fill={color} color={color} />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star size={size} color="#E5E7EB" />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
              <Star size={size} fill={color} color={color} />
            </div>
          </div>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} size={size} color="#E5E7EB" />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-auto md:h-auto lg:h-[80vh]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 md:gap-12 lg:gap-16 h-full">
          {/* Left side with fixed testimonial image - responsive width */}
          <motion.div
            className="w-full h-64 sm:h-96 md:h-[400px] lg:h-full lg:w-2/5 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Fixed main image */}
              <div className="absolute inset-0 bg-gray-800">
                <Image
                  src="https://finolity.com/wp-content/uploads/2024/01/Untitled-design-1.png"
                  alt="Testimonial"
                  fill
                  priority
                  className="object-cover opacity-90"
                />

                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              </div>

              {/* Fixed text overlay - only showing Samriti Sharma info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10">
                <p className="font-medium text-lg sm:text-xl text-white">
                  Samriti Sharma on GeeksforGeeks
                </p>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">Corporate Relation Manager, Finolity Consultancy Services</p>
              </div>
            </div>
          </motion.div>

          {/* Right side with testimonial text - responsive width */}
          <div className="w-full lg:w-3/5 h-full flex flex-col justify-center py-6 md:py-8 mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex mb-4 md:mb-8"
              >
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <Image
                    src={currentTestimonial.logo}
                    alt={`${currentTestimonial.source} Logo`}
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="min-h-48 sm:min-h-56 md:min-h-64">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 }
                  }}
                >
                  <blockquote className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-light mb-6 md:mb-10 leading-relaxed italic">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center mt-6 md:mt-12 border-l-4 border-red-500 pl-4">
                    <p className="font-bold text-gray-800 text-sm sm:text-base">{currentTestimonial.name}</p>
                    <span className="mx-2 text-gray-400">|</span>
                    <p className="text-gray-600 text-sm sm:text-base">{currentTestimonial.title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Updated reviews section with responsive design */}
            <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-4 mb-6 md:mb-0">
                <motion.button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Previous testimonial"
                  whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft size={18} className="sm:hidden" />
                  <ArrowLeft size={20} className="hidden sm:block" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Next testimonial"
                  whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={18} className="sm:hidden" />
                  <ArrowRight size={20} className="hidden sm:block" />
                </motion.button>
              </div>

              {/* Reviews section with responsive design */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                <div className="flex items-start sm:items-center">
                  <div className="mr-3">
                    <div className="text-gray-700 text-xs sm:text-sm font-medium">REVIEWED ON</div>
                    <div className="flex items-center mt-1">
                      <Image
                        src="https://finolity.com/wp-content/uploads/2023/03/clutch-logo.svg"
                        alt="Clutch"
                        width={70}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex">
                      {renderStars(5, "#FF5A5F", 16)}
                    </div>
                    <div className="text-gray-600 mt-2 sm:mt-3 text-xs font-medium">2K+ REVIEWS</div>
                  </div>
                </div>

                {/* Google reviews section */}
                <div className="flex items-center mt-4 sm:mt-0">
                  <Image
                    src="https://finolity.com/wp-content/uploads/2023/03/Google_22G22_Logo.svg"
                    alt="Google"
                    width={35}
                    height={50}
                    className="object-contain"
                  />
                  <div className="flex flex-col items-start ml-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 px-1 py-[2px] rounded-md">
                        <span className="text-[12px] sm:text-[13px] font-bold">4.9</span>
                      </div>
                      <div className="flex">
                        {renderStars(4.5, "#FFB400", 16)}
                      </div>
                    </div>
                    <div className="text-gray-600 mt-1 text-xs">CUSTOMER REVIEWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}