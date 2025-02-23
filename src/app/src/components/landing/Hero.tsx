"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Params } from "@/app/types/types";

const MyLazyVideoPlayer = dynamic(() => import("../common/Hero/VideoPlayer"));
const MyLazySwiperText = dynamic(() => import("../common/Hero/SwiperText"));

export interface HeroProps extends Params {}

export default function Hero(props: HeroProps) {
  const { lng } = props;

  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const subtitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    timeline.to(overlayRef.current, {
      opacity: 0,
      duration: 2.5,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = "none";
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;

    const handleSlideChange = () => {
      const activeIndex = swiperRef.current?.swiper.realIndex;
      if (titleRefs.current[activeIndex] && subtitleRefs.current[activeIndex]) {
        const tl = gsap.timeline({ delay: 0.6 });
        tl.fromTo(
          titleRefs.current[activeIndex],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.inOut" }
        ).fromTo(
          subtitleRefs.current[activeIndex],
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.inOut" }
        );
      }
    };

    swiperRef.current.swiper.on("slideChange", handleSlideChange);
    handleSlideChange();

    return () => {
      swiperRef.current?.swiper?.off("slideChange", handleSlideChange);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-section bg-gradient-to-t from-[#000000FF]/100 to-transparent relative h-screen flex items-end lg:h-[676px] overflow-hidden sm:!h-[425px]"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#000000FF] z-10"
        aria-hidden="true"
      />
      <MyLazyVideoPlayer />
      <div className="absolute flex justify-end w-full bottom-[120px] md:bottom-10">
        <div className="bg-green-gradient h-[357px] w-[30px] md:h-[390px] sm:!h-[280px]" />
      </div>
      <div className="container p-[40px_55px] mx-auto relative z-20 lg:p-8 sm:!p-5 ">
        <div className="relative">
          <div className="relative z-10">
            <MyLazySwiperText
              RefSwiper={swiperRef}
              titleRefs={titleRefs}
              subtitleRefs={subtitleRefs}
              lng={lng}
            />
            <div className="hero-swiper-button-prev" />
            <div className="hero-swiper-button-next" />
            <div className="hero-swiper-pagination" />
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#000000FF]/100 to-transparent h-[170px] w-full absolute bottom-1 left-0" />
      </div>
      <style jsx global>{`
        .hero-section .hero-swiper-pagination {
          position: relative;
          bottom: 0px !important;
          display: flex;
          justify-content: flex-end;
          right: -10px;
        }

        .hero-section .hero-swiper-pagination .swiper-pagination-bullet {
          background-color: #959595;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          display: inline-block;
          margin: 0 4px;
        }

        .hero-section .hero-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #1c9950;
          opacity: 1;
        }

        .hero-section .hero-swiper-button-prev,
        .hero-section .hero-swiper-button-next {
          position: absolute;
          top: 50%;
          width: 27px;
          height: 44px;
          margin-top: -22px;
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .hero-section .hero-swiper-button-prev {
          display: none;
        }

        .hero-section .hero-swiper-button-next {
          right: -10px;
          left: auto;
          height: 69px;
          width: 69px;
          border-radius: 34.5px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #ffffff;
          bottom: 10px;
        }

        .hero-section .hero-swiper-button-prev:after,
        .hero-section .hero-swiper-button-next:after {
          font-family: swiper-icons;
          font-size: 30px;
          text-transform: none !important;
          letter-spacing: 0;
          font-variant: initial;
          line-height: 1;
        }

        .hero-section .hero-swiper-button-prev:after {
          content: "prev";
        }

        .hero-section .hero-swiper-button-next:after {
          content: "next";
        }

        @media (max-width: 1024px) {
          .hero-section .hero-swiper-pagination {
            display: none;
          }

          .hero-section .hero-swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
