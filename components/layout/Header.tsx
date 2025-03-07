'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const servicesItems = [
  { title: 'Consulting', href: '/services/consulting' },
  { title: 'Research', href: '/services/research' },
  { title: 'Analytics', href: '/services/analytics' },
  { title: 'Strategy', href: '/services/strategy' },
];

const marketResearchItems = [
  { title: 'Market Analysis', href: '/research/market-analysis' },
  { title: 'Consumer Insights', href: '/research/consumer-insights' },
  { title: 'Competitive Intelligence', href: '/research/competitive-intelligence' },
  { title: 'Industry Reports', href: '/research/industry-reports' },
];

const companyItems = [
  { title: 'About Us', href: '/company/about' },
  { title: 'Leadership', href: '/company/leadership' },
  { title: 'Careers', href: '/company/careers' },
  { title: 'Contact', href: '/company/contact' },
];

const brandsItems = [
  { title: 'Our Brands', href: '/brands/our-brands' },
  { title: 'Case Studies', href: '/brands/case-studies' },
  { title: 'Success Stories', href: '/brands/success-stories' },
];

export function Header() {
  return (
    <header className="w-full bg-white relative z-50">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <svg 
                  className="h-8 w-8 text-teal-600" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    fill="currentColor" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-2xl font-bold text-gray-900">Intelion</span>
              </Link>
            </div>

            {/* Navigation - Updated styling */}
            <NavigationMenu className="flex-1 flex justify-center">
              <NavigationMenuList className="flex items-center justify-center space-x-8 w-full">
                <NavigationMenuItem>
                  <Link href="/" className="text-red-600 font-medium">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[100vw]">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-16">
                          {/* Services Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Services</h3>
                            <ul className="space-y-4">
                              <li>
                                <Link href="/services/digital-strategy" className="text-gray-700 hover:text-gray-900">
                                  Digital Strategy & Design
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/application-development" className="text-gray-700 hover:text-gray-900">
                                  Application Development and Management
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/cloud-infrastructure" className="text-gray-700 hover:text-gray-900">
                                  Cloud & Infrastructure
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/saas" className="text-gray-700 hover:text-gray-900">
                                  Software-as-a-Service
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/digital-marketing" className="text-gray-700 hover:text-gray-900">
                                  Digital & Brand Marketing
                                </Link>
                              </li>
                              <li>
                                <Link href="/services/ai-business" className="text-gray-700 hover:text-gray-900">
                                  Generative AI & Business Intelligence
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Industry Inside Campus Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Industry Inside Campus- CIED</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <div className="mb-3">
                                  <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M3 8H21" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 21V8" stroke="currentColor" strokeWidth="2" />
                                  </svg>
                                </div>
                                <h4 className="font-medium">Digital Campus</h4>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <div className="mb-3">
                                  <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" />
                                    <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="2" />
                                  </svg>
                                </div>
                                <h4 className="font-medium">Unity Education</h4>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <div className="mb-3">
                                  <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
                                  </svg>
                                </div>
                                <h4 className="font-medium">Manufacturing/IOT</h4>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <div className="mb-3">
                                  <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L19 9L12 16L5 9L12 2Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M5 15L2 18L5 21L8 18L5 15Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M19 15L16 18L19 21L22 18L19 15Z" stroke="currentColor" strokeWidth="2" />
                                  </svg>
                                </div>
                                <h4 className="font-medium">Aerospace</h4>
                              </div>
                            </div>
                          </div>

                          {/* Industry Focus Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Industry Focus</h3>
                            <ul className="space-y-4">
                              <li>
                                <Link href="/industries/manufacturing" className="text-gray-700 hover:text-gray-900">
                                  Industry Manufacturing
                                </Link>
                              </li>
                              <li>
                                <Link href="/industries/transportation" className="text-gray-700 hover:text-gray-900">
                                  Transportation Logistics
                                </Link>
                              </li>
                              <li>
                                <Link href="/industries/healthcare" className="text-gray-700 hover:text-gray-900">
                                  Healthcare
                                </Link>
                              </li>
                              <li>
                                <Link href="/industries/banking" className="text-gray-700 hover:text-gray-900">
                                  Banks & Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="/industries/consulting" className="text-gray-700 hover:text-gray-900">
                                  Consulting Providers
                                </Link>
                              </li>
                              <li>
                                <Link href="/industries/nonprofit" className="text-gray-700 hover:text-gray-900">
                                  Non Profit
                                </Link>
                              </li>
                            </ul>
                            <div className="mt-4">
                              <Link href="/industries/all" className="text-red-600 hover:text-red-700 font-medium">
                                View all
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/industries" className="text-gray-800 font-medium">
                    Industries
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 font-medium">
                    Market Research
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[100vw]">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-16">
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Market Reports on</h3>
                            <ul className="space-y-4">
                              <li>
                                <Link href="/research/consumer-product-reports" className="text-gray-700 hover:text-gray-900">
                                  Consumer Product Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/packaging-industry-reports" className="text-gray-700 hover:text-gray-900">
                                  Packaging Industry Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/it-communications-reports" className="text-gray-700 hover:text-gray-900">
                                  IT & Communications Technology Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/food-beverage-reports" className="text-gray-700 hover:text-gray-900">
                                  Food & Beverage Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/services-utilities-reports" className="text-gray-700 hover:text-gray-900">
                                  Services and Utilities Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/oil-gas-reports" className="text-gray-700 hover:text-gray-900">
                                  Oil and Gas Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/semiconductor-reports" className="text-gray-700 hover:text-gray-900">
                                  Semiconductor & Electronics Reports
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/travel-tourism-reports" className="text-gray-700 hover:text-gray-900">
                                  Travel and Tourism Reports
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Industry Focus Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Industry Focus</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium">Healthcare Reports</h4>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium">Energy & Power</h4>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium">Chemicals & Materials</h4>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium">Automotive Reports</h4>
                              </div>
                            </div>
                          </div>

                          {/* Featured Sample Reports Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Featured Sample Reports</h3>
                            <ul className="space-y-4">
                              <li>
                                <Link href="/research/unacademy-success" className="text-gray-700 hover:text-gray-900">
                                  How Finolity's Consultation Revolutionized Unacademy's Success
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/finolity-boosts" className="text-gray-700 hover:text-gray-900">
                                  Finolity boosts MM Deemed University with SOLIDWORKS, Smart Manufacturing Lab.
                                </Link>
                              </li>
                              <li>
                                <Link href="/research/unlocking-success" className="text-gray-700 hover:text-gray-900">
                                  Unlocking Success: The Crucial Role of Design in the Digital Era with Finolity
                                </Link>
                              </li>
                            </ul>
                            <div className="mt-4">
                              <Link href="/research/view-more" className="text-red-600 hover:text-red-700 font-medium">
                                View more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 font-medium">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[100vw]">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-16">
                          {/* Tagline Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">
                              Simplifying IT for a complex world.
                            </h3>
                          </div>

                          {/* Company Links Column */}
                          <div>
                            <ul className="space-y-4">
                              <li>
                                <Link href="/company/events" className="text-gray-700 hover:text-gray-900">
                                  Events
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/why-us" className="text-gray-700 hover:text-gray-900">
                                  Why Us
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/team" className="text-gray-700 hover:text-gray-900">
                                  Team
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/careers" className="text-gray-700 hover:text-gray-900">
                                  Careers
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/partners" className="text-gray-700 hover:text-gray-900">
                                  Partners & Certifications
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/reviews" className="text-gray-700 hover:text-gray-900">
                                  Reviews & Awards
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Platform Partnerships Column */}
                          <div>
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Platform Partnerships</h3>
                            <ul className="space-y-4">
                              <li className="flex items-center">
                                <Link href="/partners/aws" className="text-gray-700 hover:text-gray-900">
                                  AWS
                                </Link>
                                <img src="/aws-logo.png" alt="AWS Logo" className="ml-2 h-6" />
                              </li>
                              <li className="flex items-center">
                                <Link href="/partners/google-cloud" className="text-gray-700 hover:text-gray-900">
                                  Google Cloud
                                </Link>
                                <img src="/google-cloud-logo.png" alt="Google Cloud Logo" className="ml-2 h-6" />
                              </li>
                              <li className="flex items-center">
                                <Link href="/partners/microsoft" className="text-gray-700 hover:text-gray-900">
                                  Microsoft
                                </Link>
                                <img src="/microsoft-logo.png" alt="Microsoft Logo" className="ml-2 h-6" />
                              </li>
                              <li className="flex items-center">
                                <Link href="/partners/salesforce" className="text-gray-700 hover:text-gray-900">
                                  Salesforce
                                </Link>
                                <img src="/salesforce-logo.png" alt="Salesforce Logo" className="ml-2 h-6" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 font-medium">
                    Brands
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[100vw]">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Brands</h3>
                            <ul className="space-y-3">
                              <li>
                                <Link href="/brands/brand1" className="text-gray-700 hover:text-gray-900">
                                  InteliTech
                                </Link>
                              </li>
                              <li>
                                <Link href="/brands/brand2" className="text-gray-700 hover:text-gray-900">
                                  DataSphere
                                </Link>
                              </li>
                              <li>
                                <Link href="/brands/brand3" className="text-gray-700 hover:text-gray-900">
                                  CloudNexus
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-900">Case Studies</h3>
                            <div className="space-y-4">
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium mb-2">Enterprise Transformation</h4>
                                <p className="text-sm text-gray-600">How we helped a Fortune 500 company modernize their infrastructure</p>
                              </div>
                              <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-medium mb-2">Digital Innovation</h4>
                                <p className="text-sm text-gray-600">Creating cutting-edge solutions for emerging markets</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-900">Success Stories</h3>
                            <p className="text-gray-600 mb-4">Discover how our clients achieved remarkable results with our solutions.</p>
                            <Link href="/brands/success-stories" className="text-red-600 hover:text-red-700 font-medium">
                              View all stories
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Client Support and Contact */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Client Support →</div>
                <div className="font-medium">0612-2500971</div>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 