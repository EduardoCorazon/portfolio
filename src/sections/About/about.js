import './about.css'
function About() {
    return (
      <div>
        <div className='aboutcontainer'>
         <div className='bghold'/> 
        <div className ='fullbgleftinit'>
          

          <h1 className='abouttitle' id='about'>A little bit about me...</h1>
          <div className='aboutcontent'>
            <div className='abouttext'>
            <h3 className='aboutint'>Hello! I'm Eddy</h3>
            <p className='aboutpara'>
              
            Cybersecurity engineer with 3+ years of experience helping companies implement secure policies by explaining and developing security solutions in ways business owners understand. Background in electrical engineering and computer science with strong verbal and presentation skills.

              I'm Currently Working on my New portfolio but,
              Here's the link to my original portfolio:
              <a color='red'href="https://eduardocorazon.github.io/my-portfolio/">https://eduardocorazon.github.io/my-portfolio/</a>
            </p>
            </div>
            <a href='https://www.credly.com/badges/bd9e1020-6a65-4ebe-83c0-5c759a41f5e2/public_url'>
              <img className='certifications' src={require('./CompTIA_Security_2Bce.png')} alt="you can click here to check my credential status" />
            </a>
            

          </div>
        </div>
        <div className='tra1'/>
        
        

      </div>


      
      </div>
    );
  }
  
  export default About;