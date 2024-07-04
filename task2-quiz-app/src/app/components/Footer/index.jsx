"use client";
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import {ButtonLink} from '../Hero/Scroller'

const Footer = () => {
  return (
    
    <div>
      <hr className='border-gray border-opacity-100 border-t-2'/>
    <footer className="text-white py-6 mt-40 footer-b">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-2xl font-semibold mb-6 md:mb-0">
            Quiz-app
          </div>
          <div className="mb-6 md:mb-0 md:flex md:space-x-12">
            <ul className="space-y-4">
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText='Home' elementId='hero'/>
              </li>
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText='Previous Work' elementId='previouswork'/>
              </li>
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText='Contact' elementId='contact'/>
              </li>
            </ul>
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
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer
