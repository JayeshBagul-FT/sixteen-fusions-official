import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const reviews = [

    {
        name: "Rohan Mehta",
        role: "Graphic Designer",
        review: "The Canva Premium package from 16Fusions has significantly improved my designs. Best pricing in the Indian market and superb assistance!",
        rating: 5,
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/043/774/133/small/portrait-of-a-casually-dressed-smiling-indian-young-man-photo.jpg",
    },
    {
        name: "Arjun Desai",
        role: "Content Creator",
        review: "I’m amazed by the quality of LinkedIn Premium through 16Fusions. Excellent value and prompt customer service tailored to Indian users.",
        rating: 5,
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg",
    },
    {
        name: "Priya Nair",
        role: "Small Business Owner",
        review: "16Fusions provides unmatched value for Canva Premium. Their pricing and customer support have made a big difference for my business.",
        rating: 5,
        imageUrl: "https://cdn.pixabay.com/photo/2021/02/03/09/44/portrait-5977311_640.jpg",
    },
    {
        name: "Priya Nair",
        role: "Small Business Owner",
        review: "16Fusions provides unmatched value for Canva Premium. Their pricing and customer support have made a big difference for my business.",
        rating: 5,
        imageUrl: "https://cdn.pixabay.com/photo/2021/02/03/09/44/portrait-5977311_640.jpg",
    }

];

const Review = () => {
    const scrollRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            }
        );
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="bg-[#171717] text-white py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
            <p className="text-center text-gray-400 mb-8">
                Discover why businesses trust 16Fusions for their digital marketing needs.
            </p>
            <div
                style={{ overflow: 'hidden', width: "80%", margin: "auto" }}
                className="flex overflow-x-auto gap-6 py-4 scrollbar-hide"
                ref={scrollRef}
            >
                {reviews.map((review, index) => (
                    <div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 min-w-[300px] max-w-[300px] flex-shrink-0 hover:scale-105 transform transition-transform"
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className="bg-green-500 w-12 h-12 rounded-full overflow-hidden mb-4"
                                style={{
                                    backgroundImage: `url(${review.imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div>
                                <h3 className="text-lg font-semibold">{review.name}</h3>
                                <p className="text-sm text-gray-400">{review.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4">"{review.review}"</p>
                        <div className="text-yellow-400">
                            {Array(review.rating)
                                .fill(0)
                                .map((_, starIndex) => (
                                    <span key={starIndex} className="text-xl">★</span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-4" style={{ overflow: 'hidden' }}>
                <button
                    onClick={scrollLeft}
                    className="bg-green-500 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-green-600 transition"
                >
                    ❮
                </button>
                <button
                    onClick={scrollRight}
                    className="bg-green-500 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-green-600 transition"
                >
                    ❯
                </button>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-green-600 transition mx-auto block">
                Join Our Success Stories →
            </button>
        </div>
    );
};

export default Review;
