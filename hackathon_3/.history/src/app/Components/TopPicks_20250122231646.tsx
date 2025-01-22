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
  const query = `Default
Dataset

production
API version

Other
Custom API version
v2025-01-20
Perspective

raw
Query URL [Copy to clipboard]
https://ik7k2sgu.api.sanity.io/v2025-01-20/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7B+%0A%0Aid%2C%0A+name%2C%0Aimage%2C+%0Aprice%2C%0Adescription%2C%0AdiscountPercentage%2C%0AisFeaturedProduct%2C%0AstockLevel%2C%0Acategory%2C%0Abrand%2C%0Adimensions%2C%0Aweight%2C%0Acolor%2C%0Aratings%2C%0Areviews%2C%0Atags%2C+%0Amaterial%0A%7D
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
*[_type == "product"] { 

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
}
1
2
3
{
  
}
[…] 22 items
0:{…} 17 properties
isFeaturedProduct:true
stockLevel:5
dimensions:null
ratings:null
reviews:null
price:1600
description:A spacious lounge chair with a quilted back and soft cushioning.
discountPercentage:20
category:Chair
brand:null
id:3
name:Pink Lounge Chair
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-640bd1eecf37b399e04badfba49d99eecf8a1cf7-1964x2455-jpg
_type:reference
weight:null
color:null
tags:null
material:null
1:{…} 17 properties
id:10
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-6043c0f8a743bd0c02f98edaba88057f853a1a8c-2070x1380-jpg
_type:reference
description:A sturdy oak chair with a sleek and minimalist design.
weight:null
discountPercentage:10
dimensions:null
reviews:null
tags:null
material:null
price:900
stockLevel:18
color:null
ratings:null
name:Alpha Table
isFeaturedProduct:false
category:Table
brand:null
2:{…} 17 properties
category:Table
description:Classic wishbone chair with a dark walnut frame and cord seat.
discountPercentage:10
weight:null
isFeaturedProduct:false
brand:null
dimensions:null
color:null
ratings:null
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-94dd60c505557d564df05eda567be01c550cb2fa-1935x2580-jpg
_type:reference
price:750
stockLevel:25
reviews:null
tags:null
material:null
id:11
name:Replica Table
3:{…} 17 properties
isFeaturedProduct:false
image:{…} 2 properties
asset:{…} 2 properties
_ref:image-c4cada82ea92c0feab52e37e54ece957dcefc5ce-1919x2660-jpg
_type:reference
_type:image
price:720
id:15
ratings:null
category:Chair
brand:null
reviews:null
name:Diondre Chair
description:A tufted chair with acrylic legs for a chic, modern touch.
dimensions:null
weight:null
color:null
tags:null
material:null
discountPercentage:7
stockLevel:10
4:{…} 17 properties
category:Bed
weight:null
tags:null
material:null
name:Solid Bed
description:Durable and lightweight plastic chair for everyday use.
color:null
price:100
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-ccb5458804bfb0eb4d3e074804e8ef889e96c024-1776x1176-jpg
_type:reference
stockLevel:100
brand:null
id:17
isFeaturedProduct:false
dimensions:null
ratings:null
reviews:null
discountPercentage:25
5:{…} 17 properties
name:White Bed
description:A foldable wooden bed with a padded seat for extra comfort.
category:Bed
reviews:null
stockLevel:30
color:null
ratings:null
tags:null
material:null
dimensions:null
weight:null
id:18
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-1483cf44fe55027a13051dbc14f6d1d78f3f45cb-2069x1381-jpg
_type:reference
price:120
discountPercentage:12
isFeaturedProduct:false
brand:null
6:{…} 17 properties
discountPercentage:10
dimensions:null
tags:null
name:Red Bed
description:An acrylic dining chair with a sleek and minimalist Nordic design.
weight:null
ratings:null
id:19
price:320
brand:null
color:null
reviews:null
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-834fbc1fcacf82f1e6d39f262213468933af1431-1780x1780-jpg
_type:reference
isFeaturedProduct:true
stockLevel:20
category:Bed
material:null
7:{…} 17 properties
isFeaturedProduct:true
ratings:null
id:20
name:Blue Bed
price:780
stockLevel:5
reviews:null
tags:null
description:A modern cantilever chair with a unique floating effect.
brand:null
dimensions:null
image:{…} 2 properties
asset:{…} 2 properties
_type:reference
_ref:image-c02efe31cc7d519664e3b4c4d4608a8b812109e2-1932x1087-jpg
_type:image
discountPercentage:15
category:Bed
weight:null
color:null
material:null
8:{…} 17 properties
tags:null
id:1
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-8e3afa71668987a0516404c4a818d9538a8da023-1887x2831-jpg
_type:reference
price:1200
description:A sleek outdoor chair with natural wooden elements and a modern look.
dimensions:null
color:null
name:Chair Wibe
isFeaturedProduct:true
category:Chair
brand:null
ratings:null
material:null
discountPercentage:10
stockLevel:25
weight:null
reviews:null
9:{…} 17 properties
description:A mid-century modern chair with clean lines and durable materials.
stockLevel:20
weight:null
category:Sofa
brand:null
material:null
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_ref:image-399ec3e8d1da94aa3d269bc37d7829bab4fa5726-2070x1380-jpg
_type:reference
color:null
reviews:null
discountPercentage:15
isFeaturedProduct:true
dimensions:null
ratings:null
tags:null
id:6
name:Rapson Thirty-Nine Sofa
price:1300
10:{…} 17 properties
material:null
image:{…} 2 properties
_type:image
asset:{…} 2 properties
_type:reference
_ref:image-3c21a513be32ad2bc0d2e1f328285d55cdf58131-2070x1380-jpg
description:A lounge chair with a shell-inspired design and premium upholstery.
brand:null
color:null
tags:null
isFeaturedProduct:true
dimensions:null
ratings:null
name:Nautilus Lounge Chair
weight:null
reviews:null
id:7
price:1450
discountPercentage:12
stockLevel:10
category:Sofa
11:{…} 17 properties
12:{…} 17 properties
13:{…} 17 properties
14:{…} 17 properties
15:{…} 17 properties
16:{…} 17 properties
17:{…} 17 properties
18:{…} 17 properties
19:{…} 17 properties
20:{…} 17 properties
21:{…} 17 properties
Execution: 6ms
End-to-end: 1103ms
Save result as


Vision | Default
What's new
Sanity Create Content Mapping, Visual Editing, and Content Releases`
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 select-none">
      <h1 className="font-medium text-[24px] sm:text-[36px] font-[poppins] text-center">
        Top Picks For You
      </h1>
      <p className="text-center text-gray-400 text-[14px] sm:text-[16px] font-medium font-[poppins] mt-2">
        Find a bright idea to suit your taste with our great selection of
        suspension, floor, and table flight
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {topPicks.map((Picks, index) => (
          <div
            key={index}
            className="flex flex-col items-start cursor-pointer bg-white p-4 sm:p-6 w-[200px] sm:w-[250px] h-[300px] sm:h-[350px]"
          >
            <Image
              src={Picks.image}
              alt={Picks.name}
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="mb-4"
            />

            <div
              className={`text-black text-[14px] sm:text-[16px] font-normal font-[poppins] ${Picks.text}`}
            >
              {Picks.name}
            </div>
            <div
              className={`text-black font-medium text-[16px] sm:text-[18px] text-right font-[poppins] -mt-1`}
            >
              ${Picks.price}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-14">
        <button>
          <Link
            href="/"
            className="font-medium font-[poppins] text-[18px] sm:text-[20px] border-b-2 border-black pb-2 sm:pb-4 mt-8 sm:mt-14"
          >
            View More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TopPicks;
