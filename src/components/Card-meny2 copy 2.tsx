
// Bättre än bra--- lite zindex problem mm

import Image from 'next/image';
import React from 'react';


export interface MenuItem {
  name: string;
  description: string;
  price: number;
  mediaSrc: string;
  mediaType?: 'image' | 'video';
}

interface CardMenyProps {
  menuItem: MenuItem;
}

const CardMeny2: React.FC<CardMenyProps> = ({ menuItem }) => {
  const { name, description, price, mediaSrc, mediaType = 'image' } = menuItem;

  return (
    <div className='group w-full md:w-1/2 lg:w-1/3 p-2'>
      <div className="card relative bg-white rounded-lg shadow-md overflow-hidden group-hover:bg-gray-200 transition-all duration-300 h-full flex flex-col group-hover:scale-105 transform-gpu">
        {mediaType === 'image' ? (
          <Image src={mediaSrc} alt={name} className="  object-cover object-center rounded-lg" fill/>
        ) : (
          <video src={mediaSrc}  className="w-full h-full object-cover object-center rounded-lg "  autoPlay loop muted playsInline  />
        )}
        <div className="card-body absolute bottom-0 left-0  z-10">
          <h3 className="card-title text-xl font-semibold mb-2 z-20">{name}</h3>
          <p className="text-white z-10">{description}</p>
          <div className="bg-black bg-opacity-0 group-hover:bg-opacity-80 w-full h-full absolute top-0 left-0 z-0 transition-opacity duration-300"></div>
           <div className="group-hover:bg-green-500 absolute top-0 right-0 bg-transparent text-white px-2 py-1 text-sm font-bold rounded-bl-md transition-all duration-300 z-20">
          {price} SEK
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default CardMeny2;
