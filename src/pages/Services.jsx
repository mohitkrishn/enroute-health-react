import { section } from "motion/react-m";
import React from "react";
import Service_Top from "../components/Services/Service_Top";
import Service_bottom from "../components/Services/Service_bottom";


const Services = () => {
  return (
    <section
      className="
           w-full 
            min-h-screen 
            p-6
            z-30 
            bg-zinc-900 
            pb-25
            " 
    >
     <Service_Top/>
     <Service_bottom />
    </section>
  );
};

export default Services;
