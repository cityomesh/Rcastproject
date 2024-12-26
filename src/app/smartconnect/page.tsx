"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartConnect from "@/components/SmartConnect/SmartConnectPage"

const SmartAppPage: React.FC = () => {

  return (
    <>     
      <Header/>
      <SmartConnect />
      <Footer />
    </>
  );
};

export default SmartAppPage;
