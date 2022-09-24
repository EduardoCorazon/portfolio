
import {useState, useRef } from 'react';
import './App.css';
import About from './sections/About/about';
import Custombg from './sections/assets/bglines/bglines';
import Intropg from './sections/mainintro/intropg';
import Navbar from './sections/navbar/navbar';
import Skills from './sections/Skills/skills';




import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function App() {



  //FOR BACKGROUND COLOR CHANGE
  //sets the colorswitch state
  const [colorswitch, setcolorswitch] = useState(false);
  //if scroll mroe than 80px colorswitch is true thus "blackout" is applied and vice versa
  const changeColor = () =>{ window.scrollY >=80 ? setcolorswitch(true) : setcolorswitch(false)}
  window.addEventListener('scroll', changeColor);

  // <div className={colorswitch ? 'navyout': 'blackout'}>




  //for second color change
  const [colorswitch2, setcolorswitch2] = useState(false);
  const changeColor2 = () =>{ window.scrollY >=2200 ? setcolorswitch2(true) : setcolorswitch2(false)}
  window.addEventListener('scroll', changeColor2);
  

  return (
    <>

    

      
        
      


    <div className={colorswitch2 ? 'blackout': 'navyout'}>

      
    <div className='mainbg'>
      <Canvas camera={{ position: [0, 0, 1] }} className='stars'>
          <Stars/>
        </Canvas>
    </div>


    <div className='websitecontainer'>

    
          
        <header className='App'>
          <Navbar/>
          <Intropg/>
          
        </header>



        <Custombg/>



        <div className={colorswitch2 ? 'test123': 'blackout'}>
        <About/>
        <Skills/>
        

        </div>
        </div>
        </div>

    


    </>
  );
}

export default App;
