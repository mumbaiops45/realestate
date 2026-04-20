"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const stats = [
  { value: "2,400+", label: "Homes built" },
  { value: "10+",    label: "Years of expertise" },
  { value: "98%",    label: "Client satisfaction" },
];



const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 52 },
  whileInView:{ opacity: 1, y: 0 },
  exit:       { opacity: 0, y: 52 },         
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  viewport:   { once: false, amount: 0.15 },  
});

const fadeLeft = (delay = 0) => ({
  initial:    { opacity: 0, x: -44 },
  whileInView:{ opacity: 1, x: 0 },
  exit:       { opacity: 0, x: -44 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  viewport:   { once: false, amount: 0.15 },
});


const scaleIn = (delay = 0) => ({
  initial:    { opacity: 0, scale: 0.93 },
  whileInView:{ opacity: 1, scale: 1 },
  exit:       { opacity: 0, scale: 0.93 },
  transition: { duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] },
  viewport:   { once: false, amount: 0.2 },
});

const About = () => {
  const sectionRef = useRef(null);

  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale= useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.04, 1.08]);

 
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      className={`${inter.className} w-full bg-white py-28 px-6 lg:px-20 overflow-hidden`}
    >
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

     
        <motion.div
          style={{ y: headlineY }}
          {...fadeUp(0)}
        >
          <h2
            className={`${playfair.className} text-[2.6rem] md:text-5xl font-normal leading-[1.22] tracking-[-0.5px] text-gray-900`}
          >
            We create modular &{" "}
            <em className="not-italic text-blue-500">tiny homes</em>{" "}
            designed for modern living.
          </h2>
          <div className="mt-6 h-[1px] w-14 bg-gradient-to-r from-[#c0a882] to-transparent" />
        </motion.div>

      
        <motion.div
          {...scaleIn(0.12)}
          className="relative"
        >
         
          <motion.div
            {...fadeLeft(0.3)}
            className="absolute -left-4 top-6 z-10 bg-white border border-[#e0d5c5] rounded-xl px-4 py-3 shadow-md"
          >
            <p className={`${playfair.className} text-2xl text-gray-900`}>2,400+</p>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#a89a88] mt-0.5">
              Homes built
            </p>
          </motion.div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <motion.img
              style={{ y: imgY, scale: imgScale }}
              src="/propertyadver.jpg"
              alt="Modern Home"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </motion.div>
      </div>

     
      <motion.div
        className="mt-20 border-t border-[#e8e4de]"
        {...fadeUp(0)}
      />

     
      <div className="pt-14 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">

       
        <motion.div
          {...fadeLeft(0.1)}
          className="flex flex-col gap-1"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#a89a88]">About Us</p>
          <div className="mt-6 flex flex-col gap-5">
            {stats.slice(1).map((s, i) => (
              <motion.div key={s.label} {...fadeLeft(0.15 + i * 0.1)}>
                <p className={`${playfair.className} text-4xl font-normal text-gray-900`}>
                  {s.value}
                </p>
                <p className="text-[11px] tracking-[0.08em] uppercase text-[#a89a88] mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
        <div>
         
          <div className="grid md:grid-cols-2 gap-0">
            {[
              "We specialize in crafting modular and tiny homes tailored for contemporary living. Our efficient process, eco-friendly materials, and precise construction simplify the journey of owning a home that fits your lifestyle.",
              "By combining smart design, factory-built precision, and transparency, we move homeowners faster from concept to reality. Every Pody home is crafted with detail, quality, and a deep respect for modern living standards.",
            ].map((text, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.1 + i * 0.15)}
                className={`text-[15px] font-light leading-[1.85] text-[#4a4a4a] ${
                  i === 1 ? "md:border-l md:border-[#e8e4de] md:pl-8" : ""
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>

          
          <motion.div
            {...fadeUp(0.5)}
            className="mt-10 flex items-center gap-6"
          >
            <button
            onClick={() => router.push("/service")}
             className="text-[13px] font-medium tracking-wide px-7 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
              Explore homes
            </button>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

