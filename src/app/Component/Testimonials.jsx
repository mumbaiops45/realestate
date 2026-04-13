import React from 'react'

const Testimonials = () => {

    const testimonials = [
        {
            name: "Rohit Mehta",
            role: "Home Buyer - Bandra West",
            message:
                "Welcome Realty LLP made our home buying journey smooth and stress-free. Their guidance and transparency helped us find the perfect 2BHK in Bandra within our budget."
        },
        {
            name: "Priya Sharma",
            role: "Investor - Worli",
            message:
                "Highly professional team with deep market knowledge. I invested in a sea-view apartment in Worli and got the best deal thanks to their expertise."
        },
        {
            name: "Amit Joshi",
            role: "Property Buyer - Powai",
            message:
                "What I liked most was their honesty and end-to-end support. From property visits to paperwork, everything was handled perfectly."
        },
        {
            name: "Sneha Patil",
            role: "Navi Mumbai Client",
            message:
                "Excellent service! They understood my requirements and helped me find a modern studio apartment in Navi Mumbai quickly."
        }
    ];

    return (
        <section className="bg-white py-16 px-6 md:px-16">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 text-lg">
                    Real experiences from our happy clients across Mumbai & Navi Mumbai who found their dream homes with us.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        {/* Quote */}
                        <p className="text-gray-700 mb-4 italic">
                            “{item.message}”
                        </p>

                        {/* Name */}
                        <h4 className="text-lg font-semibold text-gray-800">
                            {item.name}
                        </h4>

                        {/* Role */}
                        <p className="text-sm text-gray-500">
                            {item.role}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials