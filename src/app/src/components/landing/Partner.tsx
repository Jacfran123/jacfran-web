"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Params } from "@/app/types/types";
import "swiper/css";
import { PARTNERS } from "../../constants/mocks";

export interface PartnersProps extends Params {}

export default function Partners(props: PartnersProps) {
  return (
    <div className="h-[109px] w-full bg-[#1EA356] mt-20 lg:mt-4 flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
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
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1366: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {PARTNERS.map((element, index) => (
          <SwiperSlide key={index}>
            <div className="h-[110px] flex items-center justify-center">
              <Image
                src={element.image}
                alt={element.alt || ""}
                width={element.width}
                height={element.height}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
