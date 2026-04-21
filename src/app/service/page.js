// "use client"
// import React, { useState } from "react"
// import { motion } from 'framer-motion';
// import { PhoneOutlined, DownOutlined } from '@ant-design/icons';
// import { services } from "../data/service"
// import { useRouter } from "next/navigation";

// const Page = () => {
//     const [activeIndex, setActiveIndex] = useState(2);

//     const toggle = (index) => {
//         setActiveIndex(index === activeIndex ? null : index)
//     }
//     const router = useRouter();

//     return (
//         <div>
//             <div
//                 className='relative h-[100vh] bg-cover flex items-center px-6 md:px-16'
//                 style={{ backgroundImage: "url('/service.png')" }}
//             >

//                 <div className='absolute inset-0 bg-black/50'></div>


//                 <motion.div
//                     className='relative text-white max-w-xl text-left'
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false, amount: 0.3 }}
//                     transition={{
//                         duration: 1,
//                         ease: "easeOut",
//                     }}
//                 >
//                     <p className='text-sm md:text-base tracking-wide uppercase'>
//                         Our Service
//                     </p>

//                     <h1 className='text-3xl md:text-5xl font-bold my-3 leading-tight'>
//                         Comprehensive Real Estate Solutions
//                     </h1>

//                     <p className='text-sm md:text-lg text-gray-200'>
//                         From property buying and selling to investment guidance, we provide
//                         end-to-end real estate services designed to help you achieve your
//                         goals with confidence.
//                     </p>
//                 </motion.div>
//             </div>

//             <section className="px-6 md:px-20 py-16 bg-gray-50">

//                 <div className="max-w-4xl mb-14">
//                     <p className="text-sm uppercase tracking-widest text-blue-600 font-medium">
//                         Our Counselling Services
//                     </p>

//                     <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mt-3">
//                         Tailored Support for Every Stage of Life
//                     </h2>
//                 </div>


//                 <div className="space-y-6">
//                     {services.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`rounded-2xl  bg-white shadow-sm transition-all duration-300 
//                 ${activeIndex === index ? "shadow-md" : "hover:shadow-md"}`}
//                         >

//                             <div
//                                 onClick={() => toggle(index)}
//                                 className="flex justify-between items-center p-6 md:p-8 cursor-pointer"
//                             >
//                                 <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
//                                     {item.title}
//                                 </h3>

//                                 <div className="text-xl text-gray-500 transition-transform duration-300">
//                                     {activeIndex === index ? (
//                                         <DownOutlined className="rotate-180" />
//                                     ) : (
//                                         <DownOutlined />
//                                     )}
//                                 </div>
//                             </div>


//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out 
//                     ${activeIndex === index
//                                         ? "max-h-[800px] opacity-100 pb-8 px-6 md:px-8"
//                                         : "max-h-0 opacity-0 px-6 md:px-8"
//                                     }`}
//                             >


//                                 <div className="grid md:grid-cols-2 gap-8">
//                                     <div className="flex flex-col">
//                                         <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//                                             {item.content}
//                                         </p>

//                                         <button
//                                             onClick={() => router.push(item.route)}
//                                             className="mt-4 w-fit px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition" >
//                                             See Service Details
//                                         </button>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <img
//                                             src={item.image1}
//                                             alt={item.title}
//                                             className="rounded-xl w-full h-[180px] md:h-[220px] object-cover hover:scale-105 transition duration-300"
//                                         />
//                                         <img
//                                             src={item.image2}
//                                             alt={item.title}
//                                             className="rounded-xl w-full h-[180px] md:h-[220px] object-cover hover:scale-105 transition duration-300"
//                                         />

//                                     </div>
                                   
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section
//                 className="h-[300px] bg-cover bg-center flex items-center"
//                 style={{ backgroundImage: "url('/ho.avif')" }}
//             >
//                 <div className="w-full h-full bg-black/50 flex items-center px-6 md:px-16">
//                     <div className="text-white max-w-xl">
//                         <h2 className="text-2xl md:text-3xl font-bold">Ready to Find Your Next Home?</h2>
//                         <p className="mt-2 text-sm md:text-base">
//                             Whether you're looking to buy, sell, or rent, our expert agents are here
//                             to guide you every step of the way. Don't wait - your dream property is just a click away.
//                         </p>
//                         <button className="mt-4 flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-200 transition">
//                             <PhoneOutlined />
//                             Get Started Today
//                         </button>


//                     </div>
//                 </div>

//             </section>

//         </div>
//     )
// }

// export default Page


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneOutlined, DownOutlined } from "@ant-design/icons";
import { services } from "../data/service";
import { useRouter } from "next/navigation";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const accordionContent = {
    hidden: { height: 0, opacity: 0 },
    show: {
        height: "auto",
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
};

const Page = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const router = useRouter();

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative h-[100vh] flex items-center px-6 md:px-16 bg-cover bg-center"
                style={{ backgroundImage: "url('/service.png')" }}>

                <div className="absolute inset-0 bg-black/60" />

                <motion.div
                    className="relative text-white max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-300">
                        Our Services
                    </p>

                    <h2 className="text-4xl md:text-4xl font-bold mt-3 leading-tight">
                        Comprehensive Real Estate Solutions
                    </h2>

                    <p className="mt-4 text-gray-200 text-sm md:text-lg leading-relaxed">
                        From property buying and selling to investment guidance,
                        we deliver end-to-end real estate solutions designed to help you succeed with confidence.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                        Explore Services
                    </motion.button>
                </motion.div>
            </section>

            {/* SERVICES SECTION */}
            <section className="px-6 md:px-20 py-20 bg-gray-50">

                <motion.div
                    className="max-w-4xl mb-14"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                        Our Counselling Services
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-3 leading-tight">
                        Tailored Support for Every Stage of Life
                    </h2>
                </motion.div>

                {/* ACCORDION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`rounded-2xl bg-white shadow-sm border transition-all duration-300 
                                ${activeIndex === index ? "shadow-lg" : "hover:shadow-md"}`}
                        >

                            {/* HEADER */}
                            <div
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center p-6 md:p-8 cursor-pointer"
                            >
                                <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>

                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-500"
                                >
                                    <DownOutlined />
                                </motion.div>
                            </div>

                            {/* CONTENT */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        variants={accordionContent}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="px-6 md:px-8 pb-8 overflow-hidden"
                                    >
                                        <div className="grid md:grid-cols-2 gap-8 items-center">

                                            {/* TEXT */}
                                            <div>
                                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                                    {item.content}
                                                </p>

                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => router.push(item.route)}
                                                    className="mt-5 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                                                >
                                                    See Service Details
                                                </motion.button>
                                            </div>

                                            {/* IMAGES */}
                                            <div className="grid grid-cols-2 gap-4">
                                                {[item.image1, item.image2].map((img, i) => (
                                                    <motion.img
                                                        key={i}
                                                        src={img}
                                                        alt={item.title}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="rounded-xl w-full h-[180px] md:h-[220px] object-cover"
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA SECTION */}
            <section
                className="h-[320px] bg-cover bg-center relative"
                style={{ backgroundImage: "url('/ho.avif')" }}
            >
                <div className="absolute inset-0 bg-black/60 flex items-center px-6 md:px-16">

                    <motion.div
                        className="text-white max-w-xl"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Ready to Find Your Next Home?
                        </h2>

                        <p className="mt-3 text-sm md:text-base text-gray-200">
                            Whether you're buying, selling, or renting, our experts are here
                            to guide you every step of the way.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-5 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
                        >
                            <PhoneOutlined />
                            Get Started Today
                        </motion.button>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default Page;