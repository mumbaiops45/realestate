"use client";

import React, { useEffect, useRef, useState } from "react";
import { realstate } from "@/app/data/service";
import { PhoneOutlined } from "@ant-design/icons";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 500], [0, -100]);

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
    <div className="overflow-hidden">

     
      <div className="w-full min-h-screen bg-gradient-to-br from-[#2f4356] to-[#3f5873] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-white px-6 py-20"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
           Rental Property Management
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Hassle-free solutions to maximize your property potential with a premium touch.
          </p>
        </motion.div>

        <motion.div
          style={{ y: parallax }}
          className="w-full px-6 md:px-12 pb-16"
        >
          <motion.img
            src="/rent1.webp"
            alt=""
            className="w-full h-[350px] md:h-[520px] object-cover rounded-3xl shadow-2xl"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </div>

     
      <div className="w-full px-4 md:px-16 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl leading-relaxed mb-10 text-gray-800"
        >
          Collaborate with our architects to create bespoke designs that reflect your lifestyle.
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            className="w-full md:w-[70%] h-[300px] md:h-[450px] overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/rent.webp"
              className="w-full h-full object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-[30%] h-[300px] md:h-[450px] overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/receptions.jpg"
              className="w-full h-full object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>
        </div>
      </div>

      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

          <div className="lg:sticky top-20">
            <h2 className="text-4xl font-light mb-8">
              A Structured Process for <span className="italic">Growth</span>
            </h2>

            <img
              src="/Workers.avif"
              className="rounded-3xl shadow-xl"
            />
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
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-xl">
                  {i + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{step}</h3>
                  <p className="text-gray-600 mt-2">
                    Premium structured workflow ensuring consistent progress and results.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      
      <div className="w-full h-screen relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
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
              transition={{ duration: 0.6 }}
            >
              <img
                src={slide.src}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={index === current ? { y: 0, opacity: 1 } : {}}
                className="absolute bottom-20 left-10 text-white max-w-lg"
              >
                <h1 className="text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg">{slide.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        
        <button
          onClick={goLeft}
          className="absolute left-6 bottom-6 bg-white/20 backdrop-blur-lg px-5 py-2 rounded-full hover:scale-110 transition"
        >
          ←
        </button>

        <button
          onClick={goRight}
          className="absolute right-6 bottom-6 bg-white/20 backdrop-blur-lg px-5 py-2 rounded-full hover:scale-110 transition"
        >
          →
        </button>
      </div>

      
      <section
        className="h-[300px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/ho.avif')" }}
      >
        <div className="w-full h-full bg-black/60 flex items-center px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white max-w-xl"
          >
            <h2 className="text-3xl font-bold">
              Ready to Find Your Next Home?
            </h2>

            <p className="mt-3 text-gray-300">
              Buy, sell, or rent with expert guidance at every step.
            </p>

            <button className="mt-6 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition">
              <PhoneOutlined />
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Page;