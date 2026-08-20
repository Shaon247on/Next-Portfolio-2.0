import type { Metadata, Viewport } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import AdvancedCustomCursor from "@/components/ui/AdvancedCustomCursor";
import GlobalLoader from "@/components/ui/GlobalLoader";
import JsonLd from "@/components/seo/JsonLd";
import {
  ALL_KEYWORDS,
  SEO_DESCRIPTION,
  SEO_DESCRIPTION_SHORT,
  SEO_TITLE,
  SEO_TITLE_LONG,
  SITE,
} from "@/utils/seo";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

// themeColor belongs to the viewport export — as a standalone `export const
// themeColor` Next.js silently ignored it and no theme-color tag was emitted.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SEO_DESCRIPTION,
  keywords: ALL_KEYWORDS,
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Md Aminul Islam",
    lastName: "Shaon",
    username: "Shaon247on",
    title: SEO_TITLE_LONG,
    description: SEO_DESCRIPTION,
    url: SITE.url,
    siteName: `${SITE.name} — ${SITE.jobTitle}`,
    locale: SITE.locale,
    // og:image comes from app/opengraph-image.tsx, which is generated at build
    // time. Setting it here as well would override that file.
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE_LONG,
    description: SEO_DESCRIPTION_SHORT,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
  },
  // Paste the tokens here once the property is claimed:
  // verification: { google: "...", other: { "msvalidate.01": "..." } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased bg-[#212121]`}
      >
        <JsonLd />
        <div className="hidden lg:block">
          <AdvancedCustomCursor />
        </div>
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
