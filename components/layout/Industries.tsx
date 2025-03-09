'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface IndustryItem {
    image: string;
    title: string;
}

const industries: IndustryItem[] = [
    {
        image: "https://finolity.com/wp-content/uploads/2024/08/finolity-industry-and-manufacuturing-300x300.jpg",
        title: "Industry & Manufacturing",
    },
    {
        image: "https://finolity.com/wp-content/uploads/2023/03/gettyimages-1385683178-612x612-1-300x300.jpg",
        title: "Transportation & Logistics",
    },
    {
        image: "https://finolity.com/wp-content/uploads/2023/03/gettyimages-1156457427-2048x2048-1-300x300.jpg",
        title: "Healthcare",
    },
    {
        image: "https://finolity.com/wp-content/uploads/2023/03/gettyimages-173289625-2048x2048-1-300x300.jpg",
        title: "Banks & Insurance",
    },
    {
        image: "https://finolity.com/wp-content/uploads/2023/03/gettyimages-1375143131-2048x2048-1-300x300.jpg",
        title: "Consulting Providers",
    },
    {
        image: "https://finolity.com/wp-content/uploads/2023/03/gettyimages-1429906360-2048x2048-1-300x300.jpg",
        title: "Non-Profit",
    },
];

const IndustryBadges = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    return (
        <motion.div
            className="max-w-[910px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Mobile view - List style */}
            <div className="lg:hidden space-y-4">
                {industries.map((industry, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="relative h-12 w-12 flex-shrink-0">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        width={48}
                                        height={48}
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="font-semibold text-[16px] text-gray-800">
                                    {industry.title}
                                </h3>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop view - Grid style (existing) */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        className="flex items-center bg-[#F5F5F5] rounded-full h-16 cursor-pointer"
                    >
                        <div className="relative h-14 w-14 mr-4 overflow-hidden">
                            <Image
                                src={industry.image}
                                alt={industry.title}
                                width={55}
                                height={55}
                                className="object-cover rounded-full"
                            />
                        </div>
                        <h3 className="font-bold text-[16px] text-gray-800 w-auto pr-2">
                            {industry.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default function Industries() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Use once: true to ensure animations only trigger once
    const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
    const contentControls = useAnimation();

    // For scrolling animations - modified to start scale effect earlier
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Transform values based on scroll position - adjusted to start earlier
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    // Preload video and set up hover effect
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.addEventListener('loadeddata', () => {
                setVideoLoaded(true);
            });
        }
    }, []);

    // Handle video playback on hover
    useEffect(() => {
        if (videoRef.current && videoLoaded) {
            if (showVideo) {
                videoRef.current.play().catch(err => console.error("Video play error:", err));
            } else {
                videoRef.current.pause();
            }
        }
    }, [showVideo, videoLoaded]);

    // Trigger animations when sections come into view
    useEffect(() => {
        if (isContentInView) {
            contentControls.start("visible");
        }
    }, [isContentInView, contentControls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        },
        hover: {
            y: -10,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.section
            className="w-full py-14 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>

            {/* Hero banner with improved video hover effect */}
            <motion.div
                ref={heroRef}
                className="w-full relative rounded-3xl pt-14 px-6 md:px-44 pb-20 mb-20"
                style={{
                    scale: heroScale,
                    opacity: heroOpacity
                }}
            >
                <motion.div
                    className="relative overflow-hidden rounded-[30px] shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setShowVideo(true)}
                    onHoverEnd={() => setShowVideo(false)}
                >
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

                    {/* Hero text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-10 md:p-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="max-w-xl"
                        >
                        </motion.div>
                    </div>

                    {/* Image/Video container with improved transitions */}
                    <div className="relative w-full h-[200px] lg:h-[600px] z-10">
                        <motion.div
                            animate={{ opacity: showVideo && videoLoaded ? 0 : 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/challenges.jpg"
                                alt="IT Challenges"
                                className="w-full h-full object-cover"
                                width={1920}
                                height={600}
                                priority
                            />
                        </motion.div>

                        {/* Video with improved loading and playback */}
                        <motion.div
                            animate={{ opacity: showVideo && videoLoaded ? 1 : 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                                preload="auto"
                                loop
                            >
                                <source src="/working.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Redesigned Clutch badge */}
                <div
                    className="absolute bottom-20 right-8 md:right-[270px] z-20"
                >
                    <div className="flex items-center justify-center mb-3">
                        <div className="relative h-6 md:h-12 md:w-36 w-10">
                            <Image
                                src="https://finolity.com/wp-content/uploads/2023/03/clutch-logo.png"
                                alt="Clutch Logo"
                                width={144}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Content section */}
            <motion.div
                ref={contentRef}
                className="max-w-[955px] mx-auto px-6"
                variants={contentVariants}
                initial="hidden"
                animate={contentControls}
            >
                <motion.div variants={contentVariants} className="mb-10">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            variants={itemVariants}
                            className="bg-[#F5F5F5] text-red-600 text-xs font-semibold py-2 px-4 rounded-xl mb-5 border border-red-600/20"
                        >
                            HOW WE DO
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold relative max-w-3xl mb-12 px-4 md:px-0"
                        >
                            <span className="relative inline-block">
                                Solving IT challenges
                            </span>{" "}
                            in every industry, every day.
                        </motion.h1>
                    </div>
                </motion.div>

                {/* Industry badges component */}
                <IndustryBadges />

                {/* View All Industries link */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center md:justify-start mt-8 mb-20"
                >
                    <a
                        href="#"
                        className="group flex items-center text-black text-base font-medium border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors"
                    >
                        View All Industries
                        <span className="ml-2">
                            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}