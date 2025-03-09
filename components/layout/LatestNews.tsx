'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NewsItem {
    image: string;
    title: string;
    date: string;
    source: string;
    link: string;
}

const newsItems: NewsItem[] = [
    {
        image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS.jpg",
        title: "Empowering Universities: Finolity's Digital Campus Program And Strategic Partnerships",
        date: "January 24, 2024",
        source: "ABP NEWS",
        link: "#"
    },
    {
        image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-4.jpg",
        title: "Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses",
        date: "October 25, 2024",
        source: "NDTVProfit",
        link: "#"
    },
    {
        image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-1.jpg",
        title: "Finolity Achieves Certified Adobe Reseller Status, Expanding Access to Premium Creative Tools",
        date: "December 1, 2024",
        source: "Economictimes",
        link: "#"
    },
    {
        image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-2.jpg",
        title: "Finolity Launches New 'Namestair' to Provide Cloud Services and Solutions for SMBs",
        date: "November 1, 2024",
        source: "The Straits Times",
        link: "#"
    },
];

const LatestNews = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainer.current) {
            const { scrollLeft, clientWidth } = scrollContainer.current;
            const scrollAmount = clientWidth * 0.9; // Adjust scroll step

            scrollContainer.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-6 md:py-8 lg:py-12 px-4 sm:px-6 md:px-12 lg:px-28 max-w-8xl mx-auto">
            <div className='ml-2 md:ml-5'>
                <a href="#" className="text-red-600 text-sm font-semibold underline">
                    About Finolity Consultancy Services
                </a>
                <h2 className="text-xl md:text-2xl font-bold mt-3 md:mt-4 mb-2">Latest News</h2>
            </div>

            <div className="relative">
                <div ref={scrollContainer} className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide p-2 md:p-4" style={{ scrollbarWidth: 'none' }}>
                    {newsItems.map((news, index) => (
                        <Card key={index} className="border border-gray-200 shadow-md overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-[350px] max-w-[350px]">
                            <Image src={news.image} alt={news.title} width={600} height={400} className="w-full h-48 md:h-64 object-cover" />
                            <CardContent className="p-3 md:p-4 pb-16 md:pb-28 flex flex-col justify-between">
                                <p className="text-gray-500 text-xs md:text-sm">{news.source} | {news.date}</p>
                                <h3 className="text-base md:text-lg font-semibold mt-2 leading-tight">{news.title}</h3>
                                <a href={news.link} className="text-red-500 text-xs md:text-sm font-semibold mt-3 md:mt-4 inline-block">
                                    Read more
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mt-2 flex justify-center md:justify-end space-x-3 md:space-x-4">
                <Button onClick={() => scroll('left')} className="bg-black text-white px-4 md:px-6 py-1 md:py-2 rounded-md text-sm md:text-base">
                    &lt; Previous
                </Button>
                <Button onClick={() => scroll('right')} className="bg-black text-white px-4 md:px-6 py-1 md:py-2 rounded-md text-sm md:text-base">
                    Next &gt;
                </Button>
            </div>
        </section>
    );
};

export default LatestNews;