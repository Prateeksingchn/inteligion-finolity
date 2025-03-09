'use client';

import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { MetricsAndServices } from '@/components/layout/MetricsAndServices'
import Solution from "@/components/layout/Solution";
import Industries from "@/components/layout/Industries";
import LatestNews from '@/components/layout/LatestNews';
import UpcomingEvents from '@/components/layout/UpcomingEvents';
import VendorsSection from '@/components/layout/VendorsSection';
import { Features } from '@/components/layout/Features';
import { CTA } from '@/components/layout/CTA';
import { Footer } from '@/components/layout/Footer';

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
      <VendorsSection /> {/* Add the Vendors Section here */}
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}