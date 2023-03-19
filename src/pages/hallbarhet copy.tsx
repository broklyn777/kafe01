// pages/sustainability.tsx
import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';

const SustainabilityPage = () => {
  const videoId = 'lCra8jUrlUQ';
  const startTime = 10; // Starttid i sekunder
  const endTime = 20; // Sluttid i sekunder

  return (
    <>
      <section className="relative h-screen text-white overflow-hidden">
        <iframe
          className="absolute z-10 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}&autoplay=1&mute=1&loop=1&playlist=${videoId}&modestbranding=1&controls=0`}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <div className="z-20 relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Hållbarhet på Kaféet</h1>
            <p className="text-2xl">Vi är engagerade i att göra vår verksamhet så miljövänlig som möjligt</p>
          </div>
        </div>
      </section>

    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">Hållbara ingredienser</h2>
          <p className="text-2xl">Vi är stolta över att använda lokala och ekologiska råvaror i våra produkter. Genom att stödja lokala bönder och producenter minskar vi vår miljöpåverkan och bidrar till en hållbar livsmedelskedja.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">Återvinningsbart och komposterbart förpackningsmaterial</h2>
          <p className="text-2xl">Vi strävar efter att använda återvinningsbara eller komposterbara förpackningar för att minimera avfallet som genereras av vår verksamhet. Vi uppmuntrar våra kunder att återvinna eller kompostera våra förpackningar när det är möjligt.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">Energibesparing</h2>
          <p className="text-2xl">Vi är medvetna om vår energianvändning och arbetar kontinuerligt med att minska vår energiförbrukning genom att använda energisnåla apparater och belysning samt genom att optimera vår användning av värme och kyla.</p>
        </div>

        <div className="text-center">
          <Link legacyBehavior href="/">
            <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded">
              Tillbaka till startsidan
            </a>
          </Link>
        </div>
      </div>
    </section>
  </>
  )
};


export default SustainabilityPage;
