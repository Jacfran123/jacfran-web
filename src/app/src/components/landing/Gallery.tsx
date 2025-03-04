"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { GALLERY } from "../../constants/mocks";
import { useTranslation } from "react-i18next";
import type { Params } from "@/app/types/types";

export interface GalleryProps extends Params {}

export default function Gallery(props: GalleryProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full mx-auto overflow-hidden gallery-container bg-[#101115] pb-[120px] md:pb-16">
      <div className="flex items-center justify-center pt-[80px] md:pt-16">
        <div className="w-[556px] text-center">
          <h2 className="font-neueRegular text-[clamp(34px,3vw,60px)] text-textColor-secondary">
            {t("Gallery.title")}
          </h2>
          <p className="font-robotoBold text-textColor-secondary text-md">
            {t("Gallery.description")}
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
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
      >
        {GALLERY.map((item, index) => (
          <SwiperSlide key={`${index} - gallery`}>
            <div
              className={`flex flex-col items-center justify-center rounded-lg text-4xl font-bold transition-transform duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "h-[460px] transform translate-y-[30px]"
                  : "h-[509px] transform translate-y-0"
              }`}
            >
              <div className="w-full h-full">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src={item.image}
                  alt={`gallery - logo - ${index}`}
                  loading="lazy"
                />
              </div>
              <div className="w-full">
                <p className="text-xl font-robotoBold text-textColor-secondary mt-4">
                  {t(item.title)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
