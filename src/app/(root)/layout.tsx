import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Professional Car Detailing | Jacfran Service's in Bay Area",
  description:
    "Jacfran offers premium mobile car detailing services in the Bay Area. Our experienced professionals use advanced techniques and premium products to restore your car's shine and provide long-lasting protection.",
  keywords:
    "car detailing, mobile detailing, Bay Area, car restoration, premium car care, professional auto detailing, mobile car wash, automotive experts",
  openGraph: {
    title: "Professional Car Detailing | Jacfran Service's in Bay Area",
    description:
      "Transform your vehicle with Jacfran's professional detailing services. Mobile service throughout the Bay Area using premium products and advanced techniques for immaculate results and long-term protection.",
    url: "https://jacfranservices.com/",
    siteName: "Jacfran car detailing Services",
    images: [
      {
        url: "https://jacfranservices.com/images/logo_seo.png",
        width: 1200,
        height: 630,
        alt: "Jacfran Professional car detailing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium car detailing in Bay Area | Jacfran",
    description:
      "Professional mobile detailing services using premium products and advanced techniques for immaculate results and long-term protection.",
    images: ["https://jacfranservices.com/images/logo_seo.png"],
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
