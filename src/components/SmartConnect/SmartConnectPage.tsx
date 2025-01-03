"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SmartConnectPage = () => {

  const services = [
    {
      src: "dgfvcz.png",
    },
    {
      src: "online.png",
    },
    {
      src: "ssta.png",
    },
    {
      src: "asa.png",
    },
    {
      src: "style.png",
    },
    {
      src: "dst.png",
    },
    {
      src: "dis.png",
    },
    {
      src: "swsa.png",
    },
    {
      src: "qwa.png",
    },
    {
      title: "",
      src: "ser.png",
    },
  ];

  const servicesproject = [
    {
      description: "• All Smart TVs, Smart STBs, Smart Sticks can be connected to Home Wi-Fi Network without Fiber, Coaxial, or Lan Cables."
    },
    {
      description: "• All types of Last Mile Distribution Networks are supported, including GPON, EPON, 1G/10G Lan, Air Fiber, Point-to-Point, and Point-to-Multipoint Wireless Links."
    },
    {
      description: "• Rcast CDN Servers are available in various configurations to suit Small and Large Networks with 1G Copper and 1G/10G/40G Fiber ports supporting 8000 to 100,000 concurrent users."
    },
    {
      description: "• All types of Last Mile Distribution Networks are supported, including GPON, EPON, 1G/10G Lan, Air Fiber, Point-to-Point, and Point-to-Multipoint Wireless Links."
    },
    {
      description: "My Rcast App for Subscription Management and on the fly online subscription of addon packs or channels on demand."
    },
    {
      description: "Rcast STBs and Sticks supporting popular OTT Apps available for upgrading Older TVs to Smart TVs."
    }
  ];
  
  return (
    <div className="bg-white w-full p-10">
      <section className="container mx-auto px-4 flex flex-col justify-center mt-[8rem] mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 flex flex-col justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 w-64 h-50`}
            >
              <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
              <img
                src={service.src}
                alt={service.title}
                className="mt-4 w-40 h-40 object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto lg:w-[80%] p-4 mt-[4rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesproject.map((servicesproject, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-[20px] text-[#032963] p-6 border border-gray-300 transition-colors duration-300 hover:bg-[#0a0f2c] hover:text-white"
            >
              <p className="tracking-wider text-xl hover:text-white">{servicesproject.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container lg:w-[80%] mb-8 mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="./devsg.png"
              alt="Project 1"
              className="w-full h-[12rem] object-cover"
            />
            <div className="p-2">
              <a
                href="https://ulka.tv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a0f2c] flex font-bold items-center mt-2"
              >
                View Website
              </a>
            </div>
          </div>
          <div className="overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="./ipsc.png"
              alt="Project 2"
              className="w-full h-[14rem] object-cover"
            />
          </div>
          <div className="overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="./futures4.jpg"
              alt="Project 3"
              className="w-full h-[12rem] object-cover"
            />
          </div>
          <div className="overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="./iuysa.png"
              alt="Project 4"
              className="w-full h-[13rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartConnectPage;
