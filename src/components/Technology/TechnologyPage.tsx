"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

const TechnologyPage = () => {


  const [animate, setAnimate] = useState<boolean>(true);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const target = document.querySelector("#animate-section");

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const features = [
    {
      title: "Pallycon is a Multi-DRM product of INKA networks who is a pioneer in the field of Digital Rights Management Software.",
    },
    {
      title: "It supports Google Widevine, Apple Fairplay, Microsoft Playready. City Media DRM server is currently using only Google Widevine.",
    },
    {
      title: "Authorizations tokens were issued to the subscribers for each channel access as per the subscription status of the subscriber in the the DRM Application Server which is pushed from the SMS server at the time of subscription activations. ",
    },
    {
      title: "The token log server maintains the logs with subscriber id, device id, channel id, with time stamps. These logs provide subscriber viewership analysis of channels for rating of the channels which is authentic. ",
    },
    {
      title: "Pallycon provides forensic watermarking, Key rotation, Blacklisting and whitelisting of Device IDs used by subscribers.",
    },
    {
      title: " The token server logs were maintained locally by CityMedia and in the cloud by Pallycon.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-300 to-yellow-300 w-full p-10">
      

      <div className="mt-6 p-6">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800 mt-[4rem]">Technology</h2>
      </div>

      <section className="text-center container mx-auto px-8 mt-6 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10">
          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400   hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">IPTV distributes live television channels on local broadband networks without any Internet data consumption & dedicated Cable TV Network.</h3>
            </div>
          </div>
          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">            
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">All channels are transcoded to HEVC Codec supporting future 4k/8k Resolutions using AI-Nvidia GPUs offering the best quality in the Industry competing Major Global Players.</h3>
            </div>
          </div>

          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400 hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">Rcast have developed its own CDN system and not dependent on 3rd Party Vendors and they can be cascaded to save the trunk line capacity and offers regional advertisements. </h3>
            </div>
          </div>

          <div
            className="bg-white shadow-lg border border-gray-300 rounded-[20px] p-5 md:p-8 text-center cursor-pointer hover:bg-blue-400   hover:ring-2 hover:ring-[#F7961E] transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center group">
              <h3 className="text-2xl mt-4 text-[#032963] hover:text-white">Lowest Trunk Line requirement for connecting CDN servers
                150-300 Mbps for 250 SD+16 HD Channels
                500-1000 Mbps for all the 1000 Channels.</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="p-2">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800 mt-[4rem]">Subscriber Management System</h2>
      </div>

      <div className="flex flex-col mt-10 md:flex-row items-center max-w-6xl mx-auto mb-8 space-y-6 md:space-y-0 md:space-x-8" id="animate-section">
        <div
          className={`md:w-1/2 w-full h-full flex items-center justify-center ${
            isVisible ? "opacity-100 animate-slide-left" : "opacity-0"
          }`}
        >
          <Image
            src="/kiomn.png"
            alt="Team Meeting"
            width={600}
            height={400}
            className="object-contain max-w-full h-auto transition-opacity duration-1000 ease-in-out"
          />
        </div>

        <div
          className={`md:w-1/2 w-full p-6 md:p-8 ${
            isVisible ? "opacity-100 animate-slide-right" : "opacity-0"
          }`}
        >
          <h2 className="font-bold leading-8 text-black text-lg md:text-xl space-y-4">
            <p>
              • The Subscriber Management System provides multi-level reseller management and revenue sharing with all the stakeholders. It also includes enhanced CRM features for customer satisfaction. Android and iOS mobile apps are available for subscription management and instant activations.
            </p>
            <p>
              • API integration with popular broadband billing systems offers combo packs with IPTV bouquets. Additionally, API integration to the DRM Application server enables the real-time push of subscription data and customer information to meet regulatory compliances.
            </p>
            <p>
              • The system is built on a robust Linux operating system. The application and database servers can be independently hosted for scalability. Real-time scalable options like OpenStack and Kubernetes can be deployed for unlimited expansion.
            </p>
          </h2>
        </div>

        <style jsx>{`
          @keyframes slide-left {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-right {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-left {
            animation: slide-left 2s ease-out forwards;
          }

          .animate-slide-right {
            animation: slide-right 2s ease-out forwards;
          }
        `}</style>
      </div>


      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 py-9">
        <h2 className="text-center font-semibold text-2xl font-poppins text-blue-800 mb-8">DRM Token Server</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center ">
        <h2 className="font-semibold text-2xl font-poppins text-blue-800 mt-[5rem]">DRM Application Server</h2>
      </div>
      <div className="flex flex-col items-center mt-10 space-y-4 mb-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:max-w-6xl mx-auto">
          {[
            "City Media is a technical partner of Pallycon Multi-DRM encryption service Provider and developed the DRM Application Server to meet the TRAI regulatory specifications. The DRM Server is integrated with Multi-DRM Key server with Site ID, Site Key and Access Key.",
            "DRM do not have any facility to activate and deactivate a Subscriber directly from the Graphical User Interface (GUI) terminal of DRM. All activation, de-activations, bouquets and channel assignments are done only in SMS and the data is pushed to DRM server.",
            "The system is built on robust Linux operating system. The application and database servers can be independently hosted for scalability. Realtime scalable options like Openstack and Kubernetes can be deployed for unlimited expansion.",
          ].map((text, index) => (
            <div
              key={index}
              className="p-4 bg-[#0a0f2c] rounded shadow w-full transition duration-300 hover:bg-white group"
              style={{
                maxWidth: "400px",
              }}
            >
              <h2 className="text-xl sm:text-xl font-bold leading-6 sm:leading-7 text-white text-center group-hover:text-blue-500">
                <span className="block text-[20px] text-[#33CCC5] mt-2 group-hover:text-black">
                  {text}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-2xl font-poppins text-blue-800 mt-[3rem] mb-8">Transcoding and Encryption Servers</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Transcoding and Encryption is implemented in a single process the output streams are connected to the distribution Streaming / CDN servers.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">If the Encoders deployed are already supported with the required codec and file format only Encryption can be implemented saving GPU resources.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">The Transcoding / Encryption Servers can accept almost all types of input streams from the Encoders.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5 }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">IRDs which includes Multicast/Unicast, MPTS/SPTS, MPEG-2, MPEG-4, H.264, H.265, MPEG-TS, HLS, MPEG-DASH etc.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Professional Nvidia GPUs are used in Transcoder Servers and support 100 to 160 streams per server as per the Server and GPU specifications.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2"> N+1 Servers are recommended for redundancy and the configurations can be backed up and restored in the Spare Server.</h2>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">Web browser based configuration and management of the channels is available. The Server and GPU resources also can be monitored remotely. </h2>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50, delay: 0.5  }}
          className="bg-[#0a0f2c] text-white p-5 rounded-lg shadow-md w-full max-w-2xl mb-5 hover:bg-blue-400 hover:text-black"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-bold mb-2">All the Channels status including the bitrates can be monitored to ensure 24/7 operation.</h2>
        </motion.div>
      </div>


      <div className="flex flex-col items-center mt-10 space-y-4 mb-8 px-4 bg-gradient-to-r from-gray-500 via-yellow-400 to-orange-300 py-9">
        <div className="text-center">
          <h2 className="font-semibold text-3xl font-poppins text-gray-600 mt-[3rem] mb-8">Streaming/CDN Server</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full sm:max-w-7xl mx-auto">
          {[
            "Streaming/CDN(Content Delivery Network) Servers play a major role is in distribution of IPTV services. We use opensource Ubuntu 24.04 Ubuntu server Operating System. All X86-64 hardware are supported and Network Ports capacity should meet the output requirement.",
            "Hardware estimate for the concurrent subscriber connections to the CDN Server is 500 to 1000 subscribers per Core of the CPU provided network port capacity is available. Minimum RAM of 8Gb and 16Gb of storage is required.",
            "CDN servers can be cascaded without effecting any loss of quality. CDN servers are addressable from the central monitoring system with live view of the input and output stream information.",
            "CDN servers pull the source streams only when requested by any of the user hence saving the bandwidth of the trunk line. The same input stream source is multiplied to all the requested subscribers on demand.",
          ].map((text, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded shadow w-full transition duration-300 hover:bg-[#0a0f2c] group"
              style={{
                maxWidth: "400px",
              }}
            >
              <h2 className="text-xl sm:text-xl font-bold leading-6 sm:leading-7 text-white text-center group-hover:text-blue-500">
                <span className="block text-[20px] text-black mt-2 group-hover:text-white">
                  {text}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
