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
            <div className="relative z-10 flex items-center justify-between min-h-screen text-white">
                <div className='basis-[40%] flex flex-col mx-32 my-6'>
                    <h1 className='text-7xl font-bold'>Enjoy Our Delicious Meal</h1>
                    <p className='text-2xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat fuga voluptatibus eaque. Laboriosam, laudantium.</p>
                    <a className="flex items-center justify-center hover:bg-[#f0aa40] h-14 w-48 rounded-md bg-amber-500 transition-all duration-300 my-6 text-xl font-semibold cursor-pointer">BOOK A TABLE</a>
                </div>
                <div className="basis-[50%] flex justify-center">
                    <img
                        src="/hero.png"
                        alt="Rotating Image"
                        className="h-[600px] w-[600px]"
                    />

                </div>
            </div>


        </div>
    );
};

export default Profile;