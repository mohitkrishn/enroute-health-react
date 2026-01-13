import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import { lenis } from './utilities/Lenis'
import { Route,Routes } from 'react-router-dom';
import Optimize from './pages/Optimize';
import Services from './pages/Services';
import Testing from './pages/Testing';
import Process from './pages/Process';
import Membership from './pages/Membership';

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
    <Routes>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/Optimize" element = {<Optimize/>} />
      <Route  path="/Service" element={<Services/>} />
      <Route  path="/Testing" element={<Testing/>}/>
      <Route  path="/Process" element={<Process/>}/>
      <Route  path="/Membership" element={<Membership/>} />
    </Routes>
    <Home />
  </>
}

export default App