"use client";

import { Params } from "@/app/types/types";

export interface HomeProps extends Params {}

export default function Home(props: HomeProps) {
  return <div className="text-primary pt-[400px]">HOME</div>;
}
