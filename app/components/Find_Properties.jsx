'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const cities = [
  { name: 'New York', properties: 8, image: '/properties/Properties_1.png' },
  { name: 'Chicago', properties: 2, image: '/properties/Properties_2.png' },
  { name: 'Los Angeles', properties: 1, image: '/properties/Properties_3.png' },
  { name: 'Miami', properties: 2, image: '/properties/Properties_4.png' },
  { name: 'Florida', properties: 3, image: '/properties/Properties_5.png' },
];

const CityCard = ({ city }) => (
  <div className="relative flex-shrink-0 w-full h-64 overflow-hidden shadow-lg rounded-xl">
    <img src={city.image} alt={city.name} className="object-cover w-full h-full"/>
    <div className="absolute flex flex-col justify-end p-4 bg-opacity-40 top-2">
      <h3 className="text-xl font-semibold text-white">{city.name}</h3>
      <p className="text-sm text-white">{city.properties} Properties</p>
    </div>
  </div>
);

export default function Find_Properties() {
  return (
    <section className="px-4 py-16 bg-white md:px-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center">Find Properties in These Cities</h2>
        <p className="mb-12 text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-6 md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
          {cities.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
                475: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
          >
            {cities.map((city, index) => (
              <SwiperSlide key={index}>
                <CityCard city={city} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 