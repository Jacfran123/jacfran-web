"use client";

import { useCookies } from "react-cookie";
import Landing from "@/app/src/components/landing/Landing";
import { cookieName } from "../i18n/settings";
export default function Home() {
  const [cookies] = useCookies([cookieName]);

  return <Landing lng={cookies.i18next} />;
}
