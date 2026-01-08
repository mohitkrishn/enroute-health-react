import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import DownArrow from "../../assets/DownArrow";

 
const ServiceArrow = ({ active }) => {
  return (
    <div className="relative w-[5vw] h-[5vw] overflow-hidden flex items-center justify-center mt-4">
      <AnimatePresence initial={false} mode="wait">
        {!active && (
          <motion.div
            key="down"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="absolute"
          >
            <DownArrow size={60} strokeWidth={10} color="white" />
          </motion.div>
        )}

        {active && (
          <motion.div
            key="up"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="absolute rotate-180"
          >
            <DownArrow size={60} strokeWidth={10} color="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceArrow;
