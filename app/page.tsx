'use client';

import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { MetricsAndServices } from '@/components/layout/MetricsAndServices'
import { Features } from '@/components/layout/Features';
import { CTA } from '@/components/layout/CTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MetricsAndServices />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}