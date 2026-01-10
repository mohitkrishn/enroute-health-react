import React from "react";
import { testing } from "./TestingData";
import { Check, MoveRight } from "lucide-react";
import { motion } from "motion/react";

const TestingCard = () => {
  return (
    <div className="flex gap-5 justify-center align-bottom items-end">
      {testing.map((item) => (
        <div
          key={item.id}
          className="w-[26vw] h-fit bg-[#FFFFFF] rounded-t-2xl px-10 py-10  "
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
            <p
              className="
            text-[#4b4d4a] 
            font-medium
            leading-5
            
            "
            >
              {item.para}
            </p>
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
    </div>
  );
};

export default TestingCard;