import Layout from '../components/Layout';

const ContactPage = () => (

    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-10">Kontakt</h1>
      {/* Lägg till kod här för att visa kontaktinformation för kaféet, inklusive adress, telefonnummer, e-postadress och öppettider. Lägg även till ett kontaktformulär så att besökare enkelt kan skicka frågor eller bokningsförfrågningar */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <h2 className="text-2xl font-bold mb-4">Kontaktinformation</h2>
      <p>
        <strong>Adress:</strong><br />
        Kafé Exempelgatan 123<br />
        12345 Stockholm<br />
        Sverige
      </p>
      <p className="mt-4">
        <strong>Telefon:</strong> +46 123 456 789
      </p>
      <p className="mt-4">
        <strong>E-post:</strong> info@kafeexempel.se
      </p>
      <p className="mt-4">
        <strong>Öppettider:</strong><br />
        Måndag - Fredag: 08:00 - 18:00<br />
        Lördag - Söndag: 10:00 - 16:00
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Kontaktformulär</h2>
      {/* Lägg till ett kontaktformulär här, med fält för namn, e-post, ämne och meddelande */}
    </div>
  </div>
</div>

);
export default ContactPage;
