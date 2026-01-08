import React from "react";
import { motion } from "motion/react";
import ServiceList from "./ServiceList";

const ServiceContent = ({ service }) => {
  if (service.id === 2) {
    return (
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="w-full h-[40vh] rounded-[3rem] flex justify-between bg-white text-black px-1 py-1  overflow-hidden"
      >
        <div className="w-1/2 h-full px-20 flex items-center">
          <div >
            {service.lists.map((list, index) => (
              <ServiceList
                key={index}
                title={list.title}
                items={list.items}
               
              />
            ))}
          </div>
        </div>
        <div className="w-3/9 h-full rounded-[3rem] overflow-hidden">
          <img
            src={service.image}
            alt={service.header.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full h-[65vh] rounded-[3rem] flex bg-white text-black px-1 py-1 mt-6 overflow-hidden"
    >
      <div className="w-full h-full px-10 py-5 grid grid-cols-2 gap-8 items-center">
        {service.lists.map((list, index) => (
          <ServiceList key={index} title={list.title} items={list.items} />
        ))}
      </div>

      <div className="w-4/9 h-full rounded-[3rem] overflow-hidden">
        <img
          src={service.image}
          alt={service.header.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </motion.div>
  );
};

export default ServiceContent;
