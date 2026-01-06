import homepageBg from '../assets/homepage-bg.avif'
import texture from '../assets/textture-bg.avif'

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
        className="home w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homepageBg})` }}
      >
      </section>
    </main>
  )
}

export default Home