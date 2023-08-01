import './about.css'
function About() {
    return (
      <div>
        <div className='aboutcontainer' id='about'>
         <div className='bghold'/> 
        <div className ='fullbgleftinit'>
          

          <h1 className='abouttitle'>A little bit about me...</h1>
          <div className='aboutcontent'>
            <div className='abouttext'>
<<<<<<< HEAD
            <h3 className='aboutint'>Hi there! I'm Eddy :) </h3>
            <p className='aboutpara'>
              
            I'm a Cloud Cybersecurity Engineer with a specialization in AWS services and a background in both CS and Electrical Engineering. I try my best in helping companies implement secure policies by explaining and developing security solutions in ways business owners understand. 
            
            </p>
            
            
    
            </div>
            

            
          </div>
          <div className='socials2'>
              <a href='https://www.linkedin.com/in/eduardo-corazon-21b362222/'><img className='socials3' src={require('./linkedin.png')} alt="Linkedin"/></a>
              <a href='https://github.com/EduardoCorazon'><img className='socials3' src={require('./github.png')} alt="github"/></a>
              </div>
=======
            <h3 className='aboutint'>Hello! I'm Eddy</h3>
            <p className='aboutpara'>
              
            Cybersecurity engineer with 3+ years of experience helping companies implement secure policies by explaining and developing security solutions in ways business owners understand. Background in electrical engineering and computer science with strong verbal and presentation skills.

              
            </p>
            </div>
            <a href='https://www.credly.com/badges/bd9e1020-6a65-4ebe-83c0-5c759a41f5e2/public_url'>
              <img className='certifications' src={require('./CompTIA_Security_2Bce.png')} alt="you can click here to check my credential status" />
            </a>
            

          </div>
>>>>>>> f50820a0fcbfadba3e3695fd2d2c06eb4cbc3845
        </div>
        <div className='tra1'/>
        
        

      </div>


      
      </div>
    );
  }
  
  export default About;