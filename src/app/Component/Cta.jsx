import React from 'react'

const Cta = () => {
  return (
    // <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16 text-white">
     <section className="bg-gradient-to-r from-gray-200 via-gray-200 py-20 px-6 md:px-16 text-black">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Step Into Your Dream Home in Mumbai
        </h2>

       
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          Discover premium residences across Mumbai & Navi Mumbai with
          <span className="text-black font-semibold"> Welcome Realty LLP</span>.
          We help you buy, sell, and rent properties with complete trust, clarity, and expertise.
        </p>

        <p className="text-gray-800 mb-10 text-base">
          Serving clients since 2009 with verified listings, transparent deals, and end-to-end real estate support.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Properties
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
            Contact Us Today
          </button>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          Trusted by 1000+ families • Mumbai & Navi Mumbai specialists • 100% verified listings
        </p>

      </div>

    </section>
  )
}

export default Cta