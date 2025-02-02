const ProductCard = ({ imageSrc, imageAlt, title, linkHref }) => {
  return (
    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 mb-8 lg:mb-0">
      <figure className="w-full max-w-[450px] h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </figure>
      <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl font-poppins text-center lg:text-left mt-4">
        {title}
      </h3>
      <Link href={linkHref} passHref>
        <button className="mt-2 text-lg sm:text-xl lg:text-2xl font-medium font-poppins border-b-2 border-black py-1 hover:border-transparent transition-all duration-300">
          View More
        </button>
      </Link>
    </div>
  );
};

const TableSection = () => {
  return (
    <section className="flex flex-col md:flex-row bg-[#F4F4F4] justify-around mx-auto p-8 sm:p-12 lg:p-16">
      <ProductCard
        imageSrc="/sideTable/side table.png"
        imageAlt="Side Table"
        title="Side Table"
        linkHref="/"
      />
      <ProductCard
        imageSrc="/sideTable/Cloud sofa.png"
        imageAlt="Cloud Sofa"
        title="Cloud Sofa"
        linkHref="/"
      />
    </section>
  );
};