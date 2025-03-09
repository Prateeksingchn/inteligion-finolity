'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

// Floating image component
const FloatingImage = ({ src, size, position, delay, duration, rotation = 0 }) => {
  return (
    <motion.div 
      className="absolute z-0"
      style={{
        top: position.top,
        left: position.left,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, y: 20, rotate: rotation }}
      animate={{ 
        opacity: [0, 1, 0.8, 1, 0],
        y: [20, 0, -10, 0, 20],
        rotate: [rotation, rotation + 5, rotation - 3, rotation + 2, rotation],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image 
        src={src}
        alt="Decoration"
        width={size}
        height={size}
        className="object-contain"
      />
    </motion.div>
  );
};

// Award card component with scroll-triggered animation
const AwardCard = ({ title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ 
        duration: 0.5, 
        delay: 0.2 * index,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <motion.div 
        className="absolute -left-4 -top-4 w-2 h-2 rounded-full bg-red-500 opacity-0"
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ 
          duration: 2, 
          delay: 1 + (index * 0.5), 
          repeat: 1, 
          repeatDelay: 10 
        }}
      />
      
      <h3 className="text-4xl font-bold text-white mb-4 transition-colors group-hover:text-gray-200">{title}</h3>
      <p className="text-gray-400 text-xs leading-tight">
        {description}
      </p>
    </motion.div>
  );
};

export default function RecognitionSection() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  
  const leftCardControls = useAnimation();
  const rightCardControls = useAnimation();
  const isLeftCardInView = useInView(leftCardRef, { once: true, amount: 0.3 });
  const isRightCardInView = useInView(rightCardRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isLeftCardInView) {
      leftCardControls.start("visible");
    }
    if (isRightCardInView) {
      rightCardControls.start("visible");
    }
  }, [leftCardControls, rightCardControls, isLeftCardInView, isRightCardInView]);

  return (
    <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden min-h-screen md:min-h-[150vh] bg-white">
      {/* Background images from public/recognition */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Cloud images - made responsive by using relative positioning based on screen size */}
        <FloatingImage 
          src="/recognition/cloud4.png" 
          size={70} 
          position={{ top: '10%', left: '5%' }} 
          delay={0} 
          duration={30} 
          rotation={-5}
        />
        <FloatingImage 
          src="/recognition/cloud5.png" 
          size={40} 
          position={{ top: '3%', left: '42%' }} 
          delay={5} 
          duration={35} 
          rotation={5}
        />
        <FloatingImage 
          src="/recognition/cloud6.png" 
          size={50} 
          position={{ top: '69%', left: '10%' }} 
          delay={10} 
          duration={40} 
          rotation={-8}
        />
        <FloatingImage 
          src="/recognition/cloud7.png" 
          size={60} 
          position={{ top: '55%', left: '92%' }} 
          delay={15} 
          duration={38} 
          rotation={10}
        />
        <FloatingImage 
          src="/recognition/cloud8.png" 
          size={50} 
          position={{ top: '80%', left: '70%' }} 
          delay={20} 
          duration={42} 
          rotation={-3}
        />
        
        {/* Additional cloud images from recognition folder */}
        <FloatingImage 
          src="/recognition/cloud1.png" 
          size={40} 
          position={{ top: '16%', left: '48%' }} 
          delay={7} 
          duration={32} 
          rotation={8}
        />
        <FloatingImage 
          src="/recognition/cloud2.png" 
          size={50} 
          position={{ top: '90%', left: '13%' }} 
          delay={12} 
          duration={36} 
          rotation={-6}
        />
        <FloatingImage 
          src="/recognition/cloud3.png" 
          size={70} 
          position={{ top: '28%', left: '62%' }} 
          delay={17} 
          duration={34} 
          rotation={4}
        />
        
        {/* Achievement images */}
        <FloatingImage 
          src="/recognition/achievement.png" 
          size={60} 
          position={{ top: '7%', left: '70%' }} 
          delay={8} 
          duration={25} 
          rotation={15}
        />
        <FloatingImage 
          src="/recognition/achievement2.png" 
          size={60} 
          position={{ top: '36%', left: '86%' }} 
          delay={12} 
          duration={28} 
          rotation={-10}
        />
        <FloatingImage 
          src="/recognition/achievement.png" 
          size={70} 
          position={{ top: '75%', left: '25%' }} 
          delay={18} 
          duration={32} 
          rotation={8}
        />
        <FloatingImage 
          src="/recognition/achievement2.png" 
          size={55} 
          position={{ top: '70%', left: '47%' }} 
          delay={22} 
          duration={30} 
          rotation={-12}
        />
        <FloatingImage 
          src="/recognition/achievement.png" 
          size={65} 
          position={{ top: '10%', left: '27%' }} 
          delay={25} 
          duration={35} 
          rotation={20}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Premium section title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-2xl sm:text-3xl font-light text-gray-600 mb-10 md:mb-16 tracking-wider"
        >
          <span className="inline-block relative">
            RECOGNITION & ACHIEVEMENTS
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-px bg-red-500" 
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>
        
        <div className="relative flex flex-col md:block" ref={containerRef}>
          {/* Left Card - Black with Awards */}
          <motion.div 
            ref={leftCardRef}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={leftCardControls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-black text-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[40px] w-full md:w-[48%] md:h-[560px] overflow-hidden relative backdrop-blur-sm shadow-xl"
          >
            {/* Premium glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-5"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Animated accent line */}
            <motion.div 
              className="absolute top-0 left-0 h-1 w-16 sm:w-24 bg-red-600"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={leftCardControls}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 md:mb-24"
              >
                Organizations<br />
                recognized our<br />
                work
              </motion.h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 mb-12 sm:mb-16 md:mb-24">
                <AwardCard 
                  title="Forbes" 
                  description="Forbes Member Council 2022" 
                  index={0}
                />
                <AwardCard 
                  title="Clutch" 
                  description="Top App Development Company in India 2023" 
                  index={1}
                />
                <AwardCard 
                  title="Google" 
                  description="Developers Certified Agency" 
                  index={2} 
                />
              </div>

              <motion.button 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={leftCardControls}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "#b91c1c",
                  boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-normal inline-flex items-center gap-2 group transition-all"
              >
                <span>View more awards</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </motion.svg>
              </motion.button>
            </div>
            
            {/* Modern circular accent detail */}
            <motion.div 
              className="absolute bottom-6 right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full border border-gray-700 opacity-40"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Premium inner accent ring */}
            <motion.div 
              className="absolute bottom-6 right-6 w-8 sm:w-12 h-8 sm:h-12 rounded-full border border-red-700 opacity-0"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.5, 1], 
                opacity: [0, 0.6, 0] 
              }}
              transition={{ 
                delay: 1.5, 
                duration: 2,
                repeat: 1,
                repeatDelay: 10,
                ease: "easeOut" 
              }}
            />
          </motion.div>
          
          {/* Right Card - Beige with Yourstory */}
          <motion.div 
            ref={rightCardRef}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={rightCardControls}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="bg-[#f8ecd8] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[40px] w-full md:w-[48%] mt-6 md:mt-0 md:absolute md:top-[50%] md:right-0 md:transform md:-translate-y-1/4 relative overflow-hidden md:h-[560px] shadow-xl"
          >
            {/* Premium subtle shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            <div className="relative z-10 max-w-md">
              <motion.h3 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={rightCardControls}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-[#0f1033] text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 md:mb-32 leading-[1.2]"
              >
                Finolity has been<br />
                recognized as a<br />
                Leader in the 2022<br />
                Yourstory®
              </motion.h3>
              
              <motion.a 
                href="#" 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                initial="hidden"
                animate={rightCardControls}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-red-600 font-medium text-sm inline-flex items-center gap-2 group hover:text-red-700 transition-colors"
                whileHover={{ 
                  x: 3,
                  textShadow: "0 0 5px rgba(220, 38, 38, 0.3)" 
                }}
              >
                <span>View the report</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </motion.svg>
              </motion.a>
            </div>
            
            {/* Original dotted shape image with animation - made responsive */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.9, rotate: -5 },
                visible: { opacity: 1, scale: 1, rotate: 0 }
              }}
              initial="hidden"
              animate={rightCardControls}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute bottom-0 right-0 w-40 sm:w-48 md:w-auto"
            >
              <Image 
                src="https://finolity.com/wp-content/uploads/2023/03/shape-dots-black.svg"
                alt="Dotted Shape"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>

            {/* Animated accent line */}
            <motion.div 
              className="absolute top-6 right-6 h-1 w-12 sm:w-16 bg-red-600"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Decorative corner flourish */}
            <motion.div 
              className="absolute top-6 left-6 w-6 sm:w-8 h-6 sm:h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-red-600 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.6, duration: 0.4 }}
              />
              <motion.div 
                className="absolute top-0 left-0 w-1 h-full bg-red-600 origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.7, duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}