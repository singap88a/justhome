import React from 'react'
import Image from 'next/image'

export default function Appreciation() {
  return (
    <div className="flex flex-col items-center justify-between gap-20 px-4 py-10 bg-white md:px-20 lg:flex-row">
      <div className="p-4 lg:w-1/2">
        <h2 className="mb-4 text-4xl font-bold">We Use Real Estate to Show <br /> Our Appreciation of The World</h2>
        <p className="mb-8 text-gray-600">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.
        </p>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-4xl font-bold">$18M</p>
            <p className="text-gray-600">Owned From Properties Transactions</p>
          </div>
          <div>
            <p className="text-4xl font-bold">15K+</p>
            <p className="text-gray-600">Properties For Sell</p>
          </div>
          <div>
            <p className="text-4xl font-bold">26K+</p>
            <p className="text-gray-600">Properties For Buy</p>
          </div>
          <div>
            <p className="text-4xl font-bold">890</p>
            <p className="text-gray-600">Daily Completed Transactions.</p>
          </div>
        </div>
        <button className="flex items-center px-6 py-3 space-x-2 font-bold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 lg:w-1/2">
        <Image
          src="/Appreciation.png"
          alt="House"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
} 