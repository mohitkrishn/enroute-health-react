import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import Font1 from "../assets/fonts/homepage_bold.ttf";
import Font2 from "../assets/fonts/homepage_parafont.ttf";
import { style } from "motion/react-client";

const Hero = () => {
  const buttonVariants = {
    initial: {
      boxShadow: "0px 6px 12px #fff",
    },
    hover: {
      boxShadow: "0px 10px 205px #f6f6f6",
    },
  };
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
        endurance training, longevity science, and personalized health
        analytics.
      </p>

      <span>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "linear", stiffness: 300 }}
          className="
              flex 
              justify-between
             
            w-fit
            py-3 
            px-5
            rounded-full
            bg-white
            text-[#4b4d4a]
            gap-8
            cursor-pointer
         
            "
        >
          <motion.span
            variants={{
              hover: { x: -5 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block font-medium"
          >
            Sign me up
          </motion.span>

          <motion.span
            variants={{
              hover: { x: 5 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <MoveRight />
          </motion.span>
        </motion.button>
      </span>
    </section>
  );
};

export default Hero;
