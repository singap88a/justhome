"use client";
import React, { useState } from "react";
import { FaBed, FaBath, FaVectorSquare, FaMapMarkerAlt } from "react-icons/fa";

const Featured_Properties = () => {
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const properties = [
    {
      id: 1,
      type: "Villa",
      status: "For Sale",
      featured: true,
      image: "/properties/Featured_1.png",
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      beds: 4,
      baths: 1,
      sqft: 400,
      price: "$395,000",
    },
    {
      id: 2,
      type: "Apartment",
      status: "For Sale",
      featured: false,
      image: "/properties/Featured_2.png",
      title: "Skyper Pool Apartment",
      address: "1020 Bloomingdale Ave",
      beds: 4,
      baths: 2,
      sqft: 450,
      price: "$280,000",
    },
    {
      id: 3,
      type: "Villa",
      status: "For Rent",
      featured: false,
      image: "/properties/Featured_3.png",
      title: "North Dillard Street",
      address: "4330 Bell Shoals Rd",
      beds: 4,
      baths: 2,
      sqft: 400,
      price: "$250/month",
    },
    {
      id: 4,
      type: "Penthouse",
      status: "For Sale",
      featured: true,
      image: "/properties/Featured_4.png",
      title: "Eaton Garth Penthouse",
      address: "7722 18th Ave, Brooklyn",
      beds: 4,
      baths: 2,
      sqft: 450,
      price: "$180,000",
    },
    {
      id: 5,
      type: "Apartment",
      status: "For Rent",
      featured: true,
      image: "/properties/Featured_5.png",
      title: "New Apartment Nice View",
      address: "42 Avenue O, Brooklyn",
      beds: 4,
      baths: 1,
      sqft: 460,
      price: "$850/month",
    },
    {
      id: 6,
      type: "Apartment",
      status: "For Sale",
      featured: true,
      image: "/properties/Featured_6.png",
      title: "Diamond Manor Apartment",
      address: "7802 20th Ave, Brooklyn",
      beds: 4,
      baths: 2,
      sqft: 500,
      price: "$259,000",
    },
  ];

  const filteredProperties =
    activeFilter === "All Properties"
      ? properties
      : properties.filter((property) => property.type === activeFilter);

  return (
    <section className="py-8 bg-white md:py-16">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          Featured Properties
        </h2>
        <p className="mb-8 text-sm text-gray-600 md:mb-12 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 md:gap-4">
          {["All Properties", "Villa", "Apartment", "Office"].map((filter) => (
            <button
              key={filter}
              className={`px-4 md:px-6 py-1.5 rounded-full text-sm md:text-lg font-semibold ${
                activeFilter === filter
                  ? "bg-[#FFF8F6] text-black border border-[#1F4B43] hover:bg-[#FFF8F6]"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="relative overflow-hidden bg-white rounded-lg shadow-lg h-80 md:h-96"
            >
              <img
                src={property.image}
                alt={property.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-opacity-40"></div>
              <div className="relative z-10 flex flex-col justify-between h-full p-4 md:p-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                        property.status === "For Sale"
                          ? "bg-[#1F4B43] text-white"
                          : "bg-[#1F4B43] text-white"
                      }`}
                    >
                      {property.status}
                    </span>
                    {property.featured && (
                      <span className="px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full md:px-3 md:text-sm">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="">
                    <h3 className="mb-2 text-lg font-semibold text-white md:text-xl text-start">
                      {property.title}
                    </h3>
                    <p className="flex items-center text-sm text-gray-200 md:text-base">
                      <FaMapMarkerAlt className="mr-2" /> {property.address}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
                    <div className="flex items-center text-sm text-gray-200 md:text-base">
                      <div className="flex items-center mr-4">
                        <FaBed className="mr-1" /> {property.beds}
                      </div>
                      <div className="flex items-center mr-4">
                        <FaBath className="mr-1" /> {property.baths}
                      </div>
                      <div className="flex items-center">
                        <FaVectorSquare className="mr-1" /> {property.sqft}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white md:text-2xl">
                      {property.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <button className="flex items-center justify-center px-4 py-2 mx-auto text-base font-semibold bg-yellow-500 rounded-full md:px-6 md:text-lg hover:bg-yellow-600">
            See All Listing <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured_Properties;
