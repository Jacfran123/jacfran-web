"use client";

import Landing from "@/app/src/components/landing/Landing";
import { Params } from "@/app/types/types";

export interface HomeProps extends Params {}

export default function Home(props: HomeProps) {
  const { lng } = props;

  return <Landing lng={lng} />;
}
