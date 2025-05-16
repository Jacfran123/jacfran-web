"use client";

import { Fragment, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Hero from "@/app/src/components/landing/Hero";
import AboutUs from "@/app/src/components/landing/AboutUs";
import Packages from "@/app/src/components/landing/Packages";
//import Gallery from "@/app/src/components/landing/Gallery";
import Contact from "@/app/src/components/landing/Contact";
import Footer from "@/app/src/components/landing/Footer";
import Header from "@/app/src/components/common/Header";
import Link from "next/link";
import WhatSapp from "@/app/src/assets/whatsapp.svg";
import ContactUs from "@/app/src/components/campaign/ContactUs";
import { useCookies } from "react-cookie";
import { cookieName } from "@/app/i18n/settings";

const SECTIONS = [
  {
    id: "home",
    component: Hero,
  },
  { id: "aboutus", component: AboutUs },
  { id: "packages", component: Packages },
  //{ id: "gallery", component: Gallery },
  { id: "contact-us", component: ContactUs },
  { id: "contact", component: Contact },
  { id: "", component: Footer },
];

export default function Campaign() {
  const [cookies] = useCookies([cookieName]);

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 0;

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <Header
        lng={cookies.i18next}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      {SECTIONS.map(({ id, component: Component }) => (
        <section
          key={id}
          id={id}
          className="scroll-mt-[100px] md:scroll-mt-[70px]"
        >
          <Component lng={cookies.i18next} />
        </section>
      ))}
      <div className="fixed bottom-5 right-5 z-20 p-4 cursor-pointer bg-bg-primary rounded-full">
        <Link
          href="https://wa.me/+15103309396"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={WhatSapp} alt="whatsapp" height={40} width={40} />
        </Link>
      </div>
    </Fragment>
  );
}
