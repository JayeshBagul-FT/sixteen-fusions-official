import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import gsap from 'gsap';

// Import your page components
import Home from './../pages/Home';
import FoundersSection from './../pages/FounderSection';
import HighServices from './../pages/HighServices';
import Review from '../pages/Review';
import ServiceMain from './Service_Main';
import Premium from './Premium';
import About from './About';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // This ensures state toggles correctly
    setIsMenuOpen((prev) => !prev); // Toggle state correctly
  };

  // Hover In animation for menu items
  const handleMenuItemHoverIn = (e) => {
    gsap.to(e.target, { scale: 1.1, color: 'green', duration: 0.3, ease: 'power1.out', delay: 0.1 });
  };

  // Hover Out animation for menu items
  const handleMenuItemHoverOut = (e) => {
    gsap.to(e.target, { scale: 1, color: '#D1D5DB', duration: 0.3, ease: 'power1.out', delay: 0.1 });
  };

  // Hover In animation for the button
  const handleButtonHoverIn = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: '#34D399', // Slightly lighter emerald
      backgroundColor: '#34D399',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  // Hover Out animation for the button
  const handleButtonHoverOut = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: '#10B981', // Original emerald color
      backgroundColor: '#10B981',
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power1.out',
    });
  };



  return (
    <div className=" w-full bg-[#000000] text-white relative">
      <div className="w-full bg-[#000000] text-white relative">
        <div className="border-b border-neutral-800">
          <nav className="w-full max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between  items-center">
              <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4" />
              <div className="flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2 text-white">
                  <img
                    src="./logo.png"
                    alt="16FUSIONS Logo"
                    className="h-12 w-12 sm:h-10 sm:w-auto md:h-12 lg:h-16 lg:w-16 object-contain object-center"
                  />
                </a>

                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        to="/#services"
                        to="/service"
                        className="text-gray-300 transition-all"
                        onMouseEnter={handleMenuItemHoverIn}
                        onMouseLeave={handleMenuItemHoverOut}
@@ -97,7 +100,7 @@ const Navbar = () => {
                </li>
                    <li>
                      <Link
                        to="/#premium"
                        to="/premium"
                        className="text-gray-300 transition-all"
                        onMouseEnter={handleMenuItemHoverIn}
                        onMouseLeave={handleMenuItemHoverOut}
@@ -107,7 +110,7 @@ const Navbar = () => {
                </li>
                    <li>
                      <Link
                        to="/#about"
                        to="/about"
                        className="text-gray-300 transition-all"
                        onMouseEnter={handleMenuItemHoverIn}
                        onMouseLeave={handleMenuItemHoverOut}
@@ -117,7 +120,7 @@ const Navbar = () => {
                </li>
                    <li>
                      <Link
                        to="/#reviews"
                        to="/reviews"
                        className="text-gray-300 transition-all"
                        onMouseEnter={handleMenuItemHoverIn}
                        onMouseLeave={handleMenuItemHoverOut}
@@ -137,7 +140,6 @@ const Navbar = () => {
              </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-white p-2"
                  onClick={toggleMenu}
@@ -147,7 +149,6 @@ const Navbar = () => {
            </button>
            </div>

            {/* Full-Screen Mobile Navigation */}
            <div
              className={`lg:hidden fixed top-0 right-0 w-full h-full bg-neutral-900 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
@@ -159,7 +160,7 @@ const Navbar = () => {
                <X size={32} />
              </button>
            <Link
              to="/#services"
              to="/service"
              className="text-gray-300 text-2xl transition-all"
              onMouseEnter={handleMenuItemHoverIn}
              onMouseLeave={handleMenuItemHoverOut}
@@ -168,7 +169,7 @@ const Navbar = () => {
              Services
              </Link>
          <Link
            to="/#premium"
            to="/premium-services"
            className="text-gray-300 text-2xl transition-all"
            onMouseEnter={handleMenuItemHoverIn}
            onMouseLeave={handleMenuItemHoverOut}
@@ -177,7 +178,7 @@ const Navbar = () => {
            Premium
              </Link>
        <Link
          to="/#about"
          to="/founders-section"
          className="text-gray-300 text-2xl transition-all"
          onMouseEnter={handleMenuItemHoverIn}
          onMouseLeave={handleMenuItemHoverOut}
@@ -186,7 +187,7 @@ const Navbar = () => {
          About
              </Link>
      <Link
        to="/#reviews"
        to="/reviews"
        className="text-gray-300 text-2xl transition-all"
        onMouseEnter={handleMenuItemHoverIn}
        onMouseLeave={handleMenuItemHoverOut}
@@ -207,6 +208,16 @@ const Navbar = () => {
          </div>
        </nav >
      </div >
  {/* Routes Section */ }
  < Routes >
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServiceMain />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/about" element={<About />} />
        <Route path="/high-services" element={<HighServices />} />
        <Route path="/reviews" element={<Review />} />
      </Routes >
    </div >
  );
};