import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
            <p>
              Vårt kafé
               <br />
              Adress: Exempelgatan 1, 123 45 Staden
              <br />
              Telefon: <a href="tel:+46701234567" className="text-brown-300 hover:text-brown-500">070 123 45 67</a>
              <br />
              E-post: <a href="mailto:info@kafeetsnamn.se" className="text-brown-300 hover:text-brown-500">info@kafeetsnamn.se</a>
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link legacyBehavior  href="/meny"><a className="text-brown-300 hover:text-brown-500">Meny</a></Link>
              </li>
              <li>
                <Link legacyBehavior  href="/omoss"><a className="text-brown-300 hover:text-brown-500">Om oss</a></Link>
              </li>
              <li>
                <Link legacyBehavior  href="/kontakt"><a className="text-brown-300 hover:text-brown-500">Kontakt</a></Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-brown-300 hover:text-brown-500">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-brown-300 hover:text-brown-500">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-brown-300 hover:text-brown-500">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-brown-300 hover:text-brown-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Vårt kafé. Alla rättigheter förbehållna.
</p>
</div>
</div>
</footer>
);
};

export default Footer;
