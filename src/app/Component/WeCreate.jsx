"use client";
import React, { useEffect, useState } from "react";

const WeCreate = () => {
  const images = ["/exterior.jpg", "/interior.jpg", "/floorplan.jpg"];
  const labels = ["Exterior", "Interior", "Floor Plan"];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">

     
      <img
        src={images[currentIndex]}
        alt="showcase"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="absolute top-6 right-6 z-20 flex gap-3">
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
              currentIndex === index
                ? "bg-white text-black"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-10 text-white">
        <div className="flex-1">
          <h3 className="text-gray-200 uppercase tracking-widest">
            What we create
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Designed to Adapt <br/> Inside and Out.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WeCreate;