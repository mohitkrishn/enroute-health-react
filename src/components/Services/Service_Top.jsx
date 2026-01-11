import React from "react";
import { MoveRight, MoveUp } from "lucide-react";
import { motion } from "motion/react";
import homePage_semibold from "../../assets/fonts/homepage_semibold.ttf";
import homePage_parafont from "../../assets/fonts/homepage_parafont.ttf";



const Service_Top = () => {
  const buttonVariants = {
    initial: {
      boxShadow: "0px 6px 12px #fff",
    },
    hover: {
      boxShadow: "0px 10px 205px #f6f6f6",
    },
  };

  return (
    <section className="w-full h-fit flex flex-row  gap-4  pt-20 py-5 ">
      <div
        className="
            w-[53%] 
            gap-10  "
      >
        <span>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "linear", stiffness: 300 }}
          className="bg-white  w-8/9 px-10 py-3.5  ml-20 rounded-full flex justify-between items-center text-black cursor-pointer"
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
      <div
        className="
            w-[47%] text-white "
      >
        <h1
          className=" font-bold uppercase "
          style={{
            fontFamily: `${homePage_semibold}`,
            fontSize: "clamp(2.18rem, 4vw, 4rem)",
            lineHeight: "clamp(2.15rem, 5vw, 4rem)",
            letterSpacing: "clamp(-0.12rem, -0.5vw, -0.10rem)",
            color: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <span className="text-white">beyod generic training – </span>
          your personal path to peak optimization
        </h1>
        <p
          style={{
            fontFamily: `${homePage_parafont}`,
            fontSize: "1.26rem",
            lineHeight: "1.3",
            letterSpacing:'.01rem',
            paddingTop: "1.5rem",
            paddingRight: "4rem",
          }}
        >
          Whether your'e chasing your sub-3 marathon or aiming to shatter power
          records, we've built the ultimate performance optimization system for
          endurance althletes
        </p>
      </div>
    </section>
  );
};

export default Service_Top;