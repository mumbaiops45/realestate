"use client";
import React, { useEffect, useRef, useState } from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Page = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setVisible(true);
                } else {

                    setVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);


    const lines = [
        "Contact Information",
        "Let’s Talk Real Estate",
        "Whether you're searching for your dream home or exploring investment opportunities, connect with our experts for personalized assistance."
    ];

    const WaveText = ({ text, delay = 0 }) => {
        return (
            <span className="inline-block">
                {text.split("").map((char, i) => (
                    <span
                        key={i}
                        className={`inline-block ${visible ? "wave" : "opacity-0"}`}
                        style={{
                            animationDelay: `${delay + i * 0.03}s`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>
        );
    };

    return (
        <div>
            <section
                ref={ref}
                className="relative h-screen flex items-center justify-start text-white overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-center bg-cover scale-110"
                    style={{
                        backgroundImage: "url('/home1.jpg')",
                        transform: visible ? "scale(1.05)" : "scale(1.1)",
                        transition: "transform 1.2s ease-out",
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-2xl ml-10 space-y-6">
                    <p className="text-sm uppercase tracking-widest">
                        <WaveText text={lines[0]} delay={0} />
                    </p>
                    <h2 className="text-4xl font-bold">
                        <WaveText text={lines[1]} delay={0.3} />
                    </h2>
                    <p className="text-lg leading-relaxed">
                        <WaveText text={lines[2]} delay={0.8} />
                    </p>
                </div>
            </section>


            <section className="bg-gray-50 py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">


                    <div className="w-full md:w-1/2 space-y-6">

                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/customer.jpg"
                                alt="customer support"
                                className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Let’s Build Something Great
                            </h2>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                                We’d love to hear about your next project. Whether you’re looking for a new brand identity,
                                a website revamp, or a digital strategy that moves the needle, Nuigy is ready to help you make it happen.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                                <FontAwesomeIcon icon={faLocationDot} className="text-black mt-1" />
                                <span className="text-sm text-gray-700">
                                    Mumbai, Kolset Singlet 302, Thane, Maharashtra
                                </span>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                                <FontAwesomeIcon icon={faLocationDot} className="text-black mt-1" />
                                <span className="text-sm text-gray-700">
                                    Lucknow, Near High Court, Uttar Pradesh
                                </span>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                                <PhoneOutlined className="text-black" />
                                <span className="text-sm text-gray-700">+91 98765 54321</span>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                                <MailOutlined className="text-black" />
                                <span className="text-sm text-gray-700">info@nnc.com</span>
                            </div>

                        </div>
                    </div>


                    <div className="w-full md:w-1/2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">

                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>

                            <form className="space-y-5">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-gray-600">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm text-gray-600">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 hover:scale-[1.02] transition"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <section
                className="h-[300px] bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/ho.avif')" }}
            >
                <div className="w-full h-full bg-black/50 flex items-center px-6 md:px-16">
                    <div className="text-white max-w-xl">
                        <h2 className="text-2xl md:text-3xl font-bold">Ready to Find Your Next Home?</h2>
                        <p className="mt-2 text-sm md:text-base">
                            Whether you're looking to buy, sell, or rent, our expert agents are here
                            to guide you every step of the way. Don't wait - your dream property is just a click away.
                        </p>
                        <button className="mt-4 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            <PhoneOutlined />
                            Get Started Today
                        </button>


                    </div>
                </div>

            </section>

        </div>

    );
};

export default Page;

