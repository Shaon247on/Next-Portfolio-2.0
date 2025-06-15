import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import AdvancedCustomCursor from "@/components/ui/AdvancedCustomCursor";
import GlobalLoader from "@/components/ui/GlobalLoader";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: "Aminul - Frontend Developer",
  description:
    "Creative Frontend Developer with 1 year of experience in building high-performance, scalable, and responsive web solutions",
  keywords:
    "Frontend Developer, React, Next.js, TypeScript, TailwindCSS, Full Stack Developer",
  authors: [{ name: "Aminul" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f172a",
  openGraph: {
    title: "Aminul - Frontend Developer",
    description:
      "Creative Frontend Developer with 1 year of experience in building high-performance, scalable, and responsive web solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aminul - Frontend Developer",
    description:
      "Creative Frontend Developer with 1 year of experience in building high-performance, scalable, and responsive web solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased bg-gray-600`}
      >
        <AdvancedCustomCursor />
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
