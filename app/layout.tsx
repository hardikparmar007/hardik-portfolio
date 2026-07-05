import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
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
  title: "Parmar Hardik | Full Stack Developer",
  description:
    "Portfolio of Parmar Hardik - Full Stack Developer skilled in React, Next.js, and modern web development.",
  keywords: [
    "Hardik Parmar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Parmar Hardik" }],
  creator: "Parmar Hardik",
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