"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Params } from "@/app/types/types";
import Button from "../common/Button";
import CampaignContact from "@/app/src/assets/campaign_contact.jpg";

export interface ContactUsProps extends Params {}

export default function ContactUs(props: ContactUsProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);

  return (
    <section className=" bg-bg-accent flex justify-center items-center">
      <Image
        src={CampaignContact}
        alt={"Campaign Contact"}
        className="md:h-[200px]"
      />
      <div className="absolute">
        <div className="flex justify-center items-center md:block">
          <div className="flex justify-center items-center">
            <p className="font-neueRegular text-bg-secondary uppercase text-[clamp(27px,3vw,180px)]">
              {t("Contact.viewContact.title")}
            </p>
          </div>
          <Link href="tel:+1(510)330-9396" target="_blank">
            <Button className="ml-5 md:mt-10 px-10 md:ml-0">
              {t("Contact.contactUs.title")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
