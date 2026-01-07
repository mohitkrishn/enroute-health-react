/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import homePage_semibold from '../assets/fonts/homepage_bold.ttf'
import homePage_parafont from '../assets/fonts/homepage_parafont.ttf'
import { MoveRight, MoveUp } from 'lucide-react';
import { motion } from 'motion/react'

const Details = () => {
    const [count, setCount] = useState(0);
    const [percent, setPercent] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 3) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            })
        }, 400)

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 88) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            })
        }, 15)

        return () => {
            clearInterval(interval);
        }
    }, []);


    return (
        <div
            className='
            w-full 
            px-6 
            pt-10
            pb-13
            lg:p-20 
            z-30 
            bg-white 
            rounded-[2.5rem]
            flex 
            flex-col 
            items-center 
            justify-center-safe 
            gap-10'
        >
            <div
                className='w-full'
            >
                <h1
                    className="text-zinc-900 tracking-tighter font-bold"
                    style={{
                        fontFamily: `${homePage_semibold}`,
                        fontSize: 'clamp(2.15rem, 5vw, 4rem)',
                        lineHeight: 'clamp(2.15rem, 5vw, 4rem)'
                    }}
                >
                    UNLOCK YOUR <br /> POTENTIAL
                </h1>

                <p className='mt-2 text-zinc-700'
                    style={{
                        fontFamily: `${homePage_parafont}`,
                        fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
                    }}
                >
                    Your body is capable of extraordinary things
                </p>
            </div>

            <div
                className='w-full'
            >
                <h1
                    className='text-zinc-900 font-bold tracking-tighter'
                    style={{
                        fontFamily: `${homePage_semibold}`,
                        fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                        lineHeight: 'clamp(2.25rem, 5vw, 4rem)'
                    }}
                >
                    {count}X
                </h1>

                <p
                    className='mt-1 text-zinc-700'
                    style={{
                        fontFamily: `${homePage_parafont}`,
                        fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
                    }}
                >
                    Your recovery and sleep performance
                </p>
            </div>

            <div
                className='w-full'
            >
                <h1
                    className='text-zinc-900 font-bold tracking-tighter flex items-center '
                    style={{
                        fontFamily: `${homePage_semibold}`,
                        fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                        lineHeight: 'clamp(2.25rem, 5vw, 4rem)'
                    }}
                >
                    <MoveUp size={60} strokeWidth={1.25} />{percent}%
                </h1>

                <p
                    className='mt-1 text-zinc-700'
                    style={{
                        fontFamily: `${homePage_parafont}`,
                        fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
                    }}
                >
                    Future proof your body
                </p>
            </div>

            <div
                className='w-full'
            >
                <p
                    className='mb-1 font-semibold lg:font-bold italic text-zinc-900 text-wrap'
                    style={{ fontSize: 'clamp(1.18rem, 4vw, 1.5rem)' }}
                >
                    <MoveRight className='inline-block' size={20} strokeWidth={2} />
                    &nbsp; TRAIN SMARTER
                </p>
                <p
                    className='mb-1 font-semibold lg:font-bold italic text-zinc-900 text-wrap'
                    style={{ fontSize: 'clamp(1.18rem, 4vw, 1.5rem)' }}
                >
                    <MoveRight className='inline-block' size={20} strokeWidth={2} />
                    &nbsp; RECOVER FASTER
                </p>
                <p
                    className='mb-1 font-semibold lg:font-bold italic text-zinc-900 text-wrap'
                    style={{ fontSize: 'clamp(1.18rem, 4vw, 1.5rem)' }}
                >
                    <MoveRight className='inline-block' size={20} strokeWidth={2} />
                    &nbsp; MAINTAIN PEAK PERFORMANCE
                </p>
                <p
                    className='mb-1 font-semibold lg:font-bold italic text-zinc-900 text-wrap'
                    style={{ fontSize: 'clamp(1.18rem, 4vw, 1.5rem)' }}
                >
                    <MoveRight className='inline-block' size={20} strokeWidth={2} />
                    &nbsp; FUTURE PROOF YOUR BODY
                </p>
            </div>

            <div
                className='w-full overflow-hidden'
            >
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                    className='text-zinc-300 font-bold tracking-tighter'
                    style={{
                        fontFamily: `${homePage_semibold}`,
                        fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                        lineHeight: 'clamp(2.25rem, 5vw, 4rem)'
                    }}
                >
                    THAT'S WHY
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                    className='mt-1.5 text-zinc-900 font-bold tracking-tighter'
                    style={{
                        fontFamily: `${homePage_semibold}`,
                        fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                        lineHeight: 'clamp(1.95rem, 5vw, 4rem)'
                    }}
                >
                    OPTIMIZATION MATTERS
                </motion.h1>
            </div>
        </div>
    )
}

export default Details