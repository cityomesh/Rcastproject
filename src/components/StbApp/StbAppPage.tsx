"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StbAppPage = () => {
  const images = [
    { src: "/vcdhg.png", alt: "Smart TV" },
    { src: "/mnvh.png", alt: "Smart TV" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-white mt-6 p-6">
        <h2 className="text-center font-semibold text-3xl font-poppins text-blue-800 mt-[5rem]">Set-Top-Box</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="w-full max-w-[630px]">
          <Image
            src="/channeltv.png"
            alt="Large Facility Image"
            width={900}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <Carousel showThumbs={true} autoPlay infiniteLoop>
            {images.map((image, index) => (
              <div key={index} className="items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-xl font-bold mb-2">We have developed AOSP (Android Open Source Platform) STB with customized launcher to meet the TRAI regulatory compliance.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-xl font-bold mb-2">OTT Apps are available to the user and their placement is managed by our DRM Application Server or a dedicated OTA server for higher Scalability.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-8 rounded-lg shadow-md w-full max-w-[85rem] mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-xl font-bold mb-2">We have ULKA Lite App available on Google TV / Android TV play stores but it can be used only in
            our partner&apos;s network. 
            <p>Alternately, the same app can be downloaded from our Website for
            manual installation in AOSP STB or AOSP Smart TV. Android Version 7.1 to 13 are supported</p></h2>
        </div>
        
        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-xl font-bold mb-2">Rcast App is approved in Samsung App store and meets all the regulatory compliance.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-xl font-bold mb-2">The DRM is supported from Tizen OS version 3.0 and above in the models 2016 to 2024.</h2>
        </div>

        <div className="bg-[#0a0f2c] text-white  p-8 rounded-lg shadow-md w-full max-w-[85rem] mb-5 hover:bg-yellow-400 hover:text-black">
          <h2 className="text-xl font-bold mb-2">Rcast App is approved in LG App Store and approved in all the models using Web OS 3.0 and above. <p>Currently we have enabled only FTA channels and the regulatory compliance of fingerprint development is under process.</p></h2>
        </div>  
      </div>
    </div>
  );
};

export default StbAppPage;
