"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const SmartTvPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/mcnbvb.png", alt: "Smart TV" },
    { src: "/ytye.png", alt: "Smart TV" },
    { src: "/iuysa.png", alt: "Smart TV" },
    { src: "/devsg.png", alt: "Smart TV" },
    { src: "/firetvstick.png", alt: "Smart TV" },
  ];

  const texts = [
    {
      title: "Rcast Smart TV App for connected smart televisions. Rcast App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores. and LG TV is under process.",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under process.",
      mobileAppText: "My Rcast App for Subscription Management and on-demand subscription of addon packs or a-la-carte channels. This app is available on Android and i-Phone Mobile App Stores.",
      footerText:
        "Rcast STB's and Sticks provide live tv channels and also supports popular OTT Apps for upgrading older tvs to smart tvs.",
    },
    {
      title: "Rcast Smart TV App for connected smart televisions. Rcast App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores. and LG TV is under process.",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under process.",
      mobileAppText: "My Rcast App for Subscription Management and on-demand subscription of addon packs or a-la-carte channels. This app is available on Android and i-Phone Mobile App Stores.",
      footerText:
        "Rcast STB's and Sticks provide live tv channels and also supports popular OTT Apps for upgrading older tvs to smart tvs.",
    },
    {
      title: "Rcast Smart TV App for connected smart televisions. Rcast App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores. and LG TV is under process.",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under process.",
      mobileAppText: "My Rcast App for Subscription Management and on-demand subscription of addon packs or a-la-carte channels. This app is available on Android and i-Phone Mobile App Stores.",
      footerText:
        "Rcast STB's and Sticks provide live tv channels and also supports popular OTT Apps for upgrading older tvs to smart tvs.",
    },
    {
      title: "Rcast Smart TV App for connected smart televisions. Rcast App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores. and LG TV is under process.",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under process.",
      mobileAppText: "My Rcast App for Subscription Management and on-demand subscription of addon packs or a-la-carte channels. This app is available on Android and i-Phone Mobile App Stores.",
      footerText:
        "Rcast STB's and Sticks provide live tv channels and also supports popular OTT Apps for upgrading older tvs to smart tvs.",
    },
    {
      title: "Rcast Smart TV App for connected smart televisions. Rcast App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores. and LG TV is under process.",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under process.",
      mobileAppText: "My Rcast App for Subscription Management and on-demand subscription of addon packs or a-la-carte channels. This app is available on Android and i-Phone Mobile App Stores.",
      footerText:
        "Rcast STB's and Sticks provide live tv channels and also supports popular OTT Apps for upgrading older tvs to smart tvs.",
    },
  ];

  const platforms = [
    { name: 'Android TV', src: ["/ytye.png"] },
    { name: 'Google TV', src: ["/hytyrd.png"] },
    { name: 'Fire TV', src: ["/tre.png"] },
    { name: 'Fire Stick & Android Stick', src: ["/stickfire.png"] },
    { name: 'Samsung TV', src: ["/tvsvmsung.png"] },
    { name: 'Set-Top-Box', src: ["/tvvs.png"] },
  ];

  const contentSections = [
    { src: "/swtr.png", alt: "SMART TV" },
    { src: "/oldtv.png", alt: "SMART TV" },
    { src: "/obn.png", alt: "Smart TV" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100 flex flex-col items-center justify-center px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[8rem]">
      <div>
        <Carousel
          showThumbs={true}
          autoPlay
          infiniteLoop
          interval={1000}
          onChange={(index) => setActiveIndex(index)}
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="rounded-lg mt-4"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left">
        <div className="p-3 border-2 border-gray-300 bg-blue-400 mb-2 rounded-lg shadow-xl transition-all hover:bg-blue-500 hover:scale-105">
          <p className="text-xl font-bold text-black">
            {texts[activeIndex]?.title.split("Rcast Smart TV")[0]}
            <span className="text-2xl font-bold text-white">Rcast Smart TV</span>
            {texts[activeIndex]?.title.split("Rcast Smart TV")[1]}
          </p>
        </div>

        <div className="p-3 border-2 border-gray-300 bg-green-500 mb-2 rounded-lg shadow-xl transition-all hover:bg-green-400 hover:scale-105">
          <p className="text-xl font-bold text-black">
            {texts[activeIndex]?.description.split("Rcast Mini")[0]}
            <span className="text-2xl font-bold text-white">Rcast Mini</span>
            {texts[activeIndex]?.description.split("Rcast Mini")[1]}
          </p>
        </div>

        <div className="p-3 border-2 border-gray-300 bg-yellow-400 mb-2 rounded-lg shadow-xl transition-all hover:bg-yellow-300 hover:scale-105">
          <div className="text-xl font-bold text-black">
            {texts[activeIndex]?.mobileAppText.split("My Rcast App")[0]}
            <span className="text-2xl font-bold text-white">My Rcast App</span>
            {texts[activeIndex]?.mobileAppText.split("My Rcast App")[1]}
          </div>
        </div>
        
        <div className="p-3 border-2 border-gray-300 bg-purple-300 rounded-lg shadow-xl transition-all hover:bg-purple-400 hover:scale-105 mb-4">
          <p className="text-xl font-bold text-black">{texts[activeIndex]?.footerText}</p>
        </div>
      </div>
    </div>

      <div className="p-6 bg-[#0a0f2c] rounded-[20px]">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Rcast App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores and LG TV is under process</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg border-2 border-gray-200"
            >
              <div className="flex items-center justify-center h-[300px] w-full">
                {platform.src.map((imageSrc, i) => (
                  <Image
                    key={i}
                    src={imageSrc}
                    alt={`${platform.name} ${i + 1}`}
                    width={400}
                    height={400}
                    className="rounded-md object-contain"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center h-[50px] w-full">
                <p className="text-xl text-center font-bold">{platform.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-2 mb-[4rem]">
        <h1 className="text-4xl font-bold text-center text-blue-900 mt-8 mb-8">
          Future of Television in India
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8">
            {contentSections.map((section, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={section.src}
                    alt={section.alt}
                    width={index === 2 ? 480 : 120}
                    height={index === 2 ? 488 : 120}
                    className={`rounded-[1.5rem] ${
                      index === 2 ? "w-[24rem] h-[16rem]" : "w-[20rem] h-[14rem]"
                    }`}
                  />
                </div>

                {index < contentSections.length - 1 && (
                  <div className="hidden lg:block text-[60px] font-bold text-blue-900">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-8 px-4">
            {[
              "The Television sets are being upgraded at a very fast pace.",
              "4K Smart TVs are common today and the traditional Set-top-Boxes are unable to upgrade to the standards of 4K Televisions.",
              "Smart TV share of new Television sales is more then 95%.",
              "Rcast 4K compatible distribution system has TRAI approved Virtual STB Application for Smart TVs and Smart Phones.",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 50,
                  delay: index * 0.3,
                }}
                className={`p-5 rounded-lg shadow-md w-full max-w-2xl hover:scale-105 transition-transform ${
                  text ===
                  "Rcast 4K compatible distribution system has TRAI approved Virtual STB Application for Smart TVs and Smart Phones."
                    ? "bg-gradient-to-r from-green-500 to-yellow-500"
                    : "bg-blue text-black hover:bg-blue-200 hover:text-black"
                }`}
              >
                <h2 className="text-xl font-bold">{text}</h2>
              </motion.div>
            ))}
          </div>

      </div>

    </div>
  );
};

export default SmartTvPage;
