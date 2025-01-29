import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import SAMAGRA from  "../assets/samagrashiksha logo.png";
import IHFC from "../assets/IHFC.png" ;
import UTTARAKHAND from "../assets/Seal_of_Uttarakhand.svg-removebg-preview.png";


const Hero = () => {
  return (
    <div className="relative pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          alt="Education background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Uttarakhand Logo */}
          <div className="flex justify-center space-x-8 mb-12">
            <img 
              src={UTTARAKHAND} 
              alt="Uttarakhand Government Logo" 
              className="h-24 sm:h-32 md:h-40"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">R.I.S.E. Uttarakhand</span>
            <span className="block text-blue-600">AI Teachers Training Program</span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A Journey Towards Saksham Bharat
          </p>

          {/* Date and Location */}
          <div className="mt-8 flex justify-center space-x-8">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>31st January-28th February, 2025</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>IIT Delhi, Sonipat Campus</span>
            </div>
          </div>

          {/* Logos in Association With */}
          <div className="mt-12 flex justify-center items-center space-x-8 flex-wrap">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">In Association With</span>
              
              {/* Logos with responsive sizes */}
              <img 
                src={IHFC} 
                alt="IHFC Logo" 
                className="h-10 sm:h-12 md:h-14"
              />
              <img 
                src={UTTARAKHAND}
                alt="Uttarakhand Logo" 
                className="h-10 sm:h-12 md:h-14"
              />
              <img 
                src={SAMAGRA}
                alt="Samagra Shiksha Logo" 
                className="h-8 sm:h-10 md:h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
