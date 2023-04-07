import Image from "next/image";
import React from "react";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  mediaSrc: string;
  mediaType?: "image" | "video";
}

interface CardMenyProps {
  menuItem: MenuItem;
}

const CardMeny2: React.FC<CardMenyProps> = ({ menuItem }) => {
  const { name, description, price, mediaSrc, mediaType = "image" } = menuItem;

  return (
    <div className="group w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
      <div className="card relative bg-white rounded-lg shadow-md overflow-hidden group-hover:bg-gray-200 transition-all  h-full flex flex-col group-hover:scale-105 transform-gpu lg:h-48 md:h-48">
        {mediaType === "image" ? (
          <Image
            width={500}
            height={500}
            src={mediaSrc}
            alt={name}
            className="object-cover object-center rounded-lg h-60 md:h-60 lg:h-96"
          />
        ) : (
          <video
            src={mediaSrc}
            className="object-cover object-center rounded-lg h-60 md:h-60 lg:h-96"
            autoPlay
            loop
            muted
            playsInline
            style={{ zIndex: -1 }}
          />
        )}
        <div className="card-body absolute bottom-0 left-0 z-20">
          <h3 className="card-title text-xl font-semibold mb-2 z-20 text-white">
            {name}
          </h3>
          <p className="text-white z-40">{description}</p>
          <div className="pb-4 pt-2">
            <div className="group-hover:bg-green-500 absolute bg-transparent text-white px-2 py-1  rounded-md transition-all duration-300 z-20">
              {price} SEK
            </div>
          </div>
          <div className="bg-black bg-opacity-0 group-hover:bg-opacity-80  w-full h-full  top-0 left-0 z-0 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CardMeny2;
