// pages/todo.tsx
import React from 'react';
import Layout from '../src/components/Layout';

const Todo = () => {
  return (
   
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Att göra-lista</h1>
        <h2 className="text-2xl font-semibold mb-2">Komponenter:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Fot (Footer)</li>
          <li>Testimonials</li>
          <li>
            Kontaktformulär (kan användas både som en komponent på Kontaktsidan
            och som en separat sektion på andra sidor)
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Undersidor:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Priser</li>
          <li>Portfölj</li>
          <li>
            Blogg (med eventuella underkategorier och inläggssidor)
          </li>
          <li>Om oss (en mer detaljerad sida än den nuvarande omoss.tsx)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">
          Generella design- och optimeringsprinciper:
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Responsiv design</li>
          <li>Prestandaoptimering</li>
          <li>Sökoptimering (SEO)</li>
        </ul>
      </div>
   
  );
};

export default Todo;
