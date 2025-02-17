import { Coffee, HandPlatter, Salad } from 'lucide-react';
import React, { useState } from 'react';

const FoodMenu = () => {
  // Store and select menu category
  const [SelectedMenu, setSelectedMenu] = useState('Breakfast');

  // Define images for each menu
  const menuImages = {
    Breakfast: ['https://img.freepik.com/free-vector/brekfast-time-realistic-pictograms-poster_1284-5661.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid', 'https://img.freepik.com/free-photo/breakfast-consists-bread-fried-egg-salad-dressing-black-grapes-tomatoes-sliced-a-a-onions_1150-24459.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid', 'https://img.freepik.com/premium-photo/cheese-waffles-with-fried-bacon-egg-parmesan-cheese-with-spices-basil-breakfast-light-old-concrete-surface-top-view_253362-5770.jpg?uid=R88770947&ga=GA1.1.1506247137.1739685674&semt=ais_hybrid'],
    Lunch: ['img-1', 'img-2', 'img-3'],
    Dinner: ['img-1', 'img-2', 'img-3'],
  };

  return (
    <div className='my-10'>
      <div>
        <h1 className='text-3xl font-bold text-amber-400 text-center'>Food Menu</h1>
        <h2 className='text-2xl font-bold text-center my-6'>Most Popular Food Items</h2>
      </div>

      <div className='flex justify-center items-center'>
        <div
          className={`mx-6 flex cursor-pointer ${SelectedMenu === 'Breakfast' ? 'border-b-4 border-amber-400' : ''}`}
          onClick={() => setSelectedMenu('Breakfast')}
        >
          <Coffee className='h-14 w-14 text-amber-400' />
          <div className='ml-3'>
            <p className='text-slate-600 text-xl'>Popular</p>
            <p className='text-xl font-semibold'>Breakfast</p>
          </div>
        </div>
        <div
          className={`mx-6 flex cursor-pointer ${SelectedMenu === 'Lunch' ? 'border-b-4 border-amber-400' : ''}`}
          onClick={() => setSelectedMenu('Lunch')}
        >
          <Salad className='h-14 w-14 text-amber-400' />
          <div className='ml-3'>
            <p className='text-slate-600 text-xl'>Special</p>
            <p className='text-xl font-semibold'>Lunch</p>
          </div>
        </div>
        <div
          className={`mx-6 flex cursor-pointer ${SelectedMenu === 'Dinner' ? 'border-b-4 border-amber-400' : ''}`}
          onClick={() => setSelectedMenu('Dinner')}
        >
          <HandPlatter className='h-14 w-14 text-amber-400' />
          <div className='ml-3'>
            <p className='text-slate-600 text-xl'>Lovely</p>
            <p className='text-xl font-semibold'>Dinner</p>
          </div>
        </div>
      </div>

      {/* Display selected menu items */}
      {SelectedMenu && (
        <div className='mx-8 flex justify-center items-center flex-wrap gap-4 mt-6'>
          {menuImages[SelectedMenu]?.map((img, index) => (
            <img key={index} src={img} alt={SelectedMenu} className='h-96 w-96 object-cover' />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
