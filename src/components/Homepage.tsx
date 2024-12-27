"use client";
import React, { useState } from "react";
import Image from "next/image";
import { WifiHigh } from "@phosphor-icons/react";
import Link from "next/link";

const Homepage = () => {

  const [showImages, setShowImages] = useState(false);

  const servicesproject = [
    {
      description: "• We distribute nearly 700 licensed Satellite Channels and can include local channels on select CDN servers as per requirements of distributors."
    },
    {
      description: "• We hold Interconnect Agreements with all Major Broadcasters including Star TV, ZEE, SONY, TV18, ETV, SUN, Gemini, Times, India Today, Discovery, OTV, NDTV and others."
    },
    {
      description: "• We offer best value Regional and Multilingual Packages, which includes 300+ Free to Air Channels."
    },
    {
      description: "• The channels are organized language wise for easy navigation and sorted in genres of Entertainment, Movies, News, Infotainment, Music, Kids, Devotional, Sports and Regional."
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to-yellow-200 w-full p-10 rounded-lg shadow-lg relative flex items-center justify-center mt-[5rem] text-white">
        <div className="relative w-full max-w-7xl px-6 py-6 text-center">
          <div className="relative space-y-6">
            <div
              className="text-[20px] font-extrabold uppercase xl:text-[90px] text-red-600"
            >
              The Future of <span className="text-red-600 font-extrabold">Entertainment</span> is <span className="text-red-600 font-extrabold ">Here</span> 
            </div>

            <div className="flex justify-center space-x-5 flex-wrap">              
              <div className="px-8 flex items-center justify-between gap-8">
                <ul className="list-none p-0 m-0 flex flex-wrap gap-5">
                  <li className="px-8 py-4 text-2xl font-bold text-white bg-[#0a0f2c] rounded-xl hover:bg-red-500 w-58 flex-shrink-0">
                    <Link href="/smarttv">Smart TV</Link>
                  </li>
                  <li className="px-8 py-4 text-2xl font-bold text-white bg-[#0a0f2c] rounded-xl hover:bg-red-500 w-58 flex-shrink-0">
                    <Link href="/smartmobile">Smart Mobile</Link>
                  </li>
                  <li className="px-8 py-4 text-2xl font-bold text-white bg-[#0a0f2c] rounded-xl hover:bg-red-500 w-58 flex-shrink-0">
                    <Link href="/stb">STB</Link>
                  </li>
                  <li className="px-8 py-4 text-2xl font-bold text-white bg-[#0a0f2c] rounded-xl hover:bg-red-500 w-58 flex-shrink-0">
                    <Link href="/stb">Stick</Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-3xl text-red-600">
              No more <span className="font-bold text-red-500">CABLE</span> worries.<br />
              GO Wireless. Use 
              <span className="font-bold text-red-500 inline-flex items-center ml-2">
                Wi-Fi
                <WifiHigh
                  size={42}
                  className="ml-2 text-black font-extrabold"
                />
              </span>
            </p>
            <p className="text-4xl font-semibold text-red-600">
              With <span className="text-yellow-500">4K Ultra HD</span> support
            </p>
            <div className="relative mx-auto max-w-xs sm:max-w-5xl">
              <div className="absolute w-full h-full bg-red-500 skew-x-12 scale-x-150 rounded-t-[50%] rounded-b-[50%]"></div>
                <p className="relative text-3xl sm:text-6xl font-extrabold uppercase text-white py-3 sm:py-6 px-4 sm:px-8">
                  1000+ IPTV Channels
                </p>
              </div>
            </div>

            <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">
              <div className="flex justify-center items-center">
                <Image src="/STARSPORTS1HD.png" alt="ETVHD" width={100} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>             
              <div className="flex justify-center items-center">
                <Image src="/SonyMAXHD.png" alt="SonyMAXHD" width={60} height={10} className="mt-4 object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ETVHD.png" alt="ETVHD" width={100} height={100} className="mt-4 object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/plusstar.png" alt="COLORSRISTHEY" width={500} height={200} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/hujhu.png" alt="COLORSRISTHEY" width={80} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>             
              <div className="flex justify-center items-center">
                <Image src="/bvcz.png" alt="COLORSRISTHEY" width={300} height={400} className="object-contain max-w-[300px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/klknm.png" alt="ZEETVHD" width={70} height={100} className="mt-4 object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/BBCWorldNews.png" alt="ETVHD" width={130} height={120} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SUNTV.png" alt="SWSA" width={150} height={150} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ColorsHD.png" alt="Physician" width={300} height={400} className="object-contain max-w-[100px] max-h-[300px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ZEETVHD.png" alt="ZEETVHD" width={100} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
            </div>

            <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">
              <div className="flex justify-center items-center">
                <Image src="/AsianetMoviesHD.png" alt="Physician" width={90} height={90} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/loil.png" alt="ETVHD" width={300} height={100} className="mt-2 object-contain max-w-[120px] max-h-[100px]" />
              </div>              
              <div className="flex justify-center items-center">
                <Image src="/COLORSINFINITY.png" alt="SonyMAXHD" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SONYTEN1HD.png" alt="ETVHD" width={80} height={10} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/DISCOVERYHD.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/STARSPORTS1HD.png" alt="COLORSRISTHEY" width={100} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>             
              <div className="flex justify-center items-center">
                <Image src="/AAZTAKHD.png" alt="COLORSRISTHEY" width={100} height={100} className="object-contain max-w-[200px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Tarang.png" alt="ZEETVHD" width={70} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/MazhavilManorama.png" alt="ETVHD" width={130} height={120} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/wion.png" alt="SWSA" width={150} height={150} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SansadTVHD.png" alt="Physician" width={300} height={400} className="object-contain max-w-[100px] max-h-[300px]" />
              </div>
            </div>

            <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">
             <div className="flex justify-center items-center">
                <Image src="/VijayHD.png" alt="ZEETVHD" width={100} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/COLORSRISTHEY.png" alt="Physician" width={100} height={90} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/TIMESNOWWORLDHD.png" alt="ETVHD" width={300} height={100} className="mt-2 object-contain max-w-[120px] max-h-[100px]" />
              </div>              
              <div className="flex justify-center items-center">
                <Image src="/DDNATIONALHD.png" alt="ETVHD" width={200} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/SONYSABHD.png" alt="Physician" width={70} height={10} className="object-contain max-w-[130px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/PTCPunjabhi.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/NICKHD.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px] ml-2" />
              </div>             
              <div className="flex justify-center items-center">
                <Image src="/SONYBBCEARTHHD.png" alt="COLORSRISTHEY" width={90} height={100} className="object-contain max-w-[180px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/COLORSCINEPLEXHD.png" alt="ETVHD" width={140} height={120} className="object-contain max-w-[120px] max-h-[100px] mt-[-1rem]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/NDTV24X7.png" alt="SWSA" width={200} height={150} className="ml-4 object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/INDIATODAY.png" alt="SonyMAXHD" width={100} height={100} className="ml-2 object-contain max-w-[120px] max-h-[100px]" />
              </div>
            </div>

            <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">
              <div className="flex justify-center items-center">
                <Image src="/ZeeBangla.png" alt="ZEETVHD" width={100} height={10} className="object-contain max-w-[100px] max-h-[80px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/B4UMovies.png" alt="Physician" width={200} height={90} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/ABPSanjha.png" alt="ZEETVHD" width={200} height={100} className="object-contain max-w-[100px] max-h-[90px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/kkoko.png" alt="ETVHD" width={200} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/DDNEWSHD.png" alt="ZEETVHD" width={100} height={10} className="object-contain max-w-[100px] max-h-[80px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/NATGEOWILDHD.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/INDIATVPRIMEHD.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px] ml-2" />
              </div>             
              <div className="flex justify-center items-center">
                <Image src="/SVBCTTD128.png" alt="COLORSRISTHEY" width={90} height={100} className="object-contain max-w-[180px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Aastha.png" alt="ETVHD" width={140} height={120} className="object-contain max-w-[120px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/StarGold2HD.png" alt="SWSA" width={200} height={150} className="ml-4 object-contain max-w-[100px] max-h-[100px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/Aljazeera.png" alt="Physician" width={200} height={90} className="ml-2 object-contain max-w-[120px] max-h-[100px]" />
              </div>
            </div>
    
            <div className="w-full rounded-[40px] p-2">
              {!showImages && (
                 <div className="flex justify-center">
                 <button
                   onClick={() => setShowImages(true)}
                   className="text-white text-lg font-medium px-4 py-2 border bg-red-600 rounded-[20px]"
                 >
                   See More
                 </button>
               </div>
              )}

              {showImages && (
                <>
                <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">  
                  <div className="flex justify-center items-center">
                    <Image src="/nchch.png" alt="Physician" width={200} height={90} className="object-contain max-w-[180px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/ddindiahD.png" alt="ZEETVHD" width={90} height={10} className="object-contain max-w-[100px] max-h-[70px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/DisneyChannelHD.png" alt="ETVHD" width={160} height={100} className="object-contain max-w-[150px] max-h-[90px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/ndsa.png" alt="Physician" width={200} height={90} className="object-contain max-w-[130px] max-h-[120px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/staroo.png" alt="ZEETVHD" width={200} height={10} className="ml-8 object-contain max-w-[160px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/ikiui.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[100px] ml-8" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/jm.png" alt="ZEETVHD" width={70} height={10} className="object-contain max-w-[140px] max-h-[80px]" />
                  </div>           
                  <div className="flex justify-center items-center">
                    <Image src="/AAZTAKHD.png" alt="COLORSRISTHEY" width={90} height={100} className="object-contain max-w-[180px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/hhhbvb.png" alt="ETVHD" width={140} height={120} className="object-contain max-w-[120px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/oioioi.png" alt="SWSA" width={200} height={100} className="ml-4 object-contain max-w-[200px] max-h-[90px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/rebulic.png" alt="Physician" width={200} height={90} className="ml-4 object-contain max-w-[120px] max-h-[100px]" />
                  </div>
                </div>

                <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">  
                  <div className="flex justify-center items-center">
                    <Image src="/lmnk.png" alt="Physician" width={200} height={90} className="object-contain max-w-[120px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/nbvcv.png" alt="ZEETVHD" width={250} height={10} className="object-contain max-w-[160px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/mnmb.png" alt="ZEETVHD" width={200} height={100} className="object-contain max-w-[200px] max-h-[80px]" />
                  </div>                          
                  <div className="flex justify-center items-center">
                    <Image src="/ubvcx.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[120px] max-h-[120px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/iuy.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[100px] max-h-[100px]" />
                  </div>             
                  <div className="flex justify-center items-center">
                    <Image src="/jnbj.png" alt="COLORSRISTHEY" width={90} height={100} className="object-contain max-w-[90px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/otre.png" alt="ETVHD" width={120} height={120} className="object-contain max-w-[80px] max-h-[90px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/uyth.png" alt="SWSA" width={200} height={150} className="ml-6 object-contain max-w-[150px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/ktvHD.png" alt="Physician" width={200} height={90} className="ml-8 object-contain max-w-[120px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/MazhavilManorama.png" alt="Physician" width={200} height={90} className="ml-8 object-contain max-w-[100px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/uyuy.png" alt="ZEETVHD" width={250} height={10} className="object-contain ml-4 max-w-[150px] max-h-[100px]" />
                  </div>
                </div>

                <div className="items-center justify-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 xl:gap-[8rem] sm:gap-[2rem] mt-4">  
                  <div className="flex justify-center items-center">
                    <Image src="/jbvcx.png" alt="ETVHD" width={90} height={100} className="object-contain max-w-[100px] max-h-[90px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/etvnewa.png" alt="Physician" width={200} height={90} className="object-contain max-w-[130px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/ppooplk.png" alt="ZEETVHD" width={200} height={100} className="object-contain max-w-[250px] max-h-[90px]" />
                  </div>                          
                  <div className="flex justify-center items-center">
                    <Image src="/vxcbb.png" alt="COLORSRISTHEY" width={300} height={100} className="object-contain max-w-[200px] max-h-[120px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/SONYTEN1HD.png" alt="COLORSRISTHEY" width={200} height={100} className="object-contain max-w-[90px] max-h-[100px]" />
                  </div>             
                  <div className="flex justify-center items-center">
                    <Image src="/StarKirnoHD.png" alt="COLORSRISTHEY" width={90} height={100} className="object-contain max-w-[90px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/PravahHD.png" alt="ETVHD" width={120} height={120} className="object-contain max-w-[90px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/mnbn.png" alt="SWSA" width={300} height={150} className="ml-4 object-contain max-w-[180px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/unhgv.png" alt="Physician" width={200} height={90} className="ml-2 object-contain max-w-[120px] max-h-[100px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/Suvarna_HD.png" alt="ZEETVHD" width={400} height={300} className="object-contain max-w-[250px] max-h-[290px]" />
                  </div>
                </div>
                </>
              )}
            </div>

            <h2 className="text-gray-800 text-[16px] md:text-[20px] xl:text-[30.556px] text-center font-semibold cursor-default mt-4">
              Bouquets and Channels
            </h2>

            <div className="container mx-auto max-w-8xl lg:w-full xl:w-full p-4 rounded-[20px] my-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[7rem]">
                {servicesproject.map((service, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start justify-between h-auto w-full sm:w-[18rem] rounded-[20px] text-[#032963] text-left p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:text-white ${
                      index === 0
                        ? "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-300"
                        : index === 1
                        ? "hover:bg-gradient-to-r hover:from-red-500 hover:to-red-300"
                        : index === 2
                        ? "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300"
                        : "hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300"
                    }`}
                  >
                    <p className="tracking-wider text-sm md:text-lg font-bold leading-relaxed transition-colors duration-300 hover:text-white">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>       
      </div>
    </>
  );
};

export default Homepage;
