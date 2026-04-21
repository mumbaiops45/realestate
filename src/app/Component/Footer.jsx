// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
// import Link from "next/link";
// import { PhoneOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
// });

// const Footer = () => {
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollBtn(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <footer
//         className={`${poppins.className} relative bg-gradient-to-b from-[#0A192F] via-[#0B1F3A] to-[#020617] text-gray-300`}
//       >

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />

//         <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">


//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="relative w-12 h-12 rounded-lg bg-white p-1 shadow">
//                   <Image
//                     src="/realstate1.png"
//                     alt="logo"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <h2 className="text-base font-semibold text-white tracking-wide">
//                   Welcome Realty LLP
//                 </h2>
//               </div>

//               <p className="text-sm leading-relaxed text-gray-400">
//                 Premium real estate solutions tailored for modern and luxury living.
//               </p>
//             </div>


//             <div>
//               <h3 className="text-sm font-bold text-white  uppercase tracking-wider mb-5">
//                 Quick Links
//               </h3>

//               <ul className="space-y-2">
//                 {[
//                   { name: "Properties", path: "/service" },
//                   { name: "About Us", path: "/about" },
//                   { name: "Services", path: "/service" },
//                   { name: "Contact", path: "/contact" },
//                 ].map((item) => (
//                   <li key={item.name}>
//                     <Link
//                       href={item.path}
//                       className="text-sm text-gray-400 hover:text-white transition"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>


//             <div>
//               <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider mb-5">
//                 Contact
//               </h3>


//               <ul className="space-y-2 text-sm">
//                 <li className="group cursor-pointer">
//                   <span className="text-gray-500 group-hover:text-white transition-colors duration-200">
//                     <PhoneOutlined /> +91 9876543210
//                   </span>
//                 </li>
//                 <li className="group cursor-pointer">
//                   <span className="text-gray-500 group-hover:text-white transition-colors duration-200">
//                     <MailOutlined /> info@welcomerealty.com
//                   </span>
//                 </li>
//                 <li className="group cursor-pointer">
//                   <span className="text-gray-500 group-hover:text-white transition-colors duration-200">
//                     <WhatsAppOutlined /> +91 9876543210
//                   </span>
//                 </li>
//               </ul>

//             </div>


//             <div>
//               <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider mb-5">
//                 Stay Updated
//               </h3>

//               <p className="text-sm text-gray-400 mb-4">
//                 Get latest property alerts & exclusive offers.
//               </p>

//               <div className="flex items-center bg-white rounded-md overflow-hidden">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-3 py-2.5 text-sm text-black outline-none"
//                 />
//                 <button className="px-4 py-2.5 bg-blue-500 text-white hover:bg-blue-600 transition">
//                   →
//                 </button>
//               </div>

//               <p className="text-xs text-gray-500 mt-4">
//                 Office: Bandra East, Mumbai - 400051
//               </p>
//             </div>
//           </div>


//           <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

//             <p className="text-center md:text-left">
//               © 2026 Welcome Realty LLP
//             </p>

//             <p className="text-center">
//               Designed & Developed by{" "}
//               <a
//                 href="https://www.nakshatranamahacreations.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-gray-100 transition"
//               >
//                 Nakshatra Namaha Creations
//               </a>
//             </p>

//             <div className="flex gap-4">
//               <a href="#" className="text-sm hover:text-white transition">Privacy</a>
//               <a href="#" className="text-sm hover:text-white transition">Terms</a>
//               <a href="#" className="text-sm hover:text-white transition">Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </footer>


//       {showScrollBtn && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
//         >
//           ↑
//         </button>
//       )}
//     </>
//   );
// };

// export default Footer;


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { PhoneOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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
      <footer
        className={`${poppins.className} relative bg-gradient-to-b from-[#0A192F] via-[#0B1F3A] to-[#020617] text-gray-300`}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Logo */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg bg-white p-1 shadow">
                  <Image src="/realstate1.png" alt="logo" fill className="object-contain" />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Welcome Realty LLP
                </h2>
              </div>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                Premium real estate solutions tailored for modern and luxury living.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {[
                  { name: "Properties", path: "/service" },
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/service" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name} className="flex items-center">
                    <Link
                      href={item.path}
                      className="text-sm text-gray-400 hover:text-white transition duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact (ALIGNED SAME AS LINKS) */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Contact
              </h3>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-4 flex justify-center text-gray-400">
                    <PhoneOutlined />
                  </span>
                  <span className="text-sm text-gray-400 hover:text-white transition">
                    +91 9876543210
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-4 flex justify-center text-gray-400">
                    <MailOutlined />
                  </span>
                  <span className="text-sm text-gray-400 hover:text-white transition">
                    info@welcomerealty.com
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-4 flex justify-center text-gray-400">
                    <WhatsAppOutlined />
                  </span>
                  <span className="text-sm text-gray-400 hover:text-white transition">
                    +91 9876543210
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Stay Updated
              </h3>

              <p className="text-sm text-gray-400 mb-5">
                Get latest property alerts & exclusive offers.
              </p>

              <div className="flex items-center bg-white/10 border border-gray-700 rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2.5 text-sm text-white bg-transparent outline-none placeholder-gray-400"
                />
                <button className="px-4 py-2.5 bg-blue-500 text-white hover:bg-blue-600 transition">
                  →
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Office: Bandra East, Mumbai - 400051
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Welcome Realty LLP</p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://www.nakshatranamahacreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                Nakshatra Namaha Creations
              </a>
            </p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;