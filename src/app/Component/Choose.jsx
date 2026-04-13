import React from 'react'

const Choose = () => {

    const features = [
        {
            title: "Trusted Since 2009",
            description: "Over a decade of experience building strong client trust and long-term relationships."
        },
        {
            title: "Local Market Expertise",
            description: "Deep knowledge of Mumbai & Navi Mumbai to get you the best deals."
        },
        {
            title: " Verified Properties",
            description: "All listings are verified for legal clarity and peace of mind."
        },
        {
            title: " End-to-End Assistance",
            description: "We guide you from property search to final paperwork."
        },
        {
            title: "Personalized Service",
            description: "Tailored solutions based on your lifestyle and budget."
        },
        {
            title: "Transparent Deals",
            description: "No hidden costs — just honest and clear transactions."
        }
    ];

    return (

        <section className="bg-gradient-to-b from-blue via-blue-300 to-slate-100 py-16 px-6 md:px-16 min-h-screen">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 text-left flex flex-col justify-center lg:sticky lg:top-20 h-fit">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Choose Us
                    </h1>
                    <p className="text-gray-900 text-lg leading-relaxed">
                        At Welcome Realty LLP, we go beyond just property transactions —
                        delivering trust, transparency, and unmatched expertise since 2009.
                        Helping you find the perfect home in Mumbai & Navi Mumbai.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white w-full h-64 rounded-full shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center p-6"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Choose