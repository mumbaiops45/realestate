"use client";
import React, { useState, useEffect } from 'react';
import { faqs } from '../data/data';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      const cards = document.querySelectorAll(".faq-card");

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          setVisibleItems((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section
      className="min-h-screen flex flex-col items-center bg-gradient-to-bl from-blue-300 via-gray-950 to-slate-800  justify-center py-16 px-6 md:px-16"
      // style={{
        // background: "linear-gradient(135deg, #0f172a 0%, #1e3a6e 40%, #1e40af 70%, #1d4ed8 100%)"
        // background: "linear-gradient(135deg, #0f172a 0%, #1e3a6e 40%, #1e40af 70%, #1d4ed8 100%)"
      // }}
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-white text-lg">
          Everything you need to know about buying, selling, and renting properties with Welcome Realty LLP.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-card bg-white p-5 rounded-xl shadow-md transition-all duration-700 ease-out
              ${visibleItems.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            <h3
              onClick={() => toggleFAQ(index)}
              className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-between cursor-pointer w-full"
            >
              <span>{item.question}</span>
              <span className="text-xl ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>

            {openIndex === index && (
              <p className="text-gray-600 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;