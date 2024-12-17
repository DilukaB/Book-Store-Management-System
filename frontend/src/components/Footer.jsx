import React from 'react'
import footerLogo from "../assets/footer-logo.jpg"
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-1 px-4">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-8">
                {/* Left Side - Logo and Nav */}
                <div className="w-full md:w-1/3">
                    <img src={footerLogo} alt="Logo" className="mb-5 w-40" />
                    <ul className="flex flex-col md:flex-row gap-6">
                        <li><a href="#home" className="hover:text-primary text-sm md:text-base">Home</a></li>
                        <li><a href="#shop" className="hover:text-primary text-sm md:text-base">Shop</a></li>
                        <li><a href="#about" className="hover:text-primary text-sm md:text-base">About Us</a></li>
                        <li><a href="#contact" className="hover:text-primary text-sm md:text-base">Contact</a></li>
                    </ul>
                </div>

                {/* Center Section - Newsletter */}
                <div className="w-full md:w-1/3">
                    <p className="mb-4 text-center md:text-left text-sm md:text-base">
                        Stay updated with our latest collections and exclusive offers!
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-md text-black mb-4 md:mb-0"
                        />
                        <button className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-primary-dark">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Right Side - Customer Support */}
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <p className="text-sm md:text-base mb-4">Need Help?</p>
                    <ul>
                        <li className="flex items-center justify-center md:justify-end gap-2 text-sm md:text-base">
                            <FaPhoneAlt className="text-primary" size={20} />
                            <span>+123-456-7890</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-end gap-2 text-sm md:text-base">
                            <FaEnvelope className="text-primary" size={20} />
                            <span>support@bookstore.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-600 pt-6">
                {/* Left Side - Privacy Links */}
                <ul className="flex gap-8 mb-4 md:mb-0 text-sm md:text-base">
                    <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
                    <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
                    <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                </ul>

                {/* Right Side - Social Icons */}
                <div className="flex gap-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer