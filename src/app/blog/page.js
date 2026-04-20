"use client"

import React, {useState,useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PhoneOutlined } from "@ant-design/icons"

const Page = () => {
  const heroRef = useRef(null)
  const secondRef = useRef(null)
  const ctaRef = useRef(null)
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

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "80%"])
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0])

 
  const { scrollYProgress: secondScroll } = useScroll({
    target: secondRef,
    offset: ["start end", "end start"],
  })

  const secondImgY = useTransform(secondScroll, [0, 1], ["-20%", "20%"])
  const secondOpacity = useTransform(secondScroll, [0, 0.3], [0, 1])

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  })

  const ctaBgY = useTransform(ctaScroll, [0, 1], ["-10%", "10%"])

  const text =
    "Stay informed with the latest real estate trends, market insights, expert tips, and property news to help you make smarter investment decisions."

  const words = text.split(" ")

  return (
    <div className="bg-white text-neutral-900 overflow-hidden">

     
      <section
        ref={heroRef}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/blog1.jpg')",
            y: heroBgY,
            transform: visible ? "scale(1.05)" : "scale(1.1)",
             transition: "transform 1.2s ease-out",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
        >
          <p className="uppercase tracking-[0.4em] text-white/60 text-xs mb-6">
            Real Estate Insights
          </p>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
            Explore Latest Insights
          </h1>

          <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto flex flex-wrap justify-center gap-x-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </section>

      <div className="h-[100vh]" />

      
      <section
        ref={secondRef}
        className="relative py-32 bg-[#3F5873] -mt-[100vh] z-20 overflow-hidden"
      >
        <motion.div style={{ opacity: secondOpacity }}>
          <div className="max-w-6xl mx-auto px-6">

            <div className="relative h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl">

              <motion.div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                  backgroundImage: "url('/planning.jpg')",
                  y: secondImgY,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="absolute top-8 left-8 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="text-white/80 text-[11px] tracking-[0.35em] uppercase">
                  Rental Properties
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-14 max-w-3xl text-white"
            >
              <h2 className="text-4xl md:text-5xl font-light">
                Why Structured Planning Matters in Real Estate
              </h2>

              <p className="mt-6 text-white/70 text-base md:text-lg">
                Strong planning helps investors reduce risk, identify opportunities,
                and unlock long-term property value in competitive markets.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      
      <section className="py-32 bg-white relative z-30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {[
            {
              title: "Home Selling",
              desc: "The Power of Structured Due Diligence in Property Investing.",
              img: "/salehome.jpg",
            },
            {
              title: "Property Market",
              desc: "How Structured Property Management Drives Long-Term Return.",
              img: "/marketing.jpg",
            },
            {
              title: "Real Estate",
              desc: "Why Long-Term Success Requires a Structured Mindset.",
              img: "/marketanal.jpg",
            },
            {
              title: "Streamlining Design",
              desc: "Fostering seamless collaboration in fast-paced environments.",
              img: "/planning.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-lg"
            >
              <img
                src={item.img}
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8 text-white translate-y-10 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-2xl md:text-3xl font-light">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 mt-4 opacity-0 group-hover:opacity-100 transition">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section
        ref={ctaRef}
        className="h-[320px] relative flex items-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/ho.avif')",
            y: ctaBgY,
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full px-6 md:px-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-light">
              Ready to Find Your Next Home?
            </h2>

            <p className="mt-4 text-white/70">
              Buy, sell, or rent with expert guidance at every step.
            </p>

            <button className="mt-7 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
              <PhoneOutlined />
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Page