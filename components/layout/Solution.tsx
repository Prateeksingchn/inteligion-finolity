'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="w-full bg-[#F5F5F5]">
      <section className="py-12 px-6 max-w-7xl mx-auto ">
        <h2 className="text-black text-xs font-bold mb-2">HOW WE DO</h2>
        <h2 className="text-red-600 text-4xl font-bold mb-8">Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-gray-200 shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <img src={solution.image} alt={solution.title} className="w-20 h-20 mb-4" />
              </div>
              <h3 className="text-lg font-semibold">{solution.title}</h3>
              <p className="text-gray-600 text-[12.5px] mt-2 mb-4">{solution.description}</p>
              <div className="border-t-2 border-gray-200">
                <a href="#" className="text-red-600 text-xs font-semibold mt-4 inline-block">
                  Learn more
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="bg-black text-white px-6 py-2 rounded-md">View All Solutions</Button>
        </div>
      </section>
    </div>
  );
}
