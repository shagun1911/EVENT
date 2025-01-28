import React from 'react';
import { Bell } from 'lucide-react';
import SAMAGRA from  "../assets/433412257_810369917779710_6154004774464875398_n.jpg";
import UTTARAKHAND from "../assets/Seal_of_Uttarakhand.svg.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <img 
              src="https://ihfc.co.in/wp-content/uploads/2023/12/IHFC-Logo.png" 
              alt="IHFC Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-400 text-sm">
              Technology Innovation Hub of IIT Delhi
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-white">Schedule</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-white">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              IIT Delhi, Sonipat Campus
              <br />
              Sonipat, Haryana
              <br />
              Email: info@ihfc.co.in
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates about our upcoming events and training sessions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md flex items-center">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 IHFC-TIH, IIT Delhi. All Rights Reserved.</p>
            <div className="flex items-center space-x-4">
              <img 
                src={SAMAGRA}
                alt="Samagra Shiksha Logo" 
                className="h-8"
              />
              <img 
                src={UTTARAKHAND} 
                alt="Uttarakhand Logo" 
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;