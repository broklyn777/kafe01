// components/card-meny.tsx
import React from "react";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  mediaSrc: string;
  mediaType: "image" | "video";
}

interface CardMenyProps {
  menuItem: MenuItem;
}

const CardMeny: React.FC<CardMenyProps> = ({ menuItem }) => {
  return (
    <div className="group w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden group-hover:bg-gray-200 transition-all duration-300 h-full flex flex-col">
        {menuItem.mediaType === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={menuItem.mediaSrc}
            alt={menuItem.name}
            className="w-full h-48 object-cover object-center rounded-lg"
          />
        ) : (
          <video
            src={menuItem.mediaSrc}
            className="w-full h-48 object-cover object-center rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{menuItem.name}</h3>
          <p className="text-gray-700 flex-grow">{menuItem.description}</p>
        </div>
        <div className="group-hover:bg-green-500 absolute top-0 right-0 bg-transparent text-white px-2 py-1 text-sm font-bold rounded-bl-md transition-all duration-300">
          {menuItem.price} SEK
        </div>
      </div>
    </div>
  );
};

export default CardMeny;
