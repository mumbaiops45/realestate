"use client";

import React, { useEffect, useRef, useState } from "react";
import { realstate } from "@/app/data/service";
import { PhoneOutlined } from "@ant-design/icons";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  const heroRef = useRef(null);
  const ctaRef = useRef(null);

 
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "80%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const ctaY = useTransform(ctaScroll, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        setCurrent((prev) => (prev + 1) % realstate.length);
      } else {
        setCurrent((prev) => (prev - 1 + realstate.length) % realstate.length);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const goLeft = () => {
    setCurrent((prev) => (prev - 1 + realstate.length) % realstate.length);
  };

  const goRight = () => {
    setCurrent((prev) => (prev + 1) % realstate.length);
  };

  return (
    <div className="overflow-hidden bg-white">

      
      <section
        ref={heroRef}
        className="sticky top-0 h-screen flex flex-col justify-center bg-gradient-to-br from-[#2f4356] to-[#3f5873] z-10 overflow-hidden"
      >
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="text-center text-white px-6 py-20"
        >
          <h1 className="text-4xl md:text-6xl font-semibold">
            Rental Property Management
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Hassle-free solutions to maximize your property potential.
          </p>
        </motion.div>

        <motion.div style={{ y: heroImgY }} className="px-6 md:px-12">
          <img
            src="/rent1.webp"
            className="w-full h-[350px] md:h-[520px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

    
      <div className="h-screen" />

      
      <section className="-mt-[100vh] bg-white py-20 relative z-20">
        <div className="w-full px-4 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl mb-10 text-gray-800"
          >
            Collaborate with our architects to create bespoke designs.
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/rent.webp"
              className="w-full md:w-[70%] h-[450px] object-cover rounded-2xl"
            />

            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/receptions.jpg"
              className="w-full md:w-[30%] h-[450px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

          <div className="lg:sticky top-20">
            <h2 className="text-4xl font-light mb-8">
              A Structured Process for <span className="italic">Growth</span>
            </h2>

            <img src="/Workers.avif" className="rounded-3xl shadow-xl" />
          </div>

          <div className="space-y-12">
            {["Assessment", "Planning", "Execution", "Tracking"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-xl">
                  {i + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{step}</h3>
                  <p className="text-gray-600 mt-2">
                    Premium structured workflow ensuring results.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <div className="w-full h-screen relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {realstate.map((slide, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              animate={{
                scale: index === current ? 1 : 0.9,
                opacity: index === current ? 1 : 0.5,
              }}
            >
              <img src={slide.src} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-20 left-10 text-white">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p>{slide.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button onClick={goLeft} className="absolute left-6 bottom-6">←</button>
        <button onClick={goRight} className="absolute right-6 bottom-6">→</button>
      </div>

      
      <section ref={ctaRef} className="h-[300px] relative overflow-hidden">
        <motion.div
          style={{ y: ctaY }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/ho.avif')",
            y: ctaY,
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex items-center px-6 md:px-16">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-bold">
              Ready to Find Your Next Home?
            </h2>

            <p className="mt-3 text-gray-300">
              Buy, sell, or rent with expert guidance.
            </p>

            <button className="mt-6 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full">
              <PhoneOutlined />
              Get Started
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Page;