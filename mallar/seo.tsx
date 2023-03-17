// pages/seo.tsx
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Service from '@/components/Service'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const SEO: React.FC = () => {
  return (
    <>
      <Head>
        <title>SEO-tjänster | Din webbyrå</title>
        <meta name="description" content="Professionella SEO-tjänster från din webbyrå för att förbättra din webbplats synlighet på sökmotorer." />
      </Head>
<Hero/>
<Service/>
      <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-2xl font-bold text-center mb-4">SEO-tjänster</h1>
            <p className="text-justify mb-4">
              Vår webbyrå erbjuder professionella SEO-tjänster som hjälper dig att förbättra din webbplats synlighet på sökmotorer och öka din organiska trafik. Vi arbetar med både on-page och off-page SEO för att säkerställa att din webbplats är optimerad för att nå högre placeringar i sökresultaten.
            </p>
            <p className="text-justify mb-4">
              Vi utför grundlig sökordsanalys, konkurrentanalys, teknisk SEO-analys och innehållsoptimering för att säkerställa att din webbplats är väl positionerad för att locka din målgrupp. Vårt team av SEO-experter arbetar kontinuerligt för att hålla sig uppdaterade om de senaste trenderna och bästa praxis inom SEO för att ge dig bästa möjliga resultat.
            </p>
            <p className="text-justify mb-4">
              Genom att anlita oss för dina SEO-behov kan du förvänta dig följande fördelar:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Ökad organisk trafik</li>
              <li>Förbättrad synlighet på sökmotorer</li>
              <li>Högre konverteringsfrekvenser</li>
              <li>Ökad ROI på din marknadsföringsbudget</li>
            </ul>
            <p className="text-justify">
              Kontakta oss idag för att ta reda på hur våra SEO-tjänster kan hjälpa din verksamhet att växa och nå nya höjder!
            </p>
          </div>
        </div>
      </div>
     
    </>
   
  )
}

export default SEO
