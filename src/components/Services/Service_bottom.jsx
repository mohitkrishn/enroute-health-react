import React, { useState } from "react";
import ServiceHeader from "./ServiceHeader.jsx";
import ServiceContent from "./ServiceContent.jsx";
import { AnimatePresence } from "motion/react";
import { services } from "./Servicedata.js";

const ServiceBottom = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-[90%] h-full text-white m-auto">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="w-full border-b cursor-pointer pb-5"
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <ServiceHeader
            service={service}
            isActive={activeIndex === index}
          />

          <AnimatePresence>
            {activeIndex === index && (
              <ServiceContent service={service} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default ServiceBottom;
