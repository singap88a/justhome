'use client';

import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default function Customers() {
  const companyLogos = [
    { src: "/logo.png", alt: "Amazon" },
    { src: "/logo.png", alt: "AMD" },
    { src: "/logo.png", alt: "Cisco" },
    { src: "/logo.png", alt: "Dropcam" },
    { src: "/logo.png", alt: "Logitech" },
    { src: "/logo.png", alt: "Spotify" },
  ];

  const testimonials = [
    {
      name: "Cameron Williamson",
      title: "Designer",
      image: "/customers.png",
      feedback: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    },
    {
      name: "Jane Doe",
      title: "Architect",
      image: "/customers.png",
      feedback: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    },
    {
      name: "John Smith",
      title: "Engineer",
      image: "/customers.png",
      feedback: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    },
  ];

  const swiperTestimonialRef = useRef(null);

  const handlePrevTestimonial = useCallback(() => {
    console.log('Previous button clicked!');
    swiperTestimonialRef.current?.slidePrev();
  }, []);

  const handleNextTestimonial = useCallback(() => {
    console.log('Next button clicked!');
    swiperTestimonialRef.current?.slideNext();
  }, []);

  return (
    <section className="px-4 py-8 text-white bg-black sm:px-6 md:px-8 md:py-12 lg:py-16">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 mx-auto md:gap-8 lg:gap-12 lg:flex-row">
        {/* Left Section: Customer Feedback Stats */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">What our customers are saying us?</h2>
          <div className="flex justify-center gap-6 mb-6 md:gap-8 lg:gap-12 md:mb-8 lg:justify-start">
            <div>
              <p className="text-xl font-bold md:text-2xl lg:text-3xl">10m+</p>
              <p className="text-xs text-gray-400 md:text-sm lg:text-base">Happy People</p>
            </div>
            <div>
              <p className="text-xl font-bold md:text-2xl lg:text-3xl">4.88</p>
              <p className="text-xs text-gray-400 md:text-sm lg:text-base">Overall rating</p>
              <div className="flex justify-center mt-2 lg:justify-start">
                {/* Star icons */}
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Testimonial Carousel */}
        <div className="relative w-full lg:w-1/2">
          <Swiper
            onSwiper={(swiper) => {
              swiperTestimonialRef.current = swiper;
              console.log('Swiper instance set:', swiperTestimonialRef.current);
            }}
            modules={[]}
            slidesPerView={1}
            loop={true}
            className="mySwiperTestimonials"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1C1C1C] p-4 md:p-6 lg:p-8 rounded-lg shadow-lg relative h-full flex flex-col justify-between">
                  <div className="flex items-center mb-3 md:mb-4 lg:mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 mr-2 rounded-full md:mr-3 lg:mr-4 md:w-12 md:h-12"
                    />
                    <div>
                      <p className="text-sm font-bold md:text-base lg:text-lg">{testimonial.name}</p>
                      <p className="text-xs text-gray-400 md:text-sm lg:text-base">{testimonial.title}</p>
                    </div>
                    <span className="absolute text-3xl text-yellow-500 md:text-4xl lg:text-6xl top-2 md:top-4 lg:top-8 right-2 md:right-4 lg:right-8 opacity-20">❝</span>
                  </div>
                  <p className="flex-grow mb-3 text-xs leading-relaxed text-gray-300 md:mb-4 lg:mb-6 md:text-sm lg:text-base">
                    {testimonial.feedback}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="z-10 flex justify-end w-full gap-2 mt-4 md:gap-3 lg:gap-4 md:mt-6 lg:mt-0 lg:absolute lg:bottom-4 md:lg:bottom-6 lg:right-4 md:lg:right-6 lg:w-auto">
            <button onClick={handlePrevTestimonial} className="p-1.5 md:p-2 lg:p-3 transition border border-gray-700 rounded-full hover:bg-gray-800 cursor-pointer">
              <FaArrowLeft className="text-xs text-white md:text-sm lg:text-base" />
            </button>
            <button onClick={handleNextTestimonial} className="p-1.5 md:p-2 lg:p-3 transition border border-gray-700 rounded-full hover:bg-gray-800 cursor-pointer">
              <FaArrowRight className="text-xs text-white md:text-sm lg:text-base" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-6xl mx-auto mt-8 text-center md:mt-12 lg:mt-16">
        <h3 className="mb-4 text-sm text-gray-400 md:mb-6 lg:mb-8 md:text-base lg:text-lg">Thousands of world&apos;s leading companies trust Space</h3>
        {/* Desktop and larger screens: Grid layout */}
        <div className="items-center hidden grid-cols-2 gap-4 md:gap-6 md:grid md:grid-cols-3 lg:grid-cols-6 justify-items-center">
          {companyLogos.map((logo, index) => (
            <Image key={index} src={logo.src} alt={logo.alt} width={60} height={24} className="transition-all duration-300 filter grayscale hover:grayscale-0" />
          ))}
        </div>

        {/* Mobile and small screens: Swiper Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            {companyLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Image src={logo.src} alt={logo.alt} width={60} height={24} className="mx-auto transition-all duration-300 filter grayscale hover:grayscale-0" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
