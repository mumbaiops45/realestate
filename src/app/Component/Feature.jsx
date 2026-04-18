"use client";
import React, { useEffect, useRef, useState } from "react";

const properties = [
  {
    id: 1,
    title: "Luxury 2BHK Apartment",
    location: "Bandra West, Mumbai",
    price: "₹1.8 Cr",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
  {
    id: 2,
    title: "Sea View 3BHK Flat",
    location: "Worli, Mumbai",
    price: "₹4.5 Cr",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
  {
    id: 3,
    title: "Modern Studio Apartment",
    location: "Navi Mumbai",
    price: "₹75 Lakhs",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    type: "For Rent",
  },
  {
    id: 4,
    title: "Premium 4BHK Penthouse",
    location: "Powai, Mumbai",
    price: "₹6.2 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
  {
    id: 5,
    title: "Luxury Villa",
    location: "Juhu, Mumbai",
    price: "₹8 Cr",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
   {
    id: 6,
    title: "Luxury 2BHK Apartment",
    location: "Bandra West, Mumbai",
    price: "₹1.8 Cr",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
  {
    id: 7,
    title: "Sea View 3BHK Flat",
    location: "Worli, Mumbai",
    price: "₹4.5 Cr",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
  {
    id: 8,
    title: "Modern Studio Apartment",
    location: "Navi Mumbai",
    price: "₹75 Lakhs",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    type: "For Rent",
  },
  {
    id: 9,
    title: "Premium 4BHK Penthouse",
    location: "Powai, Mumbai",
    price: "₹6.2 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    type: "For Sale",
  },
];

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
     <section ref={sectionRef}  className="relative h-[300vh] bg-[url('/realestateimg.jpg')] bg-cover bg-center">
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
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
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
                      <span className="text-blue-600 font-bold text-lg">
                        {property.price}
                      </span>

                      <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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