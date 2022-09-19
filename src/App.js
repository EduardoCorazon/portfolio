
import {useState } from 'react';
import './App.css';
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
      <div>
        <header className='App'>
          <Navbar/>
          <Intropg/>
        </header>
      </div>
      <Custombg/>
      <h1>I'm Currently Working on my New portfolio but,</h1>
      <h1>Here's the link to my original portfolio:</h1>
      <a href="https://eduardocorazon.github.io/my-portfolio/">https://eduardocorazon.github.io/my-portfolio/</a>
    </div>
  );
}

export default App;
