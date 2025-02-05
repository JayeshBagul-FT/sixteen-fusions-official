import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: "💻", // Updated icon for Digital Marketing
        title: "Digital Marketing",
        description:
            "Learn powerful strategies to boost online visibility and drive conversions for your brand.",
        link: "#",

    },
    {
        icon: "🌐", // Represents web or global connectivity
        title: "Web Development",
        description: "Expert web development services to create responsive, user-friendly websites tailored to your business needs.",
        link: "#",
    }
    ,
    {
        icon: "🎨", // Represents creativity and design
        title: "Graphic Design",
        description: "Creative graphic design solutions to bring your brand's vision to life with stunning visuals.",
        link: "#",
    }
    ,
    {
        icon: "📱", // Represents mobile and software development
        title: "Apps & Software",
        description: "We provide premium app and software at the very lowest prices.",
        link: "#",
    }


];
const ServiceCard = ({ icon, title, description, link }) => (
    <div style={{ backgroundColor: "#1e1e1e" }}
        className="group relative flex flex-col items-start justify-between p-6 text-white border border-gray-700 rounded-lg hover:shadow-lg hover:border-green-500 hover:-translate-y-2 transition-all duration-300 service-card"
    >
        {/* Icon with background color and padding */}
        <div
            className="flex items-center justify-center w-12 h-12 bg-black-500 text-white rounded-full"
        >
            <span className="text-2xl">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-400 text-left">{description}</p>

        {/* Link */}
        <a
            href={link}
            className="mt-4 text-green-400 group-hover:underline flex items-center"
        >
            Learn More <span className="ml-2">&rarr;</span>
        </a>
    </div>
);


const Services = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);


    return (
        <section className="py-12" style={{ backgroundColor: '#171717' }}>
            <div style={{ width: "100%" }}>
                <div style={{ width: "80%", margin: "auto" }} ref={containerRef}>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white">
                            Our Digital Marketing Services
                        </h2>
                        <p className="mt-2 text-gray-400">
                            Transform your business with our comprehensive digital marketing
                            solutions tailored to your growth.
                        </p>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Dynamic Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none mix-blend-difference z-50"
                style={{ transform: "translate(-50%, -50%)" }}
            ></div>
        </section>
    );
};

export default Services;
