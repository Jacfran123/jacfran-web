import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Jacfran | Professional Vehicle Detailing Services in Bay Area",
  description:
    "Jacfran offers premium mobile vehicle detailing services in the Bay Area. Our experienced professionals use advanced techniques and premium products to restore your car's shine and provide long-lasting protection.",
  keywords:
    "vehicle detailing, mobile detailing, Bay Area, car restoration, premium car care, professional auto detailing, mobile car wash, automotive experts",
  openGraph: {
    title: "Premium Mobile Vehicle Detailing Services | Jacfran",
    description:
      "Transform your vehicle with Jacfran's professional detailing services. Mobile service throughout the Bay Area using premium products and advanced techniques for immaculate results and long-term protection.",
    url: "https://jacfranservices.com/",
    siteName: "Jacfran Vehicle Detailing Services",
    images: [
      {
        url: "https://jacfranservices.com/images/jacfran.jpeg",
        width: 1200,
        height: 630,
        alt: "Jacfran Professional Vehicle Detailing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Vehicle Detailing in Bay Area | Jacfran",
    description:
      "Professional mobile detailing services using premium products and advanced techniques for immaculate results and long-term protection.",
    images: ["https://jacfranservices.com/images/jacfran.jpeg"],
  },
  alternates: {
    canonical: "https://jacfranservices.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Automotive Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className="antialiased">
        {children}
      </body>
    </html>
  );
}
