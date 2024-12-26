"use client";
import Header from "@/components/Header";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage"

const Home: React.FC = () => {

  return (
    <>     
      <Header/>
      <Homepage />
      <Footer />
    </>
  );
};

export default Home;
