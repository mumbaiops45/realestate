"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

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
        className={`${inter.className} relative bg-gradient-to-b from-[#0B1F3A] via-[#0A1630] to-[#050B18] text-white`}
      >
       
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />

       
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

            
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
                <h2 className="text-lg md:text-xl font-semibold uppercase tracking-wide">
                  Welcome Realty LLP
                </h2>
              </div>

              <p className="text-white/75 leading-relaxed text-sm md:text-base">
                Premium real estate solutions tailored for modern and luxury living.
              </p>
            </div>

            
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6 text-white font-semibold">
                Quick Links
              </h3>

              <ul className="space-y-4 text-white/80">
                {[
                  { name: "Properties", path: "/service" },
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/service" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6 text-white font-semibold">
                Contact
              </h3>

              <ul className="space-y-4 text-white/75">
                <li>
                  <span className="text-white font-medium">Phone:</span>{" "}
                  +91 9876543210
                </li>
                <li>
                  <span className="text-white font-medium">Email:</span>{" "}
                  info@welcomerealty.com
                </li>
                <li>
                  <span className="text-white font-medium">WhatsApp:</span>{" "}
                  +91 9876543210
                </li>
              </ul>
            </div>

           
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6 text-white font-semibold">
                Stay Updated
              </h3>

              <p className="text-white/75 text-sm md:text-base mb-5">
                Get latest property alerts & exclusive offers.
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md bg-white text-black text-sm placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-blue-600 text-lg">
                  →
                </button>
              </div>

              <p className="text-white/60 text-xs md:text-sm mt-6">
                Office: Bandra East, Mumbai - 400051
              </p>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60">

            <p className="text-center md:text-left">
              © 2026 Nakshatra Namaha Creations Pvt. Ltd. All rights reserved.
            </p>

            <p className="text-center">
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
          className="fixed bottom-8 right-8 z-50 p-3 md:p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;