
import Image from 'next/image'
import Link from 'next/link'

const Service: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Våra SEO-tjänster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Nyckelordsanalys</h3>
            <p>Vi hjälper dig att identifiera de bästa nyckelorden för din verksamhet, så att du kan ranka högre på sökmotorer och nå en större publik.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">On-page optimering</h3>
            <p>Vi analyserar och förbättrar din webbplats struktur, innehåll och metadata för att säkerställa att sökmotorer kan indexera och förstå din webbplats på bästa sätt.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Off-page optimering</h3>
            <p>Vi hjälper dig att bygga en stark bakgrundslänkprofil och öka din webbplats auktoritet genom att arbeta med kvalitetsinnehåll och partnerskap med andra relevanta webbplatser.</p>
          </div>
          {/* Lägg till fler tjänster efter behov */}
        </div>
      </div>
    </div>
  )
}

export default Service
