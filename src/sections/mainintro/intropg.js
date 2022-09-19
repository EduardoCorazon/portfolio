import './intropg.css';

function Intropg() {
  return (
    <div className='introduction'>
      <div className='introcontainer'>
          <img className='faceshot' src={require('./FaceShot.jpg')} alt=" not found"/>
          <h1 className='quote'>
            <div className='line' >Eduardo A. Corazon</div>
            <div className='line'>Cybersecurity proffesional</div>
            <div>
              <div className='rootcontainer'>
                <a className='rootintro' href='#about'>root@kali:~# Nice to meet you!</a>
              </div>
            </div>
          </h1>
      </div>
      <a className='scrolldown' href="#about">
        <div className='boxscroll'>
          <div className='arrowcase'>
            <div className='arrow'/>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Intropg;
