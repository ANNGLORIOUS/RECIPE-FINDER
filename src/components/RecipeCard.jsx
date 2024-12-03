import React from 'react';
import { Soup, Heart } from "lucide-react";

const RecipeCard = ({ title, image, servings, readyInMinutes, sourceName, spoonacularSourceUrl, pricePerServing }) => {
  return (
    <div className='flex flex-col rounded-md bg-white overflow-hidden p-3 relative'>
      <a href={spoonacularSourceUrl} className='relative h-32'>
        <img
          src={image} 
          alt={title}
          className='rounded-md w-full h-full object-cover cursor-pointer'
        />
        <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
          <Soup size={16} /> {servings} Servings
        </div>
        <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </a>
      <div className='mt-1'>
        <p className='font-bold tracking-wide'>{title}</p>
      </div>
      <p className='my-2'>{sourceName}</p>
      <div className='flex gap-2 mt-auto'>
        <div className='flex gap-1 bg-white items-center p-1 rounded-md'>
          <Heart size={16} />
          <span className='text-sm tracking-tighter font-semibold '>Gluten-free</span>
        </div>
        <div className='flex gap-1 bg-white items-center p-1 rounded-md'>
          <Heart size={16} />
          <span className='text-sm tracking-tighter font-semibold '>Heart-health</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
