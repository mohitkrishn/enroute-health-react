import React from "react";
import CardImg1 from "/src/assets/processcard1.avif";
import CardImg2 from "/src/assets/processcard2.avif";
import CardImg3 from "/src/assets/processcard3.avif";
import CardImg4 from "/src/assets/processcard4.avif";
import { image } from "motion/react-client";

const style = "uppercase font-bold leading-[1] text-[1.9rem] tracking-tighter";
export const ProcessData = [
  {
    id: 0,
    title: "01 Completed assesment",
    image: CardImg1,
    para: (
      <>
        <ul className={style}>
          <li>Comprehensive</li>
          <li>testing of</li>
          <li>performance</li>
          <li>markers and</li>
          <li>biomarkers</li>
        </ul>
      </>
    ),
  },
  {
    id: 1,
    title: "02 Data Analysis",
    image: CardImg2,
    para: (
      <>
        <ul className={style}>
          <li>AI-powered</li>
          <li>analysis of your</li>
          <li>complete</li>
          <li>health profile</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "03 CUSTOM PROTOCOL",
    image: CardImg3,
        para: (
      <>
        <ul className={style}>
          <li>Personalized</li>
          <li>training and</li>
          <li>optimization </li>
          <li>program</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "04 ONGOING SUPPORT",
    image: CardImg4,
        para: (
      <>
        <ul className={style}>
          <li>Regular</li>
          <li>monitoring and</li>
          <li>protocol</li>
          <li>adjustments</li>
        </ul>
      </>
    ),
   
  },
];
