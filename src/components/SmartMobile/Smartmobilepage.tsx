"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Item {
  label: string;
  image: string;
  alt: string;
}

const Smartmobilepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const images = [
    { src: "/iphonexs.webp", alt: "Smart TV" },
    { src: "/mcnbvb.png", alt: "Smart TV" },
    { src: "/bvhds.png", alt: "Smart TV" },
    { src: "/resa.png", alt: "Resa" },
    { src: "/ytye.png", alt: "Resa" },
  ];
  
  const services = [
    {
      description: "All Smart TVs, Smart STBs, Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial or Lan Cables.",
    },
    {
      description: "All types of Last Mile Distribution Networks are supported, including GPON, EPON, 1G/10G LAN, Air Fiber, Point-to-Point, and Point-to-Multipoint Wireless Links.",
    },
    {
      description: "Rcast CDN Servers are available in various configurations to suit Small and Large Networks, supporting 8000 to 100,000 concurrent users.",
    },
    {
      description: "Rcast Smart TV App for connected Smart Televisions ULKA Lite App is available in Android TV, Google TV, Fire TV, Fire Stick, Samsung TV App Stores, and LG TV is under Process.",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-blue-200 to-yellow-200 min-h-screen w-full flex flex-col">
      <div className="mt-6 p-6">
        <h2 className="text-center font-semibold text-4xl font-poppins text-blue-800 mt-[5rem]">
          Smart Apps for Mobile
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-full max-w-[830px]">
            <Image
              src="/hindhiuka.png"
              alt="Large Facility Image"
              width={1500}
              height={600}
              objectFit="cover"
              priority
            />
          </div>
          <div className="w-full max-w-[260px]">
            <Image
              src="/listchannel.png"
              alt="Large Facility Image"
              width={1500}
              height={300}
              objectFit="cover"
              priority
            />
          </div>
        </div>

      <div className="flex flex-wrap justify-center gap-5 mt-8 px-4">
        {[
          "Rcast App for the Android Mobiles is available in all the major mobile play stores.",
          "The App meets all the regulatory compliances. The channels are available only within the network of the network operator and designated CDN.",
          "Rcast App for the IOS i-Phones is under development and hardware support is available for Google Widevine without using Apple Fairplay.",
          "My Rcast App is available for Android and Apple mobile phones and can be used by customers for Subscription management.",
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
            className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl hover:bg-blue-400 hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{text}</h2>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-6 items-center mt-[3rem] px-4">
        <div className="w-full max-w-[340px]">
          <Image
            src="/ulkalitetvd.png"
            alt="Large Facility Image"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[330px]">
          {/* <Image
            src="/imagetest.png"
            alt="Large Facility Image"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          /> */}
          <Image
            src="/ulkaphone.png"
            alt="Large Facility Image"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[330px]">
          <Image
            src="/ulkaminis.png"
            alt="Large Facility Image"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full max-w-[350px]">
          <Image
            src="/channelstvs.png"
            alt="Large Facility Image"
            width={1500}
            height={600}
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-8 px-4 mb-6">
        {[
          "My Rcast App is available for Android and Apple mobile phones and can be used by customers for Subscription Management, which includes Renewals and on-demand subscription of Packages and a-la-carte Channels, without depending on the reseller.",
          "My Rcast App can be activated in the subscriber mobile phones by scanning the barcode displayed on the TV when the subscriber tries to view an unsubscribed channel.",
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
            className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl hover:bg-blue-400 hover:text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{text}</h2>
          </motion.div>
        ))}
      </div>
        

      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8 mt-8 bg-red-400 text-white p-5 rounded-lg shadow-md w-full max-w-[85rem] hover:bg-blue-400 hover:text-black">
          Rcast Mini Mobile App is available in Android Smart Phones and I-Phone is under Process.
        </h1>
      </div>

    </div>
  );
};

export default Smartmobilepage;
