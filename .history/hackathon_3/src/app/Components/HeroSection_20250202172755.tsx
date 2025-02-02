import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] w-full h-screen flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 select-none">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 lg:w-[440px] text-center sm:text-left">
        <h3 className="text-black font-medium Poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose">
          Rocket single seater
        </h3>
        <h2 className="mt-4 text-black font-medium Poppins text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed transform transition-transform duration-300 cursor-pointer hover:scale-105">
          Shop Now
        </h2>
        <hr className="mt-2 sm:mt-4 w-16 sm:w-24 border-1.5 border-black mx-auto sm:mx-0" />
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
        <Image
          src="/hero/Rocket single seater.png"
          alt="Rocket single seater"
          width={500}
          height={500}
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[853px] h-auto"
          priority // Add priority for above-the-fold images
        />
      </div>
    </section>
  );
};

export default HeroSection;