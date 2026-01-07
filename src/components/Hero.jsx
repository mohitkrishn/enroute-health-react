import Font1 from '../assets/fonts/homepage_bold.ttf';
import Font2 from '../assets/fonts/homepage_parafont.ttf';

const Hero = () => {
  return (
    <div className="w-full min-h-screen text-white flex flex-col justify-center items-center text-center gap-6 px-4 sm:px-6">
      
      {/* Heading */}
      <h1
        className="
          uppercase 
          w-full 
          max-w-[90vw]
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          lg:text-9xl 
          font-bold 
          tracking-tighter
        "
        style={{ fontFamily: Font1 }}
      >
        Redefining Human Performance
      </h1>

      {/* Paragraph */}
      <p
        className="
          w-full 
          sm:w-[80%] 
          md:w-[50%] 
          lg:w-[33.6vw]
          text-base 
          sm:text-lg 
          leading-relaxed 
          text-white/90
        "
        style={{ fontFamily: Font2 }}
      >
        The world's most advanced performance optimization lab combining elite
        endurance training, longevity science, and personalized health analytics.
      </p>

      {/* Button */}
      <button
        className="
          bg-white 
          text-[#4b4d4a] 
          text-sm 
          sm:text-base 
          font-medium 
          px-6 
          py-3 
          sm:py-4 
          rounded-full 
          flex 
          items-center 
          gap-3 
          sm:gap-6
        "
        style={{ boxShadow: 'rgb(255, 255, 255) 11px 28px 84px' }}
      >
        Join waitlist
        <i className="ri-arrow-right-long-line text-lg"></i>
      </button>
    </div>
  );
};

export default Hero;
