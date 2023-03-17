import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../src/components/Navbar';

const Galleri = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const images = [
  
  '/img/web1.jpg',
  '/img/web2.jpg',
  '/img/web3.jpg',
  '/img/web1.jpg',
  '/img/web2.jpg',
  '/img/web3.jpg',
  // ...lägg till fler bildkällor här
];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
     
     
        <div className="bg-gradient-to-r from-green-400 to-blue-500">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white">
      Vårt galleri
    </h2>
    <p className="text-lg text-white mt-4 mb-8 px-4 sm:px-0 ">
      Välkommen till vårt galleri där vi stolt visar upp några av våra bästa webbdesignprojekt. Bläddra igenom vår samling av innovativa och moderna designlösningar som hjälper våra kunder att sticka ut på nätet.
    </p>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-64 w-full cursor-pointer"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Bild ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded "
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl h-auto">
            <Image
              src={selectedImage}
              alt="Förstorad bild"
              layout="intrinsic"
              width={900}
              height={600}
            />
          </div>
        </div>
      )}
  </div>


       
    </>
  );
};

export default Galleri;



