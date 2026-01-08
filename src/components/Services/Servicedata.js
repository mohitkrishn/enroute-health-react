import service1 from "/src/assets/service1.avif";
import service2 from "/src/assets/service2.webp";
import service3 from "/src/assets/service3.avif";

export const services = [
  {
    id: 0,
    header: {
      number: "01",
      title: "Performance",
      subtitle:
        "unlock your full potential through advanced training protocols",
    },
    image: service1,
    lists: [
      {
        title: "Elite Training",
        items: [
          "AI-optimized training plans",
          "Recovery monitoring",
          "Race preparation",
          "Peak performance timing",
        ],
      },
      {
        title: "Metabolic Health",
        items: [
          "Substrate utilization",
          "Energy system development",
          "Metabolic flexibility",
          "Nutrition timing",
        ],
      },
      {
        title: "Recovery",
        items: [
          "Sleep optimization",
          "Stress management",
          "Injury prevention",
          "Longevity protocols",
        ],
      },
    ],
  },

  {
    id: 1,
    header: {
      number: "02",
      title: "Testing",
      subtitle:
        "unlock your full potential through advanced training protocols",
    },
    image: service2,
    lists: [
      {
        title: "performance metrics",
        items: [
          " VO2 Max Testing",
          "Lactate Analysis",
          "SMO2 Analysis",
          "Sweat Analysis",
        ],
      },
      {
        title: "biomarkers",
        items: [
          "hormal profiling",
          "inflammatory markers",
          "nutrient status",
          "recovery indicator",
        ],
      },
      {
        title: "recovry",
        items: [
          "heart rate variability",
          "sleep analysis",
          "stress response",
          "recovery capacity",
        ],
      },
    ],
  },

  {
    id: 2,
    header: {
      number: "03",
      title: "Optimization",
      subtitle:
        "unlock your full potential through advanced training protocols",
    },
    image: service3,
    lists: [
      {
        title: "Concierge Care",
        items: [
          "24/7 Coach Access",
          "Progress Tracking",
          "Protocol Adjustments",
          "Priority Support",
        ],
      },
    ],
  },
];
