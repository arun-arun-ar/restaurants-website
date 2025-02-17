import { Headset, ShoppingCart, UserRound, Utensils } from 'lucide-react'
import React from 'react'

const Services = () => {
    return (
        <div className='m-10'>
            <div className='flex justify-around'>
                <div className='group rounded-md hover:bg-amber-400 w-96 m-10 p-6 hover:text-white transition-all duration-300'>
                    <UserRound className='h-20 w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        Master Chefs
                    </p>
                    <p className='text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>
                <div className='group rounded-md hover:bg-amber-400 w-96 m-10 p-6 hover:text-white transition-all duration-300'>
                    <Utensils className='h-20 w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        Quality Food
                    </p>
                    <p className='text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>
                <div className='group rounded-md hover:bg-amber-400 w-96 m-10 p-6 hover:text-white transition-all duration-300'>
                    <ShoppingCart className='h-20 w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        Online Order
                    </p>
                    <p className='text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>
                <div className='group rounded-md hover:bg-amber-400 w-96 m-10 p-6 hover:text-white transition-all duration-300'>
                    <Headset className='h-20 w-20 text-amber-300 m-4 group-hover:text-white transition-all duration-300' />
                    <p className='text-xl font-bold m-4 group-hover:text-white transition-all duration-300'>
                        24/7 Service
                    </p>
                    <p className='text-md font-semibold m-4 group-hover:text-white transition-all duration-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, itaque?
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Services