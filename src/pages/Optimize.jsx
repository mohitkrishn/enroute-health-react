/* eslint-disable no-unused-vars */
import Details from '../components/Details'
import girlworkout from '../assets/girl-workout.webp'
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const Optimize = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100]);
    // const yFast = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const ySpring = useSpring(ySlow, {
        stiffness: 60,
        damping: 20,
        mass: 0.8
    })

    return (
        <section
            ref={ref}
            className='
            w-full 
            min-h-screen 
            px-4
            py-8
            z-30 
            bg-zinc-900 
            flex 
            flex-col
            md:flex-row 
            items-center 
            justify-center-safe 
            gap-4'
        >
            <Details ySpring={ySpring} />

            <motion.div
                style={{ y: ySpring }}
                className='w-full rounded-[2.5rem] overflow-hidden'
            >
                <img
                    src={girlworkout}
                    alt="img-girl-workout"
                    className='md:min-h-[clamp(886px,100vw,1061px)] object-cover object-center'
                />
            </motion.div>
        </section>
    )
}

export default Optimize