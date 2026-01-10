import React from "react";

const ServiceList = ({ title, items, className = "" }) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h3 className="uppercase font-semibold text-[.9rem] text-[#a2a2a2] tracking-tight">
        {title}
      </h3>

      <ul className="uppercase text-[1.6rem] tracking-tight leading-[1]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;