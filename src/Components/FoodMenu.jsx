import { Coffee, HandPlatter, Salad } from 'lucide-react';
import React, { useState } from 'react';

const FoodMenu = () => {
  // Store and select menu category
  const [SelectedMenu, setSelectedMenu] = useState('Breakfast');

  // Define images for each menu
  const menuImages = {
    Breakfast: [
      'https://img.freepik.com/free-vector/brekfast-time-realistic-pictograms-poster_1284-5661.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid',
      'https://img.freepik.com/free-photo/breakfast-consists-bread-fried-egg-salad-dressing-black-grapes-tomatoes-sliced-a-a-onions_1150-24459.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid',
      'https://img.freepik.com/premium-photo/cheese-waffles-with-fried-bacon-egg-parmesan-cheese-with-spices-basil-breakfast-light-old-concrete-surface-top-view_253362-5770.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid',
    ],
    Lunch: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
    Dinner: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'],
  };

  return (
    <div className='my-10 mx-4'>
      {/* Title */}
      <div>
        <h1 className='text-3xl md:text-4xl font-bold text-amber-400 text-center'>Food Menu</h1>
        <h2 className='text-xl md:text-2xl font-bold text-center my-6'>Most Popular Food Items</h2>
      </div>

      {/* Menu Selection */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        {[
          { name: 'Breakfast', icon: <Coffee className='h-14 w-14 text-amber-400' />, label: 'Popular' },
          { name: 'Lunch', icon: <Salad className='h-14 w-14 text-amber-400' />, label: 'Special' },
          { name: 'Dinner', icon: <HandPlatter className='h-14 w-14 text-amber-400' />, label: 'Lovely' },
        ].map((menu) => (
          <div
            key={menu.name}
            className={`flex items-center cursor-pointer px-4 py-2 transition-all duration-300 ${
              SelectedMenu === menu.name ? 'border-b-4 border-amber-400' : ''
            }`}
            onClick={() => setSelectedMenu(menu.name)}
          >
            {menu.icon}
            <div className='ml-3'>
              <p className='text-slate-600 text-lg md:text-xl'>{menu.label}</p>
              <p className='text-lg md:text-xl font-semibold'>{menu.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display selected menu items */}
      {SelectedMenu && (
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {menuImages[SelectedMenu]?.map((img, index) => (
            <img key={index} src={img} alt={SelectedMenu} className='h-72 w-72 sm:h-80 sm:w-80 object-cover rounded-lg shadow-lg' />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
