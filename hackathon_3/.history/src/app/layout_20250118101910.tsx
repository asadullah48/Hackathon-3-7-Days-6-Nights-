import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const geistSans = localFont({ 
  src: "./fonts/GeistVF.woff", 
  variable: "--font-geist-sans", 
  weight: "100 900", }); 
  export const geistMono = localFont({ 
    src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900", });
export const metadata: Metadata = {
  title: "UI-UX HACKATHON3-TEMPLATE 0",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
