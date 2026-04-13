import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                <div>
                    <h2 className="text-xl font-bold mb-2">Welcome Realty LLP</h2>
                    <p className="text-gray-300">Trusted Real Estate Experts in Mumbai and Navi Mumbai.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#properties" className="hover:text-blue-400">Properties</a></li>
                        <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>📞 +91 98765 43210</li>
                        <li>✉ info@welcomerealty.com</li>
                        <li>💬 WhatsApp: +91 98765 43210</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="hover:text-blue-400">Facebook</a>
                        <a href="#" className="hover:text-blue-400">Instagram</a>
                        <a href="#" className="hover:text-blue-400">LinkedIn</a>
                    </div>
                    <form>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded-l text-black"
                        />
                        <button className="bg-blue-700 p-2 rounded-r hover:bg-blue-600">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                © 2026 nakshatranamahacreations Pvt.Ltd 
                
            </div>
        </footer>
    )
}

export default Footer
