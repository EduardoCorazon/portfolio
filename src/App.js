
import {useState } from 'react';
import './App.css';
import About from './sections/About/about';
import Custombg from './sections/assets/bglines/bglines';
import Intropg from './sections/mainintro/intropg';
import Navbar from './sections/navbar/navbar';
import Skills from './sections/Skills/skills';


function App() {

  //FOR BACKGROUND COLOR CHANGE
  //sets the colorswitch state
  const [colorswitch, setcolorswitch] = useState(false);
  //if scroll mroe than 80px colorswitch is true thus "blackout" is applied and vice versa

  
  const changeColor = () =>{ window.scrollY >=80 ? setcolorswitch(true) : setcolorswitch(false)}
  window.addEventListener('scroll', changeColor);



  //for second color change
  const [colorswitch2, setcolorswitch2] = useState(false);
  const changeColor2 = () =>{ window.scrollY >=2200 ? setcolorswitch2(true) : setcolorswitch2(false)}
  window.addEventListener('scroll', changeColor2);
  



  return (
    <div className={colorswitch ? 'blackout': 'whiteout'}>

    
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
  );
}

export default App;
