import Link from 'next/link';


const AboutUsPage: React.FC = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: 'url(/img/cafe01.jpg)' }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Om oss</h1>
            <p className="text-2xl">Lär känna vår historia och vår passion för kaffe och bakverk</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8">Vår historia</h2>
          <p className="text-2xl mb-8">
            Vi startade vårt kafé för att dela vår passion för kaffe och bakverk med världen. Vi är stolta över
            att ha skapat en plats där människor kan samlas och njuta av varandras sällskap, samtidigt som de
            upplever de finaste smakerna vi har att erbjuda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8">Vår filosofi</h2>
          <p className="text-2xl mb-8">
            Vi tror att varje kopp kaffe och varje bakverk är en konstform. Vi lägger stor vikt vid att använda
            de bästa råvarorna och hållbara metoder för att skapa en upplevelse som är lika trevlig för dig som
            för vår planet.
          </p>
              <div className="text-center">
          <Link legacyBehavior href="/">
            <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded">
              Tillbaka till startsidan
            </a>
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
