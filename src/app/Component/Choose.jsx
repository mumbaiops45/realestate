// import React from 'react'

// const Choose = () => {

//     const features = [
//         {
//             title: "Trusted Since 2009",
//             description: "Over a decade of experience building strong client trust and long-term relationships."
//         },
//         {
//             title: "Local Market Expertise",
//             description: "Deep knowledge of Mumbai & Navi Mumbai to get you the best deals."
//         },
//         {
//             title: " Verified Properties",
//             description: "All listings are verified for legal clarity and peace of mind."
//         },
//         {
//             title: " End-to-End Assistance",
//             description: "We guide you from property search to final paperwork."
//         },
//         {
//             title: "Personalized Service",
//             description: "Tailored solutions based on your lifestyle and budget."
//         },
//         {
//             title: "Transparent Deals",
//             description: "No hidden costs — just honest and clear transactions."
//         }
//     ];

//     return (

//         <section className="bg-gradient-to-b from-blue via-blue-300 to-slate-100 py-16 px-6 md:px-16 min-h-screen">
//             <div className="flex flex-col lg:flex-row gap-12">
//                 <div className="lg:w-1/2 text-left flex flex-col justify-center lg:sticky lg:top-20 h-fit">
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                         Why Choose Us
//                     </h1>
//                     <p className="text-gray-900 text-lg leading-relaxed">
//                         At Welcome Realty LLP, we go beyond just property transactions —
//                         delivering trust, transparency, and unmatched expertise since 2009.
//                         Helping you find the perfect home in Mumbai & Navi Mumbai.
//                     </p>
//                 </div>
//                 <div className="lg:w-1/2">
//                     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
//                         {features.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white w-full h-64 rounded-full shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center p-6"
//                             >
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     {item.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//         </section>

//     )
// }

// export default Choose


"use client"
import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, BadgeCheck, FileText, User, Eye } from 'lucide-react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Choose = () => {

    const features = [

        {
            title: "Trusted Since 2009",
            description: "With more than a decade of consistent experience in the real estate industry, we have successfully built strong relationships with clients based on trust, transparency, and reliable service. Our long-standing presence reflects our commitment to quality and professionalism.",
            icon: <ShieldCheck size={28} />
        },
        {
            title: "Local Market Expertise",
            description: "We possess in-depth knowledge of the Mumbai and Navi Mumbai property markets, including emerging locations, pricing trends, and investment opportunities. This allows us to guide you toward the most suitable and valuable property decisions.",
            icon: <MapPin size={28} />
        },
        {
            title: "Verified Properties",
            description: "Every property listed by us goes through a strict verification process to ensure complete legal clarity, authenticity, and safety. We prioritize your peace of mind by making sure all documentation and ownership details are properly validated.",
            icon: <BadgeCheck size={28} />
        },
        {
            title: "End-to-End Assistance",
            description: "From the initial stage of property search to site visits, negotiations, documentation, and final registration, we provide complete assistance at every step to ensure a smooth and stress-free experience.",
            icon: <FileText size={28} />
        },
        {
            title: "Personalized Service",
            description: "We understand that every client has unique needs, preferences, and financial goals. That’s why we offer tailored property solutions designed specifically to match your lifestyle, budget, and long-term objectives.",
            icon: <User size={28} />
        },
        {
            title: "Transparent Deals",
            description: "We believe in complete honesty in every transaction, ensuring there are no hidden charges or unclear terms. Our transparent approach helps you make confident and well-informed decisions with full clarity.",
            icon: <Eye size={28} />
        }

    ];

    const featureImages = [
        "/Sales.webp",
        "/market.webp",
        "/propertysold.jpg",
        "/salehome.jpg",
        "/consluting.webp",
        "/investme.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % features.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? features.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const item = features[currentIndex];

    return (
        // <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 md:px-16 py-20 overflow-hidden">
        <section className="relative min-h-screen bg-gradient-to-br from-blue-300 via-gray-950 to-slate-800 px-6 md:px-16 py-20 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

            <div className="max-w-2xl mb-16 relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Why Choose Us
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                    At <span className="text-white font-semibold">Welcome Realty LLP</span>,
                    we go beyond property transactions — delivering trust, transparency,
                    and unmatched expertise since 2009.
                </p>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div
                    className="group relative w-full md:w-[500px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-56 flex flex-col justify-between transition duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"
                >
                    <div className='text-white group-hover:text-white transition'>
                        {item.icon}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                        </p>

                        <div className="flex items-center justify-between text-white mt-4">
                            <ArrowLeftOutlined
                                onClick={handlePrev}
                                className="cursor-pointer hover:text-blue-400 transition"
                            />

                            <ArrowRightOutlined
                                onClick={handleNext}
                                className="cursor-pointer hover:text-blue-400 transition"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[450px] h-56 md:h-[320px] rounded-2xl overflow-hidden shadow-xl transition duration-500">
                    <img
                        src={featureImages[currentIndex]}
                        alt="feature"
                        className="w-full h-full object-cover transition duration-700"
                    />
                </div>

            </div>
        </section>
    );
};

export default Choose;