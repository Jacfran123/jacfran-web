"use client";

import Image from "next/image";
import { useCookies } from "react-cookie";
import Landing from "@/app/src/components/landing/Landing";
import { cookieName } from "../i18n/settings";
import WhatSapp from "@/app/src/assets/whatsapp.svg";
export default function Home() {
  const [cookies] = useCookies([cookieName]);

  return <Landing lng={cookies.i18next} />;
}
