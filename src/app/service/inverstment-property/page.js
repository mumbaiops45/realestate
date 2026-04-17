// // "use client"
// // import React from 'react'

// // const Page = () => {
// //   return (
// //     <div>
// //       <div className="bg-slate-700 min-h-screen py-16">
// //         <div className="text-center text-white max-w-5xl mx-auto px-6">
// //           <h1 className="text-5xl mt-[70px] md:text-6xl font-bold">
// //             Investment Property Advisory
// //           </h1>
// //           <p className="text-xl md:text-2xl text-gray-300 mt-4">
// //             Strategic guidance for maximizing returns on real estate investments.
// //           </p>
// //         </div>

// //         <div className="mt-12 max-w-6xl mx-auto px-6">
// //           <div className="rounded-3xl overflow-hidden shadow-lg">
// //             <img
// //               src="/Adver.webp"
// //               alt="property advisory"
// //               className="w-full h-[400px] object-cover"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <section className='bg-gray-100 py-16'>
// //         <div className='max-w-6xl mx-auto px-6'>
// //           <p className='text-3xl md:text-4xl leading-snug text-gray-800'>Our experts analyze market trends, assess investment opportunities, and provide actionable insights to help you build a profitable property portfolio. From rental yields to long-term appreciation, we guide you every step of the way.</p>
// //         </div>
// //         <div className='max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-8'>


// //           <div className='rounded-3xl overflow-hidden'>
// //             <img src='/investimg.jpg'
// //               alt="investment"
// //               className='w-full h-[400px] object-cover'
// //             />
// //           </div>
// //           <div className='rounded-3xl overflow-hidden'>
// //             <img src="/investme.webp"
// //               alt="meeting"
// //               className="w-full h-[400px] object-cover"
// //             />
// //           </div>
// //         </div>
// //       </section>


// //       <section className="bg-gray-100 py-20 px-6">
// //         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
// //           <div className="lg:sticky lg:top-20 h-fit">
// //             <p className="uppercase tracking-widest text-sm border border-gray-400 inline-block px-4 py-2 rounded-full text-gray-600">
// //               Our Workflow
// //             </p>

// //             <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-6 leading-snug">
// //               A Clear, Structured Process for{" "}
// //               <span className="italic font-normal">
// //                 Consistent Player Development
// //               </span>
// //             </h2>

// //             <div className="mt-10 rounded-3xl overflow-hidden">
// //               <img
// //                 src="/Workers.avif"
// //                 alt="workflow"
// //                 className="w-full h-[420px] object-cover"
// //               />
// //             </div>
// //           </div>


// //           <div className="relative">

// //             <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dashed border-gray-300"></div>

// //             <div className="space-y-20">


// //               <div className="flex gap-6 items-start ">
// //                 <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-slate-600 text-white text-lg font-semibold">
// //                   1
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-gray-900">
// //                     Player Assessment
// //                   </h3>
// //                   <p className="text-gray-600 mt-2">
// //                     We begin with a comprehensive evaluation of each player’s skill level, strengths, and areas for improvement. This assessment helps us understand individual needs and set realistic development goals.
// //                   </p>
// //                 </div>
// //               </div>


// //               <div className="flex gap-6 items-start ">
// //                 <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-slate-600 text-white text-lg font-semibold">
// //                   2
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-gray-900">
// //                     Personalized Training Plan
// //                   </h3>
// //                   <p className="text-gray-600 mt-2">
// //                     Based on the assessment, we create a tailored training plan aligned with the player’s ability and objectives. Each plan focuses on technique, fitness, and mindset development.
// //                   </p>
// //                 </div>
// //               </div>


// //               <div className="flex gap-6 items-start ">
// //                 <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-gray-600 text-white text-lg font-semibold">
// //                   3
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-gray-900">
// //                     Structured Training Sessions
// //                   </h3>
// //                   <p className="text-gray-600 mt-2">
// //                     Training sessions follow a clear structure that emphasizes proper technique, repetition, and progressive challenges. Players build skills step by step while maintaining consistency and confidence.
// //                   </p>
// //                 </div>
// //               </div>


// //               <div className="flex gap-6 items-start ">
// //                 <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-gray-600 text-white text-lg font-semibold">
// //                   4
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-gray-900">
// //                     Performance Monitoring
// //                   </h3>
// //                   <p className="text-gray-600 mt-2">
// //                     We track progress through regular feedback and performance reviews. This allows us to identify improvements, adjust training intensity, and keep players motivated.
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //     </div>
// //   )
// // }

// // export default Page


// "use client";

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Page = () => {
//   const { scrollY } = useScroll();
//   const parallax = useTransform(scrollY, [0, 500], [0, -100]);

//   return (
//     <div className="overflow-hidden">

//       {/* HERO */}
//       <div className="w-full min-h-screen bg-gradient-to-br from-[#2f4356] to-[#3f5873] flex flex-col justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center text-white max-w-5xl mx-auto px-6 py-20"
//         >
//           <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
//             Investment Property Advisory
//           </h1>

//           <p className="text-lg md:text-2xl text-gray-300 mt-6">
//             Strategic guidance for maximizing returns on real estate investments.
//           </p>
//         </motion.div>

//         <motion.div style={{ y: parallax }} className="mt-10 max-w-6xl mx-auto px-6 pb-16">
//           <motion.img
//             src="/Adver.webp"
//             className="w-full h-[300px] md:h-[520px] object-cover rounded-3xl shadow-2xl"
//             initial={{ scale: 1.2, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           />
//         </motion.div>
//       </div>

//       {/* CONTENT */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.p
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-2xl md:text-4xl leading-snug text-gray-800"
//           >
//             Our experts analyze market trends, assess investment opportunities, and provide actionable insights to help you build a profitable property portfolio.
//           </motion.p>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 mt-14 grid md:grid-cols-2 gap-8">
//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             className="rounded-3xl overflow-hidden"
//           >
//             <img
//               src="/investimg.jpg"
//               className="w-full h-[350px] md:h-[420px] object-cover transition duration-700 hover:scale-110"
//             />
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             className="rounded-3xl overflow-hidden"
//           >
//             <img
//               src="/investme.webp"
//               className="w-full h-[350px] md:h-[420px] object-cover transition duration-700 hover:scale-110"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* WORKFLOW */}
//       <section className="bg-gray-50 py-20 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

//           <div className="lg:sticky top-20">
//             <h2 className="text-4xl font-light mb-8">
//               A Structured Process for <span className="italic">Investment Growth</span>
//             </h2>

//             <img
//               src="/Workers.avif"
//               className="rounded-3xl shadow-xl"
//             />
//           </div>

//           <div className="space-y-12">
//             {[
//               "Market Research",
//               "Opportunity Analysis",
//               "Investment Strategy",
//               "Performance Tracking",
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="flex gap-6"
//               >
//                 <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-xl">
//                   {i + 1}
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold">{step}</h3>
//                   <p className="text-gray-600 mt-2">
//                     A carefully designed step ensuring clarity and maximum return on investment.
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Page;

"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div className="overflow-hidden">

      {/* HERO */}
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

        {/* FIXED HERO IMAGE */}
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

      {/* CONTENT */}
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

          {/* ✅ 70% / 30% FIX */}
          <div className="mt-14 flex flex-col md:flex-row gap-8">

            {/* 70% */}
            <motion.div
              className="w-full md:w-[70%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/investimg.jpg"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

            {/* 30% */}
            <motion.div
              className="w-full md:w-[30%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/investme.webp"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div className="lg:sticky top-20">
            <h2 className="text-4xl font-light mb-8">
              A Structured Process for{" "}
              <span className="italic">Investment Growth</span>
            </h2>

            <img
              src="/Workers.avif"
              className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
            />
          </div>

          <div className="space-y-12">
            {[
              "Market Research",
              "Opportunity Analysis",
              "Investment Strategy",
              "Performance Tracking",
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
                    A carefully structured step designed to maximize your
                    investment outcomes.
                  </p>
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