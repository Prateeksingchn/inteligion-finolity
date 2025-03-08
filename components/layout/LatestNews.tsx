import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface NewsItem {
  image: string;
  source: string;
  date: string;
  title: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS.jpg",
    source: "ABP NEWS",
    date: "January 24, 2024",
    title: "Empowering Universities: Finolity's Digital Campus Program And Strategic Partnerships",
    link: "#",
  },
  {
    image: "/news-image-2.jpg",
    source: "NDTVProfit",
    date: "October 25, 2024",
    title: "Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses",
    link: "#",
  },
  {
    image: "/news-image-3.jpg",
    source: "Economictimes",
    date: "December 1, 2024",
    title: "Finolity Achieves Certified Adobe Reseller Status, Expanding Access to Premium Creative Tools",
    link: "#",
  },
  {
    image: "/news-image-4.jpg",
    source: "The Straits Times",
    date: "November 15, 2024",
    title: "Finolity Launches New 'Namestair' to Provide Cloud Services and Solutions for SMBs",
    link: "#",
  },
  {
    image: "/news-image-5.jpg",
    source: "Business Today",
    date: "December 10, 2024",
    title: "Finolity Expands Global Reach with New Partnerships in Europe",
    link: "#",
  },
];

const ITEMS_PER_PAGE = 4;

export default function News() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const visibleNews = newsData.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-12 px-20 max-w-8xl mx-auto">
      <a href="#" className="text-red-600 font-semibold underline">
        About Finolity Consultancy Services
      </a>
      <h2 className="text-4xl font-bold mt-4 mb-8">Latest News</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleNews.map((news, index) => (
          <Card key={index} className="border border-gray-200 shadow-md overflow-hidden w-full">
            <Image src={news.image} alt={news.title} width={400} height={300} className="w-full h-52 object-cover" />
            <CardContent className="p-4 flex flex-col justify-between">
              <p className="text-gray-500 text-sm">{news.source} | {news.date}</p>
              <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
              <a href={news.link} className="text-red-600 font-semibold mt-4 inline-block">
                Read more
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-end space-x-4">
        <Button onClick={prevPage} disabled={currentPage === 0} className="bg-black text-white px-6 py-2 rounded-md disabled:opacity-50">
          &lt; Previous
        </Button>
        <Button onClick={nextPage} disabled={currentPage === totalPages - 1} className="bg-black text-white px-6 py-2 rounded-md disabled:opacity-50">
          Next &gt;
        </Button>
      </div>
    </section>
  );
}
