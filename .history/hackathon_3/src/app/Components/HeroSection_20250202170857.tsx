import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] max-w-screen-xl mx-auto h-screen flex flex-col sm:flex-row items-center sm:justify-between px-6 md:px-24 lg:px-32 select-none">
      
      {/* Text Section */}
      <div className="relative w-full sm:w-[440px] text-center sm:text-left">
        <h3 className="text-black font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[64px] leading-tight sm:leading-snug md:leading-[80px]">
          Rocket Single Seater
        </h3>
        
        <button 
          className="mt-4 text-black font-medium font-poppins transform transition-transform duration-300 hover:scale-105 text-[16px] sm:text-[20px] px-4 py-2"
          aria-label="Shop Now"
        >
          Shop Now
        </button>
        
        <hr className="mt-2 w-[60px] sm:w-[121px] border-2 border-black" />
      </div>

      {/* Image Section */}
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
        <Image
          src="/hero/Rocket_single_seater.png"
          alt="Rocket Single Seater"
          width={853}
          height={900}
          priority
          className="w-full sm:w-[400px] md:w-[700px] lg:w-[850px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
