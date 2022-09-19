import './navbar.css';
function Navbar() {
  return (
    <div className="navbar">
        <ul className="navlist">
            <li className="navbox"><a className="underline" href="#about">About</a></li>
            <li className="navbox"><a className="underline" href="#portfolio">Portfolio</a></li>
            <li className="navbox"><a className="underline" href="#projects">Projects</a></li>
            <li className="navbox"><a className="underline" href="#contact">Contact</a></li>
        </ul>
  </div>
  );
}

export default Navbar;