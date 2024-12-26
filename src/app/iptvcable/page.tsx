"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IptvCableTv from "@/components/IptvCableTv/IptvCableTvPage"

const IptvCableTvPage: React.FC = () => {

  return (
    <>     
      <Header/>
      <IptvCableTv />
      <Footer />
    </>
  );
};

export default IptvCableTvPage;
