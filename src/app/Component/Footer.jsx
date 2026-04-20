"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins  } from "next/font/google";


const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
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
        // className={`${inter.className} relative bg-[#44449f] text-white border-t border-white/10`}
         className={`${inter.className}  bg-gradient-to-b from-blue-300 via-gray-950 to-slate-800 `}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-md bg-white p-1">
                  <Image
                    src="/realstate1.png"
                    alt="Welcome Realty Logo"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <h2 className="text-xl tracking-wide uppercase font-semibold">
                  Welcome Realty LLP
                </h2>
              </div>

              <p className="text-white/80 text-base leading-relaxed">
                Premium real estate solutions tailored for modern and luxury living.
              </p>
            </div>

           
            <div>
              <h3 className="text-base uppercase tracking-widest mb-6 text-white font-medium">
                Quick Links
              </h3>

              <ul className="space-y-4 text-base text-white/80">
                {["Properties", "About Us", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
            <div>
              <h3 className="text-base uppercase tracking-widest mb-6 font-medium">
                Contact
              </h3>

              <ul className="space-y-4 text-base text-white/80">
                <li>
                  <span className="text-white font-medium">Phone:</span> +91 xxxxx xxxxx
                </li>
                <li>
                  <span className="text-white font-medium">Email:</span> info@welcomerealty.com
                </li>
                <li>
                  <span className="text-white font-medium">WhatsApp:</span> +91 XXXXX XXXXX
                </li>
              </ul>
            </div>

          
            <div>
              <h3 className="text-base uppercase tracking-widest mb-6 font-medium">
                Stay Updated
              </h3>

              <p className="text-white/80 text-base mb-5">
                Get latest property alerts & exclusive offers.
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-md bg-white text-black text-sm placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-blue-600 text-lg transition">
                  →
                </button>
              </div>

              <p className="text-white/60 text-sm mt-6">
                Office: Bandra East, Mumbai - 400051
              </p>
            </div>
          </div>

        
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">

            <p>© 2026 Nakshatra Namaha Creations Pvt. Ltd. All rights reserved.</p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://www.nakshatranamahacreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                Nakshatra Namaha Creations
              </a>
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

   
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;