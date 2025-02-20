import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen text-white px-6 sm:px-12 lg:px-20">
                
                {/* Left Section (Text) */}
                <div className='lg:basis-[40%] flex flex-col text-center lg:text-left max-w-2xl'>
                    <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold'>
                        Enjoy Our Delicious Meal
                    </h1>
                    <p className='text-lg sm:text-xl lg:text-2xl my-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat fuga voluptatibus eaque. Laboriosam, laudantium.
                    </p>
                    <a className="flex items-center justify-center mx-auto lg:mx-0 hover:bg-[#f0aa40] h-14 w-48 rounded-md bg-amber-500 transition-all duration-300 my-6 text-lg sm:text-xl font-semibold cursor-pointer">
                        BOOK A TABLE
                    </a>
                </div>

                {/* Right Section (Rotating Image) */}
                <div className="lg:basis-[50%] flex justify-center mt-10 lg:mt-0">
                    <img
                        src="/hero.png"
                        alt="Rotating Image"
                        className="h-56 w-56 sm:h-72 sm:w-72 lg:h-[500px] lg:w-[500px] animate-slow-spin"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
