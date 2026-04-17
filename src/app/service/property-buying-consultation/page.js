"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div className="overflow-hidden">

     
      <div className="w-full min-h-screen bg-gradient-to-br from-[#2f4356] to-[#3f5873] flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white max-w-5xl mx-auto px-6 pt-24"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Investment Property Advisory
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mt-6">
            Strategic guidance for maximizing returns on real estate investments.
          </p>
        </motion.div>

       
        <motion.div
          style={{ y: parallax }}
          className="mt-12 w-full px-6 md:px-16 pb-16"
        >
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <motion.img
              src="/Adver.webp"
              alt="property advisory"
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

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl leading-snug text-gray-800 max-w-4xl"
          >
            Our experts analyze market trends, assess investment opportunities,
            and provide actionable insights to help you build a profitable
            property portfolio.
          </motion.p>

         
          <div className="mt-14 flex flex-col md:flex-row gap-8">

           
            <motion.div
              className="w-full md:w-[70%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/investimg.jpg"
                alt="investment"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

           
            <motion.div
              className="w-full md:w-[30%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/investme.webp"
                alt="meeting"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

         
          <div className="lg:sticky top-20">
            <p className="uppercase tracking-widest text-sm border border-gray-400 inline-block px-4 py-2 rounded-full text-gray-600">
              Our Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-6 leading-snug">
              A Structured Process for{" "}
              <span className="italic">Investment Growth</span>
            </h2>

            <div className="mt-10 rounded-3xl overflow-hidden">
              <img
                src="/Workers.avif"
                alt="workflow"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          
          <div className="space-y-12">
            {[
              {
                title: "Market Research",
                desc: "We analyze real estate trends, pricing patterns, and demand to identify the best opportunities.",
              },
              {
                title: "Opportunity Analysis",
                desc: "Each investment is evaluated for risk, return potential, and long-term value.",
              },
              {
                title: "Investment Strategy",
                desc: "We create a tailored plan aligned with your financial goals and risk appetite.",
              },
              {
                title: "Performance Tracking",
                desc: "We continuously monitor performance and optimize strategies for maximum returns.",
              },
            ].map((item, i) => (
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Page;