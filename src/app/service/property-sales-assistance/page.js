"use client";

import React, { useEffect, useRef, useState } from "react";
import { sales } from "@/app/data/service";
import { PhoneOutlined } from "@ant-design/icons";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        setCurrent((prev) => (prev + 1) % sales.length);
      } else {
        setCurrent((prev) => (prev - 1 + sales.length) % sales.length);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const goLeft = () => {
    setCurrent((prev) => (prev - 1 + sales.length) % sales.length);
  };

  const goRight = () => {
    setCurrent((prev) => (prev + 1) % sales.length);
  };

  return (
    <div className="overflow-hidden">

     
      <div className="w-full min-h-screen bg-gradient-to-br from-[#2f4356] to-[#3f5873] flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white max-w-5xl mx-auto px-6 pt-24"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Property Sales Assistance
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mt-6">
            Expert guidance to help you sell your property quickly and at the best market value.
          </p>
        </motion.div>

        <motion.div style={{ y: parallax }} className="mt-12 px-6 md:px-16 pb-16">
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <motion.img
              src="/Sales.webp"
              className="w-full h-[280px] sm:h-[380px] md:h-[520px] object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </motion.div>
      </div>

      
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl text-gray-800 max-w-4xl"
          >
            We provide strategic marketing, expert negotiation, and full support
            to ensure your property sells faster and at the best value.
          </motion.h2>

          <div className="mt-14 flex flex-col md:flex-row gap-8">

           
            <motion.div
              className="w-full md:w-[70%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/market.webp"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

           
            <motion.div
              className="w-full md:w-[30%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/investimg.jpg"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          </div>
        </div>
      </section>

     
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div className="lg:sticky top-20">
            <p className="uppercase tracking-widest text-sm border px-4 py-2 rounded-full text-gray-600 inline-block">
              Our Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-light mt-6">
              A Structured Process for{" "}
              <span className="italic">Successful Sales</span>
            </h2>

            <img
              src="/Workers.avif"
              className="mt-10 rounded-3xl shadow-xl w-full h-[420px] object-cover"
            />
          </div>

          <div className="space-y-12">
            {[
              "Property Evaluation",
              "Market Positioning",
              "Buyer Engagement",
              "Deal Closure",
            ].map((step, i) => (
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
                    A structured approach ensuring maximum value and smooth transactions.
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
          {sales.map((slide, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              animate={{
                scale: index === current ? 1 : 0.9,
                opacity: index === current ? 1 : 0.5,
              }}
              transition={{ duration: 0.6 }}
            >
              <img src={slide.src} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black/50" />

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={index === current ? { y: 0, opacity: 1 } : {}}
                className="absolute bottom-20 left-10 text-white max-w-lg"
              >
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="text-lg mt-2">{slide.desc}</p>
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
              Ready to Sell Your Property?
            </h2>

            <p className="mt-3 text-gray-300">
              Let our experts guide you to get the best value with ease.
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