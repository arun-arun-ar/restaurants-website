import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-[80vh] sm:min-h-screen w-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[65vh] sm:min-h-screen text-white px-4 sm:px-10 lg:px-20 gap-2 sm:gap-4 lg:gap-0">
                
                {/* Text Section */}
                <div className='lg:basis-[40%] flex flex-col text-center lg:text-left max-w-2xl'>
                    <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight'>
                        Enjoy Our Delicious Meal
                    </h1>
                    <p className='text-base sm:text-lg lg:text-2xl my-3 sm:my-5 lg:my-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat fuga voluptatibus eaque. Laboriosam, laudantium.
                    </p>
                    <a className="flex items-center justify-center mx-auto lg:mx-0 hover:bg-[#f0aa40] h-10 sm:h-12 lg:h-14 w-36 sm:w-44 lg:w-48 rounded-md bg-amber-500 transition-all duration-300 my-3 sm:my-5 text-base sm:text-lg lg:text-xl font-semibold cursor-pointer">
                        BOOK A TABLE
                    </a>
                </div>

                {/* Image Section */}
                <div className="lg:basis-[50%] flex justify-center mt-2 lg:mt-0 py-4">
                    <img
                        src="/hero.png"
                        alt="Rotating Image"
                        className="h-60 w-60 sm:h-56 sm:w-56 lg:h-[500px] lg:w-[500px] max-w-full animate-slow-spin"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
