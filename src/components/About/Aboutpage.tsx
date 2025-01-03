"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Aboutpage = () => {

  const fourCardsData = [
    {
      content: "City Online Media (P) Limited is promoted by technocrats having more than two decades of experience in Internet and Television Industry.",
      bgColor: "bg-orange-300",
    },
    {
      content: "Rcast the IPTV SAAS (Software As A Solution) is deployed for ULKA TV services  for more than 4 years. The Concept of IPTV is tested by Public and Private ISPs by deploying ULKA TV in their broadband Networks.",
      bgColor: "bg-blue-300",
    },
    {
      content: " Evaluation of responses from ISPs and users helped us to proceed to the next stage of development in the right direction with clarity on features and functionality of the product. We focused on the quality and distribution efficiency of IPTV service which can be deployed in all types of broadband networks.",
      bgColor: "bg-pink-300",
    },
    {
      content1: "ULKA TV using Rcast successfully passed all the Audits conducted by the Broadcasters and its own self Audits for the last four years.",
      content2: "Techsai Digital Solutions LLP is our Distributor for sales.",
      bgColor: "bg-orange-400",
    },
  ];

  return (
    <div className="bg-white w-full p-4 sm:p-12">
      <div className="max-w-8xl mx-auto mt-[7rem] mb-[8rem]">
        <h1 className="text-center text-2xl sm:text-3xl text-blue-900 mt-2 font-bold mb-8">
          ABOUT US
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-bold text-base sm:text-[22px] mb-8">
          {fourCardsData.map((card, index) => (
            <div
            key={index}
            className={`p-6 sm:p-8 rounded-lg text-slate-950 flex flex-col justify-center items-center h-auto sm:h-[400px] ${card.bgColor} relative group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white`}
          >
            <p className="relative text-center px-4 sm:px-8">
              {card.content && <span>{card.content}</span>}
              {card.content1 && <span>{card.content1}</span>}
              {card.content2 && <span className="block mt-2 text-2xl font-bold">{card.content2}</span>}
            </p>
            <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
