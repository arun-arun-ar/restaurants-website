import React from 'react'
import { Utensils } from "lucide-react"

const Navbar = () => {
    return (
        <div className='bg-slate-900'>
            <nav className='flex justify-between items-center p-5'>
                <div className='flex gap-2 text-[#FEA116] text-3xl font-bold mx-10'>
                    <Utensils className='h-10 w-10' />
                    <h1>Restoran</h1>
                </div>
                <div className='text-white text-lg font-semibold cursor-pointer mx-10'>
                    <ul className='flex gap-8'>
                        <li className="hover:text-[#FEA116] transition-colors duration-300">Home</li>
                        <li className="hover:text-[#FEA116] transition-colors duration-300">About</li>
                        <li className="hover:text-[#FEA116] transition-colors duration-300">Service</li>
                        <li className="hover:text-[#FEA116] transition-colors duration-300">Menu</li>
                        <div className="relative">
                            <select id="page-select"className="bg-transparent text-white cursor-pointer focus:outline-none hover:text-[#FEA116] transition-colors duration-300"aria-label="Select a page">
                                <option className="text-black" value="select-page">Pages</option>
                                <option className="text-black" value="booking">Booking</option>
                                <option className="text-black" value="team">Our Team</option>
                                <option className="text-black" value="testimonial">Testimonial</option>
                            </select>
                        </div>

                        <li className="hover:text-[#FEA116] transition-colors duration-300">Contact</li>

                        <li className="flex items-center justify-center hover:bg-[#f0aa40] h-10 w-40 rounded-md bg-amber-500 transition-all duration-300">
                            BOOK A TABLE
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
