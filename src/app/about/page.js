"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { values, data, testimonials } from "../data/data";



const Page = () => {

    const [step, setStep] = useState(0);
    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (!started && scrollY > 50) {
                setStarted(true);
            }

            if (!started) return;

            const triggerPoint = 250;
            const totalSteps = 4;

            const currentStep = Math.min(
                totalSteps - 1,
                Math.floor(scrollY / triggerPoint)
            );

            setStep(currentStep + 1);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [started]);


    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[index];

    return (
        <div className="bg-white text-gray-800 ">
            
            <div className="bg-white text-gray-800">
                <div className="relative w-full  h-screen">
                    <img
                        src="home.jpg"
                        alt="Hero Image"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Crafting Exceptional Living Experiences
                        </h1>

                        <p className="text-base md:text-lg text-gray-200 max-w-3xl">
                            At Welcome Realty LLP, we go beyond property transactions — creating spaces where life thrives and investments grow across Mumbai & Navi Mumbai.
                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto mb-20 px-6 py-16 rounded-3xl  ">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center md:text-left">
                    Who We Are
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="house.jpg"
                            alt="Luxury Property"
                            className={`w-full h-full object-cover transition-all duration-700 ease-out
        ${step >= 1 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-105"}`}
                        />


                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>


                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow-md text-xs font-medium text-gray-800">
                            Featured Property
                        </div>

                    </div>


                    <div className="space-y-6">


                        <div
                            className={`transition-all duration-700 ease-out
        ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Welcome Realty LLP is a trusted real estate consultancy known for its integrity, transparency, and client-first approach. Since 2009, we have helped hundreds of families and investors find the right properties in Mumbai & Navi Mumbai.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
                                Our team combines deep local market knowledge with strategic insights to deliver the best outcomes. From luxury homes to affordable housing and investment opportunities, we ensure every client finds the perfect match.
                            </p>
                        </div>


                        <div
                            className={`p-6 rounded-2xl bg-white shadow-md border border-gray-100
        transition-all duration-700 ease-out hover:shadow-lg
        ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                To simplify the real estate journey through transparent, reliable, and personalized services — helping clients make confident property decisions.
                            </p>
                        </div>


                        <div
                            className={`p-6 rounded-2xl bg-white shadow-md border border-gray-100
        transition-all duration-700 ease-out hover:shadow-lg
        ${step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                To be recognized as one of Mumbai’s most trusted real estate partners, delivering consistent value and exceptional client experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#d3d6e0] ">
                <div ref={ref} className="max-w-6xl  mx-auto mb-32">
                    <h2 className="text-3xl font-bold text-center  mb-10">
                        Our Core Values
                    </h2>

                    <div className="relative h-[200vh]">
                        {values.map((item, index) => {
                            const y = useTransform(
                                scrollYProgress,
                                [0, 1],
                                [index * 10, -index * 10]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    style={{ y }}

                                    className="sticky top-20 mx-auto w-full max-w-2xl mb-6 p-6 border rounded-xl bg-blue-50 shadow-lg"
                                >
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto bg-black text-white rounded-2xl p-10 grid md:grid-cols-4 gap-8 text-center mb-16">
                <div>
                    <h3 className="text-3xl font-bold">10+</h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">1000+</h3>
                    <p>Happy Families</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">500+</h3>
                    <p>Properties Closed</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">100%</h3>
                    <p>Verified Listings</p>
                </div>
            </div>


            <section className=" bg-blue-50  py-10 flex flex-col lg:flex-row gap-10">
                <div className="lg:w-[30%]  pl-[60px] flex items-center">
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                        Explore High-Value Property Investments
                    </h2>
                </div>

                <div className="lg:w-[70%] w-full pl-[60px] space-y-6">

                    {data.map((item, index) => (
                        <div key={index} className="group cursor-pointer">

                            <div className="flex items-center gap-6">
                                <span className="w-10 text-lg font-light">{item.id}</span>
                                <span className="text-lg font-semibold tracking-wider">
                                    {item.title}
                                </span>
                            </div>


                            <p className="ml-16 mt-2 text-gray-600 leading-relaxed max-w-2xl">
                                {item.desc}
                            </p>


                            <div className="mt-6 h-[1px] w-full bg-gray-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100  group-hover:bg-black"></div>

                        </div>
                    ))}
                </div>

            </section>



            <section className="py-16 bg-white text-center">


                <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
                <p className="text-gray-500 mt-2">Meet the talented people behind our success</p>


                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                    Meet All Team
                </button>


                <div className="mt-12 flex flex-wrap justify-evenly gap-8 px-4">


                    <div className="bg-white w-64 p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
                        <img src="lead.jpg" alt="Founder" className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">Rahul Sharma</h3>
                        <p className="text-gray-500 text-sm">Founder & Design Director</p>
                    </div>


                    <div className="bg-white w-64 p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
                        <img src="lead1.jpg" alt="Engineering Head" className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">Amit Verma</h3>
                        <p className="text-gray-500 text-sm">Head of Modular Engineering</p>
                    </div>


                    <div className="bg-white w-64 p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
                        <img src="lead2.jpg" alt="Construction Lead" className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">Vikram Singh</h3>
                        <p className="text-gray-500 text-sm">Construction & Installation Lead</p>
                    </div>

                </div>

            </section>



            <section className="h-screen bg-[url('/home22.jpg')] bg-cover bg-center relative">


                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>


                <div className="relative z-10 h-full flex items-end sm:items-center px-4 sm:px-10 pb-10 sm:pb-0">

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                    p-5 sm:p-8 
                    w-full sm:max-w-md md:max-w-lg 
                    rounded-2xl shadow-2xl 
                    flex flex-col justify-between">


                        <div>
                            <p className="text-base sm:text-lg md:text-xl text-white mb-4 leading-relaxed font-medium">
                                “{current.text}”
                            </p>

                            <h4 className="font-semibold text-white text-lg sm:text-xl">
                                {current.name}
                            </h4>

                            <span className="text-xs sm:text-sm text-white/70 mt-1 block">
                                {current.role}
                            </span>
                        </div>


                        <div className="flex justify-end gap-4 mt-6 text-white">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition hover:scale-110"
                            >
                                <AiOutlineArrowLeft className="text-lg sm:text-xl" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition hover:scale-110"
                            >
                                <AiOutlineArrowRight className="text-lg sm:text-xl" />
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            <section className="max-w-6xl mx-auto bg-white px-6 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">

                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight text-black">
                        Start your modular home journey with ease and intelligent design.
                    </h1>


                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">


                        <div className="md:col-span-1">
                            <img
                                src="/imghouse.jpg"
                                alt="House 1"
                                className="rounded-xl w-full h-64 object-cover shadow-lg"
                            />
                        </div>


                        <div className="md:col-span-1">
                            <img
                                src="/house2.jpg"
                                alt="House 2"
                                className="rounded-xl w-full h-80 object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:col-span-1">
                            <img
                                src="/house3.jpg"
                                alt="House 3"
                                className="rounded-xl w-full h-96 object-cover shadow-lg"
                            />
                        </div>
                    </div>


                    <div className="mt-12 flex justify-center">
                        <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
                            Start Building Your Home
                        </button>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Page


