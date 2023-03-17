import Link from 'next/link';
import Specialties from '../components/Specialties';

const HomePage = () => (
  <>
    <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(/img/cafe02.jpg' }}>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Välkommen till vårt kafé</h1>
          <p className="text-2xl">Upptäck våra utsökta drycker och bakverk i en mysig atmosfär</p>
        </div>
      </div>
    </section>

    <Specialties />

    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">Boka ett bord idag</h2>
        <p className="text-2xl mb-8">Upplev vårt kafé på plats och njut av en unik atmosfär och smakupplevelse</p>

         <Link legacyBehavior href="/kontakt">
        <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded">
          Boka nu
        </a>
      </Link>
      </div>
    </section>
  </>
);

export default HomePage;
