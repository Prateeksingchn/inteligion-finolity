'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
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
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; // Import icons for mobile menu

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for mobile dropdown menus
  const [openMobileMenus, setOpenMobileMenus] = useState({
    services: false,
    marketResearch: false,
    company: false,
    brands: false
  });

  // Toggle function for mobile dropdowns
  const toggleMobileMenu = (menu: string): void => {
    // Adding a comment to force a refresh
    setOpenMobileMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <header className="w-full bg-white relative z-50 px-4 sm:px-6 lg:px-20">
      <div className="border-b border-gray-200">
        <div className="max-w-full">
          <div className="flex justify-between items-center h-16 md:h-14">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="https://finolity.com/wp-content/uploads/2025/03/cropped-Untitled-design-38.png" 
                  alt="Intelion Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop Navigation - Only visible on lg and above */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavigationMenu className="static">
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
                    <NavigationMenuContent className="absolute left-0">
                      <div className="w-[100vw]">
                        <div className="px-4 sm:px-6 lg:px-8 py-8">
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
                        <div className="px-4 sm:px-6 lg:px-8 py-8">
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
                        <div className="px-4 sm:px-6 lg:px-8 py-8">
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
                        <div className="px-4 sm:px-6 lg:px-8 py-8">
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
            </div>

            {/* Client Support and Contact - Only visible on lg and above */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-xs text-gray-600 font-extrabold bg-gray-100 p-[4px]">Client Support →</div>
                <div className="font-medium text-xs">0612-2500971</div>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state with animation */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <div className="bg-white h-full overflow-y-auto shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 border-b border-gray-200">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600"
            >
              Home
            </Link>
            
            {/* Services dropdown */}
            <div className="block rounded-md text-base font-medium text-gray-800">
              <button 
                onClick={() => toggleMobileMenu('services')}
                className="flex w-full justify-between items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                <span>Services</span>
                {openMobileMenus.services ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </button>
              
              {/* Services submenu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileMenus.services ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-3 py-2 space-y-2">
                  <Link href="/services/digital-strategy" className="block py-1 text-sm text-gray-700">
                    Digital Strategy & Design
                  </Link>
                  <Link href="/services/application-development" className="block py-1 text-sm text-gray-700">
                    Application Development
                  </Link>
                  <Link href="/services/cloud-infrastructure" className="block py-1 text-sm text-gray-700">
                    Cloud & Infrastructure
                  </Link>
                  <Link href="/services/saas" className="block py-1 text-sm text-gray-700">
                    Software-as-a-Service
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href="/industries" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-150"
            >
              Industries
            </Link>
            
            {/* Market Research dropdown */}
            <div className="block rounded-md text-base font-medium text-gray-800">
              <button 
                onClick={() => toggleMobileMenu('marketResearch')}
                className="flex w-full justify-between items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                <span>Market Research</span>
                {openMobileMenus.marketResearch ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </button>
              
              {/* Market Research submenu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileMenus.marketResearch ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-3 py-2 space-y-2">
                  <Link href="/research/consumer-product-reports" className="block py-1 text-sm text-gray-700">
                    Consumer Product Reports
                  </Link>
                  <Link href="/research/packaging-industry-reports" className="block py-1 text-sm text-gray-700">
                    Packaging Industry Reports
                  </Link>
                  <Link href="/research/it-communications-reports" className="block py-1 text-sm text-gray-700">
                    IT & Communications Reports
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Company dropdown */}
            <div className="block rounded-md text-base font-medium text-gray-800">
              <button 
                onClick={() => toggleMobileMenu('company')}
                className="flex w-full justify-between items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                <span>Company</span>
                {openMobileMenus.company ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </button>
              
              {/* Company submenu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileMenus.company ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-3 py-2 space-y-2">
                  <Link href="/company/events" className="block py-1 text-sm text-gray-700">
                    Events
                  </Link>
                  <Link href="/company/why-us" className="block py-1 text-sm text-gray-700">
                    Why Us
                  </Link>
                  <Link href="/company/team" className="block py-1 text-sm text-gray-700">
                    Team
                  </Link>
                  <Link href="/company/careers" className="block py-1 text-sm text-gray-700">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Brands dropdown */}
            <div className="block rounded-md text-base font-medium text-gray-800">
              <button 
                onClick={() => toggleMobileMenu('brands')}
                className="flex w-full justify-between items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors duration-150"
              >
                <span>Brands</span>
                {openMobileMenus.brands ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </button>
              
              {/* Brands submenu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileMenus.brands ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-3 py-2 space-y-2">
                  <Link href="/brands/brand1" className="block py-1 text-sm text-gray-700">
                    InteliTech
                  </Link>
                  <Link href="/brands/brand2" className="block py-1 text-sm text-gray-700">
                    DataSphere
                  </Link>
                  <Link href="/brands/brand3" className="block py-1 text-sm text-gray-700">
                    CloudNexus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact section in mobile menu */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-gray-800 mb-1">Client Support</div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:06122500971" className="text-base font-medium">0612-2500971</a>
                </div>
              </div>
              
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 