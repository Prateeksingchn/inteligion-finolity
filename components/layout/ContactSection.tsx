'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpOption: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <section className="relative px-20 py-20">
      {/* Black background top section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col justify-between">
          <div className="uppercase text-xs tracking-wider font-medium mb-6">CONTACT US</div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-xl">
            Partner with Us for Comprehensive IT
          </h2>
        </div>
      </div>
      
      {/* Red gradient bottom section with exact colors */}
      <div className="bg-gradient-to-r from-[#E6CCD4] via-[#DF757A] to-[#D20202] py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left side content */}
            <div className="lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
              <p className="text-gray-800 text-lg mb-8 pr-16">
                We&apos;re happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              
              <div className="mb-8">
                <p className="text-xl font-semibold mb-2">Call us at: <span className="font-bold">0612-2500-971</span></p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Your benefits:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800">Client-oriented</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800">Results-driven</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800">Independent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800">Problem-solving</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800">Competent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800">Transparent</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">What happens next?</h3>
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex items-start mb-4 md:mb-0 md:mr-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl mr-3">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">We Schedule a call</p>
                      <p className="text-sm text-gray-700">at your convenience</p>
                    </div>
                  </div>
                  
                  {/* Arrow image instead of text arrow */}
                  <div className="hidden md:flex items-center mx-2">
                    <Image 
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI2MSIgdmlld0JveD0iMCAwIDEyIDYxIj48cGF0aCBkPSJtLjM3LjYuOTUtLjMgMTAuMjEgMzAuNjJMMS4zMSA2MC41N2wtLjk1LS4zMyAxMC4xMS0yOS4zMnoiIGZpbGw9IiIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9IiIvPjwvc3ZnPg==" 
                      alt="Next step" 
                      width={24} 
                      height={24}
                      className="opacity-70"
                    />
                  </div>
                  
                  <div className="flex items-start mb-4 md:mb-0 md:mx-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl mr-3">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">We do a discovery</p>
                      <p className="text-sm text-gray-700">and consulting meeting</p>
                    </div>
                  </div>
                  
                  {/* Arrow image instead of text arrow */}
                  <div className="hidden md:flex items-center mx-2">
                    <Image 
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI2MSIgdmlld0JveD0iMCAwIDEyIDYxIj48cGF0aCBkPSJtLjM3LjYuOTUtLjMgMTAuMjEgMzAuNjJMMS4zMSA2MC41N2wtLjk1LS4zMyAxMC4xMS0yOS4zMnoiIGZpbGw9IiIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9IiIvPjwvc3ZnPg==" 
                      alt="Next step" 
                      width={24} 
                      height={24}
                      className="opacity-70"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl mr-3">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">We prepare a</p>
                      <p className="text-sm text-gray-700">proposal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form positioned over both sections */}
      <div className="absolute top-44 right-6 lg:right-16 xl:right-32 w-full max-w-lg">
        <div className="bg-white text-black p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Schedule a Free Consultation</h2>
          
          {/* Music image divider - rotated 90 degrees */}
          <div className="flex justify-center items-center mb-6 relative">
            <div className="w-full h-px bg-gray-200"></div>
            <div className="absolute bg-white px-2">
              <Image 
                src="/music.png" 
                alt="Music divider" 
                width={34} 
                height={24} 
                className="mx-auto transform rotate-90"
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First and Last name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
              </div>
            </div>
            
            {/* Company / Organization */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>
            
            {/* Company email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Company email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>
            
            {/* How Can We Help You? */}
            <div>
              <label htmlFor="helpOption" className="block text-sm font-medium text-gray-700 mb-1">How Can We Help You?</label>
              <div className="relative">
                <select
                  id="helpOption"
                  name="helpOption"
                  value={formData.helpOption}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 appearance-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                >
                  <option value="">Select Option</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="support">Technical Support</option>
                  <option value="security">Cybersecurity</option>
                  <option value="cloud">Cloud Services</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="To better assist you, please describe how we can help..."
                required
              ></textarea>
            </div>
            
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="bg-black text-white font-medium py-2 px-8 rounded hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 