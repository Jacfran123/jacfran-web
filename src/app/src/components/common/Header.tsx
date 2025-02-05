"use client";

import Link from "next/link";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { cookieName } from "@/app/i18n/settings";
import Button from "./Button";
import { headerNav } from "@/app/src/constants/header";
import JacFranLogo from "@/app/src/assets/logo_header.svg";
import WorldLogo from "@/app/src/assets/world.svg";
import Menu from "@/app/src/assets/menu.svg";
import clsx from "clsx";
import { useTranslation } from "@/app/i18n/client";
import { Params } from "@/app/types/types";
import { useCallback, useEffect, useState } from "react";

interface HeaderProps extends Params {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header(props: HeaderProps) {
  const { onSectionClick, activeSection, lng } = props;
  const navigation = [
    { id: "home", label: "home" },
    { id: "aboutus", label: "aboutUs" },
    { id: "services", label: "services" },
    { id: "gallery", label: "gallery" },
    { id: "coverage", label: "coverage" },
  ];

  const [cookies] = useCookies([cookieName]);
  const defaultLang = cookies.i18next;
  const [currentLanguage, setCurrentLanguage] = useState(lng || defaultLang);
  const { t, i18n } = useTranslation(currentLanguage);

  useEffect(() => {
    if (lng && lng !== defaultLang) {
      i18n.changeLanguage(lng);
    }
  }, [lng, defaultLang, i18n]);

  const handleLanguageChange = useCallback(() => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  }, [currentLanguage, i18n]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 p-container lg:p-8 sm:!p-5 transition-colors duration-300 bg-gradient-to-b from-[#000000] to-[#212121]"
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={JacFranLogo || "/placeholder.svg"}
            alt="JacFran official logo"
            className="w-[clamp(158px,17vw,178px)]"
            sizes="100vw"
            width={0}
            height={25}
            priority
          />
        </Link>

        <nav
          className="flex items-center gap-10 font-semiBold lg:gap-10 lg:hidden"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  console.log(item.id);
                  onSectionClick(item.id);
                }}
                className={`nav-link uppercase font-robotoBold font-normal ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-textColor-secondary"
                }`}
              >
                {t(item.label)}
              </button>
            </li>
          ))}
        </nav>

        <div className="flex lg:hidden">
          <Image
            alt="World icon to toggle language"
            src={WorldLogo || "/placeholder.svg"}
            className="cursor-pointer mr-10"
            onClick={handleLanguageChange}
            loading="lazy"
          />
          <Button
            className="border border-white font-robotoBold drop-shadow-drop-shadow-3xl 
            border-border-button text-textColor-secondary rounded-lg p-[12px_20px] w-[170px] 
            uppercase font-bold text-sm bg-bg-secondary font-semiBold"
            aria-label="Request a quote"
          >
            {t("getAquote")}
          </Button>
        </div>
        <div className="hidden lg:block">
          <Image
            src={Menu || "/placeholder.svg"}
            className="cursor-pointer"
            alt="Menu icon"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
    </header>
  );
}
