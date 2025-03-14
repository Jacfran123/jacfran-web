import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Jacfran services",
  description: "Jacfran services ",
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
