// components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    setStatus(data.message);

    if (response.ok) {
      form.reset();
    }
  };

  return (
    <>
      {status && <p className="text-center text-green-500 mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8 max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2">
            Namn:
          </label>
          <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2">
            E-post:
          </label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2">
            Meddelande:
          </label>
          <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Skicka
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
