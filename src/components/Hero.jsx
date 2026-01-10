import Font1 from '../assets/fonts/homepage_bold.ttf';
import Font2 from '../assets/fonts/homepage_parafont.ttf';

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center text-white px-4"
      style={{ gap: 'clamp(1rem, 3vw, 2.5rem)' }}
    >

      <h1
        className="uppercase font-bold tracking-tighter mt-10"
        style={{
          fontFamily: Font1,
          fontSize: 'clamp(2.5rem, 8vw, 9rem)',
          maxWidth: '90vw',
          lineHeight: 1,
        }}
      >
        Redefining Human Performance
      </h1>


      <p
        className="text-white/90"
        style={{
          fontFamily: Font2,
          fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
          maxWidth: 'clamp(20rem, 50vw, 34rem)',
          lineHeight: 1.7,
        }}
      >
        The world's most advanced performance optimization lab combining elite
        endurance training, longevity science, and personalized health analytics.
      </p>


      <button
      >
        Join waitlist
        <i className="ri-arrow-right-long-line text-lg"></i>
      </button>
    </section>
  );
};

export default Hero;