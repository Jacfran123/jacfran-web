"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Button from "../common/Button";
import { Params } from "@/app/types/types";
import { FEATURES_SECTION } from "../../constants/mocks";
import { RefItem } from "../../constants/header";

export interface ServicesProps extends Params {}

export default function Services(props: ServicesProps) {
  const refs = useRef<RefItem[]>([]);

  const handleMouseEnter = (index: number) => {
    const title = refs.current[index]?.title;
    const subtitle = refs.current[index]?.subtitle;
    if (title && subtitle) {
      gsap.to(title, { y: -5, duration: 0.5, ease: "power3.out" });
      gsap.to(subtitle, { y: 0, duration: 0.5, ease: "power3.out" });
    }
  };

  const handleMouseLeave = (index: number) => {
    const title = refs.current[index]?.title;
    const subtitle = refs.current[index]?.subtitle;
    if (title && subtitle) {
      gsap.to(title, { y: 0, duration: 0.5, ease: "power3.out" });
      gsap.to(subtitle, { y: 0, duration: 0.5, ease: "power3.out" });
    }
  };

  return (
    <section
      aria-labelledby="features-section-title"
      className="w-full flex justify-center py-20 bg-bg-accent md:py-10"
    >
      <div>
        <h2
          id="features-section-title"
          className="text-primary text-[clamp(53px,7vw,60px)] font-neueRegular text-center"
        >
          ADDITIONAL SERVICES
        </h2>
        <p className="text-md text-textColor-secondary font-robotoBold text-center md:px-5">
          If what you want is a unique service for your vehicle, we offer you a
          variety of
          <br /> options for your choice.
        </p>

        <div className="grid grid-cols-4 pt-20 lg:grid-cols-2 md:!grid-cols-1 md:pt-14">
          {FEATURES_SECTION.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                className="
                w-[319.58px] 
                h-[376.32px]
                lg:w-[340.58px] 
                overflow-hidden 
                lg:aspect-[4/5.5] 
                sm:!aspect-[3/3] 
                md:!w-full"
                loading="lazy"
                ref={(el) => {
                  if (!refs.current[index]) {
                    refs.current[index] = { container: el };
                  } else {
                    refs.current[index].container = el;
                  }
                }}
                src={item.logo || "/placeholder.svg"}
                alt={`${item.title} - Logo`}
                height={300}
                width={300}
              />
              <div
                className="absolute 
                  bottom-0 
                  left-0 
                  w-full 
                  h-full 
                  flex 
                  flex-col 
                  justify-end 
                  px-5 
                  transition-all 
                  duration-300
                  bg-gradient-to-t 
                  from-transparent 
                  via-transparent 
                  to-transparent
                  group-hover:from-[#008C3E]
                  group-hover:via-[#008C3E]/80
                  group-hover:to-transparent"
              >
                <div
                  className="w-full text-center flex flex-col justify-center h-full items-center"
                  ref={(el) => {
                    if (!refs.current[index]) {
                      refs.current[index] = {};
                    }
                    refs.current[index].title = el;
                  }}
                >
                  <h3 className="text-x4l font-neueRegular text-textColor-secondary w-[120px] leading-[43.2px]">
                    {item.title}
                  </h3>
                  <Button className="!w-[145px] bg-[#204B32] text-x2l mt-5 border border-white font-robotoBold hidden group-hover:block">
                    Book Now
                  </Button>
                </div>
                <p
                  ref={(el) => {
                    if (!refs.current[index]) {
                      refs.current[index] = {};
                    }
                    refs.current[index].subtitle = el;
                  }}
                  className="text-xl font-robotoBold text-textColor-secondary text-right pr-0 hidden group-hover:block group-hover:pb-5"
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
