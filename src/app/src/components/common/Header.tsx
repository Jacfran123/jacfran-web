"use client";

import Link from "next/link";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { cookieName } from "@/app/i18n/settings";
import Button from "./Button";
import JacFranLogo from "@/app/src/assets/logo_header.svg";
import WorldLogo from "@/app/src/assets/world.svg";
import { useTranslation } from "@/app/i18n/client";
import { Params } from "@/app/types/types";
import { useCallback, useEffect, useState } from "react";
import Close from "@/app/src/assets/close_white.svg";
import { usePathname } from "next/navigation";

interface HeaderProps extends Params {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header(props: HeaderProps) {
  const { onSectionClick, activeSection, lng } = props;
  const pathname = usePathname();

  const [router, setRouter] = useState<{ id: string; label: string }[]>([]);

  const [cookies] = useCookies([cookieName]);
  const defaultLang = cookies.i18next;
  const [currentLanguage, setCurrentLanguage] = useState<any>(
    lng || defaultLang
  );
  const { t, i18n } = useTranslation(currentLanguage);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (pathname.replace("/", "") === "campaign") {
      const navigationCampaign = [
        { id: "home", label: "home" },
        { id: "aboutus", label: "aboutUs" },
        //{ id: "gallery", label: "gallery" },
        { id: "packages", label: "packages" },
        { id: "contact", label: "contactUs" },
      ];
      setRouter(navigationCampaign);
    } else {
      const navigationLanding = [
        { id: "home", label: "home" },
        { id: "aboutus", label: "aboutUs" },
        { id: "packages", label: "packages" },
        { id: "services", label: "services" },
        //{ id: "gallery", label: "gallery" },
      ];
      setRouter(navigationLanding);
    }
  }, [pathname]);

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
          className="flex items-center gap-5 font-semiBold lg:gap-10 lg:hidden"
          aria-label="Primary navigation"
        >
          {router.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
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
          <Link href="tel:+1(510)330-9396" target="_blank">
            <Button
              className="border border-white font-robotoBold drop-shadow-drop-shadow-3xl 
            border-border-button text-textColor-secondary rounded-lg p-[12px_20px] w-[170px] 
            uppercase font-bold text-sm bg-bg-secondary font-semiBold"
              aria-label="Request a quote"
            >
              {t("getAquote")}
            </Button>
          </Link>
        </div>
        <button className="hidden lg:block" onClick={handleClickMenu}>
          {isMenuOpen ? (
            <div
              className="w-10 h-10 bg-no-repeat bg-contain text-textColor-secondary"
              style={{
                backgroundImage: 'url("/images/close_white.svg")',
              }}
              role="img"
              aria-label="Close icon"
            />
          ) : (
            <div
              className="w-10 h-10 bg-no-repeat bg-contain text-textColor-secondary"
              style={{
                backgroundImage: 'url("/images/menu.svg")',
              }}
              role="img"
              aria-label="Menu icon"
            />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="bg-[#212121] absolute top-20 left-0 w-screen h-screen z-[10000]">
          <div className="flex justify-between p-5">
            <nav aria-label="Primary navigation">
              <ul className="list-none">
                {router.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSectionClick(item.id);
                        handleClickMenu();
                      }}
                      className={`nav-link uppercase font-robotoBold font-normal pb-5 ${
                        activeSection === item.id
                          ? "text-primary"
                          : "text-textColor-secondary"
                      }`}
                    >
                      {t(item.label)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <Image
                alt="World icon to toggle language mobile"
                src={WorldLogo}
                onClick={handleLanguageChange}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
