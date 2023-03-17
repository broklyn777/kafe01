
import React from 'react';
import Link from 'next/link';
import { FaBeer, FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
            <p>
              Bosse Karlsson
               <br />
              Adress: Smalavägen, 123 45 Åkersberga
              <br />
              Telefon: <a href="tel:+46707777777">070 777 77 77</a>
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
             <li className="mr-4">
              <Link href="/tjanster">Tjänster</Link>
            </li>
            <li className="mr-4">
              <Link href="/seo">SEO</Link>
            </li>
            <li className="mr-4">
              <Link href="/omoss">Om oss</Link>
            </li>
            <li className="mr-4">
              <Link href="/kontakt">Kontakt</Link>
            </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
         <div className="flex w-10 space-x-4">
  
  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
   <FaFacebook />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
     <FaTwitter />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
   <FaLinkedin />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
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
