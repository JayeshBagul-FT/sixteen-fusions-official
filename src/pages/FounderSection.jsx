import React, { useEffect, useRef } from "react";
import { Linkedin, MessageCircle } from "lucide-react";
import { gsap } from "gsap";

const FoundersSection = () => {
    const foundersRef = useRef([]);

    const founders = [
        {

            name: "Rahul Kalal",
            role: "Co-Founder & Marketing Strategist",
            img: "./src/assets/founder.jpg",
            description:
                "Specialized in digital marketing strategy with 1+ years of experience in growing businesses through innovative marketing solutions.",
            background: "bg-[#1a2b32]"
        },
        {
            name: "Sara",
            role: "Co-Founder & Creative Director",
            description:
                "Expert in brand development and creative strategy with a proven track record of creating impactful digital campaigns.",
            background: "bg-[#1a1d24]"
        }
    ];

    useEffect(() => {
        // GSAP animation for section content
        gsap.fromTo(
            ".founders-header",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
        );

        // Animate each founder box on load
        gsap.fromTo(
            foundersRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.3,
                delay: 0.5
            }
        );
    }, []);

    return (
        <div className="min-h-screen bg-[#171717] text-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 founders-header">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Meet Our Founders
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The visionaries behind 16Fusions, dedicated to transforming businesses through innovative digital marketing solutions.
                    </p>
                </div>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            ref={(el) => (foundersRef.current[index] = el)}
                            className={`${founder.background} rounded-2xl p-8 relative min-h-[500px] flex flex-col max-w-sm mx-auto w-full hover:shadow-xl hover:scale-105 transition-transform duration-300`}
                        >
                            {/* Profile Image */}
                            <div className="relative mb-10">
                                <div className="w-36 h-36 mx-auto rounded-full bg-[#FFE4D6]">
                                    <img
                                        src={founder.img}
                                        alt={founder.name}
                                        className="w-full h-full object-cover"
                                        style={{ borderRadius: '50%', filter: 'dropShadow(10px 10px 10px black)' }}
                                    />
                                </div>
                                <div className="absolute top-0 right-0">
                                    <div className="bg-[#10B981] p-1.5 rounded">
                                        <Linkedin className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-white text-center">
                                    {founder.name}
                                </h3>
                                <p className="text-[#10B981] mb-6 font-medium text-center">
                                    {founder.role}
                                </p>
                                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                                    {founder.description}
                                </p>

                                {/* Social Icons */}
                                <div className="flex items-center gap-4 mt-auto justify-center">
                                    <MessageCircle className="w-5 h-5 text-gray-400 hover:text-[#10B981] cursor-pointer transition-colors" />
                                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#10B981] cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoundersSection;
