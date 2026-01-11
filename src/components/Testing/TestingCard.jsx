/* eslint-disable no-unused-vars */
import { testing } from './TestingData';
import { MoveRight } from 'lucide-react';
import { motion, useInView, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const TestingCard = () => {

  const ref = useRef(null);

  const viewRef = useInView(ref);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const ySpring = useSpring(ySlow, {
    stiffness: 60,
    damping: 20,
    mass: 0.8
  });

  return (
    <div
      className="flex gap-5 justify-center align-bottom items-end"
    >
      {testing.map((item, idx) => (
        <motion.div
          ref={ref}
          style={{ y: ySpring }}
          transition={{ delay: idx * 0.2 , duration: 0.3 }}
          key={item.id}
          className="w-[26vw] h-fit bg-[#FFFFFF] rounded-t-2xl px-10 py-10  "
        >
          <div className=" flex  flex-col gap-1 pb-9 border-b mb-5">
            <h3
              className="
            uppercase  
            text-[.9rem] 
            font-medium"
            >
              {item.head}
            </h3>
            <p
              className="
            text-[#4b4d4a] 
            font-medium
            leading-5
            
            "
            >
              {item.para}
            </p>
            <h1 className="text-4xl font-bold tracking-tighter py-5">
              ${item.amt}
              <sub className="text-[.9rem] font-medium tracking-tight text-[#4b4d4a] pl-2 ">
                per test
              </sub>
            </h1>
            <motion.button
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 300 }}
              className="
              flex 
              justify-between
            border 
            w-full 
            py-3 
            px-5
            rounded-full
            cursor-pointer
            "
            >
              <motion.span
                variants={{
                  hover: { x: -5 },
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block font-medium"
              >
                {item.btn}
              </motion.span>

              <motion.span
                variants={{
                  hover: { x: 5 },
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block"
              >
                <MoveRight />
              </motion.span>
            </motion.button>
          </div>

          <ul className="flex flex-col gap-2">
            <li>{item.l1}</li>
            <li>{item.l2}</li>
            <li>{item.l3}</li>
            <li>{item.l4}</li>
            <li>{item.l5}</li>
            <li>{item.l6}</li>
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default TestingCard;
