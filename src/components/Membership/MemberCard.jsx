import React from "react";
import { Check, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { MemberShipData } from "./MemberShipData";

const MemberCard = () => {
  return (
    <section className="w-full h-full  flex  flex-row justify-center gap-5">
      {MemberShipData.map((item) => (
        <div
          key={item.id}
          className="w-[28vw] h-[75vh] bg-[#FFFFFF] rounded-2xl px-10 py-10  "
        >
          <div className=" flex  flex-col gap-1 pb-9 border-b-1 mb-5">
            <h3
              className="
            uppercase  
            text-[.9rem] 
            font-medium"
            >
              {item.head}
            </h3>
            <h1 className="text-4xl font-bold tracking-tighter py-5">
              ${item.amt}
              <sub className="text-[.9rem] font-medium tracking-tight text-[#4b4d4a] pl-2 ">
                per test
              </sub>
            </h1>
            <motion.button
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
              className="
              flex 
              justify-between
            border-1 
            w-full 
           
            py-3 
            px-5
            rounded-full
            
            "
            >
              <motion.span
                variants={{
                  hover: { x: -5 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block font-medium"
              >
                {item.btn}
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
          </div>

          <ul className="flex flex-col gap-2">
            <li>{item.l1}</li>
            <li>{item.l2}</li>
            <li>{item.l3}</li>
            <li>{item.l4}</li>
            <li>{item.l5}</li>
            <li>{item.l6}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default MemberCard;