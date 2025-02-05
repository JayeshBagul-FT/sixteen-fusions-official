import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'

const news = () => {


    const WhatsAppSection = () => {
        const containerRef = useRef(null);
        const headingRef = useRef(null);
        const listRef = useRef(null);
        const buttonRef = useRef(null);

        useEffect(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from(containerRef.current, { opacity: 0, y: 50, duration: 1 })
                .from(headingRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
                .from(listRef.current.children, {
                    opacity: 0,
                    x: -20,
                    duration: 0.5,
                    stagger: 0.2,
                }, "-=0.5")
                .from(buttonRef.current, { opacity: 0, scale: 0.8, duration: 0.8 }, "-=0.5");
        }, []);

        return (
            <div
                ref={containerRef}
                className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-center items-center px-6"
            >
                <div className="text-center max-w-2xl">
                    <h1 ref={headingRef} className="text-5xl font-extrabold mb-6">
                        Get Started With 16Fusions Today
                    </h1>
                    <p className="text-gray-400 mb-10 leading-relaxed">
                        Transform your digital presence with us. Connect instantly on WhatsApp for
                        premium services at unbeatable prices. Let’s take your business to the next level.
                    </p>
                    <ul ref={listRef} className="text-left text-lg space-y-4 mb-10">
                        <li className="flex items-center">
                            <span className="text-green-400 mr-3">✔</span> Quick Replies to Your Queries
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-400 mr-3">✔</span> Tailored Business Solutions
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-400 mr-3">✔</span> Special Discounts and Offers
                        </li>
                    </ul>
                    <a
                        ref={buttonRef}
                        href="https://wa.me/1234567890" // Replace with your WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition duration-300"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
                <div className="mt-16 text-center border-t border-gray-700 pt-8">
                    <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
                    <div className="text-lg space-y-4">
                        <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}
export default news;
