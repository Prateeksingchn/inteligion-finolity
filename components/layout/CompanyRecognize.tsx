'use client';

import React from 'react';
import Image from 'next/image';

export default function CompanyRecognize() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side content */}
          <div className="lg:w-2/5">
            <div className="mb-2 text-gray-500 uppercase text-sm tracking-wider font-medium bg-gray-100 inline-block px-3 py-1 rounded-md">WHERE WE DO</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Recognized by the best</h2>
            <p className="text-gray-700 max-w-lg">
              The company needed to complete a complex migration on a tight deadline to avoid millions of 
              dollars in post-contract fees and fines.
            </p>
          </div>
          
          {/* Right side partner logos */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
              {/* Top row */}
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/ND-ty6SkWNaiYy3I6E9J3lgFJJIeuHzzcdx74aHvaQ-9PFabsPmUhe_uKKqItjbtrcbw.png" 
                  alt="Intel Technology Provider"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/kisspng-microsoft-certified-partner-microsoft-partner-netw-partner-5b13fff40de7b5.358475291528037364057-300x77.png" 
                  alt="Microsoft Gold Partner"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/LenovoBP-POS-color.png" 
                  alt="Lenovo Business Partner"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              {/* Middle row */}
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2024/11/Untitled-design-28-300x164.png" 
                  alt="Finolity Consultancy Services"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/5b7d7d3778a94.png" 
                  alt="Cisco Partner"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/hewlett-packard-enterprise-silver-partner-vector-logo.png" 
                  alt="Hewlett Packard Silver Partner"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              {/* Bottom row */}
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/pngfind.com-registered-logo-png-2230159-300x103.png" 
                  alt="Dell PartnerDirect Registered"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://finolity.com/wp-content/uploads/2023/03/url.png" 
                  alt="Ubiquiti Networks"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                {/* Empty cell to match the layout in the images */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}