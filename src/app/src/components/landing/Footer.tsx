"use client";

import { Params } from "@/app/types/types";
import { useTranslation } from "react-i18next";

export interface FooterProps extends Params {}

export default function Footer(props: FooterProps) {
  const { lng } = props;
  const { t } = useTranslation(lng);

  return (
    <footer
      className="h-[151px] bg-bg flex items-center justify-center"
      aria-label="Footer Section"
    >
      <p className="font-robotoBold text-center text-textColor-secondary text-x2l md:text-md">
        jacfranservices © {new Date().getFullYear()}. {t("Footer.title")}
      </p>
    </footer>
  );
}
