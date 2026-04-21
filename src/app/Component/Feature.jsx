"use client";
import React, { useEffect, useRef, useState } from "react";
import { properties } from "../data/data";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const Feature = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

 
  useEffect(() => {
    const updateScroll = () => {
      if (!containerRef.current) return;

      const totalWidth = containerRef.current.scrollWidth;
      const visibleWidth = containerRef.current.clientWidth;

      setMaxScroll(totalWidth - visibleWidth);
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);

    return () => window.removeEventListener("resize", updateScroll);
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      
      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight - windowHeight) {
        const progress =
          Math.abs(rect.top) / (sectionHeight - windowHeight);

        const clamped = Math.min(Math.max(progress, 0), 1);

        setOffset(clamped * maxScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  return (
   
    // <section ref={sectionRef} className="relative h-[300vh] bg-gray-50">
     <section ref={sectionRef}  className="relative h-[200vh] bg-[url('/homeimgss.jpg')] bg-cover bg-center bg-fixed">
         <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-[60px] flex flex-col lg:flex-row gap-12 w-full">

         
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Featured Properties
            </h2>
            <p className="text-white mt-4 text-lg">
              Explore the best homes curated for you in Mumbai & Navi Mumbai
            </p>
          </div>

          
          <div className="lg:w-2/3 overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-6"
              style={{
                transform: `translateX(-${offset}px)`,
              }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] bg-blue-500/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-gray-600 text-white text-xs px-3 py-1 rounded-full">
                      {property.type}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {property.title}
                    </h3>
                    <p className="text-white text-sm mt-1">
                      📍 {property.location}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-white font-bold text-lg">
                        {property.price}
                      </span>

                      <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-000 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature;