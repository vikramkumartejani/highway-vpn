import React from "react";
import { GlobeDemo } from "./World";
import Image from "next/image";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full bg-[#001125] text-white h-full relative px-[15px] md:px-10">
      {/* Background images */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/hero-bg.svg"
          alt="hero-bg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <Image
          src="/herobglines.svg"
          alt="hero lines"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 opacity-70"
        />
        <Image
          src="/gg.svg"
          alt="background design"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 opacity-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Main Content */}
      <div className="max-w-[1240px]  w-full mx-auto gap-10 lg:gap-5 flex lg:flex-row flex-col items-center justify-between relative z-20">
        <div className="flex flex-col w-full">
          <div className=" pb-[100px]">
            <Header />
          </div>
          <div className="w-full pb-[20px] lg:pb-[100px]">
            <h1 className="text-[40px] md:text-[64px] md:leading-[78px] font-semibold uppercase">
              Ultra-low <br /> latency vpn
            </h1>
            <h3 className="mt-6 md:mt-12 text-[#01E4FD] text-[20px] sm:text-[24px] leading-[24px] font-semibold uppercase">
              built for competitive gaming
            </h3>
            <a href="/#pricing" className="w-fit h-fit">
              <button className="mt-6 md:mt-12 text-white text-[16px] sm:text-[18px] leading-[18px] font-medium w-[214px] h-[45px] sm:h-[54px] rounded-[70px] bgcustomone  transition duration-300 capitalize">
                try for free
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-full ">
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
