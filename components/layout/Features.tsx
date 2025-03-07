'use client';

import { Card } from '@/components/ui/card';
import { BarChart3, Lock, Shield } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Intelion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions that help businesses thrive in the digital age.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600">
              Advanced security measures to protect your business data and assets.
            </p>
          </Card>
          <Card className="p-6">
            <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
            <p className="text-gray-600">
              Data-driven insights to make informed business decisions.
            </p>
          </Card>
          <Card className="p-6">
            <Lock className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
            <p className="text-gray-600">
              Stay compliant with industry regulations and standards.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
} 