"use client";

import { Fragment, useEffect, useState, useCallback, Component } from "react";
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

const SECTIONS = [
  {
    id: "home",
    component: Hero,
  },
  { id: "aboutus", component: AboutUs },
  { id: "cackages", component: Packages },
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
      const scrollPosition = window.scrollY + 100;

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            //setActiveSection(section.id);
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
        <section key={id} id={id} className="scroll-mt-16">
          <Component lng={lng} />
        </section>
      ))}
    </Fragment>
  );
}
