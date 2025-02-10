"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Gallery() {
  const slides = [
    { id: 1, color: "#1E1E1E", title: "Interior luxury" },
    { id: 2, color: "#D71920", title: "Headlight polish" },
    { id: 3, color: "#009F5D", title: "Leather care" },
    { id: 4, color: "#0057B8", title: "Paint protection" },
    { id: 5, color: "#F2A900", title: "Wheel cleaning" },
  ];

  return (
    <section className="bg-[#101115] py-[80px]">
      <div className="w-full bg-bg-secondary flex items-center justify-center">
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

      <div className="pt-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor
          loop
          navigation
          className="w-full max-w-[1366px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div
                className="flex items-center justify-center text-white text-lg font-bold h-[509px]"
                style={{ backgroundColor: slide.color }}
              >
                <span>{slide.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
