import React from "react";
import homePage_semibold from "../assets/fonts/homepage_bold.ttf";
import FooterUp from "../components/Footer/FooterUp";
import Footerline from "../components/Footer/Footerline";
import FooterDown from "../components/Footer/FooterDown";
const Footer = () => {
  return (
    <section
      className=" w-full 
            h-[80vh]
            z-30 
            px-20
             "
      style={{
        background: "linear-gradient(0deg, #000 0%, #666 100%, #959595 100%)",
        fontFamily: `${homePage_semibold}`,
      }}
    >
      <FooterUp/>
      <Footerline/>
      <FooterDown/>
    </section>
  );
};

export default Footer;
