import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import SAMAGRA from "../assets/samagrashiksha logo.png";
import IHFC from "../assets/IHFC.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src={IHFC} alt="IHFC Logo" className="h-12" />
            <div className="h-8 w-px bg-gray-300" />
            <img src={SAMAGRA} alt="Samagra Shiksha Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About
            </a>
            <Link
              to="/schedule"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Schedule
            </Link>
            <a
              href="#location"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Location
            </a>
            <a
              href="https://expo.dev/artifacts/eas/3AZEouTHzRmhQRB6G1xYDg.apk"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
            >
              <Download size={20} />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-0.5 bg-gray-700 mb-1"
                aria-hidden="true"
              ></span>
              <span
                className="block w-6 h-0.5 bg-gray-700 mb-1"
                aria-hidden="true"
              ></span>
              <span
                className="block w-6 h-0.5 bg-gray-700"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col items-center space-y-4 mt-4 bg-white shadow-lg rounded-md py-4 transition-transform duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <Link
            to="/schedule"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Schedule
          </Link>
          <a
            href="#location"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Location
          </a>
          <a
            href="https://expo.dev/artifacts/eas/3AZEouTHzRmhQRB6G1xYDg.apk"
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
          >
            <Download size={20} />
            <span>Download App</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
