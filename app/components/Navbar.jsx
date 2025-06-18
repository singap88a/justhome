"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Links = [
    { name: 'Home', href: '#' },
    { name: 'Listings', href: '#' },
    { name: 'Members', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="absolute w-full z-[100] bg-transparent py-4 px-4 md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-6 md:h-8" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {Links.map((link, index) => (
            <Link 
              href={link.href} 
              key={index} 
              className="text-white hover:text-gray-300 px-4 py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info and Add Property */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          <span className="flex items-center">
            <FaPhoneAlt className="mr-2" /> +68 685 88666
          </span>
          <FaUser className='h-10 w-10 rounded-full flex items-center justify-center border p-2' />
          <button className="hover:bg-yellow-600 py-2 px-4 rounded-full border text-white border-white transition-colors">
            Add Property
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {Links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-white hover:text-gray-300 py-2 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 text-white pt-4 border-t border-gray-700">
              <span className="flex items-center">
                <FaPhoneAlt className="mr-2" /> +68 685 88666
              </span>
              <div className="flex items-center space-x-4">
                <FaUser className='h-10 w-10 rounded-full flex items-center justify-center border p-2' />
                <button className="hover:bg-yellow-600 py-2 px-4 rounded-full border text-white border-white transition-colors">
                  Add Property
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
 