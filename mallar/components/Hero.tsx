// Lägg till dessa import-satser högst upp i din seo.tsx-fil
import Image from 'next/image'
import Link from 'next/link'

// Lägg till Hero-komponenten i din SEO-komponent, precis innan <div className="min-h-screen ...">
const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 to-blue-500 h-96">
      <div className="absolute inset-0 flex items-center justify-center z-10"> {/* Lägg till z-10 här */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Optimera din webbplats med våra SEO-tjänster</h1>
          <p className="mt-4 text-lg">Hjälp ditt företag att nå nya höjder med vår expertis inom sökmotoroptimering.</p>
          <div className="mt-6">
            <Link className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all" href="/kontakt">
             
                Kontakta oss
            
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
     
        {/* <Image
  src="/img/meditating-man.png"
  alt="SEO Hero Image"
  width={200} // Ange bildens bredd här
  height={300} // Ange bildens höjd här
  quality={50}
  priority={true}
/> */}

      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  )
}
export default Hero