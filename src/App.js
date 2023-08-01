import { useState, useEffect, useRef } from 'react';
import './App.css';
import About from './sections/About/about';
import Custombg from './sections/assets/bglines/bglines';
import Intropg from './sections/mainintro/intropg';
import Navbar from './sections/navbar/navbar';
import Skills from './sections/Skills/skills';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Projects from './sections/Projects/projects';
import Contact from './sections/contact/contact';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

function App() {
  // For background color change
  const [colorswitch, setcolorswitch] = useState(false);
  const [colorswitch2, setcolorswitch2] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 80) {
        setcolorswitch(true);
      } else {
        setcolorswitch(false);
      }

      if (window.scrollY >= 1000) {
        setcolorswitch2(true);
      } else {
        setcolorswitch2(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={colorswitch ? 'navyout' : 'whiteout'}>
        <div className='mainbg'>
          <Canvas camera={{ position: [0, 0, 1] }} className={colorswitch ? 'stars' : 'stars-opacity'}>
            <Stars />
          </Canvas>
        </div>

        <div className='websitecontainer'>
          <header className='App'>
            <Intropg />
          </header>
          <Custombg />

          <div className={colorswitch2 ? 'blackout' : 'navyout'}>
            <div className='websitecontainer'>
              <Navbar />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
