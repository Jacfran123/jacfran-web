"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Automobile from "@/app/src/assets/automobile.svg";
import Map from "@/app/src/assets/map.svg";
import AboutLogo from "@/app/src/assets/about_logo.svg";
import Button from "../common/Button";
import { Params } from "@/app/types/types";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export interface AboutUsProps extends Params {}

export default function AboutUs(props: AboutUsProps) {
  const { lng } = props;
  const { t, i18n } = useTranslation(lng);
  const lngTransLation = i18n.language;
  const [clientLng, setClientLng] = useState("en");

  useEffect(() => {
    setClientLng(lngTransLation);
  }, [lngTransLation]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="JacFran specializes in vehicle detailing, providing top-quality service with a focus on premium products and advanced techniques."
        />
        <meta property="og:title" content="About JacFran - Vehicle Detailing" />
        <meta
          property="og:description"
          content="JacFran specializes in vehicle detailing, providing top-quality service with a focus on premium products and advanced techniques."
        />
        <meta property="og:image" content="/path/to/automobile.jpg" />
        <meta name="robots" content="index, follow" />
        <title>About JacFran - Vehicle Detailing</title>
      </Head>

      <section
        className="bg-bg-primary grid grid-cols-[1fr_0.8fr] pt-[40px] pb-[40px] lg:grid-cols-1 lg:pb-[20px]"
        aria-labelledby="about-us-specialize-in-vehicle"
      >
        <div className="flex items-end">
          <div className="bg-green-gradient h-[507px] w-[30px] sm:h-[340px]" />
          <div className="w-full flex justify-center items-end">
            <div>
              <div className="w-full pb-[95px] flex items-center justify-center sm:pb-[75px]">
                <Image
                  alt="JacFran Logo"
                  src={AboutLogo}
                  className="w-[clamp(188.44px,13vw,208.44px)]"
                  sizes="100vw"
                  width={0}
                  height={107}
                  priority
                />
              </div>
              <div className="flex justify-center items-center w-full">
                <h2
                  id="about-us-specialize-in-vehicle"
                  className={`text-primary font-neueRegular font-normal uppercase  text-[clamp(104px,15vw,204px)] leading-[60px] lg:text-[clamp(104px,25vw,204px)] sm:leading-[30px]
                    `}
                >
                  {t("About.title")}
                </h2>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  alt="Automobile detailing image"
                  src={Automobile}
                  className="w-[clamp(300px,70vw,535px)]"
                  sizes="100vw"
                  width={0}
                  height={0}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start">
          <div className="absolute bg-bg-primary flex pt-[70px] justify-center w-[500px] lg:static lg:w-auto lg:p-[20px]">
            <div>
              <p className="text-textColor-primary text-justify text-md font-robotoBold">
                {t("About.description")}
              </p>
              <h3 className="text-primary font-neueRegular text-[clamp(40px,5vw,54px)]">
                {t("About.subDescription")}
              </h3>
              <p className="text-textColor-primary text-md font-robotoBold sm:text-justify">
                {t("About.information")}
              </p>
              <Link
                className="pt-5 flex items-center sm:flex-col-reverse"
                href="tel:+1(510)330-9396"
                target="_blank"
              >
                <Button className="w-[204px]">
                  {t("Contact.contactUs.title")}
                </Button>
                <p className="text-x2l text-textColor-primary font-robotoBold pl-5 w-full sm:pb-3 sm:flex sm:justify-center sm:pl-0">
                  +1 (510) 330-9396
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-end h-full w-full justify-end lg:hidden">
            <Image
              alt="Map showing service area"
              src={Map}
              className="w-[clamp(100px,7vw,152px)]"
              sizes="100vw"
              width={0}
              height={0}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
