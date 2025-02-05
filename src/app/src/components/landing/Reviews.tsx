"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { REVIEWS_IMAGE, TESTIMONIALS } from "../../constants/mocks";
import { Params } from "@/app/types/types";
import ArrowLeft from "@/app/src/assets/carousel/Reviews/arrow_left.svg";
import ArrowRight from "@/app/src/assets/carousel/Reviews/arrow_right.svg";
import "swiper/css";
import "swiper/css/navigation";

export interface ReviewsProps extends Params {}

export default function Reviews(props: ReviewsProps) {
  const [visibleIds, setVisibleIds] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setVisibleIds(swiper.realIndex + 1);
  };

  return (
    <section
      className="bg-bg-accent py-20 flex justify-center overflow-hidden"
      aria-labelledby="reviews-title"
    >
      <div className="w-full max-w-screen-lg mx-auto relative">
        <h2
          id="reviews-title"
          className="font-neueRegular text-primary text-[60px] uppercase leading-[60px] text-center"
        >
          Reviews
        </h2>
        <p className="text-md font-robotoBold text-textColor-secondary uppercase text-center">
          That Inspire
        </p>
        <div className="pt-16 md:pt-8 w-full flex items-center justify-center">
          <div className="w-[753px] md:w-full bg-bg-accent">
            <div className="w-full relative">
              <button
                className="swiper-button-prev"
                aria-label="Previous testimonial"
              >
                <Image
                  src={ArrowLeft}
                  alt={"Reviews - Arrow Left"}
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </button>
            </div>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              className="w-full max-w-4xl mx-auto px-12"
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              onSwiper={(swiper) => handleSlideChange(swiper)}
              style={{ backgroundColor: "#050409" }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  data-id={testimonial.id}
                  className="bg-bg-accent"
                >
                  <div className="flex flex-col items-center text-center p-4 h-[256px] bg-bg-accent">
                    <blockquote
                      className="font-robotoBold text-[32px] text-textColor-secondary font-normal md:text-x2l"
                      //cite={testimonial.source || "#"}
                    >
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-white uppercase">
                      <div className="font-neueRegular text-xl text-textColor-secondary font-normal">
                        {testimonial.author}
                      </div>
                      <div className="font-robotoBold text-xl text-textColor-secondary font-normal">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full relative">
              <button
                className="swiper-button-next"
                aria-label="Next testimonial"
              >
                <Image
                  src={ArrowRight}
                  alt={"Reviews - Arrow Right"}
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </button>
            </div>
            <div className="flex justify-center items-center pt-10 md:pl-10">
              {REVIEWS_IMAGE.map((element) => {
                return (
                  <div
                    key={element.id}
                    className={`w-[100px] transition-transform duration-300 ${
                      visibleIds === element.id ? "scale-125" : ""
                    }`}
                  >
                    <Image
                      src={element.image}
                      alt={element.alt || ""}
                      width={72}
                      height={72}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <style jsx>{`
            .swiper-button-prev::after,
            .swiper-button-next::after {
              display: none;
            }

            .swiper-button-prev {
              left: -100px;
              top: 85px;
            }

            .swiper-button-next {
              right: -100px;
              top: -170px;
            }

            @media (max-width: 768px) {
              .swiper-button-prev,
              .swiper-button-next {
                display: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
