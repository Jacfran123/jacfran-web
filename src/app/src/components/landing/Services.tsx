"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Button from "../common/Button";
import { Params } from "@/app/types/types";
import { FEATURES_SECTION } from "../../constants/mocks";
import { RefItem } from "../../constants/header";
import { useTranslation } from "react-i18next";
import Close from "@/app/src/assets/close.svg";

export interface ServicesProps extends Params {}

export default function Services(props: ServicesProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);
  const refs = useRef<RefItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

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

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="w-full flex justify-center py-20 bg-bg-accent md:py-10">
      <div>
        <h2 className="text-primary text-[clamp(53px,7vw,60px)] font-neueRegular text-center">
          {t("Services.title")}
        </h2>
        <p className="text-md text-textColor-secondary font-robotoBold text-center md:px-5">
          {t("Services.description")}
        </p>

        <div className="grid grid-cols-4 pt-20 lg:grid-cols-2 sm:!grid-cols-1 md:pt-14">
          {FEATURES_SECTION.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                className="w-[319.58px] h-[376.32px] lg:w-[340.58px] overflow-hidden lg:aspect-[4/5.5] sm:!aspect-[3/3] md:!w-full"
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
              <div className="from-[#000000]/100 to-transparent absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-5 transition-all duration-300 bg-gradient-to-t via-transparent group-hover:from-[#008C3E] group-hover:via-[#008C3E]/80 group-hover:to-transparent">
                <div
                  className="w-full text-center flex flex-col justify-center h-full items-center"
                  ref={(el) => {
                    if (!refs.current[index]) {
                      refs.current[index] = {};
                    }
                    refs.current[index].title = el;
                  }}
                >
                  <h3 className="text-x4l text-center font-neueRegular text-textColor-secondary max-w-[220px] leading-[43.2px]">
                    {t(item.title)}
                  </h3>
                  <Button className="!w-auto px-5 bg-[#204B32] text-x2l mt-5 border border-white font-robotoBold hidden group-hover:block">
                    {t("bookNow")}
                  </Button>
                </div>
                <p
                  onClick={() => openModal(item)}
                  className="text-xl font-robotoBold text-textColor-secondary text-right pr-0 hidden group-hover:block group-hover:pb-5 cursor-pointer"
                >
                  {t("viewMore")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 h-[450px] overflow-auto rounded-lg shadow-lg w-[400px] md:rounded-none md:w-full md:h-screen">
            <div className="flex justify-end md:pt-5">
              <button className="text-gray-700" onClick={closeModal}>
                <Image src={Close} alt={t("closeViewDetail")} />
              </button>
            </div>
            <h3 className="text-x2l font-neueRegular text-bg-secondary pt-4 leading-[28px]">
              {t(selectedItem?.title)}
            </h3>
            {t(selectedItem?.descriptions, { returnObjects: true }).map(
              (desc: any, index: number) => (
                <div key={index} className="pt-5">
                  <p className="text-md font-neueRegular text-textColor-primary pb-2">
                    {desc.title}
                  </p>
                  {desc.description && (
                    <p className="text-sm font-robotoBold text-justify text-textColor-primary">
                      {desc.description}
                    </p>
                  )}
                  {desc.list && (
                    <ul className="list-disc pl-5 text-textColor-primary text-sm font-robotoBold">
                      {desc.list.map((item: any, i: number) => (
                        <li key={i} className="pb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}
