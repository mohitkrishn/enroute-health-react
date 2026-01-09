import { ul } from 'motion/react-m'
import React from 'react'
import ProcessNav from './ProcessNav'

const ProcessHead = () => {
  return (
<section className='w-full h-full b pt-25 pl-20'>
    <ul className='text-white text-[4.5rem] uppercase font-bold tracking-tighter leading-[.9]'>
        <li className='text-[#3e3e3e]'>your journey to</li>
        <li>peak performance</li>
    </ul>
    <ProcessNav/>
</section>
  )
}

export default ProcessHead