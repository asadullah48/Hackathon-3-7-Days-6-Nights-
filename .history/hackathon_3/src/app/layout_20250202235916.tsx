import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UI/UX Hackathon Template",
  description: "A modern and responsive UI/UX hackathon template built with Next.js and Sanity.",
  openGraph: {
    title: "UI/UX Hackathon Template",
    description: "A modern and responsive UI/UX hackathon template built with Next.js and Sanity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Hackathon Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Hackathon Template",
    description: "A modern and responsive UI/UX hackathon template built with Next.js and Sanity.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}