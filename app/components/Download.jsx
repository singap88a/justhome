import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto md:px-20">
        <div className="flex flex-col items-center justify-between md:pl-8 rounded-[16] shadow-xl bg-[#1F4B43] md:flex-row  ">
          <div className="mb-8 text-center text-white md:text-left md:w-1/2 md:mb-0">
            <span className="inline-block px-4 py-2 mb-4 text-sm text-white bg-gray-500 bg-opacity-50 rounded-full">
              Start today
            </span>
            <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Download the App
            </h2>
            <p className="mb-8 text-lg md:text-xl">
              Take classes on the go with the just home app. Stream or download
              to watch on the plane, the subway, or wherever you learn best.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-800 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-200"
              >
                <span className="pr-4 mr-4 border-r border-gray-300">
                  <FaApple size={24} className="text-[#1F4B43]" />
                </span>
                <span className="text-[#1F4B43]">Download on the Apple Store</span>
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-800 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-200"
              >
                <span className="pr-4 mr-4 border-r border-gray-300">
                  <FaGooglePlay size={24} className="text-[#1F4B43]" />
                </span>
                <span className="text-[#1F4B43]">Get in on Google Play</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <Image
              src="/Download.png"
              alt="Download App"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
