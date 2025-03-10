'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Grid Lines Background - Improved Visibility */}
      <div className="absolute inset-0 z-0">
        {/* Dots Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(176, 190, 255, 0.4) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 210, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 210, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-orange-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <motion.div 
          className="flex justify-center mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <span className="text-xs sm:text-sm font-medium text-orange-600">INTELION IT SERVICES</span>
          </div>
        </motion.div>

        {/* Centered Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-10 md:mb-16">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We manage your <span className="text-navy-900 relative">
              IT
              <motion.span 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-blue-500/20" 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.span>
            </span>,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            so you can manage
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            your <span className="text-orange-500 relative">
              business
              <motion.span 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-orange-500/20" 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              ></motion.span>
            </span>.
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take charge of your business continuity with innovative IT solutions
            that scale with your enterprise needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-medium text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 h-auto rounded-full shadow-md hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-black text-gray-100 hover:bg-gray-800 border-gray-200 font-medium text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 h-auto rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
            >
              Services
            </Button>
          </motion.div>
        </div>
        
        {/* Featured Image Below with Enhanced Animation */}
        <motion.div 
          className="relative w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 50
          }}
        >
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
            {/* Enhanced gradient overlay on image */}
            <div className="absolute z-10"></div>
            
            {/* Image container with improved parallax/floating effect */}
            <motion.div 
              className="relative aspect-[16/9]"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,  
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              <Image
                src="https://finolity.com/wp-content/uploads/2024/02/White-Simple-Woman-Photo-Sale-or-Business-Womens-Beauty-Facebook-Cover.jpg" 
                alt="Intelion Team"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}