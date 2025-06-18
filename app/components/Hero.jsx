import React from 'react';
import { FaArrowRight, FaSearch, FaFilter } from 'react-icons/fa';
import hero from "../../public/hero.png"
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(/hero.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center text-white">
        {/* Property Details */}
        <div className="mb-4 text-base md:text-lg">
          5 Beds _ 2 Baths _ 180 sqft
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-7xl">
          Office Space at<br />Northwest
        </h1>

        {/* Price */}
        <p className="mb-8 text-2xl md:text-3xl">
          $250<span className="text-lg md:text-xl">/month</span>
        </p>

        {/* View Details Button */}
        <button className="flex items-center px-6 py-2 space-x-2 text-sm text-black bg-yellow-500 rounded-md hover:bg-yellow-600 md:py-3 md:px-8 md:text-base">
          <span>View Details</span>
          <FaArrowRight />
        </button>

        {/* Search Bar */}
        <div className="absolute bottom-0 flex justify-center w-full pb-4 md:pb-8">
          <div className="grid items-end w-full max-w-4xl grid-cols-1 gap-4 p-4 mx-4 bg-gray-800 rounded-lg shadow-lg bg-opacity-80 md:p-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col">
              <label htmlFor="keyword" className="mb-1 text-sm text-gray-400">Keyword</label>
              <input
                type="text"
                id="keyword"
                placeholder="Enter Keyword"
                className="p-2 text-sm text-white bg-gray-700 rounded-md md:p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:text-base"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="status" className="mb-1 text-sm text-gray-400">Status</label>
              <select
                id="status"
                className="p-2 text-sm text-white bg-gray-700 rounded-md md:p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:text-base"
              >
                <option>All Status</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="type" className="mb-1 text-sm text-gray-400">Type</label>
              <select
                id="type"
                className="p-2 text-sm text-white bg-gray-700 rounded-md md:p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:text-base"
              >
                <option>All Type</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center justify-center flex-1 p-2 space-x-2 text-sm text-white bg-gray-600 rounded-md hover:bg-gray-700 md:p-3 md:text-base">
                <FaFilter />
                <span>Filter</span>
              </button>
              <button className="flex items-center justify-center flex-1 p-2 space-x-2 text-sm text-black bg-yellow-500 rounded-md hover:bg-yellow-600 md:p-3 md:text-base">
                <FaSearch />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
