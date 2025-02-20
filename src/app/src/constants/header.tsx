interface Nav {
  href: string;
  label: string;
}

export type RefItem = {
  container?: HTMLDivElement | null;
  title?: HTMLHeadingElement | null;
  subtitle?: HTMLParagraphElement | null;
};

export const headerNav: Nav[] = [
  { href: "home", label: "home" },
  { href: "aboutus", label: "aboutUs" },
  { href: "services", label: "services" },
  { href: "gallery", label: "gallery" },
  { href: "coverage", label: "coverage" },
];
