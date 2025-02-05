import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {

    return (
        <>
            <div className="bg-[#171717]">
                <div className="max-w-7xl py-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-100 mb-4">16fusions</h2>
                        <p className="mb-4 text-gray-400">
                            Elevate your digital presence with our premium marketing services
                            and solutions.
                        </p>
                        <div className="flex space-x-4 text-gray-400">
                            <a
                                href="https://www.facebook.com/share/1AiYx6j13H/"
                                target="_self"
                                rel="noopener noreferrer"
                                className="hover:text-gray-100"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/16fusions_/profilecard/?igsh=c3BkazU4YXphaHB4"
                                target="_self"
                                rel="noopener noreferrer"
                                className="hover:text-gray-100"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="http://wa.me/9558415401"
                                target="_self"
                                rel="noopener noreferrer"
                                className="hover:text-gray-100"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kalal-rahul-992b2131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_self"
                                rel="noopener noreferrer"
                                className="hover:text-gray-100"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                    </div>

                    {/* Our Services Section */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-100 mb-4">Our Services</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-gray-100">Canvas Premium</li>
                            <li className="hover:text-gray-100">LinkedIn Premium</li>
                            <li className="hover:text-gray-100">Digital Marketing</li>
                            <li className="hover:text-gray-100">Social Media Management</li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-100 mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-gray-100">About Us</li>
                            <li className="hover:text-gray-100">Pricing</li>
                            <li className="hover:text-gray-100">Contact</li>
                            <li className="hover:text-gray-100">Reviews</li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-100 mb-4">Contact Us</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-gray-100">
                                <a
                                    href="mailto:info@16fusions.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <i className="fas fa-envelope mr-2"></i> info@16fusions.com
                                </a>
                            </li>
                            <li className="hover:text-gray-100">
                                <a
                                    href="http://wa.me/9558415401"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i> +91 9558415401
                                </a>
                            </li>
                            <li className="hover:text-gray-100">
                                <a
                                    href="https://www.linkedin.com/in/kalal-rahul-992b2131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
                                </a>
                            </li>
                            <li className="hover:text-gray-100">
                                <a
                                    href="https://www.facebook.com/share/1AiYx6j13H/"
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <i className="fab fa-facebook mr-2"></i> Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
