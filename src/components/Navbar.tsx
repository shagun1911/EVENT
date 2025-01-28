import React from 'react';
import { Download } from 'lucide-react';
import SAMAGRA from  "../assets/433412257_810369917779710_6154004774464875398_n.jpg";
import IHFC from "../assets/WhatsApp Image 2024-09-02 at 17.04.36_662e9805.jpg" ;

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={IHFC}
              alt="IHFC Logo" 
              className="h-12"
            />
            <div className="h-8 w-px bg-gray-300" />
            <img 
              src={SAMAGRA}
              alt="Samagra Shiksha Logo" 
              className="h-10"
            />
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600">Schedule</a>
            <a href="#location" className="text-gray-700 hover:text-blue-600">Location</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700">
              <Download size={20} />
              <span>Download App</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;