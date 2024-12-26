"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SmartAppPage: React.FC = () => {
  const services = [
    {
      description: "All Smart TVs, Smart STBs, Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial or Lan Cables.",
      image: "/smrt.png",
    },
    {
      description: "All types of Last Mile Distribution Networks are supported, including GPON, EPON, 1G/10G LAN, Air Fiber, Point-to-Point, and Point-to-Multipoint Wireless Links.",
      image: "/resa.png",
    },
    {
      description: "Rcast CDN Servers are available in various configurations to suit Small and Large Networks, supporting 8000 to 100,000 concurrent users.",
      image: "/rem.png",
    },
    {
      description: "Rcast Smart TV App for connected Smart Televisions ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under Process.",
      image: "/wi.png",
    },
  ];

  const contentSections = [
    { src: "/etv.png", alt: "CRT Tube TV", label: "CRT Tube TV" },
    { src: "/lcd.png", alt: "LCD / LED TV", label: "LCD / LED TV" },
    { src: "/smarttv.png", alt: "Smart TV", label: "SMART TV" },
  ];

  const infoSections = [
    "The Television sets are being upgraded at a very fast pace. 4K Smart TVs are common today, and the traditional Set-top-Boxes are unable to upgrade to the standards of 4K Televisions.",
    "Smart TV share of new Television sales is more than 95%.",
    "Rcast 4K compatible distribution system has TRAI-approved Virtual STB Application for Smart TVs and Smart Phones.",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/yte.png", alt: "Smart TV" },
    { src: "/rem.png", alt: "Smart TV" },
    { src: "/resa.png", alt: "Resa" },
    { src: "/wi.png", alt: "Resa" },
  ];

  const texts = [
    {
      title: "Rcast Smart TV App for connected Smart Televisions, ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on-the-fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions, ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on-the-fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions, ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on-the-fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
    {
      title: "Rcast Smart TV App for connected Smart Televisions, ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under Process",
      description:
        "Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.",
      mobileAppText:
        "My Rcast App for Subscription Management and on-the-fly online subscription of addon packs or channels on demand.",
      moreInfo:
        "Available in Android and I-Phone Mobile App Stores.",
      footerText:
        "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-6 sm:px-6 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[8rem]">
        <div>
          <Carousel showThumbs={true} autoPlay infiniteLoop onChange={setActiveIndex}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mt-3">
          <h1 className="text-[18px] font-bold text-gray-800 mb-4">
            {texts[activeIndex]?.title}
          </h1>
          <p className="text-gray-600 text-[18px] mb-4">{texts[activeIndex]?.description}</p>
          <div className="text-3xl font-semibold text-[18px] text-green-600 mb-4">
            {texts[activeIndex]?.mobileAppText}
          </div>
          <p className="text-gray-500 mb-6 text-[18px]">{texts[activeIndex]?.moreInfo}</p>
          <p className="text-sm text-gray-400 text-[18px]">
            {texts[activeIndex]?.footerText}
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 flex flex-col justify-center mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a0f2c] rounded-lg shadow-lg p-6 flex flex-col justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 w-64 h-80"
            >
              <Image
                src={service.image}
                alt={service.description}
                width={120}
                height={80}
                className="mt-4 w-34 h-24 object-contain rounded-xl"
              />
              <p className="mt-2 text-white text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100 flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8 mt-28">
          Future of Television in India
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {contentSections.map((section, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={section.src}
                  alt={section.alt}
                  width={240}
                  height={244}
                  className="w-[25rem] h-[18rem] rounded-[1.5rem]"
                />
                <p className="mt-2 text-lg font-medium">{section.label}</p>
              </div>

              {index < contentSections.length - 1 && (
                <div className="hidden lg:block text-[60px] font-bold text-blue-900">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {infoSections.map((info, index) => (
          <div
            key={index}
            className="mt-8 mx-auto max-w-xl text-center text-blue-900 border-t-4 border-l-4 border-b-4 border-gray-300 bg-gray-100 p-6 rounded-lg hover:bg-red-100 hover:border-gray-600 transition duration-300"
          >
            <p className="text-2xl font-bold">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartAppPage;
