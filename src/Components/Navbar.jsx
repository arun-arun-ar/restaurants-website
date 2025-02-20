import React, { useState } from 'react';
import { Utensils, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Menu', href: '#' },
    { 
      name: 'Pages', 
      subLinks: [
        { name: 'Booking', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Testimonial', href: '#' },
      ]
    },
    { name: 'Contact', href: '#' },
  ];

  return (
    <div className='bg-slate-900'>
      <nav className='flex justify-between items-center p-5 max-w-7xl mx-auto'>
        {/* Logo */}
        <div className='flex gap-2 text-[#FEA116] text-3xl font-bold'>
          <Utensils className='h-10 w-10' />
          <h1>Restoran</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex text-white text-lg font-semibold cursor-pointer'>
          <ul className='flex gap-8 items-center'>
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="relative group">
                  <button className="hover:text-[#FEA116] transition-colors duration-300">
                    {link.name}
                  </button>
                  <div className="absolute hidden group-hover:block bg-slate-800 p-4 rounded mt-2">
                    <ul className="flex flex-col gap-2">
                      {link.subLinks.map((subLink) => (
                        <li 
                          key={subLink.name}
                          className="hover:text-[#FEA116] whitespace-nowrap"
                        >
                          {subLink.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <li 
                  key={link.name}
                  className="hover:text-[#FEA116] transition-colors duration-300"
                >
                  {link.name}
                </li>
              )
            ))}
            <li className="flex items-center justify-center hover:bg-[#f0aa40] h-10 w-40 rounded-md bg-amber-500 transition-all duration-300">
              BOOK A TABLE
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-slate-900 z-50 h-screen w-full">
            <div className="flex flex-col items-center pt-20 px-5 space-y-6">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div key={link.name} className="text-center">
                    <button
                      onClick={() => setIsPagesOpen(!isPagesOpen)}
                      className="text-white text-xl hover:text-[#FEA116]"
                    >
                      {link.name}
                    </button>
                    {isPagesOpen && (
                      <div className="mt-2 space-y-3">
                        {link.subLinks.map((subLink) => (
                          <div 
                            key={subLink.name}
                            className="text-gray-300 hover:text-[#FEA116]"
                          >
                            {subLink.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white text-xl hover:text-[#FEA116]"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <button className="hover:bg-[#f0aa40] h-12 w-48 rounded-md bg-amber-500 transition-all duration-300 text-white text-xl">
                BOOK A TABLE
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
