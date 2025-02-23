"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IconCheck from "@/app/src/assets/icon_check.svg";
import { Car, CARS, Package } from "../../constants/mocks";
import { Navigation, Pagination } from "swiper/modules";
import { Params } from "@/app/types/types";
import ArrowRight from "@/app/src/assets/arrow_forward.svg";
import ArrowLeft from "@/app/src/assets/arrow_back.svg";
import { useTranslation } from "react-i18next";

export interface PackagesProps extends Params {}

export default function Packages(props: PackagesProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);

  const [selectedCar, setSelectedCar] = useState<any | null>(CARS[0]);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  useEffect(() => {
    setSelectedPackage(CARS[0].packages[0]);
  }, []);

  const handleCarSelect = (swiper: any) => {
    setSelectedCar(CARS[swiper.realIndex]);
    setSelectedPackage(CARS[swiper.realIndex].packages[0]);
  };

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  return (
    <section className="bg-bg">
      <div className="w-full pl-[175px] md:pl-[95px] sm:!pl-0">
        <p className="uppercase md:p-0 md:pt-5 md:mb-5 text-primary text-[clamp(45px,7vw,180px)] font-neueRegular md:px-5">
          {t("Packages.title")}
          <span className="text-bg-primary text-[clamp(24px,3vw,64px)] pl-2">
            {t("Packages.subtitle")}
          </span>
        </p>
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            new URL("@/app/src/assets/packages_background.png", import.meta.url)
              .href
          })`,
        }}
      >
        <div className="flex items-center justify-center pt-[95px] sm:pt-0">
          <div className="w-[1019px] bg-bg-primary rounded-tl-[18px] rounded-tr-2xl rounded-bl-none rounded-br-none overflow-hidden lg:rounded-none lg:w-[920px]">
            <div className="grid grid-cols-[377px,158px,2fr] md:grid-cols-1">
              <div>
                <h3 className="bg-primary font-robotoBold text-x2l text-textColor-secondary p-4 text-center">
                  {t("Packages.selectModel")}
                </h3>
                <div className="relative">
                  <button
                    className="swiper-button-prev swiper-button-prev-packages"
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
                <div className="p-5 h-[auto] relative">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="h-full"
                    loop
                    onSlideChange={(swiper) => handleCarSelect(swiper)}
                    onSwiper={(swiper) => handleCarSelect(swiper)}
                    navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                    }}
                    style={{
                      "--swiper-pagination-color": "#1c9950",
                      "--swiper-pagination-bullet-inactive-color": "#9C9C9C",
                      "--swiper-pagination-bullet-inactive-opacity": "1",
                      "--swiper-pagination-bullet-size": "7px",
                      "--swiper-pagination-bullet-horizontal-gap": "6px",
                      "--swiper-pagination-bottom": "60px",
                      "--swiper-pagination-position": "relative",
                    }}
                  >
                    {CARS.map((car, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        <div className="flex justify-center items-center h-[160px]">
                          <Image
                            src={car.image}
                            alt={car.type}
                            width={262}
                            height={139}
                            className="rounded-lg"
                          />
                        </div>
                        <h4 className="font-robotoBold text-secondary text-[32px] font-normal pt-14">
                          {car.type}
                        </h4>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="relative">
                    <button
                      className="swiper-button-next-packages swiper-button-next"
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
                </div>
                <style jsx>{`
                  .swiper-button-prev::after,
                  .swiper-button-next::after {
                    display: none;
                  }

                  .swiper-button-prev {
                    left: 10px;
                    top: 115px;
                  }

                  .swiper-button-next {
                    right: -10px;
                    top: -170px;
                  }
                `}</style>
              </div>

              <div className="h-full flex flex-col">
                <h3 className="bg-primary font-robotoBold text-x2l text-textColor-secondary p-4 text-center">
                  {t("Packages.subtitle")}
                </h3>
                <div className="flex flex-col h-full md:flex-row sm:h-[97px]">
                  {selectedCar?.packages.map((pkg: any) => (
                    <div
                      key={pkg.name}
                      onClick={() => handlePackageSelect(pkg)}
                      className={`flex-grow flex flex-col justify-center items-center cursor-pointer transition-all duration-300
              ${pkg.bg} ${
                        selectedPackage?.name === pkg.name
                          ? "drop-shadow-drop-shadow-3xl-white text-bg-primary"
                          : "text-bg"
                      }`}
                    >
                      <h4 className="font-robotoBold text-[clamp(28px,3vw,32px)] leading-10">
                        {pkg.name}
                      </h4>
                      <p className="font-robotoBold text-md text-neutral">
                        {pkg.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="bg-primary font-robotoBold text-x2l text-textColor-secondary p-4 text-center">
                  {t("Packages.details")}
                </h3>
                <div className="py-6 px-5 relative md:px-3">
                  <div className="rounded-tl-xl rounded-bl-xl text-right absolute right-0 top-4 h-[48px] w-[107px] flex items-center justify-center bg-gradient-to-r from-[#32CC72] to-[#194F30]">
                    <span className="text-4xl font-bold text-bg-primary">
                      ${selectedPackage?.amount}
                    </span>
                  </div>
                  <div className="overflow-auto h-[288px] md:h-auto md:overflow-hidden pr-3">
                    <ul className="pt-5">
                      <ul className="pl-5">
                        <li className="font-robotoBold text-md py-2">
                          {t(selectedPackage?.includesPlans?.interiorTitle)}
                        </li>
                        {selectedPackage?.includesPlans?.interior?.flatMap(
                          (key: any, index: any) => {
                            const translatedItems = t(key, {
                              returnObjects: true,
                            });

                            if (
                              typeof translatedItems === "object" &&
                              translatedItems !== null
                            ) {
                              return Object.values(translatedItems).map(
                                (translatedText, subIndex) => (
                                  <li
                                    key={`${index}-${subIndex}`}
                                    className="flex items-center"
                                  >
                                    <Image
                                      alt="Icon Check"
                                      src={IconCheck}
                                      height={24}
                                      width={24}
                                      loading="lazy"
                                    />
                                    <span className="text-sm leading-[18.75px] font-robotoBold text-justify lg:w-[65%]">
                                      {translatedText}
                                    </span>
                                  </li>
                                )
                              );
                            }
                          }
                        )}
                      </ul>
                    </ul>
                    <ul className="space-y-3">
                      <ul className=" pl-5">
                        <li className="font-robotoBold text-md my-3">
                          {t(selectedPackage?.includesPlans?.exteriorTitle)}
                        </li>
                        {selectedPackage?.includesPlans?.exterior?.flatMap(
                          (key: any, index: any) => {
                            const translatedItems = t(key, {
                              returnObjects: true,
                            });

                            if (
                              typeof translatedItems === "object" &&
                              translatedItems !== null
                            ) {
                              return Object.values(translatedItems).map(
                                (translatedText, subIndex) => (
                                  <li
                                    key={`${index}-${subIndex}`}
                                    className="flex items-center"
                                  >
                                    <Image
                                      alt="Icon Check"
                                      src={IconCheck}
                                      height={24}
                                      width={24}
                                      loading="lazy"
                                    />
                                    <span className="text-sm leading-[18.75px] font-robotoBold text-justify lg:w-[65%]">
                                      {translatedText}
                                    </span>
                                  </li>
                                )
                              );
                            }
                          }
                        )}
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-[40%] md:py-[40px] py-10">
          <div className="flex w-[320px] h-[48px] border rounded-lg border-bg-primary bg-bg-secondary">
            <div className="w-full cursor-pointer flex items-center justify-center">
              <p className="font-robotoBold text-lg text-textColor-secondary">
                {t("bookNow")}
              </p>
            </div>
            <div className="w-full cursor-pointer flex items-center justify-center border rounded-br-lg rounded-tr-lg border-bg bg-bg">
              <p className="font-robotoBold text-lg text-textColor-secondary">
                {t("getAquote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
