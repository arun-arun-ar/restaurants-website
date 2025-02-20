import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "Food Critic",
      comment:
        "The best dining experience I've had this year! The flavors were exquisite and the service was impeccable.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Regular Customer",
      comment:
        "Absolutely love their signature dishes. Consistent quality and amazing ambiance every time we visit.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Travel Blogger",
      comment:
        "A must-visit restaurant in the city. The fusion cuisine here will blow your mind!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Travel Blogger",
      comment:
        "A must-visit restaurant in the city. The fusion cuisine here will blow your mind!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Travel Blogger",
      comment:
        "A must-visit restaurant in the city. The fusion cuisine here will blow your mind!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 relative text-center">
      <h1 className="text-center text-amber-400 pacifico-font text-4xl py-2">Testimonials</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>

      <div className="relative h-auto overflow-hidden flex justify-center items-center">
        <div className="bg-white  hover:bg-amber-400 rounded-xl shadow-xl p-8 w-full max-w-lg transition-transform duration-500 transform">
          <div className="flex flex-col items-center ">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-300 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500">{testimonials[currentIndex].role}</p>
          </div>
          <p className="text-gray-700 text-lg italic mt-6">
            "{testimonials[currentIndex].comment}"
          </p>
        </div>
      </div>


      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-amber-400 text-white rounded-full w-12 p-3 shadow-lg hover:bg-amber-500"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-amber-400 text-white w-12 rounded-full p-3 shadow-lg hover:bg-amber-500"
      >
        ❯
      </button>


      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-800 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
