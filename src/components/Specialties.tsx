/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Specialties = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold mb-8 text-center">Våra specialiteter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/img/cafe03.jpg"
            alt="Latte"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Latte</h3>
          <p className="text-gray-600">Vår krämiga latte är gjord med noga utvalda bönor och ångad mjölk för att ge en mild och välbalanserad smak.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
           
                  src="/img/choklad-tarta.jpg"
            alt="Croissant"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Croissant</h3>
          <p className="text-gray-600">Våra krispiga och luftiga croissanter bakas dagligen på plats och är fyllda med högkvalitativa ingredienser för en utsökt smakupplevelse.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/img/cafe04.jpeg"
            alt="Cappuccino"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Cappuccino</h3>
          <p className="text-gray-600">Vår klassiska cappuccino kombinerar intensiteten i espresson med den krämiga konsistensen av ångad mjölk och en perfekt mjölkskum för att göra varje kopp till en njutning.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Specialties;
