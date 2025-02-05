import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Services from './Services';
import PremiumServices from './PremiumServices';
import FoundersSection from './FounderSection';
import HighServices from './HighServices';
import Review from './Review';
import Footer from './../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
        });

        // Initial state - everything invisible
        gsap.set([textRef.current, subtextRef.current, buttonsRef.current], {
            opacity: 0,
            y: 30,
        });

        // Animate elements in sequence
        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
        })
            .to(
                subtextRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.5"
            )
            .to(
                buttonsRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                },
                "-=0.5"
            );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <div>
                <div
                    ref={heroRef}
                    className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h1
                            ref={textRef}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            <span className="block">Elevate Your Online Presence With Us !</span>
                            <span className="text-emerald-500 block mt-2">Premium Marketing</span>
                            <span className="block">Solutions</span>
                        </h1>

                        <p
                            ref={subtextRef}
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            Meta Ads || Google Ads || Linkedin Ads || Premimum Apps & Softwares at Unbeatalble Prices
                            .
                        </p>

                        <div
                            ref={buttonsRef}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform duration-200">
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border border-white hover:border-emerald-500 hover:text-emerald-500 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-200">
                                Explore Services
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-12 bg-black"></div> {/* Spacer to separate from the next section */}
            </div>
            <Services />
            <PremiumServices />
            <HighServices />
            <FoundersSection />``
            <Footer />
        </>

    );
};

export default Home;
