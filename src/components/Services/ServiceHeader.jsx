import React from "react";
import ServiceArrow from "./ServiceArrow";

const ServiceHeader = ({ service, isActive }) => {
  return (
    <div className="w-full flex justify-between items-center pt-3 pb-10">
      <div>
        <p
          className="uppercase text-[.9rem] font-medium tracking-tight"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          {service.header.subtitle}
        </p>

        <h1 className="uppercase text-7xl font-bold tracking-tighter">
          <span className="tracking-[-.1em]">
            {service.header.number}
          </span>{" "}
          {service.header.title}
        </h1>
      </div>

      <ServiceArrow active={isActive} />
    </div>
  );
};

export default ServiceHeader;
