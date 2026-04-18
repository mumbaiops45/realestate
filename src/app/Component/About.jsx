"use client"

import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="w-full bg-white py-28 px-6 lg:px-24 overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="lg:col-span-5"
                >
                    <h2 className="text-4xl md:text-5xl font-light leading-tight text-gray-900 tracking-tight">
                        We create modular and tiny homes designed for modern living.
                    </h2>

                    <div className="mt-6 h-[1px] w-24 bg-gray-300"></div>
                </motion.div>

               
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="lg:col-span-7 flex justify-end"
                >
                    <div className="w-full max-w-[460px] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src="/propertyadver.jpg"
                            alt="Modern Home"
                            className="w-full h-[380px] object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                        />
                    </div>
                </motion.div>
            </div>

            
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

               
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="lg:col-span-3"
                >
                    <p className="text-xs tracking-[0.35em] text-gray-400 uppercase">
                        About Pody
                    </p>
                </motion.div>

                <div className="lg:col-span-9 grid md:grid-cols-2 gap-14">

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Pody specializes in crafting modular and tiny homes tailored for contemporary living.
                        Our efficient process, eco-friendly materials, and precise construction simplify the
                        journey of owning a home that fits your lifestyle without unnecessary complexity.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        By combining smart design, factory-built precision, and transparency, we move homeowners
                        faster from concept to reality. Every Pody home is crafted with detail, quality, and
                        a deep respect for modern living standards.
                    </motion.p>

                </div>
            </div>
        </section>
    );
};

export default About;