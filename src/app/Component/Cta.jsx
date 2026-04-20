"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Noto_Sans } from "next/font/google";


const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Cta = () => {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 px-6 md:px-16 text-gray-900">

      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gray-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        
        <p className="inline-block mb-6 px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100">
          Premium Real Estate in Mumbai & Navi Mumbai
        </p>

       
        <h1 className={`${notoSans.className} text-4xl md:text-4xl  font-bold leading-tight tracking-tight text-gray-900`}>
          Find Your <span className="text-blue-600">Dream Home</span> with Confidence
        </h1>

       
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Discover verified luxury residences and investment opportunities with
          <span className="text-gray-900 font-semibold"> Welcome Realty LLP</span>.
          We ensure transparent deals, expert guidance, and a seamless property journey.
        </p>

        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button 
          onClick={() => router.push("/service")}
          className="px-8 py-3 rounded-full font-semibold bg-blue-600 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            Explore Properties
          </button>

          <button 
          onClick={() => router.push("/contact")}
          className="px-8 py-3 rounded-full font-semibold border border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            Contact Us Today
          </button>
        </div>

       
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✔ Trusted by 1000+ families</span>
          <span>✔ Mumbai & Navi Mumbai experts</span>
          <span>✔ 100% verified listings</span>
        </div>

      </div>
    </section>
  )
}

export default Cta