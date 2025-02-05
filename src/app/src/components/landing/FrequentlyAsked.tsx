"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { Params } from "@/app/types/types";
import FrequentlyAskedImg from "@/app/src/assets/frequently_asked.jpg";
import ArrowUp from "@/app/src/assets/keyboard_arrow_up.svg";
import ArrowDown from "@/app/src/assets/keyboard_arrow_down.svg";
import { useState } from "react";
import { FREQUENTLYASKED } from "../../constants/mocks";

export interface FrequentlyAskedProps extends Params {}

export default function FrequentlyAsked(props: FrequentlyAskedProps) {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleBox = (id: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    const contentRef = document.getElementById(`content-${id}`);
    if (contentRef) {
      if (openItems[id]) {
        gsap.to(contentRef, {
          height: 0,
          duration: 0.5,
          ease: "power2.out",
          padding: 0,
        });
      } else {
        gsap.to(contentRef, {
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <section
      aria-labelledby="frequently-asked"
      className="bg-bg-primary grid grid-cols-[1fr_0.8fr] pt-[40px] pb-[50px] lg:grid-cols-1 lg:pt-[0px]"
    >
      <div className="flex items-end max-h-[600px] lg:max-h-none">
        <div className="bg-green-gradient h-[507px] w-[30px] sm:h-[300px]" />
        <div className="w-full flex justify-center relative top-[50px] md:top-[10px]">
          <Image
            alt="Frequently Asked Questions"
            src={FrequentlyAskedImg}
            className="w-[clamp(320px,80vw,624px)]"
            sizes="100vw"
            width={0}
            height={0}
            priority
          />
        </div>
      </div>
      <div className="pt-16 pr-[40px] lg:pt-[40px] lg:px-[20px]">
        <h2 className="text-primary font-neueRegular text-[clamp(55px,13vw,80px)] leading-[90px]">
          Frequently Asked
        </h2>
        <p className="text-neutral font-robotoBold font-normal text-x4l pb-5 lg:pb-2">
          Question
        </p>
        {FREQUENTLYASKED.map((element) => (
          <article className="bg-bg-neutral" key={`frequently-${element.id}`}>
            {/* Contenedor Principal */}
            <div
              className="w-full min-h-[56px] mt-4 flex items-center px-4 justify-between cursor-pointer"
              onClick={() => toggleBox(element.id)}
            >
              <h3
                className={`${
                  openItems[element.id] ? "text-primary" : "text-neutral"
                } text-[clamp(16px,15vw,24px) font-neueRegular font-normal`}
              >
                {element.title}
              </h3>
              <Image
                alt={`Arrow icon for ${element.title}`}
                src={!openItems[element.id] ? ArrowDown : ArrowUp}
                width={20}
                height={20}
                priority
              />
            </div>
            {openItems[element.id] && (
              <div className="h-[1px] w-full bg-[#959595]" />
            )}
            <div
              id={`content-${element.id}`}
              className="overflow-hidden"
              style={{ height: 0 }}
            >
              <p className="text-neutral text-md font-robotoBold font-normal p-4">
                Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                Text. It Has Roots In A Piece Of Classical Latin Literature From
                45 BC, Making It Over 2000 Years Old. Richard McClintock
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
