// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const Footer = () => {
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollBtn(true);
//       } else {
//         setShowScrollBtn(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       <footer className="bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="relative w-10 h-10">
//                   <div className="relative w-10 h-10">
//                     <Image
//                       src="/realstate1.png"
//                       alt="Welcome Realty Logo"
//                       fill
//                       className="object-contain"
//                       sizes="40px"
//                     />
//                   </div>
//                 </div>
//                 <h2 className="text-xl font-bold tracking-tight">Welcome Realty LLP</h2>
//               </div>
             
//             </div>

           
//             <div>
//               <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#home" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Home</a></li>
//                 <li><a href="#properties" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Properties</a></li>
//                 <li><a href="#about" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>About Us</a></li>
//                 <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Services</a></li>
//                 <li><a href="#contact" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Contact</a></li>
//               </ul>
//             </div>

          
//             <div>
//               <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
//                 Contact Us
//               </h3>
//               <ul className="space-y-3 text-gray-300">
//                 <li className="flex items-start gap-3">
//                   <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
//                   <span>+91 xxxxx xxxxx</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//                   <span>info@welcomerealty.com</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-400 text-lg leading-5">💬</span>
//                   <span>WhatsApp: +91 xxxxx xxxxx</span>
//                 </li>
//               </ul>
//             </div>

           
//             <div>
//               <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-300 text-sm mb-3">Get latest property alerts & offers.</p>
//               <form className="flex flex-col sm:flex-row gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400"
//                 />
              
//               </form>
//               <div className="mt-6 pt-4 border-t border-white/10">
//                 <p className="text-gray-400 text-xs">📍 Office: Bandra East, Mumbai - 400051</p>
//               </div>
//             </div>
//           </div>

         
//           <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
//             <p>© 2026 nakshatranamahacreations Pvt.Ltd</p>
//             <p className="text-xs md:text-sm">
//               Designed & Developed by{' '}
//               <a
//                 href="https://www.nakshatranamahacreations.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 font-medium hover:text-blue-300 transition"
//               >
//                 Nakshatra Namaha Creations
//               </a>
//             </p>
//             <div className="flex gap-4 text-xs">
//               <a href="#" className="hover:text-blue-400">Privacy Policy</a>
//               <a href="#" className="hover:text-blue-400">Terms of Use</a>
//               <a href="#" className="hover:text-blue-400">Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </footer>

     
//       {showScrollBtn && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 focus:outline-none"
//           aria-label="Scroll to top"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </button>
//       )}
//     </>
//   );
// };

// export default Footer;


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-800/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
          
            <div className="hover:-translate-y-1 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-lg bg-white/5 p-1 shadow-inner">
                  <Image
                    src="/realstate1.png"
                    alt="Welcome Realty Logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <h2 className="text-xl font-semibold tracking-wide">
                  Welcome Realty LLP
                </h2>
              </div>

              <p className="text-gray-400 text-sm">
                Premium real estate solutions tailored for modern living.
              </p>

              
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:scale-110 transition">🌐</a>
                <a href="#" className="hover:scale-110 transition">📘</a>
                <a href="#" className="hover:scale-110 transition">📸</a>
              </div>
            </div>

           
            <div className="hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "Properties", "About Us", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="group flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-white"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-2 group-hover:bg-blue-500"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  📞 <span>+91 xxxxx xxxxx</span>
                </li>
                <li className="flex items-start gap-3">
                  📧 <span>info@welcomerealty.com</span>
                </li>
                <li className="flex items-start gap-3">
                  💬 <span>WhatsApp: +91 xxxxx xxxxx</span>
                </li>
              </ul>
            </div>

            
            <div className="hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Get latest property alerts & offers.
              </p>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 pr-10 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-300">
                  ➤
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-gray-500 text-xs">
                  📍 Office: Bandra East, Mumbai - 400051
                </p>
              </div>
            </div>
          </div>

         
          <div className="mt-12 pt-6 border-t border-white/10 relative flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400 text-sm">
            
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

            <p>© 2026 nakshatranamahacreations Pvt. Ltd</p>

            <p className="text-xs md:text-sm">
              Designed & Developed by{" "}
              <a
                href="https://www.nakshatranamahacreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium hover:text-blue-300 transition"
              >
                Nakshatra Namaha Creations
              </a>
            </p>

            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Use</a>
              <a href="#" className="hover:text-blue-400">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

     
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600/90 backdrop-blur-md text-white rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;