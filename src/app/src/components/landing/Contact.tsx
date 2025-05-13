"use client";

import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookLogo from "@/app/src/assets/facebook.svg";
import TiktokLogo from "@/app/src/assets/tiktok.svg";
import InstagramLogo from "@/app/src/assets/instagram.svg";
import PersonLogo from "@/app/src/assets/contact/person.svg";
import EmailLogo from "@/app/src/assets/contact/mail.svg";
import EditLogo from "@/app/src/assets/contact/edit.svg";
import { Params } from "@/app/types/types";
import Button from "../common/Button";

export interface ContactProps extends Params {}

export default function Contact(props: ContactProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      agreement: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("Contact.errors.name")),
      email: Yup.string()
        .email(t("Contact.errors.emailInvalid"))
        .required(t("Contact.errors.emailRequired")),
      message: Yup.string().required(t("Contact.errors.message")),
      agreement: Yup.boolean().oneOf([true], t("Contact.errors.agreement")),
    }),
    onSubmit: (values, { resetForm }) => {
      window.location.href = `mailto:jacfranservices@gmail.com?subject=${values.name} - JacFran Services&body=${values.message}`;
      resetForm();
    },
  });

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
        <div className="py-20 lg:mt-0 bg-bg-neutral px-[60px] lg:p-5 lg:pt-14 lg:pb-20">
          <p className="text-bg text-[32px] font-neueRegular pb-6 lg:pb-8">
            {t("Contact.title")}
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-3  mb-7">
              <div className="flex items-center pt-5 border-b border-bg w-full">
                <Image
                  alt="JacFran - Person Logo"
                  src={PersonLogo}
                  className="mr-2"
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <input
                  placeholder={t("Contact.inputsName.placeholder")}
                  type="text"
                  className="bg-bg-neutral w-full outline-none placeholder:text-bg placeholder:font-robotoBold placeholder:text-xl"
                  {...formik.getFieldProps("name")}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 font-robotoBold text-xs font-bold">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div className="mb-7">
              <div className="flex items-center pt-2 border-b border-bg w-full">
                <Image
                  alt="JacFran - Email Logo"
                  src={EmailLogo}
                  className="mr-2"
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <input
                  placeholder={t("Contact.inputsEmail.placeholder")}
                  type="email"
                  className="bg-bg-neutral w-full outline-none placeholder:text-bg placeholder:font-robotoBold placeholder:text-xl"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 font-robotoBold text-xs font-bold">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="mb-7 pb-3">
              <div className="flex items-center pt-2 border-b border-bg w-full">
                <Image
                  alt="JacFran - Edit Logo"
                  src={EditLogo}
                  className="mr-2"
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <input
                  placeholder={t("Contact.inputsArea.placeholder")}
                  type="text"
                  className="bg-bg-neutral min-h-[40px] w-full outline-none placeholder:text-bg placeholder:font-robotoBold placeholder:text-xl"
                  {...formik.getFieldProps("message")}
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 font-robotoBold text-xs font-bold">
                  {formik.errors.message}
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center pt-2 pb-2 space-x-3">
                <input
                  type="checkbox"
                  id="agreement"
                  className="w-5 h-5 text-primary accent-primary"
                  {...formik.getFieldProps("agreement")}
                />
                <label
                  htmlFor="agreement"
                  className="font-robotoBold text-bg text-md"
                >
                  {t("Contact.inputsCheck.placeholder")}{" "}
                  <span className="border-b border-bg">
                    {t("Contact.inputsCheck.borderText")}
                  </span>
                </label>
              </div>
              {formik.touched.agreement && formik.errors.agreement && (
                <p className="text-red-500 font-robotoBold text-xs font-bold">
                  {formik.errors.agreement}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-[204px] rounded-none mt-11 uppercase"
            >
              {t("Contact.button.title")}
            </Button>
          </form>
        </div>
        <div className="flex items-center justify-center lg:justify-start lg:pt-5 min-h-[480px]">
          <div className="lg:p-5 lg:pb-10 md:pt-0">
            <p className="text-bg text-x2l font-neueRegular pb-4">
              {t("Contact.contactUs.title")}
            </p>
            <p className="text-bg font-neueRegular text-[clamp(50px,7vw,60px)] leading-[68px] md:leading-[62px]">
              {t("Contact.contactUs.questionTitle")} <br />{" "}
              {t("Contact.contactUs.questionSubTitle")}
            </p>
            <p className="text-primary font-neueRegular text-x2l pt-10">
              jacfranservices@gmail.com
            </p>
            <p className="text-bg font-neueRegular text-x2l font-normal">
              <Link href="tel:+1(510)330-9396" target="_blank">
                +1 (510) 330-9396
              </Link>
            </p>
            <p className="text-bg text-x4l font-neueRegular md:text-x3l">
              {t("Contact.contactUs.description")}
            </p>
            <div className="flex pt-5">
              <Link
                className="h-[48px] w-[48px] cursor-pointer rounded-lg border-[#959595] border flex items-center justify-center"
                href="https://www.facebook.com/jacfranservices"
                target="_blank"
              >
                <Image
                  alt="FacebookLogo Logo"
                  src={FacebookLogo}
                  width={12.46}
                  height={24}
                  priority
                />
              </Link>
              <Link
                className="h-[48px] w-[48px] cursor-pointer rounded-lg border-[#959595] border flex items-center justify-center ml-5"
                href="https://www.instagram.com/jacfranservices"
                target="_blank"
              >
                <Image
                  alt="InstagramLogo Logo"
                  src={InstagramLogo}
                  width={24}
                  height={24}
                  priority
                />
              </Link>
              <Link
                className="h-[48px] w-[48px] cursor-pointer rounded-lg border-[#959595] border flex items-center justify-center ml-5"
                href="https://www.tiktok.com/@jacfranservices?_t=ZT-8wKZAONdeos&_r=1"
                target="_blank"
              >
                <Image
                  alt="TiktokLogo Logo"
                  src={TiktokLogo}
                  width={24}
                  height={24}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
