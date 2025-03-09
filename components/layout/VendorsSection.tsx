'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ServiceItem {
  title: string;
  description: string;
  vendors: string[];
  logo?: string;
}

const services: ServiceItem[] = [
  {
    title: "Datacenter & Hosting",
    description: "Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build and operate.",
    vendors: ["Amazon Web Services (AWS)", "Microsoft Azure", "RackSpace", "OVH", "DigitalOcean", "Bluehost"],
    logo: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Microsoft-Azure-Logo.png"
  },
  {
    title: "Collaboration",
    description: "Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.",
    vendors: ["Exchange Online", "Sharepoint Online", "Defender for 365", "Autopilot", "Office Apps", "Windows 365"],
    logo: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Microsoft_365_logo.png"
  },
  {
    title: "Cloud Platform",
    description: "Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device, anytime, anywhere.",
    vendors: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Oracle Cloud", "IBM Cloud (Kyndryl)", "Linode (Akamai)"],
    logo: "https://tecnologia.vamtam.com/wp-content/uploads/2023/03/1200px-AmazonWebservices_Logo.png"
  }
];

// Floating orb component
const FloatingOrb = ({ delay, duration, size, color, top, left }: any) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${color}`}
      style={{ 
        width: size, 
        height: size, 
        top: `${top}%`, 
        left: `${left}%`,
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -40, 20, -10, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

export default function VendorsSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Pulse animation for the IT Challenges section
  const [pulseVisible, setPulseVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseVisible(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        {/* Floating orbs with animations */}
        <div className="absolute w-64 h-64 rounded-full bg-blue-600 mix-blend-screen blur-3xl opacity-50 top-1/4 right-2/3 animate-float-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-purple-700 mix-blend-screen blur-3xl opacity-50 bottom-1/3 left-3/4 animate-float-medium"></div>
        <div className="absolute w-80 h-80 rounded-full bg-yellow-500 mix-blend-screen blur-3xl opacity-30 top-2/3 right-1/3 animate-float-fast"></div>
        
        {/* Gradient grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Left-aligned header section */}
        <div className="max-w-5xl mb-14">
          <div className="inline-flex items-center mb-6">
            <span className="text-yellow-500 font-semibold text-sm tracking-wider">WHAT WE USE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bringing the best IT vendors to you</h2>
          <p className="text-gray-300 text-lg max-w-3xl">
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
          </p>
        </div>

        {/* Interactive tabs section */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center bg-gray-900/30 rounded-full px-6 py-3 backdrop-blur-sm">
            {/* Pulse animation */}
            <AnimatePresence>
              {pulseVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-yellow-500/10 rounded-full"
                />
              )}
            </AnimatePresence>
            <div className="flex items-center space-x-2">
              <span className="text-white">Your IT Challenges</span>
              <ArrowRight className="h-5 w-5 text-yellow-500" />
              <span className="text-yellow-500 font-medium">Our Premium Solutions</span>
            </div>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/20 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800/30">
              <div className="p-6">
                {/* Service icon */}
                <div className="mb-4">
                  {index === 0 && (
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div 
                  className="flex items-center text-gray-400 hover:text-white cursor-pointer group"
                  onClick={() => toggleService(index)}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2 group-hover:bg-gray-600">
                    <span className="text-xs">{expandedService === index ? '-' : '+'}</span>
                  </div>
                  <span>View more</span>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                {expandedService === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      {service.vendors.map((vendor, vIndex) => (
                        <motion.div 
                          key={vIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: vIndex * 0.05 }}
                          className="py-3 border-b border-gray-800"
                        >
                          <p className="text-gray-300">{vendor}</p>
                        </motion.div>
                      ))}
                      {service.logo && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-6"
                        >
                          <Image 
                            src={service.logo} 
                            alt={`${service.title} logo`} 
                            width={120} 
                            height={50} 
                            className="object-contain" 
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}