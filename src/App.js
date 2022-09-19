
import './App.css';
import Custombg from './sections/assets/bglines/bglines';
import Navbar from './sections/navbar/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Custombg/>
      </header>
      <h1>I'm Currently Working on my New portfolio but,</h1>
      <h1>Here's the link to my original portfolio:</h1>
      <a href="https://eduardocorazon.github.io/my-portfolio/">https://eduardocorazon.github.io/my-portfolio/</a>
    </div>
  );
}

export default App;
