"use client";
import React from "react";
import Image from "next/image";

const SmartTvPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-yellow-300 flex flex-col items-center justify-start px-4">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 sm:mb-8 text-center leading-tight mt-4 mt-[10rem]">
        Upgrade Your TV Experience with Rcast!
      </h1>

      <p className="bg-gradient-to-r from-pink-800 to-indigo-900 text-white text-[16px] sm:text-[18px] md:text-[20px] xl:text-[24px] text-center font-medium cursor-default mt-4 py-3 px-6 rounded-xl shadow-lg w-full sm:max-w-3xl xl:max-w-6xl mb-4 sm:mb-8">
        Rcast Sticks provide live TV channels and support popular OTT apps to 
        transform your older TVs into Smart TVs. Available across major platforms, 
        our apps bring seamless entertainment to your fingertips.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-2 px-4 mb-6">
        <div className="w-full max-w-[330px]">
          <Image
            src="/rcastss.png"
            alt="Large Facility Image"
            width={900}
            height={600}
            className="rounded-lg w-full"
            priority
          />
        </div>

        <div className="w-full max-w-[330px]">
          <Image
            src="/stickng.png"
            alt="Large Facility Image"
            width={350}
            height={350}
            className="rounded-lg w-full"
            priority
          />
        </div>
        <div className="w-full max-w-[480px]">
          <Image
            src="/reverstv.png"
            alt="Large Facility Image"
            width={900}
            height={600}
            className="rounded-lg w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SmartTvPage;
