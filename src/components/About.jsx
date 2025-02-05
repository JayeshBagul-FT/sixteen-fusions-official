import React from 'react';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <div>
                <div className="bg-[#171717] text-white min-h-screen  mx-auto">
                    <div className="container mx-auto px-6 py-12 w-[85%]">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-5xl font-extrabold text-green-400 mb-4">About 16Fusions</h1>
                            <p className="text-gray-300 text-lg">
                                At 16Fusions, we specialize in empowering businesses with cutting-edge digital marketing strategies to drive growth and success.
                            </p>
                        </div>

                        {/* Feature Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    icon: "rocket",
                                    title: "Our Vision",
                                    description: "To revolutionize the digital marketing landscape with innovative solutions that empower businesses worldwide.",
                                },
                                {
                                    icon: "bullseye",
                                    title: "Our Mission",
                                    description: "Deliver personalized and data-driven marketing strategies that drive measurable results.",
                                },
                                {
                                    icon: "lightbulb",
                                    title: "Our Expertise",
                                    description: "SEO, PPC, social media marketing, and brand strategy tailored for your success.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-2"
                                >
                                    <div className="flex justify-center text-4xl text-green-400 mb-4">
                                        <i className={`fas fa-${feature.icon}`}></i>
                                    </div>
                                    <h3 className="text-center text-2xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-center text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mission Statement */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-green-400 mb-4">Our Mission</h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                                At 16Fusions, our mission is to connect businesses with their target audiences through impactful and innovative digital marketing strategies. We aim to turn challenges into opportunities and help businesses achieve unmatched success.
                            </p>
                        </div>

                        {/* Unique Section: Why Choose Us */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-green-400 mb-6">Why Choose Us?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        image: "https://via.placeholder.com/300",
                                        title: "Proven Results",
                                        description: "We deliver campaigns that drive measurable ROI and growth for your business.",
                                    },
                                    {
                                        image: "https://via.placeholder.com/300",
                                        title: "Expert Team",
                                        description: "Our skilled professionals bring years of experience and expertise in digital marketing.",
                                    },
                                    {
                                        image: "https://via.placeholder.com/300",
                                        title: "Cutting-Edge Tools",
                                        description: "We leverage advanced tools and technology to optimize your marketing campaigns.",
                                    },
                                ].map((reason, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-2"
                                    >
                                        <img
                                            src={reason.image}
                                            alt={reason.title}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-center text-2xl font-semibold mb-2">{reason.title}</h3>
                                        <p className="text-center text-gray-400">{reason.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-green-400 mb-6">Discover More</h2>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="16Fusions Intro Video"
                                    className="w-full h-96 rounded-md shadow-lg"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <Footer />
                    </div>
                </div>


            </div>
        </>
    );
}

export default About;

// { new Date().getFullYear() }