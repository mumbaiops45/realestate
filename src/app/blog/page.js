// "use client"

// import React from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { PhoneOutlined } from "@ant-design/icons";

// const Page = () => {
//   const { scrollYProgress } = useScroll()
//   const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

//   const text =
//     "Stay informed with the latest real estate trends, market insights, expert tips, and property news to help you make smarter investment decisions."

//   const words = text.split(" ")

//   return (
//     <div className="bg-white text-neutral-900 overflow-hidden">

     
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">

        
//         <motion.div
//           className="absolute inset-0 bg-cover bg-center scale-110"
//           style={{
//             backgroundImage: "url('/blog1.jpg')",
//             y: bgY,
//           }}
//         />

        
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />

       
//         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

//           <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-5">
//             Real Estate Insights
//           </p>

//           <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
//             Explore Latest Insights
//           </h1>

//           <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto flex flex-wrap justify-center gap-x-2">
//             {words.map((word, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.015,
//                 }}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </p>

//         </div>
//       </section>

      
//       <section className="py-28 bg-[#3F5873]">
//         <div className="max-w-6xl mx-auto px-6">

        
//           <div className="relative h-[65vh] rounded-3xl overflow-hidden shadow-2xl">

//             <div
//               className="absolute inset-0 bg-cover bg-center scale-105"
//               style={{ backgroundImage: "url('/planning.jpg')" }}
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//             <div className="absolute top-6 left-6">
//               <span className="text-white/70 text-[11px] tracking-[0.35em] uppercase">
//                 Rental Properties
//               </span>
//             </div>

//           </div>

         
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="mt-12 max-w-3xl text-white"
//           >
//             <h2 className="text-3xl md:text-5xl font-light leading-tight">
//               Why Structured Planning Matters in Real Estate
//             </h2>

//             <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
//               Strong planning helps investors reduce risk, identify opportunities,
//               and unlock long-term property value in competitive markets.
//             </p>
//           </motion.div>

//         </div>
//       </section>

     
//       <section className="py-28 bg-white">
//         <div className="max-w-6xl mx-auto px-6">

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

//             {[
//               {
//                 title: "Home Selling",
//                 desc: "The Power of Structured Due Diligence in Property Investing.",
//                 img: "/salehome.jpg",
//               },
//               {
//                 title: "Property Market",
//                 desc: "How Structured Property Management Drives Long-Term Return.",
//                 img: "/marketing.jpg",
//               },
//               {
//                 title: "Real Estate",
//                 desc: "Why Long-Term Success Requires a Structured Mindset.",
//                 img: "/marketanal.jpg",
//               },
//               {
//                 title: "Streamlining Design",
//                 desc: "Fostering seamless collaboration in fast-paced environments.",
//                 img: "/planning.jpg",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500"
//               >

//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition" />
//                 <div className="absolute bottom-0 p-7 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">

//                   <h3 className="text-2xl font-light tracking-wide">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-white/70 mt-3 opacity-0 group-hover:opacity-100 transition">
//                     {item.desc}
//                   </p>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//        <section
//               className="h-[300px] bg-cover bg-center flex items-center"
//               style={{ backgroundImage: "url('/ho.avif')" }}
//             >
//               <div className="w-full h-full bg-black/60 flex items-center px-6 md:px-16">
//                 <motion.div
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   className="text-white max-w-xl"
//                 >
//                   <h2 className="text-3xl font-bold">
//                     Ready to Find Your Next Home?
//                   </h2>
      
//                   <p className="mt-3 text-gray-300">
//                     Buy, sell, or rent with expert guidance at every step.
//                   </p>
      
//                   <button className="mt-6 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition">
//                     <PhoneOutlined />
//                     Get Started
//                   </button>
//                 </motion.div>
//               </div>
//             </section>

//     </div>
//   )
// }

// export default Page


"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PhoneOutlined } from "@ant-design/icons"

const Page = () => {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  const text =
    "Stay informed with the latest real estate trends, market insights, expert tips, and property news to help you make smarter investment decisions."

  const words = text.split(" ")

  return (
    <div className="bg-white text-neutral-900 overflow-hidden">

     
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/blog1.jpg')",
            y: bgY,
          }}
        />

  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

       
        <div className="absolute inset-0 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

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
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.02,
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>

        </div>
      </section>

     
      <section className="py-32 bg-[#3F5873] relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">

            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: "url('/planning.jpg')" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute top-8 left-8 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <span className="text-white/80 text-[11px] tracking-[0.35em] uppercase">
                Rental Properties
              </span>
            </div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-14 max-w-3xl text-white"
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
              Why Structured Planning Matters in Real Estate
            </h2>

            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
              Strong planning helps investors reduce risk, identify opportunities,
              and unlock long-term property value in competitive markets.
            </p>
          </motion.div>

        </div>
      </section>

     
      <section className="py-32 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

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
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-700"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 p-8 text-white translate-y-10 group-hover:translate-y-0 transition duration-500">

                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70 mt-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section
        className="h-[320px] bg-cover bg-center flex items-center relative"
        style={{ backgroundImage: "url('/ho.avif')" }}
      >

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative w-full flex items-center px-6 md:px-16">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white max-w-xl"
          >

            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Ready to Find Your Next Home?
            </h2>

            <p className="mt-4 text-white/70">
              Buy, sell, or rent with expert guidance at every step.
            </p>

            <button className="mt-7 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition shadow-lg">
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