import React from "react";
import Font1 from "../assets/fonts/homepage_bold.ttf";
import Font2 from "../assets/fonts/homepage_parafont.ttf";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center text-white px-4"
      style={{ gap: "clamp(1rem, 3vw, 2.5rem)" }}
    >
      
      <h1
        className="uppercase font-bold tracking-tighter mt-10"
        style={{
          fontFamily: Font1,
          fontSize: "clamp(2.5rem, 8vw, 9rem)",
          maxWidth: "90vw",
          lineHeight: 1,
        }}
      >
        Redefining Human Performance
      </h1>

 
      <p
        className="text-white/90"
        style={{
          fontFamily: Font2,
          fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
          maxWidth: "clamp(20rem, 50vw, 34rem)",
          lineHeight: 1.7,
        }}
      >
        The world's most advanced performance optimization lab combining elite
        endurance training, longevity science, and personalized health analytics.
      </p>

    
      <button
        className="bg-white text-[#4b4d4a] font-medium rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{
          fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
          padding: "clamp(0.75rem, 1.4vw, 1.25rem) clamp(1.5rem, 3vw, 2.75rem)",
          gap: "clamp(0.75rem, 2vw, 1.5rem)",
          boxShadow: "rgb(255, 255, 255) 11px 28px 84px",
        }}
      >
        Join waitlist
        <i className="ri-arrow-right-long-line text-lg"></i>
      </button>
    </section>
  );
};

export default Hero;
