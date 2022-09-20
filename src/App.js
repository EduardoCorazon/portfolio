
import {useState } from 'react';
import './App.css';
import About from './sections/About/about';
import Custombg from './sections/assets/bglines/bglines';
import Intropg from './sections/mainintro/intropg';
import Navbar from './sections/navbar/navbar';


function App() {

  //FOR BACKGROUND COLOR CHANGE
  //sets the colorswitch state
  const [colorswitch, setcolorswitch] = useState(false);
  //if scroll mroe than 80px colorswitch is true thus "blackout" is applied and vice versa

  const changeColor = () =>{ window.scrollY >=80 ? setcolorswitch(true) : setcolorswitch(false)}
  window.addEventListener('scroll', changeColor);




  return (
    <div className={colorswitch ? 'blackout': 'whiteout'}>

    
        <header className='App'>
          <Navbar/>
          <Intropg/>
        </header>


        <Custombg/>
      
        <About/>
        
      
    </div>
  );
}

export default App;
