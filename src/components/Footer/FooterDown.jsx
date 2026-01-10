import React from "react";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
const FooterDown = () => {
  return (
    <section className="w-full h-[40%] text-white flex flex-row justify-between  align-top pt-15">
      <div className="text-[1.7rem] uppercase font-bold tracking-tigh ">
        Subscribe to our newsletter.
      </div>
      <div className="flex flex-row align-middle gap-5">
       <span> <input
          type="text"
          placeholder="your@email address"
          className="w-[20vw] px-5 py-3 border-[1px] rounded-[.2rem]"
        /></span>
        <span>
          <motion.button
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300 }}
            className="
              flex 
              justify-between
                border-1 
            w-fit
            py-3 
            px-5
            rounded-full
            bg-white
            text-[#4b4d4a]
            gap-8
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
    </section>
  );
};

export default FooterDown;