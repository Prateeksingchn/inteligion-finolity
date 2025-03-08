'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface SolutionItem {
  image: string;
  title: string;
  description: string;
}

const solutions: SolutionItem[] = [
  {
    image: "/solution/managed.gif",
    title: "Managed Services",
    description:
      "Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.",
  },
  {
    image: "/solution/consulting.gif",
    title: "IT Consulting & Advisory",
    description:
      "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.",
  },
  {
    image: "/solution/cyber-security.gif",
    title: "Cyber Security",
    description:
      "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
  },
  {
    image: "/solution/web-development.gif",
    title: "Web Development",
    description:
      "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
  },
  {
    image: "/solution/mobile-development.gif",
    title: "Mobile Development",
    description:
      "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
  },
  {
    image: "/solution/cloud-services.gif",
    title: "Cloud Services",
    description:
      "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
  },
];

export default function Solution() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="space-y-2 mb-8 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-black text-xs font-bold tracking-wider uppercase"
          >
            HOW WE DO
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-red-600 text-4xl font-bold"
          >
            Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className={`h-full border-0 rounded-none bg-white overflow-hidden transition-all duration-300 ${
                hoveredIndex === index ? 'shadow-2xl translate-y-[-8px]' : 'shadow-lg'
              }`}>
                <div className="p-8">
                  <div className={`mb-6 transform transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-100' : ''
                  }`}>
                    <img src={solution.image} alt={solution.title} className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">{solution.description}</p>
                  <div className="pt-5 mt-2 border-t-2 border-gray-200">
                    <a 
                      href="#" 
                      className="group inline-flex items-center text-red-600 font-medium text-sm"
                    >
                      Learn more
                      <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 flex justify-center"
        >
          <Button className="bg-black hover:bg-red-600 text-white px-8 py-6 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center">
            View All Solutions
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}