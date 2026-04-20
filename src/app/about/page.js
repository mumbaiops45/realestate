"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { values, data, testimonials } from "../data/data";
import { Noto_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});



const Page = () => {

    const [step, setStep] = useState(0);
    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const router = useRouter();

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="bg-white text-gray-800 ">


            <div className="bg-white text-gray-800">
                <div className="relative w-full  h-screen">
                    <motion.img
                        src="home.jpg"
                        alt="Hero Image"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}

                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">

                        <motion.h1 className="text-3xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Crafting Exceptional Living Experiences
                        </motion.h1>

                        <motion.p
                            className="text-base md:text-lg text-gray-200 max-w-3xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            At Welcome Realty LLP, we go beyond property transactions — creating spaces where life thrives and investments grow across Mumbai & Navi Mumbai.
                        </motion.p>
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
                <div ref={ref} className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-left  mb-10">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative h-[200vh]">
                            {values.map((item, index) => {
                                const y = useTransform(
                                    scrollYProgress,
                                    [0, 1],
                                    [index * 20, -index * 20]
                                );

                                return (
                                    <motion.div
                                        key={index}
                                        style={{ y }}
                                        className="sticky top-24 w-full mb-6 p-6 border rounded-xl bg-blue-50 shadow-lg"
                                    >
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="hidden md:block relative">
                            <div className="sticky top-24">
                                <img
                                    src="/realestate.jpg"
                                    alt="Real Estate"
                                    className="w-full h-[450px] object-cover rounded-xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="max-w-8xl mx-auto bg-black text-white  p-10 grid md:grid-cols-4 gap-8 text-center ">
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



            <section className="py-16 bg-white text-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
                    <p className="text-gray-500 mt-2">
                        Meet the talented people behind our success
                    </p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Meet All Team
                </motion.button>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-12 flex flex-wrap justify-evenly gap-8 px-4"
                >
                    {[
                        {
                            img: "lead.jpg",
                            name: "Rahul Sharma",
                            role: "Founder & Design Director",
                        },
                        {
                            img: "lead1.jpg",
                            name: "Amit Verma",
                            role: "Head of Modular Engineering",
                        },
                        {
                            img: "lead2.jpg",
                            name: "Vikram Singh",
                            role: "Connstruction & Installation Lead",
                        },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            variants={card}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                            }}
                            className="bg-white w-64 p-5 rounded-xl shadow-md transition"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />

                            <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-500 text-sm">{member.role}</p>
                        </motion.div>
                    ))
                    }

                </motion.div>

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


            <section className="max-w-6xl mx-auto bg-white px-6 py-20 md:py-28">
                <div className="max-w-7xl mx-auto">

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`${notoSans.className}text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight text-black`}
                    >
                        Start your modular home journey with ease and intelligent design.
                    </motion.h1>


                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

                        <motion.div whileHover={{ scale: 1.05 }}>
                            <img src="/imghouse.jpg" className="rounded-2xl shadow-xl h-64 w-full object-cover" />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }}>
                            <img src="/house2.jpg" className="rounded-2xl shadow-xl h-80 w-full object-cover" />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }}>
                            <img src="/house3.jpg" className="rounded-2xl shadow-xl h-96 w-full object-cover" />
                        </motion.div>

                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 flex justify-center"
                    >
                        <button
                            onClick={() => router.push("/contact")}
                            className="px-10 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition">
                            Start Building Your Home
                        </button>
                    </motion.div>

                </div>
            </section>

        </div>
    )
}

export default Page


