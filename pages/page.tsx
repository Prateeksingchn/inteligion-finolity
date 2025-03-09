'use client';

import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { MetricsAndServices } from '@/components/layout/MetricsAndServices'
import Solution from "@/components/layout/Solution";
import Industries from "@/components/layout/Industries";
import LatestNews from '@/components/layout/LatestNews';
import UpcomingEvents from '@/components/layout/UpcomingEvents';
import VendorsSection from '@/components/layout/VendorsSection';
import RecognitionSection from '@/components/layout/RecognitionSection';
import SuccessStoriesSection from '@/components/layout/SuccessStoriesSection';
import TestimonialsSection from '@/components/layout/TestimonialsSection';
import CompanyRecognize from '@/components/layout/CompanyRecognize';
import { Footer } from '@/components/layout/Footer';
import ContactSection from '@/components/layout/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MetricsAndServices />
      <Solution />
      <Industries />
      <LatestNews /> 
      <UpcomingEvents />
      <VendorsSection />
      <RecognitionSection /> 
      <SuccessStoriesSection />
      <TestimonialsSection />
      <CompanyRecognize />
      <ContactSection />
      <Footer />
    </div>
  );
}