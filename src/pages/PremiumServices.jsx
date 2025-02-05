import React from "react";

const PremiumServices = () => {
    return (
        <div className="w-full bg-[#171717] text-white py-16 flex justify-center m-0 p-0">
            <div className="w-4/5">
                {/* Title with simple fade-in animation */}
                <h2 className="text-3xl md:text-5xl font-bold text-center animate-[fadeIn_0.5s_ease-out]">
                    Premium Services at Unbeatable Prices
                </h2>
                <p className="text-center mt-4 text-gray-400 animate-[fadeIn_0.5s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                    Get access to premium tools and services that will elevate your digital presence
                    without breaking the bank.
                </p>

                {/* Cards Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* LinkedIn Premium Card */}
                    <div className="group p-6 bg-[#1f1f1f] rounded-xl border border-gray-700 relative overflow-hidden 
                                hover:scale-102 hover:shadow-2xl hover:border-blue-500 transition-all duration-300
                                animate-[slideUp_0.4s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300 
                                    [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_70%)]"></div>

                        {/* Spotlight effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300
                                    [background:radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(59,130,246,0.15)_0%,transparent_50%)]"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                            }}></div>

                        {/* Header */}
                        <div className="flex items-center mb-4 relative z-10">
                            <div className="bg-blue-500 p-3 rounded-full transform group-hover:rotate-12 transition-transform duration-300">
                                <img
                                    src="/api/placeholder/24/24"
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-blue-900 text-white text-sm px-3 py-1 rounded-full shadow-lg
                                        group-hover:scale-110 transition-transform duration-300">
                                Most Popular
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold relative z-10 group-hover:text-blue-400 transition-colors duration-300">
                            LinkedIn Premium
                        </h3>
                        <ul className="mt-4 text-gray-400 space-y-2 relative z-10">
                            {["InMail Credits for Direct Outreach", "Advanced Search Filters",
                                "Competitive Insights", "Learning Courses Access"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                                        style={{ transitionDelay: `${index * 50}ms` }}>
                                        <span className="text-green-500">✔</span> {item}
                                    </li>
                                ))}
                        </ul>

                        {/* Button with hover effect */}
                        <button className="mt-6 w-full py-2 bg-blue-500 rounded text-white font-semibold relative z-10
                                       hover:bg-blue-600 transition duration-300 group-hover:shadow-lg
                                       overflow-hidden">
                            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                                Get Started &#8594;
                            </span>
                        </button>
                    </div>

                    {/* Canva Premium Card */}
                    <div className="group p-6 bg-[#1f1f1f] rounded-xl border border-gray-700 relative overflow-hidden 
                                hover:scale-102 hover:shadow-2xl hover:border-purple-500 transition-all duration-300
                                animate-[slideUp_0.4s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300 
                                    [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_70%)]"></div>

                        {/* Spotlight effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300
                                    [background:radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(168,85,247,0.15)_0%,transparent_50%)]"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                            }}></div>

                        {/* Header */}
                        <div className="flex items-center mb-4 relative z-10">
                            <div className="bg-purple-500 p-3 rounded-full transform group-hover:rotate-12 transition-transform duration-300">
                                <img
                                    src="/api/placeholder/24/24"
                                    alt="Canva"
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-purple-900 text-white text-sm px-3 py-1 rounded-full shadow-lg
                                        group-hover:scale-110 transition-transform duration-300">
                                Most Value
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold relative z-10 group-hover:text-purple-400 transition-colors duration-300">
                            Canva Premium
                        </h3>
                        <ul className="mt-4 text-gray-400 space-y-2 relative z-10">
                            {["100M+ Premium Stock Photos", "Custom Templates Access",
                                "Brand Kit Features", "Background Remover Tool"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                                        style={{ transitionDelay: `${index * 50}ms` }}>
                                        <span className="text-green-500">✔</span> {item}
                                    </li>
                                ))}
                        </ul>

                        {/* Button with hover effect */}
                        <button className="mt-6 w-full py-2 bg-purple-500 rounded text-white font-semibold relative z-10
                                       hover:bg-purple-600 transition duration-300 group-hover:shadow-lg
                                       overflow-hidden">
                            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                                Get Started &#8594;
                            </span>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center mt-8 text-gray-500 animate-[fadeIn_0.5s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                    All premium services come with dedicated support and regular updates.
                </p>
                <p className="text-center text-green-400 mt-2 cursor-pointer hover:text-green-300 transition-colors duration-300
                          animate-[fadeIn_0.5s_ease-out_0.7s] opacity-0 [animation-fill-mode:forwards]">
                    Contact us for custom packages &#8594;
                </p>
            </div>
            {/* jsx global */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default PremiumServices;