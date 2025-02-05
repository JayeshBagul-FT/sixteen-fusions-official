import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

const ServiceMain = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.service-item', {
            scrollTrigger: {
                trigger: '.service-item',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
                toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
        });
    }, []);

    const services = [
        { title: 'SEO Optimization', description: 'Boost your website ranking with advanced SEO strategies.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'chart-line' },
        { title: 'Content Marketing', description: 'Create and distribute valuable content to attract customers.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'file-alt' },
        { title: 'Social Media Marketing', description: 'Leverage social platforms to grow your audience and brand.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'thumbs-up' },
        { title: 'Email Campaigns', description: 'Effective email marketing solutions to engage your audience.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'envelope' },
        { title: 'PPC Advertising', description: 'Target the right audience with pay-per-click ads.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'mouse-pointer' },
        { title: 'Affiliate Marketing', description: 'Expand your reach with a strong affiliate marketing program.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'users' },
        { title: 'Conversion Rate Optimization', description: 'Enhance your website’s performance and conversions.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'percentage' },
        { title: 'Mobile Marketing', description: 'Tap into the power of mobile marketing to reach your audience.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'mobile-alt' },
        { title: 'Video Marketing', description: 'Engage users with compelling video content.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'video' },
        { title: 'Influencer Marketing', description: 'Collaborate with influencers to boost brand awareness.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'star' },
        { title: 'Analytics & Reporting', description: 'Detailed insights and analytics to optimize your campaigns.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'chart-bar' },
        { title: 'Online Reputation Management', description: 'Protect and enhance your brand’s online presence.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'shield-alt' },
        { title: 'E-commerce Marketing', description: 'Boost your online store’s visibility and sales.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'shopping-cart' },
        { title: 'Retargeting Campaigns', description: 'Reconnect with potential customers through retargeting.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'redo' },
        { title: 'Local SEO', description: 'Optimize your online presence for local searches.', learnMoreText: 'Learn More →', learnMoreLink: '#', icon: 'map-marker-alt' },
    ];

    return (
        <>
            <div className="container bg-gray-900 pt-6 px-4 m-0 p-0 pb-10 " style={{ backgroundColor: '#171717' }}>
                <h1 className='text-center text-4xl font-bold py-10 text-sky-100' style={{ fontFamily: 'poppins', letterSpacing: '1.5px' }}>Explore Our Top-Rated Services</h1>
                <div className="flex flex-wrap justify-center gap-6 pt-5">

                    {services.map((service, index) => (

                        <a href="wa.me/9558415401"> <div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-6 transition-all duration-300 transform hover:translate-y-2 hover:shadow-lg"
                        >
                            <div className="text-white border border-gray-700 rounded-lg hover:shadow-lg hover:border-green-500 hover:-translate-y-1 transition-all duration-300 p-10 h-full flex flex-col justify-between">
                                {/* Icon */}
                                <div className="flex justify-center mb-4 text-4xl text-teal-400">
                                    <i className={`fas fa-${service.icon}`}></i>
                                </div>

                                {/* Title */}
                                <h3 className="text-center text-2xl font-semibold mb-3">{service.title}</h3>

                                {/* Description */}
                                <p className="text-center text-gray-400 mb-4 flex-grow">{service.description}</p>

                                {/* Learn More Link */}
                                <a
                                    href={service.learnMoreLink}
                                    className="text-center text-teal-400 font-bold hover:underline block mt-4"
                                >
                                    {service.learnMoreText}
                                </a>
                            </div>
                        </div>
                        </a>
                    ))}

                </div>
            </div>
            <Footer />


        </>
    );
};

export default ServiceMain;
