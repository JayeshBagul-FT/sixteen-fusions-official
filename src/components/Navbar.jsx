import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle state correctly
  };

  const handleMenuItemHoverIn = (e) => {
    gsap.to(e.target, { scale: 1.1, color: 'green', duration: 0.3, ease: 'power1.out', delay: 0.1 });
  };

  const handleMenuItemHoverOut = (e) => {
    gsap.to(e.target, { scale: 1, color: '#D1D5DB', duration: 0.3, ease: 'power1.out', delay: 0.1 });
  };

  const handleButtonHoverIn = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: '#34D399',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleButtonHoverOut = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: '#10B981',
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: 'ease-in-out',
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'ease-out',
        });
      },
    });
  };

  useEffect(() => {
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="w-full bg-[#000000] text-white relative">
      <div className="border-b border-neutral-800">
        <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                  <a
                    href="/"
                    className="text-gray-300 transition-all"
                    onMouseEnter={handleMenuItemHoverIn}
                    onMouseLeave={handleMenuItemHoverOut}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="text-gray-300 transition-all"
                    onMouseEnter={handleMenuItemHoverIn}
                    onMouseLeave={handleMenuItemHoverOut}
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="text-gray-300 transition-all"
                    onMouseEnter={handleMenuItemHoverIn}
                    onMouseLeave={handleMenuItemHoverOut}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 transition-all"
                    onMouseEnter={handleMenuItemHoverIn}
                    onMouseLeave={handleMenuItemHoverOut}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <button
                ref={buttonRef}
                className="bg-emerald-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-emerald-700 transition-all"
                onMouseEnter={handleButtonHoverIn}
                onMouseLeave={handleButtonHoverOut}
                onClick={handleClick}
              >
                Contact Us
              </button>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`lg:hidden fixed top-0 right-0 w-full h-full bg-neutral-900 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>
              <a
                href="/service"
                className="text-gray-300 text-2xl transition-all"
                onMouseEnter={handleMenuItemHoverIn}
                onMouseLeave={handleMenuItemHoverOut}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/premium"
                className="text-gray-300 text-2xl transition-all"
                onMouseEnter={handleMenuItemHoverIn}
                onMouseLeave={handleMenuItemHoverOut}
                onClick={() => setIsMenuOpen(false)}
              >
                Premium
              </a>
              <a
                href="/about"
                className="text-gray-300 text-2xl transition-all"
                onMouseEnter={handleMenuItemHoverIn}
                onMouseLeave={handleMenuItemHoverOut}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/reviews"
                className="text-gray-300 text-2xl transition-all"
                onMouseEnter={handleMenuItemHoverIn}
                onMouseLeave={handleMenuItemHoverOut}
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <button
                ref={buttonRef}
                className="text-white px-6 py-2 rounded-full transition-all"
                onMouseEnter={handleButtonHoverIn}
                onMouseLeave={handleButtonHoverOut}
                onClick={handleClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
