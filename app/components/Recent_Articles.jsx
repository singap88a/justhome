'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Recent_Articles() {
  const articles = [
    {
      image: '/properties/Properties_1.png',
      type: 'Apartment',
      date: 'March 19, 2024',
      title: 'Housing Markets That Changed the Most This  ',
      link: '#',
    },
    {
      image: '/properties/Properties_2.png',
      type: 'Apartment',
      date: 'March 19, 2024',
      title: 'Read Unveils the Best Canadian Cities for Biking',
      link: '#',
    },
    {
      image: '/properties/Properties_3.png',
      type: 'Office',
      date: 'March 19, 2024',
      title: '10 Walkable Cities Where You Can Live Affordably',
      link: '#',
    },
    {
      image: '/properties/Properties_4.png',
      type: 'Shop',
      date: 'March 19, 2024',
      title: 'New Apartment Nice in the Best Canadian Cities',
      link: '#',
    },
  ];

  return (
    <section className="px-4 py-16 md:px-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center">Recent Articles & News</h2>
        <p className="mb-12 text-center text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden bg-white border border-gray-300 rounded-lg shadow">
                <img src={article.image} alt={article.title} className="object-cover w-full h-48" />
                <div className="p-6">
                  <div className="mb-2 text-sm text-gray-500">
                    {article.type} • {article.date}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">{article.title}</h3>
                  <a href={article.link} className="flex items-center text-black hover:underline">
                    Read More{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
