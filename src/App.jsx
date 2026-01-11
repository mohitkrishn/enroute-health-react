import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import { lenis } from './utilities/Lenis'

const App = () => {

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>
    <Navbar />
    <Home />
  </>
}

export default App