
// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const properties = [
//   {
//     id: 1,
//     title: "Luxury 2BHK Apartment",
//     location: "Bandra West, Mumbai",
//     price: "₹1.8 Cr",
//     image:
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
//     type: "For Sale",
//   },
//   {
//     id: 2,
//     title: "Sea View 3BHK Flat",
//     location: "Worli, Mumbai",
//     price: "₹4.5 Cr",
//     image:
//       "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
//     type: "For Sale",
//   },
//   {
//     id: 3,
//     title: "Modern Studio Apartment",
//     location: "Navi Mumbai",
//     price: "₹75 Lakhs",
//     image:
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
//     type: "For Rent",
//   },
//   {
//     id: 3,
//     title: "Modern Studio Apartment",
//     location: "Navi Mumbai",
//     price: "₹75 Lakhs",
//     image:
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
//     type: "For Rent",
//   },
//   {
//     id: 3,
//     title: "Modern Studio Apartment",
//     location: "Navi Mumbai",
//     price: "₹75 Lakhs",
//     image:
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
//     type: "For Rent",
//   },
//   {
//     id: 4,
//     title: "Premium 4BHK Penthouse",
//     location: "Powai, Mumbai",
//     price: "₹6.2 Cr",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//     type: "For Sale",
//   },
// ];

// const Feature = () => {
//   const scrollRef = useRef(null);
//   const [offset, setOffset] = useState(0);

 
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollRef.current) return;

//       const rect = scrollRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

     
//       if (rect.top < windowHeight && rect.bottom > 0) {
//         const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

       
//         setOffset(progress * 300); 
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={scrollRef} className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

//         {/* LEFT CONTENT */}
//         <div className="lg:w-1/3 lg:sticky lg:top-20 h-fit text-left">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
//             Featured Properties
//           </h2>

//           <p className="text-gray-500 mt-4 text-lg">
//             Explore the best homes curated for you in Mumbai & Navi Mumbai
//           </p>
//         </div>

//         {/* RIGHT CARDS */}
//         <div className="lg:w-2/3 overflow-hidden">
//           <div
//             className="flex gap-6"
//             style={{
//               transform: `translateX(-${offset}px)`,
//               transition: "transform 0.1s linear",
//             }}
//           >
//             {properties.map((property) => (
//               <div
//                 key={property.id}
//                 className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
//               >
//                 {/* IMAGE */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
//                   />
//                   <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
//                     {property.type}
//                   </span>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {property.title}
//                   </h3>

//                   <p className="text-gray-500 text-sm mt-1">
//                     📍 {property.location}
//                   </p>

//                   <div className="flex justify-between items-center mt-4">
//                     <span className="text-blue-600 font-bold text-lg">
//                       {property.price}
//                     </span>

//                     <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Feature;


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
];

const Feature = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // ✅ Calculate full scroll width
  useEffect(() => {
    if (!containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth;
    const visibleWidth = containerRef.current.clientWidth;

    setMaxScroll(totalWidth - visibleWidth); // full distance
  }, []);

  // ✅ Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        // clamp 0 → 1
        const clamped = Math.min(Math.max(progress, 0), 1);

        setOffset(clamped * maxScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

        {/* LEFT */}
        <div className="lg:w-1/3 lg:sticky lg:top-20 h-fit">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Featured Properties
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Explore the best homes curated for you in Mumbai & Navi Mumbai
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:w-2/3 overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            {properties.map((property, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
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
    </section>
  );
};

export default Feature;