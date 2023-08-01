import './intropg.css';
import { Link } from "react-scroll";

function Intropg() {
  return (
    <div className='introduction'>
      <div className='introcontainer'>
          <img className='faceshot' src={require('./FaceShot.jpg')} alt=" not found"/>
          <h1 className='quote'>
            <div className='line' >Eduardo A. Corazon</div>
            <div className='line'>Cybersecurity Engineer</div>
            <div>
              <div className='rootcontainer'>
              <Link className='rootintro' activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={100}>
                root@kali:~# Nice to meet you!</Link>
              </div>
            </div>
          </h1>
      </div>
      <Link className='scrolldown' activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={100}>
        <div className='boxscroll'>
          <div className='arrowcase'>
            <div className='arrow'/>
          </div>
        </div>
        </Link>
    </div>
  );
}

export default Intropg;
