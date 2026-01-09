import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProcessData } from "./ProcessData";
import homePage_parafont from "/src/assets/fonts/homepage_parafont.ttf";

const ProcessCard = () => {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    setWidth(slider.scrollWidth - slider.offsetWidth);
  }, []);

  return (
    <section className="w-full h-fit px-20 py-15 overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="flex gap-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
      >
        {ProcessData.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-w-[50vw] h-[60vh] rounded-[3rem] bg-white flex overflow-hidden px-1 py-1"
          >
            <div
              className="w-1/2 h-full pl-10 flex flex-col justify-end items-start py-10 gap-2"
              style={{ fontFamily: homePage_parafont }}
            >
              <h3 className="uppercase tracking-tighter font-medium text-[#4b4d4a]">
                {e.title}
              </h3>

                {e.para}
             
            </div>

            <div className="w-1/2 h-full rounded-[3rem] overflow-hidden">
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProcessCard;
