import homepageBg from '../assets/homepage-bg.avif'
import texture from '../assets/textture-bg.avif'
import Hero from '../components/Hero';
import Banner from './Banner';
import Footer from './Footer';
import Membership from './Membership';
import Optimize from './Optimize';
import Process from './Process';
import Services from './Services';
import Testing from './Testing';

const Home = () => {
  return (
    <main className="w-full relative">
      {/* overlay-texture */}
      <div
        className="w-full absolute inset-0 z-50 bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${texture})` }}
      ></div>

      {/* main section */}
      <section
        className="home w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center-safe items-center-safe"
        style={{ backgroundImage: `url(${homepageBg})` }}
      >
        <Hero />
      </section>

      {/* optimize section */}
      <Optimize />
      {/*Services Section*/}
      <Services /> 
      {/*Testing Section*/} 
      <Testing/>
      {/*Our Process Section*/}
      <Process/>
      {/*Member-Ship Section*/}
      <Membership/>
      {/*Banner Section*/ }
      <Banner/>
      {/*Footer Section*/}
     <Footer/>
    </main>
  );
};

export default Home;