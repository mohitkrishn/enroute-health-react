import React from "react";
import BannerImg from "/src/assets/banner.avif";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import homePage_semibold from "../assets/fonts/homepage_bold.ttf";
import Footer from "./Footer";
const Banner = () => {
   const buttonVariants = {
    initial: {
      boxShadow: "0px 6px 12px #fff",
    },
    hover: {
      boxShadow: "0px 10px 205px #f6f6f6",
    },
  };
  return (
    <section
      className=" w-full 
            h-fit 
            px-5
            py-10
            z-30 
            "
      style={{
        background: "linear-gradient(180deg, #000 0%, #666 100%, #959595 100%)",
        fontFamily: `${homePage_semibold}`,
      }}
    >
      <div
        className="w-full h-[70vh] bg-cover flex flex-col justify-center px-20   rounded-2xl bg-center  text-white"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <div className="flex flex-col">

          <div className="flex text-center align-middle gap-10">
            <h1 className=" uppercase text-[4rem] leading-[.9] font-bold tracking-tight">
              interested?
            </h1>
          <span>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "linear", stiffness: 300 }}
          className="
              flex 
              justify-between
                border-1 
            w-fit
            py-4 
            px-7
            rounded-full
            bg-white
            text-[#4b4d4a]
            gap-27
            "
        >
          <motion.span
            variants={{
              hover: { x: -5 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block font-medium"
          >
            Sign me up
          </motion.span>

          <motion.span
            variants={{
              hover: { x: 5 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <MoveRight />
          </motion.span>
        </motion.button>
      </span>
          </div>

          <h1 className="uppercase font-bold text-[4.3rem] leading-[1] tracking-tight text-[#3e3e3e]">Thats just the start.</h1>
        </div>
        <p className="font-medium text-[1.2rem] w-[29vw] leading-[1.3] py-3">
          Join elite athletes and health optimizers who trust Enroute Labs for
          their performance and longevity goals.
        </p>
      </div>
  
    </section>
  );
};

export default Banner;