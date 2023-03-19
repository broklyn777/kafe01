import { useState } from 'react';

import { google } from 'googleapis';
import { getOAuth2Token } from './api/googleAuth';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const accessToken = await getOAuth2Token();
      
      const gmail = google.gmail({ version: 'v1', auth: accessToken });
      const emailContent = [
        `From: ${email}`,
        'To: your-email@example.com',
        'Content-Type: text/plain; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: Kontaktformulär - ${name}`,
        '',
        `Namn: ${name}`,
        `E-post: ${email}`,
        '',
        `Meddelande:`,
        message
      ].join('\n');

      const response = await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: Buffer.from(emailContent).toString('base64').replace(/\+/g, '-').replace(/\//g, '_')
        }
      });

      if (response.status === 200) {
        // Visa meddelande om att e-postmeddelandet har skickats framgångsrikt
      } else {
        // Hantera fel, t.ex. visa ett felmeddelande för användaren
      }
    } catch (error) {
      // Hantera fel, t.ex. visa ett felmeddelande för användaren
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-semibold mb-8">Kontakt</h1>

      <form onSubmit={handleSubmit}>
        {/* Din befintliga kod för formuläret */}
      </form>
    </div>
  );
};

export default ContactPage;
