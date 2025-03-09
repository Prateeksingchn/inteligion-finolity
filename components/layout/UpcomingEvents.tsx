import React from "react";

const events = [
  {
    date: "SATURDAY, MARCH 29",
    title: "AI Centre of Excellence in Education",
    time: "11 AM – 1 PM",
    location: "Webinar",
    description:
      "Discover how Finolity and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies, improve collaboration, and drive productivity for businesses.",
    image: "https://finolity.com/wp-content/uploads/2025/02/ai_event.jpg",
  },
  {
    date: "SUNDAY, MAY 25",
    title: "Join Finolity Green Horizons Summit 2025",
    time: "12 AM – 2 PM",
    location: "New Delhi",
    description:
      "Join the Finolity Green Horizons Summit 2025 to explore innovative solutions for sustainability and green technology. Discover actionable insights and network with industry leaders driving a cleaner, greener future.",
    image: "https://finolity.com/wp-content/uploads/2023/04/visuals-Y4qzW3AsvqI-unsplash.jpg",
  },
  {
    date: "SUNDAY, SEPTEMBER 14",
    title: "Finolity Ecosystem Partnerships Summit",
    time: "4 PM – 8:30 PM",
    location: "Bangalore",
    description:
      "Join the Finolity Ecosystem Partnerships Summit to collaborate with industry leaders and explore opportunities in building robust, innovative ecosystems. Discover strategies to foster growth, partnerships, and technological advancements.",
    image: "https://finolity.com/wp-content/uploads/2023/04/evangeline-shaw-BdV23FLkmxQ-unsplash.jpg",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-start ml-6">Upcoming Events</h2>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm border border-gray-100"
            >
              <div className="p-4">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover rounded-md" 
                />
              </div>
              
              <div className="px-6 pb-4">
                <p className="text-xs bg-gray-200 p-1 w-[170px] text-gray-600 uppercase font-medium mb-2">
                  {event.date}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <div className="flex items-start mb-3">
                  <div className="flex items-center mr-4">
                    <svg className="w-5 h-5 text-gray-500 mr-1" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-sm text-gray-700">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-1" viewBox="0 0 24 24" fill="none">
                      <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-sm text-gray-700">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 leading-relaxed mb-12">
                  {event.description}
                </p>
                
                <button className="block w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 rounded text-center font-medium transition-colors">
                  Register Today
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}