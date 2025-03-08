'use client';

import { Card } from '@/components/ui/card';
import { BarChart3, Lightbulb, User, Lock } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-[#F5F5F5] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simplifying IT for a complex world.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg">
            <Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cost-effectiveness</h3>
            <p className="text-gray-300">
              We offer affordable IT solutions that help you reduce costs and improve your bottom line.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg">
            <User className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
            <p className="text-gray-300">
              We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg">
            <Lock className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
            <p className="text-gray-300">
              We specialize in serving specific industries, offering tailored solutions that meet your unique needs.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg">
            <BarChart3 className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p className="text-gray-300">
              Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
} 