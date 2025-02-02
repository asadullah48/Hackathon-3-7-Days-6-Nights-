import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductType {
  id: string;
  image: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  color: string;
  brand: string;
  weight: string;
  material: string;
  name: string;
  price: number;
  description: string;
  category: string;
  dimensions: string;
  ratings: number;
  reviews: string[];
  tags: string[];
  stockLevel: number;
}

const TopPicks = async () => {
  const query = `*[_type == "product"] {
    id,
    name,
    image,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    brand,
    dimensions,
    weight,
    color,
    ratings,
    reviews,
    tags,
    material
  }`;

  let sanityData: ProductType[] = [];
  try {
    sanityData = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 select-none">
      <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl font-poppins text-center">
        Top Picks For You
      </h1>
      <p className="text-center text-gray-400 text-sm sm:text-base font-medium font-poppins mt-2">
        Find a bright idea to suit your taste with our great selection of
        suspension, floor, and table flight
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {sanityData.map((product, index) => (
          <article
            key={product.id}
            className="flex flex-col items-start cursor-pointer bg-white p-4 sm:p-6 w-full sm:w-[250px] lg:w-[300px] h-auto"
          >
            <figure className="w-full h-[200px] sm:h-[250px] relative">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                fill
                className="object-cover"
                priority // Optimize for above-the-fold images
              />
            </figure>
            <h2 className="text-black text-sm sm:text-base font-normal font-poppins mt-4">
              {product.name}
            </h2>
            <p className="text-black font-medium text-base sm:text-lg text-right font-poppins mt-1">
              ${product.price}
            </p>
          </article>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-14">
        <Link href="/" passHref>
          <button className="font-medium font-poppins text-lg sm:text-xl border-b-2 border-black pb-2 hover:border-transparent transition-all duration-300">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopPicks;