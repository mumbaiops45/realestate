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
                            <h2 className="text-3xl font-bold text-gray-900">
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
                        <button className="mt-4 flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-200 transition">
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



// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { motion } from "framer-motion";

// const Page = () => {
//     const ref = useRef(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => setVisible(entry.isIntersecting),
//             { threshold: 0.3 }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, []);

//     const fadeUp = {
//         hidden: { opacity: 0, y: 40 },
//         show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
//     };

//     return (
//         <div>

//             {/* HERO */}
//             <section
//                 ref={ref}
//                 className="relative h-screen flex items-center text-white overflow-hidden"
//             >
//                 <div
//                     className="absolute inset-0 bg-cover bg-center"
//                     style={{ backgroundImage: "url('/home1.jpg')" }}
//                 />

//                 {/* Gradient overlay instead of flat black */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />

//                 <motion.div
//                     initial="hidden"
//                     animate={visible ? "show" : "hidden"}
//                     variants={fadeUp}
//                     className="relative z-10 max-w-2xl ml-10 space-y-6"
//                 >
//                     <p className="uppercase tracking-widest text-gray-300">
//                         Contact Information
//                     </p>

//                     <h2 className="text-5xl font-bold leading-tight">
//                         Let’s Talk Real Estate
//                     </h2>

//                     <p className="text-lg text-gray-200">
//                         Whether you're searching for your dream home or exploring
//                         investment opportunities, connect with our experts.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* MAIN SECTION */}
//             <section className="bg-gray-50 py-20 px-6 md:px-16">
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//                     {/* LEFT SIDE */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                         className="space-y-6"
//                     >
//                         <div className="rounded-2xl overflow-hidden shadow-xl">
//                             <img
//                                 src="/customer.jpg"
//                                 className="w-full h-80 object-cover hover:scale-110 transition duration-700"
//                             />
//                         </div>

//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-900">
//                                 Let’s Build Something Great
//                             </h2>
//                             <p className="text-gray-600 mt-2">
//                                 We’d love to hear about your next project.
//                             </p>
//                         </div>

//                         {/* CONTACT CARDS */}
//                         <div className="grid sm:grid-cols-2 gap-4">
//                             {[
//                                 "Mumbai, Thane, Maharashtra",
//                                 "Lucknow, Uttar Pradesh"
//                             ].map((loc, i) => (
//                                 <motion.div
//                                     key={i}
//                                     whileHover={{ y: -5 }}
//                                     className="flex gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
//                                 >
//                                     <FontAwesomeIcon icon={faLocationDot} />
//                                     <span className="text-sm text-gray-700">{loc}</span>
//                                 </motion.div>
//                             ))}

//                             <motion.div
//                                 whileHover={{ y: -5 }}
//                                 className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg"
//                             >
//                                 <PhoneOutlined />
//                                 <span>+91 98765 54321</span>
//                             </motion.div>

//                             <motion.div
//                                 whileHover={{ y: -5 }}
//                                 className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg"
//                             >
//                                 <MailOutlined />
//                                 <span>info@nnc.com</span>
//                             </motion.div>
//                         </div>
//                     </motion.div>

//                     {/* RIGHT SIDE FORM */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                     >
//                         <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-8 border">
//                             <h2 className="text-2xl font-bold mb-6">
//                                 Send Us a Message
//                             </h2>

//                             <form className="space-y-5">

//                                 {/* Floating Input */}
//                                 {["First Name", "Last Name", "Email", "Phone"].map((label, i) => (
//                                     <div key={i} className="relative">
//                                         <input
//                                             type="text"
//                                             required
//                                             className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black"
//                                         />
//                                         <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all 
//                                             peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black
//                                             peer-valid:-top-3 peer-valid:text-xs">
//                                             {label}
//                                         </label>
//                                     </div>
//                                 ))}

//                                 <textarea
//                                     rows={4}
//                                     placeholder="Message..."
//                                     className="w-full border-b-2 border-gray-300 focus:border-black outline-none"
//                                 />

//                                 <motion.button
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-lg"
//                                 >
//                                     Send Message
//                                 </motion.button>
//                             </form>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* CTA */}
//             <section
//                 className="h-[300px] bg-cover bg-center flex items-center"
//                 style={{ backgroundImage: "url('/ho.avif')" }}
//             >
//                 <div className="w-full h-full bg-gradient-to-r from-black/80 to-black/40 flex items-center px-6 md:px-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         className="text-white max-w-xl"
//                     >
//                         <h2 className="text-3xl font-bold">
//                             Ready to Find Your Next Home?
//                         </h2>

//                         <p className="mt-2 text-gray-200">
//                             Your dream property is just a click away.
//                         </p>

//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             className="mt-5 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg"
//                         >
//                             <PhoneOutlined />
//                             Get Started
//                         </motion.button>
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Page;