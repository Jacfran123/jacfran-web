"use client";

import { Fragment, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Header from "../common/Header";
import { Params } from "@/app/types/types";
import AboutUs from "./AboutUs";
import FrequentlyAsked from "./FrequentlyAsked";
import Partners from "./Partner";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";
import Packages from "./Packages";
import Hero from "./Hero";
import Gallery from "./Gallery";
import WhatSapp from "@/app/src/assets/whatsapp.svg";
import Link from "next/link";

const SECTIONS = [
  {
    id: "home",
    component: Hero,
  },
  { id: "aboutus", component: AboutUs },
  { id: "packages", component: Packages },
  { id: "gallery", component: Gallery },
  { id: "faq", component: FrequentlyAsked },
  { id: "partners", component: Partners },
  { id: "services", component: Services },
  { id: "coverage", component: Reviews },
  { id: "contact", component: Contact },
  { id: "", component: Footer },
];

export interface LandingProps extends Params {}

export default function Landing(props: LandingProps) {
  const { lng } = props;
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
        lng={lng}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      {SECTIONS.map(({ id, component: Component }) => (
        <section
          key={id}
          id={id}
          className="scroll-mt-[100px] md:scroll-mt-[70px]"
        >
          <Component lng={lng} />
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
