// // import React from 'react'

// // const Cta = () => {
// //   return (
// //     // <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16 text-white">
// //      <section className="bg-gradient-to-r from-gray-200 via-gray-200 py-20 px-6 md:px-16 text-black">

// //       <div className="max-w-4xl mx-auto text-center">

// //         <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
// //           Step Into Your Dream Home in Mumbai
// //         </h2>

       
// //         <p className="text-gray-800 text-lg leading-relaxed mb-6">
// //           Discover premium residences across Mumbai & Navi Mumbai with
// //           <span className="text-black font-semibold"> Welcome Realty LLP</span>.
// //           We help you buy, sell, and rent properties with complete trust, clarity, and expertise.
// //         </p>

// //         <p className="text-gray-800 mb-10 text-base">
// //           Serving clients since 2009 with verified listings, transparent deals, and end-to-end real estate support.
// //         </p>

// //         <div className="flex flex-col sm:flex-row justify-center gap-4">
// //           <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
// //             Explore Properties
// //           </button>

// //           <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
// //             Contact Us Today
// //           </button>
// //         </div>

// //         <p className="text-gray-500 mt-8 text-sm">
// //           Trusted by 1000+ families • Mumbai & Navi Mumbai specialists • 100% verified listings
// //         </p>

// //       </div>

// //     </section>
// //   )
// // }

// // export default Cta


// import React from 'react'

// const Cta = () => {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-500 to-gray-900 py-20 px-6 md:px-16 text-white">
//       {/* Subtle animated background blobs for depth */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse delay-1000" />
//       <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />

//       <div className="relative max-w-4xl mx-auto text-center z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//           Step Into Your Dream Home in Mumbai
//         </h2>

//         <p className="text-gray-200 text-lg leading-relaxed mb-6">
//           Discover premium residences across Mumbai & Navi Mumbai with
//           <span className="text-white font-semibold"> Welcome Realty LLP</span>.
//           We help you buy, sell, and rent properties with complete trust, clarity, and expertise.
//         </p>

//         <p className="text-gray-300 mb-10 text-base">
//           Serving clients since 2009 with verified listings, transparent deals, and end-to-end real estate support.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-5">
//           <button className="group relative px-8 py-3 rounded-full font-semibold bg-white text-gray-900 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
//             <span className="relative z-10">Explore Properties</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>

//           <button className="px-8 py-3 rounded-full font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm hover:shadow-lg">
//             Contact Us Today
//           </button>
//         </div>

//         <p className="text-gray-400 mt-8 text-sm flex justify-center gap-4 flex-wrap">
//           <span>✓ Trusted by 1000+ families</span>
//           <span>✓ Mumbai & Navi Mumbai specialists</span>
//           <span>✓ 100% verified listings</span>
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Cta


import React from 'react'

const Cta = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 md:px-16 text-gray-900">
      {/* Subtle animated background blobs in light gray for depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
          Step Into Your Dream Home in Mumbai
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Discover premium residences across Mumbai & Navi Mumbai with
          <span className="text-blue-600 font-semibold"> Welcome Realty LLP</span>.
          We help you buy, sell, and rent properties with complete trust, clarity, and expertise.
        </p>

        <p className="text-gray-500 mb-10 text-base">
          Serving clients since 2009 with verified listings, transparent deals, and end-to-end real estate support.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="group relative px-8 py-3 rounded-full font-semibold bg-blue-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore Properties</span>
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
            Contact Us Today
          </button>
        </div>

        <p className="text-gray-400 mt-8 text-sm flex justify-center gap-4 flex-wrap">
          <span>✓ Trusted by 1000+ families</span>
          <span>✓ Mumbai & Navi Mumbai specialists</span>
          <span>✓ 100% verified listings</span>
        </p>
      </div>
    </section>
  )
}

export default Cta