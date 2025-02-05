"use client";

import Head from "next/head";
import Image from "next/image";
import FacebookLogo from "@/app/src/assets/facebook.svg";
import InstagramLogo from "@/app/src/assets/instagram.svg";
import PersonLogo from "@/app/src/assets/contact/person.svg";
import EmailLogo from "@/app/src/assets/contact/mail.svg";
import EditLogo from "@/app/src/assets/contact/edit.svg";
import { Params } from "@/app/types/types";
import Button from "../common/Button";

export interface ContactProps extends Params {}

export default function Contact(props: ContactProps) {
  return (
    <>
      <Head>
        <title>Contact Us - JacFran Services</title>
        <meta
          name="description"
          content="JacFran specializes in vehicle detailing, providing top-quality service with a focus on premium products and advanced techniques."
        />
        <meta
          name="keywords"
          content="JacFran specializes in vehicle detailing."
        />
        <meta name="author" content="JacFran Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="bg-bg-primary p-[60px] grid grid-cols-2 lg:grid-cols-1 lg:flex-col-reverse lg:flex lg:p-0">
        <div className="lg:mt-0 bg-bg-neutral px-[60px] lg:p-5 lg:pt-14 lg:pb-20">
          <p className="text-bg text-[32px] font-neueRegular pb-10 lg:pb-8">
            Contact form
          </p>
          <div>
            <div className="flex items-center border-b border-bg w-full mb-10 pb-3">
              <Image
                alt="JacFran - Person Logo"
                src={PersonLogo}
                className="mr-2"
                width={24}
                height={24}
                loading="lazy"
              />
              <input
                placeholder="Name"
                type="text"
                className="bg-bg-neutral w-full outline-none placeholder:text-bg placeholder:font-robotoBold placeholder:text-xl"
              />
            </div>
            <div className="flex items-center border-b border-bg w-full mb-10 pb-3">
              <Image
                alt="JacFran - Email Logo"
                src={EmailLogo}
                className="mr-2"
                width={24}
                height={24}
                loading="lazy"
              />
              <input
                placeholder="Email Address"
                type="email"
                className="bg-bg-neutral w-full outline-none placeholder:text-bg placeholder:font-robotoBold placeholder:text-xl"
              />
            </div>
            <div className="flex items-center border-b border-bg w-full mb-10 pb-3">
              <Image
                alt="JacFran - Edit Logo"
                src={EditLogo}
                className="mr-2"
                width={24}
                height={24}
                loading="lazy"
              />
              <input
                placeholder="How can we help you? feel free to get in touch!"
                type="text"
                className="bg-bg-neutral min-h-[40px] w-full outline-none placeholder:text-bg placeholder:font-robotoBold placeholder:text-xl"
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="agreement"
                className="w-5 h-5 text-primary accent-primary"
              />
              <label
                htmlFor="agreement"
                className="font-robotoBold text-bg text-md"
              >
                I agree that my data is{" "}
                <span className="border-b border-bg">collected and stored</span>
              </label>
            </div>
            <Button className="w-[204px] rounded-none mt-11">
              GET IN TOUCH
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-center lg:justify-start lg:pt-5 min-h-[480px]">
          <div className="lg:p-5 lg:pb-10">
            <p className="text-bg text-x2l font-neueRegular pb-4">Contact us</p>
            <p className="text-bg font-neueRegular text-[clamp(50px,7vw,60px)] leading-[72px] md:leading-[62px]">
              have questions? <br /> get in touch!
            </p>
            <p className="text-primary font-neueRegular text-x2l pt-10">
              jacfranservices@gmail.com
            </p>
            <p className="text-bg font-neueRegular text-x2l font-normal">
              +1 (510) 330-9396
            </p>
            <p className="text-bg text-x4l font-neueRegular md:text-x3l">
              mobile service bay area, CA
            </p>
            <div className="flex pt-5">
              <div className="h-[48px] w-[48px] cursor-pointer rounded-lg border-[#959595] border flex items-center justify-center">
                <Image
                  alt="FacebookLogo Logo"
                  src={FacebookLogo}
                  width={12.46}
                  height={24}
                  priority
                />
              </div>
              <div className="h-[48px] w-[48px] cursor-pointer rounded-lg border-[#959595] border flex items-center justify-center ml-5">
                <Image
                  alt="InstagramLogo Logo"
                  src={InstagramLogo}
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
