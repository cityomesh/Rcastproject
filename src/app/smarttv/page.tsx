"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartTv from "@/components/SmartTv/SmartTvPage"

const Home: React.FC = () => {

  return (
    <>     
      <Header/>
      <SmartTv />
      <Footer />
    </>
  );
};

export default Home;
