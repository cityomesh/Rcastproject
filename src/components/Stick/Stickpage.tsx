"use client";
import React from "react";
import Image from "next/image";

const SmartTvPage: React.FC = () => {
  const platforms = [
    { name: "Set-Top-Box", src: "/tvvs.png" },
    { name: "Android TV", src: "/ytye.png" },
    { name: "Google TV", src: "/hytyrd.png" },
    { name: "Fire TV", src: "/tre.png" },
    { name: "Fire Stick & Android Stick", src: "/firetvstick.png" },
    { name: "Samsung TV", src: "/tvsvmsung.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-yellow-300 flex flex-col items-center justify-start px-4">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 sm:mb-8 text-center leading-tight mt-4 mt-[10rem]">
        Upgrade Your TV Experience with Rcast!
      </h1>

      <p className="bg-gradient-to-r from-pink-800 to-indigo-700 text-white text-[16px] sm:text-[18px] md:text-[20px] xl:text-[24px] text-center font-medium cursor-default mt-4 py-3 px-6 rounded-xl shadow-lg w-full sm:max-w-3xl xl:max-w-6xl mb-4 sm:mb-8">
        Rcast Sticks provide live TV channels and support popular OTT apps to 
        transform your older TVs into Smart TVs. Available across major platforms, 
        our apps bring seamless entertainment to your fingertips.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-2 px-4 mb-8">
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
            src="/vcdhg.png"
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

      <div className="p-8 bg-[#0a0f2c] from-blue-800 to-indigo-900 rounded-3xl shadow-lg w-full max-w-6xl mb-[4rem]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Available on These Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={platform.src}
                  alt={platform.name}
                  width={200}
                  height={100}
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {platform.name}
              </h3>
            </div>
          ))}
        </div>
      </div>     
    </div>
  );
};

export default SmartTvPage;
