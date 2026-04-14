// // import React from 'react'

// // const Footer = () => {
// //     return (
// //         <footer className="bg-gray-800 text-white py-10">
// //             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
// //                 <div>
// //                     <h2 className="text-xl font-bold mb-2">Welcome Realty LLP</h2>
// //                     <p className="text-gray-300">Trusted Real Estate Experts in Mumbai and Navi Mumbai.</p>
// //                 </div>
// //                 <div>
// //                     <h3 className="font-semibold mb-2">Quick Links</h3>
// //                     <ul className="space-y-1">
// //                         <li><a href="#home" className="hover:text-blue-400">Home</a></li>
// //                         <li><a href="#properties" className="hover:text-blue-400">Properties</a></li>
// //                         <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
// //                         <li><a href="#services" className="hover:text-blue-400">Services</a></li>
// //                         <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
// //                     </ul>
// //                 </div>
// //                 <div>
// //                     <h3 className="font-semibold mb-2">Contact Us</h3>
// //                     <ul className="space-y-1 text-gray-300">
// //                         <li>📞 +91 98765 43210</li>
// //                         <li>✉ info@welcomerealty.com</li>
// //                         <li>💬 WhatsApp: +91 98765 43210</li>
// //                     </ul>
// //                 </div>
// //                 <div>
// //                     <h3 className="font-semibold mb-2">Follow Us</h3>
// //                     <div className="flex space-x-4 mb-4">
// //                         <a href="#" className="hover:text-blue-400">Facebook</a>
// //                         <a href="#" className="hover:text-blue-400">Instagram</a>
// //                         <a href="#" className="hover:text-blue-400">LinkedIn</a>
// //                     </div>
// //                     <form>
// //                         <input
// //                             type="email"
// //                             placeholder="Your email"
// //                             className="p-2 rounded-l text-black"
// //                         />
// //                         <button className="bg-blue-700 p-2 rounded-r hover:bg-blue-600">Subscribe</button>
// //                     </form>
// //                 </div>
// //             </div>
// //             <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
// //                 © 2026 nakshatranamahacreations Pvt.Ltd 

// //             </div>
// //         </footer>
// //     )
// // }

// // export default Footer



// import React from 'react';
// import Image from 'next/image';

// const Footer = () => {
//     return (
//         <footer className="bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 text-white">
//             <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//                     {/* Brand column with logo */}
//                     <div>
//                         <div className="flex items-center gap-3 mb-4">
//                             <div className="relative w-10 h-10">
//                                 <div className="relative w-10 h-10">
//                                     <Image
//                                         src="/realstate1.png"
//                                         alt="Welcome Realty Logo"
//                                         fill
//                                         className="object-contain"
//                                         sizes="40px"
//                                     />
//                                 </div>
//                             </div>
//                             <h2 className="text-xl font-bold tracking-tight">Welcome Realty LLP</h2>
//                         </div>
//                         <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
//                             &copy; 2026 nakshatranamahacreations Pvt.Ltd

//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
//                             Quick Links
//                         </h3>
//                         <ul className="space-y-2 text-gray-300">
//                             <li><a href="#home" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Home</a></li>
//                             <li><a href="#properties" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Properties</a></li>
//                             <li><a href="#about" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>About Us</a></li>
//                             <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Services</a></li>
//                             <li><a href="#contact" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Contact</a></li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
//                             Contact Us
//                         </h3>
//                         <ul className="space-y-3 text-gray-300">
//                             <li className="flex items-start gap-3">
//                                 <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
//                                 <span>+91 xxxxx xxxxx</span>
//                             </li>
//                             <li className="flex items-start gap-3">
//                                 <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//                                 <span>info@welcomerealty.com</span>
//                             </li>
//                             <li className="flex items-start gap-3">
//                                 <span className="text-blue-400 text-lg leading-5">💬</span>
//                                 <span>WhatsApp: +91 xxxxx xxxxx</span>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Newsletter & Social */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
//                             Stay Updated
//                         </h3>
//                         <p className="text-gray-300 text-sm mb-3">Get latest property alerts & offers.</p>
//                         <form className="flex flex-col sm:flex-row gap-2">
//                             <input
//                                 type="email"
//                                 placeholder="Your email"
//                                 className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400"
//                             />
//                             <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 font-medium">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                                 Subscribe
//                             </button>
//                         </form>
//                         <div className="mt-6 pt-4 border-t border-white/10">
//                             <p className="text-gray-400 text-xs">📍 Office: Bandra East, Mumbai - 400051</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom bar with credit line */}
//                 <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
//                     <p>© 2026 nakshatranamahacreations Pvt.Ltd</p>
//                     <p className="text-xs md:text-sm">
//                         Designed & Developed by <span className="text-blue-400 font-medium">Nakshatra Namaha Creations</span>
//                     </p>
//                     <div className="flex gap-4 text-xs">
//                         <a href="#" className="hover:text-blue-400">Privacy Policy</a>
//                         <a href="#" className="hover:text-blue-400">Terms of Use</a>
//                         <a href="#" className="hover:text-blue-400">Sitemap</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column with logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/realstate1.png"
                      alt="Welcome Realty Logo"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                </div>
                <h2 className="text-xl font-bold tracking-tight">Welcome Realty LLP</h2>
              </div>
              {/* <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                &copy; 2026 nakshatranamahacreations Pvt.Ltd
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Home</a></li>
                <li><a href="#properties" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Properties</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Services</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span>Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+91 xxxxx xxxxx</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>info@welcomerealty.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg leading-5">💬</span>
                  <span>WhatsApp: +91 xxxxx xxxxx</span>
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-500">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm mb-3">Get latest property alerts & offers.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400"
                />
               {/* <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Subscribe
                </button> */}
              </form>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-gray-400 text-xs">📍 Office: Bandra East, Mumbai - 400051</p>
              </div>
            </div>
          </div>

          {/* Bottom bar with credit line – link added */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
            <p>© 2026 nakshatranamahacreations Pvt.Ltd</p>
            <p className="text-xs md:text-sm">
              Designed & Developed by{' '}
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

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;