"use client";
import React, { useLayoutEffect, useState } from "react";

const items = [
    "Luxury Residences",
    "Affordable Housing",
    "Commercial Spaces",
    "Investment Properties",
    "Sea View Apartments",
    "Smart Homes",
    "Villas & Penthouses",
];

const leftItems = [
    "Redefining",
    "Real Estate.",
    "Modern Living,",
    "Reimagined.",
    "India’s most trusted destination for premium homes.",
];

const About = () => {
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (!started && scrollY > 0) {
                setStarted(true);
            }

            if (!started) return;

            const triggerPoint = 280;
            const totalSteps = leftItems.length + items.length;

            const currentStep = Math.min(
                totalSteps - 1,
                Math.floor(scrollY / triggerPoint)
            );

            if (currentStep < leftItems.length) {
                setLeftIndex(currentStep);
                setRightIndex(0);
            } else {
                setLeftIndex(leftItems.length - 1);
                setRightIndex(currentStep - leftItems.length + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [started]);

    if (!started) {
        return <section className="h-screen w-full bg-white" />;
    }

    return (
        <section className="relative h-[800vh] bg-gradient-to-b from-blue via-blue-300 to-slate-100">
            <div className="sticky top-0 h-screen flex items-center justify-center">


                <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">


                    <div className="flex flex-col justify-center space-y-0 md:space-y-2 text-center lg:text-left">
                        {leftItems.slice(0, leftIndex + 1).map((text, index) => (
                            <div
                                key={index}
                                className="transition-all duration-700 ease-out"
                            >
                                {index === leftItems.length - 2 ? (
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                                        <span className="text-blue-600">Reimagined.</span>
                                    </h1>
                                ) : index === leftItems.length - 1 ? (
                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        {text}
                                    </p>
                                ) : (
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
                                        {text}
                                    </h1>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md space-y-4">

                            {items.slice(0, rightIndex).map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center  gap-4 p-4 md:p-5 rounded-2xl
                  bg-white/70 backdrop-blur-xl
                  border border-slate-200
                  shadow-sm hover:shadow-xl
                  transition-all duration-500
                  hover:-translate-y-1 hover:bg-white"
                                >
                                    <span className="text-blue-600 font-semibold text-xs md:text-sm bg-blue-50 px-3 py-1 rounded-full">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-gray-800 text-sm md:text-base font-medium flex-1">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;