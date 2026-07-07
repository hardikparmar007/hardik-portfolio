import { Toaster } from "react-hot-toast";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hardik-portfolio-khaki.vercel.app"),
  title: "Parmar Hardik | Full Stack Developer",
  description:
    "Portfolio of Parmar Hardik - Full Stack Developer skilled in React, Next.js, and modern web development.",
  verification: {
    google: "VWHPSR0LkxYRBulCaKIe8MWn-qoei32-q0YSGN8VxmQ",
  },
  keywords: [
    "Hardik Parmar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Parmar Hardik" }],
  creator: "Parmar Hardik",
  applicationName: "Parmar Hardik Portfolio",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Parmar Hardik | Full Stack Developer",
    description:
      "Portfolio of Parmar Hardik - Full Stack Developer skilled in React, Next.js, and modern web development.",
    url: "https://hardik-portfolio-khaki.vercel.app",
    siteName: "Hardik Parmar Portfolio",
    images: [
      {
        url: "/pp.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmar Hardik | Full Stack Developer",
    description:
      "Portfolio of Parmar Hardik - Full Stack Developer skilled in React, Next.js, and modern web development.",
    images: ["/pp.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white antialiased">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}