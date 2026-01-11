/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import homepageBg from '../assets/homepage-bg.avif'
import texture from '../assets/textture-bg.avif'
import Hero from '../components/Hero';
import Optimize from './Optimize';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const Home = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yTexture = useTransform(scrollYProgress, [0, 1], [0, -200]);
  // const yFast = useTransform(scrollYProgress, [0, 1], [0, -250]);

  //smooth scroll
  const ySpring = useSpring(yTexture, {
    stiffness: 40,
    damping: 30,
    mass: 1.5
  })

  return (

    <main
      ref={ref}
      className="w-full relative overflow-hidden"
    >
      {/* overlay-texture */}
      <motion.div
        className="absolute inset-0 z-50 pointer-events-none"
        style={{
          y: ySpring,
        }}
      >
        {/* REAL overlay layer */}
        <div
          className="w-full h-[120%] bg-center opacity-30"
          style={{
            backgroundImage: `url(${texture})`,
          }}
        />
      </motion.div>

      {/* motion.main section */}
      <section
        className="home w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center-safe items-center-safe"
        style={{ backgroundImage: `url(${homepageBg})` }}
      >
        <Hero />
      </section>

      {/* optimize section */}
      <Optimize />
    </main>
  );
};

export default Home;
