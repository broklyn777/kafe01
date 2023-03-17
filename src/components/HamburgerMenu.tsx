// components/HamburgerMenu.tsx
import React, { useState } from 'react'
import Link from 'next/link'

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="lg:hidden block focus:outline-none"
        onClick={toggleMenu}
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } z-50 absolute bg-brown-800 text-white p-4 mt-2 space-y-4 rounded-lg lg:static lg:bg-transparent  lg:space-y-0 lg:space-x-4 lg:p-0 lg:hidden`}
      >
        {/* <li>
          <Link legacyBehavior href="/tjanster">
            <a onClick={toggleMenu}>Tjänster</a>
          </Link>
        </li> */}
        <li>
          <Link legacyBehavior href="/meny">
            <a onClick={toggleMenu}>Meny</a>
          </Link>
        </li>
        {/* <li>
          <Link legacyBehavior href="/galleri">
            <a onClick={toggleMenu}>Galleri</a>
          </Link>
        </li> */}
        <li>
          <Link legacyBehavior href="/omoss">
            <a onClick={toggleMenu}>Om oss</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/kontakt">
            <a onClick={toggleMenu}>Kontakt</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default HamburgerMenu
