import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-slate-900 pb-10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Company Section */}
                <div className="text-amber-400">
                    <h1 className="text-2xl font-bold">Company</h1>
                    <ul className="text-white my-2 space-y-2">
                        <li className="hover:text-amber-400 cursor-pointer">About Us</li>
                        <li className="hover:text-amber-400 cursor-pointer">Contact Us</li>
                        <li className="hover:text-amber-400 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-amber-400 cursor-pointer">Terms and Conditions</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="text-amber-400">
                    <h1 className="text-2xl font-bold">Contact</h1>
                    <div className="flex gap-2 my-2 text-white hover:text-amber-400">
                        <MapPin />
                        <p>123 Street, Kathmandu, Nepal</p>
                    </div>
                    <div className="flex gap-2 my-2 text-white hover:text-amber-400">
                        <PhoneCall />
                        <p>+977 9876543210</p>
                    </div>
                    <div className="flex gap-2 my-2 text-white hover:text-amber-400">
                        <Mail />
                        <p>info@info.com</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-6 cursor-pointer">
                        <a href="#" className="text-pink-500 hover:text-pink-600 text-4xl">
                            <Instagram />
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-4xl">
                            <Facebook />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-500 text-4xl">
                            <Twitter />
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-4xl">
                            <Linkedin />
                        </a>
                    </div>
                </div>

                {/* Opening Hours Section */}
                <div>
                    <h1 className="text-2xl font-bold text-amber-400">Open</h1>
                    <div className="text-white">
                        <h3 className="font-bold hover:text-amber-400">Sunday - Friday</h3>
                        <p className="font-semibold my-2 hover:text-amber-400">09AM to 11PM</p>
                    </div>
                    <div className="text-white">
                        <h3 className="font-bold hover:text-amber-400">Saturday</h3>
                        <p className="font-semibold my-2 hover:text-amber-400">10AM to 10PM</p>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="text-amber-400">
                    <h1 className="text-2xl font-bold">Newsletter</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet.</p>
                    <input
                        type="email"
                        className="bg-white border-amber-400 border-2 rounded-md h-10 w-full mt-2"
                    />
                    <button className="inline-flex justify-center items-center px-4 py-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all h-10 w-48 mt-4">
                        Send
                    </button>
                </div>
            </div>
            <div >
                <p className='text-white text-center pt-5 mt-5'>© All Right Reserved | Designed Arun Acharya</p>
            </div>
        </div>
    );
};

export default Footer;
