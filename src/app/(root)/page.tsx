"use client";

import { useCookies } from "react-cookie";
import { useEffect, useRef } from "react";
import Landing from "@/app/src/components/landing/Landing";
import { cookieName } from "../i18n/settings";

// Reemplaza con el send_to que te dé Google Ads al crear la acción "Visita a la página"
const LANDING_VISIT_CONVERSION_SEND_TO = "AW-17990728939/XJYXCJvVsIQcEOv50oJD'";

export default function Home() {
  const [cookies] = useCookies([cookieName]);
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current || typeof window === "undefined") return;
    const fireVisitConversion = () => {
      if (firedRef.current || !window.gtag) return;
      firedRef.current = true;
      window.gtag("event", "conversion", {
        send_to: LANDING_VISIT_CONVERSION_SEND_TO,
        transaction_id: '',
      });
    };
    if (window.gtag) {
      fireVisitConversion();
    } else {
      const check = setInterval(() => {
        if (window.gtag) {
          clearInterval(check);
          fireVisitConversion();
        }
      }, 100);
      return () => clearInterval(check);
    }
  }, []);

  return <Landing lng={cookies.i18next} />;
}
