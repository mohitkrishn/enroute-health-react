import { MoveDown } from "lucide-react";
import React ,{useState}from "react";
import { NavLink } from "react-router-dom";
import LeftArrow from "../../assets/LeftArrow";
import RightArrow from "../../assets/RightArrow";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "01 Complete Assessment",
  "02 Data Analysis",
  "03 Custom Protocol",
  "04 Ongoing Support",
];

const ProcessNav = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="w-full h-20 mt-13 flex justify-between pr-20 items-center text-white">
      <div className="flex gap-2 border-1 rounded-full px-[.15rem] py-[.15rem]">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className="relative px-5 py-2 font-medium overflow-hidden"
          >
          
            <AnimatePresence>
              {active === index && (
                <motion.div
                  key="pill"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 24,
                  }}
                  className="absolute inset-0 bg-white border-1 rounded-full"
                />
              )}
            </AnimatePresence>

            <span
              className={`
              relative z-10 transition-colors duration-200
              cursor-pointer
              ${
                active === index
                  ? "text-[#4b4d4a]"
                  : "text-white hover:text-[#c1c1c1]"
              }
            `}
            >
              {step}
            </span>
          </button>
        ))}
      </div>
      <div className="flex gap-5">
        <LeftArrow size={50} strokeWidth={10} />
        <RightArrow size={50} strokeWidth={10} />  
      </div>
    </section>
  );
};

export default ProcessNav;
