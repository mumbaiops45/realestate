"use client";

import React, { useEffect, useRef, useState } from "react";
import { slides } from "@/app/data/service";
import { motion } from "framer-motion";

const Page = () => {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        setCurrent((prev) => (prev + 1) % slides.length);
      } else {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const goLeft = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goRight = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>

      <div className="w-full min-h-screen bg-[#3f5873] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center text-white px-6 py-20"
        >
          <h1 className="text-4xl md:text-5xl font-medium leading-tight max-w-5xl">
            Property Buying Consultation
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl">
            Personalized advice to help you find and secure your dream home with confidence.
          </p>
        </motion.div>

        <div className="w-full px-[50px] pb-10">
          <div className="overflow-hidden rounded-3xl">
            <motion.img
              src="/consluting.webp"
              alt="Architecture Design"
              className="w-full h-[400px] md:h-[500px] object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>



      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full text-3xl md:text-2xl leading-relaxed mb-6"
        >
          Collaborate with our architects and designers to create bespoke home
          designs that reflect your lifestyle and preferences.
        </motion.h2>


        <div className="flex flex-col md:flex-row gap-5 w-full">
          <motion.div
            className="w-full md:w-[70%] h-[250px] sm:h-[350px] md:h-[450px]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/propertbuyconsl.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </motion.div>

          <motion.div
            className="w-[80%] mx-auto md:mx-0 md:w-[30%] h-[200px] sm:h-[300px] md:h-[450px]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/propertysold.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </motion.div>

        </div>
      </div>

       <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-20 h-fit">
            <p className="uppercase tracking-widest text-sm border border-gray-400 inline-block px-4 py-2 rounded-full text-gray-600">
              Our Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-6 leading-snug">
              A Clear, Structured Process for{" "}
              <span className="italic font-normal">
                Consistent Player Development
              </span>
            </h2>

            <motion.div
              className="mt-10 rounded-3xl overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/Workers.avif"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dashed border-gray-300"></div>

            <div className="space-y-20">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 80 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex gap-6 items-start"
                >
                  <div className="z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-slate-600 text-white text-lg font-semibold">
                    {item}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Step {item}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Structured and premium workflow animation.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <div className="w-full h-screen overflow-hidden relative">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{
                opacity: index === current ? 1 : 0.5,
                scale: index === current ? 1 : 0.95,
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={slide.src}
                className="w-full h-full object-cover"
                alt={slide.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              <div className="absolute left-10 bottom-20 text-white max-w-md">
                <h1 className="text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg opacity-90">{slide.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <button
          onClick={goLeft}
          className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md hover:bg-white/20 transition text-white px-5 py-2 rounded-full"
        >
          ←
        </button>

        <button
          onClick={goRight}
          className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-md hover:bg-white/20 transition text-white px-5 py-2 rounded-full"
        >
          →
        </button>
      </div>


     


    </div>
  );
};

export default Page;