import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HighServices = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <section className="bg-[#171717] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-gray-400 text-lg mb-10">
                    We deliver exceptional value through our expertise, innovative
                    solutions, and commitment to your success.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Affordable Premium Services",
                            description:
                                "Get access to premium tools and services at significantly reduced prices without compromising on quality.",
                            icon: "💲",
                        },
                        {
                            title: "Fast Implementation",
                            description:
                                "Quick setup and immediate access to all premium features with our streamlined onboarding process.",
                            icon: "⚡",
                        },
                        {
                            title: "24/7 Support",
                            description:
                                "Round-the-clock assistance through WhatsApp for immediate resolution of your queries.",
                            icon: "📞",
                        },
                        {
                            title: "Secure & Reliable",
                            description:
                                "Your accounts and data are protected with enterprise-grade security measures.",
                            icon: "🔒",
                        },
                        {
                            title: "Customizable Solutions",
                            description:
                                "Flexible packages that adapt to your business needs and growth objectives.",
                            icon: "⚙️",
                        },
                        {
                            title: "Performance Tracking",
                            description:
                                "Detailed analytics and reporting to measure the impact of your digital marketing efforts.",
                            icon: "📊",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bg-[#1e1e1e] border border-transparent p-6 rounded-lg shadow-lg hover:border-green-500 transition-all duration-300 transform hover:scale-105"
                            style={{ height: "240px" }}
                        >
                            <div className="text-4xl text-green-500 mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-8 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-500 transition-colors duration-300">
                    Start Your Journey →
                </button>
            </div>
        </section>
    );
};

export default HighServices;
