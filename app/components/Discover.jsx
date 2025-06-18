import React from 'react'
import Image from 'next/image'

export default function Discover() {
  return (
    <div className="relative w-full bg-center bg-cover h-[500px]" style={{ backgroundImage: "url('/Discover.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-7xl">Discover a place you'll love to live</h1>
        <p className="max-w-2xl mb-8 text-lg md:text-xl">Pellentesque egestas elementum ege. Velit nunc egestas ut morbi. Leo diam diam</p>
        <button className="flex items-center px-6 py-3 space-x-2 font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700">
          <span>View Properties</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
