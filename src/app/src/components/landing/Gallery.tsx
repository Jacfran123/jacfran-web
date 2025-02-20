"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { GALLERY } from "../../constants/mocks";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full mx-auto overflow-hidden gallery-container bg-[#101115] pb-[120px] md:pb-16">
      <div className="flex items-center justify-center pt-[80px]">
        <div className="w-[556px] text-center">
          <h2 className="font-neueRegular text-[clamp(34px,3vw,60px)] text-textColor-secondary">
            The best service in bay area
          </h2>
          <p className="font-robotoBold text-textColor-secondary text-md">
            Protect your vehicle’s finish from road debris, scratches, and
            environmental damage with our premium Paint Protection
          </p>
        </div>
      </div>
      <Swiper
        className="mySwiper"
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={2.5}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {GALLERY.map((item, index) => (
          <SwiperSlide key={`${index} - gallery`}>
            <div
              className={`flex items-center justify-center text-4xl font-bold transition-transform duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "h-[460px] transform translate-y-[30px]"
                  : "h-[509px] transform translate-y-0"
              }`}
            >
              <Image
                className="object-cover"
                src={item}
                alt={`gallery - logo - ${index}`}
                loading="lazy"
                style={{ width: "100vw", height: "100%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
