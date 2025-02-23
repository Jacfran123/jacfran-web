"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Params } from "@/app/types/types";
import FrequentlyAskedImg from "@/app/src/assets/frequently_asked.webp";
import ArrowUp from "@/app/src/assets/keyboard_arrow_up.svg";
import ArrowDown from "@/app/src/assets/keyboard_arrow_down.svg";
import { FREQUENTLYASKED } from "../../constants/mocks";
import { useTranslation } from "react-i18next";

export interface FrequentlyAskedProps extends Params {}

export default function FrequentlyAsked(props: FrequentlyAskedProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);

  const [openItems, setOpenItems] = useState<any>({});

  const toggleBox = (id: number) => {
    setOpenItems((prevState: any) => ({
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    FREQUENTLYASKED.forEach((element) => {
      const contentRef = document.getElementById(`content-${element.id}`);
      if (contentRef) {
        if (
          Number(element.id) === Number(Object.keys(openItems)[0]) &&
          openItems[element.id]
        ) {
          const height = contentRef.scrollHeight;
          gsap.to(contentRef, {
            height: height,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          gsap.to(contentRef, {
            height: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
    });
  }, [openItems]);

  return (
    <section className="bg-bg-primary grid grid-cols-[1fr_0.8fr] pt-[40px] pb-[50px] lg:grid-cols-1 lg:pt-[0px]">
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
        <h2 className="text-primary font-neueRegular text-[clamp(45px,13vw,70px)] leading-[90px] md:leading-[60px]">
          {t("FrequentlyAsked.title")}
        </h2>
        <p className="text-neutral font-robotoBold font-normal text-x4l pb-5 lg:pb-2">
          {t("FrequentlyAsked.description")}
        </p>
        {FREQUENTLYASKED.map((element) => (
          <article className="bg-bg-neutral" key={`frequently-${element.id}`}>
            <div
              className="w-full min-h-[56px] mt-4 flex items-center px-4 justify-between cursor-pointer"
              onClick={() => toggleBox(element.id)}
            >
              <h3
                className={`${
                  openItems[element.id] ? "text-primary" : "text-neutral"
                } text-[clamp(16px,15vw,24px) font-neueRegular font-normal`}
              >
                {t(element.title)}
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
                {t(element.description)}
              </p>
              {element.points && (
                <ul className="list-circle list-inside !ml-4 pb-5">
                  {Object.values(element.points).map((point, index) => (
                    <li
                      key={`${element.id}-point-${index}`}
                      className="text-neutral text-md font-robotoBold font-normal"
                    >
                      {t(point)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
