/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import React from 'react';

const MenuPage = () => {
  return (
    <>
      <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(/img/cafe03.jpg)' }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Vår meny</h1>
            <p className="text-2xl">Utforska våra utsökta drycker och bakverk</p>
          </div>
        </div>
      </section>

{/* ------------------------------Meny  här */}





      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-8 text-center">Kaffe och drycker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden group-hover:bg-gray-200 transition-all duration-300">
    {/* Image or video */}
    <img src="/img/cafe03.jpg" alt="Coffee 1" className="w-full h-48 object-cover object-center rounded-lg" />
    {/* Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Espresso</h3>
      <p className="text-gray-700">En intensiv och smakrik espresso, gjord på noga utvalda kaffebönor från de bästa kaffeodlingarna i världen.</p>
      {/* Price */}
      <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-sm font-bold rounded-bl-md">
        $3.50
      </div>
    </div>
  </div>
</div>

{/* --------- goood------- */}
<div className="group">
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden group-hover:bg-gray-200 transition-all duration-300 transform group-hover:scale-105">
    {/* Image or video */}
    <img src="/img/cafe01.jpg" alt="Coffee 1" className="w-full h-48 object-cover object-center rounded-lg" />
    {/* Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Espresso</h3>
      <p className="text-gray-700">En intensiv och smakrik espresso, gjord på noga utvalda kaffebönor från de bästa kaffeodlingarna i världen.</p>
      {/* Price */}
      <div className="group-hover:bg-green-500 absolute top-0 right-0 bg-transparent text-white px-2 py-1 text-sm font-bold rounded-bl-md transition-all duration-300">
        $3.50
      </div>
    </div>
  </div>
</div>
<div className="group">
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden group-hover:bg-gray-200 transition-all duration-300 transform group-hover:scale-105">
    {/* Image or video */}
  <video src="/video/cafe-video04.mp4" className="w-full h-48 object-cover object-center rounded-lg" autoPlay loop muted playsInline>
</video>
    {/* Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Espresso</h3>
      <p className="text-gray-700">En intensiv och smakrik espresso, gjord på noga utvalda kaffebönor från de bästa kaffeodlingarna i världen.</p>
      {/* Price */}
      <div className="group-hover:bg-green-500 absolute top-0 right-0 bg-transparent text-white px-2 py-1 text-sm font-bold rounded-bl-md transition-all duration-300">
        $3.50
      </div>
    </div>
  </div>
</div>


  
            {/* Coffee item */}
<div className="card">
  <img src="/img/cafe04.jpeg" alt="Cappuccino" />
  <h3 className="text-xl font-semibold mb-2">Cappuccino</h3>
  <p>
    En klassisk italiensk kaffe gjord med espresso, ångad mjölk och ett lätt lager av mjölkskum. Perfekt för en mysig
    eftermiddag.
  </p>
  <div className="mt-4">
    <span className="text-xl font-bold">39 kr</span>
  </div>
</div>
{/* Coffee  item */}

<div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-h-96 flex flex-col justify-between transition-transform duration-200 ease-in-out hover:-translate-y-1 group">
 <img className="w-full h-48 object-cover object-center rounded-lg" src="/img/cafe04.jpeg" alt="Coffee 1" />
<div className=' group-hover:bg-gray-200 rounded-lg'>
  <h3 className="text-xl font-semibold mb-2">Cappuccino</h3>
  <p className=''>
    En klassisk italiensk kaffe gjord med espresso, ångad mjölk och ett lätt lager av mjölkskum. Perfekt för en mysig
    eftermiddag.
  </p>

  <div className="mt-4">
    <span className="text-xl font-bold transition-colors duration-200 ease-in-out  p-1 rounded">39 kr</span>
  </div>
    </div>
</div>

{/* Coffee video item */}
<div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-h-96 flex flex-col justify-between transition-transform duration-200 ease-in-out hover:-translate-y-1 group">
 <video src="/video/cafe-video02.mp4" className="w-full h-48 object-cover object-center rounded-lg" autoPlay loop muted playsInline>
</video>

  <h3 className="text-xl font-semibold mb-2">Cappuccino</h3>
  <p>
    En klassisk italiensk kaffe gjord med espresso, ångad mjölk och ett lätt lager av mjölkskum. Perfekt för en mysig
    eftermiddag.
  </p>
  <div className="mt-4">
    <span className="text-xl font-bold transition-colors duration-200 ease-in-out group-hover:bg-green-500 p-1 rounded">39 kr</span>
  </div>
</div>



          {/* Coffee item - Cappuccino */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Cappuccino</h3>
  <p>En klassisk cappuccino, gjord med en perfekt blandning av espresso, ångad mjölk och mjölkskum.</p>
</div>
{/* Coffee item */}
<div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-h-96 flex flex-col justify-between transition-transform duration-200 ease-in-out hover:-translate-y-1">
  <img className="w-full h-48 object-cover object-center rounded-lg" src="/img/cafe04.jpeg" alt="Coffee 1" />
  <h3 className="text-xl font-semibold mb-2">Cappuccino</h3>
  <p>
    En klassisk italiensk kaffe gjord med espresso, ångad mjölk och ett lätt lager av mjölkskum. Perfekt för en mysig
    eftermiddag.
  </p>
  <div className="mt-4">
    <span className="text-xl font-bold">39 kr</span>
  </div>
</div>

{/* Coffee item - Latte */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Latte</h3>
  <p>En krämig latte, gjord med en rik espresso och toppad med ångad mjölk för en len och mild smak.</p>
</div>{/* Dryck - Iskaffe */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Iskaffe</h3>
  <p>Ett uppfriskande iskaffe, gjort med en stark espresso och kall mjölk, serverad över is.</p>
</div>

{/* Dryck - Chai Latte */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Chai Latte</h3>
  <p>En varm och kryddig chai latte, gjord med en blandning av svart te, mjölk och exotiska kryddor.</p>
</div>

{/* Dryck - Grön Smoothie */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Grön Smoothie</h3>
  <p>En näringsrik grön smoothie gjord med färsk spenat, banan, äpple, ingefära och is.</p>
</div>

            {/* Add more items as needed */}
          </div>
          <h2 className="text-4xl font-semibold mt-16 mb-8 text-center">Bakverk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pastry item */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Chokladkaka</h3>
              <p>En läcker och saftig chokladkaka, gjord med mörk choklad och toppad med ett lager kakao.</p>
            </div>
            {/* Bakverk - Kanelbulle */}
<div className="bg-white p-6 rounded shadow transform hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-200 hover:border-yellow-500">
  <h3 className="text-xl font-semibold mb-4">Kanelbulle</h3>
  <p>En klassisk svensk kanelbulle, fylld med kanel och socker, toppad med pärlsocker.</p>
</div>

            {/* Bakverk - Kanelbulle */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Kanelbulle</h3>
  <p>En klassisk svensk kanelbulle, fylld med kanel och socker, toppad med pärlsocker.</p>
</div>
<div className="bg-white shadow-md rounded-md p-6 my-4">
  <Image className="w-full h-48 object-cover rounded-md mb-4" 
  src="/img/kanelbulle01.jpg" 
  width={200}
  height={100}
  alt="Bakverk 1" />
  <h3 className="text-xl font-semibold mb-2">Kardemummabulle</h3>
  <p>
    En klassisk svensk kanelbulle med en twist. Vår kardemummabulle är fylld med smör, socker och kardemumma, som ger den en
    unik och utsökt smak.
  </p>
  <div className="mt-4">
    <span className="text-xl font-bold">45 kr</span>
  </div>
</div>


{/* Bakverk - Prinsesstårta */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Prinsesstårta</h3>
  <p>Svensk prinsesstårta med ljusa lager av sockerkaka, vaniljkräm och grädde, täckt med marsipan.</p>
</div>

{/* Bakverk - Chokladboll */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Chokladboll</h3>
  <p>En traditionell chokladboll, gjord med kakao, socker, havregryn och kokosfett, rullad i kokosflingor.</p>
</div>

{/* Bakverk - Kardemummabulle */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Kardemummabulle</h3>
  <p>Ett saftigt bakverk smaksatt med kardemumma och fyllt med socker och smör, toppad med pärlsocker.</p>
</div>

{/* Bakverk - Kladdkaka */}
<div className="bg-white p-6 rounded shadow">
  <h3 className="text-xl font-semibold mb-4">Kladdkaka</h3>
  <p>En rik och kladdig chokladkaka, perfekt för chokladälskare och serverad med en klick grädde eller glass.</p>
</div>
            {/* Add more items as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
