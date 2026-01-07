import landingFont_semibold from '../assets/fonts/homepage_semibold.ttf'
import landing_para from '../assets/fonts/homepage_parafont.ttf'

import homepageBg from '../assets/homepage-bg.avif'
import texture from '../assets/textture-bg.avif'
import { MoveRight } from 'lucide-react'

const Home = () => {
  return (
    <main className="w-full relative">
      {/* overlay-texture */}
      <div
        className='w-full min-h-screen absolute top-0 left-0 z-50 bg-center opacity-30 pointer-events-none'
        style={{ backgroundImage: `url(${texture})` }}
      >
      </div>

      {/* main section */}
      <section
        className="home w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center-safe items-center-safe"
        style={{ backgroundImage: `url(${homepageBg})` }}
      >
        <div className='heading w-full px-2 py-6 text-center'>
          <h1
            className='text-[clamp(1.95rem,8vw,10rem)] text-white font-bold tracking-tighter leading-[clamp(1.75rem,8vw,10rem)]'
            style={{ fontFamily: `${landingFont_semibold}` }}
          >
            REDEFINING HUMAN
          </h1>
          <h1
            className='text-[clamp(1.95rem,8vw,10rem)] text-white font-bold tracking-tighter leading-[clamp(1.75rem,8vw,10rem)]'
            style={{ fontFamily: `${landingFont_semibold}` }}
          >
            PERFORMANCE
          </h1>
        </div>

        <div className='para w-full px-4 flex justify-center text-center'>
          <p
            className='max-w-137.5 text-white font-normal text-[clamp(1.35rem,3vw,1.35rem)]'
            style={{ fontFamily: `${landing_para}` }}
          >
            The world's most advanced performance optimization combining elite endurance training, longevity science, and personalized health analytics.
          </p>
        </div>

        <div className='cta-div w-full h-26 flex justify-center-safe items-end-safe'>
          <button
            className='px-6 py-3 rounded-full shadow-xl shadow-white/40 bg-white flex gap-7 items-center text-zinc-900'
          >
            <h4
              className='text-zinc-900 text-lg'
              style={{ fontFamily: `${landingFont_semibold}` }}
            >
              Join waitlist
            </h4>
            <MoveRight size={20} strokeWidth={1.75} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home