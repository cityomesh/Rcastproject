"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IptvCableTvPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/iptvcable.png", alt: "Image 3" },
    { src: "/ol.webp", alt: "Image 2" },
  ];

  const texts = [
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText: "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
    },
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText: "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
    },
    {
      title: "Cable TV requires Dedicated 2GB-3GB bandwidth for the Trunk Line against 310mbps to 1Gbps BW for Rcast",
      description:
        "Cable TV requires Edge QAM modulator and EDFA at each Distribution Location costing Rs.300k-400k.",
      mobileAppText: "Rcast CDN (Streaming Server) at Rs.15k-50k.",
      moreInfo:
        "Distribution of Digital Cable TV requires dedicated Dark fiber Network and WDM couplers and Decouplers which adds to the CAPEX of distribution.",
      footerText:
        "Rcast distributes the IPTV signal in existing local broadband Networks and cost of dedicated high power laser network can be avoided.",
    },
  ];


  const cards = [
    {
      description:
        'IPTV+Internet+Phone.',
        image: "/cablestvs.png",
      },
    {
      description:
        'Only Cable TV.',
        image: "/cablestv2.png",
    },
  ];


  return (
    <div className="mt-[3rem] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <Carousel
            showThumbs={true}
            autoPlay
            infiniteLoop
            onChange={(index) => setActiveIndex(index)}
          >
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center mt-[3rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={700}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mb-8">
          <div className="p-2 border-2 border-gray-300 bg-blue-200 rounded-lg shadow-xl mb-4 transition-all hover:bg-blue-500 hover:scale-105">
            <p className="text-xl font-bold text-black mb-2">
              {texts[activeIndex]?.title}
            </p>
          </div>

          <div className="p-2 border-2 border-gray-300 bg-green-200 rounded-lg shadow-xl mb-4 transition-all hover:bg-green-400 hover:scale-105">
            <p className="text-xl font-bold text-black">{texts[activeIndex]?.description}</p>
          </div>

          <div className="p-2 border-2 border-gray-300 bg-yellow-200 rounded-lg shadow-xl mb-4 transition-all hover:bg-yellow-300 hover:scale-105">
            <div className="text-xl font-bold text-black">
              {texts[activeIndex]?.mobileAppText}
            </div>
          </div>

          <div className="p-2 border-2 border-gray-300 bg-red-200 rounded-lg shadow-xl mb-4 transition-all hover:bg-red-400 hover:scale-105">
            <p className="text-xl font-bold text-black">{texts[activeIndex]?.moreInfo}</p>
          </div>

          <div className="p-2 border-2 border-gray-300 bg-purple-200 rounded-lg shadow-xl transition-all hover:bg-purple-400 hover:scale-105">
            <p className="text-xl font-bold text-black">{texts[activeIndex]?.footerText}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-md bg-white max-w-2xl h-[400px] p-3 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-[70%] max-w-[350px] mx-auto">
                <img
                  src={card.image}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-3 p-4 h-[30%] flex items-center justify-center">
                <p className="text-2xl tracking-widest text-gray-600 text-center font-bold">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IptvCableTvPage;
