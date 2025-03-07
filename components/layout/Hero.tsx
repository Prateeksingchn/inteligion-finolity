'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Grid Lines Background - Improved Visibility */}
      <div className="absolute inset-0 z-0">
        {/* Dots Pattern - Made More Visible */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(176, 190, 255, 0.4) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        {/* Grid Lines - Increased Opacity for Better Visibility */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 210, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 210, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-200 bg-white shadow-sm">
            <span className="text-sm font-medium text-orange-600">INTELION IT SERVICES</span>
          </div>
        </motion.div>

        {/* Centered Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We manage your <span className="text-navy-900">IT</span>,
            <br />
            so you can manage
            <br />
            your <span className="text-orange-500">business</span>.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take charge of your business continuity with innovative IT solutions
            that scale with your enterprise needs.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-5 py-2 h-auto rounded-full shadow-md shadow-red-600/10 transition-all">
              Schedule a Free Consultation
            </Button>
            
            <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-50 border-gray-200 font-medium text-sm px-5 py-2 h-auto rounded-full transition-all">
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
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Enhanced gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent z-10"></div>
            
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
            
            {/* Stats cards positioned over the image with improved animations */}
            <motion.div 
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20 border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">24/7 Support</p>
                  <p className="text-xs text-gray-500">Always available for you</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20 border border-gray-200"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Security First</p>
                  <p className="text-xs text-gray-500">Enterprise-grade protection</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Testimonial below image with improved animation */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto -mt-10 relative z-30 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-white">
                  <span className="text-indigo-600 text-xs font-bold">AC</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                  <span className="text-blue-600 text-xs font-bold">TS</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white">
                  <span className="text-orange-600 text-xs font-bold">JD</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">"Intelion transformed our IT infrastructure and saved us countless hours managing tech problems."</p>
                <p className="text-xs font-medium text-gray-800 mt-1">Trusted by 500+ businesses worldwide</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}