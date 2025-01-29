import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import SAMAGRA from "../assets/samagrashiksha logo.png";
import IHFC from "../assets/IHFC.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <img 
              src={IHFC} 
              alt="IHFC Logo" 
              className="h-8 sm:h-10 md:h-12 transition-all duration-300"
            />
            <div className="h-6 sm:h-8 w-px bg-gray-300" />
            <img
              src={SAMAGRA}
              alt="Samagra Shiksha Logo"
              className="h-6 sm:h-8 md:h-10 transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm lg:text-base"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm lg:text-base"
            >
              About
            </a>
            <Link
              to="/schedule"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm lg:text-base"
            >
              Schedule
            </Link>
            <a
              href="#location"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm lg:text-base"
            >
              Location
            </a>
            <a
              href="https://expo.dev/artifacts/eas/3AZEouTHzRmhQRB6G1xYDg.apk"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base"
            >
              <Download size={18} />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
              >
                About
              </a>
              <Link
                to="/schedule"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
              >
                Schedule
              </Link>
              <a
                href="#location"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
              >
                Location
              </a>
              <a
                href="https://expo.dev/artifacts/eas/3AZEouTHzRmhQRB6G1xYDg.apk"
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-all duration-300 justify-center mt-4"
              >
                <Download size={18} />
                <span>Download App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;