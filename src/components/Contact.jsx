import React from "react";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="bg-[#171717] text-white min-h-screen">
            {/* Header Section */}
            <header className="py-6 border-b border-gray-700">
                <div className="container mx-auto w-[85%] flex justify-between   items-center">
                    <h1 className="text-2xl font-bold text-teal-400 text-center">ChatCloud Help Center</h1>
                    <div>
                        <button className="px-4 py-2 bg-teal-500 text-white rounded mr-4 hover:bg-teal-400">
                            Contact Sales
                        </button>
                        <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Section */}
            <main className="container mx-auto py-10 w-[85%]">
                {/* Contact Us Form */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact Us</h2>
                    <p className="mb-4 text-gray-400">
                        Using ChatCloud? Sign in so we can contact you for support. If that’s not possible,
                        send us your request manually.
                    </p>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg">
                        <form>
                            <label className="block mb-4">
                                <span className="text-gray-300">Your Email Address</span>
                                <input
                                    type="email"
                                    className="w-full mt-1 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                                    placeholder="Enter your email"
                                />
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                {[
                                    "Billing & Plans",
                                    "Connections",
                                    "Sign In & Up",
                                    "Channels",
                                    "Notifications",
                                    "Mobile Experience",
                                    "Workspace Managing",
                                ].map((topic, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-2 bg-teal-500 text-white rounded text-sm hover:bg-teal-400"
                                        type="button"
                                    >
                                        {topic}
                                    </button>
                                ))}
                            </div>
                            <label className="block mb-4">
                                <span className="text-gray-300">Can’t find above? Tell us below:</span>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600"
                                    placeholder="Enter your topic"
                                />
                            </label>
                            <button className="w-full py-3 bg-teal-500 rounded text-white font-bold hover:bg-teal-400">
                                Send your request
                            </button>
                        </form>
                    </div>
                </section>

                {/* Need Help Section */}
                <section>
                    <h2 className="text-3xl font-bold text-teal-400 mb-6">Need Help?</h2>
                    <p className="mb-4 text-gray-400">
                        Want answers right away? Select your reference below for our answers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "Getting Started", description: "Everything you need to know to get started and get to work in ChatCloud." },
                            { title: "Admin Settings", description: "Learn how to manage your current workspace or your enterprise space." },
                            { title: "Server Setup", description: "Connect, simplify, and automate. Discover the power of apps and tools." },
                            { title: "Login and Verification", description: "Learn how to sign in with your email address, or your Apple or Google." },
                            { title: "Account Setup", description: "Adjust your profile and preferences to make ChatCloud work just for you." },
                            { title: "Trust & Safety", description: "Learn how we manage and protect your data securely." },
                            { title: "Channel Setup", description: "From channels to search, learn how ChatCloud works from top to bottom." },
                            { title: "Permissions", description: "Grant permissions to users and manage workspace access effectively." },
                            { title: "Billing Help", description: "Understand your billing details and subscription plans." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-teal-400 mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Contact;
