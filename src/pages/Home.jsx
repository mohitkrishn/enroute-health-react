import { div } from "motion/react-client";
import homepageBg from "../assets/homepage-bg.avif";
import texture from "../assets/textture-bg.avif";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main className="w-full relative">
      {/* overlay-texture */}
      <div
        className="w-full min-h-screen absolute top-0 left-0 z-50 bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${texture})` }}
      ></div>

      {/* main section */}
      <section
        className="home w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homepageBg})` }}
      >
      <Hero />
      </section>
    </main>
  );
};

export default Home;
