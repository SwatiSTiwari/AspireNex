'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {ButtonLink} from '../Hero/Scroller';
// import { FaDiscord } from 'react-icons/fa';
import { FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
    <header className={`fixed w-full bg-transparent z-50 mnhdr h-auto transition-all ${scrolling ? 'blur-background' : ''} ${mobileMenuOpen ? 'h-24 blur-background' : ''}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-800 text-white">
          Quiz-app
        </Link>
        <div className="hidden md:flex space-x-6">
          <ButtonLink className="text-lg font-medium text-gray-800 text-white hover:text-gray-300" buttonText='Home' />
          <ButtonLink className="text-lg font-medium text-gray-800 text-white hover:text-gray-300" buttonText='playgame'  />
                  </div>
        <div className="flex space-x-6">
          
              <Link href="https://github.com/SwatiSTiwari" target='_blank'>
                <FaGithub size={36} width={98} height={46}/>
              </Link>
              <Link href="https://www.linkedin.com/in/swati-tiwari-a02b2a237/" target='_blank'>
                <FaLinkedin size={36}/>
              </Link>
              <Link href="https://x.com/ThisIsSwati" target='_blank'>
                <FaTwitter size={36}/>
              </Link>
            </div>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;