import React from "react";
import CardImg1 from "/src/assets/processcard1.avif";
import CardImg2 from "/src/assets/processcard2.avif";
import CardImg3 from "/src/assets/processcard3.avif";
import CardImg4 from "/src/assets/processcard4.avif";
import { image } from "motion/react-client";
export const ProcessData = [
  {
    id: 0,
    title: "01 Completed assesment",
    image: CardImg1,
    para: [
      "Comprehensive",
      "testing of",
      "performance",
      "markers and",
      "biomarkers",
    ],
  },
  {
    id: 1,
    title: "02 Data Analysis",
    image: CardImg2,
    para: ["AI-powered ", 
      "analysis of your ", 
      "complete ", 
      "health profile"],
  },
  {
    id: 2,
    title: "03 CUSTOM PROTOCOL",
    image: CardImg3,
    para: ["Personalized  ",
       "training and  ", 
       "optimization  ", 
       "program"],
  },
  {
    id: 3,
    title: "04 ONGOING SUPPORT",
    image: CardImg4,
    para: ["Regular", "monitoring and  ", "protocol  ", "adjustments"],
  },
];
