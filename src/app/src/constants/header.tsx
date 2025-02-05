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

export const featuresSection = [
  {
    title: "CERAMIC COATING",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post29-copyright-840x620.jpg",
  },
  {
    title: "engine wash",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post30-copyright-840x964.jpg",
  },
  {
    title: "Correction of paint",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post31-copyright-840x621.jpg",
  },
  {
    title: "Correction of paint",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post32-copyright-840x774.jpg",
  },
  {
    title: "CERAMIC COATING",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post29-copyright-840x620.jpg",
  },
  {
    title: "engine wash",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post30-copyright-840x964.jpg",
  },
  {
    title: "Correction of paint",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post31-copyright-840x621.jpg",
  },
  {
    title: "Correction of paint",
    subtitle: "View More",
    logo: "https://detailx.ancorathemes.com/wp-content/uploads/2020/04/post32-copyright-840x774.jpg",
  },
];
