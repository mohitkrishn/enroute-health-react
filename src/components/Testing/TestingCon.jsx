import React from "react";
import TestingCard from "./TestingCard";

const TestingCon = () => {
  return (
    <section className="w-full bg-[#F7F7F7] h-full rounded-4xl text-black flex flex-col justify-between  px-20">
      <div className="w-full text-center flex  flex-col pt-20">
        <p className="text-[.8rem] uppercase font-medium text-[#4b4d4a]">
          unlock your full potential through advanced training protocols
        </p>
        <p className="text-9xl uppercase font-bold text-[#3e3e3e] leading-25">
          testing
        </p>
      </div>
      <TestingCard />
    </section>
  );
};

export default TestingCon;
