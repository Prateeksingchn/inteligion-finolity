'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function MetricsAndServices() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: custom * 0.1,
                ease: "easeOut"
            }
        })
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: custom * 0.1,
                type: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <div className='flex flex-col items-center justify-center w-full border-t-4 border-gray-200'>
            {/* Metrics Section*/}
            <section className="py-12 w-full mb-12 relative overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center">
                        {/* Clutch Reviews - Enhanced with card design */}
                        <motion.div
                            className="p-[17px] hover:shadow-md transition-all duration-300  border-r-4 border-gray-200"
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={scaleIn}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-start">
                                <div className="flex flex-col mb-2 md:mb-0">
                                    <div className="text-xs text-gray-600 uppercase font-medium">REVIEWED ON</div>
                                    <span className="font-bold text-2xl text-gray-800">Clutch</span>
                                </div>
                                <div className="flex flex-col items-start md:items-start md:ml-3">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <svg key={star} className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="mt-2 text-xs text-gray-600 font-medium">2K+ REVIEWS</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Metrics Cards - redesigned with consistent styling */}
                        {[
                            { value: "08", unit: "Years", description: "Proven Track Record" },
                            { value: "98", unit: "%", description: "Customer Satisfaction" },
                            { value: "470+", unit: "Projects", description: "We Have Completed" },
                            { value: "3", unit: "Mins", description: "Average Answer Time" }
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 hover:shadow-md transition-all duration-300 border-r-4 border-gray-200 ${index === 3 ? 'border-r-0' : ''}`}
                                custom={index + 2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={scaleIn}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="flex items-baseline mb-1">
                                    <span className="text-3xl font-bold text-gray-800">{metric.value}</span>
                                    <span className="ml-1 text-xl font-medium text-gray-800">{metric.unit}</span>
                                </div>
                                <div className="text-sm text-gray-600">{metric.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* "What We Do" Section */}
            <motion.section
                className="py-10 bg-black relative overflow-hidden w-[85%] rounded-lg shadow-xl mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {/* Enhanced dot pattern with animation */}
                <motion.div
                    className="absolute -right-20 top-24 h-full w-[600px]"
                    animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                        opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src="https://finolity.com/wp-content/uploads/2023/03/shape-dots.svg"
                        alt="Dot Pattern"
                        width={550}
                        height={550}
                        className="h-full"
                    />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-0"></div>

                <div className="max-w-auto mx-auto px-12 relative z-10 flex flex-col justify-between min-h-[280px]">
                    {/* Top heading with animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-yellow-500 uppercase font-bold text-xs tracking-wide mb-1">WHAT WE DO</h3>
                        {/* <div className="w-12 h-1 bg-red-600 rounded-full"></div> */}
                    </motion.div>

                    {/* Bottom heading with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h2 className="text-5xl font-bold text-white leading-tight">
                            Simplifying IT<br />
                            <span className="relative">
                                for a complex world.
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-1 bg-red-600/80"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                ></motion.span>
                            </span>
                        </h2>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Grid*/}
            <section className="py-16 px-4 w-[90%] bg-white rounded-xl mb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "https://finolity.com/wp-content/uploads/2023/12/Untitled-design-4.png",
                                title: "Cost-effectiveness",
                                description: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
                                iconSize: 50,
                                color: "blue"
                            },
                            {
                                icon: "https://finolity.com/wp-content/uploads/2023/12/innovative.png",
                                title: "Innovative Technology",
                                description: "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
                                iconSize: 75,
                                color: "orange"
                            },
                            {
                                icon: "https://finolity.com/wp-content/uploads/2023/12/industries.png",
                                title: "Industry Expertise",
                                description: "We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.",
                                iconSize: 75,
                                color: "red"
                            },
                            {
                                icon: "https://finolity.com/wp-content/uploads/2023/12/industries-1.png",
                                title: "Scalability",
                                description: "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
                                iconSize: 75,
                                color: "green"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                custom={index + 1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeInUp}
                                className="group"
                            >
                                <div className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 group-hover:border-gray-200 h-full flex flex-col">
                                    <div className="mb-6 relative">
                                        <div className={`absolute -inset-1 rounded-lg bg-${service.color}-100/30 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                                        <div className="relative">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={service.iconSize}
                                                height={service.iconSize}
                                                className="transform group-hover:scale-110 transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}