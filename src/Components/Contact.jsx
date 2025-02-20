import React from 'react';

const Contact = () => {
  return (
    <div className='my-16 bg-slate-900 px-4 md:px-8 lg:px-16 py-10'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
        {/* Left Section: Image */}
        <div className='w-full lg:w-1/2'>
          <img 
            src="https://img.freepik.com/premium-photo/restaurant-interior-with-plants_863013-36392.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid" 
            alt="Restaurant Interior" 
            className='h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] w-full object-cover rounded-lg shadow-lg' 
          />
        </div>

        {/* Right Section: Form */}
        <div className='w-full lg:w-1/2'>
          <h2 className='text-amber-400 font-bold text-3xl sm:text-4xl mb-4 text-center lg:text-left'>
            Reservation
          </h2>
          <h2 className='text-white font-bold text-2xl sm:text-3xl mb-6 text-center lg:text-left'>
            Book a Table Online.
          </h2>

          <form className='space-y-5 w-full'>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className='text-white font-semibold block mb-1'>Name</label>
              <input 
                type="text" 
                id="name" 
                className='w-full p-3 bg-gray-800 text-white border border-amber-400 rounded-md focus:outline-none focus:border-amber-500' 
                placeholder="Enter your name" 
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className='text-white font-semibold block mb-1'>Email</label>
              <input 
                type="email" 
                id="email" 
                className='w-full p-3 bg-gray-800 text-white border border-amber-400 rounded-md focus:outline-none focus:border-amber-500' 
                placeholder="Enter your email" 
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className='text-white font-semibold block mb-1'>Phone</label>
              <input 
                type="text" 
                id="phone" 
                className='w-full p-3 bg-gray-800 text-white border border-amber-400 rounded-md focus:outline-none focus:border-amber-500' 
                placeholder="Enter your phone number" 
              />
            </div>

            {/* Reservation Date */}
            <div>
              <label htmlFor="date" className='text-white font-semibold block mb-1'>Reservation Date</label>
              <input 
                type="date" 
                id="date" 
                className='w-full p-3 bg-gray-800 text-white border border-amber-400 rounded-md focus:outline-none focus:border-amber-500' 
              />
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                className='w-full py-3 bg-amber-400 text-white font-semibold rounded-md hover:bg-amber-500 transition-all'
              >
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
