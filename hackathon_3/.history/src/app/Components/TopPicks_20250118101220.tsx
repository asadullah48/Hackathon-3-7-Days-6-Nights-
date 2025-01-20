import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopPicks = () => {
  interface TopPick2 {
    name: string;
    image: string;
    price: number;
    text: string;
  }
  const topPicks: TopPick2[] = [
    {
      name: "Trenton modular sofa_3",
      image: "/topPics/Trenton modular sofa.png",
      price: 25000.0,
      text: "mt-8 mb-4 text-start",
    },
    {
      name: "Granite dining table with dining chair",
      image: "/topPics/Granite dining table.png",
      price: 25000.0,
      text: "mt-20",
    },
    {
      name: "Outdoor bar table and stool",
      image: "/topPics/Outdoor bar table.png",
      price: 25000.0,
      text: "mt-7",
    },
    {
      name: "Plain console with teak mirror",
      image: "/topPics/Plain console.png",
      price: 25000.0,
      text: "mt-20",
    },
  ];
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 select-none">
      <h1 className="font-medium text-[24px] sm:text-[36px] font-[poppins] text-center">
        Top Picks