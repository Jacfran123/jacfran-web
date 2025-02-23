"use client";

import { Params } from "@/app/types/types";
import { useTranslation } from "react-i18next";
import Button from "../common/Button";

export interface ContactUsProps extends Params {}

export default function ContactUs(props: ContactUsProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);

  return (
    <section className="py-[200px] px-[20px] bg-bg-accent flex justify-center items-center md:block md:py-[100px]">
      <div className="flex justify-center items-center">
        <p className="font-neueRegular text-bg-secondary uppercase text-[clamp(27px,3vw,180px)]">
          {t("Contact.viewContact.title")}
        </p>
      </div>
      <Button className="ml-5 md:mt-10 px-10 md:ml-0">
        {t("Contact.contactUs.title")}
      </Button>
    </section>
  );
}
