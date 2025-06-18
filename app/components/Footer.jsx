'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#fcfcfc] py-4 px-2 md:px-0 border-t border-gray-100 relative">
      <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-7xl md:flex-row">
         <div className="w-full text-xs text-center text-gray-700 md:text-left md:w-auto">
          Copyright © 2024. JustHome
        </div>
         <div className="flex items-center justify-center w-full gap-2 md:w-auto">
          <img src="/logo_footer.png" alt="" className='w-[150px]' />
        </div>
         <div className="flex items-center justify-center w-full gap-4 md:w-auto md:justify-end">
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-blue-600"><FaFacebookF size={16} /></a>
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-blue-400"><FaTwitter size={16} /></a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-pink-500"><FaInstagram size={16} /></a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-blue-700"><FaLinkedinIn size={16} /></a>
        </div>
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:static md:ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-white shadow-lg hover:bg-gray-800 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
