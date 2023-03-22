// components/Card-meny2.tsx bra med text över bild behöver dock ändra lite, z index mmm hela bilden måste täcka mm
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
      <div className="card">
        <div className="relative h-48 rounded-lg overflow-hidden">
          {mediaType === 'image' ? (
            <img src={mediaSrc} alt={name} className="w-full h-full object-cover object-center rounded-lg" />
          ) : (
            <video src={mediaSrc} className="w-full h-full object-cover object-center rounded-lg" autoPlay loop muted playsInline />
          )}
          <div className="card-body">
            <h3 className="card-title text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
        <div className="group-hover:bg-green-500 absolute top-0 right-0 bg-transparent text-white px-2 py-1 text-sm font-bold rounded-bl-md transition-all duration-300">
          {price} SEK
        </div>
      </div>
    </div>
  );
};

export default CardMeny2;
