import { Headset, ShoppingCart, UserRound, Utensils } from 'lucide-react';
import React from 'react';

const Services = () => {
    return (
        <div className='m-6 sm:m-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10'>

                <div className='group rounded-md hover:bg-amber-400 p-6 hover:text-white transition-all duration-300 shadow-md'>
                    <UserRound className='h-16 w-16 sm:h-20 sm:w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-lg sm:text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        Master Chefs
                    </p>
                    <p className='text-sm sm:text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>

                <div className='group rounded-md hover:bg-amber-400 p-6 hover:text-white transition-all duration-300 shadow-md'>
                    <Utensils className='h-16 w-16 sm:h-20 sm:w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-lg sm:text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        Quality Food
                    </p>
                    <p className='text-sm sm:text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>

                <div className='group rounded-md hover:bg-amber-400 p-6 hover:text-white transition-all duration-300 shadow-md'>
                    <ShoppingCart className='h-16 w-16 sm:h-20 sm:w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-lg sm:text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        Online Order
                    </p>
                    <p className='text-sm sm:text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>

                <div className='group rounded-md hover:bg-amber-400 p-6 hover:text-white transition-all duration-300 shadow-md'>
                    <Headset className='h-16 w-16 sm:h-20 sm:w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-lg sm:text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        24/7 Service
                    </p>
                    <p className='text-sm sm:text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
