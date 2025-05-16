"use client";

import type React from "react";

import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HOME_TITLE } from "@/app/src/constants/mocks";
import type { Params } from "@/app/types/types";
import type { MutableRefObject } from "react";

export interface SwiperTextProps extends Params {
  readonly RefSwiper: React.RefObject<any>;
  readonly titleRefs: MutableRefObject<(HTMLHeadingElement | null)[]>;
  readonly subtitleRefs: MutableRefObject<(HTMLHeadingElement | null)[]>;
}

export default function SwiperText(props: SwiperTextProps) {
  const { lng, RefSwiper, titleRefs, subtitleRefs } = props;
  const { t } = useTranslation(lng);

  return (
    <>
      <Swiper
        ref={RefSwiper}
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-swiper-pagination",
        }}
        loop={true}
        className="hero-swiper"
        style={
          {
            "--swiper-pagination-color": "#1c9950",
            "--swiper-pagination-bullet-inactive-color": "#9C9C9C",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "13px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as React.CSSProperties
        }
        navigation={{
          nextEl: ".hero-swiper-button-next",
        }}
      >
        {HOME_TITLE.map(({ title, subtitleGreen, subtitleWhite }, index) => (
          <SwiperSlide key={`${title} - ${subtitleGreen}`}>
            <h1
              ref={(el) => {
                titleRefs.current[index] = el;
                return undefined;
              }}
              className="text-[clamp(44px,7vw,75px)] leading-[clamp(46px,7vw,70px)] font-neueRegular uppercase text-textColor-secondary"
            >
              {t(title)}
            </h1>
            <h2
              ref={(el) => {
                subtitleRefs.current[index] = el;
                return undefined;
              }}
              className="font-neueRegular text-bg-secondary text-[clamp(16px,3vw,30px)]"
            >
              {t(subtitleGreen)}{" "}
              <span className="text-textColor-secondary">
                {t(subtitleWhite)}
              </span>
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
