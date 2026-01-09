import React from 'react'
import ProcessHead from '../components/Process/ProcessHead'
import ProcessCard from '../components/Process/ProcessCard'

const Process = () => {
  return (
   <section className="
           w-full 
            min-h-screen 
            z-30 
            pb-25
            " 
            style={{
             background: "linear-gradient(180deg, #000 0%, #666 75%, #959595 100%)"

            }}
    >
    <ProcessHead/>
    <ProcessCard/>
    </section>
  )
}

export default Process