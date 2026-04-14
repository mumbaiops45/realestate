// "use client"
// import React, { useState, useEffect } from 'react'

// const Faq = () => {

//     const [openIndex, setOpenIndex] = useState(null);
//     const [visibleItems, setVisibleItems] = useState([]);

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     const faqs = [
//         {
//             question: "Do you help with both buying and renting properties?",
//             answer:
//                 "Yes, Welcome Realty LLP assists with buying, selling, and renting residential and commercial properties across Mumbai & Navi Mumbai."
//         },
//         {
//             question: "Are all listed properties verified?",
//             answer:
//                 "Absolutely. Every property we list is legally verified to ensure transparency, safety, and peace of mind for our clients."
//         },
//         {
//             question: "Do you charge any brokerage fees?",
//             answer:
//                 "Yes, brokerage charges depend on the type of property and transaction. We maintain full transparency with no hidden costs."
//         },
//         {
//             question: "Can I get assistance with home loans?",
//             answer:
//                 "Yes, we help connect you with trusted banking partners and guide you through the home loan approval process."
//         },
//         {
//             question: "Which areas do you serve?",
//             answer:
//                 "We primarily serve Mumbai and Navi Mumbai, including Bandra, Worli, Powai, Juhu, and surrounding prime locations."
//         },
//         {
//             question: "How do I schedule a property visit?",
//             answer:
//                 "You can contact us directly through the website or call our team, and we will arrange a convenient site visit for you."
//         }
//     ];



//     useEffect(() => {
//         const openedSet = new Set();

//         const handleScroll = () => {
//             const triggerBottom = window.innerHeight * 0.85;
//             const cards = document.querySelectorAll(".faq-card");

//             cards.forEach((card, index) => {
//                 const rect = card.getBoundingClientRect();

//                 if (rect.top < triggerBottom) {

//                     setVisibleItems((prev) =>
//                         prev.includes(index) ? prev : [...prev, index]
//                     );


//                     if (!openedSet.has(index)) {
//                         openedSet.add(index);

//                         setTimeout(() => {
//                             setOpenIndex(index);
//                         }, 300);
//                     }
//                 }
//             });
//         };

//         window.addEventListener("scroll", handleScroll);
//         handleScroll();

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <section className=" py-16 px-6 md:px-16" style={{
//             background: "linear-gradient(135deg, #0f172a 0%, #1e3a6e 40%, #1e40af 70%, #1d4ed8 100%)"
//         }}>

//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h2 className="text-4xl font-bold text-white mb-4">
//                     Frequently Asked Questions
//                 </h2>
//                 <p className="text-white text-lg">
//                     Everything you need to know about buying, selling, and renting properties with Welcome Realty LLP.
//                 </p>
//             </div>


//             <div className="max-w-3xl mx-auto space-y-4">
//                 {faqs.map((item, index) => (

//                     <div
//                         key={index}
//                         className={`faq-card bg-white p-5 rounded-xl shadow-md transition-all duration-700 ease-out
//         ${visibleItems.includes(index)
//                                 ? "opacity-100 translate-y-0"
//                                 : "opacity-0 translate-y-10"
//                             }
//     `}
//                     >
//                         <h3
//                             onClick={() => toggleFAQ(index)}
//                             className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-between cursor-pointer w-full"
//                         >
//                             <span>{item.question}</span>

//                             <span className="text-xl ml-4">
//                                 {openIndex === index ? "-" : "+"}
//                             </span>
//                         </h3>

//                         {openIndex === index && (
//                             <p className="text-gray-600 ">
//                                 {item.answer}
//                             </p>
//                         )}

//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Faq

"use client";
import React, { useState, useEffect } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you help with both buying and renting properties?",
      answer:
        "Yes, Welcome Realty LLP assists with buying, selling, and renting residential and commercial properties across Mumbai & Navi Mumbai."
    },
    {
      question: "Are all listed properties verified?",
      answer:
        "Absolutely. Every property we list is legally verified to ensure transparency, safety, and peace of mind for our clients."
    },
    {
      question: "Do you charge any brokerage fees?",
      answer:
        "Yes, brokerage charges depend on the type of property and transaction. We maintain full transparency with no hidden costs."
    },
    {
      question: "Can I get assistance with home loans?",
      answer:
        "Yes, we help connect you with trusted banking partners and guide you through the home loan approval process."
    },
    {
      question: "Which areas do you serve?",
      answer:
        "We primarily serve Mumbai and Navi Mumbai, including Bandra, Worli, Powai, Juhu, and surrounding prime locations."
    },
    {
      question: "How do I schedule a property visit?",
      answer:
        "You can contact us directly through the website or call our team, and we will arrange a convenient site visit for you."
    }
  ];

  // Only for fade‑in animation – no auto‑opening
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
      className="min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-16"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a6e 40%, #1e40af 70%, #1d4ed8 100%)"
      }}
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