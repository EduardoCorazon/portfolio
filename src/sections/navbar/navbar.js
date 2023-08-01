import './navbar.css';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
    <div>

    </div>
    <div className="navbar">
        <ul className="navlist">
        
            <li className="navbox"><Link className='underline' activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={100} >About</Link></li>
            <li className="navbox"><Link className='underline' activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={100} >Skills</Link></li>
            <li className="navbox"><Link className='underline' activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={100} >Projects</Link></li>
            <li className="navbox"><Link className='underline' activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={100} >Contact</Link></li>
        </ul>
  </div>
  </>
  );
}

export default Navbar;